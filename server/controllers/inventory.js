const path = require('path');
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const router = express.Router();
const models = require('../models/inventory');



router.get('/inventory', (req, res) => {
	models.getInventory(req.query.authCode, function (err, results) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.status(200).send(results);
		};
	});
});

module.exports = router;