echo off 
start browser-sync start --server --files "css/*.*" "js/*.*" "*.*" 
start koala 
start code ./ ./index.html ./css/style.scss ./js/script.js 
