// Mobile Menu Logic
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");

if (menu && menuToggle && closeMenu) {
	const openMenu = () => {
		menu.classList.remove("translate-x-full");
		document.body.style.overflow = "hidden";
	};

	const closeMenuFunc = () => {
		menu.classList.add("translate-x-full");
		document.body.style.overflow = "";
	};

	menuToggle.addEventListener("click", openMenu);
	closeMenu.addEventListener("click", closeMenuFunc);
	window.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && e.target !== menuToggle && e.target !== closeMenu) {
			closeMenuFunc();
		}
	});
}

// Carousel Logic (for main page)
const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const carouselItems = document.querySelectorAll('.carousel-item');

if (carouselInner && prevButton && nextButton && carouselItems.length > 0) {
	let currentIndex = 0;

	function updateCarousel() {
		const offset = -currentIndex * 100;
		carouselInner.style.transform = `translateX(${offset}%)`;
	}

	nextButton.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % carouselItems.length;
		updateCarousel();
	});

	prevButton.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
		updateCarousel();
	});
}

function toggleGoogleLoading(show) {
	const loadingEl = document.getElementById("google-loading");
	const signinContainer = document.getElementById("google-signin-container");
	if (loadingEl && signinContainer) {
		if (show) {
			loadingEl.style.display = "block";
			signinContainer.style.display = "none";
		} else {
			loadingEl.style.display = "none";
			signinContainer.style.display = "flex";
		}
	}
}

window.addEventListener('load', () => {
	setTimeout(() => {
		const googleButton = document.querySelector('[role="button"][aria-labelledby]');
		if (googleButton) {
			googleButton.addEventListener('click', () => {
				toggleGoogleLoading(true);
			});
		}
	}, 1000);
});

// Fetch Current Puzzle
async function loadCurrentPuzzle() {
	try {
		const res = await fetch(`${API_BASE}/puzzle/current`);
		const data = await res.json();
		
		if (data.success) {
			// Inject Question
			const questionContainer = document.querySelector('.puzzle-question');
			if (questionContainer) {
				questionContainer.innerHTML = data.questionHtml;
			}
			
			const questionImageContainer = document.querySelector('.puzzle-question-image');
			if (questionImageContainer) {
				if (data.questionImageUrl) {
					questionImageContainer.innerHTML = `<img src="${data.questionImageUrl}" alt="Puzzle Question Image" class="w-1/2">`;
				} else {
					questionImageContainer.innerHTML = '';
				}
			}

			// Store week globally if needed for submission context
			window.currentPuzzleWeek = data.week;

			if (window.MathJax && window.MathJax.typesetPromise) {
				window.MathJax.typesetPromise();
			}
		} else {
			const questionContainer = document.querySelector('.puzzle-question');
			if (questionContainer) {
				questionContainer.innerHTML = `<p class="text-center text-red-500 italic">No active puzzle found or error loading puzzle.</p>`;
			}
		}
	} catch (err) {
		console.error("Error loading current puzzle:", err);
		const questionContainer = document.querySelector('.puzzle-question');
		if (questionContainer) {
			questionContainer.innerHTML = `<p class="text-center text-red-500 italic">Failed to connect to the server.</p>`;
		}
	}
}

// Call on page load
loadCurrentPuzzle();

async function checkSubmissionStatus(email) {
	try {
		const res = await fetch(`${API_BASE}/check-submission`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email }),
		});
		const data = await res.json();
		return data;
	} catch (err) {
		console.error("Error checking submission status:", err);
		return { hasSubmitted: false };
	}
}

function handleCredentialResponse(response) {
	const token = response.credential;
    console.log("ID Token received: ", token ? "Yes" : "No");
    
	fetch(`${API_BASE}/verify-google`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ idToken: token }),
	})
		.then((res) => res.json())
		.then(async (data) => {
			if (data.success) {
				globalName = data.user.name;
				globalEmail = data.user.email;
				globalToken = token;
				
				const submissionStatus = await checkSubmissionStatus(globalEmail);
				toggleGoogleLoading(false);
				
				if (submissionStatus.alreadyCorrect) {
					await loadSolution(globalEmail, token);
					const alreadySubmittedModal = document.querySelector(".already-submitted");
					alreadySubmittedModal.classList.remove("hidden");
					alreadySubmittedModal.classList.add("open");
				} else if (submissionStatus.maxAttemptsReached) {
					await loadSolution(globalEmail, token);
					const attemptsComplete = document.querySelector(".attempts-complete");
					attemptsComplete.classList.remove("hidden");
					attemptsComplete.classList.add("open");
				} else {
					attemptCount = submissionStatus.attemptCount || 0;
					const carousel = new bootstrap.Carousel("#carouselExample");
					carousel.next();
				}
			} else {
				toggleGoogleLoading(false);
				alert(data.error || "Google sign in failed. Please try again.");
			}
		})
		.catch((err) => {
			toggleGoogleLoading(false);
			console.error("Error during Google sign in:", err);
			alert("Server error. Please try again later.");
		});
} 

