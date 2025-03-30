# Plant_Simulator_JS
The application should allow the user to grow virtual plants and take care of them by watering and fertilizing.

## Required Features:
Plant Selection
At the beginning of the game, the user can choose one plant (from at least 3 available plants), represented by its image.

### Watering
The user can water a plant by clicking on a water drop icon.

Each watering increases the plant's size (increases the plant image size).

If the plant is watered more than a certain number of times (e.g., 5 or 10), it dies and its leaves turn brown.

Additional signs of overwatering can be used: e.g., change of plant background or highlighting the water icon to indicate overwatering.

If the user has more than one plant, the water is evenly distributed among all the plants.

### Fertilizing
The user can add fertilizer by clicking on a fertilizer icon.

Each fertilizer use adds a new plant to the garden.

However, the user cannot have more than 5 plants per garden bed and a maximum of 2 garden beds.

### Reviving
If a plant has died, the user can revive it by clicking on an ambulance icon.

The plant comes back to life and resets to its initial state.

If there are multiple plants, all dead plants are revived at once.

### Cutting
The user can cut down a plant by clicking on an axe icon.

The user must specify the number of the plant they want to cut.

If there is only one plant, it is revived instead, and its water level is reset to 0.

### Limits

The size of the plant image must not exceed 60% of the screen height.

When a plant reaches its maximum height, a message should appear:
"The plant has reached its maximum height."