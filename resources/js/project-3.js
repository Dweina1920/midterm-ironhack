let urlThree = "https://jsonplaceholder.typicode.com/posts/3";

fetch(urlThree)
   .then((response) => response.json())
   .then((data) =>mostrarData3(data))
   .catch((error) => console.log(error));

const mostrarData3 = (data) => {
  console.log(data);
  let infoProjectThree = "";
  infoProjectThree+= 
  `<div>
       <p class="title-project">${data.title}</p>
     </div>
     <div class="div-subtitle-date">
       <p class="subtitle">${data.body}</p>
       <p class="date">Completed on 2/2/22</p>
     </div>
   </div>`;

  document.getElementById("project-three").innerHTML = infoProjectThree;
  //console.log(body)
};

mostrarData2()
