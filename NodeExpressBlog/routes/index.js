
/*
 * GET home page.
 */

exports.index = function (req, res) {
	//res.send("HI");
    res.render('pages/index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('pages/about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('pages/contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.cvdetails = function(req, res) {
    res.render('pages/cvdetails', { title: 'CV', year: new Date().getFullYear() });
};
exports.drawing = function (req, res) {
	res.render('pages/drawing', { title: 'Drawing', year: new Date().getFullYear() });
};

exports.performance = function (req, res) {
	res.render('pages/performance', { title: 'Performance', year: new Date().getFullYear() });
};

exports.sound = function (req, res) {
	res.render('pages/sound', { title: 'Sound', year: new Date().getFullYear() });
};

exports.video = function (req, res) {
	res.render('pages/video', { title: 'Video', year: new Date().getFullYear() });
};

exports.writing = function video(req, res) {
	res.render('pages/writing', { title: 'Writing', year: new Date().getFullYear() });
};


exports.collaboration = function video(req, res) {
	res.render('pages/collaboration', { title: 'Collaboration And Curation', year: new Date().getFullYear() });
};