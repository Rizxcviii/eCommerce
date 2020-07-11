var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('All products');
});

router.get('/:id', function(req, res) {
    res.json({id:"643-076q-04", category:"Microwave", model:"36835", brand:"Sony", name:"Microwave-Name", instock:"34"});
});

module.exports = router;