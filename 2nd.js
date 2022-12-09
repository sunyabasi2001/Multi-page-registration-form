const form2Button = document.getElementById("form2-submit-btn");

//Form2 JS Code
const onForm2Submit = function (e) {
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values
  let HSCInstName = document.getElementById("HSCInstName").value;
  let HSCBoard = document.getElementById("HSCBoard").value;
  let HSCScore = document.getElementById("HSCScore").value;
  let SSCInstName = document.getElementById("SSCInstName").value;
  let SSCBoard = document.getElementById("SSCBoard").value;
  let SSCScore = document.getElementById("SSCScore").value;
  let currentDegree = document.getElementById("currentDegree").value;
  let currentInstName = document.getElementById("currentInstName").value;
  let totalScore = document.getElementById("totalScore").value;
  let bl = document.getElementById("bl").value;

  const formValues2 = {
    HSCInstName,
    HSCBoard,
    HSCScore,
    SSCInstName,
    SSCBoard,
    SSCScore,
    currentDegree,
    currentInstName,
    totalScore,
    bl,
  };

  console.log(formValues2);

  //Form valid condition
  let isFormValid =
    HSCInstName &&
    HSCBoard &&
    HSCScore &&
    SSCInstName &&
    SSCBoard &&
    SSCScore &&
    currentDegree &&
    currentInstName &&
    totalScore &&
    bl;

  if (isFormValid) {
    // save form2 values to localstorage
    localStorage.setItem("form2", JSON.stringify(formValues2));
    location.href = "redgForm3.html";
  } else {
    alert("Please fill all fields !");
  }
};

form2Button.addEventListener("click", onForm2Submit);