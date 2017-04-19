function wave(str){
  let arr = [],
      placeholder = '',
      firstHalf = '',
      secondHalf = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      placeholder = str[i].toUpperCase();
      firstHalf = str.slice(0, i);
      secondHalf = str.slice(i + 1, str.length);
      arr.push(firstHalf + placeholder + secondHalf);
    }
  }
  return arr
}
