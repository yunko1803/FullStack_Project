const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// import express from 'express';
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();

// app.use((req, res, next) => {
// 	console.log('first');
// 	next();
// });

// app.use((req, res, next) => {
// 	console.log('second');
// 	next();
// });

// app.use('/api/v1/', require('./router'));

// const router = new express.Router();
// router.get('/', (req, res) => res.json({ welcome: 'to api' }));
// router.get('/', router);
// router.get('/photos', router);
// router.get('/posts', router);
// router.get('/albums', router);
// router.get('/', router);
// router.get('/', router);
// module.exports = router;

// app.get('/:id', (req, res) => {
// 	console.log(req.header);
// 	res.json({ params: req.params, query: req.query, header: req.headers });
// });

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
