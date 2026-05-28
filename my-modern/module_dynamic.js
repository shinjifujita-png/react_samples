import('./App.js').then(appaa => {
  console.log(appaa.getTriangle(10, 5));

  const a = new appaa.Article();
  console.log(a.getAppTitle());
});
