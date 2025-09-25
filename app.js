let input = document.querySelector("input");
let startbtn = document.querySelector(".startBtn");
let clickbtn = document.querySelector(".clickBtn");
let h3 = document.querySelector("h3");
let randTxt = ["Developing effective study habits is crucial for academic success. This involves creating a dedicated study space that is free from distractions, setting aside regular study time, and using active learning strategies to engage with the material. Experiment with different study techniques to find what works best for you. Some students prefer to study alone, while others find group study sessions more productive. Taking regular breaks during study sessions can help prevent burnout and improve focus. Reviewing notes and summarizing key points after each class can help solidify your understanding of the material.","The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.","Let’s walk through a 5-step process to building a paragraph. Each step of the process will include an explanation of the step and a bit of “model” text to illustrate how the step works. Our finished model paragraph will be about slave spirituals, the original songs that African Americans created during slavery. The model paragraph uses illustration (giving examples) to prove its point.","Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea. Here is the controlling idea for our “model paragraph,” expressed in a topic sentence:","Paragraph development continues with an expression of the rationale or the explanation that the writer gives for how the reader should interpret the information presented in the idea statement or topic sentence of the paragraph. The writer explains his/her thinking about the main topic, idea, or focus of the paragraph. Here’s the sentence that would follow the controlling idea about slave spirituals:",];
let p = document.querySelector("#typed");
let count = 0;
let idx;
let ch3 = document.querySelector("#count");
let speedh3 = document.querySelector("#speed");
let startTime,endTime;

startbtn.addEventListener("click",function(){
    idx = Math.floor(Math.random() * randTxt.length);
    let txt = randTxt[idx];
    h3.innerText = txt;
    count = 0;
})

//s = d/t

// document.addEventListener("keypress", function(){

// })


input.addEventListener("input", function(){
    count++;
    if(input.value.length == 1) {
        startTime = Date.now();
    }
})

clickbtn.addEventListener("click", function(){
    endTime = Date.now();
    let correctCount = correctWords(input.value,idx);

    let time = (endTime - startTime) / 1000; // seconds
    let words = correctCount / 5;    // average word length = 5 chars
    let minutes = time / 60; // time / 60
    let WPM = words / minutes;

    ch3.innerText = `Correct characters count: ${correctCount}`;
    p.innerText = input.value;
    speedh3.innerText = `Speed: ${Math.round(WPM)} WPM`; //`speed: ${speed}`;
})


function correctWords(str,idx) {
    let c = 0;
    for(let i = 0; i < str.length; i++){
        if(randTxt[idx][i] == str[i]) {
            c++;
        }
    }
    return c;
}
