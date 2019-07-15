var express = require('express');
var router = express.Router();
let obj=[
    {}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
let list=[];
router.post("/getdata",function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*")
    let lll=req.body.kaishi;
    console.log(typeof lll);
    if(lll===1){res.send(JSON.stringify(list))}
    if(lll=2){
        if(req.body.name==="" && req.body.neirong==="") return;
        let obj=req.body;
        if(!obj.name)return;
        if(list.length>500) list.shift();
        list=list.concat(obj);
        res.send(JSON.stringify(list))
    }


})
module.exports = router;
