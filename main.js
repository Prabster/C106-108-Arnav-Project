function classifySounds() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jzPhFhjkQ/model.json", modelLoaded);
};

function modelLoaded() {
    classifier.classify(gotResult);
};

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        document.getElementById("result").style.color = "rgb(" + r +", " + g + ", " + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r +", " + g + ", " + b + ")";

        document.getElementById("result").innerHTML = "I Can Hear: " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";

        if (results[0].label == "Cat") {
            myIMG.src = "Cat.jpeg";
        }
        if (results[0].label == "Dog") {
            myIMG.src = "Dog.jpeg";
        }
        if (results[0].label == "Lion") {
            myIMG.src = "Lion.jpeg";
        }
        if (results[0].label == "Elephant") {
            myIMG.src = "Elephant.jpeg";
    }}
};