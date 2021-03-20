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

    })
    .catch(function(error) {
        // handle error   
    });


function pagina1() {
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

        })
        .catch(function(error) {
            // handle error   
        });
}


function pagina2() {
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            let res = document.querySelector('#res')
            res.innerHTML = '';
            for (var i = 50; i < 100; i++) {
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

        })
        .catch(function(error) {
            // handle error   
        });
}



function pagina3() {
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            let res = document.querySelector('#res')
            res.innerHTML = '';
            for (var i = 100; i < 150; i++) {
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

        })
        .catch(function(error) {
            // handle error   
        });
}


function buscarId() {
    d3.dsv(";", "../Resources/pets-citizens.csv")
        .then(function(data) {
            var campo
            console.log(document.getElementsByClassName('campo').value)
            var cont;
            res.innerHTML = '';
            for (var i = 0; i < data.length; i++) {
                if (campo == data[i].microchip) {
                    cont = i;
                }
            }

            if (cont == 0) {
                alert('no se encontro mascota en los registros');
            } else {
                res.innerHTML += `
                <tr>
                    <td>${data[cont].microchip}</td>
                    <td>${data[cont].species}</td>
                    <td>${data[cont].sex}</td>
                    <td>${data[cont].size}</td>
                    <td>${data[cont].potentDangerous}</td>
                    <td>${data[cont].neighborhood}</td>
                </tr>
                `
            }

        })
        .catch(function(error) {
            // handle error   
        });
}