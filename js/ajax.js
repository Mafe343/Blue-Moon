document.querySelector('#boton-cobertura').addEventListener('click', traerDatos);

function traerDatos(){
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'cobertura.json', true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let info = JSON.parse(this.responseText);
      let cobertura = document.querySelector('#cobertura')

      cobertura.innerHTML = '';

      // console.log(info);

      for(let item of info){
        // console.log(item);

        cobertura.innerHTML += `
        <tr>
          <td>${item.Ciudad}</td>
          <td>${item.Cobertura}</td>
        </tr>
        `
      }
    }
  } 
}