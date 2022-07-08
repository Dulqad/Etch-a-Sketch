const grapContainer = document.querySelector('#container')
//creating the grid 
function makeRows(col, row){
    // while(document.querySelector('button') !== null){
    //     document.querySelector('button').remove()
    // }
    grapContainer.style.setProperty('--grid-columns', col)
    grapContainer.style.setProperty('--grid-rows', row)
    grapContainer.style.width="960px"
    grapContainer.style.overflow="hidden"
    for(let i = 0; i < (row * col); i++){
        let square = document.createElement('div')
        square.style.minWidth="0"
        square.style.minHeight="0"
        square.style.overflow="hidden"
        grapContainer.appendChild(square).classList.add('grid-item')

        //add event lestener to check background color presence
        square.addEventListener('mouseover', ()=>{
            if(square.style.backgroundColor == ''){
                let color = randomColor()
                square.style.backgroundColor = color
            }
            // square.style.backgroundColor = 'black'
        })
    }
}

makeRows(12,12)
//creation of button for reseting 
function createButton(){
    const buttonCreat = document.querySelector('.buttonCreate')
    const resetButton = document.createElement('button')
    resetButton.style.margin="20px"
    resetButton.style.padding = "10px"
    resetButton.textContent = 'Reset Button'
    buttonCreat.appendChild(resetButton)
    resetButton.addEventListener('click', ()=>{
        document.querySelectorAll('.grid-item').forEach(e=>e.remove())
        let userInput = prompt('please enter the size of grid per side max 100')
        if(userInput > 100){
            alert('ERROR! please do not enter a number greater than 100 ');
            return ;
        }
        rows = userInput;
        columns = userInput
        makeRows(rows, columns)
    })
    
    console.log(buttonCreat)
}

function randomColor(){
    let  o = Math.round;
    let  r = Math.random;
    let s = 225;
   return "rgb(" + o(r()*s)+ ',' +o(r()*s)+ ','+ o(r()*s) + ')'
   
}
// function createButton (){
//     const userManupulation = document.querySelector('.buttonCreate')
//     const resetButton = document.createElement('button')
//     resetButton.innerHTML = 'Reset Button'
//     resetButton.style.margin="20px"
//     userManupulation.appendChild(resetButton)
//     // console.log(userManupulation)
//     resetButton.addEventListener('click', ()=>{
//         document.querySelectorAll('.grid-item').forEach(e=>e.remove())
//         let userInput = prompt('input any size you want less than 100')
//         if(userInput > userInput){
//             alert('ERROR! please input any size you want less than 100');
//             return;
//         }
//         rows = userInput;
//         columns= userInput
//         makeRows(rows, columns)
//     })
// }
createButton()
