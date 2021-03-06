const sql = require("./sql.js");
const express = require("express");
const ut=require("./utils.js");

//sql.jsがいる。
// //socketioがいる。

module.exports = function (socket) {
    const router = express.Router();

    router.post('/login', function (req, res) {
        console.log("/login");
        if (req.body.username == "dammy" && req.body.password == "dammy") {
            sql.query(sql.escape(req.body.email, req.body.password), function (rows, fields) {
                if(1){
                   res.status(200).send({
                       status:"ok"
                   })
                }else{
                   res.status(400).send({
                       status:"this user was not found"
                   });
                }

            });
        }

        res.status(400).send({
           status:"specitified username and password" 
        });
    });

    router.post('/options', function (req, res) {
        sql.query(sql.escape(), function () {

        });
    });


    //autoincliment,selial(useridの連番を作るとき)
    router.post('/register', function (req, res) {
        console.log("/register");
        sql.query(sql.escape(req.username, req.password, req.tel, req.email), function (rows, field) {

        });

    });


    router.get('/keiji', function (req, res) {
        //useridを撮ってきて、ueridからのregionを撮ってきて
        console.log(`get the ${req.query.userid} ${req.query.latitude} ${req.query.longitude}`)
        if(req.query.userid && req.query.latitude && req.query.longitude){
            //緯度自分から10度以内、経度自分から10度以内を出す。
            
            sql.query("get userid is existed",function(raw,field){
                //存在しているなら
                if(1){
                    sql.query("SELECT * FROM keijiban WHERE ido ", function (raw, field) {
                        //ut.boolPosition()
                        res.status(200).send({
                            data: data
                        })
                    });
                }else{
                    res.status(400).send({
                        status:"userid was not found"
                    })
                }
            });
        }else{
            res.status(400).send({
                status:"this api require userid,latitude,longitude"
            })
        }
        console.log("/keiji");
        // res.send({
        //     fa: "fff"
        // });

        //リスト一覧。
        //   console.log(req.user);
        //  res.render('s1');
    });

    router.post('/keiji/post', function (req, res) {
        console.log("keiji/post");
        sql.connect(sql.escape(req.body.content, req.body.title, req.body.userid), function (row, field) {

        });
        //   console.log(req.user);
        //  res.render('s1');
    });

    router.get('/keiji/deteal', function (req, res) {
        console.log("/keiji/deteal");
        sql.connect(sql.escape(), function (row, field) {

        });
        //`
    });

    router.get('/kasikari', function (req, res) {
        
        console.log("/kasikari");
        sql.connect(sql.escape(req.query.userid), function (row, field) {

        });
        //   console.log(req.user);
        //  res.render('s1');
    });

    router.post('/kasikari/post', function (req, res) {
        console.log("/kasikari/post");
        sql.connect(sql.escape(req.body.content, req.body.title, req.body.userid), function (row, field) {

        });
        //   console.log(req.user);
        //  res.render('s1');
    });

    router.get('/kasikari/deteal', function (req, res) {
        console.log("/kasikari/deteal");
        sql.connect(sql.escape(req.query.detealid), function (row, field) {

        });
        //   console.log(req.user);
        //  res.render('s1');
    });

    //socketioを使う。
    //誰が発信したのかのuseridとかあとは
    router.get('/chat', function (req, res) {
        console.log("/chat");
        socket.sockets.emit("server2client",{
            data:"ffff"
        });
        
    });
    
    router.get('/DBtest', function (req, res) {
        console.log("/testconnect");
        // if(req.query.a){
        //  console.log("a isnot specitified")
        //  sql.query(`SELECT ${a} FROM user`);
        // }else{
         console.log("a isnot specitified")
         sql.query("SELECT * FROM user",function(raw,collamn){
             console.log(collamn);
         });
        //}

    });
    
    router.get('/socketiotest', function (req, res) {
        console.log("/testconnect");
        res.sendfile("./test/index.html");
    });
    
    return router;
};