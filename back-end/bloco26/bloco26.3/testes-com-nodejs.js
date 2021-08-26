// ============================== Testes com NodeJS
// -- > CONTEÚDO do dia - 26.3 -- <---/ INICIO --------------------------------------//
// ==============================

// Entender o que são e para quê servem testes automatizados.
// Escrever códigos para NodeJS aplicando o conceito de TDD.
// Escrever testes utilizando ferramentas populares;
// Estruturar cenários de testes de acordo com os requisitos;
// Criar mocks de funções para testes.

// ### Conteúdo

// ### Testes não são de outro mundo!
// - É comum executar o mesmo código várias e várias vezes para ver se seu comportamento era o mesmo que esperávamos. Muitas vezes realizamos o mesmo teste alterando os dados de entrada (input) para garantir que a saída (output) era condizente com aquilo que foi codificado. E aposto que muitas das vezes o resultado não era positivo: havia faltado um if, as vezes precisava de mais um parâmetro ou até mesmo um retorno não tratado como deveria.

// ### Por que testar?
// - Existem diversos tipos de testes, cada um com suas características e objetivos.

// exemplo prático, imagine que queremos criar uma função que receba a média das notas de uma pessoa e responda se ela foi aprovada ou não segundo a seguinte regra:
// # Média  -  Situação
// # Menor  -  que 7	Reprovado
// # Igual  -  ou maior que 7	Aprovado

// O primeiro passo que precisamos dar é pensar na estrutura da nossa função:
// # Quantos e quais parâmetros ela irá esperar?
// # Qual tipo de resposta ela irá retornar?

// examples/calculaSituacao.js
function calculaSituacao() {
  if (media > 7) {
    return 'aprovado';
  }
  return 'reprovado';
}

modulo.exports = calculaSituacao;

// precisamos garantir que:
// # Se passado um valor menor que 7, por exemplo 4, a resposta deve ser "reprovado";
// # Se passado um valor maior que 7, por exemplo 9, a resposta ser "aprovado";
// # E, não podemos esquecer do "OU", sendo assim, se passado 7, a resposta deve ser "aprovado";

// Para validar esses cenários que pensamos podemos escrever algumas chamadas a nossa função:
// ./calculaSituacao.js

const calculaSituacao = require('./calculaSituacao');
console.log('Quando a média for menor que 7, retorna "reprovado":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for menor que 7, retorna "reprovado":
// Ok 🚀

console.log('Quando a média for maior que 7, retorna "aprovado":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for maior que 7, retorna "aprovado":
// Ok 🚀

console.log('Quando a média for igual a 7, retorna "aprovado":');

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for igual a 7, retorna "aprovado":
// Resposta não esperada 🚨

// ### Testes automatizados
// - Já vimos algumas outras ferramentas desse tipo em conteúdos anteriores, como o Jest e o assert.
// - Para implementar testes no back-end iremos utilizar a dupla mocha e chai . Apesar de serem duas ferramentas diferentes, elas se completam.

// # Ferramentas
npm install -D mocha chai
// Feita a instalação já podemos importá-las em um arquivo .js e escrever nossos testes.

// ### Tipos de teste
// - importante ter em mente na hora de produzir é o escopo e a interação dos testes

// # Testes unitários: Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos. Ex: Uma função com um fim específico, como uma função que soma dois números:

// ./funcoes/calculo/soma.js
// Aqui podemos escrever testes pensando somente o comportamento esperado para função `soma`
const soma = (valorA, valorB) => valorA + valorB;

module.exports = soma;

// # Testes de integração: Trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles. Ex: Uma função de calculadora que usa funções menores que eu posso testar isoladamente/ de forma unitária:

// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

const { soma, subtracao, multiplicacao, divisao } = require("./calculo");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      soma(valorA, valorB);
      break;
    case "subtracao":
      subtracao(valorA, valorB);
      break;
    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;
    case "divisao":
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};

module.exports = calculadora;
// - Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações

// # Testes de Ponto-a-ponto: Chamados também de Fim-a-fim (End-to-End; E2E), esses testes pressupõe um fluxo de interação completo com a aplicação, de um ponto a outro: Aqui, poderíamos pensar uma API que utiliza nossa calculadora (assim como diversas outras funções mais complexas)

// Um exemplo prático disso, são os avaliadores de projetos de front-end: Eles pressupõe que toda cadeia de recursos deva estar funcionando para correta renderização das páginas. O que é avaliado com interações de um ponto a outra dessa aplicação (Que são os requisitos, na prática).

// ### Escrevendo testes
// - Para exemplificar o processo de escrita de código vamos retomar o exemplo com a função calculaSituacao , que vimos anteriormente.

// - O primeiro passo é compreender, através dos requisitos, a estrutura que desejamos ter e os comportamentos esperados.

// # Sobre a estrutura:
// - Nossa função deverá receber um parâmetro "media";
// - Responder com "reprovado" ou "aprovado".

// # Sobre os comportamentos esperados:
// 1 - Se passado um valor menor que 7, por exemplo 4, a resposta deve ser "reprovado"; 
// 2 - Se passado um valor maior que 7, por exemplo 9, a resposta ser "aprovado";
// 3 - E, não podemos esquecer do "OU", sendo assim, se passado 7, a resposta deve ser "aprovado";

// Estruturando testes com o Mocha
// - O mocha é um framework de testes para JS, ele nos ajuda a arquitetar os testes, nos fornecendo a estrutura e interface para escrevermos os testes.

// O mocha nos fornece duas palavras reservadas o 'describe' e o 'it'.
// # 'describe' nos permite adicionar uma descrição para um teste específico ou um grupo de testes.
// # 'it' nos permite sinalizar exatamente o cenário de teste que estamos testando naquele ponto.

// Relembrando os testes que escrevemos "na mão", o mocha substitui aqueles logs que utilizamos para descrever cada teste:
console.log('Quando a média for maior que 7, retorna "aprovado":');

// - como podemos fazer isso com a ajuda do mocha . Esse mesmo cenário 1 , utilizando describe para descrever o cenário ficaria assim:
describe('Quando a média for menor que 7', () => {
  //
});
// o describe aceita dois parâmetros: o primeiro é a descrição e o segundo uma função para executar o cenário de teste.

// - Descrito nosso comportamento, vamos adicionar o que será testado de fato. Para isso, temos o 'it':
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});
// A sintaxe do it é bem semelhante à do describe : ela aceita uma string, qual o comportamento a ser testado, e uma função que executa os testes de fato.

