var a = document.querySelectorAll('.nav-menu > li a[href*="#"]');

    // Commented code also gives smooth scroll 

// for ( var i =0 ; i < a.length ; i++){
//     a[i].addEventListener('click', function(event){
//         // console.log(event);
//         event.preventDefault();
//         // console.log(event.cancelable); // true
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         // console.log(targetSectionId);
//         var targetSection = document.getElementById(targetSectionId);
//         // console.log(targetSection);
//         // console.log(ta   rgetSectionCoordinates);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             // console.log(targetSectionCoordinates);
//             if(targetSectionCoordinates.top <= 0 ){
//                 clearInterval(interval);
//                 return ;
//             }
//             window.scrollBy(0,50);
//         },50);
//     });
// }
var interval = 0 ;
for (var i = 0 ; i < a.length ; i++){
    a[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        interval = setInterval(function(){
            scrolldown(targetSection);
        },100);
    });
}
function scrolldown(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    // console.log(targetSectionCoordinates);   
    if(targetSectionCoordinates.top <= 0 ){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    console.log(targetSectionCoordinates.top);
}