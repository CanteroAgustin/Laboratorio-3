<!--Se necesita tener el listado diez aulas, con los alumnos y el profesor a cargo,
Para buscar por nombre y/o apellido y/o sexo  :
Un alumno en todas las aulas.
Un alumno en un aula.
Un profesor en las aulas.
Cantidad de veces que aparece un alumno en las aulas.   
Una persona en las alulas.
Cantidad y listado de personas con el mismo apellido y/o nombre y/o sexo.

Se debe crear la jerarquía de clases, sabiendo que una de las clases es abstracta. -->


<?php
include_once "Clase 2/Persona.php";
include_once "Clase 2/Alumno.php";
include_once "Clase 2/Profesor.php";
include_once "Clase 2/Aula.php";
	/*if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	$uri .= $_SERVER['HTTP_HOST'];
	header('Location: '.$uri.'/dashboard/');
	exit;*/
	$alumno1 = new Alumno("alumno1", "apellido", "x");
	$alumno2 = new Alumno("alumno2", "apellido", "x");
	$alumno3 = new Alumno("alumno3", "apellido", "x");
	$alumno4 = new Alumno("alumno4", "apellido", "x");
	$alumno5 = new Alumno("alumno5", "apellido", "x");
	$alumno6 = new Alumno("alumno6", "apellido", "x");
	$alumno7 = new Alumno("alumno7", "apellido", "x");
	$alumno8 = new Alumno("alumno8", "apellido", "x");
	$alumno9 = new Alumno("alumno9", "apellido", "x");
	$alumno10 = new Alumno("alumno10", "apellido", "x");
	$alumno11 = new Alumno("alumno11", "apellido", "x");
	$alumno12 = new Alumno("alumno12", "apellido", "x");

	$profesor1 = new Profesor("profesor1", "apellido", "x");
	$profesor2 = new Profesor("profesor2", "apellido", "x");
	$profesor3 = new Profesor("profesor3", "apellido", "x");
	$profesor4 = new Profesor("profesor4", "apellido", "x");
	
	$aula1 = new Aula($profesor1);
	$aula2 = new Aula($profesor2);
	$aula3 = new Aula($profesor3);
	$aula4 = new Aula($profesor4);

	$aula1->addAlumno($alumno1);
	$aula1->addAlumno($alumno2);
	$aula1->addAlumno($alumno3);
	$aula2->addAlumno($alumno4);
	$aula2->addAlumno($alumno5);
	$aula2->addAlumno($alumno6);
	$aula3->addAlumno($alumno7);
	$aula3->addAlumno($alumno8);
	$aula3->addAlumno($alumno9);
	$aula4->addAlumno($alumno10);
	$aula4->addAlumno($alumno11);
	$aula4->addAlumno($alumno12);

	$listaDeAulas = array();
	array_push($listaDeAulas, $aula1);
	array_push($listaDeAulas, $aula2);
	array_push($listaDeAulas, $aula3);
	array_push($listaDeAulas, $aula4);

	var_dump(Aula::getAlumnosByNombreEdadOSexo(null, "apellido", "x", $listaDeAulas));
?>
