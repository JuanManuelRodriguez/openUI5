sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/demo/wt/controller/HelloDialog",
   "sap/ui/Device"
], function (UIComponent, JSONModel, ResourceModel,HelloDialog, Device) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.wt.Component", {
      metadata : {
        manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World sarasa"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set device model
         var oDeviceModel= new JSONModel(Device);
         oDeviceModel.setDefaultBindingMode("OneWay");
         this.setModel(oDeviceModel,"device");

         //set dialog
         this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
         //create the views vased on the url/hash
         this.getRouter().initialize();
      },

  		getContentDensityClass : function() {
  			if (!this._sContentDensityClass) {
  				if (!sap.ui.Device.support.touch) {
  					this._sContentDensityClass = "sapUiSizeCompact";
  				} else {
  					this._sContentDensityClass = "sapUiSizeCozy";
  				}
  			}
  			return this._sContentDensityClass;
  		},

      openHelloDialog : function(){
        this._helloDialog.open();
      }
   });
});
