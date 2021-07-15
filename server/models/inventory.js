const { result } = require('underscore');
const pg = require('../../database');


// Get all items
const getInventory = (authCode, callback) => {
	console.log('top of getInventory model', authCode)
	const idQString =
		`SELECT id FROM users WHERE auth_code = '${authCode}';`;

	pg.query(idQString)
		.then((results) => {
			const userID = results.rows[0].id;
			console.log('inside query==========', userID)
			const qString =
				`SELECT inventory.name, inventory.photo, inventory.perishable
				FROM inventory, users_inventory, users
				WHERE users.id = users_inventory.user_id
				AND inventory.id = users_inventory.inventory_id
				AND users.id=${userID};`;
			pg.query(qString)
				.then((inventory) => {
					callback(null, inventory.rows);
					console.log(inventory.rows)
				})
				.catch((err) => {callback(err, null)});
		})
};

// Delete items
// const deleteInventory = (requestParams, callback) => {
// 	const qString =
//     `DELETE FROM inventory
// 		WHERE id=${requestParams.id}`;
// 	pg.query(qString, (err, results) => {
// 		callback(err, results.rows);
// 	})
// };

module.exports = {
	getInventory,
	// deleteInventory
};