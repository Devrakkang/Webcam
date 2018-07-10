<!DOCTYPE html>
<html>
 <head>
     <title>Snapshot</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body onload="init();">

     <div class="container">
         <div class="button">
            <a class="btn" onclick="snapshot();">Take Snapshot</a>
            <a class="btn" id="save" onclick="save();">Save as Image</a>
         </div>
         <div class="content">
            <video width="450" height="350" id="video" autoplay></video>  
            <canvas  id="canvas" width="450" height="350"></canvas>
         </div>
     </div>    
     
     <script src="app.js"></script>
 </body>
</html>