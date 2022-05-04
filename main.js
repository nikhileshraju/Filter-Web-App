function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.center();
video = createCapture(VIDEO);
video.size(640,480);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotposes);
}

function gotposes(results){
console.log(results);
console.log("nose x = "+results[0].pose.nose.x);
console.log("nose y = "+results[0].pose.nose.y);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function draw(){
image(0,0,640,480);
}

function save_filtered_image(){
save("Mustache_filter_image");
}