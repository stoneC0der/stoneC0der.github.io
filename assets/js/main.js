window.onload = night();

function night() {
  var mysheet = document.getElementById('main-link');
  var today = new Date();
  var hour = today.getHours();
  
  if(((hour >= 18 || hour < 6)))
    mysheet.href = 'night.css';
}