# JavaScript Camera Application

This is a simple JavaScript-based web application that allows you to capture photos from your device's camera and switch between multiple cameras, if available.

## Features

1. Access device camera(s)
2. Take a photo and display it on the page
3. Switch between multiple device cameras

## Prerequisites

A modern web browser that supports JavaScript and the MediaDevices API. This includes the latest versions of Chrome, Firefox, Safari, and Edge.

## Installation and Setup

This is a front-end application and does not require any special installation. You can clone this repository to your local system or download the files. 

To clone the repository, use the following command:

```bash
git clone https://github.com/yourusername/javascript-camera-app.git
```

Once the files are on your system, you can open the HTML file in a web browser to start the application.

## Usage

When you open the application in your browser, it will request permission to use your device's camera(s). Once you grant permission, you'll see a video stream from your device's camera and a "Take Photo" button.

To take a photo:

1. Click the "Take Photo" button. 
2. The current frame from the video stream will be captured and displayed on the page.

To switch cameras:

1. Refresh the page.
2. If you have more than one camera, the application will cycle to the next camera each time the page is loaded.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License
