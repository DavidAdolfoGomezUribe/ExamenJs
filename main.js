console.log("ok");

document.getElementById("miformulario").addEventListener("submit", async function(event) {
    event.preventDefault();  

    
    let nombreValue = document.getElementById("nombre").value;
    let ingredientesValue = document.getElementById("ingredientes").value;
    let instruccionesValue = document.getElementById("instrucciones").value;
    let tiempoValue = document.getElementById("tiempo").value
    let numeroValue = document.getElementById("numero").value
    let categoriaValue = document.getElementById("categoria").value
    let dificltadValue = document.getElementById("dificultad").value

    
    const formData = {
        nombre: nombreValue,
        ingredientes: ingredientesValue,
        instrucciones: instruccionesValue,
        tiempo:tiempoValue,
        numero: numeroValue,
        categoria: categoriaValue,
        dificultad: dificltadValue
    }; 

    if(tiempoValue <= 0 || numeroValue <= 0){
        alert("solamente numeros positivos")

    } else{
        let nombre = document.getElementById("nombre");
        nombre.value = ""
        
        let ingredientes = document.getElementById("ingredientes");
        ingredientes.value=""
        
        let instrucciones = document.getElementById("instrucciones");
        instrucciones.value=""

        let tiempo = document.getElementById("tiempo")
        tiempo.value=""

        let numero = document.getElementById("numero")
        numero.value = ""

        let categoria = document.getElementById("categoria")
        categoria.value="desayuno"
        
        let dificltad = document.getElementById("dificultad")
        dificltad.value="facil"

        let itemsEnLS = localStorage.length

        if (itemsEnLS >= 1) {
            let newItemsEnLS = itemsEnLS + 1
            localStorage.setItem(newItemsEnLS, JSON.stringify(formData));
            listarTodo()
        } else {
            localStorage.setItem("1", JSON.stringify(formData));
            listarTodo()
        }

    }
    
});


const recetario = document.getElementById("recetario")

function listarTodo() {
    
    
    for (let i = 1; i < (localStorage.length + 1); i++) {
        let string = i.toString()
        
        const ejemplo = localStorage.getItem(string)
        const ejemploDos= JSON.parse(ejemplo)
        
        
        recetario.innerHTML+=`<div>
                                <p><strong>Numero  de la receta :</strong> ${i} </p>
                                <p><strong>Nombre </strong> : ${ejemploDos.nombre} </p>
                                <p><strong>ingredientes : </strong>${ejemploDos.ingredientes}</strong> </p>
                                <p><strong>instrucciones :</strong>${ejemploDos.instrucciones} </p>
                                <p><strong>tiempo :</strong>${ejemploDos.tiempo} </p>
                                <p><strong>numero :</strong>${ejemploDos.numero} </p>
                                <p><strong>categoria :</strong>${ejemploDos.categoria} </p>
                                <p><strong>dificultad :</strong>${ejemploDos.dificultad} </p>
                            </div>`
    
        
        }

}    
listarTodo()



document.getElementById("filtro").addEventListener("submit", async function(event) {
    alert("Para editar rellena de nuevo el formulario con los datos nuevos y luego has click en editar")
    let filtronombreValue = document.getElementById("filtronombre").value;
    
    let valorUno = localStorage.getItem(filtronombreValue)

    
    

    const ValorDos= JSON.parse(valorUno)
    
        
    recetario.innerHTML=`<div>
                            <p>Numero  de la receta ${filtronombreValue} </p>
                            <p>Nombre ${ValorDos.nombre} </p>
                            <p>ingredientes ${ValorDos.ingredientes} </p>
                            <p>instrucciones ${ValorDos.instrucciones} </p>
                            <p>tiempo ${ValorDos.tiempo} </p>
                            <p>numero ${ValorDos.numero} </p>
                            <p>categoria ${ValorDos.categoria} </p>
                            <p>dificultad ${ValorDos.dificultad} </p>
                        </div>`
    
    
    let eliminar= document.querySelector(".eliminar")
        eliminar.addEventListener("click",()=>{
             
        

            
            const formData = {
                nombre:"",
                ingredientes:"",
                instrucciones:"",
                tiempo:"",
                numero: "",
                categoria: "",
                dificultad: ""
            };
            localStorage.setItem(filtronombreValue, JSON.stringify(formData));
        
    })


    let editar= document.querySelector(".editar")
        editar.addEventListener("click",()=>{

            let nombreValue = document.getElementById("nombre").value;
            let ingredientesValue = document.getElementById("ingredientes").value;
            let instruccionesValue = document.getElementById("instrucciones").value;
            let tiempoValue = document.getElementById("tiempo").value
            let numeroValue = document.getElementById("numero").value
            let categoriaValue = document.getElementById("categoria").value
            let dificltadValue = document.getElementById("dificultad").value    
            
            const formData = {
                nombre:nombreValue,
                ingredientes:ingredientesValue,
                instrucciones:instruccionesValue,
                tiempo:tiempoValue,
                numero: numeroValue,
                categoria: categoriaValue,
                dificultad: dificltadValue
            };

            localStorage.setItem(filtronombreValue, JSON.stringify(formData));
            alert("has editiados los datos")            
        })

})










