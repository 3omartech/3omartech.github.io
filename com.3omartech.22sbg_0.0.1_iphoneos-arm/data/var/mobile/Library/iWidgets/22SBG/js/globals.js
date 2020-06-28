var options = {

  },
  cycript = {},
  injectedWeather = {},
  injectedSystem = {},
  injectedMusic = {},
  mainTarget = localStorage.themeName,
  appToOpen = null,
  urlToOpen = null,
  wallpaperSet = false,
  weather = null,
  percent = ['0', '40', '60', '100'],
  albumArtAdded = false,
  screenShowing,
  pressOptions;

  setTimeout(function(){
    //alert(JSON.stringify(action.savedElements.placedElements));
    pressOptions = action.savedElements.placedElements['pressActions'];
  },1000);


function removeBackgroundAnimation(){
    var bgAnimation = document.getElementById('backgroundAnimation');
    if(bgAnimation){
        document.body.removeChild(bgAnimation);
    }
}

/* Note some versions of iOS may not support this */
// function handleVisibilityChange() {
//   if (document.hidden) {
//     screenShowing = false;
//     removeBackgroundAnimation();
//   } else  {
//     /* 
//         Animation is added throught the tweak as it knows what animation
//         the user chose.
//     */
//     screenShowing = true;
//     startLoop();
//   }
// }
// document.addEventListener("visibilitychange", handleVisibilityChange, false);
