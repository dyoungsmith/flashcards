app.controller('FlashCardController', function($scope) {
	$scope.answerQuestion = function(isCorrect) {
		$scope.flashCard.answered = true;
		$scope.flashCard.isCorrect = isCorrect;
		$scope.flashCard.isCorrectMsg = "You are " + (isCorrect ? 'correct' : 'incorrect');
	};
});