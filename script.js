// 1. BASE DE DATOS DE PREGUNTAS

const preguntasComunesDecanaturas = [
    "Paulo Emilio Romero Flórez, estudiante. ¿Cómo lograremos la integración entre la decanatura y el estamento estudiantil, para trabajar en equipo y conocer sus necesidades?",
    "Estudiante. ¿cómo pretende general herramientas modernas para garantizar una internacionalización democratizada y palpable para los estudiantes, no solo para unos pocos?",
    "Carlos Eduardo Guerrero Terán, estudiante. ¿Cómo cree que su propia historia de vida y experiencias personales han moldeado su visión y enfoque para liderar la facultad, y cómo cree que esas experiencias lo preparan para abordar los desafíos y oportunidades que enfrenta esta."
];

const bancoDePreguntas = {
    "rectoria": {
        nombre: "Rectoría",
        preguntas: [
            "Carlos Eduardo Guerrero Terán, estudiante de la Facultad de Ciencias Sociales y Educación. ¿Cómo cree que su propia historia de vida y experiencias personales han moldeado su visión y enfoque para liderar esta universidad, y cómo cree que esas experiencias lo preparan para abordar los desafíos y oportunidades que enfrenta la institución?",
            "Estudiante de la Facultad de Ciencias Humana. ¿Como tratarán los temas de abuso sexual en la universidad?",
            "Isaac David Diaz Contreras, estudiante de la Facultad de Ciencias Económicas. ¿Cómo planea ampliar el rubro presupuestal destinado a los grupos culturales y centros tutoriales, que actualmente carecen de recursos suficientes, y qué medidas concretas implementará para fomentar una mayor vinculación de los estudiantes en estos procesos culturales y formativos?",
            "Alonso José Marrugo González, Docente de la Facultad de Ciencias Exactas y Naturales. ¿Está usted de acuerdo en descentralizar el presupuesto de la institución, y asignar rubros importantes para ser ejecutados por las facultades y programas académicos y por qué?",
            "Valentina Sofia Pérez Rojas, estudiante de la Facultad de Ingeniería. ¿Qué propuestas concretas tiene para fortalecer los laboratorios, la investigación y las oportunidades prácticas para los estudiantes de Ingeniería de Alimentos, desde los primeros semestres, para que podamos desarrollar habilidades que respondan a las necesidades de la industria?",
            "Juan Gabriel Pérez Díaz, estudiante de Facultad de Ciencias Económicas. ¿ Cómo harán para que las los estudiantes tenga canchas en los centros tutoriales y más espacio de diversión?"
        ]
    },
    "economicas": {
        nombre: "Facultad de Ciencias Económicas",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "ingenieria": {
        nombre: "Facultad de Ingeniería",
        preguntas: [
            ...preguntasComunesDecanaturas,
            "Valentina Sofia Pérez Rojas, estudiante. ¿Qué propuestas concretas tiene para fortalecer los laboratorios, la investigación y las oportunidades prácticas para los estudiantes de Ingeniería de Alimentos, desde los primeros semestres, para que podamos desarrollar habilidades que respondan a las necesidades de la industria?"
        ]
    },
    "exactas": {
        nombre: "Facultad de Ciencias Exactas y Naturales",
        preguntas: [
            "Paulo Emilio Romero Flórez, estudiante. El programa de Matemáticas perdió su acreditación de alta calidad, lo cual genera preocupación en la comunidad académica. Desde su perspectiva, ¿Cómo lograremos la integración entre la decanatura y el estamento estudiantil, para trabajar en equipo y conocer sus necesidades?",
            "Carlos Eduardo Guerrero Terán, estudiante. ¿Cómo cree que su propia historia de vida y experiencias personales han moldeado su visión y enfoque para liderar la facultad, y cómo cree que esas experiencias lo preparan para abordar los desafíos y oportunidades que enfrenta esta.",
            "Juan Manuel Rico, estudiante. ¿cuáles fueron las principales fallas que llevaron a esta situación y qué plan estructurado propone para recuperar la acreditación y fortalecer el programa a corto y mediano plazo?",
            "Alonso José Marrugo González, docente. ¿Está usted de acuerdo en descentralizar el presupuesto de la institución, y asignar rubros importantes para ser ejecutados por las facultades y programas académicos y por qué?",
            "Estudiante. Sobre Laboratorios: ¿Cómo garantiza usted la formación práctica si no hay una partida presupuestal explícita y prioritaria para reactivos, materiales y mantenimiento de equipos de laboratorio desde el primer día?",
            "Estudiante de la Facultad de Ciencias Exactas y Naturales. ¿cómo pretende general herramientas modernas para garantizar una internacionalización democratizada y palpable para los estudiantes, no solo para unos pocos?"
        ]
    },
    "odontologia": {
        nombre: "Facultad de Odontología",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "enfermeria": {
        nombre: "Facultad de Enfermería",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "farmaceuticas": {
        nombre: "Facultad de Ciencias Farmacéuticas",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "medicina": {
        nombre: "Facultad de Medicina",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "sociales": {
        nombre: "Facultad de Ciencias Sociales y Educación",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "humanas": {
        nombre: "Facultad de Ciencias Humanas",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "derecho": {
        nombre: "Facultad de Derecho y Ciencias Políticas",
        preguntas: [...preguntasComunesDecanaturas]
    },
    "representantes": {
        nombre: "Consejo Superior y Consejo Académico",
        preguntas: [
            "Alonso José Marrugo González, docente de la Facultad de Ciencias Exactas y Naturales. ¿Está usted de acuerdo en descentralizar el presupuesto de la institución, y asignar rubros importantes para ser ejecutados por las facultades y programas académicos y por qué?"
        ]
    }
};

let preguntasActuales = [];
let menuOrigenActual = ""; // Para saber a dónde volver

const pantallaMenuPrincipal = document.getElementById('pantalla-menu-principal');
const pantallaSubmenuDecanaturas = document.getElementById('pantalla-submenu-decanaturas');
const pantallaRuleta = document.getElementById('pantalla-ruleta');

const tituloFacultad = document.getElementById('titulo-facultad');
const cajaPregunta = document.getElementById('caja-pregunta');
const botonGirar = document.getElementById('botonGirar');
const botonVolver = document.getElementById('botonVolver');
const contenedorFacultades = document.getElementById('grid-facultades');

// Inicializar Submenú de Decanaturas ordenado alfabéticamente
function inicializarDecanaturas() {
    const idsFacultades = [
        'economicas', 'ingenieria', 'exactas', 'odontologia', 'enfermeria', 
        'farmaceuticas', 'medicina', 'sociales', 'humanas', 'derecho'
    ];

    // Ordenar alfabéticamente por el nombre de la facultad
    idsFacultades.sort((a, b) => {
        return bancoDePreguntas[a].nombre.localeCompare(bancoDePreguntas[b].nombre);
    });

    // Generar botones
    idsFacultades.forEach(id => {
        const btn = document.createElement('button');
        btn.className = 'btn-facultad card-naranja';
        btn.innerText = bancoDePreguntas[id].nombre;
        btn.onclick = () => seleccionarCategoria(id, 'submenu-decanaturas');
        contenedorFacultades.appendChild(btn);
    });
}

// Llamar al inicio
inicializarDecanaturas();

function ocultarTodasLasPantallas() {
    pantallaMenuPrincipal.style.display = 'none';
    pantallaSubmenuDecanaturas.style.display = 'none';
    if (pantallaRuleta) pantallaRuleta.style.display = 'none';
}

function mostrarSubmenuDecanaturas() {
    ocultarTodasLasPantallas();
    pantallaSubmenuDecanaturas.style.display = 'block';
}

function volverAlMenuPrincipal() {
    ocultarTodasLasPantallas();
    pantallaMenuPrincipal.style.display = 'block';
}

function seleccionarCategoria(idCategoria, idMenuOrigen) {
    const categoriaElegida = bancoDePreguntas[idCategoria];
    menuOrigenActual = idMenuOrigen;
    
    // Hacemos una COPIA de las preguntas
    preguntasActuales = [...categoriaElegida.preguntas];
    
    if (tituloFacultad) tituloFacultad.innerText = categoriaElegida.nombre;
    if (cajaPregunta) cajaPregunta.innerText = "Haz clic en 'Girar Ruleta' para obtener una pregunta...";

    ocultarTodasLasPantallas();
    if (pantallaRuleta) pantallaRuleta.style.display = 'block';
}

// FUNCIÓN: Volver al menú anterior
function volverAtras() {
    ocultarTodasLasPantallas();
    if (menuOrigenActual === 'submenu-decanaturas') {
        pantallaSubmenuDecanaturas.style.display = 'block';
    } else {
        pantallaMenuPrincipal.style.display = 'block';
    }
}

// FUNCIÓN: El efecto de girar la ruleta y sacar pregunta única
function girarRuleta() {
    // Si ya se acabaron las preguntas
    if (preguntasActuales.length === 0) {
        if (cajaPregunta) cajaPregunta.innerText = "¡Se han agotado todas las preguntas de esta categoría! Vuelve atrás para elegir otra.";
        return;
    }

    if (botonGirar) botonGirar.disabled = true;
    if (botonVolver) botonVolver.disabled = true;
    
    let tiempo = 0;
    
    const intervalo = setInterval(() => {
        // Muestra preguntas al azar muy rápido
        const azarTemporal = Math.floor(Math.random() * preguntasActuales.length);
        if (cajaPregunta) cajaPregunta.innerText = preguntasActuales[azarTemporal];
        tiempo += 100;

        // Después de 3 segundos se detiene en una definitiva
        if (tiempo >= 3000) {
            clearInterval(intervalo);
            
            // Elegimos al ganador final
            const indiceGanador = Math.floor(Math.random() * preguntasActuales.length);
            const preguntaGanadora = preguntasActuales[indiceGanador];
            
            if (cajaPregunta) cajaPregunta.innerText = preguntaGanadora;
            preguntasActuales.splice(indiceGanador, 1);

            if (botonGirar) botonGirar.disabled = false;
            if (botonVolver) botonVolver.disabled = false;
        }
    }, 100);
}