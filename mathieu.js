// var answer = "B";
// var qnum = 1;

// function CheckAnswer() {
//     var myInput = document.querySelector("#answer").value;

//     if(myInput === answer){
//         document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

//         if(qnum === 1){
//             qnum++;
//             document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
//             answer = "Yes";
//         } else if(qnum === 2){
//             qnum++;
//             document.querySelector("#h_q").innerText = "What is the color of a banana?";
//             answer = "Yellow";
//         }
        
//     } else {
//         document.querySelector("#h_r").innerHTML = "<h1>WRONG!</h1>";
// }
// }
var data = {
    qnum:0,
    questions: [
        {
            title:"What comes after A?",
            answer:"B",
            bgcolor:"yellow",
            img:"https://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"https://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img:"https://placekitten.com/300/300"
        }
    ]
}

// var qnum = 0;
// var questions = [
//     "What comes after A?",
//     "Is 5 bigger than 4?",
//     "What color is a banana?"
// ];

// var answers = [
//     "B",
//     "Yes",
//     "Yellow"
// ];

function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer() {
    var myInput = document.querySelector("#answer").value;

    if(myInput === data.questions[data.qnum].answer){
    document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

    data.qnum++;
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

    } else {
        document.querySelector("#h_r").innerHTML = "<h1>WRONG!</h1>";
    }
}

Start();