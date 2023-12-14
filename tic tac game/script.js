const boxes = document.querySelectorAll(".box");
let turn = "x";
const audioPlayer = new Audio("ting.mp3");
let gameOver = false;

Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      changeTurn();
      audioPlayer.play();
      checkWins();
      if(!gameOver){ // if game over is not true or if game over is false ,mane bangla kothay game ta jadi over na hoy tahle code ta run koro.
        document.querySelector(".turn_text").innerHTML = `turn for ${turn}`;
      }
    }
  });
});

const changeTurn = () => {
  if (turn === "x") {
    turn = "0";
  } else {
    turn = "x";
  }
};

const checkWins = () => {
  let boxText = document.querySelectorAll(".boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.map((e) => {
    if (
      boxText[e[0]].innerHTML === boxText[e[1]].innerHTML &&
      boxText[e[2]].innerHTML === boxText[e[1]].innerHTML &&
      boxText[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".turn_text").innerHTML = `${boxText[e[0]].innerHTML + ' is the winner'}`;
      gameOver = true;
      document.querySelector('.info_img').getElementsByTagName('img')[0].style.width = '200px'
    }
  });
};

// ami jadi gameover ta na bujhte pari tahole alada kore r akta p tag banate pari jekhane ami alada kore display block korbo jadi winner decide hoye jai tokhn abar turn er text take none kore dabo..


const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click',()=>{
  const boxText = document.querySelectorAll('.boxText');

  boxText.forEach((boxes)=>{
    boxes.innerHTML = '';
  })

  turn = "x";
  document.querySelector(".turn_text").innerHTML = `Turn for ${turn}`
  document.querySelector('.info_img').getElementsByTagName('img')[0].style.width = '0px';
  gameOver = false;
})