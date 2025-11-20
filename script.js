/*Funcionalidades JS:
Publicar contenido:
•Al enviar el formulario, crear una "card" con:
•Imagen subida (usar URL.createObjectURL() para previsualizar)
•Título y descripción
•Contador de likes inicializado en 0
•Limpiar el formulario después de publicar
Sistema de likes:
•Botón de like en cada publicación
Al hacer clic:
•Cambiar color del ícono a rojo
•Incrementar el contador de likes*/

const formulario = document.getElementById("postForm");
const feed = document.getElementById("feed");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evitamos que la pagina se vaya a recargar

    //*capturo los datos que el usuario envio en el formulario

    const imagenSubida = document.getElementById("image").files[0];
    const titulo = document.getElementById("title").value;
    const  descripcion = document.getElementById("description").value;
    

    // * creamos la card dinamica
const div = document.createElement("div")
div.classList.add("card");
div.innerHTML = `

<img src="${URL.createObjectURL(imagenSubida)}" alt="Imagen" class="card-img-top">
 <div class="card-body">
  <h5 class="card-title">${titulo}</h5>
  <p class="card-text">${descripcion}</p>
  <button class="btn-like">
   <i class="bi bi-heart fs-4 text-primary"></i> <span class="likes-count">0</span>
  </button>
  </div>

`;

feed.appendChild(div);

//  contador de likes
const btnLikes = div.querySelector(".btn-like i");
let likes = 0;

// los click
btnLikes.addEventListener("click", () =>{
    likes ++
    btnLikes.classList.remove("text-primary");
    btnLikes.classList.add("text-danger");
    btnLikes.nextElementSibling.textContent = likes; // actualiza contador

});

formulario.reset();

});