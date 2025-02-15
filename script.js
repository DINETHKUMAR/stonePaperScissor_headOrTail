function playgame(playermove){
  const computerMove = pickcomputermove();
  result ='';
  if (playermove==='Stone'){
    if (computerMove==='Paper'){
      result = 'lose';
    }else if (computerMove==='Stone'){
      result = 'Tie';
    }if (computerMove==='Scissor'){
      result = 'Win';
    }
    alert(`Your move is ${playermove} and computer move is ${computerMove}, so you ${result}.`);
  }else if(playermove==='Paper'){
    if (computerMove==='Paper'){
      result = 'Tie';
    }else if (computerMove==='Stone'){
      result = 'Win';
    }if (computerMove==='Scissor'){
      result = 'Lose';
    }
    alert(`Your move is ${playermove} and computer move is ${computerMove}, so you ${result}.`);
  }else if(playermove==='Scissor'){
    if (computerMove==='Paper'){
      result = 'Win';
    }else if (computerMove==='Stone'){
      result = 'Tie';
    }if (computerMove==='Scissor'){
      result = 'Lose';
    }
    alert(`Your move is ${playermove} and computer move is ${computerMove}, so you ${result}.`);
  }
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
  const random=Math.random();
  if (random>=0 && random <0.5){
    alert(`You Win`);
  }else if(random>=0.5 && random <1){
    alert(`You Loose`);
  }
  return eandom;
}