// //Hack to fix touches passed through FrontPage
// //Is this even needed...
// setTimeout(function() {
//     try {
//         /* 
//             cloning a node does not copy event listeners added using addEventListener()
//             When using a LockPlus widget (which this is) lets remove the normal event
//             to catch all touches to screenElements and just allow them to be called
//             on the element. This helps with FrontPage passing touches.
//         */
//         window.frontpage = true;
//         var oldEvents = document.getElementById('screenElements');
//         oldEvents.parentNode.replaceChild(oldEvents.cloneNode(1), oldEvents);

//         if (document.getElementById('playmusic')) {
//             document.getElementById('playmusic').addEventListener('touchstart', function(el) {
//                 webviewPlayMusic();
//             });
//         }

//         if (document.getElementById('playmusichide')) {
//             document.getElementById('playmusichide').addEventListener('touchstart', function(el) {
//                 webviewPlayMusic();
//             });
//         }

//         if (document.getElementById('nextmusic')) {
//             document.getElementById('nextmusic').addEventListener('touchstart', function(el) {
//                 webviewNextMusic();
//             });
//         }

//         if (document.getElementById('nextmusichide')) {
//             document.getElementById('nextmusichide').addEventListener('touchstart', function(el) {
//                 webviewNextMusic();
//             });
//         }

//         if (document.getElementById('prevmusic')) {
//             document.getElementById('prevmusic').addEventListener('touchstart', function(el) {
//                 webviewPrevMusic();
//             });
//         }

//         if (document.getElementById('prevmusichide')) {
//             document.getElementById('prevmusichide').addEventListener('touchstart', function(el) {
//                 webviewPrevMusic();
//             });
//         }

//         //since doing this we need to reload flipclock as it's remade
//         if(document.getElementById('flipclock')){
//             flipClock.create(document.getElementById('flipclock'), true);
//         }

//         //since clone node we need to clear out the info
//         if(document.getElementById('batterypie')){
//             document.getElementById('batterypie').innerHTML = "";
//             circleProgress = new CircleProgress('.progress');
// 		    circleProgress.max = 100;
//             circleProgress.value = 75;
//             circleProgress.textFormat = 'none';
//             addStyleString('.circle-progress{overflow:visible;pointer-events:none;}', 'circleoverflow');
//         }
//     } catch (err) {

//     }
// }, 3000);