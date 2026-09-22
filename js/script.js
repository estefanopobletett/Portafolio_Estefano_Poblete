// 1. Seleccionamos el botón por su ID
const botonTema = document.getElementById('btnTema');

// 2. Escuchamos cuando el usuario hace clic en el botón
botonTema.addEventListener('click', function() {
    
    // 3. Alternamos (agrega si no existe, quita si ya existe) la clase 'dark-mode' en el <body>
    document.body.classList.toggle('dark-mode');
    
    // 4. Cambiamos el texto del botón según el estado
    if (document.body.classList.contains('dark-mode')) {
        botonTema.textContent = '☀️ Modo Claro';
    } else {
        botonTema.textContent = '🌙 Modo Oscuro';
    }
});