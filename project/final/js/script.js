// use 'console.log()' and' open console window for troubleshooting
console.log('reading');

//dom code
document.addEventListener ("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  //section animation
  var title = document.getElementById('title');
  var title01 = document.getElementById('title01');
  var tipTimer;

  title.addEventListener ('onclick', function(){
    console.log('onclick title');
    tipTimer = setTimeout(showTitle01, 300);
  });

  function showTitle01(){
    console.log('it is working');
  }

  /*
  eat.addEventListener ('mouseon', function(){
    console.log('mouseout on eat');
    clearTimeout(tipTimer);
    eatTip.style.opacity = 0;
  });

  function showEatTip(){
    console.log('showing msg');
    eatTip.style.opacity = 1;
  }
  */


  //end of section animation


  //beginging of pdf script
  document.allEventForm.onsubmit = processForm;
  function processForm() {
    //start variables
    var eventName = document.allEventForm.eventName.value;
    var eventMonth = document.allEventForm.eventMonth.value;
    var eventDay = document.allEventForm.eventDay.value;
    var eventYear = document.allEventForm.eventYear.value;
    var eventLocation = document.allEventForm.eventLocation.value;


    var doc = new jsPDF ();
    /*doc.text('string',x,y)
    doc=name of the pdf in js
    .text=type of input
    'string'=this is the text or string that is placed
    x = x the position of the string on pdf
    y = y the position of the string on pdf
    */

    //Events (added info page 1)
    doc.text('EVENTS', 15, 15);
    //to bold
    doc.text(eventName, 25, 35);
    doc.text('Date', 35, 45);
    doc.text('Location', 35, 50);
    doc.text('Notes', 35, 55);
    //regular
    doc.text(eventMonth, 65, 45);
    doc.text(eventDay, 90, 45);
    doc.text(eventYear, 100, 45);
    doc.text(eventLocation, 65, 50);


    //saved info
    //People (new page, page 2)
    doc.addPage('a4','p');
    doc.text('CONTACTS', 15, 15);
    //Contact 1: Katrina Torres
    //to bold
    doc.text('Katrina Torres', 25, 35);
    doc.text('Mobile', 35, 45);
    doc.text('Location', 35, 50);
    doc.text('Notes', 35, 55);
    // regular
    doc.text('(408)5xx-xxxx', 65, 45);
    doc.text('College Dungeon Floor 533', 65, 50);
    doc.text('Novice web designer. Lvl. 1', 65, 55);

    //Contact 2: Stan Evangen
    //to bold
    doc.text('Stan Evangen', 25, 75);
    doc.text('Mobile', 35, 85);
    doc.text('Location', 35, 90);
    doc.text('Notes', 35, 95);
    // regular
    doc.text('(525)6xx-xxxx', 65, 85);
    doc.text('Cruess 999', 65, 90);
    doc.text('Office Hours 3-6pm', 65, 95);



    //Places (new page, page 3)
    doc.addPage('a4','p');
    doc.text('LOCATIONS', 15,15);
    //Location 1: Shields Library
    //to bold
    doc.text('Shields Library', 25, 35);
    doc.text('Hours', 35, 45);
    doc.text('Contact', 35, 50);
    doc.text('Address', 35, 55);
    doc.text('Notes', 35, 65);
    // regular
    doc.text('7:30am-12am M-F | 12pm-6pm Sat | 12pm-12am Sun', 65, 45);
    doc.text('(530)752-8792', 65, 50);
    doc.text('University of California, Davis', 65, 55);
    doc.text('100 NW Quad, Davis, CA 95616', 65, 60);
    doc.text('4th NP | Q-Z 3rd', 65, 65);

    //Location 2: CopyLand
    //to bold
    doc.text('CopyLand', 25, 90);
    doc.text('Hours', 35, 100);
    doc.text('Contact', 35, 105);
    doc.text('Address', 35, 110);
    doc.text('Notes', 35, 115);
    // regular
    doc.text('9am-7pm M-F | 11am-5pm Sat', 65, 100);
    doc.text('(530)756-2679', 65, 105);
    doc.text('231 G St #6, Davis, CA 95616', 65, 110);
    doc.text('good for illustrations, not photos', 65, 115);

    doc.save('EduWhutPDF.pdf');

    /*form x submit test*/
    /*var test01 = document.getElementById('test01');
    var test02 = document.getElementById('test02');
    var test03 = document.getElementById('test03');

    test01.innerHTML="Looking for: " + looking;
    test02.innerHTML="Must be: " +descript;
    test03.innerHTML="if discovered, meet me at: " + meet; */

    return false;
  }
  //End of pdf js
})



/*
useful links
http://rawgit.com/MrRio/jsPDF/master/
http://rawgit.com/MrRio/jsPDF/master/docs/
*/
