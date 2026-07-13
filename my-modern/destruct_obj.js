const member = {
  fullname: '佐藤理央',
  sex: 'female',
  age: 18,
  memo: 'test333',
};
// const { fullname, sex, memo = '---' } = member;

let fullname, sex, memo;
//分割代入
({ fullname, sex, memo = '---' } = member);
//オブジェクトのブロックになってしまうため、()で囲む必要がある。
//もし宣言済みの変数に再代入したい場合は、式全体をカッコ ( ) で囲むというJavaScriptの特殊なルールがあります。
// { fullname, sex, memo = '---' } = member;

//分割代入
// const { fullname, sex, memo = '---' } = member;
console.log(sex, fullname, memo);

const { sex: gender } = member;
console.log(gender);

// const { fullname, ...rest } = member;
// console.log(fullname);
// console.log(rest);
