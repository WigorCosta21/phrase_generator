interface phrasesByCategory {
  id: string[];
  name: string[];
  phrases: string[];
}

const data = [
  {
    id: 1,
    name: "Motivação",
    phrases: [
      "O segredo do sucesso é a constância do propósito. - Benjamin Disraeli",
      "Acredite em si mesmo e tudo será possível. - Chardin",
      "Nunca é tarde demais para ser aquilo que sempre desejou ser. - George Eliot",
      "O primeiro passo em direção ao sucesso é dado quando você se recusa a ser um refém do ambiente em que se encontra. - Mark Caine",
      "Você é mais forte do que imagina. Acredite em si mesmo e supere qualquer desafio.",
      "As maiores conquistas começam com o desejo de tentar.",
      "Não tenha medo de errar, pois é através dos erros que aprendemos e crescemos.",
      "Persistência é o caminho do êxito. - Charles Chaplin",
      "A determinação é a chave que abre a porta do sucesso.",
      "Não deixe que o medo de falhar o impeça de tentar. O verdadeiro fracasso é desistir.",
    ],
  },
  {
    id: 2,
    name: "Amor",
    phrases: [
      "O amor é a força mais poderosa do mundo.",
      "Amar é cuidar, proteger e fazer o outro feliz.",
      "O amor verdadeiro é aquele que nos faz crescer juntos.",
      "Amar é encontrar a felicidade na felicidade do outro.",
      "O amor é como uma chama que nunca se apaga, apenas fica mais forte com o tempo.",
      "Amar é aceitar o outro com todas as suas imperfeições e ainda assim vê-lo como perfeito.",
      "O amor é a ponte que liga corações distantes.",
      "O verdadeiro amor não tem limites, é infinito como o universo.",
      "Amar é entregar-se de corpo e alma, sem medo de se machucar.",
      "O amor é a resposta para todas as perguntas do coração.",
    ],
  },
  {
    id: 3,
    name: "Reflexão",
    phrases: [
      "A vida é uma jornada cheia de altos e baixos, cabe a nós aproveitar cada momento.",
      "O tempo é um recurso precioso, use-o sabiamente.",
      "As mudanças começam quando saímos da nossa zona de conforto.",
      "Aprender com os erros é a chave para o crescimento pessoal.",
      "O passado não pode ser mudado, mas o futuro está em nossas mãos.",
      "A vida é feita de escolhas, e cada escolha tem suas consequências.",
      "A gratidão transforma o que temos em suficiente.",
      "A beleza está em todos os lugares, basta saber olhar ao redor com os olhos certos.",
      "O perdão liberta tanto o ofensor quanto o ofendido.",
      "A paciência é uma virtude que nos ajuda a enfrentar os desafios da vida.",
    ],
  },
  {
    id: 4,
    name: "humor",
    phrases: [
      "A dieta do mês que vem sempre começa na segunda-feira!",
      "Eu não sou preguiçoso, só estou em modo de economia de energia.",
      "Quer saber como fazer um milionário rir? Conte a ele uma piada sobre pagar impostos.",
      "Quando tudo parecer dar errado, vá tirar um cochilo!",
      "Sou a pessoa mais indecisa do mundo, mas não tenho certeza disso.",
      "Por que a galinha atravessou a estrada? Para provar que não era um frango amarelão!",
      "Descobri que posso fazer tudo pelo meu corpo: falar sozinho, rir sozinho, dançar sozinho... é incrível!",
      "Não sou preguiçoso, apenas estou esperando que a inspiração me atinja... sentado no sofá.",
      "A melhor maneira de se lembrar do aniversário da sua esposa é esquecê-lo uma vez.",
      "As melhores piadas são como os bons vinhos: quanto mais antigas, melhores!",
    ],
  },
  {
    id: 5,
    name: "Autoconhecimento",
    phrases: [
      "Conhecer a si mesmo é o primeiro passo para a sabedoria.",
      "O autoconhecimento nos liberta das correntes da ignorância.",
      "A jornada mais importante que podemos fazer é aquela que nos leva para dentro de nós mesmos.",
      "Quando compreendemos nossas emoções, temos o poder de controlá-las.",
      "Aceitar nossas fraquezas nos torna mais fortes, pois nos dá a oportunidade de crescer.",
      "Olhar para dentro de si é descobrir um universo repleto de possibilidades.",
      "O autoconhecimento nos ajuda a tomar decisões alinhadas com nossos valores e propósitos.",
      "Perdoar a si mesmo é tão importante quanto perdoar os outros.",
      "Quando nos conhecemos, podemos transformar nossas vulnerabilidades em pontos fortes.",
      "O autoconhecimento nos torna mais conscientes das nossas escolhas e do impacto delas na nossa vida.",
    ],
  },
];

export default data;
