const database = [
  [
    {
      id: 1,
      name: 'Bio Impressora portátil Bioprint FirstAid',
      description:
        'A Bioprint FirstAid Handheld Bioprinter (Bioprint FirstAid) é um projeto de demonstração de tecnologia que visa verificar uma bioimpressora portátil para aplicação na Terra e no espaço.',
      country: 'germany',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/jsc2021e063287.jpg',
      status: 'intacto',
    },
    {
      id: 2,
      name: 'Detector de vazamentos',
      description:
        'O projeto de detecção e localização de vazamento de tinta com base em inferência bayesiana rápida a partir de uma rede de conjuntos de sensores ultrassônicos em ambiente de microgravidade (Detecção de vazamentos sem fio) demonstra um novo sistema de detecção de vazamentos capaz de localizar vazamentos de pressão na estrutura da Estação Espacial Internacional (ISS).',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss050e035313.jpg',
      status: 'intacto',
    },
    {
      id: 3,
      name: 'Aplicador de bomba usando eletroímãs pulsados para realocação de líquidos (PAPELL)',
      description:
        'O PAPELL examina o uso de ferrofluidos e eletroímãs para criar um mecanismo de transporte de fluido que funciona sem nenhum componente mecânico.',
      country: 'germany',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss057e105652.jpg',
      status: 'avaria',
    },
    {
      id: 4,
      name: 'Gerenciamento logístico autônomo habilitado para RFID (REALM)',
      description:
        'O RFID, ou identificação por radiofrequência, é uma tecnologia sem fio com potencial para economia significativa e maior confiabilidade e segurança nas operações espaciais.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss050e041985.jpg',
      status: 'intacto',
    },
    {
      id: 5,
      name: 'Programa de Teste Espacial - Comunicação por 6 raios X de Houston (STP-H6-XCOM)',
      description:
        'O espaço de investigação do Programa de Teste Espacial-Houston 6-X-Ray (STP-H6-XCOM) qualifica uma nova fonte de raios-X modulada que produz um feixe de raios-X que liga e desliga em prazos de nanossegundos, que são muito mais rápidos que as fontes tradicionais de raios-X.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/XCOM%20Build.png',
      status: 'avaria',
    },
    {
      id: 6,
      name: 'Observação de Eletrodeposição em microgravidade',
      description:
        'A eletrodeposição é um processo pelo qual um material é depositado sobre uma superfície condutora. Na gravidade da Terra, a convecção afeta o padrão do material. Sendo assim, a observação de eletrodeposição em microgravidade examina o papel da convecção durante este processo em microgravidade. Espera-se que a eliminação dos efeitos da gravidade resulte em um crescimento material mais organizado e rápido.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss059e063749.jpg',
      status: 'intacto',
    },
    {
      id: 7,
      name: 'Qucopartex - Precious',
      description:
        'Este experimento observa os efeitos da entropia fora da atmosfera da Terra. Materiais com estruturas cristalinas densas e intensas são expostos a um ambiente espacial para observar até mesmo pequenas mudanças e diferenças entre os materiais a bordo da Estação Espacial Internacional (ISS) e os da Terra.',
      country: 'slovenia',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss056e078370.jpg',
      status: 'avaria',
    },
    {
      id: 8,
      name: 'Queda Cortada em Anel',
      description:
        'A investigação do Ring Sheared Drop examina a formação e o fluxo de amilóides sem as complicações associadas às paredes sólidas de um recipiente, porque na microgravidade, a tensão superficial fornece contenção do líquido. Os amilóides estão associados a doenças neurodegenerativas, como o Alzheimer. Os resultados podem contribuir para uma melhor compreensão dessas doenças, bem como para o desenvolvimento de materiais avançados.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/jsc2019e034530.jpg',
      status: 'avaria',
    },
  ],
  [
    {
      id: 9,
      name: 'Derretimento destacado e crescimento de vapor de InI (iodeto de índio) em SUBSA',
      description:
        'A maioria dos dispositivos eletrônicos e de detecção de luz necessários para telefones celulares, laptops, espectrômetros e produtos similares são feitos de cristais únicos. Este experimento usa técnicas de fusão e vapor destacado para crescer seis cristais de qualidade de referência de iodeto de índio (InI), que é barato, fácil de crescer e o único detector semicondutor material que não contém elementos tóxicos.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss058e0281422.jpg',
      status: 'intacto',
    },
    {
      id: 10,
      name: 'Avaliação da estabilidade a longo prazo de ingredientes farmacêuticos em uma matriz de excipiente para uso em uma futura fabricação em órbita potencial',
      description:
        'A avaliação da estabilidade a longo prazo de ingredientes farmacêuticos em uma matriz de excipiente para uso em potencial fabricação futura em órbita (estabilidade de ingrediente de excipiente farmacêutico em microgravidade) avalia os efeitos da microgravidade e da radiação na estabilidade a longo prazo de medicamentos em sua matriz de excipiente.',
      country: 'united_states',
      image_url:
        'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Images/iss063e107043.jpg',
      status: 'intacto',
    },
  ],
];

const avatar = document.getElementById('avatar');
avatar.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const selectedProject = window.localStorage.getItem('selectedLink');
const selectedPage = window.localStorage.getItem('selectedPage');
const project = database[selectedPage - 1].find((project) => project.name === selectedProject);

const name = document.getElementById('name');
name.innerText = project.name;

const country = document.getElementById('country');
country.innerHTML = `<img src='./assets/${project.country}.png' class="country"/>`;

const status = document.getElementById('status');
status.innerHTML = `<p>${
  project.status === 'intacto'
    ? '<i class="fa-solid fa-circle-check"></i>'
    : '<i class="fa-solid fa-circle-xmark"></i>'
} ${project.status}</p>`;
status.style.backgroundColor =
  project.status === 'intacto' ? '#4ADE80' : '#F87171';

const description = document.getElementById('description');
description.innerText = project.description;

const image = document.getElementById('image');
image.innerHTML = `<img src='${project.image_url}' alt="${project.name}"/>`;

const repair = document.getElementById('repair');
repair.style.display = 'none';

if (project.status !== 'intacto') {
  repair.style.display = 'inline';
  const button = document.getElementById('button');
  const repairSteps = [];
  button.addEventListener('click', () => {
    const input = document.getElementById('input');
    const text = input.value;
    repairSteps.push(`<p> <i class="fa-light fa-square"></i> ${text}</p>`);

    const steps = document.getElementById('repairSteps');
    steps.innerHTML = repairSteps.join('');
  });
}
