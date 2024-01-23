function check(){
    var score = 0;
    var right_quest_1 = document.getElementById('q1_a1');
    var ques1_ans_2 = document.getElementById('q1_a2');
    var ques1_ans_3 = document.getElementById('q1_a3');
    var ques1_ans_4 = document.getElementById('q1_a4');
    if(right_quest_1.checked == true){
        score++
        alert('Question No. 1 is correct')
    }else{
        alert("Question No. 1 is wrong")
    }

    var  ques2_ans_1 = document.getElementById('q2_a1');
    var right_quest_2 = document.getElementById('q2_a2');
    var ques2_ans_3 = document.getElementById('q2_a3');
    var ques2_ans_4 = document.getElementById('q2_a4');
    if(right_quest_2.checked == true){
        score++
        alert('Question No. 2 is correct')
    }else{
        alert("Question No. 2 is wrong")
    }

    var  ques3_ans_1 = document.getElementById('q3_a1');
    var  right_quest_3 = document.getElementById('q3_a2');
    var ques3_ans_3 = document.getElementById('q3_a3');
    var ques3_ans_4 = document.getElementById('q3_a4');
    if(right_quest_3.checked == true){
        score++
        alert('Question No. 3 is correct')
    }else{
        alert("Question No. 3 is wrong")
    }

    alert("Your score is " + score + "/3")
    

}