let addPost = (e) => {
  e.preventDefault();

  console.log("CTA Connected");

  let fullNameOfUserInput = document.querySelector("#fullname").value;
  let phoneOfUserInput = document.querySelector("#phone").value;
  let emailOfUserInput = document.querySelector("#email").value;
  let messajeOfUserInput = document.querySelector("#messaje").value;

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

document.querySelector("#addPost").addEventListener("submit", addPost);
