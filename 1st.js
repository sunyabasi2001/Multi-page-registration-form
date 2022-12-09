const form1Button = document.getElementById("form1-submit-btn");

const onForm1Submit = function (e) {
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values
  let user = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
  };
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let fatherName = {
    firstName: document.getElementById("fatherfirstname").value,
    lastName: document.getElementById("fatherlastname").value,
  };
  let motherName = {
    firstName: document.getElementById("motherfirstname").value,
    lastName: document.getElementById("motherlastname").value,
  };
  let gender = document.querySelector('input[name="gender"]').value;
  let nationality = document.getElementById("nation").value;
  let address = {
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
  };
  let number = {
    telephone: document.getElementById("hNumber").value.length > 0 || null,
    mobile: document.getElementById("mNumber").value,
  };

  const formValues1 = {
    user,
    dob: new Date(dob).toDateString(),
    email,
    fatherName,
    motherName,
    gender,
    nationality,
    address,
    number,
  };

  // form valid condition
  let isFormValid =
    user.firstName &&
    user.lastName &&
    dob &&
    email &&
    fatherName.firstName &&
    fatherName.lastName &&
    motherName.firstName &&
    motherName.lastName &&
    gender &&
    nationality &&
    address.street &&
    address.city &&
    address.country &&
    number.mobile;

  function isValidMobileNumber() {
    return number.mobile.length === 10;
  }

  if (isFormValid) {
    if (isValidMobileNumber) {
      localStorage.setItem("form1", JSON.stringify(formValues1));
      location.href = "redgForm2.html";
    } else {
      // not valid number
      alert("Please enter valid mobile number");
    }
    // save form1 values to localstorage
  } else {
    alert("Please fill all fields !");
  }
};

form1Button.addEventListener("click", onForm1Submit);