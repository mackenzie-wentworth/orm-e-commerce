const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Tag findAll()
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
      // be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'Error! No tags found!' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});


// Tag findOne()
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'Error! No tag found with this id!' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Tag POST
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tag => res.json(tag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Tag PUT
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(tag => {
      if (!tag){
        res.status(404).json({message:'Sorry, no tag found with this id!'});
        return;
      }
      res.json(tag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Tag DELETE
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({message: 'Sorry, no tag found with that id!'});
      return;
    }
    res.json(tag);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});


// Export router module
module.exports = router;
