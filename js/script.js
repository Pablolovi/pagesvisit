console.log("Inicializando contador de visitas...");

// Recuperar el contador desde el localStorage
let contador = localStorage.getItem('contadorVisitas');

// Verificar si ya se inicializó
if (!contador) {
    console.log("No se ha encontrado un contador, inicializando en 0.");
    contador = 0; // Si no existe, inicializamos el contador a 0
} else {
    // Si existe lo mostramos
    console.log(`Contador recuperado de localStorage: ${contador}`);
}

// Incremento del contador en cada visita
contador++;
console.log(`Contador incrementado a: ${contador}`);

// Guardamos el nuevo valor en localStorage
localStorage.setItem('contadorVisitas', contador);
console.log(`Contador guardado en localStorage con valor: ${contador}`);

// Actualizamos el valor del contador en la página
document.getElementById('contadorVisitas').textContent = contador;
console.log(`Valor del contador actualizado en la página: ${contador}`);

// Lógica del botón para restablecer el contador
document.getElementById('btnReestablecer').addEventListener('click', function() {
    console.log('Botón de "Reestablecer Contador" presionado...');
    
    // Reiniciamos el contador a 1 y lo guardamos en localStorage
    localStorage.setItem('contadorVisitas', 1);
    console.log("Contador reiniciado en localStorage a 1.");
    
    // Mostramos el contador reiniciado en la página
    document.getElementById('contadorVisitas').textContent = 1;
    console.log('Contador mostrado en la página: 1');
});

// Mostrar el banner si se refresca más de dos veces
if (contador > 2) {
    const banner = document.getElementById('productivityBanner');
    banner.style.display = 'block';

    // Cerrar el banner al hacer clic en el botón
    document.getElementById('closeBanner').addEventListener('click', () => {
        banner.style.display = 'none';
    });
}