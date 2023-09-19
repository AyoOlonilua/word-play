// Business Logic

      function reverse(word) {
        const split = word.split('');
        const reversedArray = [];
      
        split.forEach(function(element) {
          reversedArray.unshift(element); 
        });
      
        const reversedWord = reversedArray.join('');
        return reversedWord;
      }
      function wordPlay(word) {
        let originalWordPlay = word;
        if (word.length >= 3) {
            let reversedWordPlay  = reverse(word) + ' ' + word;
            return reversedWordPlay;
        } else {
            return originalWordPlay;
        }
      }
      
    
// UI Logic

$(document).ready(function() {
    $("#word").submit(function(e) {
        e.preventDefault();
        
        let word = $("#wordPlay").val();
        let result = wordPlay(word);
    
        $("#result").html(result);

    });
});

