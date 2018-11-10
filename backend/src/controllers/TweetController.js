const Tweeet = require('../models/Tweet');

module.exports = {
    async index(req, res) {
        const tweets = await Tweeet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await Tweeet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);

    }
};