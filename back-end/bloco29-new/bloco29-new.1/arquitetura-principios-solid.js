// ============================== NodeJS - Arquitetura - Princípios SOLID
// -- > CONTEÚDO do dia - bloco29-new.1 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que exatamente é SOLID?
// ### Single responsibility principle
// ### Open/Closed principle
// ### Dependency Inversion Principle
// ### Conclusão

// **** Conteúdos

// >>>> O que exatamente é SOLID?
// - é um acrônimo para cinco princípios e que de fato, se aplicados de maneira conjunta e inteligente, geram solidez e durabilidade para sua arquitetura como um todo.
https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf

// - #S ingle responsibility principle ( Princípio da responsabilidade única ): uma classe ou função deve ter uma, e apenas uma, tarefa a realizar dentro do seu código;
// - #O pen/Closed principle ( Princípio aberto/fechado ): você deve ser capaz de estender um comportamento de uma função sem modificar seus comportamentos já existentes;
// - *L iskov substitution principle ( Princípio de substituição de Liskov ): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa;
// - *I nterface segregation principle ( Princípio da segregação da interface ): muitas interfaces de clientes específicas são melhores do que uma para todos os propósitos;
// - #D ependency inversion principle ( Princípio da inversão da dependência ): quem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.

// >>>> Single responsibility principle
// - princípio da responsabilidade única .

// # Em uma nova pasta, inicie uma aplicação utilizando:
// > npm init -y ;
// # Instale as dependências que vamos utilizar em desenvolvimento:
// > npm i -D eslint-config-trybe-backend ;
// # Adicione um arquivo ".eslintrc.json" na raiz do projeto, onde estenderemos o uso do ESLint utilizando as normas e padrões dos projetos de back-end aqui na Trybe:

{
  "extends": ["trybe-backend"]
}

// # instale também as dependências de testes:
// > npm i -D mocha chai sinon ;
// # Adicione um script para rodarmos o test e para o lint nesse projeto:

...
"scripts": {
  "test": "mocha ./tests/**/*$NAME*.{test,spec}.js --exit",
  "lint": "eslint --no-inline-config --ext .js --no-error-on-unmatched-pattern -c .eslintrc.json ."
},
...

// # Inicie um arquivo index.js e crie uma pasta tests para validarmos nossos exemplos;
// # Adicione um arquivo .eslintignore na raiz do projeto, com o seguinte conteúdo:

// Suponha que você deve construir uma aplicação para gerenciar a situação de estudantes numa escola. A sua primeira tarefa é criar uma função que, ao ser chamada, determina a aprovação ou não de uma pessoa estudante e atualiza seu status no banco de dados como Aprovada ou Reprovada . Além disso, as notas marcadas de 0% a 100% (0.0 a 1.0) devem ser convertidas para os conceitos de A a F.

// ./index.js

function setApproved(students) {
  const studentsWithLetterGrade = students.map((student) => {
    const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
      if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
      else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
      else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
      else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
      else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
      else discipline.letterGrade = 'F';

      return discipline;
    });

    return {
      name: student.name,
      disciplines: disciplinesWithLetterGrade,
    };
  });

  const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
    disciplines.every((discipline) => discipline.grade > 0.7));

  /* Finja que o console.log é algo que atualiza uma base de dados */
  approvedStudents.map(({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  });
}

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

// Rode o linter utilizando o comando npm run lint .
// # 11 erros encontrados

// Vamos começar separando esses três comportamentos em funções diferentes:

// ./index.js
/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(({ name, grade }) => {
    let letterGrade;
    if (grade >= 0.9) letterGrade = 'A';
    else if (grade >= 0.8) letterGrade = 'B';
    else if (grade >= 0.7) letterGrade = 'C';
    else if (grade >= 0.6) letterGrade = 'D';
    else if (grade >= 0.1) letterGrade = 'E';
    else letterGrade = 'F';
    return { name, grade, letterGrade };
  })});
