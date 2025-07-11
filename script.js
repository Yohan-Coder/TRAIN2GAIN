'use strict';

/************************************************add event on element*****************************************/

const addEventOnElem = (elem, type, callback) => {
    if (elem.length > 1) 
    { 
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/***********************************************navbar toggle*************************************************/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar =function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem (navLinks, "click", closeNavbar);

/*****************************************registration forn***************************************************/

const formOpenBtn = document.querySelector("#form-open"),
home1 = document.querySelector(".home1"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form_close"),
registerBtn = document.querySelector("#register");

formOpenBtn.addEventListener("click", () => home1.classList.add("show"));
formCloseBtn.addEventListener("click", ()=> home1.classList.remove("show"));

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
})

/************************************************dropdown option******************************************/

const dropdown = document.querySelectorAll('.dropdown');

//Loop to get all options
dropdown.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');   


select.addEventListener('click', () =>{
    select.classList.toggle('select-clicked');
    select.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;

        select.classList.remove('select-clicked');

        select.classList.remove('caret-rotate');

        menu.classList.remove('menu-open');

        options.forEach(option => {
            option.classList.remove('ative');
        });

        option.classList.add('active');
    });
});
});

/*****************************************header & back to top btn active*************************************/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function (){
    if (window.scrollY  > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

/**************************************************BMI Calculator*********************************************/

const calculateForm = document.getElementById('calculate-form'),
     calculateCm = document.getElementById('calculate-cm'),
     calculateKg = document.getElementById('calculate-kg'),
     calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()
    //check if fields have value
    if (calculateCm.value === '' || calculateKg.value === ''){
        //add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //show message
        calculateMessage.textContent = 'Fill in the Height and Weight'

        //remove message three seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        //BMI Formula
        const cm  = calculateCm.value / 100,
              kg  = calculateKg.value,
              bmi = (kg / (cm * cm)).toFixed(2)
        
        //show your health status
        if(bmi < 18.5){
            //add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = "Your BMI is " + bmi  + " and you are Skinny"
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = "Your BMI is " + bmi  + " and you are Healthy"
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = "Your BMI is " + bmi  + " and you are Overweight"
        }

         //to clear the input field
         calculateCm.value = ''
         calculateKg.value = ''

         //remove message four seconds
         setTimeout(() =>{
            calculateMessage.textContent = ''
         }, 4000)
  222  }
}

calculateForm.addEventListener('submit', calculateBmi)
