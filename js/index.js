var app = {
    // Application Constructor
    initialize: function(){
        this.bindEvents();
        this.testzone = {};
        /*this.countDown = "";
        this.count = 0;*/
    },

    bindEvents: function(){
        document.addEventListener("deviceready", this.onDeviceReady, false);
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
    },

    onDeviceReady: function(){
        //window.addEventListener("batterycritical", app.onBatteryCritical, false);
        //document.addEventListener("menubutton", app.onMenuButton, false);
        app.testzone = document.getElementById("test-zone");
		app.testzone.innerHTML += "Ready<br>";
		app.callJSON();
    },
	
    onPause: function(){
		//app.testzone.innerHTML += "Locale: " + locale.value + "<br>";
    },
	
    onResume: function(){
		//app.testzone.innerHTML += "Locale: " + locale.value + "<br>";
    },
	
	/************/
	
	callJSON: function(){
		// retrieve data
		$.ajax({
			type: "GET",
			url: "http://ndcye.org/api/get_posts/?post_type=post&cat=3&callback=?",
			dataType: "jsonp",
			timeout:10000,
			error: function(){ alert("there was an error!"); },
			
			success: function(data){
				app.loadPostsList(data);
			}
		}); // end ajax request
	},
	
	loadPostsList: function(data){
		app.testzone.innerHTML = '<ul>';
		for ( var i=0; i < data.posts.length; i++) {

			var id = data.posts[i].id;
			var title = data.posts[i].title;
			var thumbnail = data.posts[i].thumbnail_images.mobile.url;
			var excerpt = data.posts[i].excerpt;
			var content = data.posts[i].content;

			app.testzone.innerHTML += '<li><h3>' + title + '</h3><img src="' + thumbnail + '" /></li>';
		} // end for loop
		app.testzone.innerHTML += '</ul>';
	},
	
	
	testZoneRest: function(){
		app.testzone.innerHTML = "";
	}
};
