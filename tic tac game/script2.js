const boxes = document.querySelectorAll('.box')
const turn_text = document.querySelector('.turn_text');
let turn = 'x';
let music = new Audio('ting.mp3');

boxes.forEach((elm)=>{
    elm.addEventListener('click',()=>{
        const boxText = elm.querySelector('.boxText');
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            changeTurn();
            winTheGame();
            music.play();
            if(!winTheGame){
                turn_text.innerHTML = `Turn for ${turn}`;
            }
        }
    })
})

const changeTurn = () =>{
    if(turn === 'x'){
        turn = '0';
    }
    else{
        turn = 'x';
    }
}

const winTheGame = () =>{
    const boxText = document.querySelectorAll('.boxText');
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.map((elm)=>{
        if (
            boxText[elm[0]].innerHTML === boxText[elm[1]].innerHTML &&
            boxText[elm[2]].innerHTML === boxText[elm[1]].innerHTML &&
            boxText[elm[0]].innerHTML !== ""
          ){
            turn_text.innerHTML = `${boxText[elm[0]].innerHTML} is the Winner`;
            document.querySelector('.info_img').getElementsByTagName('img')[0].style.width = '200px';
        } 
    })
}

const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click',()=>{
    const boxText = document.querySelectorAll('.boxText')
    boxText.forEach((box)=>{
        box.innerHTML = ''
    })
    let turn = 'x';
    turn_text.innerHTML = `Turn for : ${turn}`;
})