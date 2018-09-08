$(document).ready(function(){
  $(".post_like").click(function(){
    var pos = $(this);
    var post_id = pos.attr("ref-data");
    var data = {
      postId: post_id
    }
    $.ajax({
      url: '/other/like',
      method: 'POST',
      data: data,
      success: function(res){
        if(res == "0"){
          var fn = pos.find(".fa");
          fn.removeClass("fa-heart").addClass("fa-heart-o");
          var val = fn.text().trim();
          val = (val*1)-1;
          fn.text(" "+val);
        }else{
          var fn = pos.find(".fa");
          fn.removeClass("fa-heart-o").addClass("fa-heart");
          var val = fn.text().trim();
          val = (val*1)+1;
          fn.text(" "+val);
        }
      }
    });
  });
});
