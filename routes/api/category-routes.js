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
    if (!catData) {
      res.status(404).json({ message: 'Error! No categories found!' });
      return;
    }
    res.json(catData);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err)
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
    if (!catData) {
      res.status(404).json({ message: 'Error! No categories found!' });
      return;
    }
    res.json(catData);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});





router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create({
      where: {
        category_name: req.body.category_name,
      }
    })
    res.status(200).json(catData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(catData => {
      if (!catData) {
        res.status(404).json({ message: 'Sorry, no category found with this id!' });
        return;
      }
      res.json(catData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
