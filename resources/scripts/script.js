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

const startButtons = document.querySelectorAll(".start-button")
const dropDownListsSelectItem = document.querySelectorAll(".drop-down-list")

function openImageSelectItem(currentList) {
    currentList.parentElement.querySelector(".image-select-item").style.display = "block"
}

function closeimageSelectItem(currentList) {
    currentList.querySelector(".image-select-item").style.display = "none"
}

function openDropdownList(event) {
    event.stopPropagation();
    const container = event.target.closest('.drop-down-list-container');
    const dropDownList = container.querySelector('.drop-down-list');
    dropDownList.style.display = "flex";
    event.target.classList.remove("start-button-selected");
    closeimageSelectItem(container); 
}

function closeDropDownAllLists() {
    dropDownListsSelectItem.forEach(dropDownListSelectItem => {
        dropDownListSelectItem.style.display = "none"
    })
}

function closeDropDownList(currentList) {
    currentList.style.display = "none"
}

function setUpImageSrc(selectedItemKey, currentImage) {
    currentImage.src = "resources/images/cars/"+carsMeta[selectedItemKey].imageSrc
    console.log("resources/images/cars/"+carsMeta[selectedItemKey].imageSrc)  
}

function handleClick(event) {
    event.stopPropagation()
    if (!event.target.closest(".drop-down-list") || !(event.target.className === "drop-down-list-item")) {
        closeDropDownAllLists()
        return
    }
    const currentDropDownList = event.target.closest(".drop-down-list")
    const currentStartButton = currentDropDownList.parentElement.querySelector(".start-button")
    const currentImageSelectItem = currentDropDownList.parentElement.querySelector(".image-select-item")
    const selectItemName = event.target.textContent
    currentStartButton.textContent = selectItemName
    currentStartButton.classList.add("start-button-selected")
    setUpImageSrc(event.target.getAttribute("data-item-key"), currentImageSelectItem)
    openImageSelectItem(currentDropDownList)
    closeDropDownList(currentDropDownList)
}

function createDropDownListsContent() {
    dropDownListsSelectItem.forEach(dropDownListSelectCar => {
        for (const item in carsMeta)
            {
                const itemSelectionButton = document.createElement('div')
                itemSelectionButton.textContent = carsMeta[item].name
                itemSelectionButton.classList.add("drop-down-list-item")
                itemSelectionButton.setAttribute("data-item-key", item)
                dropDownListSelectCar.appendChild(itemSelectionButton)
            }
    })
}

createDropDownListsContent()
startButtons.forEach(startButton => {
    startButton.addEventListener('click', openDropdownList)
});
document.addEventListener('click',handleClick)
}