sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.PROJECT_ID",
		settings: {
			id: "PROJECT_ID"
		},
		async: true
	}).placeAt("content");
});