let userScore = 0;
let comScore = 0;


let imgclass = document.querySelectorAll(".choise");
let results = document.querySelector("#msg");
let usescore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore")


const drawGame = ( clickimg ) =>{
           console.log("Game are Draw :", clickimg);
           results.innerText = ("Game are Draw");

        }

const showWinner = (userWin ) =>{
    if(userWin === true){
      userScore++;
      usescore.innerText = userScore;
      console.log("you win!");
      results.innerText = ("you win!");
  
    }
    else{
      
      console.log("you lost");
      results.innerText = ("you lost");
      comScore++;
      compscore.innerText = comScore;
     
    }
}

const compchoice = () =>{
        const indx = ["rock", "paper", "scissors"];
        const rand = Math.floor(Math.random() * 3 );
        return indx[rand];
};

const playGame = (clickimg) =>{
    console.log("user choice are", clickimg);
    const compselect = compchoice();
    console.log("computer are selected the =", compselect);
    if(clickimg === compselect){
        drawGame();
    }
    else{
        let userWin = true;
        if(clickimg === "rock"){
           userWin = compselect === "paper" ? false : true;
        }
        else if(clickimg === "paper"){
             userWin = compselect === "scessors" ? false : true;
        }
        else{
            userWin = compselect === "rock" ? false : true;
        }
        
       showWinner(userWin );
    }
   
   
};


imgclass.forEach((choises) =>{
        choises.addEventListener("click" , () =>{
        const clickimg = choises.getAttribute("id");
       
        playGame(clickimg);
        });
});