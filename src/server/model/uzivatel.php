<?php

class Uzivatel
{
    private $login;
    private $password;

    /**
     * Uzivatel constructor.
     * @param $login
     * @param $password
     */
    public function __construct($login, $password)
    {

        $this->login = $login;
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $heslo
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @param mixed $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    public function toString() {
        echo "\n{login: ".$this->login." password: ".$this->password."}\n" ;
    }

}