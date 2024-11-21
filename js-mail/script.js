//1.Salvare in una variabile il promt dell'utente
//2.Con un ciclo for verifico la presenza o meno dell'imail inserita
//3.Genero il messaggio di output

const emails = [
  'ugo@gmail.com',
  'zeno@gmail.com',
  'alice@gmail.com',
]

const emailUtente = 'ugo@gmail.com'
let message;

console.log(emailUtente);
let emailTrovata = false;

for(let i = 0; i < emails.length; i++){
  const email = emails[i];
  if(email === emailUtente){
    emailTrovata = true;
  }
}

if(emailTrovata){
  message = 'Puoi entrare'
} else{
  message = 'Non puoi entrare'
}

console.log(message);

console.log(email.includes(emailUtente));


