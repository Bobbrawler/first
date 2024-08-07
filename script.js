const startButton = document.querySelector(".startButton")
startButton.addEventListener('click', openDropdownList)

function closeDropdownListOnClickOutside(event) {
    const dropdown = document.querySelector(".dropdownList")
    if (!dropdown.contains(event.target) && event.target !== startButton) {
        dropdown.style.display = "none"
        document.removeEventListener('click', closeDropdownListOnClickOutside)
    }
}

function addImageCar(select) {
    const image = document.querySelector(".image")
    switch (select) {
        case "Mazda Miata":
            image.src = "pictures/Mazda-Miata.jpg"
           
            break;
        case "Ferrari F40":
            image.src = "pictures/Ferrari-F-40.jpg"
            
            break;
        case "Toyota Levin":
            image.src = "pictures/Toyota-Levin.jpg"
           
            break;
        case "Chevrolet Corvette":
            image.src = "pictures/corvet.jpg"
            
            break;
        default:
            image.src = "pictures/startImage.jpg"
    }
    
}


function selectPosition(event) {
    const select = event.target.textContent
    startButton.innerHTML = select
    startButton.classList.add('startButton-selected')
    document.querySelector(".dropdownList").style.display = "none"
    document.querySelector(".image").style.display = "block"
    addImageCar(select)
}

function openDropdownList() {
    const dropdownList = document.querySelector(".dropdownList")
    dropdownList.style.display = "flex"
    document.querySelector(".image").style.display = "none"
    document.addEventListener('click', closeDropdownListOnClickOutside)
}

const list = document.querySelectorAll(".dropdownListItem")
list.forEach((button) => {
    button.addEventListener('click', selectPosition)

});