// ### Aferindo testes com o Chai
// - nos fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.

// - Para de fato testar nossa função precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos.
const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// Essa validação é o que chamamos de assertion , "asserção" ou, em alguns casos, "afirmação"

// Usaremos a interface expect do chai em nossos exemplos, que significa de fato o que é esperado para determinada variável:
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');
// estamos chamando nossa função e, logo em seguida, afirmamos que seu retorno, armazenado na constante resposta , deve ser igual a ( equals ) 4.

// Vamos ver como fica nosso cenário de teste inteiro com mocha + chai:

// # tests/calculaSituacao.js
const { expect } = require('chai');
const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});

// - Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético. Por exemplo o 'to' e o 'be', que nos permite escrever nossa assertion da seguinte maneira:

// # tests/calculaSituacao.js
const { expect } = require('chai');
const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

// ### Executando o teste
// - precisamos criar nosso pacote node para incluirmos os scripts necessários em package.json

// # npm init

// Teste escrito, vamos ver como executá-lo.

// mocha é o responsável por executar nossos testes.

// vamos adicionar um novo script ao nosso package.json , que chama o mocha e informa um arquivo ou diretório de testes:
// package.json
{
  // ...
    "scripts": {
      "start": "node index.js",
      "test": "mocha tests"
    },
  // ...
  }
// Dessa forma, não precisamos instalar nada globalmente, e para executar nosso teste basta rodar em nosso terminal o script test, que irá executar o comando mocha tests utilizando o módulo instalado:

npm run test
// Ou simplesmente
npm test

// ### Testando todos os cenários

// # tests/calculaSituacao.js
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  });
});

// ### TDD - Transformando requisitos em testes
// - (Test Driven Development), tradução, Desenvolvimento Orientado a Testes. Esse metodologia é bastante difundida e pode trazer muitos benefícios para o desenvolvimento.

// A prática do TDD em começar a escrever os testes que traduzem e validam os comportamentos esperados para aquele código antes de começar a implementação.
// - 1° precisamos interpretar os requisitos, pensando nos comportamentos que iremos implementar e na estrutura do código: se será uma função, um módulo, quais os inputs, os outputs, etc..
// - Tendo isso em mente, começamos a escrever os testes, criamos a estrutura de describes e its que vimos.
// - Depois, escrevemos as asserções. Perceba que antes mesmo de ter qualquer código, já iremos criar chamadas a esse código, o que significa que nossos testes irão falhar. Não se preocupe, pois essa é exatamente a ideia nesse momento.
// - Agora que já temos os testes criados, vamos a implementação do nosso código. A ideia é escrever os códigos pensando nos testes e, conforme vamos cobrindo os cenários, nossos testes que antes quebravam começam a passar.

// ### Um pouco mais de testes
// - Escreveremos uma função que lê o conteúdo de um arquivo. Essa função:

// - Receberá um parâmetro com o nome do arquivo a ser lido. Esse arquivo deverá estar na pasta io-files ;
// - Caso o arquivo solicitado exista, responderá uma string com o conteúdo do arquivo;
// - Caso o arquivo solicitado não exista, deverá responder null .

