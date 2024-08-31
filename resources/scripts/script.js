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
const imageSelectItem = document.querySelector("#image-select-item")
const dropDownListSelectItem = document.querySelector("#drop-down-list")

function setUpImageSrc(selectedItemKey) {
    imageSelectItem.src = "resources/images/cars/"+carsMeta[selectedItemKey].imageSrc
    console.log("resources/images/cars/"+carsMeta[selectedItemKey].imageSrc)  
}

function openimageSelectItem() {
    imageSelectItem.style.display = "block"
}

function closeimageSelectItem() {
    imageSelectItem.style.display = "none"
}

function openDropdownList(event) {
    event.stopPropagation()
    dropDownListSelectItem.style.display = "flex"
    startButton.classList.remove("button-selected")
    closeimageSelectItem()  
}

function closeDropdownList() {
    dropDownListSelectItem.style.display = "none"
}

function handleClick(event) {
    event.stopPropagation()
    if (!dropDownListSelectItem.contains(event.target) || !(event.target.className === "drop-down-list-item")) {
        closeDropdownList()
        return
    }
    const textSelectButton = event.target.closest(".drop-down-list-item").textContent
    startButton.textContent = textSelectButton
    startButton.classList.add("button-selected")
    setUpImageSrc(event.target.getAttribute("data-item-key"))
    openimageSelectItem()
    closeDropdownList()
}

function createDropDownListContent() {
    for (const car in carsMeta)
    {
        const itemSelectionButton = document.createElement('div')
        itemSelectionButton.textContent = carsMeta[car].name
        itemSelectionButton.classList.add("drop-down-list-item")
        itemSelectionButton.setAttribute("data-item-key", car)
        dropDownListSelectItem.appendChild(itemSelectionButton)
    }
}

createDropDownListContent()
document.addEventListener('click',handleClick)
startButton.addEventListener('click', openDropdownList)
}