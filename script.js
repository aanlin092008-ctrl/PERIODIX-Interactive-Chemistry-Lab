const elements = [
["H","Hydrogen","nonmetal",1,1],["He","Helium","noble",1,18],
["Li","Lithium","alkali",2,1],["Be","Beryllium","alkaline",2,2],["B","Boron","metalloid",2,13],["C","Carbon","nonmetal",2,14],["N","Nitrogen","nonmetal",2,15],["O","Oxygen","nonmetal",2,16],["F","Fluorine","halogen",2,17],["Ne","Neon","noble",2,18],
["Na","Sodium","alkali",3,1],["Mg","Magnesium","alkaline",3,2],["Al","Aluminium","post-transition",3,13],["Si","Silicon","metalloid",3,14],["P","Phosphorus","nonmetal",3,15],["S","Sulfur","nonmetal",3,16],["Cl","Chlorine","halogen",3,17],["Ar","Argon","noble",3,18],
["K","Potassium","alkali",4,1],["Ca","Calcium","alkaline",4,2],["Sc","Scandium","transition",4,3],["Ti","Titanium","transition",4,4],["V","Vanadium","transition",4,5],["Cr","Chromium","transition",4,6],["Mn","Manganese","transition",4,7],["Fe","Iron","transition",4,8],["Co","Cobalt","transition",4,9],["Ni","Nickel","transition",4,10],["Cu","Copper","transition",4,11],["Zn","Zinc","transition",4,12],["Ga","Gallium","post-transition",4,13],["Ge","Germanium","metalloid",4,14],["As","Arsenic","metalloid",4,15],["Se","Selenium","nonmetal",4,16],["Br","Bromine","halogen",4,17],["Kr","Krypton","noble",4,18],
["Rb","Rubidium","alkali",5,1],["Sr","Strontium","alkaline",5,2],["Y","Yttrium","transition",5,3],["Zr","Zirconium","transition",5,4],["Nb","Niobium","transition",5,5],["Mo","Molybdenum","transition",5,6],["Tc","Technetium","transition",5,7],["Ru","Ruthenium","transition",5,8],["Rh","Rhodium","transition",5,9],["Pd","Palladium","transition",5,10],["Ag","Silver","transition",5,11],["Cd","Cadmium","transition",5,12],["In","Indium","post-transition",5,13],["Sn","Tin","post-transition",5,14],["Sb","Antimony","metalloid",5,15],["Te","Tellurium","metalloid",5,16],["I","Iodine","halogen",5,17],["Xe","Xenon","noble",5,18],
["Cs","Caesium","alkali",6,1],["Ba","Barium","alkaline",6,2],
["La","Lanthanum","lanthanide",6,3],["Ce","Cerium","lanthanide",6,3],["Pr","Praseodymium","lanthanide",6,3],["Nd","Neodymium","lanthanide",6,3],["Pm","Promethium","lanthanide",6,3],["Sm","Samarium","lanthanide",6,3],["Eu","Europium","lanthanide",6,3],["Gd","Gadolinium","lanthanide",6,3],["Tb","Terbium","lanthanide",6,3],["Dy","Dysprosium","lanthanide",6,3],["Ho","Holmium","lanthanide",6,3],["Er","Erbium","lanthanide",6,3],["Tm","Thulium","lanthanide",6,3],["Yb","Ytterbium","lanthanide",6,3],["Lu","Lutetium","lanthanide",6,3],
["Hf","Hafnium","transition",6,4],["Ta","Tantalum","transition",6,5],["W","Tungsten","transition",6,6],["Re","Rhenium","transition",6,7],["Os","Osmium","transition",6,8],["Ir","Iridium","transition",6,9],["Pt","Platinum","transition",6,10],["Au","Gold","transition",6,11],["Hg","Mercury","transition",6,12],["Tl","Thallium","post-transition",6,13],["Pb","Lead","post-transition",6,14],["Bi","Bismuth","post-transition",6,15],["Po","Polonium","post-transition",6,16],["At","Astatine","halogen",6,17],["Rn","Radon","noble",6,18],
["Fr","Francium","alkali",7,1],["Ra","Radium","alkaline",7,2],
["Ac","Actinium","actinide",7,3],["Th","Thorium","actinide",7,3],["Pa","Protactinium","actinide",7,3],["U","Uranium","actinide",7,3],["Np","Neptunium","actinide",7,3],["Pu","Plutonium","actinide",7,3],["Am","Americium","actinide",7,3],["Cm","Curium","actinide",7,3],["Bk","Berkelium","actinide",7,3],["Cf","Californium","actinide",7,3],["Es","Einsteinium","actinide",7,3],["Fm","Fermium","actinide",7,3],["Md","Mendelevium","actinide",7,3],["No","Nobelium","actinide",7,3],["Lr","Lawrencium","actinide",7,3],
["Rf","Rutherfordium","transition",7,4],["Db","Dubnium","transition",7,5],["Sg","Seaborgium","transition",7,6],["Bh","Bohrium","transition",7,7],["Hs","Hassium","transition",7,8],["Mt","Meitnerium","transition",7,9],["Ds","Darmstadtium","transition",7,10],["Rg","Roentgenium","transition",7,11],["Cn","Copernicium","transition",7,12],["Nh","Nihonium","post-transition",7,13],["Fl","Flerovium","post-transition",7,14],["Mc","Moscovium","post-transition",7,15],["Lv","Livermorium","post-transition",7,16],["Ts","Tennessine","halogen",7,17],["Og","Oganesson","noble",7,18]
];

