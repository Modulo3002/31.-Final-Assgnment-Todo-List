const createElements = (item) => {
  const liElement = document.createElement("li");
  const iElement = document.createElement("i");
  iElement.className = "fa-solid fa-trash";
  liElement.innerHTML = item.description;
  liElement.append(iElement);
  UnOrlist.append(liElement);
  iElement.addEventListener("click", async () => {
    await deleteDataApi(item._id);
    iElement.parentNode.remove();
    console.log("click werkt");
  });
};

const getDataFromApi = async () => {
  const data = await getApi();
  data.forEach(createElements);
};
getDataFromApi();

const getPostedDataFromApi = async () => {
  const inputTxtVal = inputTxt.value;
  const data = await postApi(inputTxtVal);
  createElements(data);
};

//
addToListBtn.addEventListener("click", getPostedDataFromApi);

// addToListBtn.addEventListener("click", getApi);
//
// UnOrlist.addEventListener("click", (event) => {
//   if (event.target.className === "fa-solid fa-trash") {
//     console.log(event.target.innerHTML, "ik werk");
//     event.target.parentNode.remove();
//   }
// });
