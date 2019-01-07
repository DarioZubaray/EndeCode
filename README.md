# EndeCode #

Chrome plugin extension para codificar/decodificar cadenas de textos a tráves de las funciones de javascript vanilla:
- encodeURIComponent/decodeURIComponent
- encodeURI/decodeURI

## Codificar

* Entrada

´´´
{call img_consulta_articulo (?,?)}
´´´

* Salida (__Con__ __caracteres__ __especiales__)

´´´
%7Bcall%20img_consulta_articulo%20(%3F%2C%3F)%7D
´´´

## Decodificar

* Entrada

´´´
YPF%20anunci%C3%B3%20que%20baja%20el%20precio%20del%20combustible
´´´

* Salida

´´´
YPF anunció que baja el precio del combustible
´´´