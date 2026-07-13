// fetch('https://wings.msn.to/tmp/it/fetch.php')
fetch('http://127.0.0.1:5501/')
  .then(response => response.text())
  .then(text => console.log(text));
