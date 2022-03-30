const express = require('express')
const router = express.Router();
const Type = require('../model/type');;

router.get(`/all-types`, async (req, res) => {
    try {
        const allTypes = await Type.find()
        res.send(allTypes)
       
    } catch (error) {
        res.send('err')
    }

})
router.post(`/get-type`, async (req, res) => {

    try {
        const type = await Type.findById(req.body.id)
        res.send(type)
       
    } catch (error) {
        res.send('err')
    }

})


router.post('/newType', async (req, res) => {

    try {
        
        const newType = new Type(req.body);
        await newType.save();
        res.send(newType);

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;