const table = document.getElementById("periodic-table-grid");
const search = document.getElementById("element-search");
const info = document.getElementById("element-info");

function showElements(list) {
    table.innerHTML = "";

    list.forEach((element) => {
        const [symbol, name, category, period, group] = element;
        const number = elements.indexOf(element) + 1;

        const tile = document.createElement("button");
        tile.className = `element ${category}`;
        tile.style.gridColumn = (number >= 57 && number <= 71)
            ? number - 54
            : (number >= 89 && number <= 103)
            ? number - 86
            : group;

        tile.style.gridRow = (number >= 57 && number <= 71)
            ? 8
            : (number >= 89 && number <= 103)
            ? 9
            : period;

        tile.innerHTML = `
            <span class="number">${number}</span>
            <span class="symbol">${symbol}</span>
            <span class="name">${name}</span>
        `;

        tile.addEventListener("click", () => {
            document.querySelectorAll(".element").forEach(el => {
                el.classList.remove("selected");
            });

            tile.classList.add("selected");
            showElementInfo(element, number);
        });

        table.appendChild(tile);
    });
}

function showElementInfo(element, number) {
    const [symbol, name, category, period, group] = element;

    info.innerHTML = `
        <div class="profile-header">
            <div class="big-element ${category}">
                <span>${number}</span>
                <h1>${symbol}</h1>
                <p>${name}</p>
            </div>

            <div class="profile-title">
                <h2>${name}</h2>
                <p>${category.replaceAll("-", " ")}</p>
                <span>Period ${period} | Group ${group}</span>
            </div>
        </div>

        <div class="property-grid">
            <div class="property-card">
                <small>Atomic Number</small>
                <h3>${number}</h3>
            </div>

            <div class="property-card">
                <small>Symbol</small>
                <h3>${symbol}</h3>
            </div>

            <div class="property-card">
                <small>Period</small>
                <h3>${period}</h3>
            </div>

            <div class="property-card">
                <small>Group</small>
                <h3>${group}</h3>
            </div>
        </div>
        <div class="atom-section">
                <h3>3D Atomic Explorer</h3>
                <p>Explore the simplified atomic shell model.</p>
        <div id="atom-canvas"></div>
                <small>Educational model — not to scale.</small>
        </div>

        <div class="profile-note">
            <h3>Explore this element</h3>
            <p>Discover its atomic structure, electron configuration
            and chemical properties in PERIODIX.</p>
        </div>
    `;
    initAtom3D(number);
}

search.addEventListener("input", () => {
    const query = search.value.toLowerCase().trim();

    const filtered = elements.filter((element, index) => {
        return element[0].toLowerCase().includes(query) ||
               element[1].toLowerCase().includes(query) ||
               String(index + 1) === query;
    });

    showElements(filtered);
});

showElements(elements);
let atomAnimationId;
let atomRenderer;

