let numCelle = 100;
let grid = document.getElementById("grid");
let gridCreated = false;
let bombeArray;
let score = 0;

document.getElementById("start").addEventListener("click", function () {
    creaGriglia();
});

function creaGriglia() {

    bombeArray = creaBombeArray();

    clearGrid();

    let numCelle = 100;
    let grid = document.getElementById("grid");

    for (let i = 1; i <= numCelle; i++) {
        let cella = creaQuadrato(i);
        grid.appendChild(cella);
    }
    //text inside the #score div is written 

    document.getElementById("score").innerHTML = `your score is ${score}`;

}


function clearGrid() {

    let grid = document.getElementById("grid");

    // Clear the existing grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function creaQuadrato(numero) {
    // if the number that im passing in this function "creaQuadrato" is in "bombearray", then a bomb is created. 
    // if not then its a normal square
    const cella = document.createElement("div");

    if (bombeArray.includes(numero)) {

        cella.classList.add("bomb");
        cella.innerText = numero;
        cella.addEventListener("click", function () {

            console.log("Cella cliccata", numero);


            //versione abbreviata
            cella.classList.toggle("highlight-red");

            showbombs();
            location.reload();

        });

    } else {

        cella.classList.add("square");
        cella.innerText = numero;

        //per ogni quadrato voglio un evento che gestisca il click
        cella.addEventListener("click", function () {

            console.log("Cella cliccata", numero);

            //versione abbreviata
            cella.classList.toggle("highlight-green");

            score = score + 1;
            //other ways to increment a variable
            // ++score; this will only increment by 1 
            // score += 1;
            document.getElementById("score").innerHTML = `your score is ${score}`;


        });

    }

    return cella;
}

function creaBombeArray() {
    let randomNumbers = [];
    let randomNumber;

    for (let i = 0; i < 16; i++) {
        // generate random number
        randomNumber = Math.floor((Math.random() * 100) + 1);
        // add number to array
        randomNumbers.push(randomNumber)
    }
    return randomNumbers

}

function showbombs() {

    // document.querySelectorAll(".bomb");
    let bombs = document.querySelectorAll(".bomb");
    bombs.forEach((bombDiv) => bombDiv.classList.add("highlight-red"));
    alert("You lost!");
}
