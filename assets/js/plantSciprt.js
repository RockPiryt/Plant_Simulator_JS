
let garden = [];
let maxPlants = 10; // 5 per bed, 2 beds

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
    const gardenDiv = document.getElementById('garden');
    gardenDiv.innerHTML = '';
    garden.forEach((plant, index) => {
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
    gardenDiv.appendChild(div);
    });
}

function waterPlants() {
    if (garden.length === 0) return;
    garden.forEach((plant) => {
    if (plant.isDead) return;
    plant.waterLevel++;
    plant.size += 10;
    if (plant.waterLevel > 10) {
        plant.isDead = true;
        plant.size = 100;
    } else if (plant.size > window.innerHeight * 0.6) {
        plant.size = window.innerHeight * 0.6;
        alert("A plant has reached its maximum height!");
    }
    });
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
