/*This is the function for darkmode */
function DarkModeFunction() {

    var element = document.body;
    element.classList.remove("PartyModeFunction");
    element.classList.add("DarkModeFunction");
    document.cookie = "theme=Dark; expires 22 February 2025 12:00 UTC;"
  }
  
  /*This is the function to remove darkmode*/
  function DefaultFunction() {
  
    var element = document.body;
    element.classList.remove("DarkModeFunction")
    element.classList.remove("PartyModeFunction")
    document.cookie = "theme=Default; expires 22 February 2025 12:00 UTC;"
  }
  
  /*This is the function for Partymode */
  function PartyModeFunction() {
  
    var element = document.body;
    element.classList.remove("DarkModeFunction");
    element.classList.add("PartyModeFunction");
    document.cookie = "theme=Party; expires 22 February 2025 12:00 UTC;"
  }
  
  /*This function is for getting the value of theme cookies to be used in the scripts for maintaining the set theme*/
function getCookie(theme) {
    let name = theme + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  const theme1 = getCookie("theme");
  console.log(theme1);
  
  function setCookie(theme) {
    document.cookie = `theme=${theme};`;
  }

  /*This uses "DOMContentLoaded" to make sure that the themes are applied upon the page loading */
  addEventListener("DOMContentLoaded", (event) => {
    const theme=getCookie("theme");
    if (theme === "Dark"){
        DarkModeFunction();
    }
    else if (theme === "Party"){
        PartyModeFunction();
    }
    else {
        DefaultFunction();
    }
  });