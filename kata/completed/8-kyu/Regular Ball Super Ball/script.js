// Solution:

var Ball = function(ballType) {
  if (typeof ballType === "string"){
		this.ballType=ballType;
	} else {
    this.ballType="regular";
  }
};

// Sample Tests:

new Ball().ballType         // "regular"
new Ball("super").ballType  // "super"
