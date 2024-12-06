# React Quotes

React Quotes es una aplicación sencilla desarrollada con React que muestra citas célebres junto con detalles adicionales como el autor, la categoría, el año, el país y el idioma original. Está diseñada para explorar citas de forma interactiva y dinámica.

## Características

- **Explora citas**: Navega entre citas con un botón "Siguiente".
- **Detalles adicionales**: Muestra/oculta detalles adicionales de cada cita.
- **Diseño responsivo**: Estilizado con Bootstrap para adaptarse a diferentes dispositivos.

## Tecnologías utilizadas

- **React**: Framework principal para la interfaz de usuario.
- **Bootstrap**: Framework de CSS para estilos.
- **Vite**: Herramienta de desarrollo para una construcción rápida y eficiente.
- **Sass**: Preprocesador de CSS para estilos personalizados.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Kenkyoo/react-quotes.git

    Navega al directorio del proyecto:

cd react-quotes

Instala las dependencias:

    npm install

Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

    npm run dev: Inicia el servidor de desarrollo.
    npm run build: Genera una versión de producción.
    npm run preview: Previsualiza la versión de producción.
    npm run lint: Analiza el código con ESLint.
    npm run watch:sass: Observa y compila los cambios en los archivos Sass.

Cómo usar

    Inicia el servidor de desarrollo:

    npm run dev

    Abre la aplicación en tu navegador en http://localhost:5173.

Estructura de la aplicación

    src/data.jsx: Contiene un array con las citas y sus detalles.
    src/App.jsx: Componente principal que maneja la lógica y la presentación de la aplicación.

Ejemplo de datos en data.jsx

export const frasesArray = [
  {
    frase: "El conocimiento es poder.",
    autor: "Francis Bacon",
    fuente: "Meditationes Sacrae",
    categoria: "Filosofía",
    año: 1597,
    pais: "Inglaterra",
    idiomaOriginal: "Latín"
  },
  // Más citas aquí...
];

Dependencias principales

    React y ReactDOM: ^18.3.1
    Bootstrap: ^5.3.3
    Sass: ^1.78.0

Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.

Licencia: Este proyecto está bajo la Licencia MIT.
