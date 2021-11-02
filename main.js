let pais = prompt('Ingrese su país:');

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

if (pais == "arabia saudita" || pais == "estados unidos") {
    alert('No tenemos un catálogo de libros para ' + titleCase(pais));
} else {
    alert('¡Disfrute de nuestro catálogo de libros seleccionados para ' + titleCase(pais) + '!');
}





