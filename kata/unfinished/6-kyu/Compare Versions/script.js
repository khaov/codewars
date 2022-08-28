// Solution:

function compareVersions (version1, version2) {
  let compare = true;

  const versionName1 = version1.split('.');
  const versionName2 = version2.split('.');

  const versionLength = Math.max(versionName1.length, versionName2.length);

  for (let v = 0; v < versionLength; v++) {
    if (Number(versionName1[v] || 0) < Number(versionName2[v] || 0)) {
      compare = false;
    } else {
      compare = true; 
    }
  }

  return compare;
}

// Sample Tests:

compareVersions("11", "10")         // true
compareVersions("11", "11")         // true
compareVersions("10.4.6", "10.4")   // true
compareVersions("10.4", "11")       // false
compareVersions("10.4", "10.10")    // false
compareVersions("10.4.9", "10.5")   // false

compareVersions("10.4.8", "10.0.9") // true
