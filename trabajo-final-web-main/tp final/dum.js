var producto = [];
var precio = [];


function card() {
//TOMAMOS  SU  VALOR Y SE LO ASIGNAMOS A UNA VARIABLE
    var productos = document.getElementById("productos").value;
    var bebidas = document.getElementById("bebidas").value;


    var contenedoraux = document.getElementById("contenedor");
    var elem = document.getElementById("div1");
    contenedoraux.removeChild(elem);

    //LA CANTIDAD DE VUELTAS SON LA CANTIDAD DE CARDS QUE EL USUARIO QUIERE APRETAR
    for (var i = 1; i <= cantidad; i++) {
   //CREAMOS EL PRIMER DIV
        var div0 = document.createElement("div")
        div0.className = "row gx-5";
        div0.id = "div1"
        contenedoraux.appendChild(div0)

        switch (productos) {

            
            case "coca cola":
                producto = ["", "coca cola", "coca cola", "coca cola", "coca cola", "coca cola", "coca cola"];
                precio = [" ", "30.000$", "$32.000", "$30.000", "$25.000", "$32.000", "$34.000"];
                break;



            case "gin":
                producto = ["", "gin", "gin", "gin", "gin", "gin", "gin"];
                precio = [" ", "$14.000", "$14.600", "$19.000", "$19.290", "$21.600", "$19.990"];
                break;




            case "cervezas artesanales":
                producto = ["", "cervezas", "cervezas", "cervezas", "cervezas", "cervezas", "cervezas"];
                precio = [" ", "$9.900", "$9.900", "$10.900", "$9.900", "$14.500", "$9.900"];
                break;
            default:
                break;
        }
        
        var contenedor1 = document.getElementById("div1")
        var div1 = document.createElement("div")
        div1.className = "col-5"
        div1.id = "div1" + i
        contenedor1.appendChild(div1)

        var div1b = document.getElementById("div1" + i)
        var div2 = document.createElement("div")
        div2.className = "p-3"
        div2.id = "div2" + i
        div1b.appendChild(div2)

        var div2b = document.getElementById("div2" + i)
        var div3 = document.createElement("div")
        div3.className = "card"
        div3.id = "div3" + i
        div2b.appendChild(div3)

        var div3b = document.getElementById("div3" + i)
        var div4 = document.createElement("div")
        div4.className = "card"
        div4.style = "width: 18rem"
        div3b.appendChild(div4)

        var div5 = document.createElement("img")
        div5.src = "/img/" + vestimenta + i + ".jpg"
        div5.className = "card-img-top"
        div5.alt = "..."
        div3b.appendChild(div5)

        var div6 = document.createElement("div")
        div6.className = "card-body"
        div6.id = "div6" + i
        div3b.appendChild(div6)
        
        var div6b = document.getElementById("div6" + i)
        var div7 = document.createElement("h4")
        div7.className = "card-title"
        div7.innerHTML = "Vestimenta"
        div6b.appendChild(div7)

        var div8 = document.createElement("p")
        div8.className = "card-text"
        div8.innerHTML = producto[i] 
        div6b.appendChild(div8)

        var div9=document.createElement("p")
        div9.innerHTML ="  precio  " + precio[i]
        div6b.appendChild(div9)

        var div10=document.createElement("p")
        div6b.appendChild(div10)

        var button = document.createElement("button");
        button.className = "btn btn-primary"
        button.innerHTML = "comprar"
        div10.appendChild(button);



    }

}