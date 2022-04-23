describe("Anagrams", function() {
  it("anagram", function() {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('abba', ['AABB', 'abcd', 'BBAA', 'dada']), ['AABB', 'BBAA']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy',  'lacer']), [])
  });
});