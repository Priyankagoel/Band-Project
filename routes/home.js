const express = require("express");


const router = express.Router();

const homeController = require("../controllers/home");



router.get('/home', homeController.getHome);
router.get('/create/band', homeController.createBand);
router.post('/create/band', homeController.bandAdded);




module.exports = router;