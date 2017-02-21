// Katrina Torres / DES157 Winter2017 / 01-26-2017
/* This is the script.js for "Meet me at the library" exercising. Learning utilize a library (jsPDF)*/

// use 'console.log()' and' open console window for troubleshooting
console.log('reading');

//dom code
document.addEventListener ("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");
  document.formX.onsubmit = processForm;
  function processForm() {
    //start variables
    var looking = document.formX.looking.value;
    var descript = document.formX.descript.value;
    var meet = document.formX.meet.value;

    var doc = new jsPDF ();
    /*doc.text('string',x,y)
    doc=name of the pdf in js
    .text=type of input
    'string'=this is the text or string that is placed
    x = x the position of the string on pdf
    y = y the position of the string on pdf
    */
    doc.text('I AM THE PDF', 10, 10);
    doc.text(looking, 10, 30)
    doc.text(descript, 10, 50)
    doc.text(meet, 10, 70)


    doc.save('theAd.pdf');

    /*form x submit test*/
    var test01 = document.getElementById('test01');
    var test02 = document.getElementById('test02');
    var test03 = document.getElementById('test03');

    test01.innerHTML="Looking for: " + looking;
    test02.innerHTML="Must be: " +descript;
    test03.innerHTML="if discovered, meet me at: " + meet;

    return false;


  }
})



/*
useful links
http://rawgit.com/MrRio/jsPDF/master/
http://rawgit.com/MrRio/jsPDF/master/docs/
*/
