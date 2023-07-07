const menu = document.querySelector('.icon')
const mobilemenu = document.querySelector('.mobileNav')
const message = document.querySelectorAll('.hs-accordion-content')
const btn = document.querySelectorAll('.hs-accordion-toggle')


menu.addEventListener('click', function(){
    console.log('ade')
    if ( mobilemenu.style.display === "block") {
        mobilemenu.style.display = "none";
    } else {
        mobilemenu.style.display = "block";
    }
})
btn.forEach(element => {
    element.addEventListener('click', function(){
        console.log('ade')
       message.forEach((element, nu) => {
          const content = element
          console.log(nu)
          if ( content.style.display === "block") {
            contentu.style.display = "none";
        } else {
            content.style.display = "block";
        }
       });
    })
});


const typed = new Typed('#text', {
    strings: [' Photography is poetry & ', ' Beautiful;  '],
    typeSpeed: 50,
  });
const type = new Typed('#cold', {
    strings: [' The Boolean Egyptian '],
    cursorChar: '_',
    typeSpeed: 50,
});


// ScrollReveal().reveal('.revel', { delay: 2000 });
// ScrollReveal().reveal('.image1', { delay: 500 });
// ScrollReveal().reveal('.image2', { delay: 1000 });
// ScrollReveal().reveal('.image3', { delay: 1500 });
// ScrollReveal().reveal('.image4', { delay: 2000 });