// Katrina Torres / DES157 Winter2017 / 01-26-2017
// This is the js for Time is on my side studio. Learning to tool tips and timers

// use 'console.log()' and' open console window for troubleshooting

console.log('reading');

//put this "dom" code
document.addEventListener("DOMContentLoaded", function(event) {
    //shows that dom is loaded
    console.log("DOM fully loaded and parsed");
  });
  //Have the data captured when user 'submits' this input on the form
  //"onsubmit" refers to the submit button in html. And the formA is the name of the form in html

  var beaker01 = document.getElementById('beakerPicEmpt01');
  var beaker01Tip = document.getElementById('beaker01Tip');
// add first beaker 01

//Need to pick the timer for the to appear
  var tipTimer;

function showBeaker01Tip() {
    console.log('show 01 tip');
    beaker01Tip.style.opacity = 1;
  };

  beaker01.addEventListener ('mouseover', function(){
    console.log('mouseover on beaker01');
    tipTimer = setTimeout(showEatTip, 1000);
  });



beaker01.addEventListener('mouseout', function(){
  console.log('mouse out on beaker01');
  clearTimeout(tipTimer);
  beaker01Tip.style.opacity = 0;
});



/*

var eat = document.getElementById('eat');
var eatTip = document.getElementById('eatTip');

var tipTimer;


eat.addEventListener ('mouseout', function(){
  console.log('mouseout on eat');
  clearTimeout(tipTimer);
  eatTip.style.opacity = 0;
});

function showEatTip(){
  console.log('showing msg');
  eatTip.style.opacity = 1;
}
*/
