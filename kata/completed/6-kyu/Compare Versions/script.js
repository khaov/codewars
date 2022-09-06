// Solution:

function compareVersions (version1, version2) {
  let compare = true;

  const versionName1 = version1.split('.');
  const versionName2 = version2.split('.');

  const versionLength = Math.max(versionName1.length, versionName2.length);

  for (let v = 0; v < versionLength; v++) {
    if (!versionName1[v]) {versionName1.push(0)}
    if (!versionName2[v]) {versionName2.push(0)}
  }

  versionName1.reverse();
  versionName2.reverse();

  for (let v = 0; v < versionLength; v++) {
    if (Number(versionName1[v]) < Number(versionName2[v])) {
      compare = false;
    } else if (Number(versionName1[v]) > Number(versionName2[v])) {
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
