// save user to data base

export const saveUser = (user) => {
  const currentUser = {
    email: user?.email
  }

  fetch(`http://localhost:7000/users/${user?.email}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    });
}

