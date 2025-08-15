let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer");
let turno = true;
let win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno) {
            box.innerText = "O";
            turno = false;
            box.disabled = "true";
            box.style.color="white";
            box.style.backgroundColor="red";

        }
        else {
            box.innerText = "X";
            turno = true;
            box.disabled = "true";
             box.style.color="green";
              box.style.color="white";
            box.style.backgroundColor="green";
        }
        checkforwin();
    });
});
let disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
    let enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
         box.style.backgroundColor="aqua";

    }
}
let displaywin = (winner) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = `congratulation Player(${winner})!! `;
  
    disablebtn();
}
let checkforwin = () => {
    for (let pattern of win) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;
        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 == pat2 && pat2 == pat3) {
                displaywin(pat1);
            }
        }
    }
};
let resetgame=()=>{
    turno=true;
    for(let box of boxes){
        box.innerText="";
        enablebtn();
    }
     msgcontainer.classList.add("hide");
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);