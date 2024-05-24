sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForCrearArchivo: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"FechaCreacion": null,
				"___FK_0972231ebe507bd01b0530ee_00012": "",
				"AutorContenido": "",
				"___FK_e776c27e4902bbcd1b1176ce_00003": ""
			};
		},
		getDefaultValuesForCrearHito: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"Descripcion": "",
				"Fecha": null,
				"Estado": "",
				"___FK_0972231ebe507bd01b0530ee_00008": "",
				"___FK_a0c76601d336df211b055009_00003": "",
				"___FK_a0c76601d336df211b055009_00005": "",
				"hora": null,
				"url": "",
				"___FK_5bc2787daffe75531b059e93_00008": ""
			};
		},
		getDefaultValuesForCrearCampana: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"Estado": true,
				"___FK_9c3b7b65c32a9a291b052de0_00005": "",
				"___FK_0972231ebe507bd01b0530ee_00025": ""
			};
		}
	};
});
