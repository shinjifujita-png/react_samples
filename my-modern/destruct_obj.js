const member = {
  fullname: '佐藤理央',
  sex: 'female',
  age: 18,
  memo: 'test333',
};
// const { fullname, sex, memo = '---' } = member;

// let fullname, sex, memo;
//分割代入
// ({ fullname, sex, memo = '---' } = member);
//オブジェクトのブロックになってしまうため、()で囲む必要がある。
// { fullname, sex, memo = '---' } = member;
//分割代入
const { fullname, sex, memo = '---' } = member;
console.log(sex, fullname, memo);

const { sex: gender } = member;
console.log(gender);

// const { fullname, ...rest } = member;
// console.log(fullname);
// console.log(rest);
