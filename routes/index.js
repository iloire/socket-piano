var module_race = require("../lib/modules/piano");

exports.configure = function (app){
	app.get('/', function(req, res){
		res.render ('index.html', {title: 'Piano'});
	});

	app.get('/piano', function(req, res){
		res.render ('piano.html', {title: 'Piano'});
	});
}
