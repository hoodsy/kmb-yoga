var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	// locals.workshops = [
	// 	{
	// 		title: 'Refine & Align',
	// 		studio: 'Leap Yoga',
	// 		location: 'Folsom, CA',
	// 		date: '11/20/15'
	// 	},
	// 	{
	// 		title: 'Refine & Align',
	// 		studio: 'Leap Yoga',
	// 		location: 'Folsom, CA',
	// 		date: '11/20/15'
	// 	}
	// ];

	view.on('init', function(next) {

		keystone.list('Post')
			.model
			.findOne({ title: 'Workshops' })
			.exec(function(err, result) {
				locals.workshops = result;
				next(err);
			});

	});
	
	// Render the view
	view.render('index');
	
};
