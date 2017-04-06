// GPhotos Function Script (gpfunc.js)
// (C) 2017 | Marquis Kurt. Licensed under CC 0.1

//Pre-loaders
const webview = document.getElementById('webview')
    var searchTermValue = document.getElementById("searchTerm").value;
    const {remote} = require('electron')
    const {Menu, MenuItem} = remote
    
    //Create a context menu for toggling the sidebar (Applies to macOS UI)
    const menu = new Menu()
    menu.append(new MenuItem({label: 'Hide Sidebar', click() { hideSidebar() }}))
    menu.append(new MenuItem({label: 'Show Sidebar', click() { showSidebar() }}))
    
    window.addEventListener('contextmenu', (e) => {
                            e.preventDefault()
                            menu.popup(remote.getCurrentWindow())
                            }, false)
    
    onload = () => {
      const indicator = document.querySelector('.indicator')
      const loadstop = () => {
        functionOne()
      }

      webview.addEventListener('did-stop-loading', loadstop)
  }
  
  //Hides the default Google Photos toolbar
  function functionOne() {
        webview.insertCSS(".SmZ4Wd {display: none;} c-wiz.uGCjIb.yDSiEe.zcLWac.eejsDc.TWmIyd {position: absolute; top: 0px; left: 0; right: 0; bottom: 0; padding-left: 80px; padding-top: 0px; padding-right: 80px;} div.R4TmW {display: none;} c-wiz.uGCjIb.yDSiEe.zcLWac.eejsDc.ZMOaid {top: 0px; padding-top: 0px;} c-wiz.uGCjIb.yDSiEe.zcLWac.eejsDc.Udl2rb {top: 16px; padding-top: 16px;} div, a, h1, h2, h3, h4, h5, h6,{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;} .ZEmz6b, h2 {font: Helvetica,Arial,sans-serif;}")
    }
    

//Sidebar Contents (Applies to macOS UI)
function hideSidebar() {document.getElementById('sidebar').style.display = 'none';}
function showSidebar() {document.getElementById('sidebar').style.display = 'block';}

//Opens the Assistant tab in sidebar
function assistant() {
      webview.loadURL("http://photos.google.com/assistant")
      document.getElementById("assistant").className += " active";
      document.getElementById("photos").className =
      document.getElementById("photos").className.replace
      ( /(?:^|\s)active(?!\S)/g , '' )
      document.getElementById("albums").className =
      document.getElementById("albums").className.replace
      ( /(?:^|\s)active(?!\S)/g , '' )
    }

//Opens the Photos tab in sidebar
function goToPhotos() {
     webview.loadURL("http://photos.google.com")
     document.getElementById("photos").className += " active";
     document.getElementById("assistant").className =
     document.getElementById("assistant").className.replace
     ( /(?:^|\s)active(?!\S)/g , '' )
     document.getElementById("albums").className =
     document.getElementById("albums").className.replace
     ( /(?:^|\s)active(?!\S)/g , '' )
    }

//Opens the Albums tab in sidebar
function goToAlbums() {
     webview.loadURL("http://photos.google.com/albums")
     document.getElementById("albums").className += " active";
     document.getElementById("photos").className =
     document.getElementById("photos").className.replace
     ( /(?:^|\s)active(?!\S)/g , '' )
     document.getElementById("assistant").className =
     document.getElementById("assistant").className.replace
     ( /(?:^|\s)active(?!\S)/g , '' )
    }

//Hides developer warning in sidebar (Applies to macOS UI)
function hideWarning() {document.getElementById('warning').style.display = 'none';}

//Allows search function
    function search() {
        searchTermValue = document.getElementById("searchTerm").value;
        var searchLink = "http://photos.google.com/search/" + searchTermValue + "";
        webview.loadURL(searchLink);
    }