

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
   
      return error;
    }
    return response.json();
  })
  .then(data => {
    const ram = document.getElementById("ram");

    data.forEach(details => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <p>ID: ${details.id}</p>
        <p>Name: ${details.name}</p>
        <p>Username: ${details.username}</p>
        <p>Email: ${details.email}</p>
        <hr>
      `;
      ram.appendChild(userDiv);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

