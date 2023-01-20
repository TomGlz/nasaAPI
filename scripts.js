const image = document.getElementById("imageApi");
const date = document.getElementById("dateApi");
const title = document.getElementById("titleApi");
const desc = document.getElementById("descApi");
const loader = '<div class="spinner-border text-secondary my-5" role="status"><span class="visually-hidden">Loading...</span></div>';
image.innerHTML=loader;
window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=nAGkpygV98TJGVes3QTYHqlZi4afwP17RGjTqolP')
    .then(response => response.json())
    .then(data =>{
        image.innerHTML='<img class="w-100" src="'+data.url+'">';
        image.innerHTML+='<a href="'+data.hdurl+'" download><button type="button" class="btn btn-secondary mt-3">Descargar imagen HD</button></a>'
        date.innerHTML=data.date;
        title.innerHTML+='<h2>'+data.title+'</h2>';
        desc.innerHTML+='<p>'+data.explanation+'</p>';
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

});
