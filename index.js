import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

console.log('hello')

const app = {
  myClick() {
    console.log("hello");
  },
  app:{
    name:"sagar"
  },
  
};


window.greece=app
window.onload = function () {
  document.getElementById("greeceAppName").textContent = greece.app.name;
};