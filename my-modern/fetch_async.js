async function fetchData() {
  const response = await fetch('https://wings.msn.to/tmp/it/fetch.php');
  // const response = fetch('https://wings.msn.to/tmp/it/fetch.php');
  if (!response.ok) { throw new Error(response.statusText); }
  // 修正ポイント：await をつけて、テキスト化の完了を待つ
  const text = await response.text();
  // const text = response.text();
  console.log(text);
}

fetchData();
console.log('test111');
