const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Category findAll()
router.get('/', (req, res) => {
  // find all categories
  try {
    Category.findAll({
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    })
    res.status(200).json(catData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});




// Category findOne()
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    Category.findOne({
      where: {
        id: req.params.id
      },
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    })
    res.status(200).json(catData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});





router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
