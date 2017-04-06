# MacOS Build Instructions
This BUILD file contains the instructions for building the MacOS version of GPhotos 2. *If you are looking for the Windows build instructions, [go here](BUILD.win.md).*

_Note that the instructions listed in this file may differ from the ones listed on the official GPhotos website. Proceed with caution._

_Note that you can also **test** the Windows version of GPhotos 2 without compiling it via MacOS._

## System Prerequisites
**Note:** some of the apps required to build GPhotos may need administrator permission to install onto the system. If you are not the administrator or do not have administrative rights to your computer, consult your IT administrator before proceeding with building GPhotos.
* MacOS 10.10 Yosemite or higher (**MacOS 10.12 Sierra recommended**)
* Xcode Command Line Tools (This will install Git)
* Node.js 6.9.4 LTS or higher (**LTS version recommended**)
* Atom or Visual Studio Code (**Visual Studio Code recommended**)

### A Note About Node.js
It is also possible to use the MacOS binaries for Node.js without installing it first. However, you will be unable to _build_ copies of GPhotos 2. Follow the instructions below to set up Node.js via the binaries.

1. Download the [MacOS Node.js binaries](https://nodejs.org/en/download/) from the Node.js website.
2. Extract the tar.gz file and move it to the Library/Developer directory in your Home folder (you can use ~/Library/Developer in the Go command to get there quickly).
3. Open the Terminal and open the Preferences (⌘+,).
4. Under the _Shell_ group in the selected profile, check the box labeled 'Run command in shell' and add this command into the textbox afterwards: **export PATH=/Users/(username)/Library/Developer/NodeJS/bin/:"${PATH}"; clear**. (Replace 'username' with your username.)

## Acquiring Source
1. Open the Terminal.
2. Create a developer directory by typing **mkdir Developer** _exactly_; enter the directory by typing **cd Developer** afterwards.
3. Type in **git clone https://marquiskurt.visualstudio.com/GPhotos%202/_git/GPhotos2-private** into the terminal to begin the cloning process. Enter your username and password as needed. If you do _not_ have Git credentials set up, create a pair on the Visual Studio Team Services website.

## Setting Up Work Environment
1. Open up Terminal and navigate to the GPhotos directory. Delete the _node_modules_ directory by typing **rm -rf node_modules**.
2. Run **npm install** in the terminal. This will install all the required Node modules.

**These steps are optional if you want to test the MacOS version. Should you want to test the Windows version, consult the steps in the Windows build instructions.**
3. Rename _index.html_ to _index-win.html_ if index-win.html isn't already there.
4. Rename _index-mac.html_ to _index.html_ if index-mac.html exists or if no index.html file exists.

## Running GPhotos w/o building
In the Command Prompt, run **npm start**. The GPhotos window will open and run without being built.

## Build GPhotos
Run **npm run buildMac** into the command prompt. The final .dmg and .app files will be available in the _dist/mac_ folder.

_If you are running Node.js via the macOS binaries, you cannot build the GPhotos app._

## Distribute GPhotos
Use the built files in the _dist_ folder on your system for distribution.