const iconTag = document.querySelector('div.icon')
const iconTags = document.querySelectorAll('div.icon svg')

var activeIcon = 0

iconTag.addEventListener('click', function () {
    iconTags.forEach(item => {
        item.classList.add('hidden')
    });

    activeIcon += 1

    if (activeIcon > 3) {
        activeIcon = 0
    }

    iconTags[activeIcon].classList.remove('hidden')
})
