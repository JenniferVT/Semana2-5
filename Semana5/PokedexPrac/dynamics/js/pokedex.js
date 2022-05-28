window.addEventListener("load", () => {
    const inputSearch = document.getElementById('inputSearch');
    // const btnAgregar = document.getElementById("btn-agregar");
    // const divAgregar = document.getElementById("contenedor-agregar");
    // const btnEnviar = document.getElementById("btn-enviar");
    // const buscador = document.getElementById("buscador");
    // const divDatos = document.getElementById("contenedor-mostrar");
    // const divResultados = document.getElementById("contenedor-resultados");
    // const formNuevo = document.getElementById("form-nuevo");

    const closeLists = () => {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            x[i].parentNode.removeChild(x[i]);
        }
    }

    // inputSearch.addEventListener('blur', () => {
    //     closeLists();
    // })

    inputSearch.addEventListener('keyup', () => {
        if (inputSearch.value.length > 2) {
            fetch(`dynamics/php/pokemon.php?name=${inputSearch.value}`)
                .then((response) => {
                    return response.json();
                })
                .then((datosJSON) => {
                    closeLists();
                    // currentFocus = -1;
                    const divAutocomplete = document.getElementById("divAutocomplete");
                    const divItems = document.createElement("DIV");
                    divItems.setAttribute("id", "autocomplete-list");
                    divItems.setAttribute("class", "autocomplete-items");
                    divAutocomplete.appendChild(divItems);
                    if (datosJSON.length > 0) {
                        for (pokemon of datosJSON) {
                            if (pokemon.name.substr(0, inputSearch.value.length).toUpperCase() == inputSearch.value.toUpperCase()) {
                                divItem = document.createElement("DIV");
                                divItem.innerHTML = "<strong>" + pokemon.name.substr(0, inputSearch.value.length) + "</strong>";
                                divItem.innerHTML += pokemon.name.substr(inputSearch.value.length);
                                divItem.setAttribute("data-pokemon", pokemon);
                                // divItem.innerHTML += "<input type='hidden' value='" + pokemon.name + "'>";
                                divItem.addEventListener("click", () => {
                                    console.log(this["data-pokemon"]);
                                    inputSearch.value = this.data.name; // this.getElementsByTagName("input")[0].value;
                                    closeLists();
                                });
                                divItems.appendChild(divItem);
                            }
                        }
                    } else {
                        divItem = document.createElement("DIV");
                        divItem.innerHTML = "<strong>No se encontraron resultados</strong>";
                        divItems.appendChild(divItem);
                    }
                });
        }
    });

    // btnAgregar.addEventListener("click", (evento) => {
    //     divAgregar.style.display = "block";
    //     divDatos.style.display = "none";
    // });

    // btnEnviar.addEventListener("click", (evento) => {
    //     divAgregar.style.display = "none";
    // });


});