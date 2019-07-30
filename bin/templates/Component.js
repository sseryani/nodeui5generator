sap.ui.define([
      "sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "sap/ui/Device"
   ],
   function (UIComponent, JSONModel, Device) {
      "use strict";
      return UIComponent.extend("sap.ui.demo.PROJECT_ID.Component", {

         metadata: {
            manifest: "json",
            config: {
               fullWidth: true
            }
         },

         // Constructor
         init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            this.getRouter().initialize();
         },

      });
   });