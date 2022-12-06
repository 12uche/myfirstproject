const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const nav = document.querySelector('.nav');
const navBar = document.getElementById("nav");
const logo1 = document.getElementById('logo1')
const logo = document.getElementById("logo")
console.log(123);
window.onscroll = e => {
  const offset = window.scrollY;
  offset > 50 ? nav.classList.add("scrolled"): 
  navBar.classList.remove("scrolled");
  offset > 50 ? logo1.classList.remove("d-none"):
  logo1.classList.add("d-none");
  offset > 50 ? document.getElementById('space').classList.add("d-none"):
  document.getElementById('space').classList.remove("d-none");
  offset > 50 ? navLink.classList.remove("link"):
  navLink.classList.add("link");
  offset < 20? logo.classList.remove("img"):
  logo.classList.add("img")
} 
 
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  document.body.classList.toggle('o');
});


const suBtn = document.querySelector('.subContact');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const eMail = document.getElementById('email');
const mEssage = document.getElementById('textarea');

suBtn.onclick = () => {
  if(fname.value == '') {
    document.querySelector('.req').style.display="block"
  }else document.querySelector('.req').style.display="none"
  if(lname.value == '') {
    document.querySelector('.req1').style.display="block"
  }else document.querySelector('.req1').style.display="none"
  if(eMail.value == '') {
    document.querySelector('.req2').style.display="block"
  }else document.querySelector('.req2').style.display="none"
  if(mEssage.value == '') {
    document.querySelector('.req3').style.display="block"
  }else document.querySelector('.req3').style.display="none"
}


 




