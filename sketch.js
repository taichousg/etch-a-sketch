// 1. Use Strict Mode
'use strict';

// 2. Global Variables and Constants
let squareTotal = 16;

// 3. Functions
function hoverFunction(){
    const mouseOver = document.getElementById('square');
    mouseOver.style.background = "aqua";
}

// 4. Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById('container');
    const userSelection = document.getElementById('totalSquares');

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
    if (userSelection){
        userSelection.addEventListener('click', function(){
            /* Popup for user to input a number from 16 to 100*/
        });
    }
    else{
        console.error('Button userSelection element not found');
    }
    
});

// 5. Main Execution Code
//(function main(){})();