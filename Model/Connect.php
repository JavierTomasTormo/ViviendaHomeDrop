<?php
    class connect{
        private static $servername = "localhost";
        private static $username = "root";
        private static $password = "";
        private static $dbname = "homedropviviendas";
        private static $conn;


        public static function con(){

            if (!self::$conn) {

                self::$conn = new mysqli(self::$servername, self::$username, self::$password, self::$dbname);
                
                if (self::$conn->connect_error) {
                    die("Conexion Fallida: " . self::$conn->connect_error);
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