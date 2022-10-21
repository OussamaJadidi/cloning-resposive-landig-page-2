// start main navigation click functions  
let navigation_opener = document.querySelector(".navigation-opener");
let navigation_closer = document.querySelector(".navigation-closer");
let navigation_controler = document.querySelector(".navigation-controler");
let primary_navigation = document.querySelector(".primary_navigation");
let background_shadow= document.querySelector(".shadow-background-navigtion-Mobile");

navigation_controler.addEventListener("click",() => {
    navigation_opener.classList.toggle("navigation-controler_close");
    navigation_closer.classList.toggle("navigation-controler_close");
});
navigation_opener.addEventListener("click",() => {
    primary_navigation.style.display="inline";
    background_shadow.style.cssText="display:block;position: absolute;inset: 0;background-image:linear-gradient(to Top,black,transparent);z-index: 2";
});
navigation_closer.addEventListener("click",() => {
    primary_navigation.style.display="none";
    background_shadow.style.display="none";
});
background_shadow.addEventListener("click",() => {
    navigation_opener.classList.toggle("navigation-controler_close");
    navigation_closer.classList.toggle("navigation-controler_close");
    primary_navigation.style.display="none";
    background_shadow.style.display="none";
});
// End main navigation click functions  
// Start Slider functions (A11y library)
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true
});
// End Slider functions (A11y library)
// Start regular experession check for email 
        // let pattern=/^\w+@\w+\.[a-z]{2,4}$/ig
        // let pattern= /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
let pattern=  /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
let goo = document.getElementsByClassName("submit_email")[0];
let email= document.getElementsByClassName("email_input")[0];
goo.addEventListener("click",(e)=>{
    if(!pattern.test(email.value)){
        e.preventDefault();
        email.style.cssText="border:3px solid var(--clr-accent-400)";
    }else {
        email.style.border ="none"
    }
})
// End regular experession check for email 