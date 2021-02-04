let navTabs = document.querySelectorAll('.nav-tab');
let locationImages = document.querySelectorAll('.location-item__slide');

for (let i = 0; i < navTabs.length; i++) {
    navTabs[i].onclick = () => {
        if (!navTabs[i].classList.contains('active')) {
            navTabs.forEach(item => {item.classList.remove('active')})
            navTabs[i].classList.add('active');
            locationImages.forEach(item => {item.style.opacity = '0';})
            setTimeout(() => {
                locationImages.forEach(item => {item.classList.add('hidden')})
                locationImages[i].classList.remove('hidden');
            }, 500);
            setTimeout(() => {
                locationImages[i].style.opacity = '1';
            }, 600)
        }
    }
}