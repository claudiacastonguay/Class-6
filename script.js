var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A?",
            answer:"B",
            bgcolour:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"is 5 bigger than 4?",
            answer:"yes",
            bgcolor:"#abc",
            img: "http://placekitten.com/100/100"
        },
    {
        title:"what is the colour of a banana?",
        answer:"yellow",
        bgcolor:"#green",
        img: "http://placekitten.com/100/100"
    }
    ]
}

function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
        //alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

            data.qnum++;
            document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
            document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
            document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
        }else {
            document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
        }
            //alert("Wrong!");
    
}