/* "Determinar" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);
/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};
function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}
/* Exemplo de execução */
// ...
/*
  Não se esqueça que é necessário exportar ao final as
  funções para que você possa testa-las de forma unitária
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};

// o que fizemos aqui foi jogar cada parte da lógica para uma função diferente.

// testar unitariamente se a função approvedStudents está se comportando conforme esperado:

// ./tests/unit/approvedStudents.test.js
const { expect } = require('chai');
const { approvedStudents } = require('../../index');
const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};
describe('Testando a função "approvedStudents"', function () {
  describe('quando todas as notas são maior que 0.7', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const result = approvedStudents({ disciplines });
      expect(result).to.be.equal(true);
    });
  });
  describe('quando todas as notas são menor que 0.7', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const result = approvedStudents({ disciplines });
      expect(result).to.be.equal(false);
    });
  });
  describe('quando parte das notas são menor que 0.7', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const result = approvedStudents({ disciplines });
      expect(result).to.be.equal(false);
    });
  });
});

// testar de maneira isolada a função "percentageGradesIntoLetters":

// ./tests/unit/percentageGradesIntoLetters.test.js

const { expect } = require('chai');
const { percentageGradesIntoLetters } = require('../../index');
const disciplinesDict = {
  mathematics: 'matemática',
};
describe('Testando a função "percentageGradesIntoLetters"', function () {
  describe('quando a nota é maior ou igual a 0.9', function () {
    it('retorna "A"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.9 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);
      expect(letterGrade).to.be.equals('A');
    });
  });
  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
    it('retorna "B"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.8 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('B');
    });
  });
  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function () {
    it('retorna "C"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.7 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('C');
    });
  });
  describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function () {
    it('retorna "D"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.6 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('D');
    });
  });
  describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function () {
    it('retorna "E"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.1 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);
      expect(letterGrade).to.be.equals('E');
    });
  });
  describe('quando a nota é menor que 0.1', function () {
    it('retorna "F"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: 'matemática', grade: 0.05 },
        ],
      };
      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);
      expect(letterGrade).to.be.equals('F');
    });
  });
});

// Você pode testar usando o comando npm test ;

// Rode o linter utilizando o comando npm run lint para validarmos o que fizemos até agora.
// # ✖ 7 problems (7 errors, 0 warnings)
// # 3 errors and 0 warnings potentially fixable with the `--fix` option.

// # acusa a função "percentageGradesIntoLetters" de ser complexa demais. Então vamos dividi-la em partes ainda menores!

// "A função itera sobre cada pessoa estudante e a cada iteração, itera sobre todas as disciplinas delas. Para cada disciplina ela faz a conversão de porcentagem para letra e ao final monta e retorna o objeto com o nome da pessoa estudante e com suas disciplinas"

// ./index.js #percentageGradesIntoLetters
/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
  1: 'E',
  };
  const gradeKeys = Object.keys(GRADE_DICT);
  /* Função menor para remover o uso excessivo de `if{}else`s */
  const getGradeLetter = (gradeNumber) => {
    let letterGrade = 'F';
    for (let i = 0; i < gradeKeys.length; i += 1) {
      if (gradeNumber >= gradeKeys[i]) {
        letterGrade = GRADE_DICT[gradeKeys[i]];
        break;
      }
    }
    return letterGrade;
  };
  /* Coletar notas */
  const getLetterGrades = ({ name, grade }) => ({
    name,
    grade,
    letterGrade: getGradeLetter(grade)});
  /* "Converter" */
  const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
    name,
    school,
    disciplines: disciplines.map(getLetterGrades)});
  /* Exemplo de execução */
  // ...
  /*
    Vamos exportar também nossa nova função de `Coletar notas` para testes
  */
  // module.exports = {
  //   percentageGradesIntoLetters,
  //   approvedStudents,
  //   updateApprovalData,
  //   setApproved,
    getLetterGrades,
  // };

// npm run lint para validarmos o que fizemos até agora.

// Vamos também adaptar um novo teste usando o percentageGradesIntoLetters.test.js como base, para chamar diretamente a nova função getLetterGrades :

// ./tests/unit/getLetterGrades.test.js
const { expect } = require('chai');
const { getLetterGrades } = require('../../index');
const disciplinesDict = {
  mathematics: 'matemática',
};
describe('Testando a função "getLetterGrades"', function () {
  describe('quando a nota é maior ou igual a 0.9', function () {
    it('retorna "A"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);
      expect(letterGrade).to.be.equals('A');
    });
  });
  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
    it('retorna "B"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.8 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('B');
    });
  });
  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function () {
    it('retorna "C"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.7 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);
      expect(letterGrade).to.be.equals('C');
    });
  });
  describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function () {
    it('retorna "D"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.6 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);
      expect(letterGrade).to.be.equals('D');
    });
  });
  describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function () {
    it('retorna "E"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.1 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);
      expect(letterGrade).to.be.equals('E');
    });
  });
  describe('quando a nota é menor que 0.1', function () {
    it('retorna "F"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.05 };
      const {
        letterGrade,
      } = getLetterGrades(discipline);
      expect(letterGrade).to.be.equals('F');
    });
  });
});

// >>>> Open/Closed principle
// - Você deve ser capaz de estender um comportamento de uma função sem modificar seus comportamentos já existentes.


