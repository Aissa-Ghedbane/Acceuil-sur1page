const navigation = document.querySelector('nav');

window.addEventListener('scroll',() => {
    
    if(window.scrollY > 30){
        navigation.classList.add('anim-nav');

    } else {
        navigation.classList.remove('anim-nav');
    }
})


const navigation2 = document.querySelector('nav');

window.addEventListener('scroll',() => {
    
    if(window.scrollY > 1790){
        navigation.classList.add('anim-nav2');

    } else {
        navigation.classList.remove('anim-nav2');
    }
})