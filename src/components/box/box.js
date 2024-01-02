/* Tic Tac Toe 2024*/
/*

  This is made by Pranay (Rick) dutta  

*/


var firstColumn = [0, 0, 0];
var secondColumn = [0, 0, 0];
var thirdColumn = [0, 0, 0];
let isGameover = false;
let scoreX = 0;
let scoreO = 0;

async function addElement(e) {
  const id = e.target.id;

  if (hasIcon(e)) {
    console.log("hasicon");
  } else {
    createXElement(e);
    id ? authentication(id) : console.log("no id");;
    whoWon();

    if (autoAddJustification() == true && isGameover == false) {
      const automatically_added_element = await automaticAdd();
      authentication(automatically_added_element.id);
      whoWon();
    }
  }

}

async function automaticAdd() {
  const allBox = document.getElementsByClassName("box");
  const random = Math.floor(Math.random() * 9);

  if (allBox[random].children.length < 1) {
    createOElement(allBox, random);
    return allBox[random];
  } else {
    try {
      return await automaticAdd();
    } catch (error) {
      console.log(error);
      return;
    }
  }

}

function hasIcon(e) {
  const childLength = e.target.children.length;
  if (childLength > 0) {
    return true;
  } else {
    return false;
  }
}
function createXElement(e) {
  const child = document.createElement("i");
  child.classList.add("fa-x", "fa-solid");
  const box = document.getElementById(e.target.id);
  box == null ? console.log("Null") : box.appendChild(child);
}

function createOElement(allBox, random) {
  const child = document.createElement("i");
  child.classList.add("fa-o", "fa-solid");
  allBox[random].appendChild(child);

}

function authentication(id) {
  const iElement = document.getElementById(id);
  const boxChild = iElement.childNodes[0].classList[0];
  let oneOrTwo;

  if (boxChild == 'fa-x') {
    oneOrTwo = 1;
  } else if (boxChild == 'fa-o') {
    oneOrTwo = 2;
  }

  switch (id) {
    case "box1":
      firstColumn[0] = oneOrTwo;
      break;
    case "box2":
      firstColumn[1] = oneOrTwo;
      break;
    case "box3":
      firstColumn[2] = oneOrTwo;
      break;
    case "box4":
      secondColumn[0] = oneOrTwo;
      break;
    case "box5":
      secondColumn[1] = oneOrTwo;
      break;
    case "box6":
      secondColumn[2] = oneOrTwo;
      break;
    case "box7":
      thirdColumn[0] = oneOrTwo;
      break;
    case "box8":
      thirdColumn[1] = oneOrTwo;
      break;
    case "box9":
      thirdColumn[2] = oneOrTwo;
      break;
    default:
      console.log("Array intialization error");
      break;
  }


}


function autoAddJustification() {
  const allBox = document.getElementsByClassName("box");
  let listOfItems = [];
  for (let i = 0; i < 9; i++) {
    listOfItems[i] = allBox[i].children.length;
  }

  let filteredList = [];
  filteredList = listOfItems.filter((item) => item == 1);

  if (filteredList.length <= 8) {
    return true;
  }
  else {
    return false;
  }
}

export { addElement, hasIcon, automaticAdd }

