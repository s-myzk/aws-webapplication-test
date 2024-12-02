const url = "https://ks63bzhiv7y2a2gf6pzwroiluu0mbpvp.lambda-url.ap-northeast-1.on.aws/";

async function post() {
  console.log("post start");
  const formData = {
    name: document.querySelector('#name').value,
    location: document.querySelector('#location').value,
  }
  console.log("formData:", JSON.stringify(formData));
  await fetch(url, {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(formData)
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  console.log("post end");
}

async function get() {
  console.log("get start");
  await fetch(url, {
    mode: 'cors'
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const contentBlock = document.querySelector("#content");
    contentBlock.innerHTML = "";

    for (const item of data.Items) {
      const listItem = document.createElement("div");
      listItem.append(`Name: ${item.name}, Location: ${item.location}`);
      contentBlock.appendChild(listItem);
    } 
  });
  console.log("get start");
}