canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

//on page Load.
function init() {
    //navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    var video;
    var webcamStream;

    if (navigator.getUserMedia) {
        navigator.getUserMedia(
            // constraints
            {
                video: true,
                audio: false
            },
            // successCallback.
            function (localMediaStream) {
                video = document.querySelector('video');    //query from video.
                video.src = window.URL.createObjectURL(localMediaStream);   //create object url.
                webcamStream = localMediaStream;    //set webcam from camera to local media.
            },
            // errorCallback.
            function (err) {
                console.log("The following error occured: " + err);
            }
        );
    } else {    //no camera.
        console.log("getUserMedia not supported");
    }
}

//capture image.
function snapshot() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);    //draw to canvas.
}

//save image.
function save() {
    var btnSave = document.getElementById("save");
    var timestramp = Date.now();
    
    btnSave.href = canvas.toDataURL();  //get canvas data url.
    btnSave.download = timestramp + ".png";     //image name = timestramp.
    //window.location.href = "copy.php?image=" + timestramp + ".png";   //ahef with param.
    window.open('moveImg.php?image=' + timestramp + '.png', '_blank');     //open blank page.

}