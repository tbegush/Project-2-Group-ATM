const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const captionRoutes = require('./caption-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/captions', captionRoutes);

module.exports = router;
