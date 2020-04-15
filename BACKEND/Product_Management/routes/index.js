var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Product',
  password: '30071997a',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {

});

//api get data from postgresql
router.get('/getdata', function(req, res, next) {
   
   
  pool.query('select * from productinfo ', (error, response) => {
    if (error){console.log(error);}
    else {
      res.send(response.rows);
    }
    
  })
  
});

router.get('/add', function(req, res, next) {
  res.render('add',{});
});

router.post('/add', function(req, res, next) {
  var product_name = req.body.product_name,
  product_price = req.body.product_price,
  img = req.body.img
  ;
  
  pool.query("INSERT INTO productinfo VALUES (DEFAULT,$1,$2,$3)",[product_name,product_price,img],(err,response)=>{
      if (err) {console.log(err);}
      else {
        res.send('received information' + product_name+ product_price+ img);
      }
  });
  
  
});

module.exports = router;
