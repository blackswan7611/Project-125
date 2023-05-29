leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

     canvas = createCanvas(550,500);
     canvas.position(560, 150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialised');
}

function draw()
{
    document.getElementById("font_size").innerHTML = "The font size of this text is " + difference + "px";
    background('#869A95')
    textSize(difference);
    fill("F90095");
    text('Drishti', 50, 400);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
    }
}