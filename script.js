/*var ActivePlayer = 1;
var AutoPlay = false;
var Positions = ["cellule1", "cellule2", "cellule3", "cellule4", "cellule5", "cellule6", "cellule7", "cellule8", "cellule9"];
var Player1 = [];
var Player2 = [];

function play(cellule){
    let cell = document.querySelector("."+cellule);
    let index = Positions.indexOf(cellule);
    let autoPlay = document.getElementById("2players").checked;
    let active = document.querySelector("h3");
    if((ActivePlayer == 1)&&(index >= 0)){
        cell.innerHTML = "X";
        Player1.push(cellule);
        Positions.splice(index, 1);
        active.innerHTML = "Active player: Player 2";
        winner = TestWinner();
        ActivePlayer = 2;
        cell.style.cursor = "not-allowed";
        if((autoPlay)&&(winner==0)&&(ActivePlayer==2)){
            setTimeout(() => {  auto(); }, 500);
            winner = TestWinner();
            ActivePlayer = 1;
        }
    }
    else if((ActivePlayer == 2)&&(index >= 0)){
        cell.innerHTML = "O";
        Player2.push(cellule);
        Positions.splice(index, 1);
        active.innerHTML = "Active player: Player 1";
        winner = TestWinner();
        ActivePlayer = 1;
        cell.style.cursor = "not-allowed";
    }
    
    if(winner>0)
        display(winner);
    else if((Positions.length == 0)&&(winner == 0))
        display(winner);

    
}

function TestWinner(){
    if (ActivePlayer==1){
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule2")>-1)&&(Player1.indexOf("cellule3")>-1))
            return 1;
        if((Player1.indexOf("cellule4")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule6")>-1))
            return 1;
        if((Player1.indexOf("cellule7")>-1)&&(Player1.indexOf("cellule8")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule4")>-1)&&(Player1.indexOf("cellule7")>-1))
            return 1;
        if((Player1.indexOf("cellule2")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule8")>-1))
            return 1;
        if((Player1.indexOf("cellule3")>-1)&&(Player1.indexOf("cellule6")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule3")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule7")>-1))
            return 1;
    }
    else{
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule2")>-1)&&(Player2.indexOf("cellule3")>-1))
            return 2;
        if((Player2.indexOf("cellule4")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule6")>-1))
            return 2;
        if((Player2.indexOf("cellule7")>-1)&&(Player2.indexOf("cellule8")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule4")>-1)&&(Player2.indexOf("cellule7")>-1))
            return 2;
        if((Player2.indexOf("cellule2")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule8")>-1))
            return 2;
        if((Player2.indexOf("cellule3")>-1)&&(Player2.indexOf("cellule6")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule3")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule7")>-1))
            return 2;
    }
    return 0;
}

function display(winner){
    let msg = document.getElementById("MsgBox");
    msg.setAttribute("class", "winner");
    let p = document.querySelector("#winTxt");
    let menu = document.querySelector(".menu");
    if(winner>0){
        let txt = document.createTextNode("Player "+winner+" win!");
        p.appendChild(txt);
        msg.appendChild(p);
    }
    else{
        let txt = document.createTextNode("Game Over!");
        p.appendChild(txt);
        msg.appendChild(p);
    }
    menu.hidden = false;
}

function start(){
    Positions = ["cellule1", "cellule2", "cellule3", "cellule4", "cellule5", "cellule6", "cellule7", "cellule8", "cellule9"];
    Player1 = [];
    Player2 = [];
    ActivePlayer = 1;
    let msg = document.getElementById("MsgBox");
    msg.setAttribute("class", "");
    let p = document.querySelector("#winTxt");
    p.innerHTML = "";
    let menu = document.querySelector(".menu");
    for(let i = 0; i<9; i++){
        let cell = document.querySelector(".cellule"+String(i+1));
        cell.innerHTML = "";
        cell.style.cursor = "pointer";
    }
    menu.hidden = true;
}

function auto(){
    let terminal = document.querySelector(".terminal");
    let rand = Math.floor(Math.random() * Positions.length);
    let cellule = Positions[rand];
    let cell = document.querySelector("."+cellule);
    let index = Positions.indexOf(cellule);
    let active = document.querySelector("h3");
    cell.innerHTML = "O";
    Player2.push(cellule);
    Positions.splice(index, 1);
    active.innerHTML = "Active player: Player 1";
    cell.style.cursor = "not-allowed";
}*/
var ActivePlayer = 1;
var Positions = ["cellule1", "cellule2", "cellule3", "cellule4", "cellule5", "cellule6", "cellule7", "cellule8", "cellule9"];
var Player1 = [];
var Player2 = [];

