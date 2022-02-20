// Solution:

function fish(shoal){
  let size = 1;
  let totalSize = 0;

  const fishSchool = shoal.split('').sort();

  fishSchool.forEach(function(fish){
    if (size >= Number(fish)){

    } else {
      return size
    }
  });

  return size

}

// Sample Tests:

// fish("")                                //1
// fish("0")                               //1
// fish("6")                               //1
// fish("1111")                            //2
// fish("11112222")                        //3
// fish("111122223333")                    //4
// fish("111111111111")                    //3
// fish("111111111111111111112222222222")  //5
fish("151128241212192113722321331")     //5
