/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

let urlOne = "https://jsonplaceholder.typicode.com/posts/1";
let urlTwo = "https://jsonplaceholder.typicode.com/posts/2";
let urlThree = "https://jsonplaceholder.typicode.com/posts/3";

fetch(urlOne)
  .then((response) => response.json())
  .then((data) => mostrarData1(data))
  .catch((error) => console.log(error));

const mostrarData1 = (data) => {
  console.log(data);
  let infoProjectOne = "";
  infoProjectOne += `<div>
       <p class="title-project">${data.title}</p>
     </div>
     <div class="div-subtitle-date">
       <p class="subtitle">${data.body}</p>
       <p class="date">Completed on 2/2/22</p>
     </div>
   </div>`;

  document.getElementById("project-one").innerHTML = infoProjectOne;
  //console.log(body)
};

mostrarData1()





