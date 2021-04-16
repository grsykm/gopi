function myFunction() {
  document.getElementById('researchDropdown').classList.toggle('show');
}

window.onclick = function(e) {
  if (!e.target.matches('.researchbtn')) {
    var researchDropdown = document.getElementById('researchDropdown');
     if (researchDropdown.classList.contains('show')) {
       researchDropdown.classList.remove('show');
     }
  }
};
