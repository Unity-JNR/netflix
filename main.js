const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
	if(window.scrollY >= 100){
	 nav.classList.add('nav_blacks')
	} else
	nav.classList.remove('nav_blacks');
});