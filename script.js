const timelineData = [
  {
    id: "1-4",
    label: "Semanas 1 a 4",
    size: "Microscópico a cerca de 4 mm",
    scale: "18%",
    orgaos: "Forma-se o blastocisto, ocorre a implantação no endométrio e inicia-se o disco embrionário.",
    cerebro: "Surgem as primeiras placas neurais, base do sistema nervoso.",
    movimentos: "Ainda não há movimentos perceptíveis.",
    sistemas: "Começam o tubo neural e as bases dos sistemas circulatório e digestório.",
    placenta: "O trofoblasto inicia a formação da placenta e da circulação materno-embrionária.",
    fatos: "A gravidez costuma ser datada a partir da última menstruação. A fecundação ocorre cerca de duas semanas depois."
  },
  {
    id: "5-8",
    label: "Semanas 5 a 8",
    size: "Cerca de 1,5 a 3 cm",
    scale: "24%",
    orgaos: "Coração começa a bater. Formam-se brotos dos membros, olhos e ouvidos.",
    cerebro: "O tubo neural se fecha e o encéfalo se divide em vesículas primárias.",
    movimentos: "Movimentos ainda minúsculos, não sentidos pela gestante.",
    sistemas: "Início do coração, vasos, fígado e aparelho respiratório primitivo.",
    placenta: "A placenta se organiza e passa a produzir hormônios como a hCG.",
    fatos: "Esse período é chamado organogênese: muitos órgãos principais começam a se formar."
  },
  {
    id: "9-12",
    label: "Semanas 9 a 12",
    size: "Cerca de 5 a 8 cm",
    scale: "32%",
    orgaos: "Rins, fígado e intestinos avançam. Os genitais externos começam a se diferenciar.",
    cerebro: "Aumento do volume encefálico e formação de conexões neurais iniciais.",
    movimentos: "Há movimentos espontâneos, ainda não percebidos.",
    sistemas: "O sistema urinário funciona de forma primitiva; o fígado produz células sanguíneas.",
    placenta: "A placenta assume papel crescente na troca de gases e nutrientes.",
    fatos: "Ao fim do primeiro trimestre o risco de perda gestacional espontânea diminui em relação às semanas iniciais."
  },
  {
    id: "13-16",
    label: "Semanas 13 a 16",
    size: "Cerca de 9 a 16 cm",
    scale: "40%",
    orgaos: "Ossificação avança. O feto engole líquido amniótico. Pele ainda fina.",
    cerebro: "Crescimento rápido do cérebro e início de padrões mais complexos de atividade.",
    movimentos: "Alguns movimentos podem começar a ser sentidos, especialmente em gestações posteriores.",
    sistemas: "Sistema musculoesquelético se fortalece. Timo e órgãos linfoides se desenvolvem.",
    placenta: "Circulação placentária mais estável e eficiente.",
    fatos: "Inicia-se o segundo trimestre, em geral com maior conforto relativo para muitas gestantes."
  },
  {
    id: "17-20",
    label: "Semanas 17 a 20",
    size: "Cerca de 20 a 25 cm",
    scale: "50%",
    orgaos: "Pele recoberta por verniz caseoso. Formam-se impressões digitais.",
    cerebro: "Mielinização inicial e especialização de áreas cerebrais.",
    movimentos: "Percepção fetal (chutes e giros) torna-se comum.",
    sistemas: "Sistema auditivo se aprimora. O coração já tem quatro câmaras bem definidas.",
    placenta: "A placenta cresce junto com a demanda fetal.",
    fatos: "O ultrassom morfológico do segundo trimestre costuma ser feito por volta desta fase."
  },
  {
    id: "21-24",
    label: "Semanas 21 a 24",
    size: "Cerca de 27 a 32 cm",
    scale: "58%",
    orgaos: "Pulmões produzem surfactante em quantidade ainda limitada. Sobrancelhas e cílios aparecem.",
    cerebro: "Sulcos e giros cerebrais começam a se tornar mais evidentes.",
    movimentos: "Ciclos de sono e vigília. Soluços fetais são comuns.",
    sistemas: "Amadurecimento pulmonar é um marco deste período, embora ainda incompleto.",
    placenta: "Transferência de anticorpos maternos começa a aumentar.",
    fatos: "A viabilidade extrauterina ainda é limitada e depende de cuidados intensivos especializados."
  },
  {
    id: "25-28",
    label: "Semanas 25 a 28",
    size: "Cerca de 34 a 38 cm",
    scale: "66%",
    orgaos: "Os pulmões e o sistema imunológico avançam. Gordura subcutânea aumenta.",
    cerebro: "Crescimento acelerado do córtex e das conexões sinápticas.",
    movimentos: "Movimentos mais fortes e padrões mais regulares.",
    sistemas: "Retina e pálpebras se desenvolvem. Controle de temperatura ainda imaturo.",
    placenta: "A placenta atinge grande capacidade de troca metabólica.",
    fatos: "Entra-se no terceiro trimestre. O acompanhamento do crescimento fetal ganha ainda mais importância."
  },
  {
    id: "29-32",
    label: "Semanas 29 a 32",
    size: "Cerca de 39 a 43 cm",
    scale: "74%",
    orgaos: "Ossos se consolidam, mas as suturas cranianas permanecem flexíveis para o parto.",
    cerebro: "O cérebro ganha volume e complexidade rapidamente.",
    movimentos: "O espaço fica menor, então os movimentos podem parecer mais firmes e menos amplos.",
    sistemas: "Sistema digestório praticamente pronto para receber leite após o nascimento.",
    placenta: "Continua o transporte de nutrientes, oxigênio e anticorpos.",
    fatos: "O ganho de peso fetal se acelera."
  },
  {
    id: "33-36",
    label: "Semanas 33 a 36",
    size: "Cerca de 44 a 47 cm",
    scale: "84%",
    orgaos: "Pulmões próximos da maturidade. A pele fica mais lisa.",
    cerebro: "Organização de circuitos envolvidos em respiração, sucção e regulação.",
    movimentos: "A gestante deve continuar percebendo o padrão habitual de movimentos.",
    sistemas: "Sistema imunológico recebe mais anticorpos maternos via placenta.",
    placenta: "O envelhecimento placentário fisiológico começa a ser acompanhado no pré-natal.",
    fatos: "Bebês nascidos no fim deste intervalo já têm boa chance de adaptação, com suporte se necessário."
  },
  {
    id: "37-40",
    label: "Semanas 37 a 40",
    size: "Em média 48 a 52 cm e 2,5 a 4 kg",
    scale: "96%",
    orgaos: "Órgãos principais estão maduros para a vida extrauterina.",
    cerebro: "O cérebro continua se desenvolvendo depois do nascimento.",
    movimentos: "Persistência do padrão de movimentos é um sinal importante de bem-estar.",
    sistemas: "Pulmões, coração e metabolismo se preparam para a transição do parto.",
    placenta: "A placenta completa sua função até o nascimento.",
    fatos: "A gestação a termo vai de 37 a 41 semanas. O parto pode ocorrer em qualquer momento desse intervalo."
  }
];

