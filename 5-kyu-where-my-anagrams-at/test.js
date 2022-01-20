describe("Tests", function() {
  it("test", function() {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy',  'lacer']), [])
  });
});