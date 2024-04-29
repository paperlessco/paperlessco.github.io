function checkInput() {
    var searchText = document.getElementById("text").value;
    var keyword = "capsquid"; // Replace with your actual keyword
    if (searchText === keyword) {
      window.location.href = "secret-page.html"; // Replace with actual path
    }
  }
  
  // Add event listener to search bar (fires on Enter key press)
  document.getElementById("text").addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
      checkInput();
    }
  });
  