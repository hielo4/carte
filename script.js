var elements = document.getElementsByClassName("btn-pl");

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', addqte);
  });
function addqte(){
    var test = document.getElementById("test").innerHTML;
    console.log(test)

}