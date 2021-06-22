function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 289, 150, 220, 200);

    fill(77, 0, 0);
   stroke(56, 56, 46);
   rectangle(30, 20, 55,55);

   fill(0, 128, 0);
   stroke(80, 128, 88);
   Rect(30, 20, 460, 20);

   Rect(89, 420, 460, 20);
}

Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints: {
        facingMode: "enviroment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    save('student_name.png');
}


