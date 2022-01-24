// Solution:

function friend(friends){
  return friends.filter(function(name){
    return name.length === 4
  });
}

// Sample Tests:

friend(["Ryan", "Kieran", "Mark"])                                        // ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])                         // ["Ryan"]
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])  // ["Jimm", "Cari", "aret"]
friend(["Love", "Your", "Face", "1"])                                     // ["Love", "Your", "Face"]
