console.log("nguyendeptrai vcl");
console.log("anh em nho dang ki kenh ung ho minh nhe yeu anh em muahahah");
console.log("code moi den day thoi anh em thong cam sau code tiep muahahahha");

//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("underline_").style.top = "10%";
//  } else {
//    document.getElementById("underline_").style.top = "-150px";
//  }
//}


// login form ......

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// sign up form.....

// Get the modal
var modal_ = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_) {
    modal_.style.display = "none";
  }
}




function myFunction() {
  var x = document.getElementById("inputpsw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}