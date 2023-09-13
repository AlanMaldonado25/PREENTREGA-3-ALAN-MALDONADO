# Preentrega 3 
# Alan Maldonado Curso Javascript CoderHouse

# _Continuando el proyecto anterior..._

Para esta entrega el programa tiene que contar con lo siguiente:

1.Variables ✅

2.Bucles ✅

3.Funciones ✅

4.Condicionales ✅

5.Arrays ✅

6.Objetos ✅

7.Metodos para los arrays ✅

8.Eventos del DOM ✅

9.Modificacion del DOM ✅

10.Salvar datos en LocalStorage ✅

11.Cargar datos del LocalStorage ✅

# A continuacion voy a explicar un poco el funcionamiento del programa.

## 1._Arrays para almacenar datos:_
+ 'gastos': Un array que almacena los gastos junto con sus descripciones y montos ingresados
+ 'dinero': En este array se agregan los ingresos de dinero. Tanto la descripcion como el monto.

## 2._Funciones para agregar Ingresos y Gastos_
+ 'agregarIngreso()': Funcion que toma los datos ingresados en los inputs del DOM y agrega los valores al array de ingresos.
+ 'agregarGasto()': Funcion que toma los datos ingresados en los inputs del DOM y agrega los valores al array de gastos.
  
## 3._Funciones para actualizar los totales_
+ 'actualizarTotalIngresos()': Actualiza el total de los ingresos, sumando ingresos anteriores con los montos ingresados.
+ 'actualizarTotalGastos()': Actualiza el total de Gastos , sumando los montos que teniamos ya guardados y los que se guardan en el momento.
+ 'mostrarSaldo()': Actualiza el total del saldo restando el resultado de 'actualizarTotalIngresos' - 'actualizarTotalGastos'.

## 4._Botones para LocalStorage_
+ 'guardarDatos': Los datos que tenemos en los arrays se cargan al LocalStorage para poder seguir utilizandolos luego.
+ 'cargarDatos': Para traer los datos que tenemos guardados en el LocalStorage, hay una funcion que se ejecuta al clickear el boton .
  Ya que necesitaba que cuando se cargaran los datos del LocalStorage se imprimiera la lista de ingreso y gastos , asi como los totales y el saldo total.
+ 'reiniciarApp': con este boton borramos los datos ingresados en el localStorage y la lista dde ingreso y gastos, tambien los totales.



## _Aca se encuentran los links para conocer el proyecto._

- Link del repositorio de GitHub: https://github.com/AlanMaldonado25/PREENTREGA-3-ALAN-MALDONADO.git
- Link Del deployment de GitHub Pages: https://alanmaldonado25.github.io/PREENTREGA-3-ALAN-MALDONADO/

## _Desde ya muchas gracias por ver mi Repositorio y mi proyecto_
