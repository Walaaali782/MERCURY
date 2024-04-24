//checks color option 
let maincolor = localStorage.getItem("coloroption");
console.log(maincolor);

if (maincolor != null){
    // console.log('local storage is not null ');


    document.documentElement.style.setProperty('--main-color',localStorage.getItem("coloroption"));

    // remove active from all 
    document.querySelectorAll('.colors-list li').forEach(element => {

        element.classList.remove("active");


        if(element.dataset.color === maincolor){
            element.classList.add("active");
        }
    });    
}









// toggle spain class on icon 
let settingsbox = document.querySelector(".settings-box");

document.querySelector(".tooglespain i").onclick = function() {

    this.classList.toggle("fa-spin");

    settingsbox.classList.toggle("open");

};

//switches the colors 
const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach(li => {

li.addEventListener("click" , (e) => {
    const wal = e.target.dataset.color;
    document.documentElement.style.setProperty('--main-color',wal);
// set color in local storage 
    localStorage.setItem('coloroption' , wal);
    // remove active 
    e.target.parentElement.querySelectorAll('.active').forEach(element => {

        element.classList.remove("active");
    });

// add active  on target 
e.target.classList.add("active");})

});


//background option 
let backgroundrandom = true;



//varible the interval
let backgroundinterval;


//check the in local random image
let backgroundlocal = localStorage.getItem("background-option");
console.log(backgroundlocal);

if (backgroundlocal !== null){
    // console.log('local storage is not null ');

    if (backgroundlocal === 'true'){

        backgroundrandom = true;
    }else{

        backgroundrandom = false;
    }


   // document.documentElement.style.setProperty('background-color',localStorage.getItem("coloroption"));

    // remove active from all 
    document.querySelectorAll('.random-back span').forEach(element => {
        element.classList.remove("active");
    });    
    

    if(backgroundlocal === 'true'){

        document.querySelector('.random-back .yes').classList.add("active");
    }else{
        document.querySelector('.random-back .no').classList.add("active");
    }
}








//switches the backgroung  option
const randomback = document.querySelectorAll(".random-back span");

randomback.forEach(span => {
    span.addEventListener("click" , (e) => {

    // remove active calss from childern
    e.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove("active");
    });

// add active  on target 
e.target.classList.add("active");

if (e.target.dataset.back==="yes"){

    backgroundrandom = true;

    randomimage();

    localStorage.setItem("background-option",true)

}
else{
    backgroundrandom = false;

    clearInterval(backgroundinterval);

    localStorage.setItem("background-option",false)
}

})
});







// select landing page element 
let landingpage = document.querySelector(".landing-page");
//get array with element 

let imagearray =["a1.webp","a2.jpg","a3.jpg","a4.jpg"];



function randomimage() {
    if(backgroundrandom === true){

        backgroundinterval= setInterval(() => {
            let randomsec = Math.floor(Math.random() * imagearray.length );
            
        //change background imgaes 
        
        landingpage.style.backgroundImage = 'url("images/'+imagearray[randomsec] +' ")' ;
        },2000);

    }
    
}
randomimage();

//skills selector 

let ourskills = document.querySelector(".our-skills");

window.onscroll = function () {
    //skills offset top

    let skillsoffset = ourskills.offsetTop;

       //skills outer hight
       let skillsouterheigh = ourskills.offsetHeight;

//windn hight
let windnheigh = this.innerHeight;



//scrolltop
let scrollTop =  this.scrollY ;

if(scrollTop > (skillsoffset + skillsouterheigh - windnheigh))
{
    this.console.log("this skills");

    let allskills = document.querySelectorAll(".our-skills .skill .the-progress span");

    allskills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
}
};



//create popbox with the image
let ourgallary = document.querySelectorAll(".gallery img");

ourgallary.forEach( img => {

    img.addEventListener('click', (e) =>{

        //creat overlay ele 
        let overlay = document.createElement("div");

           //creat  class overlay  
            overlay.className = 'popup-overlay';
              // aa creat  class overlay  
           document.body.appendChild(overlay);


   //creat popbox ele 
   let popbox = document.createElement("div");

   //Add  class popbox  
   popbox.className = 'popup-box';


   if(img.alt !== null){


    //create heading
    let imagehead = document.createElement("h3");


      //create  text heading
      let imagetext= document.createTextNode(img.alt);

      imagehead.appendChild(imagetext);

      popbox.appendChild(imagehead);

}

    
   //creat image ele 
   let popimage = document.createElement("img");


   // cahge scr imag
popimage.src = img.src;

popbox.appendChild(popimage);

// aa creat  class overlay  
document.body.appendChild(popbox);


//create close span 

let closebutten = document.createElement("sapn");

let closebuttentext =  document.createTextNode("X");

closebutten.appendChild(closebuttentext);

closebutten.className='closebutten';

popbox.appendChild(closebutten);


    });
});


document.addEventListener('click',function(e) {
    if(e.target.className === 'closebutten'){

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})
