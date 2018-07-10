<?php
        if(isset($_GET['image']))
        {  
            $img = $_GET['image'];  //get image name grom url.
            $imgPath = "C:\\Users\\WarapolJ\\Downloads\\" .$img;    //path to download image.
            $target = "G:\\WarapolJ\\XAMPP\\htdocs\\Webcam\\images\\" .$img;    //path to upload image.

            //copy default = fail 
            if(!copy( $imgPath, $target )) //fail
            {
                header("Refresh: 0");   //refresh = copy success.
            }
            else    //success
            {
                unlink($imgPath);   //delete image
                echo '<script> window.close(); </script>';   //close page.
            }           
        } 
        else
        {
            header("location: index.php"); 
        }
?>