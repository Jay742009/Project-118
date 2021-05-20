function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(650, 450);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/3UTf_S87X/model.json', modelloaded);
}

function modelloaded() {
    console.log('Model loaded !');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        console.log('hi');
        document.getElementById("member_name").innerHTML = results[0].label;
        document.getElementById("member_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}