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
    if(targetSectionCoordinates.top < 0 ){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    console.log(targetSectionCoordinates.top);
}

// For autofilling skills section 
    // var progressBars = document.querySelectorAll('.skill-progress > div');
    // var skillsContainer = document.getElementById('skills-container');
    // for(let i = 0 ; i < progressBars.length ; i++){
    //     progressBars[i].style.width = 0;
    // }
    // window.addEventListener('scroll',scrollCheck);
    // var animation ;
    // function scrollCheck(){
    //     var coordinates = skillsContainer.getBoundingClientRect();
        

    //     if (coordinates.top < window.innerHeight){
    //         animation = setInterval(function(){
    //             for (let i = 0 ; i < progressBars.length ; i++){
    //                 if( parseInt(progressBars[i].style.width) <= parseInt(progressBars[i].getAttribute('data-skillValue') ) ){
                        
    //                     progressBars[i].style.width = parseInt(progressBars[i].style.width) + 1 + "%";
    //                     // console.log(progressBars[i].style.width);
                        
    //                 }

    //                 // console.log(progressBars[i].style.width);
    //             }
    //         },1000);
    //     }

    //     if (coordinates.top > window.innerHeight){
    //         clearInterval(animation);
    //         // console.log("clearInterval");
    //         for(let i = 0 ; i < progressBars.length ; i++){
    //             progressBars[i].style.width = '0' ;
    //         }
    //     }
    // }

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone  = false; 
initializeBars();
function initializeBars(){
    for (let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

function fillBar() {
    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-skillValue');
        let currentWidth = 0 ; 
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                console.log("clearinterval");
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },50);
    }
}
// function fillBar(bar){
//     let currentWidth = 
// }
function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        fillBar();
    }else if ( coordinates.top > window.innerHeight){
        animationDone = false;
        initializeBars();
    }
    
}