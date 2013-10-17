//$(function(event) {
$('.play').click(function() {

var moves = [
    {
        title: 'Arabic',
        duration: 2,
        option: 'turn'
    },
    {
        title: '3/4 shoulder shimmy',
        duration: 4,
        option: 'levels'
    },
    {
        title: 'Choo choo',
        duration: 2,
        option: 'spin'
    },
    {
        title: 'ASWAT',
        duration: 4,
        option: 'pass-through | 1/3 turn'
    },
    {
        title: 'Grapies',
        duration: 4,
        option: 'none'
    },
];

function updateMove() {
    var numberOfMoves = moves.length;

    // Fetch a random number 0..numberOfMoves
    var index = Math.floor((Math.random() * numberOfMoves));

    // Debug print the random number
    console.log("Move Index: " + index);

    // Fetch the random move out of the array and assign to variable
    var randomMove = moves[index];

    // Debug print the random move
    console.log(randomMove);

    // Use Jquery to update the HTML Document
        $('.move').text(randomMove.title);
        $('h2').text(randomMove.duration);
        $('p').text(randomMove.option);

    
    // Wait number of seconds (duration) then call updateMove again
    setTimeout(updateMove, randomMove.duration * 1000);
}


updateMove();

});
/*$('.pause').click(function() {
    $('.move').stop();
  });
});*/





