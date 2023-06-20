Hello Everyone,

Song Mood Selector 

HTML Structure:

The project is built using HTML, CSS, and JavaScript.
The HTML structure consists of heading elements, mood options, song display area, and placeholders for song information.

CSS Styling:

CSS styles are applied to create a visually appealing interface.
The background color is set to #0b0b0b (dark gray), and the font color is set to aliceblue.
The heading (h1) is centered and has a color of azure.
The mood options are centered and styled as clickable buttons.
The song display area is centered, and the song information is aligned in a column.

JavaScript Functionality:

JavaScript is used to add interactivity to the Song Mood Selector.
The JavaScript code starts by selecting the mood buttons and the song display elements using their respective IDs and classes.
An array of song objects is defined, with each object containing properties such as mood, title, artist, and image URL.
The displaySong() function is defined to handle the song display based on the selected mood.
Inside displaySong(), the selected mood is matched with the mood of each song object using the Array.find() method.
If a matching song is found, the image, title, and artist of the selected song are updated in the song display elements.
If no matching song is found, the song display elements are reset to display a "No song found" message.
An event listener is added to each mood button to trigger the displaySong() function when clicked.
When a mood button is clicked, the selected mood is passed as an argument to the displaySong() function.

Song Data and Images:

The song data is stored in the songs array, which contains objects for different moods.
Each object includes properties such as mood, title, artist, and image URL.
The image URLs point to external images hosted online.
The initial song displayed is set to "Humari Adhuri Kahani" by Arijit Singh, with a corresponding image.

Functionality:

When a mood button is clicked, the displaySong() function is triggered.
The function searches for a song object with a matching mood.
If a matching song is found, the image, title, and artist of the song are updated in the song display elements.
If no matching song is found, the song display elements are reset to display a "No song found" message.

Thank You..