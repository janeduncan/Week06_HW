document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

const getList = function(){
  if (JSON.parse(localStorage.getItem('cameras')) !== null){
    return JSON.parse(localStorage.getItem('cameras'));
  } else {
    return [];
  }
};

const handleFormSubmit = function(event){
  event.preventDefault();
  cameraList = getList();
  const newCamera = {
    model: event.target.model.value,
    brand: event.target.brand.value,
    category: event.target.category.value
  };

  cameraList.push(newCamera);

  localStorage.setItem('cameras', JSON.stringify(cameraList));
  renderList();
  event.target.reset();
};

const buildList = function(camera){
  const cameraUl = document.createElement('ul');
  const modelLi = document.createElement('li');
  modelLi.textContent = `Model: ${camera.model}`;
  const brandLi = document.createElement('li');
  brandLi.textContent = `Brand: ${camera.brand}`;
  const categoryLi = document.createElement('li');
  categoryLi.textContent = `Category: ${camera.category}`;

  cameraUl.appendChild(modelLi);
  cameraUl.appendChild(brandLi);
  cameraUl.appendChild(categoryLi);

  return cameraUl;
}

const renderList = function(){
    const readingDiv = document.querySelector('#camera-list');
    readingDiv.innerHTML = "";
  const cameraList = getList();
  cameraList.forEach((camera) => {
    cameraUl = buildList(camera);
    readingDiv.appendChild(cameraUl);

  });


}
