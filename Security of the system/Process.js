function processUserInput() {
    // Get the input elements and the output element
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const badgeNumberInput = document.getElementById("badgeNumber");
    const submitBtn = document.getElementById("submitBtn");
    const output = document.getElementById("output");
  
    // Add an event listener to the submit button
    submitBtn.addEventListener("click", () => {
      // Get the values from the input elements
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const badgeNumber = badgeNumberInput.value;
  
      // Concatenate the first and last names
      const fullName = firstName + " " + lastName;
  
      // Validate the length of the concatenated name
      if (fullName.length > 20) {
        alert("The concatenated name cannot be more than 20 characters.");
        return;
      }
  
      // Validate the badge number
      if (isNaN(badgeNumber) || badgeNumber.length > 3) {
        alert("The badge number must be a number with 3 or less digits.");
        return;
      }
  
      // Display the concatenated name and badge number
      output.textContent = `Welcome ${fullName} with badge number ${badgeNumber}.`;
    });
  }
  