function initAtom3D(atomicNumber) {
    const container = document.getElementById("atom-canvas");

    if (!container || !window.THREE) return;

    if (atomAnimationId) {
        cancelAnimationFrame(atomAnimationId);
    }

    if (atomRenderer) {
        atomRenderer.dispose();
        atomRenderer.domElement.remove();
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#080b12");

    const camera = new THREE.PerspectiveCamera(
        45,
        1,
        0.1,
        100
    );

    camera.position.set(0, 0, 6);
    camera.lookAt(0,0,0);

    atomRenderer = new THREE.WebGLRenderer({
        antialias: true
    });

    atomRenderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    container.innerHTML = "";
    container.appendChild(atomRenderer.domElement);
    let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;

const canvas = atomRenderer.domElement;

canvas.style.cursor = "grab";

canvas.addEventListener("pointerdown", (event) => {
    isDragging = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
    canvas.style.cursor = "grabbing";
    canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMouseX;
    const deltaY = event.clientY - previousMouseY;

    scene.rotation.y += deltaX * 0.01;
    scene.rotation.x += deltaY * 0.01;

    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
});

canvas.addEventListener("pointerup", () => {
    isDragging = false;
    canvas.style.cursor = "grab";
});

canvas.addEventListener("pointercancel", () => {
    isDragging = false;
    canvas.style.cursor = "grab";
});

    const width = container.clientWidth || 500;
    const height = 450;

    atomRenderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const light = new THREE.PointLight(0x38bdf8, 3);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Nucleus
    const nucleus = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x123b65
        })
    );

    scene.add(nucleus);

    // Simplified shell population for demonstration
    const capacities = [2, 8, 18, 32, 32, 18, 8];
    const colors = [
        0x38bdf8,
        0xa78bfa,
        0x34d399,
        0xfbbf24,
        0xfb7185,
        0x22d3ee,
        0xc084fc
    ];

    let remaining = atomicNumber;
    const electrons = [];
    const shells = [];

    capacities.forEach((capacity, index) => {
        if (remaining <= 0) return;

        const count = Math.min(remaining, capacity);
        remaining -= count;

        const radius = 1.3 + index * 0.85;

        const orbit = new THREE.Mesh(
            new THREE.TorusGeometry(radius, 0.012, 8, 100),
            new THREE.MeshBasicMaterial({
                color: colors[index],
                transparent: true,
                opacity: 0.65
            })
        );

        orbit.rotation.x = Math.PI / 2;
        scene.add(orbit);

        const shell = {
            radius,
            count,
            angle: index * 0.5,
            speed: 0.008 / (index + 1),
            group: new THREE.Group()
        };

        for (let i = 0; i < count; i++) {
            const electron = new THREE.Mesh(
                new THREE.SphereGeometry(0.09, 16, 16),
                new THREE.MeshStandardMaterial({
                    color: colors[index],
                    emissive: colors[index]
                })
            );

            shell.group.add(electron);
            electrons.push({ electron, shell, index: i });
        }

        shells.push(shell);
        scene.add(shell.group);
    });

    function animate() {
        atomAnimationId = requestAnimationFrame(animate);

        nucleus.rotation.y += 0.008;

        shells.forEach(shell => {
            shell.angle += shell.speed;

            shell.group.rotation.y = shell.angle;

            shell.group.children.forEach((electron, i) => {
                const angle =
                    (i / shell.count) * Math.PI * 2;

                electron.position.set(
                    shell.radius * Math.cos(angle),
                    0,
                    shell.radius * Math.sin(angle)
                );
            });
        });

        atomRenderer.render(scene, camera);
    }

    animate();
}
// PERIODIX TREND QUEST - 5 QUESTION ROUND

const trendPropertySelect = document.getElementById("trend-property");
const trendScoreDisplay = document.getElementById("trend-score");
const trendQuestionDisplay = document.getElementById("trend-question");
const trendOptionsDisplay = document.getElementById("trend-options");
const trendFeedbackDisplay = document.getElementById("trend-feedback");
const startTrendButton = document.getElementById("start-trend");
const nextTrendButton = document.getElementById("next-trend");

