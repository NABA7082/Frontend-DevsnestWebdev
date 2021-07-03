document.querySelector(".btn").onclick = function(){
  fetch('https://meme-api.herokuapp.com/gimme')
  .then(response => response.json()).then(data =>{
      let urls = data.url;
      console.log(urls);

      document.querySelector(".img-m").src = urls;
  })
}