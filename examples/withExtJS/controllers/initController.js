tipJS.controller({
	name : "withExtJS.initController",
	beforeInvoke:function(params){
		tipJS.debug(this.name + ".beforeInvoke Start");
		
		// loadModel
		var initModel = this.loadModel("initModel");
		// invoke method
		initModel.defineExtJS();
		
		tipJS.debug(this.name + ".beforeInvoke Done");
	},
	invoke:function(params){
		tipJS.debug(this.name + ".invoke Start");

		// loadModel
		var initModel = this.loadModel("initModel");
		// loadView
		var initView = this.loadView("initView");

		// create the data store
		var store = initModel.createStore();

		// create the Grid
		var grid = initView.drawInitGrid(store);

		// return Value
		this.returnResult = grid;

		tipJS.debug(this.name + ".invoke Done");
	},
	afterInvoke:function(params){
		tipJS.debug(this.name + ".afterInvoke Start");
		//throw "Exception Message";
		tipJS.debug(this.name + ".afterInvoke Done");
	},
	exceptionInvoke:function(exception, params){
		tipJS.debug(this.name + ".exceptionInvoke Start");
		throw exception;
		tipJS.debug(this.name + ".exceptionInvoke Done");
	}
});
