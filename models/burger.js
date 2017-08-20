//Burger Model
//-------------------------------
'use strict'; //Declaring strict mode. 
// var sequelize = require('sequelize');
module.exports = function(sequelize, dataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: dataTypes.STRING,
			allowNull: false,
			validate: {
			  len: [1]
			}
		},
		devoured: {
			type: dataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};


