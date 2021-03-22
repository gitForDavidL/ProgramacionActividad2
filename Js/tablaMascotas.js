d3.dsv(";", "../Resources/pets-citizens.csv")
    .then(function(data) {

        let res = document.querySelector('#res')
        res.innerHTML = '';
        for (var i = 0; i < 50; i++) {
            res.innerHTML += ` 
            <tr>
            <td>${data[i].microchip}</td>
            <td>${data[i].species}</td>
            <td>${data[i].sex}</td>
            <td>${data[i].size}</td>
            <td>${data[i].potentDangerous}</td>
            <td>${data[i].neighborhood}</td>
            </tr>
`
        }

        var cont = 1;
        var first = 0;
        var end = 1000;
        let lista = document.getElementById('paginacion')
        lista.innerHTML = ''
        for (var j = 0; j < data.length; j++) {
            if (esMultiplo(j, 1000)) {
                lista.innerHTML += `
                <li class="page-item"><a class="page-link" href="#" onclick="cargarDatos(${first},${end})" id="${cont}">${cont}</a></li>
                `
                cont++;
                first += 1000;
                end += 1000;
            }
        }
        console.log(data)
        cargarDatos(0, 100)
    })

.catch(function(error) {
    // handle error   
});

function esMultiplo(number, multiplo) {
    if (number % multiplo == 0) {
        return true
    } else {
        return false
    }
}


function cargarDatos(desde, fin) {
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            let res = document.querySelector('#res')
            res.innerHTML = ''
            for (var i = desde; i < fin; i++) {
                res.innerHTML += `
                <tr>
                <td>${data[i].microchip}</td>
                <td>${data[i].species}</td>
                <td>${data[i].sex}</td>
                <td>${data[i].size}</td>
                <td>${data[i].potentDangerous}</td>
                <td>${data[i].neighborhood}</td>
                </tr>`
            }
        })
        .catch(function(error) {
            // handle error   
        });

}




function hacerFiltro() {
    const selec = document.getElementById('filtros')
    const filtro = selec.value
    console.log(filtro)
    const arreglo = [];
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                if (filtro == data[i].species || filtro == data[i].size || filtro == data[i].neighborhood) {
                    arreglo.push(data[i])
                }
            }

            var cont = 1;
            var first = 0;
            var end = 1000;
            let lista = document.getElementById('paginacion')
            lista.innerHTML = ''
            for (var j = 0; j < arreglo.length; j++) {
                if (esMultiplo(j, 1000)) {
                    lista.innerHTML += `
                        <li class="page-item"><a class="page-link" href="#" onclick="cargarFiltros(${first},${end},${arreglo})" id="${cont}">${cont}</a></li> 
                        `
                    cont++;
                    first += 1000;
                    end += 1000;

                }
            }
            cargarFiltros(0, 200, arreglo)
        })
        .catch(function(error) {
            // handle error   
        });
}

function cargarFiltros(desde, fin, arreglo) {
    let res = document.querySelector('#res')
    res.innerHTML = ''
    for (var k = desde; k < fin; k++) {


        res.innerHTML += `
        <tr>
        <td>${arreglo[k].microchip}</td>
        <td>${arreglo[k].species}</td>
        <td>${arreglo[k].sex}</td>
        <td>${arreglo[k].size}</td>
        <td>${arreglo[k].potentDangerous}</td>
        <td>${arreglo[k].neighborhood}</td>
        </tr>`
    }
}