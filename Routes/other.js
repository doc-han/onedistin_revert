var express = require('express');
var con = require('../config/db.js');
var currentDate = require('../config/tools.js');
var router = express.Router();

router.post('/like', (req,res) =>{
  var postId = req.body.postId;
  var user = req.user.user_id;
  var query = "SELECT * FROM onedistin_likes WHERE user=? AND postId=?";
  con.query(query, [user,postId], function(err,result){
    if(result.length > 0){
      con.query("DELETE FROM onedistin_likes WHERE user=? AND postId=?;UPDATE onedistin_posts SET post_likes=(post_likes)-1 WHERE ID=?",[user,postId,postId], function(err,result){
        if(err)throw err;
        res.send("0");
      });
    }else{
      con.query("INSERT INTO onedistin_likes (user,postId)VALUES(?,?);UPDATE onedistin_posts SET post_likes=(post_likes)+1 WHERE ID=?",[user,postId,postId], function(err,result){
        if(err)throw err;
        res.send("1");
      });
    }
  });
});

router.post('/survey', (req,res) =>{
  var ans = req.body.ans;
  if(ans == "one"){
    var query = "UPDATE onedistin_survey SET ans_one_no=(ans_one_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }else if(ans == "two"){
    var query = "UPDATE onedistin_survey SET ans_two_no=(ans_two_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }else if(ans == "three"){
    var query = "UPDATE onedistin_survey SET ans_three_no=(ans_three_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }else if(ans == "four"){
    var query = "UPDATE onedistin_survey SET ans_four_no=(ans_four_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }else if(ans == "five"){
    var query = "UPDATE onedistin_survey SET ans_five_no=(ans_five_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }else if(ans == "six"){
    var query = "UPDATE onedistin_survey SET ans_six_no=(ans_six_no + 1) WHERE dealTime='"+currentDate.currentDate()+"';";
  }

  con.query(query+"SELECT * FROM onedistin_survey WHERE dealTime='"+currentDate.currentDate()+"'", function(err,result,next){
    if(err)throw err;
    if(result[1].length > 0){
      res.send(result[1][0]);
    }else {
      res.send("0");
    }

  });

});

module.exports = router;
