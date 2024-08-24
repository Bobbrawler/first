window.onload = function() {
const carList = {
    "Mazda Miata": "mazdaMiata.jpg",
    "Ferrari F40": "ferrariF40.jpg",
    "Toyota Levin": "toyotaLevin.jpg",
    "Chevrolet Corvette": "corvet.jpg"
}
const startButton = document.querySelector("#start-button")
const imageOfTheSelectedCar = document.querySelector("#image-of-the-selected-car")
const dropDownListForSelectingACar = document.querySelector("#drop-down-list")
function openDropdownList() {
    dropDownListForSelectingACar.style.display = "flex"
    closeImageOfTheSelectedCar()  
}
function closeDropdownList() {
    dropDownListForSelectingACar.style.display = "none"
}
function openImageOfTheSelectedCar() {
    imageOfTheSelectedCar.style.display = "block"
}
function closeImageOfTheSelectedCar() {
    imageOfTheSelectedCar.style.display = "none"
}

function handleClickAfterOpeningDropDownList(event) {
    console.log(event.target.classList.value)
    if (event.target === startButton) {
        openDropdownList()
        console.log("кнопка старта")
        return
    }
    if ((!dropDownListForSelectingACar.contains(event.target) && event.target !== startButton) || !(event.target.children.length === 0)) {
        closeDropdownList()
        console.log("мимо")
        return
    }
    console.log("выбрал")
    const selectedCarName = event.target.textContent
    startButton.textContent = selectedCarName
    settingUpTheImageLinkOfTheSelectedCar(selectedCarName)
    closeDropdownList()
    openImageOfTheSelectedCar()
}
function settingUpTheImageLinkOfTheSelectedCar(selectedCarName) {
    console.log("images/"+carList[selectedCarName])
    imageOfTheSelectedCar.src = "resources/images/"+carList[selectedCarName]   
}
function selectCar(event) {
    const selectedCarName = event.target.textContent
    
    startButton.innerHTML = selectedCarName
    startButton.classList.add('start-button-selected')
    closeDropdownList()
    openImageOfTheSelectedCar()
    addImageCar(selectedCarName)
}

function creatingDropDownListContent() {
    for (const carName in carList)
    {
        const carSelectionButton = document.createElement('div')
        carSelectionButton.textContent = carName
        carSelectionButton.classList.add("drop-down-list-item")
        dropDownListForSelectingACar.appendChild(carSelectionButton)
    }
}
creatingDropDownListContent()
document.addEventListener('click',handleClickAfterOpeningDropDownList)

}