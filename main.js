function preload()

{moustache=loadImage('https://i.postimg.cc/VkNmXFy0/mustache-png-from-pngfre-21.png')}

noseX=0
noseY=0

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0 , 0, 300 ,300);
    image(moustache, noseX, noseY, 60, 40 )
}
function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-35
        noseY = results[0].pose.nose.y+3
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}



