$(document).ready(function(){
  $(".submit-survey").click(function(){
    $(this).hide(500);
    var a = $("input[name='survey']:checked").val();
    data = {
      ans: a
    }
    $.ajax({
      url: '/other/survey',
      method: 'POST',
      data: data,
      success: function(res){
        if(res != "0"){
          //$("#survey").html("<p>Your vote has been submitted.</p>");
          var survey = JSON.parse(res);
          var s_total = (survey.ans_one_no*1) + (survey.ans_two_no*1) + (survey.ans_three_no*1) + (survey.ans_four_no*1) + (survey.ans_five_no*1) + (survey.ans_six_no*1);
          var s_html = '<h5 style="font-size:22px" class="muli-regular"> '+survey.question+' </h5>';
          if(survey.ans_one){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_one_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_one+' - '+(((survey.ans_one_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }
          if(survey.ans_two){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_two_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_two+' - '+(((survey.ans_two_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }
          if(survey.ans_three){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_three_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_three+' - '+(((survey.ans_three_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }
          if(survey.ans_four){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_four_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_four+' - '+(((survey.ans_four_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }
          if(survey.ans_five){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_five_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_five+' - '+(((survey.ans_five_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }
          if(survey.ans_six){
          s_html += '<div style="position:relative" class="w3-row"><div class="w3-col w3-blue" style="height:40px;overflow-x: hidden;margin-bottom:5px;width:'+((survey.ans_six_no*1)/s_total)*100+'%"><div style="position:absolute;top:0;right:0;left:3%;bottom:0;line-height:40px;">'+survey.ans_six+' - '+(((survey.ans_six_no*1)/s_total)*100).toFixed(0)+'%</div></div></div>';
          }

          $("#survey").html(s_html);

        }else if(res == "0"){
          document.location = "/login";
          /*$("#survey").html("<h5 style='font-size:22px' class='muli-regular'>Please <a href='/login'>login</a> to make a vote.</h5>");*/
        }else{
          $("#survey").html("<p>There was an error submiting your vote. Please re-vote.</p>");
        }
      }
    });
  });
});
