import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function GeneradorExcusa() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let ramdomWho = who[Math.floor(Math.random() * who.length)];
    let ramdomWhat = what[Math.floor(Math.random() * what.length)];
    let ramdomWhen = when[Math.floor(Math.random() * when.length)];
    let ramdomAction = action [Math.floor(Math.random() * action.length)];

    let excusa = ramdomWho + " " + ramdomAction + " " + ramdomWhat + " " + ramdomWhen ;

    document.getElementById("excuse").innerHTML = excusa;

  console.log("Hello Rigo from the console!");
};
