import itemsMeta from "../data/meta.json" with { type: "json" };

window.onload = function () {

  const dropDownListContainers = document.querySelectorAll(".drop-down-list-container");

  function setUpImageSrc(selectItemImage,selectItemSrc) {
    selectItemImage.src = "resources/images/items/" + selectItemSrc;
  }

  function openImageSelectItem(selectItemImage) {
    selectItemImage.style.display = "block";
  }

  function closeImageSelectItem(selectItemImage) {
    selectItemImage.style.display = "none";
  }

  function openDropdownList(startButton,list,selectItemImage) {
    event.stopPropagation();
    closeDropdownLists();
    const listContainer = list.parentElement;
    listContainer.classList.add("open");
    startButton.classList.remove("start-button-selected");
    closeImageSelectItem(selectItemImage);
  }

  function closeDropdownLists() {
    dropDownListContainers.forEach((dropDownListContainer) => {
      dropDownListContainer.classList.remove("open");
    });
  }

  function selectProcess(startButton, selectItemImage) {
    const selectButton = event.target.closest(".drop-down-list-item");
    if (!selectButton) {
      return;
    }
    const selectItemName = selectButton.getAttribute("data-name");
    const selectItemSrc = selectButton.getAttribute("data-imageSrc");
    startButton.textContent = selectItemName;
    startButton.classList.add("start-button-selected");
    setUpImageSrc(selectItemImage,selectItemSrc);
    openImageSelectItem(selectItemImage);
    closeDropdownLists();
  }

  function createListButton(item) {
    const button = document.createElement("div");
    button.textContent = item.name;
    button.classList.add("drop-down-list-item");
    button.setAttribute("data-id",item.id);
    button.setAttribute("data-name",item.name);
    button.setAttribute("data-imageSrc",item.imageSrc);
    return button;
  }

  function initDropDownLists(itemsMeta) {
    dropDownListContainers.forEach((dropDownListContainer) => {
      const startButton = dropDownListContainer.querySelector(".start-button");
      const image = dropDownListContainer.querySelector(".image-select-item");
      const list = dropDownListContainer.querySelector(".drop-down-list");
      itemsMeta.forEach((item) => {
        const button = createListButton(item);
        list.appendChild(button);
      });
      list.addEventListener("click", function () {
        selectProcess(startButton, image);
      });
      startButton.addEventListener("click", function () {
        openDropdownList(startButton,list,image);
      });
    });
  }
  
  initDropDownLists(itemsMeta);
  document.addEventListener("click", closeDropdownLists);
};
