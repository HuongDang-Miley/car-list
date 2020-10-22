Car-list
CAR-LIST:

npx express-generator car-list --view=ejs

change all var to const

dotenv

hookup database

*Use the new folder structure

One folder-> Cars
models -> Car.js
controllers -> carController.js
carRoutes.js

two routes
/cars/get-cars
/cars/add-car
parent route is  /cars

use controllers
function names:
getAllCars
createCarr

views
main folder -> one file index.ejs
index.ejs
- adds a car at the top and shows a list of cars beneath it.
-when you add a car you should see it added to the page

Car.js Model fields
name- string, unique,lowercase,required (represents name of the car)
type- string,required
year- string,required 



Submit github link here