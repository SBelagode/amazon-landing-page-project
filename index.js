var isMenuActivated = false;
var x = document.querySelectorAll(".sidebar");

var menuSideBar = document.querySelector("#sidebar");

var overlay = document.querySelector(".overlay");


x[0].addEventListener('click', function(event){

    //make side bar appear by adding the appear class, also dim rest of screen
    menuSideBar.classList.add("sidebar-open");
    menuSideBar.classList.remove("sidebar-close");
    isMenuActivated = true;


    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();

    overlay.style.opacity = 0.8;
    overlay.style.zIndex = 8;

    

});

x[1].addEventListener('click', function(event){

    //make side bar appear by adding the appear class, also dim rest of screen
    menuSideBar.classList.add("sidebar-open");
    menuSideBar.classList.remove("sidebar-close");
    isMenuActivated = true;
    

    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();

    overlay.style.opacity = 0.8;
    overlay.style.zIndex = 8;
    
});


menuSideBar.addEventListener('click', (e)=>{
    console.log("clicking menu!");
    e.stopPropagation();
    console.log(overlay.style.zindex);
    console.log(overlay.style.opacity);
});


//now creating event for history dropdown menu so that 3 (triangle, menu, and overlay all appear. Z index + opacity increase)

var browsingHistory = document.querySelector(".browsing-history-dropdown");
var browsingHistoryUpTriangle = document.querySelector("#browsing-history-triangle");
var browsingHistoryOverlay = document.querySelector(".browsing-history-overlay");


var browsingHistoryKeyWord = document.querySelector(".browsing-history");
var browsingHistoryIcon = document.querySelector("#browsing-history-icon");

var isBrowsingHistoryActive = false;




browsingHistoryKeyWord.addEventListener('click', function(event){

    //make side bar appear by increasing opacity and z index
    isBrowsingHistoryActive = true;

    browsingHistory.style.zIndex = 5;
    browsingHistoryUpTriangle.style.zIndex = 5;
    browsingHistoryOverlay.style.zIndex = 5;

    browsingHistory.style.opacity = 1;
    browsingHistoryOverlay.style.opacity = 0.8;




    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();
});

browsingHistoryIcon.addEventListener('click', function(event){

    //make side bar appear by increasing opacity and z index
    isBrowsingHistoryActive = true;

    browsingHistory.style.zIndex = 5;
    browsingHistoryUpTriangle.style.zIndex = 5;
    browsingHistoryOverlay.style.zIndex = 5;

    browsingHistory.style.opacity = 1;
    browsingHistoryOverlay.style.opacity = 0.8;




    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();
});

browsingHistory.addEventListener('click', (event) => {
    console.log("clicking browsing history menu!");
    event.stopPropagation();
});


document.body.addEventListener('click', () => {

    if(isMenuActivated == true){

        //remove appear class, change boolean flag value, and reset overlay's opacity. 
        menuSideBar.classList.remove("sidebar-open");
        menuSideBar.classList.add("sidebar-close");
        isMenuActivated = false;
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;
    }

    if(isBrowsingHistoryActive == true){

        browsingHistory.style.zIndex = -5;
        browsingHistoryUpTriangle.style.zIndex = -5;
        browsingHistoryOverlay.style.zIndex = -5;

        browsingHistory.style.opacity = 0;
        browsingHistoryOverlay.style.opacity = 0;
        isBrowsingHistoryActive = false;

    }
    
});



//now creating event for language dropdown menu so that 3 (triangle, menu, and overlay all appear. Z index + opacity increase)

var languageDropdown = document.querySelector(".language-dropdown-area");
var languageTriangle = document.querySelector("#language-dropdown-triangle");
var langugaeDropdownOverlay = document.querySelector(".language-dropdown-overlay");


var language = document.querySelector("#language");

var isLanguageDropdownActive = false;




language.addEventListener('click', function(event){

    //make side bar appear by increasing opacity and z index
    isLanguageDropdownActive = true;

    languageDropdown.style.zIndex = 6;
    languageTriangle.style.zIndex = 6;
    langugaeDropdownOverlay.style.zIndex = 5;

    languageDropdown.style.opacity = 1;
    langugaeDropdownOverlay.style.opacity = 0.8;




    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();
});


languageDropdown.addEventListener('click', (event) => {
    console.log("clicking language dropdown menu!");
    event.stopPropagation();
});

//now creating event for accounts and lists dropdown menu so that 3 (triangle, menu, and overlay all appear. Z index + opacity increase)

var accountsDropdown = document.querySelector(".account-and-lists-dropdown");
var accountsTriangle = document.querySelector("#account-and-lists-dropdown-triangle");
var accountsDropdownOverlay = document.querySelector(".account-and-lists-dropdown-overlay");


var account = document.querySelector("#account-dropdown");

var isAccountDropdownActive = false;




account.addEventListener('click', function(event){

    //make side bar appear by increasing opacity and z index
    isAccountDropdownActive = true;

    accountsDropdown.style.zIndex = 6;
    accountsTriangle.style.zIndex = 6;
    accountsDropdownOverlay.style.zIndex = 5;

    accountsDropdown.style.opacity = 1;
    accountsDropdownOverlay.style.opacity = 0.8;




    //stops bubbling up event handlers from current child position. So the event listener on body won't activate now. 
    event.stopPropagation();
});


accountsDropdown.addEventListener('click', (event) => {
    console.log("clicking language dropdown menu!");
    event.stopPropagation();
});



//making search dropdown menu appear 

var searchDropdown = document.querySelector(".search-dropdown-container");
var search = document.querySelector(".dropdown");


var isSearchBarActive = false;

search.addEventListener('click', (e) => {

    isSearchBarActive = true;
    searchDropdown.style.zIndex = 5;
    searchDropdown.style.opacity = 1;

    e.stopPropagation();

});

searchDropdown.addEventListener('click', (e) => {
    console.log("clicking on search bar dropdown menu!");
    e.stopPropagation();

});








document.body.addEventListener('click', () => {

    if(isMenuActivated == true){

        //remove appear class, change boolean flag value, and reset overlay's opacity. 
        menuSideBar.classList.remove("sidebar-open");
        menuSideBar.classList.add("sidebar-close");
        isMenuActivated = false;
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;
    }

    if(isBrowsingHistoryActive == true){

        browsingHistory.style.zIndex = -5;
        browsingHistoryUpTriangle.style.zIndex = -5;
        browsingHistoryOverlay.style.zIndex = -5;

        browsingHistory.style.opacity = 0;
        browsingHistoryOverlay.style.opacity = 0;
        isBrowsingHistoryActive = false;

    }

    if(isLanguageDropdownActive == true){

        languageDropdown.style.zIndex = -5;
        languageTriangle.style.zIndex = -5;
        langugaeDropdownOverlay.style.zIndex = -5;

        languageDropdown.style.opacity = 0;
        langugaeDropdownOverlay.style.opacity = 0;
        isLanguageDropdownActive = false;

    }

    if(isAccountDropdownActive == true){

        accountsDropdown.style.zIndex = -5;
        accountsTriangle.style.zIndex = -5;
        accountsDropdownOverlay.style.zIndex = -5;

        accountsDropdown.style.opacity = 0;
        accountsDropdownOverlay.style.opacity = 0;
        isAccountDropdownActive = false;

    }

    if(isSearchBarActive == true){
        isSearchBarActive = false;
        searchDropdown.style.zIndex = -5;
        searchDropdown.style.opacity = 0;
    }
    
});




/** Notes and questions: 
 * 
 * how to isolate event listeners when not 
 * 
 * 
 */