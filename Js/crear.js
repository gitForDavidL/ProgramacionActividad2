const arreglo = new Array();
cargarDatos()
console.log(arreglo[0][0])

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