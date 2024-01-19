// Cambiar el contenido de la etiqueta h1
 document.querySelector('h1').textContent = 'Hora del Desafío';

 // Función para mostrar mensaje en la consola al hacer clic en el botón "Console"
 function action1() {
   console.log('El botón fue clicado');
 };

 // Función para mostrar una alerta con un mensaje personalizado al hacer clic en el botón "Prompt"
function action2() {
   var ciudad = prompt('Ingresa el nombre de una ciudad de Brasil:');
   if (ciudad) {
     alert(`Estuve en ${ciudad} y me acordé de ti`);
   }
 };

 // Función para mostrar una alerta con el mensaje "Yo amo JS" al hacer clic en el botón "Alerta"
function action3() {
   alert('Yo amo JS');
 };

 // Función para pedir dos números y mostrar el resultado de la suma en una alerta al hacer clic en el botón "Suma"
  function action4() {
   var num1 = prompt('Ingresa el primer número:');
   var num2 = prompt('Ingresa el segundo número:');

   // Convertir los valores ingresados a números y sumarlos
   var resultado = Number(num1) + Number(num2);

   // Mostrar el resultado en una alerta
   alert(`La suma es: ${resultado}`);
 };