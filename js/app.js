console.log('app.js is connected');


let welcomeMessage = alert('Hello Corgi Enthusiast');
let corgiNum = prompt('How many corgis do you own?');

console.log('User has this number of corgis',corgiNum);

let greeting;

if(corgiNum > 0){
greeting = 'Good job!  Corgis Rock!';
} else{
greeting = 'You should get a Corgi immediately.';
}
document.write(greeting);