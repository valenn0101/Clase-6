/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.getElementById("agregar-familiar");
const $botonQuitar = document.getElementById("quitar-familiar");
const $botonCalcular = document.getElementById("calcular-sueldos");

function ocultarBotonCalcular() {
    document.getElementById("calcular-sueldos").className = " ";
}

function ocultarBotonResultados() {
    document.getElementById("resultados-finales").className = " ";
}

$botonAgregar.onclick = function crearFormularios() {
  ocultarBotonCalcular();
  const formularios = document.getElementById("lista-de-familiares");
  formularios.innerHTML += `<form id="integrante" class="familia">
    <h3>Familiar</h3>
    <label for="salario-anual-familiares">Salario Anual</label>
    <input type="number" name="Salario" class="salarios" required>
    </form> <br/>`;
};

$botonQuitar.onclick = function borrarFormulario() {
  const $listaFamiliares = document.getElementById("lista-de-familiares");
  const formularioHijo = $listaFamiliares.lastElementChild;
  $listaFamiliares.removeChild(formularioHijo);
};

$botonCalcular.onclick = function () {
  const numeros = obtenerSalarios();
  mostrarSalario("mayor", obtenerMayorSalario(numeros));
  mostrarSalario("menor", obtenerMenorSalario(numeros));
  mostrarSalario("mensualidad", obtenerPromedioAnual(numeros)/12);
  mostrarSalario("promedio", obtenerPromedioAnual(numeros));
  ocultarBotonResultados();
};

function obtenerSalarios() {
  const integrantes = document.querySelectorAll(".salarios");
  const salarios = [];
  for (let i = 0; i < integrantes.length; i++) {
    if (integrantes[i].value !== "") {
      salarios.push(Number(integrantes[i].value));
    }
  }
  return salarios;
}
function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}-salario`).textContent = valor;
}
