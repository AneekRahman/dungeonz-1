<!DOCTYPE html>
<html>
<body>
    <?php
        $accName = $_POST["accName"];
        $accUsername = $_POST["accUsername"];
        $accEmail = $_POST["accEmail"];
        $accPass = $_POST["accPass"];
        $accBirthDate = $_POST["accBirthDate"];
        $accBirthMonth = $_POST["accBirthMonth"];
        $accBirthYear = $_POST["accBirthYear"];

        function proceed(){
            global $accName,$accEmail,$accBirthYear,$accPass,$accUsername;
            $age = 2017 - $accBirthYear;

            echo "<h1>Welcome, $accName</h1><br>";
            echo "<h1 style='border-bottom:1px solid'>Your account has been made!</h1>";
            echo "<h2>Your Username is: <span style='background-color:yellow'>$accUsername</span> <br></h2>";
            echo "<h2>Your Email is: <span style='background-color:yellow'>$accEmail</span> <br></h2>";
            echo "<h2>Your Password is: <span style='background-color:yellow'>$accPass</span> <br></h2>";
            echo "And wow, You're " . $age . " Years Old! :D";
        }

        if(strlen($accPass)==0){
            echo "ENTER A PASSWORD!";
        }elseif(strlen($accPass) < 7){
            echo "YOUR PASSWORD IS TOO SHORT!";
        }else{
            proceed();
        }
    ?>
</body>
</html>


