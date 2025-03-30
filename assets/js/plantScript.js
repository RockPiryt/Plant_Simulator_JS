
let garden = [];
let maxPlants = 12; // 4 per row, 3 rows

function selectPlant(imageSrc) {
    if (garden.length >= maxPlants) {
    alert("Maximum number of plants reached.");
    return;
    }
    const plant = {
    imageSrc: imageSrc,
    waterLevel: 0,
    size: 100,
    isDead: false,
    };
    garden.push(plant);
    renderGarden();
    document.getElementById('plant-selection').style.display = 'none';
}

function renderGarden() {
    const gardenRow = document.getElementById('garden-row');
    gardenRow.innerHTML = '';
  
    garden.forEach((plant, index) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-3 plant-container mb-4';
  
      const div = document.createElement('div');
      div.className = 'plant';
  
      const img = document.createElement('img');
      img.src = plant.imageSrc;
      img.style.height = plant.size + 'px';
      if (plant.isDead) img.classList.add('dead');
      div.appendChild(img);
  
      const label = document.createElement('div');
      label.innerText = 'Plant #' + (index + 1);
      div.appendChild(label);
  
      col.appendChild(div);
      gardenRow.appendChild(col);
    });
  }
  

  function waterPlants() {
    if (garden.length === 0) {
      alert("There are no plants to water.");
      return;
    }
  
    const index = prompt("Enter the number of the plant to water (1 to " + garden.length + "):");
    const idx = parseInt(index) - 1;
  
    if (isNaN(idx) || idx < 0 || idx >= garden.length) {
      alert("Invalid plant number.");
      return;
    }
  
    const plant = garden[idx];
    if (plant.isDead) {
      alert("This plant is dead and cannot be watered.");
      return;
    }
  
    plant.waterLevel++;
    plant.size += 10;
  
    if (plant.waterLevel > 5) { // ← tu zmieniamy limit na 5
      plant.isDead = true;
      plant.size = 100;
    } else if (plant.size > window.innerHeight * 0.6) {
      plant.size = window.innerHeight * 0.6;
      alert("Plant #" + (idx + 1) + " has reached its maximum height!");
    }
  
    renderGarden();
  }
  
  

function fertilize() {
    if (garden.length >= maxPlants) {
    alert("Cannot fertilize more. Maximum plants reached.");
    return;
    }
    const firstPlant = garden[0];
    if (firstPlant) {
    selectPlant(firstPlant.imageSrc);
    }
}

function revivePlants() {
    garden.forEach((plant) => {
    if (plant.isDead) {
        plant.isDead = false;
        plant.waterLevel = 0;
        plant.size = 100;
    }
    });
    renderGarden();
}

function cutPlant() {
    if (garden.length === 0) return;
    const index = prompt("Enter the number of the plant to cut (1 to " + garden.length + "):");
    const idx = parseInt(index) - 1;
    if (isNaN(idx) || idx < 0 || idx >= garden.length) {
    alert("Invalid plant number.");
    return;
    }
    if (garden.length === 1) {
    garden[0].waterLevel = 0;
    garden[0].isDead = false;
    garden[0].size = 100;
    } else {
    garden.splice(idx, 1);
    }
    renderGarden();
}
