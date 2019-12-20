let router = require('express').Router();

//set default API RESPONSE
router.get('/', function (req, res) {
    res.json({
        status : 'API its WOrking',
        message : 'Welcome'
    });
});


module.exports = router;

