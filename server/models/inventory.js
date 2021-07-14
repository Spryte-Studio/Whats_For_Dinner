const pg = require('../../database');


// Get all items
// const getInventory = (requestParams, callback) => {
// 	const qString =
// 		`SELECT inventory.name, inventory.photo, inventory.perishable
// 		FROM inventory, users_inventory, users
// 		WHERE users.id = users_inventory.user_id
// 		AND inventory.id = users_inventory.inventory_id
// 		AND users.id=$1
// 		GROUP BY inventory.perishable;`;
// 	pg.query(qString, [user_id], (err, results) => {
// 		callback(err, results.rows);
// 	});
// };

// Delete items
const deleteInventory = (requestParams, callback) => {
	const qString =
    `DELETE FROM inventory
		WHERE id=${requestParams.id}`
};

module.exports = {
	deleteInventory
};