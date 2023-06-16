narizPoseX = 0;
narizPoseY = 0;
function preload(){
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameconsole")
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotResults);
}
function draw() {
	game();
}
function modelLoaded(){
	console.log("pN iniciado");
}
function gotResults(results){
	if(results.length > 0){
		console.log(results);
		narizPoseX = results[0].pose.nose.x;
		narizPoseY = results[0].pose.nose.y;	
		console.log(noseX + "," + noseY);
	}
}