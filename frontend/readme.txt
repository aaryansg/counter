------------------------------------------------------------------------------------------
Generating an Android APK using cordova
------------------------------------------------------------------------------------------
Installation:
Install Android Studio 
Install Gradle, In envireonment variables, Add GRADLE_HOME to install dir and PATH to GRADLE_HOME/bin
Install Java JDK 17.0 , set PATH to install dir\bin

Start Android Studio  go to sdk manager and install 35.0.0 build tools.
You will find the Android SDK under local data as below

ANDROID_HOME=C:\Users\SPNA\AppData\Local\Android\Sdk
Add to PATH platformtools : C:\Users\SPNA\AppData\Local\Android\Sdk\platform-tools

In your counter frontend dir

# Build the counter app for distribution
[C] npm run build


cd counter
[C] npm install -g cordova
[C] cordova create counter-cordova com.example.counter Counter
cd counter-cordova  ## Inside cordova folder
delete all files in counter-cordova/www
Copy all files from frontend/dist to counter-cordova/www 

[C] cordova platform add android ios

[C] cordova build android
