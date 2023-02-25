// function updateGreeting() {
//     let name = document.getElementById("nameInput").value;
//     let greeting = document.getElementById("greeting");
    
//     if (name.length > 0) {
//       greeting.innerText = "Hello, " + name + "! Welcome to our website.";
      
//     } else {
//       greeting.innerText = "Please enter your name.";
//     }
//   }

 function updateGreeting() {
     let name = document.getElementById("nameInput").value;
     let greeting = document.getElementById("greeting");
    
     if (name.length > 0) {
       let now = new Date();
       let hour = now.getHours();
       let message;
      
       if (hour < 12) {
         message = "Good morning";
       } else if (hour < 18) {
         message = "Good afternoon";
       } else {
         message = "Good evening";
      }
      
       greeting.innerText = message + ", " + name + "!\nGood to See You !\nWecome to my Website !";    
       alert("Hi ! "+ name +"\nWelcome To My Website😊❤️");
     } else {
       greeting.innerText = "Please enter your name and Try again !!!";
     }
   }

  

  function clearInput() {
    document.getElementById("nameInput").value = "";
    greeting.innerText = "Please enter your name.";
  }
  
  