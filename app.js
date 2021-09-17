//on click of button h1 is changed to display color code
//on click of button, css background color is changed


const h1Style = document.querySelector('h1').style
h1Style.display = 'flex';
h1Style.justifyContent = 'center';

const backgroundColor = document.querySelector('body').style.backgroundColor = 'blue';
const button = document.querySelector('button');

button.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255);  
    const g = Math.floor(Math.random() * 255); 
    const b = Math.floor(Math.random() * 255); 

    if (r<90 || g<90 || b<90) {
        h1Style.color = "white";
    }
    else {
        h1Style.color = "black"
    }

    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('body').style.backgroundColor = newColor;

    const h1 = document.querySelector('h1')
    h1.innerHTML =`rgb(${r}, ${g}, ${b})`;

    
})