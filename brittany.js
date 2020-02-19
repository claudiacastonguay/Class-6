var data = {
    qnum:0,
    questions:[
        {
            title: "What comes after A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title: "Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"teal",
            img:"http://placekitten.com/200/200" 
        },
        {
            title: "What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        },
        {
            title: "Is Pizza just fantastic?",
            answer:"Yes",
            bgcolor:"coral",
            img:"http://placekitten.com/400/400",
        }
    ]
}
// var qnum = 0;



// var questions = [
//     "What Comes After A?",
//     "Is 5 bigger than 4?",
//     "What is the colour of a banana?",
//     "Is Pizza just fantastic?",
// ];

// var answers = [
//     "B",
//     "Yes",
//     "Yellow",
//     "Yes",
// ];

// var bkcolor = [
//     "yellow",
//     "ABC",
//     "rgb(2,150,232)",
//     "coral",
// ]

// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300",
//     "http://placekitten.com/400/400",
// ]

console.log(data, window);

function Start(){
    document.querySelector("#ques").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#ques").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

    } else {
        document.querySelector("#h_r").innerText = "<h1>WRONG!!!</h1>";
    }
}

Start();
       
//         //changing the question to the next question
//         if(qnum === 1){
//             qnum++;
//             document.querySelector("#ques").innerText = "Is 5 bigger than 4?";
//             answer = "Yes";
//         } else if(qnum === 2){
//             qnum++;
//             document.querySelector("#ques").innerText = "Is pizza just fantastic?";
//         answer = "Yes";
//         }

//     } else {
//         // alert("WRONG!");
//         document.querySelector("#h_r").innerText = "<h1>WRONG!!!</h1>";
//     }
//     //if (???)
//     /*
//     Check if what they type is equivilent to a string of your answer...
//     */
// 