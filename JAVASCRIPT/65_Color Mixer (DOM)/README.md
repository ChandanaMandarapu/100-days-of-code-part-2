Inside the <body> tag of the HTML code, we define the visible content of the webpage. We start with a <div> element that acts as a container and has a class of "container". This container holds the color input fields, mix button, and the area to display the mixed color.To allow users to select colors, we use <input> tags with the type attribute set to "color". Each input field has a unique ID, such as "color1", "color2", and so on. Accordingly I styled using Css.
  
Logic of the Code
  
The code selects all the color input fields on the page and stores them in a variable called colorInputs. These input fields are where the user selects different colors. Now It selects the mix button which is on the page and stores it in a variable called mixButton. When this button is clicked all 5 colors are combined.

Here to change the background of the page when button is clicked the code also selects the body element of the page and stores it in a variable called body. When the mix button is clicked, it calls a function named mixColors.

Here in the mixColors function, an empty array called colors is created. Main use of this array is to store the selected colors at once. Now a loop is run in the function whch goes through each color input field and adds the value to the selected color and then adds this value to the colors array which we created.

After collecting all the 5 color values, the function calls another function named mixRGB, passing the colors array as an argument(why this because now after providing the values entered by the user this all are combined and give one new color) . The mixRGB function to calculate the average color. Inside the mixRGB function, three variables (r, g, and b) are initialized to zero. These variables will store the sum of the red, green, and blue values respectively.

Main thing lies here The function iterates over each color in the colors array. For each color, it converts the (HEXA DECIMAL ) color value to its (RGB)  components using another function called hexToRGB as the colors are provide in hexa decimal format we need to convert it . It then adds the corresponding red, green, and blue values to r, g, and b respectively. After adding up the RGB values, the function divides each sum by the number of colors in the colors array to calculate the average. It rounds the average values to the nearest whole number.

Finally, the function calls another function named RGBToHex with the average red, green, and blue values as arguments. This function converts the RGB values back to a hexadecimal color code. To present the color which is at last mixed by the users and present it for that we again convert that into hexadecimal color code. The resulting mixed color is then assigned as the background color of the body element.

Thank You.
