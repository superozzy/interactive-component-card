// set variables 

const nonActiveButton = document.querySelector('.none-active');
const activeButton = document.querySelector('.active')
const personContainer= document.querySelector('.person-container');
const socialContainer = document.querySelector('.social-container')
const desktopActiveBar = document.querySelector('.desktop-active-bar');
const desktopShareText = document.querySelector('.share-text-desktop');
const desktopInnerWidth = window.matchMedia('(min-width :1024px)');

// add eventListeners

nonActiveButton.addEventListener('click',getSocial);


activeButton.addEventListener('click',function(){
    personContainer.style.display = 'flex';
    nonActiveButton.style.display = 'block';
    socialContainer.style.display = 'none';
    activeButton.style.display ='none';
 
})
// set function

    
function getSocial(){
 personContainer.style.display = 'none';
 nonActiveButton.style.display = 'none';
 socialContainer.style.display = 'flex';
 activeButton.style.display ='block';
 if(desktopInnerWidth.matches){
     socialContainer.style.display = 'none'
     personContainer.style.display = 'flex'
     nonActiveButton.style.display = 'block';
     desktopActiveBar.style.display = 'flex'
     desktopShareText.style.display = 'block'
     desktopShareText.textContent ='SHARE'
 }else if(!desktopInnerWidth.matches){
    desktopShareText.textContent ="";
 }


}