// # vamos criar um novo diretório raiz para receber o nosso pacote node e instalar nossas ferramentas de testes:

// mkdir examples2
// cd examples2

// # Criando e entrando no diretório do nosso projeto
// mkdir io-test && cd io-test

// # Iniciando o npm
// npm init 

// # Instalando as ferramentas de testes
// npm install --save-dev mocha chai

// - Agora basta adicionar o seguinte script em seu package.json:
// # io-test/package.json
{
  //
  "scripts": {
    "start": "node index.js",
    "test": "mocha test.js"
  },
  //
}

// ### Mocha
// Começaremos estruturando os requisitos em forma de testes com o mocha:

// # io-test/test.js
describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        //
      });

      it('é igual ao conteúdo do arquivo', () => {
        //
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a "null"', () => {
        //
      });
    });
  });
});

// ### Chai
// Em seguida vamos adicionar as asserções com o chai:

// # io-test/test.js
const { expect } = require('chai');
const leArquivo = require('./leArquivo');
const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});
// Aqui utilizamos uma nova asserção do chai, o 'a', que validará o "tipo" daquele retorno. "espera a resposta ser uma string" (ou expect response to be a string).

// precisamos criar o arquivo que irá conter a função. Vamos começar com uma função vazia apenas para conseguir importá-la no arquivo de teste:

// # io-test/leArquivo.js
module.exports = () => {
  //
}

// Agora vamos rodar o teste e ver o resultado:
// # npm test ou npm run test
> io-test@1.0.0 test
> mocha test.js

leArquivo
  Quando o arquivo existe
    a resposta
      1) é uma string
      2) é igual ao conteúdo do arquivo
  Quando o arquivo não existe
    3) a resposta é igual a "null"

0 passing (149ms)
3 failing

1) leArquivo
      Quando o arquivo existe
        a resposta
          é uma string:
    AssertionError: expected undefined to be a string
    at Context.<anonymous> (test.js:11:32)                  
    at processImmediate (internal/timers.js:461:21)         
                                                            
2) leArquivo
      Quando o arquivo existe
        a resposta
          é igual ao conteúdo do arquivo:
    AssertionError: expected undefined to equal 'VQV com TDD'
    at Context.<anonymous> (test.js:15:32)                  
    at processImmediate (internal/timers.js:461:21)         
                                                            
3) leArquivo
      Quando o arquivo não existe
        a resposta é igual a "null":
    AssertionError: expected undefined to equal null
    at Context.<anonymous> (test.js:24:30)                  
    at processImmediate (internal/timers.js:461:21)

// ### Implementação

// # io-test/leArquivo.js
const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;

// Após a implementação desse código um dos testes já passa ser executado com sucesso:
> io-test@1.0.0 test
> mocha test.js

leArquivo
  Quando o arquivo existe
    a resposta
      1) é uma string
      2) é igual ao conteúdo do arquivo
  Quando o arquivo não existe
    ✔ a resposta é igual a "null"


1 passing (13ms)
2 failing

// ### Isolando nossos testes
// ossos testes não devem realizar operações de IO ( input / output ), ou seja, não devem acessar nem o disco, nem a rede.

// - frontend, estamos na maior parte do tempo, manipulando o DOM.
// - javascript no backend com NodeJS, constantemente estamos realizando operações com IO
// nossa aplicação se comunica com o sistema de arquivos ou com a rede.

// para garantir nossos cenários, precisaríamos, além de criar o teste e realizar a chamada à nossa função leArquivo , preparar um arquivo para ser lido com o conteúdo que esperamos ler.

// Dessa forma, o ideal é não permitir que nosso código realize essas operações de IO de fato, mas apenas simular que elas estão sendo realizadas. Dessa forma, isolamos o IO de nossos testes

// 'Test Doubles', são objetos que fingem ser o outro objeto para fins de testes.
// Para nos ajudar com esse tipo de coisa, usaremos uma ferramenta chamada 'sinon'

// ### Sinon
// - ferramenta que fornece funções para diversos tipos dos Test Doubles ou, numa tradução livre, Dublês de Testes.

// # Stubs
// - são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato.

// instalação do Sinon:
// # npm install --save-dev sinon

// Agora vamos ver na prática como podemos criar um stub para a função de leitura do fs:
const fs = require('fs');
const sinon = require('sinon');

sinon.stub(fs, 'readFileSync')
  .returns('Valor a ser retornado');
// Precisamos importar o módulo 'fs' e, então, falamos para o sinon criar um stub para a função readFileSync que retornará 'Valor a ser retornado', conforme especificamos na chamada para returns.

// ### Stub

// # io-test/test.js
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});
// ao rodar esse teste teremos o seguinte resultado:
npm run test                

> io-test@1.0.0 test
> mocha test.js

