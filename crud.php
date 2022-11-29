<?php
if (isset($_POST['submit'])) {
    // if (isset($_POST['username']) && isset($_POST['password']) &&
    //     isset($_POST['gender']) && isset($_POST['email']) &&
    //     isset($_POST['phoneCode']) && isset($_POST['phone'])) {
        
        $username = $_POST['username'];
        $password = $_POST['password'];
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $phoneCode = $_POST['phoneCode'];
        $phone = $_POST['phone'];

        
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "test";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            // echo "database connected";
            try{
                $sql = "INSERT INTO register(username, pass, gender, email, phoneCode, phone) values(?,?,?,?,?,?)";
    
                 $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";

                 $stmt = $conn->prepare($Select);
                    $stmt->bind_param("s", $email);
                    $stmt->execute();
                    $stmt->bind_result($resultEmail);
                    $stmt->store_result();
                    $stmt->fetch();
                    $rnum = $stmt->num_rows;
                    if ($rnum == 0) {
                        $stmt = $conn->prepare($sql);
                        $stmt->bind_param("ssssss", $username, $password, $gender,$email,$phoneCode,$phone);
                        if ($stmt->execute()) {
                            echo "<h1>REGISTERED sucessfully.</h1>";
                        }
                        else {
                            echo $stmt->error;
                        }

                    }
                    else{
                        echo "Email already exist";
                    }
                
                
    
                // $stmt->bind_param(':user',$username);
                // $stmt->bind_param(':pass',$password);
                // $stmt->bind_param(':gender',$gender);
                // $stmt->bind_param(':email',$email);
                // $stmt->bind_param(':Code',$phoneCode);
                // $stmt->bind_param(':Phone',$phone);
              
                return true;
            }catch(PDOexception $e){
                echo $e->getMessage();
                echo "error occurred";
                return false;
            }
        }

        


    }
    else{
        echo "error occurred";
    }
   ?>