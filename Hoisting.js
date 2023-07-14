function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  
  // Before running this code, what do you think the output is?
  console.log(bigBrother())

  // IIFE (imediately invoked functional expressions)
 //following is its syntex
  (function(){

    function text(){
      console.log("hiii");
    }
  })();

  text();
