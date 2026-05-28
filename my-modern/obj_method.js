// const member = {
//   name: '佐藤理央',
//   greet: function() {
//     console.log(`こんにちは、${this.name}さん！`);
//   }
// }

const member = {
  name: '佐藤理央',
  greet() {
    console.log(`こんにちは、${this.name}さん！`);
    // console.log(`こんにちは、this.nameさん！`);
  }
}

member.greet();
