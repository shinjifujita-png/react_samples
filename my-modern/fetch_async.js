async function fetchData() {
  // const response = await fetch('https://wings.msn.to/tmp/it/fetch.php');
  //非同期処理の完了を待つには、awaitをつける。(awaitをつけないと、Promise（非同期処理を管理するためのオブジェクト）オブジェクトが返る。)
  const response = await fetch('http://127.0.0.1:5501/');
  // const response = fetch('http://127.0.0.1:5501/');
  // const response = fetch('https://wings.msn.to/tmp/it/fetch.php');
  if (!response.ok) { throw new Error(response.statusText); }
  // 修正ポイント：await をつけて、テキスト化の完了を待つ
  const text = await response.text();
  // const text = response.text();
  console.log(text);
}

fetchData();
//fetchDataが非同期処理のため、awaitがあっても、非同期処理が完了する前に次の行に進む。
console.log('test111');
