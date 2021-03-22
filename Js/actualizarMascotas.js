const td1 = document.getElementById("llenar")
cargarDatos()
var tr1 = document.createElement("td")
var tr2 = document.createElement("td")
var tr3 = document.createElement("td")
var tr4 = document.createElement("td")
var tr5 = document.createElement("td")
var tr6 = document.createElement("td")
var tr7 = document.createElement("td")
var tr8 = document.createElement("td")
var tr9 = document.createElement("td")
const arreglo = new Array();

function cargarDatos() {
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                arreglo[i] = new Array()
                arreglo[i][0] = data[i].microchip
                arreglo[i][1] = data[i].neighborhood
                arreglo[i][2] = data[i].potentDangerous
                arreglo[i][3] = data[i].sex
                arreglo[i][4] = data[i].size
                arreglo[i][5] = data[i].species
                arreglo[i][9] = data[i].picture


            }
        })
        .catch(function(error) {
            // handle error   
        });
}

function leerCsv() {
    const microchip = document.getElementById("busquedaMicroship").value;
    const boton = document.getElementById("botons").disabled = true
    const boton2 = document.getElementById("reinicia").disabled = false

    const bandera = false
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].microchip == microchip) {
                    asignarSelect(data[i].size)
                    tr1.textContent = arreglo[i][5]
                    tr2.textContent = arreglo[i][0]
                    tr3.textContent = arreglo[i][3]
                    tr4.textContent = arreglo[i][4]
                    tr5.textContent = arreglo[i][1]
                    tr6.textContent = arreglo[i][6]
                    tr7.textContent = arreglo[i][7]
                    tr8.textContent = arreglo[i][8]
                    tr9.textContent = arreglo[i][9]

                    td1.appendChild(tr1)
                    td1.appendChild(tr2)
                    td1.appendChild(tr3)
                    td1.appendChild(tr4)
                    td1.appendChild(tr5)
                    td1.appendChild(tr6)
                    td1.appendChild(tr7)
                    td1.appendChild(tr8)
                    td1.appendChild(tr9)
                    const div = document.getElementById("formu").style.display = "block"
                    bandera = true

                }
            }
            if (bandera == false) {
                tr1.textContent = "none"
                tr2.textContent = "none"
                tr3.textContent = "none"
                tr4.textContent = "none"
                tr5.textContent = "none"
                tr6.textContent = "none"
                tr7.textContent = "none"
                tr8.textContent = "none"
                td1.appendChild(tr1)
                td1.appendChild(tr2)
                td1.appendChild(tr3)
                td1.appendChild(tr4)
                td1.appendChild(tr5)
                td1.appendChild(tr6)
                td1.appendChild(tr7)
                td1.appendChild(tr8)
                td1.appendChild(tr9)
                alert("No se encontró el microship")
            }
            console.log("sadasda")

        })
        .catch(function(error) {
            // handle error   
        });

}

var op1 = document.createElement("option")
var op2 = document.createElement("option")
var op3 = document.createElement("option")
var op4 = document.createElement("option")

function asignarSelect(valor, tipo) {

    const microchip = document.getElementById("busquedaMicroship").value;
    if (tipo == "CANINO") {
        if (valor == "PEQUE�O") {
            console.log("Es peqieño")
            op1.textContent = "Pug"
            op2.textContent = "Jack Russell"
            op3.textContent = "Frenchton"
            op4.textContent = "Mal-shi"
        } else if (valor == "MEDIANO") {
            console.log("Es mediano")
            op1.textContent = "Pastor Leones"
            op2.textContent = "Jack Springel"
            op3.textContent = "Kerry Blue Terrier"
            op4.textContent = "Shikoku inu"
        } else if (valor == "MUY GRANDE") {
            console.log = ("Es muy grande")
            op1.textContent = "Dogo Alemán"
            op2.textContent = "San Bernardo"
            op3.textContent = "Mastín Napolitano"
            op4.textContent = "Leonberger"
        } else if (valor == "MINIATURA") {
            console.log("Es minuatura")
            op1.textContent = "Chihuahua"
            op2.textContent = "Shih Tzu"
            op3.textContent = "Caniche"
            op4.textContent = "Pomerania"

        } else if (valor == "GRANDE") {
            op1.textContent = "Presa Canario"
            op2.textContent = "Rottweiler"
            op3.textContent = "Husky siberiano"
            op4.textContent = "Bernedoodle"
        }
    } else {
        if (valor == "PEQUE�O") {
            console.log("Es peqieño")
            op1.textContent = "skookum"
            op2.textContent = "munchkin"
            op3.textContent = "devon rex"
            op4.textContent = "korat"
        } else if (valor == "MEDIANO") {
            console.log("Es mediano")
            op1.textContent = "khao manee"
            op2.textContent = "highland fold"
            op3.textContent = "bobtail americano"
            op4.textContent = "ural rex"
        } else if (valor == "MUY GRANDE") {
            console.log = ("Es muy grande")
            op1.textContent = "Savannah"
            op2.textContent = "Cartujo"
            op3.textContent = "Bosque de Noruega"
            op4.textContent = "Gato de Bengala"
        } else if (valor == "MINIATURA") {
            console.log("Es minuatura")
            op1.textContent = "Korat"
            op2.textContent = "Munchkin"
            op3.textContent = "Skookum"
            op4.textContent = "Devon rex"

        } else if (valor == "GRANDE") {
            op1.textContent = "Caracat"
            op2.textContent = "Montes"
            op3.textContent = "Chausie"
            op4.textContent = "Van Turco"
        }

    }

    console.log("salio")
    select.appendChild(op1)
    select.appendChild(op2)
    select.appendChild(op3)
    select.appendChild(op4)
}

function reiniciar() {
    td1.removeChild(tr1)
    td1.removeChild(tr2)
    td1.removeChild(tr3)
    td1.removeChild(tr4)
    td1.removeChild(tr5)
    td1.removeChild(tr6)
    td1.removeChild(tr7)
    td1.removeChild(tr8)
    td1.removeChild(tr9)
    document.getElementById("busquedaMicroship").value = ""
    const boton = document.getElementById("botons").disabled = false
    const boton2 = document.getElementById("reinicia").disabled = true
    const div = document.getElementById("formu").style.display = "none"
    document.getElementById("espacioRace").value = ""


}

function actualizar() {
    const microchip = document.getElementById("busquedaMicroship").value;
    const racer = document.getElementById("select").value
    const owner = document.getElementById("owner").value
    const address = document.getElementById("address").value
    const picture = document.getElementById("pwd").value
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].microchip == microchip) {

                    console.log(arreglo[i][4])
                    arreglo[i][6] = racer
                    console.log(arreglo[i][6])
                    arreglo[i][7] = owner
                    console.log(arreglo[i][7])
                    arreglo[i][8] = address
                    console.log(arreglo[i][8])
                    arreglo[i][9] = picture
                }
            }



        })
        .catch(function(error) {
            // handle error   
        });
    // document.getElementById("race").value = "";
    document.getElementById("owner").value = "";
    document.getElementById("address").value = ""
    const div = document.getElementById("formu").style.display = "none"
    console.log(document.getElementById("pwd").value)
    alert("Actualizado")

}