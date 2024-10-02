let a =0;

const like = () => {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}

const fotos = [
    { usuario: "Candelitttaaa", imgusuario: "usuario.webp", imagen: "messi.jpg", megusta: 10, comentario: "", },
    { usuario: "Vickkkk", imgusuario: "usuario.webp", imagen: "messi2.jpg", megusta: 10, comentario: "", },
    { usuario: "Laritaa", imgusuario: "usuario.webp", imagen: "messi.jpg", megusta: 11, comentario: "", },
]

function cargarfotos(){
    for(const foto of fotos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML=` <div id="boxfoto">
                                <div id="boxusuario">
                                    <img src=${fotos.imgusuario} alt="" id="imgusuario">
                                    <h2>${fotos.usuario}</h2>
                                </div>
                                <img src=${foto.imagen} alt="foto de paisaje" id="imgfoto">
                                <div id="boxbotones">
                                    <button onclick="like()">
                                        <span class="material-symbols-outlined" id="corazon">
                                        favorite
                                        </span>
                                    </button>
                                    <button>
                                        <span class="material-symbols-outlined">
                                            chat_bubble
                                        </span>
                                    </button>
                                    <button>
                                        <span class="material-symbols-outlined">
                                            send
                                        </span>
                                    </button>
                                </div>
                                <div class="boxmegusta">
                                    <p id="megusta">${foto.megusta}</p>
                                </div>
                            </div>`;
    document.body.appendChild(contenedor)
    }
}

cargarfotos();