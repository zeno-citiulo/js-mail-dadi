const playerNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;
let message;

if(playerNumber > pcNumber){
  message = 'Vince il giocatore'
} else if (playerNumber < pcNumber){
  message = 'Vince il PC'
} else {
  message = 'Pari'
}

console.log(message);

console.log(playerNumber, pcNumber);