const trendQuestionBank = {
    radius: [
        { q: "Which has the larger atomic radius?", a: ["Lithium (Li)", "Fluorine (F)"], correct: 0, why: "Atomic radius generally decreases across a period from left to right." },
        { q: "Which has the larger atomic radius?", a: ["Sodium (Na)", "Lithium (Li)"], correct: 0, why: "Atomic radius generally increases down a group." },
        { q: "Which has the larger atomic radius?", a: ["Potassium (K)", "Sodium (Na)"], correct: 0, why: "Potassium is below sodium in Group 1." },
        { q: "Which has the larger atomic radius?", a: ["Magnesium (Mg)", "Chlorine (Cl)"], correct: 0, why: "Across Period 3, atomic radius generally decreases." },
        { q: "Which has the larger atomic radius?", a: ["Calcium (Ca)", "Magnesium (Mg)"], correct: 0, why: "Calcium is below magnesium in Group 2." }
    ],
    ionization: [
        { q: "Which has the higher first ionization energy?", a: ["Fluorine (F)", "Lithium (Li)"], correct: 0, why: "Ionization energy generally increases across a period." },
        { q: "Which has the higher first ionization energy?", a: ["Lithium (Li)", "Sodium (Na)"], correct: 0, why: "Ionization energy generally decreases down a group." },
        { q: "Which has the higher first ionization energy?", a: ["Neon (Ne)", "Sodium (Na)"], correct: 0, why: "Neon has a very high first ionization energy." },
        { q: "Which has the higher first ionization energy?", a: ["Magnesium (Mg)", "Sodium (Na)"], correct: 0, why: "Magnesium has a higher first ionization energy than sodium." },
        { q: "Which has the higher first ionization energy?", a: ["Chlorine (Cl)", "Sulfur (S)"], correct: 0, why: "Chlorine has a higher first ionization energy than sulfur." }
    ],
    electronegativity: [
        { q: "Which is more electronegative?", a: ["Fluorine (F)", "Lithium (Li)"], correct: 0, why: "Fluorine is the most electronegative element." },
        { q: "Which is more electronegative?", a: ["Fluorine (F)", "Chlorine (Cl)"], correct: 0, why: "Fluorine is more electronegative than chlorine." },
        { q: "Which is more electronegative?", a: ["Oxygen (O)", "Carbon (C)"], correct: 0, why: "Electronegativity generally increases across a period." },
        { q: "Which is more electronegative?", a: ["Chlorine (Cl)", "Sulfur (S)"], correct: 0, why: "Chlorine is more electronegative than sulfur." },
        { q: "Which is more electronegative?", a: ["Nitrogen (N)", "Carbon (C)"], correct: 0, why: "Nitrogen is more electronegative than carbon." }
    ]
};

let trendScore = 0;
let trendRoundQuestions = [];
let trendQuestionIndex = 0;

function loadTrendQuestion() {
    const question = trendRoundQuestions[trendQuestionIndex];

    trendQuestionDisplay.textContent =
        `Question ${trendQuestionIndex + 1} of 5: ${question.q}`;

    trendOptionsDisplay.innerHTML = "";
    trendFeedbackDisplay.textContent = "Choose your answer!";
    nextTrendButton.hidden = true;

    question.a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "trend-option";

        button.addEventListener("click", () => {
            checkTrendAnswer(index, question, button);
        });

        trendOptionsDisplay.appendChild(button);
    });
}

function checkTrendAnswer(selected, question) {
    const buttons = trendOptionsDisplay.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }
    });

    if (selected === question.correct) {
        trendScore += 10;
        trendScoreDisplay.textContent = trendScore;
        trendFeedbackDisplay.textContent = "Correct! +10 points. " + question.why;
    } else {
        trendFeedbackDisplay.textContent =
            "Not quite! The correct answer is " +
            question.a[question.correct] + ". " + question.why;
    }

    if (trendQuestionIndex < 4) {
        nextTrendButton.hidden = false;
    } else {
        nextTrendButton.hidden = false;
        nextTrendButton.textContent = "See Final Score";
    }
}

function finishTrendGame() {
    trendQuestionDisplay.textContent =
        `🏆 Challenge Complete! Your score: ${trendScore}/50`;

    trendOptionsDisplay.innerHTML = "";

    let message = "Keep practising. Every question helps you improve!";

    if (trendScore === 50) {
        message = "Outstanding! You're a Periodic Trends Master!";
    } else if (trendScore >= 30) {
        message = "Great work! You understand these trends well!";
    } else if (trendScore >= 10) {
        message = "Good effort! Keep learning and try again!";
    }

    trendFeedbackDisplay.textContent = message;
    nextTrendButton.hidden = true;

    startTrendButton.textContent = "Restart Game";
    startTrendButton.hidden = false;
    trendPropertySelect.disabled = false;
}

function startTrendGame() {
    const property = trendPropertySelect.value;

    trendScore = 0;
    trendQuestionIndex = 0;
    trendScoreDisplay.textContent = "0";

    trendRoundQuestions = [...trendQuestionBank[property]]
        .sort(() => Math.random() - 0.5);

    startTrendButton.hidden = true;
    nextTrendButton.hidden = true;
    nextTrendButton.textContent = "Next Question →";
    trendPropertySelect.disabled = true;

    loadTrendQuestion();
}

startTrendButton.addEventListener("click", startTrendGame);

nextTrendButton.addEventListener("click", () => {
    if (trendQuestionIndex < 4) {
        trendQuestionIndex++;
        loadTrendQuestion();
    } else {
        finishTrendGame();
    }
});

