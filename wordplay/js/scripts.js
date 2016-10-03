

$(document).ready(function() {
  $("form#blanks").submit(function() {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var splitSentence = [];
    sentence.split(" ");
    
    console.log(sentence);
    $("#output").text(sentence);
    /*sentence.forEach(function(word) {
      var userInput = $("input#" + word).val();
      splitSentence.push(userInput);
    });*/
  });
});
