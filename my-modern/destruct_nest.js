const member = {
  fullname: '佐藤理央',
  address: {
    prefecture: '静岡県',
    city: '藤枝市'
  }
};
const { address, address: { city } } = member;
console.log(address);
console.log(city);

// title:   ラベルになってしまう
// const func = () => {title: 'aaaaa'};
//オブジェクトの塊のため、()で囲む必要がある。
// const func = () => ({title: 'aaaaa'});
const func = () => {return {title: 'aaaaa'}};
console.log(func());
