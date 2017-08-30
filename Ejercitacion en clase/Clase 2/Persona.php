<?php
include_once "Alumno.php";
include_once "Profesor.php";
abstract class Persona{

public $apellido;
public $nombre;
public $sexo;


public function __construct($nombre, $apellido, $sexo) {
      $this->apellido = $apellido;
      $this->nombre = $nombre;
      $this->sexo = $sexo;
}

abstract  function getByNombreEdadOSexo($nombre, $apellido, $sexo);

abstract  function getByNombreEdadOSexoYAula($nombre, $apellido, $sexo, $aula);

}

?>