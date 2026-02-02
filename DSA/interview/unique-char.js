function firstUnique(str) {
  let freq = {}; //empty object

  // Count frequency

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1; //{m:1 s:1 w:2 i:1}
  }

// Find first unique

  for (let i = 0; i < str.length; i++) {

    if (freq[str[i]] === 1) {
      //=> freq[m==1] =>  {m:1 s:1 w:2 i:1} here m=1 it prints m becasue it's first uniqe char
      return str[i];
    }
  }
}

console.log(firstUnique("mswwi"));