// └─# mkdir open-closed-p && cd open-closed-p
// └─# npm init -y
// └─# npm i -D eslint-config-trybe-backend
// # crie o arquivo ".eslintrc.json" na raiz do projeto
{
  "extends": ["trybe-backend"]
}
// └─# npm i -D mocha chai sinon           
// # script para rodarmos o test e para o lint nesse projeto:
...
"scripts": {
  "test": "mocha ./tests/**/*$NAME*.{test,spec}.js --exit",
  "lint": "eslint --no-inline-config --ext .js --no-error-on-unmatched-pattern -c .eslintrc.json ."
},
...
// # Inicie index.js e crie uma pasta "tests" para validarmos nossos exemplos;
// # Adicione um arquivo ".eslintignore" #tests na raiz do projeto

// - Imagine, para o nosso exemplo, o seguinte cenário: somos uma empresa que administra notas de escolas. Cada escola tem seu corte de aprovação (no nosso caso, 0.7 ). Ótimo. Fizemos nosso produto, ele funcionou, e agora uma segunda escola quer ser nossa cliente! Mas o corte de aprovação dela é 0.8 . Precisamos que nosso sistema contemple essa nova realidade. Aí fazemos assim:

// # OBS: utila o index.js anterior para a continuidade

// ./index.js
// ...
/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school});
/* "Determinar" */
const approvedStudents = ({ school, disciplines }) =>
  disciplines.every(({ grade }) =>
    (school === 'Standard' ? grade >= 0.7 : grade >= 0.8));
/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);
  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};
// ...
/* Abaixo temos o exemplo de execução com algumas adições */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];
// setApproved(students);

// - Essa solução funciona, mas não está boa! Nós tivemos que mudar nossa função para acrescentar o novo comportamento a ela! O que acontecerá quando surgir uma terceira escola? Talvez uma quarta, quinta, etc?

// - O que se deve buscar fazer é escrever o código de modo que, no futuro, você possa acrescentar comportamentos sem mudar os que já existem .

// - Isso requer que refatoremos o nosso código para deixá-lo aberto para extensões , mantendo-o fechado para modificações

// ./index.js
/* Apoio para a função `setApproved` */
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};
// ...
/* "Determinar" */
const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);
// ...
function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}

// - Observe que, agora, a nossa função approvedStudents está totalmente genérica . Quando quisermos acrescentar mais uma escola, ou duas, ou cem, basta adicionar os dados dela à nossa "base". Aqui, simulamos com o objeto SCHOOL_DATA , assim como o fizemos com o objeto GRADE_DICT , onde também estávamos com um problema com o "engessamento" da função getGradeLetter . Conseguiremos, assim, estender o nosso comportamento sem modificar a função mais. Agora ela respeita o Open/Closed !

// # Nossos testes também ficarão muito mais legíveis e genéricos quanto ao critério de aprovação:

// ./tests/unit/approvedStudents.test.js
const { expect } = require('chai');
const { approvedStudents } = require('../../index');
const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};
describe('Testando a função "approvedStudents"', function () {
  const APPROVAL_GRADE = { approvalGrade: 0.7 };
  describe('quando todas as notas são maiores que o critério de aprovação', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const result = approvedStudents(disciplines, APPROVAL_GRADE);
      expect(result).to.be.equal(true);
    });
  });
  describe('quando todas as notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const result = approvedStudents(disciplines, APPROVAL_GRADE);
      expect(result).to.be.equal(false);
    });
  });
  describe('quando parte das notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const result = approvedStudents(disciplines, APPROVAL_GRADE);
      expect(result).to.be.equal(false);
    });
  });
});

// - Dessa forma, no momento em que você está escrevendo uma função para resolver um problema, é importante se perguntar se é possível que, futuramente, essa função seja usada para resolver outros problemas similares ao atual. Se sim, se esforce para deixá-la aberta a extensões para poder mantê-la fechada a modificações

// >>>> Dependency Inversion Principle

// Usaremos a pasta "open-closed-p" como exemplo
// npm install node-fetch axios

// Suponha que você quer escrever um programa em JavaScript que faz uma requisição para a API de dad jokes . Assim sendo, você escreve o seguinte código:
https://icanhazdadjoke.com/api

// ./dipExample.js
const fetch = require('node-fetch');
const url = 'https://icanhazdadjoke.com';
const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};
const getJokes = (numberOfJokes) => {
  for (let i = 0; i < numberOfJokes; i += 1) requestWithFetch();
};
getJokes(5);
module.exports = { getJokes };

// vamos pensar na questão que está nos acompanhando por todo o dia de hoje: como podemos reusar esse código no futuro para outros contextos sem alterar o código que já existe?

