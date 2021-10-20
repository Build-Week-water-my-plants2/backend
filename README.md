# ft-water-my-plants-2 backend

### API

#### Base URL: https://web46-watermyplants2.herokuapp.com/

#### Users(Auth) API

- `[POST] /api/users/register` requires an object in format `{ username, password, phone}` and returns an object `{user_id, username, hashed password, phone}`

- `[POST] /api/users/login` requires an object in format `{username, password}` and replies with an object in the format `{user_id, message, token}`

- `[PUT] /api/users/update/:id` requires an object in the format `{username, password, newPassword, phone}` (password must match the current user password) and returns the message `{ message: "User Password Updated" }`

#### Plants API

- `[GET] /api/plants/` returns an array of plants

- `[GET] /api/plants/:id` returns the plant with the given id in the format `{plant_id, plant_name, species_name, watering_freq, image_url`

- `[POST] /api/plants/add` requires an object in format `{plant_name, 'species_name, watering_freq, user_id}` and returns the newly created object

- `[PUT] /api/plants/put/:id` requires necessary object properties to create a new plant and returns the updated plant

- `[DELETE] /api/plants/:id` returns the message 'Plant has been removed'



