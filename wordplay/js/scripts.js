$(document).ready(function() {
  $("form#blanks").submit(function() {
    event.preventDefault();
    var words = $("input#sentence").val().split(" ");
    var wordLength = [];
    $("#output").text(sentence);

  });
});
