<?php

define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PSW','');
define('DB_NAME','dbreact');

class Dbstorage
{
    private static $instance = null;
    private $db;

    /**
     * Dbstorage constructor.
     */
    public function __construct()
    {

        //CORS
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
        header("Content-type:application/json");


        try {
            $this->db = new PDO("mysql::host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PSW);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: ".$e->getMessage();
        }


    }

    //singletone function
    public static function getInstance()
    {
      if (self::$instance == null)
      {
        self::$instance = new Dbstorage();
      }
   
      return self::$instance;
    }

    //login function
    public function login($login,$password)
    {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE login=:login AND password=:password");
        $stmt->execute(['login' => $login,'password' => $password ]);
        $uzivatel = $stmt->fetchObject();

       return $uzivatel;
    }

}