$(document).ready(function() {
  $("form#blanks").submit(function() {
    event.preventDefault();
    var words = $("input#sentence").val().split(" ");
    var newArray = [];
    console.log(words);
    
    words.forEach(function(word) {
      if (word.length <= 3) {
        newArray.push(word);
        }
    });
    console.log(newArray);
    $("#output").text(words);
  });
});
