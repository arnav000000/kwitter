var firebaseConfig = {
      apiKey: "AIzaSyDw8i68PBvGsfXS4Vri0CzKHRG07ogtD2U",
      authDomain: "kwitter-fbae7.firebaseapp.com",
      databaseURL: "https://kwitter-fbae7-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbae7",
      storageBucket: "kwitter-fbae7.appspot.com",
      messagingSenderId: "274543705816",
      appId: "1:274543705816:web:32ef417120b033b42ba1ad"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
      function addRoom()
      {
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}