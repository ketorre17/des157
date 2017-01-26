// Katrina Torres / DES157 Winter2017 / 01-26-2017
// This is the JavaScript (p5) for the Madlibs exercise. Learning to process input and output

// use 'console.log()' and' open console window for troubleshooting

console.log('reading');

//put this "dom" code
document.addEventListener("DOMContentLoaded", function(event) {
    //shows that dom is loaded
    console.log("DOM fully loaded and parsed");
  //Have the data captured when user 'submits' this input on the form
  //"onsubmit" refers to the submit button in html. And the formA is the name of the form in html
  document.formA.onsubmit = processForm;

  //Define the process function. What happens when the input is processed.
    function processForm() {

      //Store the named data from html to a named valiable in js
      var userName = document.formA.userName.value;
      var soundEffect01 = document.formA.soundEffect01.value;
      var texture = document.formA.texture.value;
      var nickName = document.formA.nickName.value;
      var colorA = document.formA.colorA.value;

      //Use inner html to concatenate a mesage and put it on the screen, in the html
      //use the <p> id to tell js where to insert them message in the html
      varinkyStory=document.getElementById('inkyStory');
      inkyStory.innerHTML= "laaa " + userName + " THEN " + soundEffect01 + " THEN " + texture + " THEN " + nickName + " Finally " + colorA;


      //prevent page from reloading, which would remover the saved input
      return false;

    }
  //this is the terminator for the "dom" code
  });
