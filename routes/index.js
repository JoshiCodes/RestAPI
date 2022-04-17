var responseTime = require('response-time')

const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
    res.json({
        code: 200,
        author: {
            name: 'JoshiZockt_',
            links: {
                website: 'joshi.codes',
                github: 'https://github.com/JoshiCodes/'
            },
            contact: {
                discord: '@JoshiZockt_#7727',
                mail: 'joshua@joshi.codes'
            }
        },
        repo: 'https://github.com/JoshiCodes//RestAPI'
    })
})

router.get('/endpoints', (req, res) => {
  res.type('json').send(
      JSON.stringify(
          {
            basic: [
                "/info"
            ],
            images: [
              "/images/neko",
              "/images/cat",
              "/images/dog",
              "/images/wallpaper",
              "/images/wallpaper/anime",
              "/images/actions/slap",
              "/images/actions/hug",
              "/images/actions/kiss",
              "/images/actions/kill",
            ],
            nsfw: [
              "/nsfw/real",
              "/nsfw/real/bondage",
              "/nsfw/real/thighs",
              "/nsfw/hentai",
              "/nsfw/hentai/bondage",
              "/nsfw/hentai/thighs",
            ]
          },
      null,
      4)
  )
});

module.exports = router;