window.handleCredentialResponse = handleCredentialResponse;

const responseForm = document.getElementById("response-form");
let globalName = "";
let globalEmail = "";
let globalToken = "";

let attemptCount = 0;

const backButton = document.querySelector(".back-btn");
if (backButton) {
	backButton.addEventListener("click", (e) => {
		e.preventDefault();
		const carousel = new bootstrap.Carousel("#carouselExample");
		carousel.prev();
	});
}

responseForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	console.log("Correct modal: ", document.querySelector(".correct-modal"));
	console.log("Incorrect modal: ", document.querySelector(".incorrect-modal"));
	console.log("Attempts complete modal: ", document.querySelector(".attempts-complete"));

	const responseField = document.getElementById("response");
	const answer = responseField.value.trim();
	if (!answer) {
		alert("Please enter a response!");
		return;
	}
	try {
		const res = await fetch(`${API_BASE}/submit`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: globalName,
				email: globalEmail,
				answer,
			}),
		});
		const data = await res.json();
		const carousel = new bootstrap.Carousel("#carouselExample");
		if (res.ok && data.success) {
			if (data.isCorrect) {
				await loadSolution(globalEmail, globalToken);
				const correctModal = document.querySelector(".correct-modal");
				correctModal.classList.remove("hidden");
				correctModal.classList.add("open");
			} else {
				attemptCount++;
				if (attemptCount >= 3) {
					const attemptsComplete = document.querySelector(".attempts-complete");
					attemptsComplete.classList.remove("hidden");
					attemptsComplete.classList.add("open");
				} else {
					const incorrectText = document.querySelector(".incorrect-text");
					incorrectText.innerHTML = `<h2 class="text-2xl mb-6">Incorrect!</h2>
                    <p class="text-base">You have ${
						3 - attemptCount
					} attempts left. Try again!</p>`;
					const incorrectModal = document.querySelector(".incorrect-modal");
					incorrectModal.classList.remove("hidden");
					incorrectModal.classList.add("open");
					carousel.to(1);
				}
			}
		} else {
			alert(data.error || "Unknown error occurred.");
		}
	} catch (err) {
		console.error("Error during submission:", err);
		alert("Server error. Please try again later.");
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.matches(".close-btn")) return;
	const btn = e.target;
	const modal = btn.closest(
		".correct-modal, .incorrect-modal, .attempts-complete, .already-submitted"
	);
	if (!modal) return;

	modal.classList.remove("open");
	modal.classList.add("hidden");

	const carousel = new bootstrap.Carousel("#carouselExample");
	if (
			modal.classList.contains("correct-modal") ||
			modal.classList.contains("attempts-complete") ||
			modal.classList.contains("already-submitted")
	) {
			// Before showing the solution carousel, ensure it is loaded if not already
			carousel.to(2);
	} else if (modal.classList.contains("incorrect-modal")) {
			carousel.to(1);
	}
});

// Load Solution Helper
async function loadSolution(email, idToken) {
	try {
		const res = await fetch(`${API_BASE}/get-solution`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, idToken }),
		});
		const data = await res.json();
		
		if (data.success) {
			const solutionContainer = document.querySelector('.puzzle-solution');
			if (solutionContainer) {
				solutionContainer.innerHTML = data.solutionHtml;
			}
			
			const solutionImageContainer = document.querySelector('.puzzle-solution-image');
			if (solutionImageContainer) {
				if (data.solutionImageUrl) {
					solutionImageContainer.innerHTML = `<img src="${data.solutionImageUrl}" alt="Puzzle Solution Image" class="w-1/2">`;
				} else {
					solutionImageContainer.innerHTML = '';
				}
			}

			if (window.MathJax && window.MathJax.typesetPromise) {
				window.MathJax.typesetPromise();
			}
		}
	} catch (err) {
		console.error("Error loading solution:", err);
	}
}
