const rpsscore = {
  Wins : 0,
  Lose : 0,
  Tie : 0
}
const htscore = {
  Wins : 0,
  Lose : 0,
  
}
function playgame(playermove){
  const computerMove = pickcomputermove();
  let result ='';
  if (playermove==='Stone'){
    if (computerMove==='Paper'){
      result = 'Lose';
    }else if (computerMove==='Stone'){
      result = 'Tie';
    }if (computerMove==='Scissor'){
      result = 'Win';
    }
    
  }else if(playermove==='Paper'){
    if (computerMove==='Paper'){
      result = 'Tie';
    }else if (computerMove==='Stone'){
      result = 'Win';
    }if (computerMove==='Scissor'){
      result = 'Lose';
    }
  }else if(playermove==='Scissor'){
    if (computerMove==='Paper'){
      result = 'Win';
    }else if (computerMove==='Stone'){
      result = 'Lose';
    }else if (computerMove==='Scissor'){
      result = 'Tie';
    }
    
  }if (result==='Win'){
    rpsscore.Wins+=1;
  }else if (result==='Lose'){
    rpsscore.Lose+=1;
  }else if (result==='Tie'){
    rpsscore.Tie+=1;
  }
  
  alert(`Your move is ${playermove} and computer move is ${computerMove}, so you ${result}.
    Wins:${rpsscore.Wins} , Lose : ${rpsscore.Lose} , Tie :${rpsscore.Tie}`);
}

function pickcomputermove(){
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber>=0 && randomNumber<1/3){
  computerMove = 'Paper';
  }else if (randomNumber>=1/3 && randomNumber<2/3){
    computerMove = 'Stone';
  }else if (randomNumber>=2/3 && randomNumber<1){
    computerMove = 'Scissor';
  }
  return  computerMove;
}

function headOrTail(){
  let result = ''
  const random=Math.random();
  if (random>=0 && random <0.5){
    result = 'You Win';
  }else if(random>=0.5 && random <1){
    result = 'You Lose';
  }
  if (result==='You Win'){
    htscore.Wins+=1;
  }else if (result==='You Lose'){
    htscore.Lose+=1;
  }
  alert(`${result}
   Wins : ${htscore.Wins} , Lose : ${htscore.Lose} `)
}
function resetrpsScore() {
  rpsscore.Wins = 0;
  rpsscore.Lose = 0;
  rpsscore.Tie = 0;
  

  alert("Scores Reset!\nRock Paper Scissors: Wins: 0, Losses: 0, Ties: 0");
}
function resethtScore() {
  
  htscore.Wins = 0;
  htscore.Lose = 0;

  alert("Scores Reset!\nHead or Tail: Wins: 0, Losses: 0");
}