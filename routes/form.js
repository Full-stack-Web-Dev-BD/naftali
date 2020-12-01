const formRouter = require('express').Router();

const Form = require('../models/Form');


const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})


formRouter.post('/uploadFile', upload.single("file"), (req, res) => {
    return res.json(req.file)
})



formRouter.post('/submitForm', (req, res) => {
    console.log(req.body);
    new Form(req.body)
        .save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})
formRouter.get('/findUserForm/:id',(req,res)=>{
    Form.findOne({UID:req.params.id})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
})
formRouter.get('/findForm',(req,res)=>{
    Form.find()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
})
formRouter.get('/getSingleForm/:id',(req,res)=>{
    Form.findOne({_id:req.params.id})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
})
module.exports = formRouter