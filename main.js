function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FxOey3FxH/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}