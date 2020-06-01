var a = document.querySelectorAll('.nav-menu > li a[href*="#"]');
var currentPos = 0 ; 
var scrollevent = setInterval(function(id) {
    console.log(document.getElementById(id) , " " , id);
    // var finalPos = document.getElementById(id).offsetTop;
    var finalPos = 100;
    if (currentPos >= finalPos){
        clearInterval(scrollevent);
        return;
    }
    window.scrollBy(0,50);
    currentPos += 50;
},50);
for (let i = 0 ; i < a.length ; i++ ){
    a[i].addEventListener('click',scrollevent(this.getAttribute('href').split('#')[1]));
}

var i = 1 ;
function move(){
    if(i == 6 ){
        return ;
    }
    console.log(i);
    i++;
}