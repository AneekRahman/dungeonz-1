<!DOCTYPE html>
<html>
<body>
    <?php
        $logEmail = $_POST["logEmail"];
        $logPass = $_POST["logPass"];

        echo "<h1>Welcome, $logEmail</h1>";
        
        $aneekStat = array("Name: Aneek Rahman","Age: 17","Nationality: Bangladeshi");
        
        for($i = 0; $i < 3; $i++){
            echo $aneekStat[$i] . "<br>";
        }
    ?>
</body>
</html>