function play(cellule){
    let cell = document.querySelector("."+cellule);
    let index = Positions.indexOf(cellule);
    let active = document.querySelector("h3");
    if((ActivePlayer == 1)&&(index >= 0)){
        cell.innerHTML = "X";
        Player1.push(cellule);
        Positions.splice(index, 1);
        active.innerHTML = "Active player: Player 2";
        ActivePlayer = 2;
        cell.style.cursor = "not-allowed";
    }
    else if((ActivePlayer == 2)&&(index >= 0)){
            cell.innerHTML = "O";
            Player2.push(cellule);
            Positions.splice(index, 1);
            active.innerHTML = "Active player: Player 1";
            ActivePlayer = 1;
            cell.style.cursor = "not-allowed";
    }
    let winner = TestWinner();
    if(winner>0)
        display(winner);
    else if((Positions.length == 0)&&(winner == 0))
        display(winner);
}

function TestWinner(){
    if (ActivePlayer==2){
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule2")>-1)&&(Player1.indexOf("cellule3")>-1))
            return 1;
        if((Player1.indexOf("cellule4")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule6")>-1))
            return 1;
        if((Player1.indexOf("cellule7")>-1)&&(Player1.indexOf("cellule8")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule4")>-1)&&(Player1.indexOf("cellule7")>-1))
            return 1;
        if((Player1.indexOf("cellule2")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule8")>-1))
            return 1;
        if((Player1.indexOf("cellule3")>-1)&&(Player1.indexOf("cellule6")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule1")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule9")>-1))
            return 1;
        if((Player1.indexOf("cellule3")>-1)&&(Player1.indexOf("cellule5")>-1)&&(Player1.indexOf("cellule7")>-1))
            return 1;
    }
    else{
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule2")>-1)&&(Player2.indexOf("cellule3")>-1))
            return 2;
        if((Player2.indexOf("cellule4")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule6")>-1))
            return 2;
        if((Player2.indexOf("cellule7")>-1)&&(Player2.indexOf("cellule8")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule4")>-1)&&(Player2.indexOf("cellule7")>-1))
            return 2;
        if((Player2.indexOf("cellule2")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule8")>-1))
            return 2;
        if((Player2.indexOf("cellule3")>-1)&&(Player2.indexOf("cellule6")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule1")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule9")>-1))
            return 2;
        if((Player2.indexOf("cellule3")>-1)&&(Player2.indexOf("cellule5")>-1)&&(Player2.indexOf("cellule7")>-1))
            return 2;
    }
    return 0;
}

function display(winner){
    let msg = document.getElementById("MsgBox");
    msg.setAttribute("class", "winner");
    let p = document.querySelector("#winTxt");
    let menu = document.querySelector(".menu");
    if(winner>0){
        let txt = document.createTextNode("Player "+winner+" win!");
        p.appendChild(txt);
    }
    else{
        let txt = document.createTextNode("Game Over!");
        p.appendChild(txt);
    }
    menu.hidden = false;
}

function restart(){
    Positions = ["cellule1", "cellule2", "cellule3", "cellule4", "cellule5", "cellule6", "cellule7", "cellule8", "cellule9"];
    Player1 = [];
    Player2 = [];
    ActivePlayer = 1;
    let msg = document.getElementById("MsgBox");
    msg.setAttribute("class", "");
    let menu = document.querySelector(".menu").hidden = true;
    let p = document.querySelector("#winTxt");
    p.innerHTML = "";
    let h3 = document.querySelector("h3");
    h3.innerHTML = "Active player: Player 1";
    for(let i = 0; i<9; i++){
        let cell = document.querySelector(".cellule"+String(i+1));
        cell.style.cursor = "pointer";
        cell.innerHTML = "";
    }

}
