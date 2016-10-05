$(document).ready(function() {
  $("form#blanks").submit(function() {
    event.preventDefault();
    var words = $("input#sentence").val().split(" ");
    var newArray = [];
    var wordLength = words.map(function(word) {
      return word.length;
    });
    console.log(words);
    console.log(wordLength);

//figure out why this section doesn't ever meet the condition!
    words.forEach(function(word) {
      if (length === 3) {
        $('#title').hide();
        } else {
        $('#blanks').hide();
        }
    });
    console.log(newArray);
    $("#output").text(words);
  });
});
