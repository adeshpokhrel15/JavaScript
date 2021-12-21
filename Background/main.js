//color array
let colors = ['red','yellow','black','orange','brown'];

// get button 
let button = document.getElementById('button');

//add eventlistener
button.addEventListener('click',function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random()*colors.length)]

    // get container

    let container = document.getElementById('container');

    container.style.background = randomColor;
})