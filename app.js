const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

class commentBot {
    constructor(creds) {
        this.creds = creds;
        this.r = new Snoowrap(this.creds);
        this.client = new Snoostorm(this.r);
    };
    streamComments(options = undefined, cb) {
        if (options) {
            const comments = this.client.CommentStream(options);
            return comments.on('comment', (comment) => cb(comment) );
        };
        const comments = this.client.CommentStream();
        return comments.on('comment', (comment) => cb(comment) );
    };
};

module.exports = commentBot;