function cargarTabla() {
    var microchip = document.getElementById('microchip').value
    var especie = document.getElementById('especie').value
    var sexo = document.getElementById('sexo').value
    var size = document.getElementById('size').value
    var peligro = document.getElementById('peligroso').value
    var barrio = document.getElementById('barrio').value

    console.log(microchip)

    let table = document.getElementById('res')
    table.innerHTML += `
                        <tr>
                        <td>${microchip}</td>
                        <td>${especie}</td>
                        <td>${sexo}</td>
                        <td>${size}</td>
                        <td>${peligro}</td>
                        <td>${barrio}</td>
                        </tr>`

    document.getElementById('microchip').value = ""
    document.getElementById('especie').value = ""
    document.getElementById('sexo').value = ""
    document.getElementById('size').value = ""
    document.getElementById('barrio').value = ""

}