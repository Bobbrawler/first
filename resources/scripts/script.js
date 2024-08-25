window.onload = function() {
const carsMeta = {
    mazdaMiata: {
        name: "Mazda Miata",
        imageSrc: "mazdaMiata.jpg"
    },
    ferrariF40: {
        name: "Ferrari F40",
        imageSrc: "ferrariF40.jpg"
    },
    toyotaLevin: {
        name: "Toyota Levin",
        imageSrc: "toyotaLevin.jpg"
    },
    chevroletCorvette: {
        name: "Chevrolet Corvette",
        imageSrc: "corvet.jpg"
    }  
}

const startButton = document.querySelector("#start-button")
const imageSelectCar = document.querySelector("#image-select-car")
const dropDownListSelectCar = document.querySelector("#drop-down-list")

function setUpImageSrc(selectedCarKey) {
    imageSelectCar.src = "resources/images/cars/"+carsMeta[selectedCarKey].imageSrc  
}

function openImageSelectCar() {
    imageSelectCar.style.display = "block"
}

function closeImageSelectCar() {
    imageSelectCar.style.display = "none"
}

function openDropdownList(event) {
    dropDownListSelectCar.style.display = "flex"
    startButton.classList.remove("button-selected")
    closeImageSelectCar()
    event.stopPropagation()  
}

function closeDropdownList() {
    dropDownListSelectCar.style.display = "none"
}

function handleClick(event) {
    if (!dropDownListSelectCar.contains(event.target) || !(event.target.className === "drop-down-list-item")) {
        closeDropdownList()
        return
    }
    startButton.textContent = event.target.closest(".drop-down-list-item").textContent
    startButton.classList.add("button-selected")
    setUpImageSrc(event.target.getAttribute("data-car-key"))
    openImageSelectCar()
    closeDropdownList()
    event.stopPropagation()
}

function createDropDownListContent() {
    for (const car in carsMeta)
    {
        const carSelectionButton = document.createElement('div')
        carSelectionButton.textContent = carsMeta[car].name
        carSelectionButton.classList.add("drop-down-list-item")
        carSelectionButton.setAttribute("data-car-key", car)
        dropDownListSelectCar.appendChild(carSelectionButton)
    }
}

createDropDownListContent()
document.addEventListener('click',handleClick)
startButton.addEventListener('click', openDropdownList)
}