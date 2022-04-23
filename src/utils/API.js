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
  phone,
  img,
  imgName
) {
  let requestOptions;

  if (img) {
	  const formdata = new FormData();
	  formdata.append("name", name);
	  formdata.append("nick_name", username);
	  formdata.append("email", email);
	  formdata.append("phone", phone);
	  formdata.append("country", "eg");
	  formdata.append("img", img, imgName);

  	requestOptions = {
	    method: "POST",
	    body: formdata,
	    redirect: "follow",
  	};
  } else {
  	requestOptions = {
	    method: "POST",
	    headers: {
	      "Content-Type": " application/json",
	    },
   		body: JSON.stringify({
	      "name": name,
	      "nick_name": username,
	      "email": email,
	      "phone": phone,
	      "country": "eg"
    	}),
  	};
  }

  const res = await fetch(
    `https://seefshop.herokuapp.com/server/updateuser/${id}`,
    requestOptions
  )

	const data = await res.json();
  return data;
}

export async function resetPassword(id, email, password) {
  const res = await fetch(`https://seefshop.herokuapp.com/server/resetpassword/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": " application/json",
    },
 		body: JSON.stringify({
 			"email": email,
      "password": password
  	}),
  })

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
