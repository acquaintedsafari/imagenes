# Windows Build Instructions
This BUILD file contains the instructions for building the Windows version of GPhotos 2. *If you are looking for the MacOS build instructions, [go here](BUILD.mac.md).*

_Note that the instructions listed in this file may differ from the ones listed on the official GPhotos website. Proceed with caution._

## System Prerequisites
**Note:** some of the apps required to build GPhotos may need administrator permission to install onto the system. If you are not the administrator or do not have administrative rights to your computer, consult your IT administrator before proceeding with building GPhotos.
* Windows 7 or higher (**Windows 10 recommended**)
* Visual Studio 2013 or higher (**Visual Studio 2017 recommended**)
	* [Ensure that you select "Git for Windows" in your custom install options when installing Visual Studio.](http://sanderstechnology.com/wp-content/uploads/2015/11/clip_image0022.jpg)
* Note.js 6.9.4 LTS or higher (**LTS versions recommended**)

## Acquiring Source
### Visual Studio Method (recommended)
1. Go to [https://marquiskurt.visualstudio.com/GPhotos%202/_git/GPhotos2-private](https://marquiskurt.visualstudio.com/GPhotos%202/_git/GPhotos2-private).
2. Click the "Clone" button in the upper-right hand corner and then click "Clone in Visual Studio".
3. Visual Studio will open up. Change the directory as needed before beginning the cloning process.
4. Click "Clone" to begin the cloning process.

### Git Terminal Method
1. Open the Command Prompt.
2. Create a developer directory by typing **mkdir Developer** _exactly_; enter the directory by typing **cd Developer** afterwards.
3. Type in **git clone https://marquiskurt.visualstudio.com/GPhotos%202/_git/GPhotos2-private** into the terminal to begin the cloning process. Enter your username and password as needed. If you do _not_ have Git credentials set up, create a pair on the Visual Studio Team Services website.

## Setting Up Work Environment
_Git will automatically work with Visual Studio if you have cloned the repository via Visual Studio; you don't need to set up anything there. Otherwise, you can use Visual Studio Code to sync your code._

1. Open the Command Prompt and navigate to the GPhotos directory. Delete the _node_modules_ directory.
2. Run **npm install** in the command prompt. This will install all the required Node modules.
3. Close the command prompt and open the GPhotos folder in File Explorer.
4. Rename _index.html_ to _index-mac.html_ if index-mac.html isn't already there or if index-win.html is present.
5. Rename _index-win.html_ to _index.html_ if index-win.html exists or if no index.html file exists.

## Running GPhotos w/o building
In the Command Prompt, run **npm start**. The GPhotos window will open and run without being built.

## Build GPhotos
Run **npm run buildWin** into the command prompt. The final .exe files will be available in the _dist\win_ folder.

### A Note About APPX
GPhotos 2 is available for Windows via the **Windows Store**. When Node compiles and builds the Windows version, it will produce an EXE version of the app. _If you want to make an APPX version, you need to use the Desktop Bridge and register for a Windows Developer account._

## Distribute GPhotos
Use the built files in the _dist_ folder on your system for distribution.