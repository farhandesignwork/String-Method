
// =====================================
// PART A: QUICK DRILLS - STRING METHODS
// =====================================

let username = " Farhan_Khan99 ";
let city = "Karachi,Lahore,Islamabad,Multan";
let cnic = "42101-1234567-1";
let bio = "I am a MERN stack student learning JavaScript at Saylani.";

// 1. Remove extra spaces and print length
let cleanUsername = username.trim();
console.log("Clean Username:", cleanUsername);
console.log("Username Length:", cleanUsername.length);

// 2. Get last 2 digits of CNIC
console.log("Last 2 CNIC Digits:", cnic.slice(-2));

// 3. Split city and join with |
let cityArray = city.split(",");
console.log("City Array:", cityArray);
console.log("Joined Cities:", cityArray.join(" | "));

// 4. Check JavaScript word
console.log("Includes JavaScript:", bio.includes("JavaScript"));

// 5. Uppercase and lowercase
console.log("Uppercase Bio:", bio.toUpperCase());
console.log("Lowercase Bio:", bio.toLowerCase());

// 6. Count words in bio
let wordCount = bio.trim().split(/\s+/).length;
console.log("Bio Word Count:", wordCount);


// =====================================
// PART B: SIGNUP FORM VALIDATOR
// =====================================

// Get form fields
const signupForm = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const usernameInput = document.getElementById("username");
const phone = document.getElementById("phone");
const bioInput = document.getElementById("bio");

// Bonus: Automatically convert username to lowercase
usernameInput.addEventListener("input", function () {
    const cursorPosition = this.selectionStart;
    this.value = this.value.toLowerCase();
    this.setSelectionRange(cursorPosition, cursorPosition);
});

// Validate full name
function isNameValid() {
    const name = fullName.value.trim();

    return name.length >= 3 &&
           /^[A-Za-z ]+$/.test(name);
}

// Validate username
function isUsernameValid() {
    const usernameValue = usernameInput.value;

    return usernameValue.length >= 5 &&
           usernameValue.length <= 15 &&
           !/\s/.test(usernameValue);
}

// Validate phone number
function isPhoneValid() {
    return /^03\d{9}$/.test(phone.value);
}

// Validate bio
function isBioValid() {
    const bioValue = bioInput.value.trim();
    const words = bioValue === ""
        ? []
        : bioValue.split(/\s+/);

    return bioValue.length >= 50 &&
           words.length >= 10;
}

// Handle form submission
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!isNameValid()) {
        alert("Invalid Full Name! Use at least 3 letters and no numbers.");
        fullName.focus();
        return;
    }

    if (!isUsernameValid()) {
        alert("Invalid Username! Use 5-15 characters with no spaces.");
        usernameInput.focus();
        return;
    }

    if (!isPhoneValid()) {
        alert("Invalid Phone Number! Enter exactly 11 digits starting with 03.");
        phone.focus();
        return;
    }

    if (!isBioValid()) {
        alert("Invalid Bio! Enter at least 50 characters and 10 words.");
        bioInput.focus();
        return;
    }

    alert("Signup successful!");
});
