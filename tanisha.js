var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100",
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200",
  
        },
        {
            title:"What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300",
        },
        {
            title:"What is the color of the sky?",
            answer:"Blue",
            bgcolor:"green",
            img:"http://placekitten.com/400/400",

        }
    ]
}
// alert(data.questions[1].img);
console.log(data, window);

// // // var answer = "B";
// var qnum = 0;

// var questions = [
//     "what comes after A?",
//     "Is 5 bigger than 4?",
//     "What is the colour of a banana?",
// ];

// var answers = [
//     "B",
//     "Yes",
//     "Yellow",
// ];

// var bgcolor = [
//     "yellow",
//     "#ABC",
//     "rgb(2,150,232)"
// ]

// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/100/200",
//     "http://placekitten.com/100/300"
// ]
function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector('#h_r').innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

}
function CheckAnswer() {
    var myInp = document.querySelector('#answer').value;
    console.log(myInp);


    if (myInp === data.questions[data.qnum].answer) {
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector('#h_r').innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>"; 
        // // changing the question
        // if (qnum === 1) {
        //     qnum++;
        //     document.querySelector('#h_q').innerHTML = "Is 5 bigger than 4?";
        //     answer = "Yes";
        // }else if(qnum === 2){
        //     qnum++;
        //     document.querySelector('#h_q').innerHTML = "What colour is a banana?";
        //     answer = "Yellow";
        // }

    } else {
        // alert("Wrong!");
        document.querySelector("#h_r").innerHTML = "<h1>Wrong!</h1>";

    }
}
Start();