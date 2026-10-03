document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // LOGIN ELEMENTS
    // =========================

    const loginForm = document.getElementById("loginForm");
    const loginPage = document.getElementById("loginPage");
    const campingPage = document.getElementById("campingPage");

    const loginName = document.getElementById("loginName");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginAge = document.getElementById("loginAge");
    const loginError = document.getElementById("loginError");

    const welcomeMessage =
        document.getElementById("welcomeMessage");


    // =========================
    // LOGIN
    // =========================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = loginName.value.trim();
        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();
        const age = loginAge.value.trim();


        // Clear previous error
        loginError.textContent = "";


        // Check Name
        if (name === "") {
            loginError.textContent =
                "Please enter your name.";
            return;
        }


        // Check Email
        if (email === "") {
            loginError.textContent =
                "Please enter your email.";
            return;
        }


        // Check valid email
        if (!email.includes("@")) {
            loginError.textContent =
                "Please enter a valid email address.";
            return;
        }


        // Check Password
        if (password === "") {
            loginError.textContent =
                "Please enter your password.";
            return;
        }


        // Check Password length
        if (password.length < 4) {
            loginError.textContent =
                "Password must be at least 4 characters.";
            return;
        }


        // Check Age
        if (age === "" || Number(age) < 1) {
            loginError.textContent =
                "Please enter your age.";
            return;
        }


        // =========================
        // SUCCESSFUL LOGIN
        // =========================

        let ageMessage = "";

        if (Number(age) >= 18) {
            ageMessage = "You are an adult.";
        } else {
            ageMessage = "You are a minor.";
        }


        // Display welcome message
        welcomeMessage.textContent =
            "Hello, " +
            name +
            "! " +
            ageMessage +
            " Welcome to Lakbay Camping Site.";


        // HIDE LOGIN
        loginPage.classList.add("hidden");


        // SHOW CAMPING SITE
        campingPage.classList.remove("hidden");


        // Go to top of camping page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =========================
    // LOGOUT
    // =========================

    const logoutBtn =
        document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function () {

        campingPage.classList.add("hidden");

        loginPage.classList.remove("hidden");

        loginForm.reset();

        loginError.textContent = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =========================
    // BOOK NOW
    // =========================

    const bookButtons =
        document.querySelectorAll(".book-btn");

    const bookingBox =
        document.getElementById("bookingBox");

    const bookingPlace =
        document.getElementById("bookingPlace");

    const bookingPrice =
        document.getElementById("bookingPrice");

    const confirmBooking =
        document.getElementById("confirmBooking");

    const bookingMessage =
        document.getElementById("bookingMessage");


    let selectedPlace = "";
    let selectedPrice = "";


    bookButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedPlace =
                button.getAttribute("data-place");

            selectedPrice =
                button.getAttribute("data-price");


            bookingPlace.textContent =
                selectedPlace;

            bookingPrice.textContent =
                selectedPrice;

            bookingMessage.textContent = "";

            bookingBox.classList.remove("hidden");

            bookingBox.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    // =========================
    // CONFIRM BOOKING
    // =========================

    confirmBooking.addEventListener("click", function () {

        if (selectedPlace === "") {
            return;
        }

        bookingMessage.textContent =
            "Reservation confirmed for " +
            selectedPlace +
            "! Thank you for choosing Lakbay Camping Site.";

    });


    // =========================
    // FEEDBACK
    // =========================

    const feedbackForm =
        document.getElementById("feedbackForm");


    feedbackForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const rating =
            document.getElementById("rating").value;

        const comments =
            document.getElementById("comments").value.trim();

        const errorBox =
            document.getElementById("errormsg");


        errorBox.textContent = "";


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            rating === "" ||
            comments === ""
        ) {

            errorBox.textContent =
                "Please fill in all fields before submitting.";

            return;
        }


        const ratingLabels = {

            "5": "5 - Amazing",
            "4": "4 - Very Good",
            "3": "3 - Average",
            "2": "2 - Needs Improvement",
            "1": "1 - Poor"

        };


        document.getElementById("outName").textContent =
            name;

        document.getElementById("outEmail").textContent =
            email;

        document.getElementById("outSubject").textContent =
            subject;

        document.getElementById("outRating").textContent =
            ratingLabels[rating];

        document.getElementById("outMessage").textContent =
            comments;


        document
            .getElementById("outputContainer")
            .classList
            .remove("hidden");


        feedbackForm.reset();


        document
            .getElementById("outputContainer")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});