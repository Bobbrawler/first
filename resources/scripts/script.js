import itemsMeta from "../data/meta.json" with { type: "json" };

window.onload = function () {

  const dropDownListContainers = document.querySelectorAll(
    ".drop-down-list-container"
  );
  const dropDownLists = document.querySelectorAll(".drop-down-list");

  function setUpImageSrc(selectItemImage, selectItemName) {
    const selectItemSrc = itemsMeta.find(
      (unit) => unit.name === selectItemName
    ).imageSrc;
    selectItemImage.src = "resources/images/items/" + selectItemSrc;
  }

  function openImageSelectItem(selectItemImage) {
    selectItemImage.style.display = "block";
  }

  function closeImageSelectItem(selectItemImage) {
    selectItemImage.style.display = "none";
  }

  function openDropdownList(
    startButton,
    dropDownListSelectItem,
    selectItemImage,
    event
  ) {
    event.stopPropagation();
    closeDropdownLists();
    dropDownListSelectItem.classList.add("open")
    startButton.classList.remove("start-button-selected");
    closeImageSelectItem(selectItemImage);
  }

  function closeDropdownLists() {
    dropDownLists.forEach((dropDownList) => {
      dropDownList.classList.remove("open")
    });
  }


  function selectProcess(startButton, selectItemImage, event) {
    if (!event.target.closest(".drop-down-list-item")) {
      return;
    }
    const selectItemName = event.target.closest(
      ".drop-down-list-item"
    ).textContent;
    startButton.textContent = selectItemName;
    startButton.classList.add("start-button-selected");
    setUpImageSrc(selectItemImage, selectItemName);
    openImageSelectItem(selectItemImage);
    closeDropdownLists();
  }

  function createDropDownListContent(itemsMeta,dropDownListSelectItem) {
    itemsMeta.forEach((item) => {
      const itemSelectionButton = document.createElement("div");
      itemSelectionButton.textContent = item.name;
      itemSelectionButton.classList.add("drop-down-list-item");
      dropDownListSelectItem.appendChild(itemSelectionButton);
    });
  }

  function initDropDownLists() {
    dropDownListContainers.forEach((dropDownListContainer) => {
      const startButton = dropDownListContainer.querySelector(".start-button");
      const selectItemImage =
        dropDownListContainer.querySelector(".image-select-item");
      const dropDownListSelectItem =
        dropDownListContainer.querySelector(".drop-down-list");
      createDropDownListContent(itemsMeta,dropDownListSelectItem);
      dropDownListSelectItem.addEventListener("click", function () {
        selectProcess(startButton, selectItemImage, event);
      });
      startButton.addEventListener("click", function () {
        openDropdownList(
          startButton,
          dropDownListSelectItem,
          selectItemImage,
          event
        );
      });
    });
  }
  initDropDownLists()
  document.addEventListener("click", closeDropdownLists);
};
