
 function openclose(){
    const mobilenav= document.querySelector(".mobile-nav ");
    mobilenav.classList.toggle("open");
     const navbar=document.querySelector(".navbar");
     navbar.classList.toggle("nav-open");
 }
 
 
 let salon = document.querySelector(".salon")
 let sam = document.querySelector(".sam")
 let chambres = document.querySelector(".chambre")
function showsalon(){
        salon.style.display="grid";
        sam.style.display="none";
        chambres.style.display="none";
}
 function showChambres(){
    salon.style.display="none";
    sam.style.display="none";
    chambres.style.display="grid";
 
    
}
function showSalleAManger(){
    salon.style.display="none";
    sam.style.display="grid";
    chambres.style.display="none";
}