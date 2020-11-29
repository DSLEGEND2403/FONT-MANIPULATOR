function setup() 
{
video=createCapture(VIDEO);
video.size(500, 500);
canvas=createCanvas(550, 550);
canvas.position(560,150); 
poseNet= ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
}

function draw()
{
background('#969A97');
document.getElementById("span").innerHTML = "Size of font will be =" +difference+"px";
fill('#F90093');
textSize('25px');
text('Daiwik', 40, 10);    
}

function modelLoaded()
{
console.log('Posenet Is Initialized')    
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results); 
noseX = results[0].pose.wrist.x;
noseY = results[0].pose.wrist.y;
console.log("wristX = " +wrisyX+ "wristY="+ wristY);
leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor(leftWristX - rightWristX);
}
}

