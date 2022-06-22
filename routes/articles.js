var express = require('express');
var router = express.Router();

const { ArticlesController } = require('../controller/articles'); // import controller



// Create article
router.post('/create', async function (req, res) {
    const body = req.body;

    const result = await ArticlesController.create(body); // apply controller method

    res.json({
        message: 'Success',
        result
    });
});


// Get Article
router.get('/', async function (req, res) {

    const result = await ArticlesController.list(); // apply controller method


    res.json(result);
});


// Update article
router.put('/:id', async function (req, res) {
    const params = req.params; // catch id (request paramter) 
    const body = req.body; // catch payload / JSON body (request body)

    const result = await ArticlesController.update(body, params.id); // apply controller method

    res.json({
        message: 'Success',
        result
    });
});

// Delete article
router.delete('/remove/:id', async function (req, res) {
    const params = req.params;

    const result = await ArticlesController.remove(params.id); // apply controller method

    res.json({
        message: 'Success',
        result
    });
});

module.exports = router;