// # Quem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.

// Só que nós queremos usar a nossa função getJokes numa funcionalidade nova que estamos fazendo, mas sem utilizar o fetch ! Como fazemos?
// Assim:

// ./dipExample.js
const axios = require('axios').default;
const fetch = require('node-fetch');
const url = 'https://icanhazdadjoke.com';
const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};
// const requestWithFetch = () => {
// ...
const getJokes = (numberOfJokes, jokeRequester = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};
getJokes(5, requestWithAxios);
module.exports = { getJokes };

// - Repare que, agora, quem chama a função decide qual dependência a função terá , seja o Axios ou o Fetch.

// Isso que fizemos foi a chamada "inversão de dependência". Quem usa decide qual dependência a função terá.

// Podemos escrever testes para a função da seguinte maneira:

// ./tests/unit/getJokes.test.js
const { stub } = require('sinon');
const { expect } = require('chai');
const { getJokes } = require('../../dipExample');
const requesterStub = stub();
describe('Testando a função "getJokes"', function () {
  it('"requester stub" é chamado uma vez', function () {
    getJokes(1, requesterStub);
    expect(requesterStub.calledOnce).to.be.equals(true);
  });
});

// Rode com NAME=getJokes npm test para validar seu teste.

// como a função responsável por realizar a chamada é passada via parâmetro, podemos facilmente criar um stub e passá-lo. Sem a inversão, teríamos que criar um stub de acordo com a implementação do jokeRequester , tendo que entender a lógica do código para encontrar qual a função seria utilizada (a com axios ou com fetch ) e então interceptar tal chamada para conseguir fazer o stub .

// Agora veremos na prática como funcionam os 3 princípios que vimos até o momento.
// # video

// └─# mkdir solid-conteudo && cd solid-conteudo                  1 ⨯
// └─# npm init -y
// └─# npm i -D eslint-config-trybe-backend
// # crie o arquivo ".eslintrc.json" na raiz do projeto
{
  "extends": ["trybe-backend"]
}
// └─# npm i -D mocha chai sinon           
// # script para rodarmos o test e para o lint nesse projeto:
...
"scripts": {
  "test": "mocha ./tests/**/*$NAME*.{test,spec}.js --exit",
  "lint": "eslint --no-inline-config --ext .js --no-error-on-unmatched-pattern -c .eslintrc.json ."
},
...
// # Inicie index.js e crie uma pasta "tests" para validarmos nossos exemplos;
// # Adicione um arquivo ".eslintignore" #tests na raiz do projeto

// index.js
const { default: axios } = require('axios');
async function validateConsultaCEP() {
  const cep = '666.25.670';
  const regexCEP = /^[0-9]{3}.[0-9]{2}-[0-9]{3}$/;
  const valida = regexCEP.test(cep);
  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, "");
    const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;
    const request = await axios.get(URL);
    console.log(request.data);
  }
}
validateConsultaCEP();

// agora vamos separar as responsabilidades

// index.js
const { default: axios } = require('axios');
const CIDADES = {
  cabanagem: {
    cep: '66.625-670',
  },
  bengui: {
    cep: '66.630-215',
  },
};
function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}
async function ConsultaCEP(cidade) {
  const { cep } = CIDADES[`${cidade}`];
  const valida = validaCEP(cep);
  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;
    const request = await axios.get(URL);
    console.log(request.data);
  }
}
ConsultaCEP('bengui');

// Agora vamos aplicar a inversão de dependência

// index.js
const { default: axios } = require('axios');
const CIDADES = {
  cabanagem: {
    cep: '66.625-670',
  },
  bengui: {
    cep: '66.630-215',
  },
};
function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}
async function ConsultaCEP(cidade, service) {
  const { cep } = CIDADES[`${cidade}`];
  const valida = validaCEP(cep);
  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    service(cepTratado);
  }
}
async function brasilapi(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;
  const request = await axios.get(URL);
  console.log(request.data);
};
async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  const request = await axios.get(URL);
  console.log(request.data);
};
ConsultaCEP('cabanagem', viaCEP);

// >>>> Conclusão
// - Hoje nós começamos a entender três dos cinco princípios de qualidade de código do SOLID: o princípio da responsabilidade única, o princípio aberto/fechado e o princípio da inversão de dependência. É muito importante ficar claro: esses princípios são complexos no seu entendimento e na sua aplicação, e nós hoje só começamos a arranhar as possibilidades que eles nos têm a oferecer!

// ==============================
// -- > CONTEÚDO do dia - bloco29-new.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco29-new.1 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - bloco29-new.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.1 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.1 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Arquitetura - Princípios SOLID
// ...
