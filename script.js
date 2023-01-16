//* Defining keys to generate password
const keys = {
  uppercase_characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase_characters: "abcdefghijklmnopqrstuvwxyz",
  number_values: "1234567890",
  special_characters: "!@#~$%^&*()-=_+.,;:'/?`{}[]",
};

//* For checkboxes
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const special = document.getElementById("special");

//* Defining variable to store password
var password = "";

//* Definig variable, used when two or conditions more conditions are combined
var combine;

//* Defining functions for differnet possibilities

function all_check(length) {
  combine =
    keys.uppercase_characters +
    keys.lowercase_characters +
    keys.number_values +
    keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function upperLower(length) {
  combine = keys.uppercase_characters + keys.lowercase_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function upperNumber(length) {
  combine = keys.uppercase_characters + keys.number_values;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function upperSpecial(length) {
  combine = keys.uppercase_characters + keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function lowerNumber(length) {
  combine = keys.lowercase_characters + keys.number_values;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function lowerSpecial(length) {
  combine = keys.lowercase_characters + keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}
function numberSpecial(length) {
  combine = keys.number_values + keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}

// TODO
function upperLowerNumber(length) {
  combine =
    keys.number_values + keys.uppercase_characters + keys.lowercase_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}

//TODO
function upperLowerSpecial(length) {
  combine =
    keys.lowercase_characters +
    keys.uppercase_characters +
    keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}

// TODO
function upperNumberSpecial(length) {
  combine =
    keys.uppercase_characters + keys.number_values + keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}

// TODO
function lowerNumberSpecial(length) {
  combine =
    keys.number_values + keys.lowercase_characters + keys.special_characters;
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return password;
}

function uppercase_pass(length) {
  for (let i = 0; i < length; i++) {
    password += keys.uppercase_characters.charAt(
      Math.floor(Math.random() * keys.uppercase_characters.length)
    );
  }
  return password;
}
function number_pass(length) {
  for (let i = 0; i < length; i++) {
    password += keys.number_values.charAt(
      Math.floor(Math.random() * keys.number_values.length)
    );
  }
  return password;
}
function lowercase_pass(length) {
  for (let i = 0; i < length; i++) {
    password += keys.lowercase_characters.charAt(
      Math.floor(Math.random() * keys.lowercase_characters.length)
    );
  }
  return password;
}
function special_pass(length) {
  for (let i = 0; i < length; i++) {
    password += keys.special_characters.charAt(
      Math.floor(Math.random() * keys.special_characters.length)
    );
  }
  return password;
}

//* Password Generate Function for different possibilities

function generatePassword() {
  const passlen = document.getElementById("length").value;
  if (
    uppercase.checked &&
    lowercase.checked &&
    numbers.checked &&
    special.checked
  ) {
    password = "";
    console.log(all_check(passlen));
  } else if (uppercase.checked && numbers.checked && lowercase.checked) {
    password = "";
    console.log(upperLowerNumber(passlen));
  } else if (uppercase.checked && special.checked && lowercase.checked) {
    password = "";
    console.log(upperLowerSpecial(passlen));
  } else if (uppercase.checked && special.checked && numbers.checked) {
    password = "";
    console.log(upperNumberSpecial(passlen));
  } else if (lowercase.checked && special.checked && numbers.checked) {
    password = "";
    console.log(lowerNumberSpecial(passlen));
  } else if (uppercase.checked && lowercase.checked) {
    password = "";
    console.log(upperLower(passlen));
  } else if (uppercase.checked && numbers.checked) {
    password = "";
    console.log(upperNumber(passlen));
  } else if (uppercase.checked && special.checked) {
    password = "";
    console.log(upperSpecial(passlen));
  } else if (lowercase.checked && special.checked) {
    password = "";
    console.log(lowerSpecial(passlen));
  } else if (lowercase.checked && numbers.checked) {
    password = "";
    console.log(lowerNumber(passlen));
  } else if (special.checked && numbers.checked) {
    password = "";
    console.log(numberSpecial(passlen));
  } else if (lowercase.checked) {
    password = "";
    console.log(lowercase_pass(passlen));
  } else if (uppercase.checked) {
    password = "";
    console.log(uppercase_pass(passlen));
  } else if (numbers.checked) {
    password = "";
    console.log(number_pass(passlen));
  } else if (special.checked) {
    password = "";
    console.log(special_pass(passlen));
  } else {
    alert("Please select at least one checkbox");
  }
}

//* Adding Event in Generate Password Button
submit.addEventListener("click", () => {
  generatePassword();
});
