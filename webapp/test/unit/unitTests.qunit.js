/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testprojectui5b27/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
