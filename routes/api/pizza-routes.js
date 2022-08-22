const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

//setup and GET all and POST at /api/pizza

router
.route('/')
.get(getAllPizza)
.post(createPizza);

//setup and GET one, PUT, and DELETE at /api/pizzas/:id

router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;
