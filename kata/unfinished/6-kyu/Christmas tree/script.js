// Solution:

function christmasTree(height) {
  //height

  let tree = ``;

  for (let level = 0; level < height; level++) {
   
  }

  return tree;

}

// Sample Tests:

christmasTree(0) // "\"\""
christmasTree(1)  // "\"*\""
christmasTree(2)  // "\" * \\n***\""
christmasTree(3)  // "\"  *  \\n *** \\n*****\""
christmasTree(4)  // "\"   *   \\n  ***  \\n ***** \\n*******\""
christmasTree(5)  // "\"    *    \\n   ***   \\n  *****  \\n ******* \\n*********\""
christmasTree(6)  // "\"     *     \\n    ***    \\n   *****   \\n  *******  \\n ********* \\n***********\""
christmasTree(7)  // "\"      *      \\n     ***     \\n    *****    \\n   *******   \\n  *********  \\n *********** \\n*************\""
christmasTree(8)  // "\"       *       \\n      ***      \\n     *****     \\n    *******    \\n   *********   \\n  ***********  \\n ************* \\n***************\""
christmasTree(9)  // "\"        *        \\n       ***       \\n      *****      \\n     *******     \\n    *********    \\n   ***********   \\n  *************  \\n *************** \\n*****************\""
christmasTree(10) // "\"         *         \\n        ***        \\n       *****       \\n      *******      \\n     *********     \\n    ***********    \\n   *************   \\n  ***************  \\n ***************** \\n*******************\""
