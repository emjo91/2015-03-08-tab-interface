window.onload = function() {
  
  //// VARS ////
  
  var about = document.getElementById("about");
  var aboutA = document.getElementsByTagName("a")[0]; 
  var aboutLI = document.getElementsByTagName("li")[0];
  
  var concerts = document.getElementById("concerts");
  var concertsA = document.getElementsByTagName("a")[1]; 
  var concertsLI = document.getElementsByTagName("li")[1]; 
  
  // var discography = document.getElementById(discopgrahy);
  var discographyA = document.getElementsByTagName("a")[2]; 
  var discographyLI = document.getElementsByTagName("li")[2];
   
  
  // perhaps this needs an event listener...if I want to do this.
  // var active = classList.add('active');
  // var not_active = classList.add('not_active');
  
  
  // This shows the About...
  // classList.add doesn't seem to work...
  // Need to have it do THIS for the tab colours selected
  aboutA.addEventListener("click", function(){
    aboutLI.style.backgroundColor="#E8D9AC";
    about.style.display = "inherit";
    // about.classList.add('active');
    concertsLI.style.backgroundColor="#705B35"; 
    concerts.style.display = "none";
    // concerts.classList.add('not_active');
    discographyLI.style.backgroundColor="#705B35"; 
    discography.style.display = "none";
    // discography.classList.add('not_active');
  });
  
  concertsA.addEventListener("click", function(){
    concertsLI.style.backgroundColor="#E8D9AC"; 
    concerts.style.display = "inherit"
    aboutLI.style.backgroundColor="#705B35"; 
    about.style.display = "none";
    discographyLI.style.backgroundColor="#705B35"; 
    discography.style.display = "none";
  });
  
  discographyA.addEventListener("click", function(){
    discographyLI.style.backgroundColor="#E8D9AC"; 
    discography.style.display = "inherit"
    aboutLI.style.backgroundColor="#705B35"; 
    about.style.display = "none";
    concertsLI.style.backgroundColor="#705B35"; 
    concerts.style.display = "none";
  });

  
} //End window.onload