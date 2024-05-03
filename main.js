nosex=0;
nosey=0;
difference=0;
leftwrist=0;
rightwrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(530,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background('#808080');
    fill("#FF0000");
    stroke("FF0000");
    text(nosex,nosey,difference);
    document.getElementById("text_size").innerHTML="Width and Height of the text will be = " + difference + "px"
}

function modelLoaded(){
    console.log("PoseNet Model has been Started.")
}

function gotposes(results){
    if(results.length > 0)
    {
      console.log(results);
      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
      console.log("nosex " + nosex + "nosey" + nosey);
      leftwristx=results[0].pose.leftWrist.x;
      rightwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-rightwristx);

      console.log("leftwristx " + leftwristx + "rightwristx" + rightwristx + "difference " + difference);
    }
}