leArquivo
  Quando o arquivo existe
    a resposta
      ✔ é uma string
      ✔ é igual ao conteúdo do arquivo
  Quando o arquivo não existe
    1) a resposta é igual a "null"

2 passing (13ms)
1 failing

1) leArquivo
      Quando o arquivo não existe
        a resposta é igual a "null":
    AssertionError: expected 'VQV com TDD' to equal null
    at Context.<anonymous> (test.js:28:30)                  
    at processImmediate (internal/timers.js:461:21)         
// Perceba que os testes que esperavam o valor retornados pelo stub funcionaram. Porém, onde o valor esperado era outro, o teste passou a quebrar.
// Isso aconteceu porque criamos um comportamento falso único para a função, que é aplicado para todos os testes.

// - Quando o arquivo passado existe é esperado que ela retorne o valor;
// - Quando o arquivo passado não existe é esperado um erro;

// o ideal é sempre criarmos Tests Doubles para o escopo de cada cenário de teste.

// - O mocha nos fornece duas funções chamadas 'before e after'. são funções que serão executadas "antes" e "depois" daquele "bloco" de testes.
// Vamos adicionar esse conceito ao nosso teste:
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});
// antes de cada cenário de teste nós alteramos o comportamento do método do 'fs' criando um 'stub' e, depois da execução do teste, utilizamos a função 'restore()' que o sinon atribui aos stubs para retornarmos o comportamento padrão daquela função.
// Ao rodar nosso teste agora.
npm run test                                          1 ⨯

> io-test@1.0.0 test
> mocha test.js

leArquivo
  Quando o arquivo existe
    a resposta
      ✔ é uma string
      ✔ é igual ao conteúdo do arquivo
  Quando o arquivo não existe
    a resposta
      ✔ é igual a "null"

3 passing (39ms)

// ==============================
// -- > CONTEÚDO do dia - 26.3 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 26.3 ----- <---/ INICIO --------------------------------------//
// ==============================

 
 
// ==============================
// -- > AULA ao VIVO - 26.3 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 26.3 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática

// Exercício 1: Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// # Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// # Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// # Descreva todos os cenário de teste utilizando describes;
// # Descreva todos os testes que serão feitos utilizando its;
// # Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

// - resolução:
// # exercicio/test. 
// # npm init
// # npm install -D mocha chai
// # npm install --save-dev sinon
/*
// package.json
{
  // ...
    "scripts": {
      "start": "node index.js",
      "test": "mocha test.js"
    },
  // ...
  }
*/ 
const { expect } = require('chai');
const numerosNaturais = require('./positivoNegativoNeutro');

describe('Executa a funçção numerosNaturais', () => {
  describe('Quando o número for maior que 0', () => {
    describe('A resposta', () => {
      it('é uma ""string', () => {
        const resposta = numerosNaturais(10);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numerosNaturais(10);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });
  
  describe('Quando o número for menor que 0', () => {
    describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = numerosNaturais(-10);
      expect(resposta).to.be.a('string');
    });
    
    it('é igual a "negativo"', () => {
      const resposta = numerosNaturais(-10);
      expect(resposta).to.be.equals('negativo');
    });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(0);
        expect(resposta).to.be.a('string');
      });
      
      it('é igual a "neutro"', () => {
        const resposta = numerosNaturais(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});

// Exercício 2: Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

// - resolução
module.export = (numero) => {
  if (numero > 0) {
    return 'positivo';
  }
  if (numero < 0) {
    return 'negativo';
  }
  return 'neutro';
};

// Exercício 3: Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// # Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// # Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// # Implemente em sua função tal validação para que o teste passe.

// - resolução
// test.js
describe('Quando o parâmetro passado não é número', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = numerosNaturais('Texto');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser número"', () => {
      const resposta = numerosNaturais('Texto');
      expect(resposta).to.be.equals('oparâmetro deve ser número');
    });
  });
});
// positivoNegativoNeutro.js
module.export = (numero) => {
  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número';
  }
  if (numero > 0) {
    return 'positivo';
  }
  if (numero < 0) {
    return 'negativo';
  }
  return 'neutro';
};

// Exercício 4: Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// # Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// # Após concluir a escrita do arquivo ela deverá retornar um ok.
// # Descreva todos os cenários de teste utilizando describes;
// # Descreva todos os testes que serão feitos utilizando its;
// # Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// - resolução
const fs = require('fs');
const { expect } = require('chai');
const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a função  escrevaArquivo', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});

// Exercício 5: Implemente a função descrita no exercício 4.
// # Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// # Adapte os testes adicionando stub ao módulo utilizado do fs, isolando assim o teste.
// # Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

// - resolução


// ==============================
// -- > EXERCÍCIO do dia - 26.3 -- <---/ FIM -----------------------------------------//
// ============================== Node.js - Fluxo Assíncrono
// ...