// ============================================================
// PERIODIX UPGRADE: TREND VISION, COMPARISON, MOLECULE STUDIO
// AND ELEMENT DETECTIVE
// ============================================================

// Trend Vision: explanatory directions and a clickable Period 3 strip.
const visionProperty = document.getElementById("vision-property");
const visionCaption = document.getElementById("visual-caption");
const trendArrow = document.getElementById("trend-arrow");
const arrowLabel = document.getElementById("arrow-label");
const trendExplanation = document.getElementById("trend-explanation");
const miniPeriod = document.getElementById("mini-period");
let visionDirection = "across";

const visionFacts = {
    radius: {
        across: {
            caption: "Atomic radius generally decreases from left to right.",
            arrow: "←",
            label: "Atomic radius generally increases toward the left",
            explanation: "Across a period, proton number increases while added electrons enter the same main shell. The stronger attraction from the nucleus generally pulls the electron cloud closer, so atomic radius decreases.",
            trend: "decreases"
        },
        down: {
            caption: "Atomic radius generally increases down a group.",
            arrow: "↓",
            label: "Atomic radius generally increases downward",
            explanation: "Down a group, each step adds another occupied electron shell. The outer electrons are farther from the nucleus and more shielded, so atomic radius generally increases.",
            trend: "increases"
        }
    },
    ionization: {
        across: {
            caption: "First ionization energy generally increases from left to right.",
            arrow: "→",
            label: "Ionization energy generally increases toward the right",
            explanation: "Across a period, effective nuclear attraction generally becomes stronger. It usually takes more energy to remove an outer electron, so first ionization energy increases overall.",
            trend: "increases"
        },
        down: {
            caption: "First ionization energy generally decreases down a group.",
            arrow: "↑",
            label: "Ionization energy generally increases upward",
            explanation: "Down a group, the outer electron is farther from the nucleus and shielding increases. It is generally easier to remove, so first ionization energy decreases down the group.",
            trend: "decreases"
        }
    },
    electronegativity: {
        across: {
            caption: "Electronegativity generally increases from left to right.",
            arrow: "→",
            label: "Electronegativity generally increases toward the right",
            explanation: "Across a period, atoms generally attract shared bonding electrons more strongly as effective nuclear attraction increases. Fluorine is the most electronegative element.",
            trend: "increases"
        },
        down: {
            caption: "Electronegativity generally decreases down a group.",
            arrow: "↑",
            label: "Electronegativity generally increases upward",
            explanation: "Down a group, bonding electrons are farther from the nucleus and more shielded. The attraction for a shared pair generally becomes weaker. Noble gases are usually left out of basic electronegativity trend comparisons.",
            trend: "decreases"
        }
    }
};

const periodThree = elements.filter(item => item[3] === 3);
function renderMiniPeriod() {
    if (!miniPeriod) return;
    miniPeriod.innerHTML = "";
    periodThree.forEach(item => {
        const cell = document.createElement("button");
        cell.className = `mini-element ${item[2]}`;
        cell.innerHTML = `<strong>${item[0]}</strong><small>${item[1]}</small>`;
        cell.title = `${item[1]} — Period 3`;
        cell.addEventListener("click", () => {
            const index = elements.indexOf(item);
            const tile = document.querySelectorAll(".element")[index];
            if (tile) {
                tile.click();
                document.getElementById("periodic-table").scrollIntoView({ behavior: "smooth" });
            }
        });
        miniPeriod.appendChild(cell);
    });
}
function updateTrendVision() {
    if (!visionProperty || !visionCaption) return;
    const fact = visionFacts[visionProperty.value][visionDirection];
    visionCaption.textContent = fact.caption;
    trendArrow.textContent = fact.arrow;
    arrowLabel.textContent = fact.label;
    trendExplanation.innerHTML = `<strong>Why does this happen?</strong><p>${fact.explanation}</p>`;
    document.querySelectorAll(".direction-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.direction === visionDirection);
    });
}
if (visionProperty) {
    visionProperty.addEventListener("change", updateTrendVision);
    document.querySelectorAll(".direction-btn").forEach(button => {
        button.addEventListener("click", () => {
            visionDirection = button.dataset.direction;
            updateTrendVision();
        });
    });
    renderMiniPeriod();
    updateTrendVision();
}

