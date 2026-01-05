const button = document.getElementById("sign-up-button");
button.addEventListener("click", function (event) {
  event.preventDefault();
  let ind = true;
  if (document.getElementById("firstnameinput").value == "") {
    ind = false;
    document.getElementById("firstnameerror").style.color =
      "rgba(255, 0, 0, 1)";
    document.getElementById("firstnameinput").style.backgroundColor =
      "rgba(255, 0, 0, 0.1)";
  } else {
    document.getElementById("firstnameerror").style.color =
      "rgba(255, 0, 0, 0)";
    document.getElementById("firstnameinput").style.backgroundColor =
      "rgba(255, 0, 0, 0)";
  }

  if (document.getElementById("lastnameinput").value == "") {
    ind = false;
    document.getElementById("lastnameerror").style.color = "rgba(255, 0, 0, 1)";
    document.getElementById("lastnameinput").style.backgroundColor =
      "rgba(255, 0, 0, 0.1)";
  } else {
    document.getElementById("lastnameerror").style.color = "rgba(255, 0, 0, 0)";
    document.getElementById("lastnameinput").style.backgroundColor =
      "rgba(255, 0, 0, 0)";
  }

  if (document.getElementById("emailinput").checkValidity()) {
    document.getElementById("emailerror").style.color = "rgba(255, 0, 0, 0)";
    document.getElementById("emailinput").style.backgroundColor =
      "rgba(255, 0, 0, 0)";
  } else {
    ind = false;
    if (document.getElementById("emailinput").value == "") {
      document.getElementById("emailerror").innerHTML = "Enter Email!";
      document.getElementById("emailerror").style.color = "rgba(255, 0, 0, 1)";
      document.getElementById("emailinput").style.backgroundColor =
        "rgba(255, 0, 0, 0.1)";
    } else {
      document.getElementById("emailerror").innerHTML = "Invalid Email!";
      document.getElementById("emailerror").style.color = "rgba(255, 0, 0, 1)";
      document.getElementById("emailinput").style.backgroundColor =
        "rgba(255, 0, 0, 0.1)";
    }
  }

  let passsize = document.getElementById("passwordinpbox").value;
  if (passsize.length < 8) {
    if (passsize.length == 0) {
      document.getElementById("passworderror").innerHTML = "Enter Password!";
      document.getElementById("passworderror").style.color =
        "rgba(255, 0, 0, 1)";
      document.getElementById("passwordinpbox").style.backgroundColor =
        "rgba(255, 0, 0, 0.1)";
    } else {
      document.getElementById("passworderror").innerHTML =
        "Length must be more than 8 characters!";
      document.getElementById("passworderror").style.color =
        "rgba(255, 0, 0, 1)";
      document.getElementById("passwordinpbox").style.backgroundColor =
        "rgba(255, 0, 0, 0.1)";
    }
  } else {
    document.getElementById("passworderror").style.color = "rgba(255, 0, 0, 0)";
    document.getElementById("passwordinpbox").style.backgroundColor =
      "rgba(255, 0, 0, 0)";
  }

  if (document.getElementById("countryselector").value == "") {
    ind = false;
    document.getElementById("countryerror").style.color = "rgba(255, 0, 0, 1)";
    document.getElementById("countryselector").style.backgroundColor =
      "rgba(255, 0, 0, 0.1)";
  } else {
    document.getElementById("countryerror").style.color = "rgba(255, 0, 0, 0)";
    document.getElementById("countryselector").style.backgroundColor =
      "rgba(255, 0, 0, 0)";
  }

  const c1 = document.getElementById("js");
  const c2 = document.getElementById("cpp");
  const c3 = document.getElementById("java");
  const c4 = document.getElementById("html");
  const c5 = document.getElementById("css");
  const c6 = document.getElementById("php");
  const c7 = document.getElementById("python");
  const c8 = document.getElementById("none");

  if (
    c1.checked == false &&
    c2.checked == false &&
    c3.checked == false &&
    c4.checked == false &&
    c5.checked == false &&
    c6.checked == false &&
    c7.checked == false &&
    c8.checked == false
  ) {
    ind = false;
    document.getElementById("checkboxerror").style.color = "rgba(255, 0, 0, 1)";
  } else {
    document.getElementById("checkboxerror").style.color = "rgba(255, 0, 0, 0)";
  }

  if (ind == true) window.location.href = "page2.html";
});
