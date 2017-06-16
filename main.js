

$(".btn").click(function(event) {
	
	landing=$(".landing").val();
	source=$(".source").val();
	utm_medium=$(".utm_medium").val();
	utm_content=$(".utm_content").val();
	utm_campaign=$(".utm_campaign").val();
	utm_term=$(".utm_term").val();
	matchtype=$(".matchtype").val();

	userdata=landing+"?"+"source="+source+"utm_medium="+utm_medium+"utm_content="+utm_content+"utm_campaign="+utm_campaign+"utm_term="+utm_term+"matchtype="+matchtype;

	userdata=encodeURI(userdata);


	$(".container").html("listo");

	Cookies.set("test", userdata, {
		   expires : 10,           //expires in 10 days

		   path    : '/',          //The value of the path attribute of the cookie 
		                           //(default: path of page that created the cookie).

		   domain  : 'gesitonix.com',  //The value of the domain attribute of the cookie
		                           //(default: domain of page that created the cookie).

		   secure  : true          //If set to true the secure attribute of the cookie
		                           //will be set and the cookie transmission will
		                           //require a secure protocol (defaults to false).
		});

});