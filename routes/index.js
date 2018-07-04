const router = require('express').Router();
const app = require('../app');
const School = require('../models/school');

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/all', (req, res)=>{
    School.findAll()
        .then((schools)=>{
            if(!schools.length) return res.status(404).send({err: 'School not found'});
            res.send('load successfully: ${schools}');
        })
        .catch(err=>res.status(500).send(err));
});

router.get('/name/:name', (req, res)=>{
    School.findOneByName(req.params.name) //req.params.name: params from what?
        .then((school)=>{
            if(!school) return res.status(404).send({err: 'School not found'});
            res.send('find successfully: ${school}');
        })
        .catch(err=>res.status(500).send(err));
});

router.post('/', (req, res)=>{
    School.create(req.body)
        .then(school=>res.send(school))
        .catch(err=>res.status(500).send(err));
});

module.exports = router;

/*
router.get('/search', function(req, res){
    const search_word = req.query.school;
    const serachCondition = {$regex: search_word}; //?

    const page = req.query.page;
    if(page==null){page = 1};
    const skipSize
})
*/
