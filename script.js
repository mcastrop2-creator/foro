// 1. BASE DE DATOS DE PREGUNTAS
const bancoDePreguntas = {
    "rectoria": {
        nombre: "Rectoría",
        preguntas: [
            "¿Cuáles son las funciones principales del Rector?",
            "¿Cómo se elige al Rector de la institución?",
            "¿Cuál es el rol de la Rectoría en la planificación estratégica?",
            "¿Qué relación tiene el Rector con el Consejo Superior?",
            "¿Cuáles son los principales retos de la Rectoría actualmente?"
        ]
    },
    "economicas": {
        nombre: "Facultad de Ciencias Económicas",
        preguntas: [
            "¿Qué es la inflación y cómo afecta el poder adquisitivo?", 
            "¿En qué consiste la ley de la oferta y la demanda?",
            "¿Qué diferencia hay entre microeconomía y macroeconomía?",
            "¿Qué es el Producto Interno Bruto (PIB)?",
            "¿Qué es un monopolio en el mercado?",
            "¿Cuál es la función principal de un Banco Central?",
            "¿Qué significa el término 'costo de oportunidad'?",
            "¿Qué es una tasa de interés?",
            "¿En qué se diferencian una ventaja absoluta y una ventaja comparativa?",
            "¿Qué es el dinero fiduciario (dinero fiat)?",
            "¿Qué es la balanza comercial de un país?",
            "¿Cómo se define el concepto de elasticidad en economía?",
            "¿Qué es el déficit fiscal?",
            "¿En qué consiste el keynesianismo?",
            "¿Qué es un arancel y para qué se utiliza?",
            "¿Qué diferencia hay entre liquidez y solvencia?",
            "¿Qué es la estanflación?",
            "¿Qué papel juega la bolsa de valores en la economía?",
            "¿Qué es el capital humano?",
            "¿Cuáles son los factores de producción tradicionales?"
        ]
    },
    "ingenieria": {
        nombre: "Facultad de Ingeniería",
        preguntas: [
            "¿Cuáles son las tres leyes de la termodinámica?", 
            "¿Cómo funciona básicamente un motor eléctrico?",
            "¿Qué establece la Ley de Ohm?",
            "¿Qué es la resistencia de materiales?",
            "¿Para qué se utiliza un diagrama de Gantt en proyectos?",
            "¿Qué es la obsolescencia programada?",
            "¿En qué consiste el diseño asistido por computadora (CAD)?",
            "¿Qué es un algoritmo en ingeniería de sistemas?",
            "¿Qué diferencia hay entre corriente alterna y corriente continua?",
            "¿Qué es la mecánica de fluidos?",
            "¿Qué materiales componen el hormigón armado?",
            "¿Cómo funciona la fibra óptica para transmitir datos?",
            "¿Qué es el esfuerzo de tracción y el esfuerzo de compresión?",
            "¿Qué es un Controlador Lógico Programable (PLC)?",
            "¿En qué se basa el funcionamiento de un puente colgante?",
            "¿Qué es la ergonomía en la ingeniería industrial?",
            "¿Qué es la inteligencia artificial y el machine learning?",
            "¿Qué es la topografía y para qué sirve?",
            "¿Cómo se define el concepto de energía cinética?",
            "¿Qué es el sistema binario en la computación?"
        ]
    },
    "exactas": {
        nombre: "Facultad de Ciencias Exactas y Naturales",
        preguntas: [
            "¿Cuál es el valor aproximado del número Pi?", 
            "¿En qué consiste el proceso de la fotosíntesis?",
            "¿Cuáles son las tres leyes del movimiento de Newton?",
            "¿Qué significan las siglas ADN y cuál es su función?",
            "¿Qué diferencia a una célula eucariota de una procariota?",
            "¿Qué es la tabla periódica de los elementos?",
            "¿Qué es un agujero negro en astrofísica?",
            "¿Qué representa el Número de Avogadro en química?",
            "¿Qué indica la escala de pH?",
            "¿En qué consiste el ciclo del agua?",
            "¿Qué es la gravedad según la física clásica?",
            "¿Cuáles son las fases de la mitosis celular?",
            "¿Qué es un ecosistema?",
            "¿Qué propone la teoría de la relatividad general de Einstein?",
            "¿Qué es un enlace covalente?",
            "¿Cuáles son las leyes de la genética de Mendel?",
            "¿Cuál es la velocidad de la luz en el vacío?",
            "¿Qué es el bosón de Higgs?",
            "¿Qué diferencia hay entre masa y peso?",
            "¿Qué es la antimateria?"
        ]
    },
    "odontologia": {
        nombre: "Facultad de Odontología",
        preguntas: [
            "¿Cuántos dientes permanentes tiene un adulto promedio?", 
            "¿Qué es la caries dental y cómo se forma?",
            "¿Cuál es el tejido más duro del cuerpo humano?",
            "¿Qué es la dentina?",
            "¿Qué diferencia hay entre gingivitis y periodontitis?",
            "¿En qué consiste un tratamiento de ortodoncia?",
            "¿Qué es una endodoncia o tratamiento de conducto?",
            "¿Qué es el bruxismo y qué consecuencias tiene?",
            "¿Qué es la placa bacteriana?",
            "¿Por qué se extraen comúnmente las muelas del juicio?",
            "¿Qué función cumple el flúor en la salud dental?",
            "¿Qué es un implante dental y de qué material suele estar hecho?",
            "¿Qué es la pulpa dental?",
            "¿Cómo se forma el sarro o cálculo dental?",
            "¿Qué es la halitosis y cuáles son sus causas?",
            "¿Qué diferencia hay entre el maxilar y la mandíbula?",
            "¿Qué es una corona dental?",
            "¿Cómo actúan los agentes de blanqueamiento dental?",
            "¿Qué es la articulación temporomandibular (ATM)?",
            "¿Qué es una prótesis dental removible?"
        ]
    },
    "enfermeria": {
        nombre: "Facultad de Enfermería",
        preguntas: [
            "¿Cuáles son los cuatro signos vitales principales?", 
            "¿Cómo se mide y qué indica la presión arterial?",
            "¿Qué significan las siglas RCP y cuándo se aplica?",
            "¿Qué es el sistema de triaje en urgencias?",
            "¿Cuál es la temperatura corporal normal de un adulto?",
            "¿Qué diferencia hay entre taquicardia y bradicardia?",
            "¿Qué mide un oxímetro de pulso?",
            "¿Qué son las normas de asepsia y antisepsia?",
            "¿Qué es una vía intravenosa (IV)?",
            "¿Qué es una úlcera por presión y cómo se previene?",
            "¿En qué consiste una prueba de glucometría?",
            "¿Cuáles son los tipos de inyecciones según su vía de administración?",
            "¿Qué es el suero fisiológico y para qué se usa?",
            "¿Qué son los cuidados paliativos?",
            "¿Qué es un catéter vesical?",
            "¿Cuál es la diferencia entre esterilización y desinfección?",
            "¿Qué información básica debe contener un historial clínico?",
            "¿Qué es el shock anafiláctico?",
            "¿Cómo se realiza el cálculo de goteo para fluidoterapia?",
            "¿Cuál es el rol de enfermería en la promoción de la salud?"
        ]
    },
    "farmaceuticas": {
        nombre: "Facultad de Ciencias Farmacéuticas",
        preguntas: [
            "¿Qué es el principio activo de un medicamento?", 
            "¿Cuál es la diferencia biológica entre un virus y una bacteria?",
            "¿Por qué los antibióticos no sirven para tratar la gripe?",
            "¿Qué es un excipiente y cuál es su función?",
            "¿Qué estudia la farmacocinética?",
            "¿Qué estudia la farmacodinamia?",
            "¿Cómo funciona una vacuna en el sistema inmunológico?",
            "¿Qué diferencia hay entre un analgésico y un antipirético?",
            "¿En qué consiste el efecto placebo?",
            "¿Quién descubrió la penicilina y de dónde proviene?",
            "¿Qué es el metabolismo hepático de los fármacos?",
            "¿Qué significa el término 'posología'?",
            "¿Cómo actúan los medicamentos antiinflamatorios no esteroideos (AINEs)?",
            "¿Cuáles son las vías de administración de medicamentos más comunes?",
            "¿Qué es una interacción medicamentosa?",
            "¿Qué es la bioequivalencia de los medicamentos genéricos?",
            "¿Cuál es la diferencia entre una cápsula y una tableta?",
            "¿Qué es la dosis letal media (DL50)?",
            "¿Qué es la farmacovigilancia?",
            "¿Qué es la resistencia antimicrobiana?"
        ]
    },
    "medicina": {
        nombre: "Facultad de Medicina",
        preguntas: [
            "¿Cuál es el órgano más grande del cuerpo humano?", 
            "¿Qué función principal tiene el corazón en el sistema circulatorio?",
            "¿Qué función cumple la insulina y qué órgano la produce?",
            "¿Cómo está dividido estructuralmente el sistema nervioso?",
            "¿Cuál es la función de los glóbulos rojos o eritrocitos?",
            "¿Qué es la homeostasis en fisiología?",
            "¿Qué son los anticuerpos y qué células los producen?",
            "¿Qué es el miocardio?",
            "¿En qué consiste la sinapsis neuronal?",
            "¿Qué diferencia anatómica y funcional hay entre una arteria y una vena?",
            "¿Qué glándula es considerada la 'glándula maestra' del sistema endocrino?",
            "¿Cuál es la función principal del sistema linfático?",
            "¿Qué es la médula espinal y cuál es su función?",
            "¿Qué estudia la epidemiología?",
            "¿Qué diferencia hay entre un signo y un síntoma clínico?",
            "¿Cuál es la función de los riñones en el cuerpo humano?",
            "¿Qué es el sistema inmunológico?",
            "¿Cuáles son los diferentes tipos de tejido muscular?",
            "¿Qué es el ADN mitocondrial?",
            "¿En qué consiste el proceso de hematopoyesis?"
        ]
    },
    "sociales": {
        nombre: "Facultad de Ciencias Sociales y Educación",
        preguntas: [
            "¿A quién se le considera uno de los padres fundadores de la sociología?", 
            "¿Qué diferencia hay entre pedagogía y didáctica?",
            "¿En qué consiste la teoría del constructivismo en educación?",
            "¿Qué es la estratificación social?",
            "¿Cómo afecta la globalización a las culturas locales?",
            "¿Qué es el currículo en el ámbito educativo?",
            "¿Cuál es la diferencia entre evaluación formativa y sumativa?",
            "¿Qué es la 'zona de desarrollo próximo' según Vygotsky?",
            "¿Cuáles son las etapas del desarrollo cognitivo según Jean Piaget?",
            "¿Qué es la movilidad social?",
            "¿Cómo se define el concepto de cultura en las ciencias sociales?",
            "¿Qué es la inclusión educativa?",
            "¿Qué estudia la demografía?",
            "¿Cuál es la diferencia entre educación formal, no formal e informal?",
            "¿Qué es el proceso de socialización?",
            "¿En qué consiste el concepto de hegemonía cultural?",
            "¿Qué es la investigación acción participativa?",
            "¿Qué es la alfabetización mediática?",
            "¿Cuáles son los agentes de socialización primarios y secundarios?",
            "¿Qué impacto tiene el nivel socioeconómico en el rendimiento escolar?"
        ]
    },
    "humanas": {
        nombre: "Facultad de Ciencias Humanas",
        preguntas: [
            "¿Qué campo de estudio abarca la antropología?", 
            "¿En qué año se considera convencionalmente que cayó el Imperio Romano de Occidente?",
            "¿Qué fue el Renacimiento y dónde se originó?",
            "¿Cuáles fueron los principales ideales de la Revolución Francesa?",
            "¿Cuál es la diferencia fundamental entre ética y moral?",
            "¿Qué estudia la lingüística?",
            "¿Cuál es la diferencia entre la arqueología y la paleontología?",
            "¿En qué consiste la corriente filosófica del existencialismo?",
            "¿Qué diferencia hay entre un mito y una leyenda?",
            "¿Qué es la epistemología?",
            "¿Qué características definen al sistema feudal?",
            "¿Qué era una 'polis' en la Antigua Grecia?",
            "¿Qué fue el movimiento de la Ilustración en el siglo XVIII?",
            "¿A qué se le llamó la 'Guerra Fría'?",
            "¿Qué estudia la semiótica?",
            "¿Quién es el fundador del psicoanálisis?",
            "¿Qué es el método etnográfico?",
            "¿Qué es la ontología dentro de la filosofía?",
            "¿Cuáles fueron las principales culturas precolombinas en Mesoamérica?",
            "¿Qué plantea el relativismo cultural?"
        ]
    },
    "derecho": {
        nombre: "Facultad de Derecho y Ciencias Políticas",
        preguntas: [
            "¿Qué es una Constitución Política y cuál es su jerarquía legal?", 
            "¿Cuáles son las tres ramas tradicionales del poder público?",
            "¿Qué diferencia fundamental hay entre el Derecho Penal y el Derecho Civil?",
            "¿Qué se entiende por 'Estado de Derecho'?",
            "¿Qué es la soberanía nacional?",
            "¿Qué es la jurisprudencia?",
            "¿En qué consiste el recurso de Hábeas Corpus?",
            "¿Qué significa el principio de 'presunción de inocencia'?",
            "¿Qué establece la teoría del contrato social de Rousseau?",
            "¿Cuál es la función principal de la Organización de las Naciones Unidas (ONU)?",
            "¿Qué diferencia hay entre dolo y culpa en el derecho penal?",
            "¿Qué es el derecho internacional humanitario?",
            "¿Qué es el sufragio universal?",
            "¿En qué consiste el sistema legislativo bicameral?",
            "¿Qué es un plebiscito o referéndum?",
            "¿Qué es una acción de tutela o recurso de amparo?",
            "¿Qué diferencia hay entre un delito y una contravención?",
            "¿Qué es el derecho laboral y qué protege?",
            "¿Qué es un tratado internacional?",
            "¿Qué se entiende por 'división de poderes' y quién propuso esta teoría moderna?"
        ]
    },
    "rectoria": {
        nombre: "Rectoría",
        preguntas: [
            "¿Cuáles son los ejes estratégicos del plan de desarrollo institucional?",
            "¿Cómo se promueve la investigación desde la rectoría?",
            "¿Qué medidas se toman para la internacionalización de la institución?",
            "¿Cómo se asegura la calidad académica a nivel macro?",
            "¿Qué retos financieros enfrenta la universidad actualmente?",
            "¿Cómo se fortalece la relación entre la universidad y la sociedad?",
            "¿Qué papel juega la innovación tecnológica en la administración?",
            "¿Cuáles son las políticas de inclusión y diversidad?",
            "¿Cómo se gestionan las alianzas estratégicas interinstitucionales?",
            "¿Qué impacto tiene la universidad en el desarrollo regional?"
        ]
    },
    "rep1": {
        nombre: "Representante Docente 1",
        preguntas: [
            "¿Cuáles son las principales propuestas para mejorar el bienestar docente?",
            "¿Cómo planea fomentar la investigación entre los profesores?",
            "¿Qué medidas propone para la actualización pedagógica?",
            "¿Cómo se garantizará la participación docente en la toma de decisiones?",
            "¿Cuál es su visión sobre la evaluación docente?"
        ]
    },
    "rep2": {
        nombre: "Representante Docente 2",
        preguntas: [
            "¿Qué estrategias propone para fortalecer el vínculo universidad-empresa?",
            "¿Cómo abordará la carga administrativa de los docentes?",
            "¿Qué planes tiene para la internacionalización del cuerpo docente?",
            "¿Cuál es su propuesta para mejorar la infraestructura tecnológica?",
            "¿Cómo promoverá la equidad y diversidad en el campus?"
        ]
    }
};

