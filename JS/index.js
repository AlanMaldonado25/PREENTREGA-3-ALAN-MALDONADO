//!Crear array de ingresos
let ingresos = [];
let totalIngreso = 0;

//!Crear array de gastos
let gastos = [];
let totalGasto = 0;

//! Agregar ingresos
function agregarIngreso() {
    let descripcion = document.getElementById('detalleIngreso').value;
    let monto = parseFloat(document.getElementById('montoIngreso').value);
    
    if (descripcion == '' || monto == '') {
        alert('Por favor, ingresa un detalle valido.');
        return;
    }else{
        ingresos.push({descripcion,monto});
        totalIngreso += monto;
        document.getElementById('detalleIngreso').value = '';
        document.getElementById('montoIngreso').value = '';
        actualizarTotalIngresos();
    }
    
}
//! Actualizar el total de ingresos
function actualizarTotalIngresos() {
    document.getElementById('totalIngresos').textContent = `$${totalIngreso.toFixed(2)}`;
}
//! Mostrar ingresos.
function mostrarIngresos(){
    const ul = document.getElementById('listaIngresos');
    const ingresosHtml = ingresos.map(item => `<li class="lista">${item.descripcion}: $${item.monto.toFixed(2)}</li>`).join('');
    ul.innerHTML = ingresosHtml;
}

//! Evento de boton para agregar ingreso
let botonIngreso = document.getElementById('btnIngreso');
botonIngreso.addEventListener('click',function(event){
    event.preventDefault();
    agregarIngreso();
    mostrarIngresos();
    mostrarSaldo();
})

mostrarIngresos();
actualizarTotalIngresos();

function agregarGasto() {
    let descripcion = document.getElementById('detalleGasto').value;
    let monto = parseFloat(document.getElementById('montoGasto').value);
    
    if (descripcion == ''|| monto =='') {
        alert('Por favor, ingresa un detalle valido.');
        return;
    }else{
        gastos.push({descripcion,monto});
        totalGasto += monto;
        document.getElementById('detalleGasto').value = '';
        document.getElementById('montoGasto').value = '';
        actualizarTotalGastos();
        
    }
    
}
function actualizarTotalGastos() {
    document.getElementById('totalGastos').textContent = `$${totalGasto.toFixed(2)}`;
}
function mostrarGastos(){
    const ul = document.getElementById('listaGastos');
    const gastosHtml = gastos.map(item => `<li class="lista">${item.descripcion}: $${item.monto.toFixed(2)}</li>`).join('');
    ul.innerHTML = gastosHtml;
}
let botonGastos = document.getElementById('botonGastos');
    botonGastos.addEventListener('click',function(event){
    event.preventDefault();
    agregarGasto();
    mostrarGastos();
    mostrarSaldo();
})
mostrarGastos();
actualizarTotalGastos();
function mostrarSaldo() {
    let saldo = totalIngreso - totalGasto;
    document.getElementById('saldoTotal').textContent = `$${saldo.toFixed(2)}`;
}
mostrarSaldo();

let botonGuardar = document.getElementById('guardarDatos');
botonGuardar.addEventListener("click", function () {
    localStorage.setItem('ingresos', JSON.stringify(ingresos));
    localStorage.setItem('gastos',JSON.stringify(gastos));
})
function cargarDatosDesdeLocalStorage() {
    const ingresosGuardados = JSON.parse(localStorage.getItem('ingresos'));
    const gastosGuardados = JSON.parse(localStorage.getItem('gastos'));

    // Verificar si hay datos guardados
    if (ingresosGuardados && gastosGuardados) {
        // Asignar los datos guardados a tus arrays de ingresos y gastos
        ingresos = ingresosGuardados;
        gastos = gastosGuardados;

        // Llamar a las funciones para mostrar los datos en el DOM
        mostrarIngresos();
        mostrarGastos();
        mostrarSaldo();
    }
}
let botonCargar = document.getElementById('cargarDatos');
botonCargar.addEventListener('click', function () {
    cargarDatosDesdeLocalStorage();
});
let botonBorrarDatos = document.getElementById('borrarDatos');
botonBorrarDatos.addEventListener('click', function(){
    localStorage.clear();
})
function cargarDatosDesdeLocalStorage() {
    const ingresosGuardados = JSON.parse(localStorage.getItem('ingresos'));
    const gastosGuardados = JSON.parse(localStorage.getItem('gastos'));

    // Verificar si hay datos guardados
    if (ingresosGuardados && gastosGuardados) {
        // Asignar los datos guardados a tus arrays de ingresos y gastos
        ingresos = ingresosGuardados;
        gastos = gastosGuardados;   
        totalIngreso = calcularTotal(ingresos);
        totalGasto = calcularTotal(gastos);
        // Llamar a las funciones para mostrar los datos en el DOM
        mostrarIngresos();
        mostrarGastos();
        mostrarSaldo();
    }
}
function calcularTotal(items){
    return items.reduce((total,item) => total + item.monto,0);
}