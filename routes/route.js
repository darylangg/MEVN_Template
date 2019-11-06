const express = require('express')
const router = express.Router()
const goko = require('../exchange/goko-api')

router.get('/ohlcv',async (req,res)=>{
  //intervals: 1,5, 60
  const rv = await goko.fetchOHLCV('GLOS/USDT',req.query.interval)
    .then(rv=>{
      res.send(rv)
    })
})

module.exports = router;