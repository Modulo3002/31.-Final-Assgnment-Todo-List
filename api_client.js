const addToListBtn = document.querySelector("#input-btn");
const inputTxt = document.querySelector("#input-txt");
const UnOrlist = document.querySelector("#list");
const base_endpoint = "http://localhost:3000/";

const getApi = async () => {
  const APIEndpoint = `${base_endpoint}`;
  try {
    const res = await fetch(APIEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(`Dit is de getApi data:`, data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const postApi = async (task) => {
  const APIEndpoint = `${base_endpoint}`;
  const data = { description: task, done: false };
  try {
    const res = await fetch(APIEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await res.json();
    console.log(`Dit is de postApi data:`, responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
//
//
const deleteDataApi = async (id) => {
  const url = `${base_endpoint}${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
