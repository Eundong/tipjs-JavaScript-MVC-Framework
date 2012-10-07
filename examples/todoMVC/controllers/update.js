/*
 * tipJS - Javascript MVC Framework ver.1.20
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "todoMVC.update",
	
	invoke:function(input){
		tipJS.log(this.name);
		var globalTodos = this.loadModel("globalTodos", true);
		this.loadModel("bindAction").bindActions();
		var renderer = this.loadModel("renderer");
		
		var val = $.trim( $(input).removeClass('editing').val() );
		globalTodos.getTodo( input, function( i ) {
			if ( val ) {
				globalTodos.todos[ i ].title = val;
			} else {
				globalTodos.todos.splice( i, 1 );
			}
			renderer.render();
		});
	}
});
