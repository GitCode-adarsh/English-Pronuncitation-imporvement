var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        speak();
    }
function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
 function listen(){
     var synth = window.speechSynthesis;
     var words = ["hello","goodbye","nice","welcome","thank you","seeyoulater","great","ok","todayismybirthday","youareprofessional","exprosso","prerogative","larvae","niche","liable","bruschetta"];
     var speak_data = words[Math.floor(Math.random()* words.length)];
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     console.log(speak_data);
     synth.speak(utterThis);         
}
