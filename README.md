# Site Item Selection
Site Item Selection is a web application that allows users to select a item from a drop-down list. When a item is selected, the corresponding image is displayed.

## Installation and Run
Clone the repository:
```
git clone https://github.com/Bobbrawler/site-item-selection.git
```
Go to the project folder:
```
cd choose-item
```
Open index.html in a web browser: Find the index.html file in the project folder and open it in any modern web browser (Chrome, Firefox, Safari, etc.).

To enter your render data for selection, you need to create a JSON file "meta.json" and place it along the path resources/data/meta.json
An example of such a file:
```
[
    {
      "id": "id1"
      "name": "name1",
      "imageSrc": "imageSrc1"
    },
    {
      "id": "id2"
      "name": "name2",
      "imageSrc": "imageSrc2"
    },
]
  
```
Field "name" is used to populate the list fields, and field "imageSrc" is used to open the image of the corresponding selected item.

## Usage
1. Click on the "Open list" button.
2. Select the desired it from the drop-down list.
3. Clicking on a item will update the button text and display the image of the selected item.

## Features
1. Drop-down list: User can open the list of items by clicking on the "Open list" button.
2. item Selection: When you click on a item name from the list, it is set as the button text and an image of the selected item is displayed.
3. Interactivity: List items are enlarged on hover, improving user experience.
4. Responsive Design: The app displays correctly on different devices thanks to responsive CSS.

## Technologies
1. HTML: Used for the structure of the web page.
2. CSS: Used to style elements and create visual design.
3. JavaScript: Used to add interactivity, handle events, and dynamically change the page content.

## Main Files
1. index.html: The main HTML page of the app.
2. resources/styles.css: CSS file for styling the app.
3. resources/script.js: JavaScript file for adding interactivity and app logic.
4. resources/images/: Folder containing item images.
5. resources/data/meta.json: data for filling lists.