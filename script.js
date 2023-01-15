//* Code generating random password

function generatePassword(length) {
  let uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890";
  let special_characters = "`!@#$%^&*:;()/[]<>,.?-+=''";
  let combine =
    uppercase_characters + lowercase_characters + numbers + special_characters;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  console.log(password);
}


btn.addEventListener("click",()=>{
    generatePassword(10)
})