let preguntasActuales = [];
let menuOrigenActual = ""; // Para saber a dónde volver

const pantallaMenuPrincipal = document.getElementById('pantalla-menu-principal');
const pantallaSubmenuDecanaturas = document.getElementById('pantalla-submenu-decanaturas');
const pantallaSubmenuRepresentantes = document.getElementById('pantalla-submenu-representantes');
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
    pantallaSubmenuRepresentantes.style.display = 'none';
    pantallaRuleta.style.display = 'none';
}

function mostrarSubmenuDecanaturas() {
    ocultarTodasLasPantallas();
    pantallaSubmenuDecanaturas.style.display = 'block';
}

function mostrarSubmenuRepresentantes() {
    ocultarTodasLasPantallas();
    pantallaSubmenuRepresentantes.style.display = 'block';
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
    
    tituloFacultad.innerText = categoriaElegida.nombre;
    cajaPregunta.innerText = "Haz clic en 'Girar Ruleta' para obtener una pregunta...";

    ocultarTodasLasPantallas();
    pantallaRuleta.style.display = 'block';
}

// FUNCIÓN: Volver al menú anterior
function volverAtras() {
    ocultarTodasLasPantallas();
    if (menuOrigenActual === 'submenu-decanaturas') {
        pantallaSubmenuDecanaturas.style.display = 'block';
    } else if (menuOrigenActual === 'submenu-representantes') {
        pantallaSubmenuRepresentantes.style.display = 'block';
    } else {
        pantallaMenuPrincipal.style.display = 'block';
    }
}

// FUNCIÓN: El efecto de girar la ruleta y sacar pregunta única
function girarRuleta() {
    // Si ya se acabaron las preguntas
    if (preguntasActuales.length === 0) {
        cajaPregunta.innerText = "¡Se han agotado todas las preguntas de esta categoría! Vuelve atrás para elegir otra.";
        return;
    }

    botonGirar.disabled = true;
    botonVolver.disabled = true;
    
    let tiempo = 0;
    
    const intervalo = setInterval(() => {
        // Muestra preguntas al azar muy rápido
        const azarTemporal = Math.floor(Math.random() * preguntasActuales.length);
        cajaPregunta.innerText = preguntasActuales[azarTemporal];
        tiempo += 100;

        // Después de 3 segundos se detiene en una definitiva
        if (tiempo >= 3000) {
            clearInterval(intervalo);
            
            // Elegimos al ganador final
            const indiceGanador = Math.floor(Math.random() * preguntasActuales.length);
            const preguntaGanadora = preguntasActuales[indiceGanador];
            
            cajaPregunta.innerText = preguntaGanadora;
            preguntasActuales.splice(indiceGanador, 1);

            botonGirar.disabled = false;
            botonVolver.disabled = false;
        }
    }, 100);
}