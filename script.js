window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailFormSection = document.getElementById("sign-up-form");
    const successMessageSection = document.getElementById("success-message");
    const mobileImaege = document.querySelector(".illustration-mobile");
    const dismissButton = document.getElementById("dismiss-message");

    dismissButton.addEventListener("click", () => {
        successMessageSection.classList.add("hidden");
        emailFormSection.classList.remove("hidden");
        mobileImaege.classList.remove("hidden");
        form.reset();
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add("error");
            errorMessage.style.display = "block";
        } else {
            mobileImaege.classList.add("hidden");
            emailInput.classList.remove("error");
            errorMessage.style.display = "none";
            emailFormSection.classList.add("hidden");
            successMessageSection.classList.remove("hidden");
            form.reset();
        }
    });
});
