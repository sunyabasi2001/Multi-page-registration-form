const form3Button = document.getElementById("form3-submit-btn");

const onForm3Submit = function (e) {
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values
  let photo = document.getElementById("photo").value;
  let HSCMarkSheet = document.getElementById("HSCMarkSheet").value;
  let SSCMarkSheet = document.getElementById("SSCMarkSheet").value;
  let AllSemMarkSheet = document.getElementById("AllSemMarkSheet").value;

  const formValues3 = {
    photo,
    HSCMarkSheet,
    SSCMarkSheet,
    AllSemMarkSheet,
  };

  //Form valid condition
  let isFormValid = photo && HSCMarkSheet && SSCMarkSheet && AllSemMarkSheet;

  if (isFormValid) {
    // save form3 values to localstorage
    localStorage.setItem("form3", JSON.stringify(formValues3));
    document.body.innerHTML = "<h1>Submited Successfully</h1>";
  } else {
    alert("Please fill all fields !");
  }
};

form3Button.addEventListener("click", onForm3Submit);