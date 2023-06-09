/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { "Hola!": "Vista '/docs' para ver la documentación :D"}
})

Route.group(() => {
  Route.group(() => {
    Route.get('','OpeningsController.getOpeningsNames')
    Route.get('/:openingName','OpeningsController.getOpeningMovesByName')
    Route.post('','OpeningsController.createOpening')
  }).prefix('/openings')

  Route.get('/all','OpeningsController.getAllData')
}).prefix('/api/v1')

// Aqui van los endpoints de la API. Son los mismos que hay en el otro proyecto, pero
// sin incluir el codigo directamente en la ruta. Crear controladores para ello.
