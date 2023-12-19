var contenedor;
var rotate = document.getElementById("rotate-container")
const url = 'https://gnews.io/api/v4/top-headlines?lang=es&apikey=fe2ff9ac195673a187c46a66db9ed9b0'
if (contenedor) {
  contenedor.innerHTML = "";
  rotate.style.display = "block"
} else {
  contenedor = document.createElement("div");
  contenedor.id = "contenedor";
  contenedor.innerHTML = "";
  rotate.style.display = "block"
}
//////
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;

    contenedor.innerHTML = "";

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];

      var newItem = document.createElement("div");
      newItem.classList.add("item");
      //////7////
      var img = document.createElement("img");
      img.src = article.image;
      newItem.appendChild(img);

      var h3 = document.createElement("h3");
      h3.textContent = article.title;
      newItem.appendChild(h3);

      var a = document.createElement("a");
      a.href = article.url;
      a.textContent = article.content;
      newItem.appendChild(a);

      contenedor.appendChild(newItem);
    }

    document.getElementById("resultados").appendChild(contenedor);
    rotate.style.display = "none"
  });

function mostrarNoticia(event) {
  event.preventDefault()
  var input = document.getElementById("busqueda");
  var find = input.value;
  const url = `https://gnews.io/api/v4/search?q=${find}&apikey=fe2ff9ac195673a187c46a66db9ed9b0&lang=es`;

  if (contenedor) {
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  } else {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;

      contenedor.innerHTML = ""
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var img = document.createElement("img");
        img.src = article.image;
        newItem.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        newItem.appendChild(h3);

        var a = document.createElement("a");
        a.href = article.url;
        a.textContent = article.content;
        newItem.appendChild(a);

        contenedor.appendChild(newItem);
      }

      document.getElementById("resultados").appendChild(contenedor);
      rotate.style.display = "none"
    });
}
const searchInput = document.getElementById("busqueda");
const searchButton = document.getElementById("enter");

searchButton.addEventListener("click", mostrarNoticia)

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
  }
});
function mostrarEconomia(){
  const url = 'https://gnews.io/api/v4/top-headlines?category=business&apikey=fe2ff9ac195673a187c46a66db9ed9b0&lang=es'
  if (contenedor) {
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  } else {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;

      contenedor.innerHTML = ""
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var img = document.createElement("img");
        img.src = article.image;
        newItem.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        newItem.appendChild(h3);

        var a = document.createElement("a");
        a.href = article.url;
        a.textContent = article.content;
        newItem.appendChild(a);

        contenedor.appendChild(newItem);
      }

      document.getElementById("resultados").appendChild(contenedor);
      rotate.style.display = "none"
    });
}
function mostrarArgentina(){
  const url = `https://gnews.io/api/v4/search?q=argentina&apikey=fe2ff9ac195673a187c46a66db9ed9b0&lang=es`;

  if (contenedor) {
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  } else {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;

      contenedor.innerHTML = ""
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var img = document.createElement("img");
        img.src = article.image;
        newItem.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        newItem.appendChild(h3);

        var a = document.createElement("a");
        a.href = article.url;
        a.textContent = article.content;
        newItem.appendChild(a);

        contenedor.appendChild(newItem);
      }

      document.getElementById("resultados").appendChild(contenedor);
      rotate.style.display = "none"
    });
}
function mostrarDeportes(){
  const url = `https://gnews.io/api/v4/search?q=deportes&apikey=fe2ff9ac195673a187c46a66db9ed9b0&lang=es`;

  if (contenedor) {
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  } else {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;

      contenedor.innerHTML = ""
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var img = document.createElement("img");
        img.src = article.image;
        newItem.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        newItem.appendChild(h3);

        var a = document.createElement("a");
        a.href = article.url;
        a.textContent = article.content;
        newItem.appendChild(a);

        contenedor.appendChild(newItem);
      }

      document.getElementById("resultados").appendChild(contenedor);
      rotate.style.display = "none"
    });
}
function mostrarLoUltimo(){
  const url = `https://gnews.io/api/v4/top-headlines?category=general&apikey=fe2ff9ac195673a187c46a66db9ed9b0&lang=es`;

  if (contenedor) {
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  } else {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.innerHTML = "";
    rotate.style.display = "block"
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;

      contenedor.innerHTML = ""
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var img = document.createElement("img");
        img.src = article.image;
        newItem.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = article.title;
        newItem.appendChild(h3);

        var a = document.createElement("a");
        a.href = article.url;
        a.textContent = article.content;
        newItem.appendChild(a);

        contenedor.appendChild(newItem);
      }

      document.getElementById("resultados").appendChild(contenedor);
      rotate.style.display = "none"
    });
}
function mostrarInicio(){
  location.reload()
}
