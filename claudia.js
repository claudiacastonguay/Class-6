var data = {
    qnum:0,
    questions: [
        {
            title: "What comes after A?",
            answer: "B",
            bgcolor: "yellow",
            img: "https://placekitten.com/100/100"
        },
        {
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor: "#ABC",
            img: "https://placekitten.com/200/200"
        },
        {
            title: "What is the color of a banana?",
            answer: "Yellow",
            bgcolor: "rgb(2, 150, 232)",
            img: "https://placekitten.com/300/300"
        }
    ]
}

// alert(data.questions[0].title);
//This shows how data.questions... refers to a specific item in the data object


// var answer = "B";
var qnum = 0;

var questions = [
    "what Comes After A?",
    "Is 5 bigger than 4?",
    "What is the color of a banana?"
];

var answers = [
    "B",
    "Yes",
    "Yellow"
];

var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,232)"
]

var imgs = [
    "https://placekitten.com/100/100",
    "https://placekitten.com/200/200",
    "https://placekitten.com/300/300",
]

function Start(){
    document.querySelector("#title").innerText = data.questions[0].title;
    document.body.style.backgroundColor = data.questions[0].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[0].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#input").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#title").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='" + data.questions[data.qnum].img+"' />";
        // if(qnum === 1){
        //     qnum++;
        //     document.querySelector("#title").innerText = "Is 5 bigger than 4?";
        //     answer = "Yes";
        //  }else if(qnum === 2){
        //     qnum++;
        //     document.querySelector("#title").innerText = "What is the color of a banana?";
        //     answer = "Yellow";
        // }
    }else {
        // alert("WRONG!");
        document.querySelector("#h_r").innerHTML = "<h1>WRONG!</h1>";
    }
}

Start();