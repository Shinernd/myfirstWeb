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
    const searchword = req.query.school;
    console.log(searchword);
    School.findByName(searchword).then((school)=>{
        console.log(school);
        if(!school){
            res.render('searcherr', {name: searchword, campus: "Seoul"});
        }else{
            res.send('find successfully: ' + school); //list -> select?
    }}).catch(err=>res.status(500).send(err));
});

router.post('/create', (req, res)=>{
    console.log(req.body);
    School.create(req.body)
        .then(newschool=>res.send(newschool))
        .catch(err=>res.status(500).send(err));
});

module.exports = router;