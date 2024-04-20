export function evenOrOdd(n:number):string {
  return n % 2 === 0 ?  "Even" : "Odd";
}

evenOrOdd(1)  // "Odd"
evenOrOdd(2)  // "Even"
evenOrOdd(-1) // "Odd"
evenOrOdd(-2) // "Even"
evenOrOdd(0)  // "Even"
