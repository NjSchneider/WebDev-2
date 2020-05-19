// Variables 
var launchSchedule = document.getElementById('launchSchedule');
var nextLaunchDate = document.getElementById('nextLaunchDate');
var countdownTimer = document.getElementById('countdownTimer');
var next5 = document.getElementById('next5');
var nextFalcon = document.getElementById('nextFalcon');
var nextAriane = document.getElementById('nextAriane');
var nextLauncherOne = document.getElementById('nextLauncherOne');

// the start date for the Coutdown, set in each load function
var startDate;

// Event Listeners
window.addEventListener("load", initialPage);
next5.addEventListener("click", initialPage);
nextFalcon.addEventListener("click", falconPage);
nextAriane.addEventListener("click", arianePage);
nextLauncherOne.addEventListener("click", launcherOnePage);

// Countdown Timer Interval
var countdown = setInterval(countdown, 1000);

// Initial page information loaded
function initialPage(){
    clearElement();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch/next/5");
    httpRequest.send(null); 
    httpRequest.onreadystatechange = initialFill;

    function initialFill(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            var launches = httpRequest.responseText;
            var launchObj = JSON.parse(launches);    
            console.log(launchObj);

            startDate = launchObj.launches[0].net;

            var arryDate = launchObj.launches[0].net.split(" ");           
            nextLaunchDate.innerHTML = getLaunchDate(arryDate);     
            fillSchedule(launchObj);         
        }
    }
}

// Falcon launch page information load function
function falconPage(){
    clearElement();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5&name=falcon");
    httpRequest.send(null); 
    httpRequest.onreadystatechange = initialFill;

    function initialFill(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            var launches = httpRequest.responseText;
            var launchObj = JSON.parse(launches);    
            console.log(launchObj);

            startDate = launchObj.launches[0].net;

            var arryDate = launchObj.launches[0].net.split(" ");           
            nextLaunchDate.innerHTML = getLaunchDate(arryDate);    
            fillSchedule(launchObj);                  
        }
    }
}

// Ariane launch page information load function
function arianePage(){
    clearElement();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5&name=ariane");
    httpRequest.send(null); 
    httpRequest.onreadystatechange = initialFill;

    function initialFill(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            var launches = httpRequest.responseText;
            var launchObj = JSON.parse(launches);    
            console.log(launchObj);

            startDate = launchObj.launches[0].net;

            var arryDate = launchObj.launches[0].net.split(" ");           
            nextLaunchDate.innerHTML = getLaunchDate(arryDate);      
            fillSchedule(launchObj);         
        }
    }
}

// Launcher One launch page information load function
function launcherOnePage(){
    clearElement();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5&name=launcherone");
    httpRequest.send(null); 
    httpRequest.onreadystatechange = fill;

    function fill(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            var launches = httpRequest.responseText;
            var launchObj = JSON.parse(launches);    
            console.log(launchObj);

            startDate = launchObj.launches[0].net;

            var arryDate = launchObj.launches[0].net.split(" ");           
            nextLaunchDate.innerHTML = getLaunchDate(arryDate);     
            fillSchedule(launchObj);           
        }
    }
}


// fills the launchSchedule div witht the JSON information
function fillSchedule(launchObj){
    for(var i = 0; i < 5; i++){
        console.log(launchObj.launches[i].net, launchObj.launches[i].name);
        var nextLaunch = document.createElement('H4');
        var sec = document.createElement('SECTION');
        var date = document.createElement('STRONG');
        var info = document.createElement('SMALL');
                    
        nextLaunch.innerHTML = launchObj.launches[0].net;
        date.innerHTML = launchObj.launches[i].net + ": ";
        info.innerHTML = launchObj.launches[i].name; 
        sec.appendChild(date);
        sec.appendChild(info);
        launchSchedule.appendChild(sec); 
    }
}

// logic for the Countdown
function countdown(){   

    // sets the initial date to countdown from
    var countdownDate = new Date(startDate).getTime();

    // ALL CALCULATIONS for the time until next launch
    var now = new Date().getTime(); // gets the current date
    var dif = countdownDate - now; // gets the difference in the starting date and current date
    var days = Math.floor(dif / (1000 * 60 * 60 * 24)); // calculates the number of days
    var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculates the number of hours
    var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60)); // calculates the number of minutes
    var seconds = Math.floor((dif % (1000 * 60)) / 1000); // calculates the number of seconds
       
    // displays the Countdown
    countdownTimer.innerHTML = days + " Days: " + hours + " Hours: " + minutes + " Min: "
        + seconds + " Seconds";        
    
}

// clears the elements before new info is loaded in
function clearElement(){
    launchSchedule.innerHTML = "";
    countdownTimer.innerHTML = "";
}

// used to get the correct format for the next launch date
function getLaunchDate(arryDate){
    var date = "";
    for(var i = 0; i < 3; i++){
        date += arryDate[i] + " ";                
    }
    return date;
}
    

    
        
