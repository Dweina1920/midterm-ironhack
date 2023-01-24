/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

let addPost = (e) => {
    // Verificacion y "refrescar" conceptos de semana pasada
    e.preventDefault();
   
    console.log("CTA Connected");
    // Vamos a traernos el valor de los inputs del html
    let fullNameOfUserInput = document.querySelector("#fullname").value;
    let phoneOfUserInput = document.querySelector("#phone").value;
    let emailOfUserInput = document.querySelector("#email").value;
    let messajeOfUserInput = document.querySelector("#messaje").value;
    // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
       
        fullName: fullNameOfUserInput,
        phone: phoneOfUserInput,
        email: emailOfUserInput,
        messaje: messajeOfUserInput,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  
  // Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
  document.querySelector("#addPost").addEventListener("submit", addPost);
  
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  