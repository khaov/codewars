// Solution:

function evensAndOdds(num){
	return num % 2 === 0 ? num.toString(2) : num.toString(16);
}

// Sample Tests:

evensAndOdds(2)           // '10'
evensAndOdds(13)          // 'd'
evensAndOdds(47)          // '2f'
evensAndOdds(0)           // '0'
evensAndOdds(12800)       // '11001000000000'
evensAndOdds(8172381723)  // '1e71ca61b'
