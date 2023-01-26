let urlTwo = "https://jsonplaceholder.typicode.com/posts/2";
fetch(urlTwo)
   .then((response) => response.json())
   .then((data) =>mostrarData2(data))
   .catch((error) => console.log(error));

const mostrarData2 = (data) => {
  console.log(data);
  let infoProjectTwo = "";
  infoProjectTwo+= 
  `<div>
       <p class="title-project">${data.title}</p>
     </div>
     <div class="div-subtitle-date">
       <p class="subtitle">${data.body}</p>
       <p class="date">Completed on 2/2/22</p>
     </div>
   </div>`;

  document.getElementById("project-two").innerHTML = infoProjectTwo;
  //console.log(body)
};

mostrarData2()
