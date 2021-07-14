const pg = require('../../database');


// Get all items
const getInventory= (requestParams, callback) => {
	console.log(requestParams);
	const auth_code = requestParams.auth_code;
	const qString =
		`SELECT inventory.name, inventory.photo, inventory.perishable
		FROM inventory, users_inventory, users
		WHERE users.id = users_inventory.user_id
		AND inventory.id = users_inventory.inventory_id
		AND users.id=10;`;
	pg.query(qString, (err, results) => {
		callback(err, results.rows);
	});
};

// Delete items
const deleteInventory = (requestParams, callback) => {
	const qString =
    `DELETE FROM inventory
		WHERE id=${requestParams.id}`
};

module.exports = {
	getInventory,
	deleteInventory
};