// Element comparison: selected reference values are deliberately labelled approximate.
const comparisonData = {
    H: { mass: "1.008", radius: "53", ie: "13.60", en: "2.20", config: "1s¹" },
    Li: { mass: "6.94", radius: "167", ie: "5.39", en: "0.98", config: "[He] 2s¹" },
    Be: { mass: "9.012", radius: "112", ie: "9.32", en: "1.57", config: "[He] 2s²" },
    C: { mass: "12.011", radius: "67", ie: "11.26", en: "2.55", config: "[He] 2s² 2p²" },
    N: { mass: "14.007", radius: "56", ie: "14.53", en: "3.04", config: "[He] 2s² 2p³" },
    O: { mass: "15.999", radius: "48", ie: "13.62", en: "3.44", config: "[He] 2s² 2p⁴" },
    F: { mass: "18.998", radius: "42", ie: "17.42", en: "3.98", config: "[He] 2s² 2p⁵" },
    Na: { mass: "22.990", radius: "190", ie: "5.14", en: "0.93", config: "[Ne] 3s¹" },
    Mg: { mass: "24.305", radius: "145", ie: "7.65", en: "1.31", config: "[Ne] 3s²" },
    Al: { mass: "26.982", radius: "118", ie: "5.99", en: "1.61", config: "[Ne] 3s² 3p¹" },
    Si: { mass: "28.085", radius: "111", ie: "8.15", en: "1.90", config: "[Ne] 3s² 3p²" },
    P: { mass: "30.974", radius: "98", ie: "10.49", en: "2.19", config: "[Ne] 3s² 3p³" },
    S: { mass: "32.06", radius: "88", ie: "10.36", en: "2.58", config: "[Ne] 3s² 3p⁴" },
    Cl: { mass: "35.45", radius: "79", ie: "12.97", en: "3.16", config: "[Ne] 3s² 3p⁵" },
    K: { mass: "39.098", radius: "243", ie: "4.34", en: "0.82", config: "[Ar] 4s¹" },
    Ca: { mass: "40.078", radius: "194", ie: "6.11", en: "1.00", config: "[Ar] 4s²" },
    Br: { mass: "79.904", radius: "94", ie: "11.81", en: "2.96", config: "[Ar] 3d¹⁰ 4s² 4p⁵" },
    I: { mass: "126.90", radius: "115", ie: "10.45", en: "2.66", config: "[Kr] 4d¹⁰ 5s² 5p⁵" }
};
const compareA = document.getElementById("compare-a");
const compareB = document.getElementById("compare-b");
const comparisonResults = document.getElementById("comparison-results");
const comparisonSymbols = Object.keys(comparisonData);
function fillCompareSelect(select, chosen) {
    if (!select) return;
    select.innerHTML = "";
    comparisonSymbols.forEach(symbol => {
        const element = elements.find(item => item[0] === symbol);
        const option = document.createElement("option");
        option.value = symbol;
        option.textContent = `${element[1]} (${symbol})`;
        select.appendChild(option);
    });
    select.value = chosen;
}
function renderComparison() {
    if (!compareA || !compareB || !comparisonResults) return;
    const a = compareA.value;
    const b = compareB.value;
    const da = comparisonData[a];
    const db = comparisonData[b];
    const rows = [
        ["Atomic mass", da.mass, db.mass, "u"],
        ["Approx. atomic radius", da.radius, db.radius, "pm"],
        ["First ionization energy", da.ie, db.ie, "eV"],
        ["Electronegativity", da.en, db.en, "Pauling"],
        ["Electron configuration", da.config, db.config, ""]
    ];
    comparisonResults.innerHTML = `
        <div class="comparison-heading"><span>${a}</span><span>PROPERTY</span><span>${b}</span></div>
        ${rows.map(row => `<div class="comparison-row"><strong>${row[1]} ${row[3]}</strong><span>${row[0]}</span><strong>${row[2]} ${row[3]}</strong></div>`).join("")}
    `;
}
if (compareA && compareB) {
    fillCompareSelect(compareA, "Na");
    fillCompareSelect(compareB, "Cl");
    compareA.addEventListener("change", renderComparison);
    compareB.addEventListener("change", renderComparison);
    renderComparison();
}

