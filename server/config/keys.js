// module.exports = {
// 	googleClientID: '518908208359-22v3u8a0p6u8ctu70piq3ci1l4cfr52l.apps.googleusercontent.com',
// 	googleClientSecret: 'm1Qr7m1KqF7gYcaSg5i8IZK6',
// 	mongoURI: 'mongodb+srv://bear04012:PI4KbcB9Es8DGN2k@emaily-6972h.mongodb.net/test?retryWrites=true&w=majority',
// 	cookieKey: 'djafkljvaoasdfjlebwljnvlsdhovds',
// };

if (process.env.NODE_ENV === 'production') {
	//production mode
	module.exports = require('./prod');
} else {
	//development mode
	module.exports = require('./dev');
}
