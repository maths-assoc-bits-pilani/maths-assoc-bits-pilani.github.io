const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");

const openMenu = () => {
	menu.classList.remove("w-0");
	menu.classList.add("w-1/2");
	closeMenu.classList.remove("rotate-45");
};

const closeMenuFunc = () => {
	menu.classList.add("w-0");
	menu.classList.remove("w-1/2");
	closeMenu.classList.add("rotate-45");
};

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
window.addEventListener("click", (e) => {
	if (!menu.contains(e.target) && e.target !== menuToggle && e.target !== closeMenu) {
		closeMenuFunc();
	}
});

const API_BASE = "https://math-assoc-api.onrender.com";

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
	fetch(`${API_BASE}/auth/google`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token }),
	})
		.then((res) => res.json())
		.then(async (data) => {
			if (data.success) {
				globalName = data.user.name;
				globalEmail = data.user.email;

				const submissionStatus = await checkSubmissionStatus(globalEmail);

				if (submissionStatus.hasSubmitted && submissionStatus.isCorrect) {
					const alreadySubmittedModal = document.querySelector(".already-submitted");
					alreadySubmittedModal.classList.remove("hidden");
					alreadySubmittedModal.classList.add("open");
				} else if (submissionStatus.maxAttemptsReached) {
					const attemptsComplete = document.querySelector(".attempts-complete");
					attemptsComplete.classList.remove("hidden");
					attemptsComplete.classList.add("open");
				} else {
					const carousel = new bootstrap.Carousel("#carouselExample");
					carousel.next();
				}
			} else {
				alert(data.error || "Google sign in failed. Please try again.");
			}
		})
		.catch((err) => {
			console.error("Error during Google sign in:", err);
			alert("Server error. Please try again later.");
		});
}

window.handleCredentialResponse = handleCredentialResponse;

const responseForm = document.getElementById("response-form");
let globalName = "";
let globalEmail = "";

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
		carousel.to(2);
	} else if (modal.classList.contains("incorrect-modal")) {
		carousel.to(1);
	}
});
