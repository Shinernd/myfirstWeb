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

router.get('/search', (req, res)=>{
    console.log(req.query.school)
    School.findOneByName(req.query.school)
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