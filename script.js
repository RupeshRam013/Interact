// A javascript code for some classical interaction of the website and the user

optionclick = 1;

function SidebarDisplay(){
    // code that runs when clicked on the side bar option button
    if(optionclick % 2 == 0){

        mainbar = document.getElementById("sidebar");
        mainbar.innerHTML = 
        ` <img src='/images/logo2.png' alt='nothing' width='64'>
        <button onclick='SidebarDisplay()'><img src='/images/Menu.png'></button>
        <script src='script.js'></script>
        
        <button onclick="HomebarDisplay()"><h2>HOME</h2></button>
        <button onclick="LoginbarDisplay()"><h2>Login</h2></button>
        <button onclick="ContactDisplay()"><h2>Contact</h2></button> `;

        // replaces the html code with a alt code for some javascript function
    }else {
        mainbar = document.getElementById("sidebar");
        mainbar.innerHTML = 
        ` <img src='/images/logo2.png' alt='nothing' width='64'>
        <button onclick='SidebarDisplay()'><img src='/images/Menu.png'></button>
        <script src='script.js'></script> `;
    }

    // handles the total amount of click and resets it for infinite click functionality
    optionclick = optionclick + 1;
    if(optionclick >= 10){
        optionclick = 0;
    }
}

function HomebarDisplay(){
    // The button if pressed displays content of home page 
    mainbox = document.getElementById("mainbox");
    mainbox.innerHTML = 
    `
    <h1>Interact</h1>
    <hr>
    <h3>What am I ?</h3>

    <p>I am a well made programmer that has been working in the field of tech for a long time and still seeking chance to learn more about the computers and the connection and application of it in real life for we humans to evolve more .I have learned some programming language and some topics related to computer science for a better understanding about the way the computer really work .I like to explore it more .I have exactly been active in the technology industry for 2 years and so .To learn more about me please contact me on my social media platform . </p>
    <button onclick="ContactDisplay()">Learn more</button>
    `;
    // note this content is yet to be modified
}
function LoginbarDisplay(){
    // Function that displays login page in the main box for user access
    mainbox = document.getElementById("mainbox");
    mainbox.innerHTML =  
    `  
    <h1>Interact</h1>
    <hr>
    <div id="loginpage">
        <img src="/images/webpageimg2.png" >
        <div id="loginbox">
            <h3>Login</h3>
            
            <input type="text" name="name" id="Username" placeholder="Username">
            <br>
            <input type="password" name="password" id="Userpass" placeholder="Password">
            <br>
            <a href="#" target="_blank">forgot password?</a>
            <br>
            <button onclick="displayinfo()" id="loginbutton">Login</button>
        </div>
    </div>
    `;

    // note the php code and other code for storage of user info is still left 
}

function ContactDisplay(){
    mainbox = document.getElementById("mainbox");
    mainbox.innerHTML =
    `
    <h1>Interact</h1>
    <hr>
    <div id="contactlinks">
        <a href="https://www.instagram.com/rupeshram013/" target="_blank"><img src="/images/instagramlogo.ico" width="128"></a>
        <a href="https://twitter.com/RupeshRam013" target="_blank"><img src="/images/twitterlogo.ico" width="144"></a>
        <a href="https://github.com/RupeshRam013" target="_blank"><img src="/images/githublogo.png"></a>      
    </div>

    <hr>
    
    ` 
}


function displayinfo(){
    // function to printout the info given in the form 
    var name = document.getElementById("Username").value;
    var password = document.getElementById("Userpass").value;
    console.log("Logged in try;");
    if(name == "Rupesh Ram" && password == "nothing123!@#"){
        console.log("Welcome to server ! Admin !");
    }
}