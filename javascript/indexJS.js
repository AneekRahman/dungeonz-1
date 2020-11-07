// THE TOP SEARCH BOX STARTS

var searchInput=document.getElementsByName('topSearch')[0];
var searchBox=document.getElementById('topSearch');

function topSearchFocused(){
    searchBox.style.backgroundColor="rgba(255,255,255,0.4)"
}
function topSearchBlurred(){
    searchBox.style.backgroundColor="transparent"
}

searchInput.onfocus=topSearchFocused;
searchInput.onblur=topSearchBlurred;

// THE TOP SEARCH BOX ENDS

// THE CREATE ACCOUNT SCROLL DOWN STARTS

var createAccBox = document.getElementById('createAcc');

function scrollAcc(){
    var myVar = setInterval(scrollAcc, 400);
    window.document.scrollTop=10;
}
function scrollAccCall(){
    
}


// THE CREATE ACCOUNT SCROLL DOWN ENDS

// THE TOP LOGIN STARTS

var userBtn=document.getElementById('userBtn');
var loginBox=document.getElementById('loginExpand');
var loginShowHideTrigger=0;

function loginBoxShow(){
    loginBox.style.display='Block';
    loginShowHideTrigger=1;
}
function loginBoxHide(){
    loginBox.style.display='none';
    loginShowHideTrigger=0;
}
function loginShowHide(){
    if(loginShowHideTrigger==0){
        loginBoxShow();
    }else{
        loginBoxHide();
    }
}

userBtn.onclick=loginShowHide;

// THE TOP LOGIN ENDS

// THE CATEGORY TAB STARTS

var catBox=document.getElementById('catHolder');
var catIcon=document.getElementById('catIcon');
var catUl=document.getElementById('catUl');
var catTrigger=0;

function catBoxShow(){
    catBox.style.width="calc(200px + 2%)";
    catTrigger=1;
}
function catBoxHide(){
    catBox.style.width="0";
    catTrigger=0;
}
function catUlDelayOn(){
    catUl.style.display="block";
}
function catUlDelayOff(){
    catUl.style.display="none";
}
function catShowHide(){
    if(catTrigger==0){
        catBoxShow()
        setTimeout(catUlDelayOn,300);
    }else{
        catBoxHide();
        catUlDelayOff();
    }
}

catIcon.onclick=catShowHide;
// THE CATEGORY TAB ENDS


// THE ON SCROLL TOP BAR STARTS

var logo=document.getElementById('logo');
var logoHolder=document.getElementsByClassName('logoHolder')[0];
var catExpandIconBox=document.getElementsByClassName('catExpandIcon')[0];
var logoBar=document.getElementById('logoBar');
var topSearchBox=document.getElementById('topSearch');
var navBar=document.getElementsByClassName('navBar')[0];
var loginIconHolder=document.getElementById('logIconHolder');

function scrollOn(){
    logo.style.width="150px";
    logoBar.style.height="60px";
    logoBar.style.backgroundImage="linear-gradient(rgba(138, 0, 255,.6),rgba(88, 0, 163,.7))";
    logoHolder.style.margin="10px 5px 0 0";
    catIcon.style.fontSize="24px";
    catExpandIconBox.style.margin="20px 20px 0 0";
    topSearchBox.style.padding="18px 10px 10px";
    navBar.style.margin="14px 0 0 5px";
    loginIconHolder.style.margin="20px 0 0 20px";
    userBtn.style.fontSize="24px";
    catBox.style.marginTop="60px";
    catBox.style.height="calc(100% - 60px)";
    loginBox.style.marginLeft="-63px";
}
function scrollOff(){
    logo.style.width="250px";
    logoBar.style.height="100px";
    logoBar.style.backgroundImage="linear-gradient(rgba(138, 0, 255,.8),rgba(88, 0, 163,.9))";
    logoHolder.style.margin="25px 0 0 0";
    catIcon.style.fontSize="30px";
    catExpandIconBox.style.margin="53px 20px 0 0";
    topSearchBox.style.padding="53px 10px 15px";
    navBar.style.margin="50px 0 0 5px";
    loginIconHolder.style.margin="53px 0 0 20px";
    userBtn.style.fontSize="30px";
    catBox.style.marginTop="100px";
    catBox.style.height="calc(100% - 100px)";
    loginBox.style.marginLeft="-60px";
}
function scrollToggle(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        scrollOn();
    }else{
        scrollOff();
    }
}
window.onscroll=scrollToggle;
// THE ON SCROLL TOP BAR ENDS



//THE TOOLTIP SHOW HIDE STARTS

var catTip=document.getElementsByClassName("catIconTip")[0];
var searchTip=document.getElementsByClassName("searchBarTip")[0];
var picturesTip=document.getElementsByClassName("picturesTip")[0];
var videosTip=document.getElementsByClassName("videosTip")[0];
var logTabTip=document.getElementsByClassName("logTabTip")[0];
var logIconTip=document.getElementsByClassName('logIconTip')[0];

