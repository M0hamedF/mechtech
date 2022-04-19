export async function getProducts() {
  let res = await fetch("https://seefshop.herokuapp.com/server/products");
  let data = await res.json();
  return data;
}

export async function signIn(username, password) {
  const res = await fetch("https://seefshop.herokuapp.com/server/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "nick_name": username,
      "password": password
    }),
  });

  const data = await res.json();
  return data;
}

export async function addUser(username, name, email, password, phone) {
  const res = await fetch("https://seefshop.herokuapp.com/server/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": name,
      "nick_name": username,
      "email": email,
      "password": password,
      "phone": phone,
      "country": "eg"
    }),
  });

	const data = await res.text();
  return data;
}

export async function updateUser(
  id,
  name,
  username,
  email,
  password,
  phone,
  img = null,
  imgPath
) {
  const formdata = new FormData();
  formdata.append("name", name);
  formdata.append("nick_name", username);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("phone", phone);
  formdata.append("country", "eg");
  img !== null && formdata.append("img", img, imgPath);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(
    `https://seefshop.herokuapp.com/server/updateUser/${id}`,
    requestOptions
  );

	const data = await res.text();
  return data;
}

export async function deleteUser(id) {
  const res = await fetch(`https://seefshop.herokuapp.com/server/deleteuser/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": " application/json",
    },
  })

	const data = await res.text();
  return data;
}
