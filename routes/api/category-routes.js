const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Category findAll()
router.get('/', (req, res) => {
  // find all categories
Category.findAll({
    // be sure to include its associated Products
  include: {
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
  }
})
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({message: 'Error! No categories found!'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});


// Category findOne()
router.get('/:id', (req, res) => {
  // find one category by its `id` value
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
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({message: 'Error! No category found with this id!'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});


// Category POST 
router.post('/', (req, res) => {
  // create a new category
Category.create({
  category_name: req.body.category_name
})
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Category PUT 
router.put('/:id', (req, res) => {
  // update a category by its `id` value
Category.update(req.body, {
  where: {
    id: req.params.id
  }
})
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({message:'Sorry, no category found with this id!'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Category DELETE
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
Category.destroy({
  where: {
    id: req.params.id
  }
})
  .then(categoryData => {
    if (!categoryData){
      res.status(404).json({message: 'Sorry, no category found with that id!'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Export router module
module.exports = router;
