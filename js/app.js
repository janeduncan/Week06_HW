document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', handleDeleteButton);

  document.getElementById("defaultOpen").click()

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
    category: event.target.category.value,
    sensor: event.target.sensor.value,
    lens: event.target.lens.value,
    flash: event.target.flash.value,
    price: event.target.price.value
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
  const sensorLi = document.createElement('li');
  sensorLi.textContent = `Sensor: ${camera.sensor}`;
  const lensLi = document.createElement('li');
  lensLi.textContent = `Lens type: ${camera.lens}`;
  const flashLi = document.createElement('li');
  flashLi.textContent = `Built-in flash: ${camera.flash}`;
  const priceLi = document.createElement('li');
  priceLi.textContent = `Price: £${camera.price}`;

  cameraUl.appendChild(modelLi);
  cameraUl.appendChild(brandLi);
  cameraUl.appendChild(categoryLi);
  cameraUl.appendChild(sensorLi);
  cameraUl.appendChild(lensLi);
  cameraUl.appendChild(flashLi);
  cameraUl.appendChild(priceLi);

  return cameraUl;
}

const renderList = function(){
  const cameraDiv = document.querySelector('#camera-list');
    cameraDiv.innerHTML = "";
  const cameraList = getList();
  cameraList.forEach((camera) => {
    cameraUl = buildList(camera);
    cameraDiv.appendChild(cameraUl);
  });

}

const handleDeleteButton = function(){
  localStorage.clear();
  renderList();
}

function openForm(evt, forms) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(forms).style.display = "block";
    evt.currentTarget.className += " active";
}
