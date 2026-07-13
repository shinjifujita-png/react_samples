// const member = {
//   name: '佐藤理央',
//   greet: function() {
//     console.log(`こんにちは、${this.name}さん！`);
//   }
// }

const member = {
  name: '佐藤理央',
  // greet: greet = () => {
    // アロー関数だとthis.nameが見れない
  greet() {
    console.log(`こんにちは、${this.name}さん！`);
    const test = () => {
      console.log(`test、${this.name}さん！`);
    };
    test();
  }
}

// const member = () => ({
//   name: '佐藤理央',
//   greet() {
//     console.log(`こんにちは、${this.name}さん！`);
//     // console.log(`こんにちは、this.nameさん！`);
//   }
// });

// const member = {
//   name: '佐藤理央',
//   greet() {
//     console.log(`こんにちは、${this.name}さん！`);
//     // console.log(`こんにちは、this.nameさん！`);
//   }
// };

member.greet();
console.log(member.name);

const aaa = () => {
  console.log('OK!');
}
// function test111(aaa) {
const test111 = (aaa) => {
  // console.log(`test111、${aaa}さん！`);
  aaa();
  console.log('end');
}
test111(aaa);
