<?php

include_once "Clase 2/Alumno.php";
include_once "Clase 2/Profesor.php";
include_once "Clase 2/Persona.php";

class Aula{
    
public $instructor;
public $alumnos;

    public function __construct($instructor) {
        $this->instructor = $instructor;
        $this->alumnos = array();

    }

    public function addAlumno($alumno){
        array_push($this->alumnos, $alumno);
    }

    public static function getAlumnosByNombreEdadOSexo($nombre, $apellido, $sexo, $listaDeAulas){
        $resultado = array();
        if ((count($listaDeAulas)==0) || ($nombre == null && $apellido == null && $sexo == null)){
            echo "Error de datos";
        }else{
            foreach($listaDeAulas as $aula){
                foreach($aula as $alumnos){
                    if($nombre != null && $apellido == null && $sexo == null){
                        foreach($alumnos as $alumno){
                            if($alumno->nombre == $nombre){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($apellido != null && $nombre == null && $sexo == null){
                        foreach($alumnos as $alumno){
                            if($alumno->apellido == $apellido){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($sexo != null && $apellido == null && $nombre == null){
                        foreach($alumnos as $alumno){
                            if($alumno->sexo == $sexo){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($nombre != null && $apellido != null && $sexo == null){
                        foreach($alumnos as $alumno){
                            if($alumno->nombre == $nombre && $alumno->apellido == $apellido){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($nombre != null && $sexo != null && $apellido == null){
                        foreach($alumnos as $alumno){
                            if($alumno->nombre == $nombre && $alumno->sexo == $sexo){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($apellido != null && $sexo != null && $nombre == null){
                        foreach($alumnos as $alumno){
                            if($alumno->apellido == $apellido && $alumno->sexo == $sexo){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }else if($nombre != null && $apellido != null && $sexo != null){
                        foreach($alumnos as $alumno){
                            if($alumno->nombre == $nombre && $alumno->apellido == $apellido && $alumno->sexo == $sexo){
                                array_push($resultado, $alumno);
                            }
                        }
                        return $resultado;
                    }
                }
                
            }
        }
    }
    
}

?>