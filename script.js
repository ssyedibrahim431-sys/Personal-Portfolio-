// ================================
// Syed Ibrahim Portfolio
// script.js
// ================================

// Elements

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidePanel = document.getElementById("sidePanel");
const overlay = document.getElementById("overlay");


// ================================
// Open Side Panel
// ================================

function openMenu(){

    sidePanel.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


// ================================
// Close Side Panel
// ================================

function closeMenu(){

    sidePanel.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

}


menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);


// Close when menu item clicked

document.querySelectorAll(".sidePanel a").forEach(link=>{

    link.addEventListener("click",closeMenu);

});


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Header Shadow
// ================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        header.style.boxShadow="0 8px 25px rgba(163,0,0,.45)";

    }else{

        header.style.boxShadow="0 6px 18px rgba(0,0,0,.35)";

    }

});


// ================================
// Reveal Animation
// ================================

const reveals=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.classList.add("show");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});


// ================================
// Active Menu Highlight
// ================================

const navLinks=document.querySelectorAll(".sidePanel a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const top=section.offsetTop-120;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.style.background="transparent";

        if(link.getAttribute("href")==="#" + current){

            link.style.background="#a30000";

        }

    });

});


// ================================
// Escape Key closes menu
// ================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMenu();

    }

});


// ================================
// Loading Complete
// ================================

window.addEventListener("load",()=>{

    console.log("Syed Ibrahim Portfolio Loaded Successfully");

});