// Molecule Studio: schematic 2D structures for common, safe classroom examples.
const moleculeData = {
    water: {
        name: "Water", formula: "H₂O", shape: "Bent", bonding: "Two polar covalent O–H bonds",
        description: "One oxygen atom is bonded to two hydrogen atoms. The molecule has a bent shape, with a bond angle of about 104.5°.",
        diagram: `<svg viewBox="0 0 320 210" role="img" aria-label="Bent water molecule"><line x1="160" y1="105" x2="95" y2="55"/><line x1="160" y1="105" x2="225" y2="55"/><circle class="atom oxygen" cx="160" cy="105" r="31"/><circle class="atom hydrogen" cx="95" cy="55" r="21"/><circle class="atom hydrogen" cx="225" cy="55" r="21"/><text x="160" y="111">O</text><text x="95" y="61">H</text><text x="225" y="61">H</text></svg>`
    },
    "carbon-dioxide": {
        name: "Carbon dioxide", formula: "CO₂", shape: "Linear", bonding: "Two C=O double covalent bonds",
        description: "A carbon atom sits between two oxygen atoms. The atoms form a straight line, giving the molecule a linear shape.",
        diagram: `<svg viewBox="0 0 320 210" role="img" aria-label="Linear carbon dioxide molecule"><line x1="75" y1="105" x2="245" y2="105"/><line x1="75" y1="96" x2="245" y2="96"/><circle class="atom oxygen" cx="60" cy="100" r="31"/><circle class="atom carbon" cx="160" cy="100" r="27"/><circle class="atom oxygen" cx="260" cy="100" r="31"/><text x="60" y="106">O</text><text x="160" y="106">C</text><text x="260" y="106">O</text></svg>`
    },
    methane: {
        name: "Methane", formula: "CH₄", shape: "Tetrahedral", bonding: "Four single covalent C–H bonds",
        description: "A central carbon atom forms four single bonds to hydrogen atoms. Its three-dimensional arrangement is tetrahedral.",
        diagram: `<svg viewBox="0 0 320 210" role="img" aria-label="Schematic methane molecule"><line x1="160" y1="103" x2="160" y2="35"/><line x1="160" y1="103" x2="83" y2="155"/><line x1="160" y1="103" x2="237" y2="155"/><line x1="160" y1="103" x2="160" y2="180"/><circle class="atom carbon" cx="160" cy="103" r="28"/><circle class="atom hydrogen" cx="160" cy="30" r="19"/><circle class="atom hydrogen" cx="75" cy="160" r="19"/><circle class="atom hydrogen" cx="245" cy="160" r="19"/><circle class="atom hydrogen" cx="160" cy="185" r="19"/><text x="160" y="109">C</text><text x="160" y="36">H</text><text x="75" y="166">H</text><text x="245" y="166">H</text><text x="160" y="191">H</text></svg>`
    },
    ammonia: {
        name: "Ammonia", formula: "NH₃", shape: "Trigonal pyramidal", bonding: "Three polar covalent N–H bonds",
        description: "Nitrogen is bonded to three hydrogen atoms and has one lone pair. This gives ammonia a trigonal pyramidal shape.",
        diagram: `<svg viewBox="0 0 320 210" role="img" aria-label="Schematic ammonia molecule"><line x1="160" y1="100" x2="85" y2="155"/><line x1="160" y1="100" x2="235" y2="155"/><line x1="160" y1="100" x2="160" y2="25"/><circle class="atom nitrogen" cx="160" cy="100" r="29"/><circle class="atom hydrogen" cx="78" cy="160" r="19"/><circle class="atom hydrogen" cx="242" cy="160" r="19"/><circle class="atom hydrogen" cx="160" cy="24" r="19"/><text x="160" y="106">N</text><text x="78" y="166">H</text><text x="242" y="166">H</text><text x="160" y="30">H</text><circle class="lone-pair" cx="145" cy="55" r="4"/><circle class="lone-pair" cx="175" cy="55" r="4"/></svg>`
    }
};
const moleculeChoice = document.getElementById("molecule-choice");
function renderMolecule() {
    if (!moleculeChoice) return;
    const molecule = moleculeData[moleculeChoice.value];
    document.getElementById("molecule-name").textContent = molecule.name;
    document.getElementById("molecule-formula").textContent = molecule.formula;
    document.getElementById("molecule-shape").textContent = molecule.shape;
    document.getElementById("molecule-bonding").textContent = molecule.bonding;
    document.getElementById("molecule-description").textContent = molecule.description;
    document.getElementById("molecule-diagram").innerHTML = molecule.diagram;
}
if (moleculeChoice) {
    moleculeChoice.addEventListener("change", renderMolecule);
    renderMolecule();
}