var picturesIcon=document.getElementById('picturesIcon');
var videosIcon=document.getElementById('videosIcon');
var logTabIcon=document.getElementById('logTabIcon');


catIcon.onmouseenter= function(){catTip.style.opacity="1"};
catIcon.onmouseleave= function(){catTip.style.opacity="0"};

searchInput.onmouseenter=function(){searchTip.style.opacity="1"}
searchInput.onmouseleave=function(){searchTip.style.opacity="0"}

picturesIcon.onmouseenter=function(){picturesTip.style.opacity="1"}
picturesIcon.onmouseleave=function(){picturesTip.style.opacity="0"}

videosIcon.onmouseenter=function(){videosTip.style.opacity="1"}
videosIcon.onmouseleave=function(){videosTip.style.opacity="0"}

logTabIcon.onmouseenter=function(){logTabTip.style.opacity="1"}
logTabIcon.onmouseleave=function(){logTabTip.style.opacity="0"}

userBtn.onmouseenter=function(){logIconTip.style.opacity="1"}
userBtn.onmouseleave=function(){logIconTip.style.opacity="0"}

//THE TOOLTIP SHOW HIDE ENDS

//THE CREATE ACCOUNT USERNAME CHECK STARTS 

var accUsername = document.getElementsByName("accUsername")[0];
var userCheck = document.getElementsByClassName('userCheck')[0];
var userTimes = document.getElementsByClassName('userTimes')[0];
var accUNInfo = document.getElementsByClassName('accUNInfo')[0];


function searchUsername(){
    var accUsernameValue = accUsername.value;
    
    if(accUsernameValue.length > 0){
        if(accUsernameValue.search(" ") > -1 || accUsernameValue.length < 5 || accUsernameValue.length > 31){
           // THE USERNAME IS INCORRECT
            userTimes.style.visibility="visible";
            userCheck.style.visibility="hidden";
        }else{
           // THE USERNAME IS CORRECT
            userCheck.style.visibility="visible";
            userTimes.style.visibility="hidden";
        }
    }else{
        userCheck.style.visibility="hidden";
        userTimes.style.visibility="hidden";
    }
    
}

accUsername.onkeyup=searchUsername;
accUsername.onkeydown=searchUsername;
accUsername.onkeypress=searchUsername;
accUsername.onchange=searchUsername;
accUsername.onfocus = function(){accUNInfo.style.opacity="1"}
accUsername.onblur = function(){accUNInfo.style.opacity="0"}
//THE CREATE ACCOUNT USERNAME CHECK ENDS

//THE CREATE ACCOUNT PASSWORD CHECK STARTS
var accPass = document.getElementsByName("accPass")[0];
var passCheck = document.getElementsByClassName('passCheck')[0];
var passTimes = document.getElementsByClassName('passTimes')[0];
var accPassError = document.getElementsByClassName('accPassError')[0];
var accPassInfo = document.getElementsByClassName('accPassInfo')[0];



function searchPassword(){
    var accPassValue = accPass.value;
    
    if(accPassValue.length > 0){
        if(accPassValue.search(" ") > -1 || accPassValue.length < 5 || accPassValue.length > 31){
           // THE USERNAME IS INCORRECT
            passTimes.style.visibility="visible";
            passCheck.style.visibility="hidden";
            accPassInfo.style.opacity="0";
            accPassError.style.opacity="1";
        }else{
           // THE USERNAME IS CORRECT
            passCheck.style.visibility="visible";
            passTimes.style.visibility="hidden";
            accPassInfo.style.opacity="1";
            accPassError.style.opacity="0";
        }
    }else{
        passTimes.style.visibility="hidden";
        passCheck.style.visibility="hidden";
        accPassError.style.opacity="0";
    }
}

accPass.onkeyup=searchPassword;
accPass.onkeydown=searchPassword;
accPass.onkeypress=searchPassword;
accPass.onchange=searchPassword;
accPass.onfocus = function(){accPassInfo.style.opacity="1"};
accPass.onblur = function(){accPassInfo.style.opacity="0";accPassError.style.opacity="0";};
//THE CREATE ACCOUNT PASSWORD CHECK ENDS

//THE CREATE ACCOUNT FORM SUBMIT STARTS

function accSubmit(event){
    var accPassValue = accPass.value;
    var accUsernameValue = accUsername.value;
    
    if(accPassValue.search(" ") > -1 || accPassValue.length < 5 || accPassValue.length > 31){
        event.preventDefault();
    }else{
        
    }
    if(accUsernameValue.search(" ") > -1 || accUsernameValue.length < 5 || accUsernameValue.length > 31){
        event.preventDefault();
    }else{
        
    }
}

