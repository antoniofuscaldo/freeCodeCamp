document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");
  const exampleItems = document.querySelectorAll(".example-item");

  exampleItems.forEach((item) => {
    item.addEventListener("click", function () {
      userInput.value = this.textContent;
    });
  });

  checkBtn.addEventListener("click", function () {
    const phoneNumber = userInput.value.trim();

    if (!phoneNumber) {
      alert("Please provide a phone number");
      return;
    }

    const isValid = validatePhoneNumber(phoneNumber);

    resultsDiv.textContent = isValid
      ? `Valid US number: ${phoneNumber}`
      : `Invalid US number: ${phoneNumber}`;

    resultsDiv.className = isValid ? "valid" : "invalid";
  });

  clearBtn.addEventListener("click", function () {
    resultsDiv.textContent = "";
    resultsDiv.className = "";
    userInput.value = "";
  });

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return phoneRegex.test(phoneNumber);
  }

  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkBtn.click();
    }
  });
});
