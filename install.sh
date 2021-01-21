#!/usr/bin/bash

apt-get install libwebp
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm audit fix
npm i imgbb-uploader
npm cache clean -f
npm install --dev
npm i got
npm audit fix

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
echo "Updates : fix Bugs"
