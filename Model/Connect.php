<?php
    class connect{

        // private static $servername = "localhost";
        // private static $username = "root";
        // private static $password = "";
        // private static $dbname = "homedropviviendas";
        private static $conn;

        public static function con(){
            $dbcred = parse_ini_file("JWT.ini");
        
            if (!isset(self::$conn)) {
                self::$conn = new mysqli($dbcred['DB_SERVERNAME'], $dbcred['DB_USERNAME'], $dbcred['DB_PASSWORD'], $dbcred['DB_DBNAME']);
        
                // Check connection
                if (self::$conn->connect_error) {
                    die("Connection failed: " . self::$conn->connect_error);
                }
            }
        
            return self::$conn;
        }
        

        public static function close(){

            if (self::$conn) {
                self::$conn->close();
            }
        }
    }