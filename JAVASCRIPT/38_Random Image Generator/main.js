const images = [
    "https://media.istockphoto.com/id/1164224924/photo/feeling-energized.jpg?s=612x612&w=0&k=20&c=WDXVF8pbHS7h81xvhR9X66tR3QPYB5sN4VtwbHo4FB0=",
    "https://media.istockphoto.com/id/525336436/photo/trekking.jpg?s=612x612&w=0&k=20&c=QzbcGsQL1RrzrkwJGHxpTppFdSqg96avdJFjfcn7VEs=",
    "https://media.istockphoto.com/id/1051207682/photo/winter-walk.jpg?s=612x612&w=0&k=20&c=T2bTTICyXptBUIjwUrx8xEi1dgj7CMr1WLWWz0A903Y=",
    "https://media.istockphoto.com/id/1272532874/photo/world-mental-health-day-concept.jpg?s=612x612&w=0&k=20&c=-SzW-L-RgsFtRj642rNhL9jMOt-b2_o41JQCaOzyRyU=",
    "https://media.istockphoto.com/id/1281210009/photo/depressed-asian-woman-in-deep-many-thoughts-having-problem-with-over-thinking.jpg?s=612x612&w=0&k=20&c=1Z1kXxzKY38nfSd5M6APkwuHoZXA8vpAEpyzUb2OopY=",
    "https://media.istockphoto.com/id/1181830509/photo/urban-happy-business-woman-using-tablet-computer-and-working.jpg?s=612x612&w=0&k=20&c=buzhOXeh6D8uX5WzJWbRZOO4DueDpm8UyaqoxAEBuwA=",
    "https://media.istockphoto.com/id/1132312676/photo/man-alone-on-a-swing-looking-at-empty-seat.jpg?s=612x612&w=0&k=20&c=4Uivc9mhMsvw0gSJifBzaGQ9Xv934HrR8U7hDvOj2Ms="
    
  ];
  
  const imageContainer = document.getElementById("image-container");
  const generateButton = document.getElementById("generate-button");
  const imageText = document.getElementById("image-text");
  
  function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    imageContainer.innerHTML = `<img src="${randomImageUrl}" onload="this.style.display='block'">`;
  }
  
  generateButton.addEventListener("click", generateRandomImage);
  