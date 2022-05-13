<?php
    $buscar = (isset($_POST["buscar"]) && $_POST["buscar"] != "" ) ?$_POST["buscar"] : "No especificado";
    $zona = (isset($_POST["zona"]) && $_POST["zona"] != "" ) ?$_POST["zona"] : "No especificado";
    $modo = (isset($_POST["modo"]) && $_POST["modo"] != "" ) ?$_POST["modo"] : "No especificado";

    echo "<table border=l align=center cellpadding=20px>
        <thead>
            <tr>";
                echo '<th>';
                echo "Libro ";
                for($cuenta=0; $cuenta<5; $cuenta++){
                    $titulo = rand(0, 9);
                    echo $titulo; 
                }
                for($cuenta=0; $cuenta<5; $cuenta++){
                    $titulo = rand(65, 90);
                    echo chr($titulo); 
                }
                echo '</th>';
            echo "</tr>
        </thead>";

        echo "<tbody>
            <tr>
                <td>";
                    if($modo == "normal")
                        $modooracion = rand(1, 300); //variable para generar un número aleatorio para el modo Orden

                    if($modo == "orden" ){
                        $modoorden = rand(1, 300);
                        $buscar = strtolower($buscar);
                        $arregloAlf = explode(" ", $buscar);
                        sort($arregloAlf);
                    }

                    if($modo == "palabras"){
                        $buscar = strtolower($buscar);
                        $arregloAlf = explode(" ", $buscar);
                        $numpala = count($arregloAlf);
                        $num=0;
                        $div = 300/$numpala+20;
                        $impri = rand(1, $div);
                    }

                    $palabras = 0;
                    do {
                        $aleatorio= rand(4, 11);
                        for($cuenta=0; $cuenta<$aleatorio; $cuenta++){
                            $texto = rand(97, 122);
                            echo chr($texto);
                            
                        }
                        echo " ";

                        if($modo == "normal"){
                            if($palabras == $modooracion) //Imprimir la palabra ordenada cuando el contador llegue al número aleatorio
                                echo "<b><u>$buscar </u></b>";
                        }

                        if($modo == "orden"){
                            if($palabras == $modoorden){
                                foreach($arregloAlf as $orden){
                                    echo "<b><u>$orden </u></b>";
                                }
                            }   
                        }

                        if($modo == "palabras" && $palabras==$impri && $num < $numpala){
                            $impri = $impri + rand(1, $div);
                            echo "<b>$arregloAlf[$num] </b>";
                            $num++;
                        }
                        
                        $palabras++;
                    } while ($palabras<=300);         

                echo "</td>
            </tr>
        </tbody>
    </table>";
    
    
    switch ($zona){
        case 'New York':
            date_default_timezone_set("America/New_York");
            $fecha2 = date('d-m-y'); 
            $tiempo = date('h:i a');
            $fecha = date_default_timezone_get();
            echo "<b>La fecha de consulta de este libro fue:</b> $fecha2 a las $tiempo en $fecha" . "<br><b>Modo: </b>" . $modo;
            break;

        case 'Ciudad de Mexico':
            date_default_timezone_set("America/Mexico_City");
            $fecha2 = date('d-m-y'); 
            $tiempo = date('h:i a');
            $fecha = date_default_timezone_get();
            echo "<b>La fecha de consulta de este libro fue:</b> $fecha2 a las $tiempo en $fecha" . "<br><b>Modo: </b>" . $modo;
            break;

        case 'Tokio':
            date_default_timezone_set("Asia/Tokyo");
            $fecha2 = date('d-m-y'); 
            $tiempo = date('h:i a');
            $fecha = date_default_timezone_get();
            echo "<b>La fecha de consulta de este libro fue:</b> $fecha2 a las $tiempo en $fecha" . "<br><b>Modo: </b>" . $modo;
            break;

        case 'Londres':
            date_default_timezone_set("Europe/London");
            $fecha2 = date('d-m-y'); 
            $tiempo = date('h:i a');
            $fecha = date_default_timezone_get();
            echo "<b>La fecha de consulta de este libro fue:</b> $fecha2 a las $tiempo en $fecha" . "<br><b>Modo: </b>" . $modo;
            break;

        case 'Hong Kong':
            date_default_timezone_set("Asia/Hong_Kong");
            $fecha2 = date('d-m-y'); 
            $tiempo = date('h:i a');
            $fecha = date_default_timezone_get();
            echo "<b>La fecha de consulta de este libro fue:</b> $fecha2 a las $tiempo en $fecha" . "<br><b>Modo: </b>" . $modo;
            break;

        default:
            echo "algo salió mal";
    }
?>