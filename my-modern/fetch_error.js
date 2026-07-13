// fetch('nothing.php')
// fetch('http://127.0.0.1:5501/')
//OKとみなす,CONNECTION_REFUSEDなど、404などのエラーは、then()の処理に入る。OKでない場合、then()の処理をスキップしてcatch()の処理に移る。
fetch('http://127.0.0.1:5555/')
  .then(response => {
    if (response.ok) { return response.text(); }
    //OKでない場合、エラーを投げる。エラーが投げられると、then()の処理はスキップされ、catch()の処理に移る。
    console.log('test111');
    throw new Error(response.statusText);
  })
  .then(text => console.log(text))
  .catch(err => console.error(err.message))
  .finally(() => console.log('fetch end'));
