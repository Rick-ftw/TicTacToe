async function addElement(e) {
    if (hasIcon(e)) {
        console.log("hasicon");
    } else {
        const child = document.createElement("i");
        child.classList.add("fa-x", "fa-solid");
        const box = document.getElementById(e.target.id);
        box == null ? console.log("Null") : box.appendChild(child);
    }
}

async function automaticAdd() {
    const random = Math.floor(Math.random() * 9);
    const child = document.createElement("i");
    child.classList.add("fa-o", "fa-solid");
    const allBox = document.getElementsByClassName("box");

    for (let i = 0; i < 9; i++) {
        console.log(allBox[i]);
    }
}

function hasIcon(e) {

    const childLength = e.target.children.length;
    if (childLength > 0 ) {
        return true;
    } else {
        return false;
    }
}
export { addElement, hasIcon, automaticAdd }