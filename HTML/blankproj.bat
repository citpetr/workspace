mkdir "testproj"
cd ./testproj
mkdir "css"
mkdir "js"
cd ./css
echo . >> style.css
cd ../
cd ./js
echo . >> script.js
cd ../
echo ^<!DOCTYPE html^> >> index.html
echo ^<html lang="en"^> >> index.html
echo ^<head^> >> index.html
echo    ^<meta charset="UTF-8"^> >> index.html
echo    ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> index.html
echo    ^<meta http-equiv="X-UA-Compatible" content="ie=edge"^> >> index.html
echo 	^<link rel="stylesheet" href="./css/style.css"^> >> index.html
echo    ^<title^>Document^</title^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo ^<script src="./js/script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

echo ^echo off >> start.bat
echo start browser-sync start --server --files "css/*.*" "js/*.*" "*.*" >> start.bat
echo start koala >> start.bat
echo start code ./ ./index.html ./css/style.scss ./js/script.js >> start.bat