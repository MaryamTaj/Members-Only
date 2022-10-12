const password = "what";
const digits = "732";

/* Find classes or IDs */
const clue1 = document.querySelector("#clue-1");
const button = document.querySelector("#button");
const clue2 = document.querySelector("#clue-2");
const notification = document.querySelector("#notification");
const notification2 = document.querySelector("#notification-2");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

function timeRemaining(){
  notification.innerHTML = `Hurry! You have 30 seconds remaining!`
}
const timer = setTimeout(timeRemaining, 5000);

/* Your Code Here */
let keys = [];
let passwordEntered = false;
window.addEventListener("keypress", (e) => {
  keys.push(e.key);

  let attempt = keys.slice(-password.length);
  console.log(attempt);

  if (!passwordEntered && attempt.join('') === password){
    clue1.classList.add('hidden');
    button.classList.remove('hidden');
    passwordEntered = true;
    console.log('Woohoo');
  }

  const digitAttempt = keys.slice(-digits.length);
  if (passwordEntered && digitAttempt.join('') === digits){
    console.log(digitAttempt);
    page.classList.remove("has-background-black");
    body.innerHTML = '<figure class="image center"><img id="main" src="http://zacharytotah.com/wp-content/uploads/2017/09/DiCaprio-Welcome-to-the-Club-Meme.jpg" alt="Welcome to the Club"></figure>';
   }
 });