// Element Detective: short recall game with local browser progress.
const detectiveQuestions = [
    { clue: "I am a highly reactive halogen and the most electronegative element.", answer: "Fluorine", options: ["Fluorine", "Chlorine", "Oxygen", "Neon"] },
    { clue: "I am a noble gas used in bright advertising signs. My symbol is Ne.", answer: "Neon", options: ["Nitrogen", "Neon", "Sodium", "Nickel"] },
    { clue: "I am a liquid metal at room temperature. My symbol is Hg.", answer: "Mercury", options: ["Silver", "Bromine", "Mercury", "Lead"] },
    { clue: "I am the lightest element and have one proton.", answer: "Hydrogen", options: ["Helium", "Hydrogen", "Lithium", "Carbon"] },
    { clue: "I am an alkali metal found in bananas and my symbol is K.", answer: "Potassium", options: ["Calcium", "Phosphorus", "Potassium", "Argon"] },
    { clue: "I make up much of the air and my symbol is N.", answer: "Nitrogen", options: ["Neon", "Nickel", "Nitrogen", "Sodium"] },
    { clue: "I am a transition metal with the symbol Fe.", answer: "Iron", options: ["Iodine", "Iron", "Fluorine", "Indium"] },
    { clue: "I am a noble gas with atomic number 2.", answer: "Helium", options: ["Hydrogen", "Helium", "Hafnium", "Holmium"] }
];
const guessStart = document.getElementById("guess-start");
const guessNext = document.getElementById("guess-next");
const guessClue = document.getElementById("guess-clue");
const guessOptions = document.getElementById("guess-options");
const guessFeedback = document.getElementById("guess-feedback");
const guessScoreDisplay = document.getElementById("guess-score");
const guessBestDisplay = document.getElementById("guess-best");
const guessProgressFill = document.getElementById("guess-progress-fill");
const guessProgressLabel = document.getElementById("guess-progress-label");
let guessScore = 0;
let guessIndex = 0;
let guessRound = [];
let guessAnswered = false;
let savedCorrect = Number(localStorage.getItem("periodixDetectiveCorrect") || 0);
let savedBest = Number(localStorage.getItem("periodixDetectiveBest") || 0);
function updateGuessProgress() {
    if (guessBestDisplay) guessBestDisplay.textContent = savedBest;
    if (guessProgressFill) guessProgressFill.style.width = `${Math.min(savedCorrect / 20 * 100, 100)}%`;
    if (guessProgressLabel) guessProgressLabel.textContent = `${savedCorrect} correct answers saved`;
}
function loadGuessQuestion() {
    const question = guessRound[guessIndex];
    guessAnswered = false;
    guessClue.textContent = `Clue ${guessIndex + 1} of ${guessRound.length}: ${question.clue}`;
    guessOptions.innerHTML = "";
    guessFeedback.textContent = "Choose the element you think matches the clue.";
    guessNext.hidden = true;
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "guess-option";
        button.textContent = option;
        button.addEventListener("click", () => {
            if (guessAnswered) return;
            guessAnswered = true;
            [...guessOptions.children].forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === question.answer) btn.classList.add("correct");
            });
            if (option === question.answer) {
                guessScore += 10;
                savedCorrect += 1;
                localStorage.setItem("periodixDetectiveCorrect", String(savedCorrect));
                guessFeedback.textContent = "Correct! +10 points. Great element knowledge!";
            } else {
                button.classList.add("incorrect");
                guessFeedback.textContent = `Good try. The answer is ${question.answer}. Read the clue and remember the connection.`;
            }
            guessScoreDisplay.textContent = guessScore;
            if (guessScore > savedBest) {
                savedBest = guessScore;
                localStorage.setItem("periodixDetectiveBest", String(savedBest));
            }
            updateGuessProgress();
            guessNext.hidden = false;
            guessNext.textContent = guessIndex === guessRound.length - 1 ? "Finish Round" : "Next Question";
        });
        guessOptions.appendChild(button);
    });
}
function startGuessGame() {
    guessScore = 0;
    guessIndex = 0;
    guessScoreDisplay.textContent = "0";
    guessRound = [...detectiveQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    guessStart.hidden = true;
    loadGuessQuestion();
}
if (guessStart && guessNext) {
    guessStart.addEventListener("click", startGuessGame);
    guessNext.addEventListener("click", () => {
        if (guessIndex < guessRound.length - 1) {
            guessIndex++;
            loadGuessQuestion();
        } else {
            guessClue.textContent = `Round complete! You scored ${guessScore}/50.`;
            guessOptions.innerHTML = "";
            guessFeedback.textContent = guessScore === 50 ? "Perfect round — Element Detective Master!" : "Nice effort. Replay to build your element knowledge.";
            guessNext.hidden = true;
            guessStart.hidden = false;
            guessStart.textContent = "Play Again";
        }
    });
    updateGuessProgress();
}
