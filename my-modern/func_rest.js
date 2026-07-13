function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

console.log(sum(10, 25, 2));
console.log(sum(7, 13, 25, 6, 100));
// console.log(sum([10, 25, 2]));
//実引数を配列で渡したいとき、スプレッド構文、ばらばらに展開する構文を使う必要がある。
console.log(sum(...[10, 25, 2]));
