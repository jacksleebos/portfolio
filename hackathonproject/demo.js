function myFunction()
{
alert ("De bedoeling is dat als je op 'Submit' drukt,\n dat dan de gegevens door worden gelinkt.\n Hier een voorbeeld hoe dat kan.");

}

var images=[
    
"desk.jpg",
 "room.jpg"
];


var num=0

function next(){

var slider=document.getElementById("slider");

num++;

if(num>=images.length){


 num=0;
}
    
slider.src=images[num];
    
}




function prev(){
var slider=document.getElementById("slider");

num--;

if(num<0){

 num=image.length-1;
    
}
    
 slider.src=images[num];
    
}