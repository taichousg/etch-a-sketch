// 1. Use Strict Mode
'use strict';

// 2. Global Variables and Constants
let squareTotal = 16;

// 3. Functions
function hoverFunction(){
    const mouseOver = document.getElementById('square');
    mouseOver.style.background = "aqua";
}

function userInput(){
    let newsquareTotal = prompt("Enter a number of squares per side for the new grid:","0-100");
    if (newsquareTotal == null || newsquareTotal == ""){
        squareTotal = 16;
    } else {
        if (newsquareTotal > 100){
            window.alert("Number of squares cannot be higher than 100.")
        } else {
            squareTotal = newsquareTotal;
            const container = document.getElementById('container');
            container.innerHTML = '';
            initializeSquares();
        }
    }
}

function initializeSquares(){
    const container = document.getElementById('container');
    const userSelection = document.getElementById('popup');
    if (container){
        // Create the number of squares inside the grid
        for (let i=0; i<squareTotal*squareTotal;i++){
            const square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
            square.addEventListener('mouseover',function(){square.style.backgroundColor = 'aqua';});
            square.addEventListener('mouseout',function(){square.style.backgroundColor = 'white';});
        }
            const squares = document.querySelectorAll('.square');
            squares.forEach(square=>{
                const size = `calc(100% / ${squareTotal} - 10px)`;
                square.style.height = size;
                square.style.width = size;
                square.style.flexBasis = size;
                square.style.flexShrink = '0';
            })
    }
    else{
        console.error('Container element not found');
    }
    
    const squareNumber = document.getElementById('squareNumber');
    squareNumber.textContent = squareTotal;
}

// 4. Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    initializeSquares();
});

// 5. Main Execution Code
//(function main(){})();