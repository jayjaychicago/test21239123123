# Cars

Types:

- <code><a href="./src/resources/cars.ts">Car</a></code>
- <code><a href="./src/resources/cars.ts">CarListResponse</a></code>

Methods:

- <code title="post /cars">client.cars.<a href="./src/resources/cars.ts">create</a>({ ...params }) -> Car</code>
- <code title="get /cars/{carId}">client.cars.<a href="./src/resources/cars.ts">retrieve</a>(carID) -> Car</code>
- <code title="put /cars/{carId}">client.cars.<a href="./src/resources/cars.ts">update</a>(carID, { ...params }) -> Car</code>
- <code title="get /cars">client.cars.<a href="./src/resources/cars.ts">list</a>() -> CarListResponse</code>
- <code title="delete /cars/{carId}">client.cars.<a href="./src/resources/cars.ts">delete</a>(carID) -> void</code>
