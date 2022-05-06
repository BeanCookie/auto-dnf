
setScreenMetrics(1080, 2400);

let startGame = setInterval(function(){
  click(1200, 730);
  console.log('startGame');
}, 1000);

let selectPerson = setInterval(function(){
  press(1200, 1000, 500);
  console.log('selectPerson');
}, 1000);

setTimeout(function(){
  clearInterval(startGame);
  clearInterval(selectPerson);
}, 120 * 1000);

