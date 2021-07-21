const { result } = require('underscore');
const pg = require('../../database');


// Get all items
const getInventory = (authCode, callback) => {
	const idQString =
		`SELECT id FROM users WHERE auth_code = '${authCode}';`;

	pg.query(idQString)
		.then((results) => {
			const userID = results.rows[0].id;
			const qString =
				`SELECT inventory.name, inventory.photo, inventory.perishable
				FROM inventory, users_inventory, users
				WHERE users.id = users_inventory.user_id
				AND inventory.id = users_inventory.inventory_id
				AND users.id=${userID}
				ORDER BY name;`;
			pg.query(qString)
				.then((inventory) => {
					callback(null, inventory.rows);
				})
				.catch((err) => {callback(err, null)});
		})
};


module.exports = {
	getInventory
};