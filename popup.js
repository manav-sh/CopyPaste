
document.body.addEventListener("load", () => {
    navigator.clipboard.readText()
  .then(text => {
    document.getElementById("clipboard").value = text;
  })
  .catch(err => {
    document.getElementById("clipboard").value = err;
  });

})