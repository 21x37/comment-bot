# comment-bot

![npm](https://img.shields.io/npm/v/comment-bot.svg?style=popout)
![license](https://img.shields.io/github/license/21x37/comment-bot.svg?style=popout)

npm module to easily setup a reddit comment bot!

## Install
```
npm install comment-bot
```

## Usage

Create an app on reddit, and use the unique keys in creds.

```js
const commentBot = require('comment-bot');

const creds = {
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
};
```

```js
const bot = new commentBot(creds);
```
streamComment method is setup as so.
```js
// streamComment(options, callback);

bot.streamComment(undefined, (comment) => {
  console.log(comment);
});
```

# Commenting
```js
const options = {
    subreddit: 'all',
    results: 25
};

const bot = new commentBot(creds);

bot.streamComments(options, (comments) => {
  if (comment.body.includes('meow') {
    comment.reply('🐈');
  };
});



```
