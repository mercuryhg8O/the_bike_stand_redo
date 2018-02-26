//hides the modal
  function hideModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

//also hides the modal
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  
  function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }