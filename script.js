const menu = document.querySelector('.icon')
const mobilemenu = document.querySelector('.mobileNav')

menu.addEventListener('click', function(){
    console.log('ade')
    if ( mobilemenu.style.display === "block") {
        mobilemenu.style.display = "none";
    } else {
        mobilemenu.style.display = "block";
    }
})