window.addEventListener('DOMContentLoaded', () => {
    let togglerBtn = document.querySelector('.site-nav__togler'),
        siteHeader = document.querySelector('.site-header'),
        siteNavList = document.querySelector('.site-nav__list');
    
    if(togglerBtn){
        togglerBtn.addEventListener('click', () => {
            togglerBtn.classList.toggle('site-nav__togler--close'); 
            siteHeader.classList.toggle('site-header--click');
            siteNavList.classList.toggle('site-nav__list--open');
        })
    }
})