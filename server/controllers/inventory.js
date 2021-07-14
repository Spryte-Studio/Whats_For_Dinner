const path = require('path');
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const router = express.Router();
const models = require('../models');



router.get('/:auth_code', (req, res) => {
	console.log(req.params.auth_code);
	models.inventory.getInventory(req.params.auth_code, function (err, res) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.status(200).send(res.data);
		};
	});
});


module.exports = router;