const nav = document.getElementById("nav");
const toggle = document.getElementById("menuToggle");
const timeNav = document.getElementById("timelineNav");
const panel = document.getElementById("timelinePanel");

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

function renderTimeline(index) {
  const item = timelineData[index];
  timeNav.querySelectorAll(".time-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
    btn.setAttribute("aria-pressed", String(i === index));
  });
  panel.innerHTML = `
    <div class="baby-size">
      <div class="baby-visual"><img src="assets/feto.svg" alt="" style="--baby-scale:${item.scale}; width:${item.scale}"></div>
      <div>
        <h3>${item.label}</h3>
        <p><strong>Tamanho aproximado:</strong> ${item.size}</p>
      </div>
    </div>
    <div class="facts">
      <div class="fact"><strong>Órgãos</strong>${item.orgaos}</div>
      <div class="fact"><strong>Cérebro</strong>${item.cerebro}</div>
      <div class="fact"><strong>Movimentos</strong>${item.movimentos}</div>
      <div class="fact"><strong>Sistemas</strong>${item.sistemas}</div>
      <div class="fact"><strong>Placenta</strong>${item.placenta}</div>
      <div class="fact"><strong>Destaque</strong>${item.fatos}</div>
    </div>
  `;
}

if (timeNav && panel) {
  timelineData.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.className = "time-btn";
    btn.type = "button";
    btn.textContent = item.label;
    btn.addEventListener("click", () => renderTimeline(index));
    timeNav.appendChild(btn);
  });
  renderTimeline(0);
}

document.querySelectorAll(".js-toggle").forEach((card) => {
  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    const willOpen = !card.classList.contains("open");
    if (card.parentElement.classList.contains("accordion")) {
      card.parentElement.querySelectorAll(".js-toggle").forEach((other) => other.classList.remove("open"));
    }
    card.classList.toggle("open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

const stepButtons = document.querySelectorAll(".step-btn");
const cells = document.querySelectorAll(".cell");
const stepText = document.getElementById("stepText");
const stepCopy = [
  "O óvulo é uma célula germinativa. Nas mulheres, os óvulos se formam ainda na vida fetal e permanecem longos anos em pausa na meiose.",
  "Na meiose, os cromossomos devem se alinhar e depois se separar de forma equilibrada para que cada célula-filha receba um conjunto haploide.",
  "Com o tempo, o aparelho de divisão celular do óvulo pode falhar com mais frequência. Isso se chama não disjunção: cromossomos irmãos não se separam corretamente.",
  "Se um gameta ficar com um cromossomo a mais e for fecundado, o embrião terá três cópias daquele cromossomo: uma trissomia.",
  "Trissomias como as dos cromossomos 21, 18 e 13 são as mais conhecidas. A idade aumenta a probabilidade, mas a maioria das gestações após os 40 não resulta em trissomia."
];

function setStep(n) {
  stepButtons.forEach((btn, i) => btn.classList.toggle("active", i === n));
  cells.forEach((cell, i) => cell.classList.toggle("active", i === n));
  if (stepText) stepText.textContent = stepCopy[n];
}

stepButtons.forEach((btn, i) => btn.addEventListener("click", () => setStep(i)));
if (stepButtons.length) setStep(0);

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

function onScroll() {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
