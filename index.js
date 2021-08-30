function submitData(name, email) {
    const formObject = {
        name: name,
        email: email
    }

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formObject)
    }) 
    .then(function(response) {
        return response.json();
      })
      .then(function(object) {
       const id = document.createElement("h1")
       const body = document.querySelector("body")
       id.innerHTML = object.id 

       body.appendChild(id)
       
      })
      .catch(function(error) {
        const errorMessage = document.createElement("h1")
        const body = document.querySelector("body")
        errorMessage.innerHTML = error.message

        body.appendChild(errorMessage)

      });
}