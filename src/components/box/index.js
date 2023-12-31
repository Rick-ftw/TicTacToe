var firstColumn = [0, 0, 0];
var secondColumn = [0, 0, 0];
var thirdColumn = [0, 0, 0];

async function addElement(e) {

  if (hasIcon(e)) {
    console.log("hasicon");
  } else {
    createXElement(e);
    e.target.id ? authentication(e) : console.log("no id");;
    whoWon();

    if (autoAddJustification() == true) {
      await automaticAdd();
      whoWon();
    }
  }
  console.log(firstColumn);
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




function authentication(e) {
  const id = e.target.id;
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

  //@ Condtions for "x" element with horizontal line..............
  if (firstColumn[0] === 1 && firstColumn[1] === 1 && firstColumn[2] === 1) {
    handleWin('X', 0);
  } else if (secondColumn[0] === 1 && secondColumn[1] === 1 && secondColumn[2] === 1) {
    // handleWin('X', 1)
  } else if (thirdColumn[0] === 1 && thirdColumn[1] === 1 && thirdColumn[2] === 1) {
    // handleWin('X', 2)
  }


  //* Conditions for "X" element with vertical line
  if (firstColumn[0] === 1 && secondColumn[0] === 1 && thirdColumn[0] === 1) {
    handleWin('X', 4);
  } else if (firstColumn[1] === 1 && secondColumn[1] === 1 && thirdColumn[1] === 1) {
    vr.classList.add("middle-top-bottom");
    setTimeout(() => {
      vr.classList.remove("middle-top-bottom");
      gameover();
      updateScoreX();
    }, 1200);
  } else if (firstColumn[2] === 1 && secondColumn[2] === 1 && thirdColumn[2] === 1) {
    vr.classList.add("right-top-bottom");
    setTimeout(() => {
      vr.classList.remove("right-top-bottom");
      gameover();
      updateScoreX();
    }, 1200);
  }

  //* condition for "X" element with vertical line  
  if (firstColumn[0] === 1 && secondColumn[1] === 1 && thirdColumn[2] === 1) {
    vr.classList.add("zero-nine");
    setTimeout(() => {
      vr.classList.remove("zero-nine");
      gameover();
      updateScoreX();
    }, 1200);
  } else if (firstColumn[2] === 1 && secondColumn[1] === 1 && thirdColumn[0] === 1) {
    vr.classList.add("three-seven");
    setTimeout(() => {
      vr.classList.remove("three-seven");
      gameover();
      updateScoreX();
    }, 1200);
  }




  //@ Condition for "o" element with horizontal line..................
  if (firstColumn[0] === 2 && firstColumn[1] === 2 && firstColumn[2] === 2) {
    // handleWin('O', 0);
  } else if (secondColumn[0] === 2 && secondColumn[1] === 2 && secondColumn[2] === 2) {
    hr.classList.add("middle-right")
    setTimeout(() => {
      hr.classList.remove("middle-right");
      gameover();
      updateScoreO();
    }, 1200);
  } else if (thirdColumn[0] === 2 && thirdColumn[1] === 2 && thirdColumn[2] === 2) {
    hr.classList.add("bottom-right")
    setTimeout(() => {
      hr.classList.remove("bottom-right");
      gameover();
      updateScoreO();
    }, 1200);
  }


  //Conditions for "O" element with vertical line
  if (firstColumn[0] === 2 && secondColumn[0] === 2 && thirdColumn[0] === 2) {
    vr.classList.add("left-top-bottom");
    setTimeout(() => {
      vr.classList.remove("left-top-bottom");
      gameover();
      updateScoreO();
    }, 1200);
  } else if (firstColumn[1] === 2 && secondColumn[1] === 2 && thirdColumn[1] === 2) {
    vr.classList.add("middle-top-bottom");
    setTimeout(() => {
      vr.classList.remove("middle-top-bottom");
      gameover();
      updateScoreO();
    }, 1200);
  } else if (firstColumn[2] === 2 && secondColumn[2] === 2 && thirdColumn[2] === 2) {
    vr.classList.add("right-top-bottom");
    setTimeout(() => {
      vr.classList.remove("right-top-bottom");
      gameover();
      updateScoreO();
    }, 1200);
  }

  //condition for "X" element with vertical line  
  if (firstColumn[0] === 2 && secondColumn[1] === 2 && thirdColumn[2] === 2) {
    vr.classList.add("zero-nine");
    setTimeout(() => {
      vr.classList.remove("zero-nine");
      gameover();
      updateScoreO();
    }, 1200);
  } else if (firstColumn[2] === 2 && secondColumn[1] === 2 && thirdColumn[0] === 2) {
    vr.classList.add("three-seven");
    setTimeout(() => {
      vr.classList.remove("three-seven");
      gameover();
      updateScoreO();
    }, 1200);
  }


}

function handleWin(symbol, value) {

  const winClasses = [
    "left-right", "middle-right", "bottom-right",
    "left-top-bottom", "middle-top-bottom", "right-top-bottom",
    "zero-nine", "three-seven"
  ]
  const horizontalLine = document.getElementById('h_line');
  console.log(horizontalLine);
  horizontalLine.classList.add(winClasses[value]);
  setTimeout(() => {
    horizontalLine.classList.remove(winClasses[value]);
  }, 2000);



  // symbol == 'X' ? updateScoreX() : updateScoreO();
  // gameover();
}
