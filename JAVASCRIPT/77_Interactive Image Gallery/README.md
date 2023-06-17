Hello Everyone,

This code represents an interactive image gallery implemented in HTML, CSS, and JavaScript. The gallery displays a collection of images related to Kerala.

Here's how the code works:

The HTML structure consists of a heading, a container div with the class "gallery," and a modal div with the class "modal." Inside the gallery div, there are several image divs, each representing an image in the gallery. Each image div contains an img element displaying the image, along with a caption div showing the name of the location.

The CSS styles define the layout and appearance of the gallery and modal. It sets the background color, font, margin, and padding of the body. The gallery is displayed as a flex container with wrapped items, centered horizontally. Each image has a fixed width and height, along with a transition effect on hover. The image caption appears at the bottom with a semi-transparent background, becoming fully visible on hover. The modal is initially hidden and appears as an overlay when an image is clicked.

The JavaScript code handles the functionality of the image gallery. It starts by defining an array called "images" that contains the URLs of the images to be displayed in the gallery.

The openModal function is called when an image is clicked(to open the image when user clicks). It displays the modal by setting its display property to "flex" and adds the "show" class to make it visible. The clicked image's URL is assigned to the src attribute of the modal's image element, and the current index is updated accordingly.

The closeModal function is called when the user clicks the close button (a cross symbol). It hides the modal by setting its display property to "none" and removes the "show" class.

The prevImage function is triggered when the user clicks the previous button in the modal. It decrements the current index, ensuring it wraps around to the last image if the first image is reached. The modal's image element is then updated with the new image URL.

The nextImage function is triggered when the user clicks the next button in the modal. It increments the current index, ensuring it wraps around to the first image if the last image is reached. The modal's image element is then updated with the new image URL.

By combining HTML, CSS, and JavaScript, this code creates an interactive image gallery where users can view images of different locations in Kerala and navigate through them using a modal window.

My Project https://symphonious-sfogliatella-d0d9a3.netlify.app/