function whoWon() {

  //! Condtions for "x" element with horizontal line..............
  if (firstColumn[0] === 1 && firstColumn[1] === 1 && firstColumn[2] === 1) {
    handleWin('X', 0);
  } else if (secondColumn[0] === 1 && secondColumn[1] === 1 && secondColumn[2] === 1) {
    handleWin('X', 1)
  } else if (thirdColumn[0] === 1 && thirdColumn[1] === 1 && thirdColumn[2] === 1) {
    handleWin('X', 2)
  }

  //* Conditions for "X" element with vertical line
  if (firstColumn[0] === 1 && secondColumn[0] === 1 && thirdColumn[0] === 1) {
    handleWin('X', 3);
  } else if (firstColumn[1] === 1 && secondColumn[1] === 1 && thirdColumn[1] === 1) {
    handleWin('X', 4)
  } else if (firstColumn[2] === 1 && secondColumn[2] === 1 && thirdColumn[2] === 1) {
    handleWin('X', 5)
  }

  //* condition for "X" element with diagonal line  
  if (firstColumn[0] === 1 && secondColumn[1] === 1 && thirdColumn[2] === 1) {
    handleWin('X', 6)
  } else if (firstColumn[2] === 1 && secondColumn[1] === 1 && thirdColumn[0] === 1) {
    handleWin('X', 7)
  }


  //! Condtions for "o" element with horizontal line..............
  if (firstColumn[0] === 2 && firstColumn[1] === 2 && firstColumn[2] === 2) {
    handleWin('O', 0);
  } else if (secondColumn[0] === 2 && secondColumn[1] === 2 && secondColumn[2] === 2) {
    handleWin('O', 1)
  } else if (thirdColumn[0] === 2 && thirdColumn[1] === 2 && thirdColumn[2] === 2) {
    handleWin('O', 2)
  }

  //* Conditions for "X" element with vertical line
  if (firstColumn[0] === 2 && secondColumn[0] === 2 && thirdColumn[0] === 2) {
    handleWin('O', 3);
  } else if (firstColumn[1] === 2 && secondColumn[1] === 2 && thirdColumn[1] === 2) {
    handleWin('O', 4)
  } else if (firstColumn[2] === 2 && secondColumn[2] === 2 && thirdColumn[2] === 2) {
    handleWin('O', 5)
  }

  //* condition for "X" element with diagonal line  
  if (firstColumn[0] === 2 && secondColumn[1] === 2 && thirdColumn[2] === 2) {
    handleWin('O', 6)
  } else if (firstColumn[2] === 2 && secondColumn[1] === 2 && thirdColumn[0] === 2) {
    handleWin('O', 7)
  }


}

function handleWin(symbol, value) {
  console.log(symbol);
  const horizontalLine = document.getElementById('line');
  const winClasses = [
    "left-right", "middle-right", "bottom-right",
    "left-top-bottom", "middle-top-bottom", "right-top-bottom",
    "zero-nine", "three-seven"
  ]

  if (value == 0 || value == 1 || value == 2) {
    horizontalLine.classList.add(winClasses[value]);
    setTimeout(() => {
      horizontalLine.classList.remove(winClasses[value]);
    }, 1200);
  } else {
    horizontalLine.classList.remove("win-line");
    horizontalLine.classList.add(winClasses[value]);
    setTimeout(() => {
      horizontalLine.classList.remove(winClasses[value]);
    }, 1200);
  }

  setScore(symbol);
}


function updateScore() {
  let score_x_Span = document.getElementById("score-x");
  let score_o_Span = document.getElementById("score-o");

  score_x_Span.innerText = ` ${scoreX}`;
  score_o_Span.innerText = ` ${scoreO}`;
}


function setScore(symbol) {
  if (symbol == 'X') {
    scoreX++;
    setTimeout(() => {
      updateScore();
      gameover();
    }, 1200);
  } else if (symbol == 'O') {
    scoreO++;
    setTimeout(() => {
      updateScore();
      gameover();
    }, 1200);
  }
}


function gameover() {
  const box = document.getElementsByClassName("box");
  for (let i = 0; i < 9; i++) {

    if (box[i].hasChildNodes()) {
      let id = box[i].id;
      let child = document.querySelector(`#${id} i`);
      box[i].removeChild(child);

    } else {
      console.log("not elments");
    }
  }

  //All the values goes to zero
  firstColumn = [0, 0, 0];
  secondColumn = [0, 0, 0];
  thirdColumn = [0, 0, 0];

  isGameover = true;
  setTimeout(() => { isGameover = false }, 1000);
}




