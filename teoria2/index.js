
// const respuesta= document.getElementById("resp");
// const btnejecutar= document.getElementById("ejecuta");

// btnejecutar.addEventListener('click', iniciar)

// let frutas =["manzana","mango", "oscar"];
// function iniciar()
// {
//    // respuesta.innerText=frutas[frutas.length-1] // retorna el tamaño del array

//    frutas.forEach
//    (
//         function(item,index,array)
//         {
//         // respuesta.innerText=item; // retonra el ultimo elemento
//          respuesta.innerText=index; // retorna el tamaño del array
//         // respuesta.innerText=array;  //Retorna todo el array
//         } 
//    );
// }

//json como gestionarlo dentro de manera asincrona mediante http
//consumir una api
// async function obtenerData()
// {
//    const response=await fetch("http://127.0.0.1:5500/data.json");

//    const json = await response.text();
//    console.log(JSON.parse(json));
// }

// obtenerData();


async function obtenerData()
{
   await fetch("http://127.0.0.1:5500/data.json")
   .then(response=>response.json())
   .then(json=> console.log(json))
   .catch(error=>console.log('solicitud fallida',error))



}

obtenerData();