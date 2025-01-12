document.addEventListener("DOMContentLoaded", () => {
	const menu = document.getElementById("menu");
	const menuToggle = document.getElementById("menu-toggle");
	const closeMenu = document.getElementById("close-menu");

	// Toggle menu open/close
	const openMenu = () => {
		menu.classList.remove("w-0");
		menu.classList.add("w-1/2"); // Open menu
		closeMenu.classList.remove("rotate-45"); // Reset cross rotation
	};

	// Function to close menu
	const closeMenuFunc = () => {
		menu.classList.add("w-0");
		menu.classList.remove("w-1/2"); // Close menu
		closeMenu.classList.add("rotate-45"); // Rotate cross button
	};

	// Toggle menu
	menuToggle.addEventListener("click", openMenu);

	// Close menu with close button
	closeMenu.addEventListener("click", closeMenuFunc);

	// Close menu when clicking outside
	window.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && e.target !== menuToggle && e.target !== closeMenu) {
			closeMenuFunc();
		}
	});

	const carousel = new bootstrap.Carousel("#carouselExample");
	const nextBtn = document.getElementById("next-btn");
	const backBtn = document.getElementById("back-btn");
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const singleForm = document.getElementById("single-form");
	const nameError = document.getElementById("name-error");
	const emailError = document.getElementById("email-error");

	// Handle "Next" button click
	nextBtn.addEventListener("click", () => {
		const name = nameInput.value.trim();
		const email = emailInput.value.trim();

		let hasError = false;

		// Validate Name
		if (!name) {
			nameInput.classList.add("is-invalid");
			nameError.textContent = "Name is required.";
			nameError.style.display = "block";
			hasError = true;
		} else {
			nameInput.classList.remove("is-invalid");
			nameError.style.display = "none";
		}

		// Validate Email
		if (!email) {
			emailInput.classList.add("is-invalid");
			emailError.textContent = "Email is required.";
			emailError.style.display = "block";
			hasError = true;
		} else {
			emailInput.classList.remove("is-invalid");
			emailError.style.display = "none";
		}

		// Proceed if no errors
		if (!hasError) {
			carousel.next(); // Move to the next slide
		}
	});

	// Handle "Back" button click
	backBtn.addEventListener("click", () => {
		carousel.prev(); // Move to the previous slide
	});

	// Handle the single form submission
	singleForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(singleForm);
		const data = Object.fromEntries(formData.entries());

		if (!data.response) {
			alert("Please enter your response!");
			return;
		}

		// Send the data to the server
		fetch("http://localhost:8000/responses/submit-response/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.success) {
					alert("Response submitted successfully!");
				} else {
					alert(`Error: ${response.error}`);
				}
			})
			.catch((error) => {
				console.error("Error submitting response:", error);
			});
	});
});
