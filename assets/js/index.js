const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const takePhotoButton = document.querySelector('#startbutton');
const switchCameraButton = document.querySelector('#switchbutton');
const cameraInfoDiv = document.querySelector('#camera_information');
const displayCameraInformationButton = document.querySelector('#displaybutton');

// Get the available cameras
async function getCameras() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter(device => device.kind === 'videoinput');
}

// Start the camera stream
async function startCamera(cameraId) {
  const constraints = { video: { deviceId: cameraId } };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;
  await video.play();
}

takePhotoButton.addEventListener('click', takePhoto);

// Take a photo
function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL('image/png');
  // Do something with the dataUrl, like display it in an <img> element
}

switchCameraButton.addEventListener('click', switchCamera);

// Switch between cameras
async function switchCamera() {
  const cameras = await getCameras();
  const currentCameraId = video.srcObject.getVideoTracks()[0].getSettings().deviceId;
  const currentCameraIndex = cameras.findIndex(camera => camera.deviceId === currentCameraId);
  const nextCameraIndex = (currentCameraIndex + 1) % cameras.length;
  cameraInfoDiv.innerHTML = `Current camera device ID: ${cameras[nextCameraIndex].deviceId} of ${cameras.length} <br> previous Camera ID: ${currentCameraId}`;
  await startCamera(cameras[nextCameraIndex].deviceId);
}

let cameras = [];

 function displayCameraInformation()  {
  const cameraLength = cameras.length;
  let cameraInfo = '';
  for (let i = 0; i < cameraLength; i++) {
    cameraInfo += `Camera ${i} <br> Device ID: ${cameras[i].deviceId} <br> Group ID: ${cameras[i].groupId} <br> Label: ${cameras[i].label} <br> Kind: ${cameras[i].kind} <br> <br>`;
  }
  cameraInfoDiv.innerHTML = cameraInfo;
}

// Start the app
async function startApp() {
   cameras = await getCameras();
  if (cameras.length === 0) {
    console.error('No cameras found');
    return;
  } else if (cameras.length === 1) {
        console.log('Only one camera found');
        switchCameraButton.style.display = 'none';
    } else {
        console.log('Multiple cameras found');
        switchCameraButton.style.display = 'block';
    }
  console.log('Found cameras', cameras);
  displayCameraInformation()
  await startCamera(cameras[0].deviceId);
  // Add event listeners to buttons or other UI elements to call takePhoto() and switchCamera()
}

displayCameraInformationButton.addEventListener('click', displayCameraInformation());


startApp();