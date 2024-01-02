const box = document.getElementsByClassName("box");
const vr = document.querySelector(".v_ruler");
const hr = document.querySelector(".h_ruler");
const x_scoreText = document.querySelector(".score-x");
const o_scoreText = document.querySelector(".score-o");
const body = document.getElementById("main");


var boxFullorNot = [];

var firstColumn = [0, 0, 0]
var secondColumn = [0, 0, 0];
var thirdColumn = [0, 0, 0];

//Default value of score
var scoreX = 0;
var scoreO = 0;

//Default Value printing
x_scoreText.textContent = scoreX;
o_scoreText.textContent = scoreO;


for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", () => {

        if (!hasIcon(box[i])) {
            append_i_X(box[i]);

            fadeAnimation(box[i]);      //adds animation
            colorBG(i);               //adds bacgroundcolor

            setTimeout(() => {
                if (boxFullorNot.length <= 7) {
                    automaticAdd();
                    whoWon();
                } else {
                    console.log("Stack is full");
                    whoWon();

                    setTimeout(() => {
                        gameover();
                    }, 1200);

                }

            }, 250);
        }

    });
}

//Generates a new number and adds a 'O' element
function automaticAdd() {
    const random = Math.floor(Math.random() * 9);

    //if not current index don't have icon then add
    if (!hasIcon(box[random])) {
        append_i_O(box[random]);
        animation2(box[random]);
    } else {
        if (boxFullorNot.length < 9) {
            //else call again 
            automaticAdd();
        } else {
            //if condition true then out of recursion
            return;
        }

    }

}

//if parameter or box is not empty then returns - true
function hasIcon(box) {

    //box i element not empty means = full
    if (box.querySelector("i") !== null) {
        return true;
    } else {
        return false;
    }

}

//This function cretes new 'X' child element
//Takes "box[?]" element as input
function append_i_X(input) {
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-x", "opacity-zero");
    input.appendChild(icon);
    boxFullorNot.push(input);      //Checks all the boxes got full with elements or not 

    authentication(input);
}

//Takes "box[?]" element as input
//This function cretes new 'O' child element 
function append_i_O(input) {
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-o", "opacity-zero");
    input.appendChild(icon);
    boxFullorNot.push(input);

    authentication(input);
}


//This function animates objects that gets passed in it's parameter
function fadeAnimation(input) {
    let id = input.id;
    let boxy = $(`#${id} i`);

    boxy.on("click", function () {
        $(this).fadeOut();
        $(this).removeClass("opacity-zero");
        setTimeout(() => {
            $(this).fadeIn();
        }, 10);

    });

    boxy.click();
}


//Takes input and animates that object
//Object must have to be a box
function animation2(input) {
    let id = input.id;
    let boxy = $(`#${id} i`);

    boxy.on("click", function () {
        setTimeout(() => {
            $(this).animate({ scale: 1, opacity: 1 });
        }, 500);
    });
    boxy.click();

}

//adds dropshadow in the backgrund
function colorBG(input) {
    box[input].classList.add("click-bg");
    setTimeout(() => {
        box[input].classList.remove("click-bg");
    }, 200);
}

// if not gameover then add 'o' element else not
function gameover() {

    for (let i = 0; i < 9; i++) {

        if (box[i].hasChildNodes()) {

            let id = box[i].id;
            let child = document.querySelector(`#${id} i`);
            box[i].removeChild(child);

        } else {
            console.log("not elments");
        }
    }


    //box length goes to zero
    boxFullorNot = [];

    //All the values goes to zero
    firstColumn = [0, 0, 0];
    secondColumn = [0, 0, 0];
    thirdColumn = [0, 0, 0];
}

function authentication(x) {
    const id = x.id;

    const i_element = document.querySelector(`#${id} i`);
    const fax = i_element.classList.contains("fa-x");



    if (fax == true) {


        switch (id) {
            case "box1":
                firstColumn[0] = 1;
                break;
            case "box2":
                firstColumn[1] = 1;
                break;
            case "box3":
                firstColumn[2] = 1;
                break;

            case "box4":
                secondColumn[0] = 1;
                break;
            case "box5":
                secondColumn[1] = 1;
                break;
            case "box6":
                secondColumn[2] = 1;
                break;

            case "box7":
                thirdColumn[0] = 1;
                break;
            case "box8":
                thirdColumn[1] = 1;
                break;
            case "box9":
                thirdColumn[2] = 1;
                break;

            default:
                console.log("Array intialization error");
                break;
        }


    } else if (fax == false) {

        switch (id) {
            case "box1":
                firstColumn[0] = 2;
                break;
            case "box2":
                firstColumn[1] = 2;
                break;
            case "box3":
                firstColumn[2] = 2;
                break;

            case "box4":
                secondColumn[0] = 2;
                break;
            case "box5":
                secondColumn[1] = 2;
                break;
            case "box6":
                secondColumn[2] = 2;
                break;

            case "box7":
                thirdColumn[0] = 2;
                break;
            case "box8":
                thirdColumn[1] = 2;
                break;
            case "box9":
                thirdColumn[2] = 2;
                break;

            default:
                console.log("Array intialization error");
                break;
        }
    }
}


function whoWon() {

    //@ Condtions for "x" element with horizontal line..............
    if (firstColumn[0] === 1 && firstColumn[1] === 1 && firstColumn[2] === 1) {
        hr.classList.add("left-right");
        setTimeout(() => {
            hr.classList.remove("left-right");
            gameover();
            updateScoreX();
        }, 1200);
    } else if (secondColumn[0] === 1 && secondColumn[1] === 1 && secondColumn[2] === 1) {
        hr.classList.add("middle-right")
        setTimeout(() => {
            hr.classList.remove("middle-right");
            gameover();
            updateScoreX();
        }, 1200);
    } else if (thirdColumn[0] === 1 && thirdColumn[1] === 1 && thirdColumn[2] === 1) {
        hr.classList.add("bottom-right")
        setTimeout(() => {
            hr.classList.remove("bottom-right");
            gameover();
            updateScoreX();
        }, 1200);
    }


    //* Conditions for "X" element with vertical line
    if (firstColumn[0] === 1 && secondColumn[0] === 1 && thirdColumn[0] === 1) {
        vr.classList.add("left-top-bottom");
        setTimeout(() => {
            vr.classList.remove("left-top-bottom");
            gameover();
            updateScoreX();
        }, 1200);
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
        hr.classList.add("left-right");
        setTimeout(() => {
            hr.classList.remove("left-right");
            gameover();
            updateScoreO();
        }, 1200);
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

//To update the score count 
function updateScoreX() {
    scoreX++;
    x_scoreText.textContent = scoreX;
}
function updateScoreO() {
    scoreO++;
    o_scoreText.textContent = `${scoreO}`;
}


