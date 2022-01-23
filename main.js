song="";
song1=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
song=loadSound("fnaf 1.mp3");
song=loadSound("fnaf 2.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.Y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY)

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.Y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video,0,0,600,500)
  fill("#acace6");
        stroke("#acace6");
        if(scoreLeftWrist>0.2)
        {
            circle(leftWristX,leftWristY,20);
            InNumberleftWristY=Number(leftWristY);
            remove_decimals=floor(InNumberleftWristY);
            volume=remove_decimals/500;
            document.getElementById("song").innerHTML="song"+song;
            song.setSong(song);
        }
}
function play()
{
    song.play();
    song.setVolume(2);
    song.rate(1);


}