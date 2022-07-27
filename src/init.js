
$(document).ready(function() {

  //??
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    //what does .data mean/do?
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // debugger;
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //makeBlinkyDancer = function(top, left, timeBetweenSteps)
    var dancer = new dancerMakerFunction(
      //(parameter) give some px val for height
      $("body").height() * Math.random(),
      //(parameter) give some px val for width
      $("body").width() * Math.random(),
      //time for blinking frequency
      (Math.random() + 1) * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);

  });

  //attaching event listeners
  // $('.dancer').on('click', function(event) {
  //   event.currentTargetValue.animate({width: "500px"});
  // })
  //how do we attach event listeners to the new span elements for the dancers?

  $('a').on('click', function(event){
    console.log("I'm clicked!");
  })

  $('.lineUpBtn').on('click', function(e) {
    e.preventDefault();
    console.log(dancers);

    var top = 100;

    dancers.forEach(function(dancer) {
      var newPos = {
        left: 0,
        top: top + 'px'
      };

      dancer.$node.css(newPos);
      top+=50;
    })

    //declare a starting location
    //loop through dancer arr
      //for each dancer in arr
        //assign new location property

    //potentially adding a class with a location value set
    //position absolute, left 0, transition 2s;
  });

});


