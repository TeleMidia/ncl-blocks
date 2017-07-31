var _data = {}

// ----------------------------------------
// surveyJSON
// ----------------------------------------

_data.surveyJSON = {
  completeText: 'Finalizar estudo',
  focusFirstQuestionAutomatic: false,
  locale: 'en',
  pageNextText: 'prosseguir',
  pagePrevText: 'voltar',
  requiredText: '',
  showProgressBar: 'top',
  showQuestionNumbers: 'off',
  // surveyPostId: '51d57b85-3813-4a08-801b-4b7e077c1660',
  sendResultOnPageNext: true,
  pages: []
}
_data.surveyJSON.sendResultOnPageNext = true

var pageIndex
var _agreeChoices = [
  'Discordo fortemente', 'Discordo bastante', 'Discordo um pouco',
  'Não concordo nem discordo', 'Concordo um pouco', 'Concordo',
  'Concordo fortemente'
]

// var _switchRuleNCL = '{profileNCL1} >= {profileHTML1}'
// var _switchRuleHTML = '{profileHTML1} > {profileNCL1}'
var _switchRuleNCL = ''
var _switchRuleHTML = ''

// ----------------------------------------
// termo page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'termo',
  title: 'Termo de consentimento livre e esclarecido',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginSurvey'
    },
    {
      type: 'text',
      visible: false,
      name: 'userId'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O TeleMídia é um grupo de pesquisa da PUC-Rio que desenvolve
        pesquisas em Sistemas Multimídia.</p>

        <p>Convidamos você a participar deste estudo sobre nossa pesquisa
        de <i>Interações multimodais em linguagens multimídia</i>.</p>

        <p>Para prosseguirmos, pedimos seu consentimento participar deste estudo
        e informamos que:</p>
        <ul>
        <li>Todos os dados coletados destinam-se estritamente a atividades de
        pesquisa e somente os pesquisadores do TeleMídia terão acesso à esses
        dados.</li>
        <li>A divulgação dos resultados de nossa pesquisa em foros científicos
        pauta-se no respeito à privacidade, e o anonimato dos
        participantes.</li>
        </ul>
        </div>
      `
    },
    {
      type: 'text',
      isRequired: true,
      name: 'profileName',
      title: 'Caso esteja de acordo informe seu nome e prossiga.'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        OBS: Este estudo é feito em uma única página web. Caso deseje navegar
        entre as seções do estudo, <strong>NÃO</strong> utilize os botões de
        navegação do seu browser, e sim os botões de <i>voltar</i> e
        <i>prosseguir</i> no final de cada seção do estudo.
        </div>
      `
    }
  ]
})

// ----------------------------------------
// intro page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'intro',
  title: 'Introdução à linguagens multimídia com interações multimodais',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginIntro'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Nesta seção introduzimos o conceito de <strong>linguagens
        multimídia com interações multimodais</strong> proposto em nossa
        pesquisa.</p>

        <p>Uma <strong>aplicação multimídia interativa</strong> define como um
        sistema multimídia deve realizar o sincronismo de mídias (discretas e
        contínuas) e reagir às interações de usuário. O criador desse tipo de
        aplicação é usualmente chamado de autor e utiliza uma linguagem
        multimídia para desenvolver sua aplicação. Exemplos de linguagens
        multimídia atuais são a NCL (Nested Context Language) e a HTML
        (HyperText Markup Language). Já uma linguagem multimídia com
        interações multimodais é aquela que permite o autor não apenas
        definir mídias e o sincronismo entre elas, mas também pode definir
        <strong>interações multimodais com os usuários</strong>.</p>


        <p><strong>Interfaces multimodais </strong>são aquelas caracterizadas
        pelo uso (possivelmente simultâneo) de múltiplas modalidades dos
        sentidos humanos e que podem combinar entrada (e.g. reconhecimento de
        gestos do usuário) e saída (e.g. sintetização de voz). Comparado com as
        tecnologias atuais de mouse, teclado e displays, as tecnologias de
        interface multimodais permitem o desenvolvimento de interfaces com
        formas de comunicação mais naturais para a linguagem e comportamento
        humano, e.g. interfaces por meio de fala como fala e gestos. Ilustrados
        a seguir, citamos o uso de microfones para reconhecimento de voz, e
        dispositivos como LeapMotion e Microsoft Kinect para reconhecimento de
        gestos.</p>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 100px'
          src='assets/voice.jpg'>
          <img class='img-thumbnail' style='height: 100px' src='assets/leap.jpg'>
          <img class='img-thumbnail' style='height: 100px' src='assets/kinect.jpg'>
        </div>
        <br>

        <p>A figura a seguir ilustra a criação e execução de uma aplicação
        multimídia com interações multimodais. Na criação, a principal diferença
        é que o autor define não apenas as mídias e o sincronismos entres elas,
        mas também, as interações multimodais utilizando descrições
        multimodais. Por exemplo, ele pode utilizar uma descrição de
        reconhecimento de voz e um de reconhecimento de gestos. Já na execução,
        a principal diferença é que o sistema utiliza <strong>dispositivos de
        interação multimodal</strong> para realizar reconhecimentos, além de
        dispositivos audiovisuais para exibir o conteúdo das mídias (som e
        frames), e apontador e tecla para capturar interações dos usuários.</p>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 380px'
          src='assets/overview1.png'>
          <span style="margin-left:5px"></span>
          <img class='img-thumbnail' style='height: 380px'
          src='assets/overview2.png'>
        </div>
        <br>

        </div>
      `
    }
  ]
})

// ----------------------------------------
// profile page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'profile',
  title: 'Dados do participante',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginProfile'
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileFormation',
      title: 'Qual sua formação ou curso atual?',
      choices: ['Graduação em computação', 'Graduação em design', 'Pós-graduação em computação', 'Pós-graduação em design'],
      hasOther: true,
      otherText: 'Outra graduação ou outra pós-graduação'
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileMultimediaApps',
      title: `Quantas aplicações multimídia interativas você já desenvolveu (independente de tecnologia ou linguagem de programação)?`,
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileMultimodalApps',
      title: `Você já desenvolveu alguma aplicação com interações multimodais?`,
      choices: ['Sim', 'Não']
    },
    {
      type: 'comment',
      name: 'profileMultimodalAppsTypes',
      title: `Quais modalidades de interação você utilizou em suas aplicações multimodais?`,
      visibleIf: '{profileMultimodalApps} == Sim',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileBlocks',
      title: `Você já utilizou alguma ferramenta programação por blocos, como Scratch ou MIT AppInventor?`,
      choices: ['Sim', 'Não']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileNCL1',
      title: 'Qual seu conhecimento no desenvolvimento em NCL?',
      choices: [
        { value: 0, text: 'Nenhum' }, { value: 1, text: 'Muito pouco' },
        { value: 2, text: 'Pouco' }, { value: 3, text: 'Razoável' },
        { value: 4, text: 'Alto' }, { value: 5, text: 'Muito alto' },
        { value: 6, text: 'Expert' }]
    },
    {
      type: 'radiogroup',
      visibleIf: '{profileNCL1} > 0',
      isRequired: true,
      name: 'profileNCL2',
      title: 'Quantas aplicações NCL você desenvolveu?',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      visibleIf: '{profileNCL1} > 0',
      isRequired: true,
      name: 'profileNCL3',
      title: `De que maneira a sintaxe da NCL influencia o
       desenvolvimento de aplicações?`,
      choices: ['Não se aplica', 'Atrapalha muito', 'Atrapalha bastante', 'Atrapalha pouco', 'Indiferente', 'Ajuda pouco', 'Ajuda bastante', 'Ajuda muito']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileHTML1',
      title: 'Qual seu conhecimento no desenvolvimento em HTML/JavaScript?',
      choices: [
        { value: 0, text: 'Nenhum' }, { value: 1, text: 'Muito pouco' },
        { value: 2, text: 'Pouco' }, { value: 3, text: 'Razoável' },
        { value: 4, text: 'Alto' }, { value: 5, text: 'Muito alto' },
        { value: 6, text: 'Expert' }]
    },
    {
      type: 'radiogroup',
      visibleIf: '{profileHTML1} > 0',
      isRequired: true,
      name: 'profileHTML2',
      title: 'Quantas aplicações HTML/JavaScript você desenvolveu?',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      visibleIf: '{profileHTML1} > 0',
      isRequired: true,
      name: 'profileHTML3',
      title: `O quanto o desenvolvimento em HTML/JavaScript requer
      o uso de bibliotecas de manipulação de DOM, como jQuery ou Prototype?`,
      choices: ['Não sei', 'Nunca', 'Quase nunca', 'Indiferente', 'Quase sempre ', 'Sempre']
    }
  ]
})

// ----------------------------------------
// concepts page
// ----------------------------------------

pageIndex = _data.surveyJSON.pages.push({
  name: 'concepts',
  elements: [{
    type: 'text',
    visible: false,
    name: 'timeConcepts'
  }]
}) - 1

// ----------------------------------------
// concepts page - intro
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'html',
  html: `
    <div style="text-align: justify; width: 70%;"> 
    <p>Em nossa pesquisa propomos quatro conceitos que são necessários para
    uma linguagem multimídia suportar interações multimodais, são eles:
    Mídia, Reconhecedor, Relacionamento e Grupo de
    Usuários.</p>
   
    <p>Para evitar possíveis dificuldades com a sintaxe das linguagens,
    apresentaremos esses conceitos utilizando uma abordagem de
    <strong>desenvolvimento de aplicações através de blocos</strong>. Esse tipo
    de abordagem é bastante utilizado para o ensino de programação ou para
    ferramentas de geração de código. Em especial, esse tipo de desenvolvimento
    foi popularizado por ferramentas como o <strong>MIT Scratch</strong> e
    <strong>MIT App</strong> Inventor</strong> (ilustrados a seguir).</p>

    <div class='text-center'>
      <img class='img-thumbnail' style='height: 200px'
      src='assets/scratch.jpg'>
      <span style="margin-left:10px"></span>
      <img class='img-thumbnail' style='height: 200px'
      src='assets/appinventor.jpg'>
    </div>
    <br>

    <p>Vamos agora detalhar esses conceitos e pedir que você realize algumas
    tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar
    seus conhecimentos, mas sim capturar evidências de nossa
    pesquisa.</strong></p>
    </div>
  `
})

// ----------------------------------------
// concepts page - midia and link
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 1.1',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginConcepts'
    },
    {
      type: 'html',
      name: 'conceptsIntro1',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Mídia permite definir o uso de conteúdo
        audiovisual. Uma Mídia  é definida por <strong>um
        identificador, um conteúdo e âncoras</strong>. O conteúdo consiste em um
        arquivo de mídia, como imagem jpeg, vídeo mp4, áudio mp3, entre outros.
        As âncoras são porções do conteúdo e podem ser trechos temporais (e.g.
        entre 300s e 360s) ou trechos delimitados do conteúdo.</p>

        <p>Na nossa representação de blocos, uma Mídia é definida
        juntando um bloco de Mídia, com o campo id preenchido, e um
        bloco de conteúdo, com as âncoras preenchidas. Os blocos a seguir
        definem duas mídias com identificadores <i>midia_principal</i> e
        <i>icone_repetir</i>, e conteúdos de vídeo e imagem, respectivamente.
        Em especial, <i>midia_principal</i> possui uma âncora chamada de
        <i>creditos</i> que inicia aos 300 e termina aos 360 segundos.</p>
        </div>

        <div id='conceptsIntro1A'></div>

        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Relacionamento permite definir o comportamento
        das aplicações por meio de relações causais. Um Relacionamento
        é definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. As ações são executadas em sequência quando as condições
        são satisfeitas.</p>

        <p>Na nossa representação de blocos, um Relacionamento é criado juntado
        um bloco de Relacionamento com blocos de Condições e blocos de Ações.
        Blocos de Ações podem ser de iniciar ("inicie") ou parar ("pare") a
        execução de uma Mídia ou Reconhecedor. Já as condições podem ser simples
        ou compostas. Blocos de Condições simples podem ser de início ("for
        iniciado") ou fim ("for terminado") de uma mídia ou de sua âncora,
        seleção de mídia pelo usuário ("for selecionado") ou reconhecimento de
        uma interação multimodal ("for reconhecido")</p>

        <p>Para ilustrar o uso desses conceitos, os blocos a seguir definem uma
        aplicação que apresenta um vídeo e um ícone, durante os créditos desse
        vídeo. Se o usuário selecionar o ícone, o vídeo é reiniciado. Essa
        aplicação utiliza duas Mídias (<i>midia_principal</i> e
        <i>icone_repetir</i>) e três Relacionamentos para definir o
        comportamento da aplicação. O primeiro Relacionamento define que
        a <i>midia_principal</i> inicia junto com a aplicação. O segundo
        Relacionamento define que quando a <i>midia_principal</i> alcançar o seu
        trecho de <i>creditos</i> a mídia <i>icone_repetir</i> deve ser
        iniciada. O terceiro Relacionamento define que quando a mídia
        <i>icone_repetir</i> for selecionada, a <i>midia_principal</i> deve ser
        reiniciada (terminada e iniciada)</p>

        </div>

        <div id='conceptsIntro1B'></div>
      `
    }
  ]
})

_data.conceptsIntro1BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="ng1hSr43UobXY5cJd9U6" x="20" y="20">
      <field name="id">midia_principal</field>
      <value name="src">
        <block type="video" id="ng1hSravUobXY5cJd9U6">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0">360s</field>
        </block>
      </value>
    </block>
    <block type="media" id="ng1hSr43UobXY5cAd9U6" x="594" y="71">
      <field name="id">icone_repetir</field>
      <value name="src">
        <block type="image" id="ng1hSr423obXY5cJd9U6"></block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro1BlocksB = `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="ng1hSr43UobXY5cJd9UC" x="21" y="12">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="ng1hSr43UobXY5cJd9UD">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="ng1hSr43UobXY5cJd9UF" x="609" y="21">
    <field name="id">midia_principal</field>
  </block>
  <block type="link" id="ng1hSr43UobXY5cJd9UA" x="612" y="110">
    <value name="conditions">
      <block type="onbegin" id="ng1hSr43UobXY5cJd9UW">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="ng1hSr43UobXY5cJd9A6">
        <field name="id">icone_repetir</field>
      </block>
    </statement>
  </block>
  <block type="media" id="Vkf8qjth67EEiQAOo8Bf" x="24" y="238">
    <field name="id">icone_repetir</field>
    <value name="src">
      <block type="image" id="Vkf8qjth67EEiQAOoSBf"></block>
    </value>
  </block>
  <block type="link" id="ng1hSr43UobXY5cJdCU6" x="614" y="239">
    <value name="conditions">
      <block type="onselection" id="ng1hSr43UobXY5cJdAU6">
        <field name="id">icone_repetir</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="Vkf8qjFh67EEiQAOo8Bf">
        <field name="id">icone_repetir</field>
        <next>
          <block type="stop" id="Vkf8qjth67EEiQAOo8Cf">
            <field name="id">midia_principal</field>
            <next>
              <block type="start" id="Vkf8Wjth67EEiQAOo8Bf">
                <field name="id">midia_principal</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
`

// ----------------------------------------
// concepts page - midia and link - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'panel',
    title: 'Tarefa 1.1',
    elements: [
      {
        type: 'html',
        name: 'conceptsTask1',
        html: `Por favor, analise com atenção os blocos a seguir.<br>`
      },
      {
        type: 'comment',
        isRequired: true,
        name: 'conceptsTask1Question',
        title: 'Qual é o comportamento da aplicação que corresponde aos blocos acima?'
      }
    ]
  })

_data.blocksTask1Xml = `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="Vkf8qjth67EEiZAOo8Bf" x="20" y="20">
    <field name="id">video_principal</field>
    <value name="src">
      <block type="video" id="Vkf8qjth67EEiQAOP8Bf">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="Vkf8qjth67EEiQEOo8Bf" x="593" y="14">
    <field name="id">video_principal</field>
  </block>
  <block type="link" id="Vkf8qjth67EEiQeOo8Bf" x="594" y="100">
    <value name="conditions">
      <block type="onbegin" id="Vsf8qjth67EEiQAOo8Bf">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="Vkfeqjth67EEiQAOo8Bf">
        <field name="id">icone_centro</field>
        <next>
          <block type="start" id="Vkf8ajth67EEiQAOo8Bf">
            <field name="id">icone_praia</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="Vkf8qjth67EEifAOo8Bf" x="20" y="160">
    <field name="id">video_centro</field>
    <value name="src">
      <block type="video" id="Vkf8qjth67EEwQAOo8Bf">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="wVBCIDFVnK4Fkh7DWtVi" x="593" y="250">
    <value name="conditions">
      <block type="onselection" id="Vkf8qjth67EEifAOo8BR">
        <field name="id">icone_centro</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="9clHGPFCr1PSrYfRKjsF">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="9clHGPFCr1PSrYfRKXsA">
            <field name="id">icone_centro</field>
            <next>
              <block type="stop" id="9clHGPFCr1PSrYfRfjsA">
                <field name="id">icone_praia</field>
                <next>
                  <block type="start" id="fclHGPFCr1PSrYfRKjsA">
                    <field name="id">video_centro</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="9clHGPFCr1PSrYfRKjsc" x="20" y="301">
    <field name="id">video_praia</field>
    <value name="src">
      <block type="video" id="wVBCIDjVnK4Fkf7DWtVi">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="media" id="9clHGPFCr1PSrYfRKjsh" x="20" y="450">
    <field name="id">icone_praia</field>
    <value name="src">
      <block type="image" id="9clHGPFCr1PSrYfRKjs4"></block>
    </value>
  </block>
  <block type="link" id="9clHGPFCr1PSrYfRKjs5" x="596" y="454">
    <value name="conditions">
      <block type="onselection" id="O9clHGPFCr1PSrYfRKjs6">
        <field name="id">icone_praia</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="9clHGPFCr1PSrYfRKjs7">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="=9clHGPFCr1PSrYfRKjs8">
            <field name="id">icone_centro</field>
            <next>
              <block type="stop" id="wVBCIDjVnK4Fkh7DWtVi">
                <field name="id">video_praia</field>
                <next>
                  <block type="start" id="wVBCIajVnK4Fkh7DWtVi">
                    <field name="id">video_praia</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="wVBCIfjVnK4Fkh7DWtVi" x="20" y="540">
    <field name="id">icone_centro</field>
    <value name="src">
      <block type="image" id="wVBCIDjVnKfFkh7DWtVi"></block>
    </value>
  </block>
</xml>
`

// ----------------------------------------
// concepts page - recognition
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 1.2',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro2',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Além de mídias como imagens, áudios e vídeos, o conceito de Mídia
        abrange também outras modalidades de conteúdo, e.g. voz sintetizada. Os
        blocos a seguir definem uma Mídia com identificador <i>sinte_voz</i>,
        que tem como conteúdo um arquivo de texto para sintetização de voz. Esse
        conteúdo de sintetização possui o trecho <i>pergunta</i> que sintetiza a
        frase "você deseja repetir o vídeo?".</p>
        </div>

        <div id='conceptsIntro2A'></div>

        <div style="text-align: justify; width: 70%;">
        <p>Um Reconhecedor permite o reconhecimento de interações
        multimodais realizadas por usuários, como voz e gestos. Ele é definido
        por <strong>um identificador, seu conteúdo e âncoras</strong>.
        Entretanto, diferente de Mídia, o conteúdo de um
        Reconhecedor deve ser uma descrição de reconhecimento. As
        âncoras são porções delimitadas dessa descrição. Por exemplo, uma
        descrição de reconhecimento de voz deve ter âncoras que definem frases a
        serem reconhecidas.</p>

        <p>Na nossa representação de blocos, o Reconhecedor é definido
        juntando-se um bloco de Reconhecedor com o campo id preenchido, e
        um bloco de conteúdo com as âncoras preenchidas. Os blocos a seguir
        definem o reconhecedor <i>rec_voz</i>, que tem um reconhecimento de
        voz como conteúdo. Essa descrição tem o trecho <i>repetir</i> que
        reconhece o comando de voz "repita vídeo". 
        </div>

        <div id='conceptsIntro2B'></div>

        <div style="text-align: justify; width: 70%;"> 
        <p>Para ilustrar o uso desses conceitos, os blocos a seguir definem uma
        nova versão da aplicação em Conceitos 1.1, a qual que reinicia um vídeo
        dada uma interação. Nessa versão, em vez de selecionar o ícone, o vídeo
        é reiniciado quando usuário falar "repita vídeo". Essa aplicação utiliza
        duas Mídia (<i>midia_principal</i> e <i>sinte_voz</i>), um Reconhecedor
        (<i>rec_voz</i>) e três Relacionamentos. O primeiro Relacionamento
        define que a <i>midia_principal</i> é iniciada quando a aplicação
        iniciar. O segundo Relacionamento define que quando a
        <i>midia_principal</i> alcançar o seu trecho de <i>creditos</i> (300s),
        a frase da âncora <i>pergunta</i> é sintetizada e o Reconhecedor
        <i>rec_voz</i> inicia o reconhecimento. O último Relacionamento define
        que quando for reconhecida a âncora <i>repetir</i>, a
        <i>midia_principal</i> deve ser reiniciada (terminada e iniciada).</p>
        </div>

        <div id='conceptsIntro2C'></div>
      `
    }
  ]
})

_data.conceptsIntro2BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="uQwfSX8S1r1RXf21gdMD" x="20" y="20">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="yx5ufbQqmEHg3bVahuNJ">
          <mutation length="1"></mutation>
          <field name="id_area0">pergunta</field>
          <field name="label0">você deseja repetir o vídeo?</field>
        </block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro2BlocksB = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="input" id="yx5ufbQqmEHg3bVahuNC" x="20" y="20">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="yx5ufbQqmEHg3bVahuNG">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro2BlocksC = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="u12fSX8S1r1RXfCJgdMD" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="yx5ufbQqmEHg3bVahuNS">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="fx5ufbQqmEHg3bVahuNJ" x="674" y="55">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="wx5ufbQqmEHg3bVahuNJ" x="20" y="167">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="uQwfSX8S1r1R32CJgdMD">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="yx5ufbQqmEHg3bVahuNJ" x="672" y="161">
    <value name="conditions">
      <block type="onbegin" id="xx5ufbQqmEHg3bVahuNJ">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="yx5ufbQqmEHg3bVahuNh">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="yx5ufbyqmEHg3bVahuNJ">
            <field name="id">rec_voz</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="yx5ufbQqmEHg3bgahuNJ" x="22" y="317">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="yx5ufbQqmEH32bgahuNJ">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="uQwfSX8S1r1RXfCJ4dMD" x="672" y="319">
    <value name="conditions">
      <block type="onrecognize" id="yx5ufbQqmEHg3bVauuNJ">
        <field name="id">repetir</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="yx5ufbQqmEHg3bVaiuNJ">
        <field name="id">midia_principal</field>
        <next>
          <block type="start" id="yx5ufbQqmEHg3bVahoNJ">
            <field name="id">midia_principal</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  </xml>
`

// ----------------------------------------
// concepts page - recognition - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 1.2',
  elements: [
    {
      type: 'html',
      name: 'conceptsTask2',
      html: `Os blocos a seguir são uma versão modificada da Tarefa 1.1. Por
      favor, analise com atenção. <br><br>`
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'conceptsTask2Question',
      title: 'Qual é o novo comportamento da aplicação?'
    }
  ]
})

_data.blocksTask2Xml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="uQwRSX8S1r1RXfCJgdMD" x="20" y="20">
    <field name="id">video_principal</field>
    <value name="src">
      <block type="video" id="uQwRSX812r1RXfCJgdMD">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="uQwRSX8S1r1RXfCJgfMD" x="603" y="46">
    <field name="id">video_principal</field>
  </block>
  <block type="media" id="uQwRSX8S1r1RXfCJvdMD" x="20" y="164">
    <field name="id">video_praia</field>
    <value name="src">
      <block type="video" id="uQwRSXsS1r1RXfCJvdMD)">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="uQwRSX8S1r1RXfCJudMD" x="606" y="140">
    <value name="conditions">
      <block type="onbegin" id="uQwRSX8S1r1RXfCJvdMh">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="uQwRSX8S1r1RXfCJghMD">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="uQwRSX8S1r1RXfCJgiMD">
            <field name="id">rec_voz</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="uQwfSX8S1r1RXfCJgdMD" x="24" y="310">
    <field name="id">video_centro</field>
    <value name="src">
      <block type="video" id="uQwfS21S1r1RXfCJgdMD">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="uQwRSX8S1r1RgfCJgdMD" x="606" y="304">
    <value name="conditions">
      <block type="onrecognize" id="uQwRSX8S1r1R12CJgdMD">
        <field name="id">voz_centro</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="uQwRSX8S1r1RXfCJfdMD">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="uQwRSX8S1r1RXfCJgcMD">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id="uQwRSX8S1w1RXfCJgdMD">
                <field name="id">video_centro</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="uQwRSX8S1r1RxfCJgdMD" x="28" y="459">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="uQwRSX8S1r1RXfCJgfMD">
        <mutation length="2"></mutation>
        <field name="id_area0">voz_centro</field>
        <field name="label0">centro</field>
        <field name="id_area1">voz_praia</field>
        <field name="label1">praia</field>
      </block>
    </value>
  </block>
  <block type="link" id="uQwRSX8S1r1RwfCJgdMD" x="606" y="485">
    <value name="conditions">
      <block type="onrecognize" id="uQwRSX8S1r1RXfCJgeMD">
        <field name="id">voz_praia</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="uQwRSX8S1r1RXfCJgcMD">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="uQwRSX8S1r1RXfCJgxMD">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id="uQwRSXaS1r1RXfCJgdMD">
                <field name="id">video_praia</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="uQwRSX8S1r1RXfCJgdMt" x="29" y="634">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="u2wRSXqS1r1RXfCJgdMD">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">fale o vídeo que deseja ver, centro ou praia?</field>
      </block>
    </value>
  </block>
  </xml>
`

// ----------------------------------------
// concepts page - recognition combination
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 1.3',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro3',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>Um dos principais benefícios de interfaces multimodais é o uso
        diferentes interações, ou seja, as interações de usuários podem ser
        realizadas por diferentes modalidades.</p>

        <p>Os blocos a seguir definem o reconhecedor <i>rec_voz</i>
        <i>rec_gestos</i>, que tem uma descrição de reconhecimento de gestos
        como conteúdo. Esse conteúdo utiliza duas âncoras (<i>esquerda</i> e
        <i>direita</i>) para definir gestos de mão nessas direções.</p>
        </div>

        <div id='conceptsIntro3A'></div>

        <div style="text-align: justify; width: 70%;"> 
        <p>Em nossa representação de blocos, a combinação de modalidades de
        interação pode ser feita utilizando uma condição composta. A combinação
        de condições compostas podem utilizar os seguintes operadores: "or"
        quando apenas uma das condições é necessária; 'and' quando todas as
        condições são necessárias em qualquer ordem; e 'seq' quando todos as
        condições são necessárias e na sequência estabelecida.</p>

        <p>Os blocos a seguir definem uma nova versão da aplicação em
        Conceitos 1.2 que reinicia um vídeo dada uma interação por voz. Nessa
        versão falar "repita vídeo" ou (operador "or") fazer quando gesto de
        deslizar a mão para esquerda.</p>
        </div>

        <div id='conceptsIntro3B'></div>
      `
    }
  ]
})

_data.conceptsIntro3BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="input" id="EM5Cje6cEyRsKxDjlKUU*" x="20" y="20">
      <field name="id">rec_gesto</field>
      <value name="src">
        <block type="hand_gesture" id="EM5Cje6cEyRsKBDjfKUU">
          <mutation length="2">
          </mutation>
          <field name="id_area0">esquerda</field>
          <field name="label0">esquerda</field>
          <field name="id_area1">direita</field>
          <field name="label1">direita</field>
        </block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro3BlocksB = `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="EM5Cje6cEyRsKBDjlgUU" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="EM5Cje6cEyRsKBDjlKfU">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="EM5Cje6cEyRsKBDjlKxU" x="681" y="69">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="EM5Cje6cEyRsKeDjlKUU" x="24" y="171">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="EM5Cje6cEyRsKBxjlKUU">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="EM5Cje6wEyRsKBDjlKUU" x="683" y="181">
    <value name="conditions">
      <block type="onbegin" id="EM5Cje6cEyRsKBDjlKwU">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="EM5Cje6ctyRsKBDjlKUU">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="EM5Cje6cwyRsKBDjlKUU">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id="EM5Cje6cgyRsKBDjlKUU">
                <field name="id">rec_gesto</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="EM5Cje6cEyRaKBDjlKUU" x="27" y="315">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="EM5Cje6cxyRsKBDjlKUU">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="eM5Cje6cEyRsKBDjlKUU" x="681" y="393">
    <value name="conditions">
      <block type="compoundcondition" id="EM5Cje6cEyfsKBDjlKUU">
        <mutation length="2"></mutation>
        <field name="operator">or</field>
        <value name="element_0">
          <block type="onrecognize" id="EM5CjewdEyRsKBDjlKUU">
            <field name="id">repetir</field>
          </block>
        </value>
        <value name="element_1">
          <block type="onrecognize" id="EM5Cje6cEyRsKfDjlKUU">
            <field name="id">esquerta</field>
          </block>
        </value>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="6FqGPGeFLk21rh0jxYxt">
        <field name="id">pergunta</field>
        <next>
          <block type="stop" id="wFqGPGeFLk21rh0j6Yxt">
            <field name="id">rec_gesto</field>
            <next>
              <block type="stop" id="6FqGPGeFLk21rh0jaYxt">
                <field name="id">midia_principal</field>
                <next>
                  <block type="start" id="6FqGPGeFLk21rh0j6Yxg">
                    <field name="id">midia_principal</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="wFqGPGeFLk21rh0j6Yxt" x="26" y="461">
    <field name="id">rec_gesto</field>
    <value name="src">
      <block type="hand_gesture" id="wFqGPfeFLk21rh0j6Yxt">
        <mutation length="1"></mutation>
        <field name="id_area0">esquerta</field>
        <field name="label0">esquerda</field>
      </block>
    </value>
  </block>
</xml>
`

// ----------------------------------------
// concepts page - recognition combination - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 1.3',
  elements: [
    {
      type: 'html',
      name: 'conceptsTask3',
      html: ` 
        <div style="text-align: justify; width: 70%;">
        Agora pedimos que você edite os blocos da Tarefa 1.2 (copiados a
        seguir) para que seja possível a interação por voz <strong>ou</strong>
        (operador OR) interação por gestos. Na interação por gesto, considere
        que o gesto de deslizar a mão para esquerda indica centro e gesto de
        deslizar a mão para direita indica praia.<br><br>
        <div>
      `
    },
    {
      type: 'comment',
      name: 'conceptsTask3Changes',
      // visible: true
      visible: false
    },
    {
      type: 'comment',
      name: 'conceptsTask3Result',
      // visible: true
      visible: false
    }
  ]
})

// ----------------------------------------
// concepts page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 1.4',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro4',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Grupo de usuários permite identificar
        unicamente interações de cada usuário. Por exemplo, o comando de voz
        apenas de um determinado usuário. Ele é definido por <strong>um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Mais precisamente, esses dispositivos definem o que
        um usuário necessita possuir para participar do grupo.</p>

        <p>Na nossa representação de blocos, o Grupo de Usuários é
        definida juntando um bloco de Grupo de Usuários com campo id
        preenchido e blocos de dispositivos. Por exemplo, os blocos a seguir
        definem um grupo de usuário <i>gu_gestos</i> que pode ter até 3
        membros, cada qual com seu reconhecedor de gestos (e.g. LeapMotion).</p>
        </div>

        <div id='conceptsIntro4A'></div>

        <div style="text-align: justify; width: 70%;"> <p>Para ilustrar o uso de
        um Grupo de Usuários, os blocos a seguir são uma nova versão
        da aplicação em Conceitos 1.2, a qual reinicia um vídeo dada uma
        interação por voz. Nessa versão o vídeo será reiniciado apenas quando o
        segundo usuário de um grupo falar "repita vídeo". Esse grupo é definido
        com um máximo de 2 usuários com microfone.</p>
        </div>

        <div id='conceptsIntro4B'></div>
      `
    }
  ]
})

_data.conceptsIntro4BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="user" id="6FqG1GeFLk21rh0j6Yxt" x="20" y="20">
      <mutation length="1"></mutation>
      <field name="id"></field>
      <field name="id">gu_gestos</field>
      <value name="element_0">
        <block type="hand_gesture_sensor" id="6FqGPGeFLk21rh2j6Yxt"></block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro4BlocksB = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="6FqGPGeFLk21rh0j6Yx3" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="6FqGPGeFLk21rh0j6Yx4">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="6FqGPGwFLk21rh0j6Yxt" x="676" y="74">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="6FqGPGeFLk21rh0j6fxt" x="21" y="165">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="6FqGPGeFLw21rh0j6Yxt">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="6FaGPGeFLk21rh0j6Yxt" x="680" y="185">
    <value name="conditions">
      <block type="onbegin" id="6FqGxGeFLk21rh0j6Yxt">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="6FqGPGqFLk21rh0j6Yxt">
        <field name="id">rec_voz</field>
      </block>
    </statement>
  </block>
  <block type="input" id="6FqGPGeFLk21rh0j6Yft" x="20" y="309">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="6FqGPGeFLk21rh0a6Yxt">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="6FqGPGeFLk21rh0j6Yxx" x="680" y="322">
    <value name="conditions">
      <block type="onrecognizeuser" id="6FqGPGeFLk21rh0j6Yxr">
        <field name="id">repetir</field>
        <field name="user_id">gu_gestos(2)</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="EM5Cje6cEyRsKBDjxKUU">
        <field name="id">midia_principal</field>
        <next>
          <block type="start" id="EM5CjeacEyRsKBDjlKUU">
            <field name="id">midia_principal</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="user" id="EM5Cje6cEyRsKBDjlKU6" x="22" y="448">
    <mutation length="1"></mutation>
    <field name="id">gu_voz</field>
    <field name="usermax">2</field>
    <value name="element_0">
      <block type="headset" id="EM5Cje6cEyRsKBDjlKU7"></block>
    </value>
  </block>
  </xml>
`

// ----------------------------------------
// concepts page - user - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 1.4',
  elements: [
    {
      type: 'html',
      name: 'conceptsTask4',
      html: `
      <div style="text-align: justify; width: 70%;"> 
      Agora pedimos que você edite novamente os blocos da Tarefa 1.2 (copiados a
      seguir) para que apenas o segundo usuário, de um grupo de 3 usuários com
      microfone, possa realizar a interação por voz.<br><br>
      <div>
    `
    },
    {
      type: 'text',
      name: 'conceptsTask4Changes',
      // visible: true
      visible: false
    },
    {
      type: 'text',
      name: 'conceptsTask4Result',
      // visible: true
      visible: false
    }
  ]
})

// ----------------------------------------
// concepts feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'conceptsFeedback',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginConceptsFeedback'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências sobre os conceitos que apresentamos (<i>Mídia, Reconhecedor,
        Relacionamento</i> e Grupo de Usuários).</p>
        </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion1',
      title: `Os conceitos apresentados permitem **realizar rapidamente** a
        especificação de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion2',
      title: `Os conceitos apresentados permitem especificar aplicações
        multimodais **com qualidade**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion3',
      title: `De modo geral, os conceitos apresentados **são úteis** para a
        especificação de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion4',
      title: `Os conceitos apresentados **são simples e entendíveis**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion5',
      title: `Os conceitos apresentados **são fáceis de aprender**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion6',
      title: `De modo geral, os conceitos apresentados **são fáceis** de
        utilizar.`,
      choices: _agreeChoices
    }
  ]
})

// ----------------------------------------
// ncl page
// ----------------------------------------

pageIndex = _data.surveyJSON.pages.push({
  name: 'ncl',
  visibleIf: _switchRuleNCL,
  elements: [{
    type: 'text',
    visible: false,
    name: 'timeBeginNCL'
  }]
}) - 1

// ----------------------------------------
// ncl page - intro
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    html: `
      <div style="text-align: justify; width: 70%;"> 
      <p>A linguagem NCL é utilizada para criar conteúdo multimídia interativo
      em sistemas de TV (terrestre, IPTV e BroadBand). <strong>Nesta seção,
      não vamos ensinar a linguagem NCL</strong>, mas vamos apresentar como os
      conceitos da seção anterior são instanciados na NCL para esta oferecer
      suporte a interações multimodais.</p>
      
      <p>Os conceito de Mídia e Relacionamento já são implementados na versão
      atual da NCL pelos elementos <i>&ltmedia></i> e <i>&ltlink></i>,
      respectivamente. Já os conceitos de Reconhecedor e Grupo de são
      implementados pelos elementos <i>&lt-input> e
      <i>&ltuserClass>, respectivamente. A tabela a seguir apresenta nossa
      proposta de instanciação dos conceitos.</p>

      <table align="center" class="table-bordered table-striped
      table-condensed">
        <tr>
          <th>Conceito</th>
          <th>NCL atual</th>
          <th>Como propomos</th>
        </tr>
        <tr>
          <td>Mídia</td>
          <td><i>&ltmedia></i></td>
          <td>manter</td>
        </tr>
        <tr>
          <td>Relacionamento</td>
          <td><i>&ltport> e <i>&ltlink></i></td>
          <td>manter</td>
        </tr>
        <tr>
          <td>Reconhecedor</td>
          <td><i>não presente</i></td>
          <td>adicionar elemento <i>&ltinput></i></td>
        </tr>
        <tr>
          <td>Grupo de Usuários</td>
          <td>não presente</td></td>
          <td>adicionar elemento <i>&ltuserClass></i></td>
        </tr>
      </table>
      <br>

      <p>Vamos agora detalhar o uso dos conceitos em NCL e pedir que você
      realize algumas tarefas. <strong>Ressaltamos que essas tarefas NÃO se
      destinam a avaliar seus conhecimentos, mas sim capturar evidências de
      nossa pesquisa</strong>.</p>
      </div>
    `
  })

// ----------------------------------------
// ncl page - midia and link
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.1',
  elements: [
    {
      name: 'nclIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Mídia é definida por <strong>um identificador,
        um conteúdo e âncoras</strong>. Na NCL, ele já é implementado pelo
        elemento <i>&ltmedia></i>. O identificador é definido pelo atributo
        <i>id</i> e o arquivo de mídia do conteúdo é definido pelo atributo
        <i>src</i>. As âncoras são definidas pelo elemento <i>area</i> e
        podem definir porções temporais com os atributos <i>begin</i> e
        <i>end</i> ou trechos delimitados com o atributo <i>label</i>.</p>

        <p>Elementos <i>&ltmedia></i> também podem possuir elementos
        <i>&ltproperty></i> para definir características de sua exibição, como
        <i>&ltsize></i> (width e height), <i>&ltposition></i> (top e left)
        and <i>&ltz-index></i>. O trecho de código a seguir define duas mídias
        com identificadores <i>midia_principal</i> e <i>icone_repetir</i>, e
        com conteúdos de vídeo e imagem, respectivamente. Em especial, a mídia
        de <i>midia_principal</i> possui uma âncora chamada de
        <i>creditos</i> que inicia aos 300 e termina aos 360 segundos.</p>
        </div>

        <div id='nclIntro1CodeA'></div>

        <div style="text-align: justify; width: 70%;">
        <p><p>O conceito de Relacionamento permite definir o comportamento
        das aplicações por meio de relações causais. Um Relacionamento é
        definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. Na NCL esse conceito já é implementado pelos elementos
        <i>&ltport></i> e <i>&ltlink></i>. Os elementos <i>&ltport></i> indicam
        quais <i>&ltmedia></i>s são iniciadas quando a aplicação é iniciada.</p>

        <p>No <i>&ltlink></i> as ações podem ser de iniciar ("start") ou parar
        ("stop") uma Mídia ou Reconhecedor. Já as condições
        podem ser simples ou compostas. As condições simples em um
        <i>&ltlink></i> podem ser de início ("onBegin") ou fim ("onEnd") de
        uma mídia ou de sua âncora, seleção de mídia pelo usuário
        ("onSelection") ou reconhecimento de uma interação multimodal
        ("onRecognition").</p>

        <p>A relação entre condições e ações é definido pelo atributdo
        <i>xconnector</i> do <i>&ltlink></i>. Por exemplo, um <i>xconnector</i>
        "onBeginStart" define uma condição "onBegin" e ações de "start". Já um
        <i>xconnector</i> <i>onSelectionStopStart</i> define uma condição
        "onSelection" e ações de "stop" e "start". A associação de elementos
        <i>&ltmedia></i> ou <i>&ltinput></i> com as condições e ações de um
        <i>&ltlink></i> é definida pelo elemento <i>&ltbind></i> do
        <i>&ltlink></i>.</p>
        
        <p>Para ilustrar o uso desses conceitos, o trecho de código a segui
        define uma aplicação que apresenta um vídeo e um ícone durante os
        créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado. Ele utiliza dois elementos de <i>&ltmedia></i>
        (<i>video_principal</i> e <i>icone_repetir</i>), um <i>&ltport></i> e
        dois <i>&ltlink></i>. O <i>&ltport></i> define que o elemento
        <i>midia_principal</i> inicia com a aplicação. O primeiro
        <i>&ltlink></i> define que quando o <i>video_principal</i> alcançar o
        seu trecho de <i>creditos <i>a imagem <i>icone_repetir</i> é iniciada. O
        segundo <i>&ltlink></i> define que quando essa <i>icone_reptetir</i> for
        selecionado o <i>video_principal</i> será reiniciado (<i>stop</i> e
        <i>start</i>).</p>
        </div>

        <div id='nclIntro1CodeB'></div>
      `
    }
  ]
})

_data.nclIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="midia_principal" src="video.mp4">
    <area id="creditos" begin="300s" end="360s"/>
  </media>
  <media id="icone_repetir" src="icone.png">
    <property name="size" value="20%, 20%"/>
    <property name="top" value="80%"/>
    <property name="zindex" value="1"/>
  </media>
  ]]></script>
`

_data.nclIntro1CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <connectorBase>
      <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
    </connectorBase>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"/>
        <area id="creditos" begin="300s" end="360s"/>
      </media>
      <media id="icone_repetir" src="icone_repetir.png">
        <property name="size" value="20%, 20%"/>
        <property name="zindex" value="1"/>
      </media>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"/>
        <bind role="start" component="icone_repetir"/>
      </link>
      <link xconnector="conEx#onSelectionStopStart">
        <bind role="onSelection" component="icone_repetir"/>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
      </link>
    </body>
  </ncl>
  ]]></script>

`

// ----------------------------------------
// ncl page - midia and link - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.1',
  elements: [
    {
      type: 'html',
      name: 'nclTask1',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, analise com atenção o trecho de código NCL a seguir.</p>
        <div id='nclTask1Code'></div>
        </div>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclTask1Question',
      rows: '9',
      title: 'Qual é o comportamento da aplicação?'
    }
  ]
})

_data.nclTask1Code = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[
  <?xml version= "1.0" encoding= "ISO-8859-1" ?>
  <ncl xmlns="http://www.ncl.org.br/NCL3.0/EDTVProfile">
    <head>
      <connectorBase>
        <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
      </connectorBase>
    </head>
    <body>
      <port component="video_inicial"/>
      <media id="video_inicial" src="video_inicial.mp4">
        <property name="size" value="100%, 100%"/>
        <area id="creditos" begin="300s" end="360s"/>
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="size" value="100%, 100%"/>
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="size" value="100%, 100%"/>
      </media>
      <media id="icone_centro" src="icone_centro.png">
        <property name="top" value="80%"/>
        <property name="size" value="20%, 20%"/>
        <property name="zindex" value="1"/>
      </media>
      <media id="icone_praia" src="icone_praia.png">
        <property name="location" value="80%, 80%"/>
        <property name="size" value="20%, 20%"/>
        <property name="zindex" value="1"/>
      </media>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_inicial" interface="creditos">
        <bind role="start" component="icone_centro"//>
        <bind role="start" component="icone_praia"/>
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="icone_centro"/>
        <bind role="stop" component="icone_centro"/>
        <bind role="stop" component="icone_praia"/>
        <bind role="stop" component="video_inicial"/>
        <bind role="start" component="video_centro"/>
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="icone_praia"/>
        <bind role="stop" component="icone_centro"/>
        <bind role="stop" component="icone_praia"/>
        <bind role="stop" component="video_inicial"/>
        <bind role="start" component="video_praia"/>
      </link>
    </body>
  </ncl>
  ]]></script>
`

// ----------------------------------------
// ncl page - recognition
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.2',
  elements: [
    {
      name: 'nclIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Além de mídias como imagens, áudios e vídeos, o elemento
        <i>&ltmedia></i> da NCL estendida também deve suportar outras
        modalidades de conteúdo, como interações por voz.</p>
        </div>

        <div style="text-align: justify; width: 70%;">
        <p>Os trechos de código a seguir ilustram o uso de sintetização de voz
        na NCL estendida. O primeiro trecho de código apresenta o arquivo
        <i>sinte_voz.ssml</i> que segue o formato SSML (Speech Synthesis Markup
        Language) para sintetização de voz. Ele possui um elemento <i>&lts></i>
        com o identificador "pergunta" que sintetizada a frase: "você deseja
        repetir o vídeo?". O segundo trecho de código define um elemento
        <i>&ltmedia></i> com identificador <i>sinte_voz</i>, que tem como
        conteúdo o arquivo <i>sinte_voz.ssml</i>. Essa <i>&ltmedia></i> possui
        uma âncora que indica a frase a ser sintetizada.</p>
        </div>

        <div id='nclIntro2CodeA'></div>
        <div id='nclIntro2CodeB'></div>

        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Reconhecedor é definido por <strong>um
        identificador, seu conteúdo e âncoras</strong>. Na NCL estendida, ele é
        implementado pelo elemento <i>&ltinput></i>. O identificador é
        definido pelo atributo <i>id</i> e a descrição de reconhecimento é
        definida pelo atributo <i>src</i>. As âncoras são definidas pelo
        elemento <i>area</i> e podem definir trechos delimitados da descrição
        com o atributo <i>label</i>.</p>

        <p>Para ilustrar o uso de um Reconhecedor, os trechos de código a seguir
        ilustram o uso de reconhecimento de voz na NCL estendida. O primeiro
        trecho ilustra o arquivo <i>rec_voz.srgs</i> que segue o formato SRGS
        (Speech Recognition Grammar Specification) reconhecimento de voz. Ele
        possui uma frase com o identificador <i>repete</i> que define o
        reconhecimento de voz "repita vídeo". O segundo define um
        <i>&ltinput></i> com identificador <i>rec_voz</i>, que tem como conteúdo
        o arquivo <i>rec_voz.srgs</i>. Esse <i>&ltinput></i> possui uma âncora
        que indica a frase a ser reconhecida.</p>
        </div>

        <div id='nclIntro2CodeC'></div>
        <div id='nclIntro2CodeD'></div>

        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso de interação por voz, o trecho de código a seguir
        apresenta uma nova versão (modificações em destaque) da aplicação da
        parte Conceitos 2.1 que reinicia um vídeo dada uma interação por
        seleção. Nessa versão, em vez de selecionar o ícone, o vídeo é
        reiniciado quando usuário falar "repita vídeo". A primeira diferença
        está no uso dos elementos <i>sinte_voz</i> e <i>rec_voz</i> para
        interação por voz, que utilizam os arquivos <i>sinte_voz.srgs</i> e
        <i>rec_voz.srgs</i> (apresentados acima).</p>

        <p>Dois elementos <i>&ltlink></i> também foram modificados. O primeiro
        <i>&ltlink></i> modificado define que quando o <i>video_principal</i>
        alcançar o trecho de <i>creditos</i> (300s), a frase da âncora
        <i>pergunta</i> é sintetizada e o reconhecedor <i>rec_voz</i> é ativado
        (a partir desse momento, ele poderá reconhecer interações de voz). Já o
        segundo <i>&ltlink></i> modificado define que quando for reconhecida a
        âncora <i>repete</i>, a <i>midia_principal</i> será reiniciada
        (terminada e iniciada).</p>
        </div>

        <div id='nclIntro2CodeE'></div>
      `
    }
  ]
})

_data.nclIntro2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <speak xmlns="http://www.w3.org/2001/10/synthesis">
    <s id="pergunta">você deseja repetir o vídeo?</s>
  </speak>
  ]]></script>
`
_data.nclIntro2CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="sinte_voz" src="sinte_voz.ssml">
    <area label="pergunta"/> <!-- referência id repetir de sinte_voz.ssml-->
  </media>
  ]]></script>
`

_data.nclIntro2CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <grammar xmlns="http://www.w3.org/2001/06/grammar">
    <rule id="repete">repita vídeo</rule>
  </grammar>
  ]]></script>
`

_data.nclIntro2CodeD = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[
  <input id="rec_voz" src="rec_voz.srgs">
    <area label="repete"></repete>  <!-- referência id repete de rec_voz.srgs-->
  </input>
  ]]></script>
`
_data.nclIntro2CodeE = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[14,15,16,17,18,19,22,23,25,26,27,28,29,30]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"/>
        <area id="creditos" begin="300s" end="360s"/>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"/> <!-- referência id pergunta de sinte_voz.ssml-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"/>  <!-- referência id repete de rec_voz.srgs-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"/>
        <bind role="start" component="sinte_voz" interface="pergunta"/>
        <bind role="start" component="rec_voz"/>
      </link>
      <link xconnector="conEx#onRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete"/>
        <bind role="stop" component="rec_voz"/>
        <bind role="stop" component="video_principal">
        <bind role="start" component="video_principal">
      </link>
    </body>
  </ncl>
  ]]></script>
`

// ----------------------------------------
// ncl page - recognition - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.2',
  elements: [
    {
      type: 'html',
      name: 'nclTask2',
      html: `
      <div style="text-align: justify; width: 70%;">
      Considere as descrições sinte_voz_videos.ssml e rec_voz_videos.srgs a
      seguir.<br><br>
      </div>

      <div id='nclTask2CodeA'></div>
      <div id='nclTask2CodeB'></div>

      <div style="text-align: justify; width: 70%;">
      <p>O código NCL a seguir é uma versão modificada da Tarefa 2.1 para
      permitir interações multimodais utilizando as duas descrições acima. Por
      favor, analise atenção.</p>
      </div>

      <div id='nclTask2CodeC'></div>
    `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclTask2Question',
      rows: '9',
      title: 'Qual é o novo comportamento da aplicação?'
    }
  ]
})

_data.nclTask2CodeAOnly = `
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <speak xmlns="http://www.w3.org/2001/10/synthesis">
    <s id="repetir">fale o vídeo que deseja ver, centro ou praia?</s>
  </speak>
`
_data.nclTask2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
   <![CDATA[` + _data.nclTask2CodeAOnly + ` ]]></script>
`

_data.nclTask2CodeBOnly = `
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <grammar xmlns="http://www.w3.org/2001/06/grammar">
    <rule id="voz_centro">centro</rule>
    <rule id="voz_praia">praia</rule>
  </grammar>
`
_data.nclTask2CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[` + _data.nclTask2CodeBOnly + ` ]]></script>
`

_data.nclTask2CCodeOnly = `
  <?xml version= "1.0" encoding= "ISO-8859-1" ?>
   <ncl xmlns="http://www.ncl.org.br/NCL3.0/EDTVProfile">
    <head>
      <connectorBase>
        <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
      </connectorBase>
    </head>
    <body>
      <port component="video_inicial"/>
      <media id="video_inicial" src="video_inicial.mp4">
        <property name="size" value="100%, 100%"/>
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="size" value="100%, 100%"/>
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="size" value="100%, 100%"/>
      </media>
      <media id="sinte_voz_videos" src="sinte_voz_videos.ssml">
        <area label="pergunta"/>
      </media>
      <input id="rec_voz_videos" src="rec_voz_videos.sgrs">
        <area label="centro"/>
        <area label="praia"/>
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_inicial" interface="creditos"/>
        <bind role="start" component="sinte_voz_videos" interface="pergunta"/>
        <bind role="start" component="rec_voz_videos"/>
      </link>
      <link>
        <bind role="onRecognize" component="rec_voz" interface="centro"/>
        <bind role="stop" component="rec_voz_videos"/>
        <bind role="stop" component="video_inicial"/>
        <bind role="start" component="video_centro"/>
      </link>
      <link>
        <bind role="onRecognize" component="rec_voz_videos" interface="praia"/>
        <bind role="stop" component="rec_voz_videos"/>
        <bind role="stop" component="video_inicial"/>
        <bind role="start" component="video_praia"/>
      </link>
    </body>
  </ncl>
`

_data.nclTask2CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [19,20,21,22,23,24,25,28,29,31,32,33,37,38,39]">
  <![CDATA[` + _data.nclTask2CCodeOnly + ` ]]></script>
`

// ----------------------------------------
// ncl page - recognition combination
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.3',
  elements: [
    {
      name: 'nclIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>Um dos principais benefícios de interfaces multimodais é permitir que
        as interações dos usuários possam ser realizadas por diferentes
        modalidades.</p>
        
        <p>O trecho de código a seguir ilustra o arquivo <i>rec_gestos.gml</i>
        que segue o formato GML (Gesture Markup Language) para reconhecimento de
        gestos de mão. Ele possui dois gestos com os identificadores
        <i>swipe_esquerda</i> e <i>swipe_direita</i>, que definem gestos de
        mão para esquerda e para direita, respectivamente.</p>
        </div>

        <div id='nclIntro3CodeA'></div>
        <div id='nclIntro3CodeB'></div>
        
        <div style="text-align: justify; width: 70%;"> 
        <p>Na NCL estendida, a combinação de modalidades de interação pode ser
        defiida utilizando uma condição composta. Uma condição composta em um
        <i>&ltlink></i> combina condições simples utilizando um dos seguintes
        operadores: 'or' quando apenas uma das condições é necessária; 'and'
        quando todas condições são necessárias em qualquer ordem; e 'seq' quando
        todas as condições são necessárias e devem acontecer na sequência
        estabelecida.</p>
        
        <p>Para ilustrar o uso de combinação de modalidades, o trecho de código
        a seguir apresenta uma uma nova versão (modificações em destaque) da
        aplicação em Conceitos 2.2, a qual reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo é reiniciado quando usuário
        falar "repita vídeo" ou (operador "or") quando fizer um gesto de
        deslizar mão para esquerda.</p>
        </div>
        
        <div id='nclIntro3CodeC'></div> </div>
      `
    }
  ]
})

_data.nclIntro3CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"> <![CDATA[
  <?xml version="1.0" encoding="UTF-8"?>
  <GestureMarkupLanguage>
    <Gesture id="swipe_esquerda" type="swipe">
      ..
    </Gesture>
    <Gesture id="swipe_direta" type="swipe">
      ..
    </Gesture>
  </GestureMarkupLanguage>
  ]]></script>
`

_data.nclIntro3CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[
  <input id="rec_gesto" src="rec_gesto.gml">
    <area label="esquerda"></repete> <!-- referência id esquerda de rec_gesto.gml-->
    <area label="direita"></repete> <!-- referência id direita de rec_gesto.gml-->
  </input>
  ]]></script>
`
_data.nclIntro3CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[20,21,22,27,29,30,31,32,33,34,35,36]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"/>
        <area id="creditos" begin="300s" end="360s"/>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"/> <!-- referência id pergunta de sinte_voz.ssml-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></repete> <!-- referência id repete de rec_voz.srgs-->
      </input>
      <input id="rec_gesto" src="rec_gesto.gml">
        <area label="esquerda"></repete> <!-- referência id esquerda de rec_gesto.gml-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"/>
        <bind role="start" component="sinte_voz" interface="pergunta"/>
        <bind role="start" component="rec_voz"/>
        <bind role="start" component="rec_gesto"/>
      </link>
      <link xconnector="conEx#onOrRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete">
        <bind role="onRecognize" component="rec_gesto" interface="esquerda">
        <bind role="stop" component="rec_voz"/>
        <bind role="stop" component="rec_gesto"/>
        <bind role="stop" component="video_principal">
        <bind role="start" component="video_principal">
      </link>
    </body>
  </ncl>
  ]]></script>
`

// ----------------------------------------
// ncl page - recognition combination - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.3',
  elements: [
    {
      type: 'comment',
      isRequired: true,
      name: 'nclTask3Question',
      rows: '47',
      title: ' Agora pedimos que você edite o código NCL da Tarefa 2.2 (copiado a seguir) para que seja possível a interação por voz <strong>ou</strong> (operador OR) interação por gestos. Na interação por gesto, você pode referenciar o arquivo de descrição <i>rec_gestos.gml</i>, apresentado em Conceitos 2.3, e considere que gesto de deslizar a mão para esquerda indica centro e gesto de deslizar a mão para direita indica praia.'
    }
  ]
})

// ----------------------------------------
// ncl page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.4',
  elements: [
    {
      name: 'nclIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>O conceito de Grupo de Usuários é definido <strong>por um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Na NCL, o Grupo de Usuários é implementado pelo
        elemento <i>&ltuserClass></i>, filho do elemento <i>&lthead></i>. O
        identificador é definido pelo atributo <i>id</i> e os dispositivos são
        definidos por um arquivo de descrição no formato SPARQL. O trecho de
        código a seguir apresenta o arquivo de descrição de usuários
        <i>gu_leap_microphone.sparql</i>. Essa descrição define que cada usuário
        do grupo deve ter um microfone e um lLeapMotion.</p>
        </div>

        <div id='nclIntro4CodeA'></div>

        <div style="text-align: justify; width: 70%;"> 
        <p>Para ilustrar o uso de um Grupo de Usuários em NCL, o trecho de
        código a seguir apresenta uma nova versão (modificações em destaque) da
        aplicação em Conceitos 2.2, a qual reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo será reiniciado apenas quando
        o segundo usuário falar "repita vídeo". Esse grupo é definido com um
        máximo de 2 usuários e com os dispositivos descritos no arquivo
        <i>gu_leap_microphone.sparql</i> (apresentado acima).</p>
        </div>

        <div id='nclIntro4CodeB'></div>
      `
    }
  ]
})

_data.nclIntro4CodeA = `
  <script type="syntaxhighlighter" class="brush: plain; toolbar: false;
  auto-links: false"> <![CDATA[
  PREFIX foaf: <http://xmlns.com/foaf/0.1>
  PREFIX prf: <http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430>
  SELECT ?person
  WHERE {
  ?person prf:component ?component.
  ?component prf: name ?name FILTER regex(?name, "Leap Motion")
    ?name FILTER regex(?name, "microfone")
  }
  ]]></script>
`
_data.nclIntro4CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[7,8,9,10,31]"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <importBase documentURI="causalConnBase.ncl" alias="conEx"></importBase>
      </connectorBase>
      <userBase>
        <userClass id="gu_leap_microphone" max="2"
          userClassDescription="gu_leap_microphone.sparql"></userClass>
      </userBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"/>
        <area id="creditos" begin="300s" end="360s"/>
      </media>
      <media id="sinte_voz" src="sinte_voz.srgs">
        <area label="pergunta"/> <!-- referência id pergunta de sinte_voz.srgs-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"/> <!-- referência id repete de rec_voz.srgs-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"/>
        <bind role="start" component="sinte_voz" interface="pergunta"/>
        <bind role="start" component="rec_voz"/>
      </link>
      <link xconnector="conEx#onRecognizeStart">
        <bind role="onRecognize" component="rec_voz" interface="repete">
          <bindParam name="user_id" value="gu_leap_microphone(2)"></bindParam>
        </bind>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
      </link>
    </body>
  </ncl>
  ]]></script>
`

// ----------------------------------------
// ncl page - user - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.4',
  elements: [
    {
      type: 'comment',
      name: 'nclTask4Question',
      rows: '47',
      title: 'Agora pedimos que você edite novamente o trecho de código NCL da Tarefa 2.2 (copiado a seguir) para que apenas o segundo usuário, de um grupo de 3 usuários com microfone, possa realizar a interação por voz.'
    }
  ]
})

// ----------------------------------------
// ncl feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'nclFeedback',
  visibleIf: _switchRuleNCL,
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginNCLFeedback'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências de como os conceitos apresentados na seção
        erior(<i>Mídieconhecedor, Relacionamento</i> e Grupo de
        Usuários) estão instanciados na NCL para suportar interações
        multimodais.</p>
        </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion1',
      title: `A NCL estendida permite **realizar rapidamente** o
        desenvolvimento de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion2',
      title: `A NCL estendida permite o desenvolvimento de aplicações
        multimodais **com qualidade**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion3',
      title: `De modo geral, a NCL estendida permite **é útil** para o
        desenvolvimento de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion4',
      title: 'A NCL estendida **é simples e entendível**.',
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion5',
      title: 'A NCL estendida **é fácil de aprender**.',
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion6',
      title: 'De modo geral, a NCL estendida **é fácil de utilizar**.',
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion7',
      title: `Os conceitos apresentados na seção anterior estão **claramente
        instanciados** na NCL estendida.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion8',
      title: `De modo geral, a NCL estendida **melhora** o desenvolvimento de
      aplicações multimodal em comparação com a NCL atual.`,
      choices: _agreeChoices
    }
  ]
})

// ----------------------------------------
// html page
// ----------------------------------------

pageIndex = _data.surveyJSON.pages.push({
  name: 'html',
  visibleIf: _switchRuleHTML,
  elements: [{
    type: 'text',
    visible: false,
    name: 'timeBeginHTML'
  }]
}) - 1

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'html',
  html: `
    <div style="text-align: justify; width: 70%;">
    <p>A linguagem HTML é utilizada para criar conteúdo multimídia na web. 
    vamos apresentar como os conceitos da seção anterior são instanciados em
    HTML para esta oferecer suporte a interações multimodais.</p>
    
    <p>Os conceitos são instanciados na HTML dentro de uma novo elemento chamado
    <i>&ltmm-scene></i>, que contém alguns elementos HTML e outros novos. O
    conceito de Mídia é implementado por elementos já existentes em HTML como
    <i>&ltimg></i>, <i>&ltvideo></i> e <i>&ltaudio></i>, os quais são estendidos
    com o conceito de âncora. O conceito de Relacionamento é instanciado pelo
    elemento <i>&ltmm-link></i>. Já os conceitos de Reconhecedor e Grupo de
    usuários são implementados na HTML pelos elementos <i>&ltmm-input> e
    <i>&ltmm-userClass></i>, respectivamente. A tabela a seguir apresenta nossa
    proposta de instanciação dos conceitos.</p>

    <table align="center" class="table-bordered table-striped
    table-condensed">
      <tr>
        <th>Conceito</th>
        <th>HTML atual</th>
        <th>Como propomos</th>
      </tr>
      <tr>
        <td>Mídia</i></td>
        <td><i>&ltimg></i>, <i>&ltvideo></i>, <i>&ltaudio></i>
        </td>
        <td>estender esses elementos com <i>&ltmm-area> e adicionar
        <i>&ltmm-media></i></td>
      </tr>
      <tr>
        <td>Relacionamento</td>
        <td>não presente</td>
        <td>adicionar elemento <i>&ltmm-link></i></td>
      </tr>
      <tr>
        <td>Reconhecedor</td>
        <td><i>não presente</i></td>
        <td>adicionar elemento <i>&ltmm-input></i></td>
      </tr>
      <tr>
        <td>Grupo de Usuários</td>
        <td>não presente</td></td>
        <td>adicionar elemento <i>&ltmm-userClass></i></td>
      </tr>
    </table>
    <br>
    <p>Vamos agora detalhar o uso dos conceitos na HTML e pedir que você realize
    algumas tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a
    avaliar seus conhecimentos, mas sim capturar evidências de nossa
    pesquisa</strong>.</p>
    </div>
  `
})

// ----------------------------------------
// html page - media and link
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.1',
  elements: [
    {
      name: 'htmlIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Mídia é definido por <strong>um identificador, um
        conteúdo e âncoras</strong>. Na HTML estendida, o conceito de Mídia é
        implementado por elementos como <i>&ltimg></i>, <i>&ltaudio></i>,
        <i>&ltvideo></i>, para respectivamente imagem, video e audio, e um novo
        elemento <i>&ltmm-media></i> para outras modalidades. O identificador é
        definido pelo atributo <i>id</i> e o arquivo de mídia do conteúdo é
        definido pelo atributo <i>src</i>. Para permitir definir âncoras esses
        elementos podem possuir elementos <i>&ltmm-area></i> como filhos. Uma
        <i>&ltmm-area></i> pode definir uma porção temporal com os atributos
        <i>begin</i> e <i>end</i> ou um trecho delimitado com o atributo
        <i>label</i>.</p>

        <p>Os elementos que definem Mídias também podem especificar suas
        características de exibição por meio do atributo <i>style</i>. O trecho
        de código a seguir define duas mídias com identificadores
        <i>midia_principal</i> e <i>icone_repetir</i>, e com conteúdos de vídeo
        e imagem, respectivamente. Em especial, a mídia de
        <i>midia_principal</i> possui uma âncora chamada de <i>creditos</i> que
        inicia aos 300 e termina aos 360 segundos.</p>
        </div>

        <div id='htmlIntro1CodeA'></div>

        <div style="text-align: justify; width: 70%;">
        <p><p>O conceito de Relacionamento permite definir o comportamento das
        aplicações por meio de relações causais. Um Relacionamento é definido
        por <strong>um conjunto de condições e um conjunto de ações</strong>. Na
        HTML estendida, um Relacionamento é implementado pelo elemento
        <i>&ltmm-link></i>.</p>
        
        <p>As ações podem ser de iniciar ("start") ou parar ("stop") uma Mídia
        ou Reconhecedor. Já as condições podem ser simples ou compostas. As
        condições simples em um objeto <i>&ltmm-link></i> podem ser de início
        ("onBegin") ou fim ("onEnd") de uma mídia ou de sua âncora, seleção de
        mídia pelo usuário ("onSelection") ou reconhecimento de uma interação
        multimodal ("onRecognition").<p>

        <p>Para ilustrar o uso desses conceitos, o trecho de código a seguir
        define uma aplicação que apresenta um vídeo e um ícone durante os
        créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado. Ela utiliza dois elementos <i>&limg></i>, um <i>&lvideo></i>
        e um <i>script</i> que define três objetos <i>&ltmm-link></i>. O
        primeiro <i>&ltmm-link></i> define que o elemento <i>midia_principal</i>
        inicia com a aplicação. O segundo <i>&ltmm-link></i> define que quando o
        <i>video_principal</i> alcançar o seu trecho de <i>creditos<i>, a imagem
        <i>icone_repetir</i> é iniciada. O terceiro <i>&ltmm-link></i> define
        que quando o <i>icone_repetir</i> for selecionado, o
        <i>video_principal</i> será reiniciado (<i><i>&ltmm-stop></i></i> e
        <i><i>&ltmm-start></i></i>).</p>
        </div>

        <div id='htmlIntro1CodeB'></div>
      `
    }
  ]
})

_data.htmlIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <video id="midia_principal" src="video.mp4"
    style="position: absolute; height 100%; width: 100%;">
    <mm-area id="creditos" begin="300s" end="360s">
  </video>
  <img id="icone_repetir" src="icone.png"
     style="position: absolute; width: 20%; height: 20%; left: 80%; z-index: 1;">
  ]]></script>
`

_data.htmlIntro1CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <body>
  <mm-scene id="scene">
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <mm-area id="creditos" begin="300s" end="360s">
    </video>
    <img id="icone_repetir" src="icone_repetir.png"
      style="position: absolute; width: 20%; height: 20%; z-index: 1;">
    <mm-link>
      <mm-onBegin interface="scene">
      <mm-start interface="midia_principal">
    </mm-link>
    <mm-link>
      <mm-onBegin interface="midia_principal#creditos">
      <mm-start interface="icone_repetir">
    </mm-link>
    <mm-link>
      <mm-onSelection interface="icone_repetir">
      <mm-stop interface="midia_principal">
      <mm-start interface="midia_principal">
    </mm-link>
  </mm-scene>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - media and link - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.1',
  elements: [
    {
      type: 'html',
      name: 'htmlTask1',
      html: `
      <div style="text-align: justify; width: 70%;">
      <p>Por favor, analise com atenção o trecho de código HTML a seguir.</p>
      </div>
      <div id='htmlTask1CodeA'></div>
    `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'htmlTask1Question',
      rows: '9',
      title: 'Qual é o comportamento da aplicação?'
    }
  ]
})

_data.htmlTask1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <mm-scene id="scene">
    <video id="video_inicial" src="video_inicial.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <mm-area id="creditos" begin="300s" end="360s">
    </video>
    <video id="video_centro" src="video_centro.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <mm-area id="creditos" begin="300s" end="360s">
    </video>
    <video id="video_praia" src="video_praia.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <mm-area id="creditos" begin="300s" end="360s">
    </video>
    <img id="icone_centro" src="icone_centro.png"
      style="position: absolute; width: 20%; height: 20%; z-index: 1;">
    <img id="icone_praia" src="icone_praia.png"
      style="position: absolute; width: 20%; height: 20%; left: 80%; z-index: 1;">
    <mm-link>
      <mm-onBegin interface="scene">
      <mm-start interface="video_inicial">
    </mm-link>
    <mm-link>
      <mm-onBegin interface="video_inicial#creditos">
      <mm-start interface="icone_centro">
      <mm-start interface="icone_praia">
    </mm-link>
    <mm-link>
      <mm-onBegin interface="icone_repetir">
      <mm-stop interface="video_inicial">
      <mm-start interface="video_inicial">
    </mm-link>
  </mm-scene>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - recognition
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.2',
  elements: [
    {
      name: 'htmlIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>Além de mídias como imagens, áudios e vídeos, a HTML estendida também
        deve suportar outras modalidades de conteúdo, como interações por voz,
        através do elemento <i>&ltmm-media></i> </p>

        <p>Os trechos de código a seguir ilustram o uso de sintetização de voz
        na HTML estendida. O primeiro trecho de código apresenta o arquivo
        <i>sinte_voz.ssml</i> que segue o formato SSML (Speech Synthesis Markup
        Language) para sintetização de voz. Ele possui um elemento <i>&lts></i>
        com identificador "pergunta" que sintetizada a frase: "você deseja
        repetir o vídeo?". O segundo trecho de código define uma
        <i>&ltmm-media></i> com identificador <i>sinte_voz</i>, que tem como
        conteúdo o arquivo <i>sinte_voz.ssml</i>. Esse <i>&ltmm-media></i>
        possui uma âncora que indica a frase a ser sintetizada.</p>
        </div>

        <div id='htmlIntro2CodeA'></div>
        <div id='htmlIntro2CodeB'></div>

        <div style="text-align: justify; width: 70%;"> 
        <p>O conceito de Reconhecedor é definido por <strong>um identificador,
        seu conteúdo e âncoras</strong>. Na HTML estendida, ele é implementado
        pelo elemento <i>&ltmm-input></i>. O identificador é definido pelo
        atributo <i>id</i> e a descrição de reconhecimento é definida pelo
        atributo <i>src</i>. As âncoras são definidas pelo elemento <i>area</i>
        e podem definir trechos delimitados da descrição com o atributo
        <i>label</i>.</p>

        <p>Para ilustrar o uso de um Reconhecedor, os trechos de código a seguir
        ilustram o uso de reconhecimento de voz na HTML estendida. O primeiro
        trecho ilustra o arquivo <i>rec_voz.srgs</i> que segue o formato SRGS
        (Speech Recognition Grammar Specification) reconhecimento de voz. Ele
        possui uma frase com o identificador <i>repete</i> que define o
        reconhecimento de voz "repita vídeo". O segundo define um
        <i>&ltmm-input></i> com identificador <i>rec_voz</i>, que tem como
        conteúdo o arquivo <i>rec_voz.srgs</i>. Além disso esse
        <i>&ltmm-input></i> possui uma âncora que indica a frase a ser
        reconhecida.</p>
        </div>

        <div id='htmlIntro2CodeC'></div>
        <div id='htmlIntro2CodeD'></div>

        <div style="text-align: justify; width: 70%;"> 
        <p>Para ilustrar o uso de interação por voz, o trecho de código a seguir
        apresenta uma nova versão (modificações em destaque) da aplicação da
        parte Conceitos 2.1 que reinicia um vídeo dada uma interação por
        seleção. Nessa versão, em vez de selecionar o ícone, o vídeo é
        reiniciado quando usuário falar "repita vídeo". A primeira diferença
        está no uso dos elementos <i>sinte_voz</i> e <i>rec_voz</i> para
        interação por voz, que utilizam os arquivos <i>sinte_voz.srgs</i> e
        <i>rec_voz.srgs</i> (apresentados acima).</p>

        <p>Dois elementos <i>&ltmm-link></i> do elemento <i>&ltscript></i>
        também foram modificados. O primeiro <i>&ltmm-link></i> modificado
        define que quando o <i>video_principal</i> alcançar o trecho de
        <i>creditos</i> (300s), a frase da âncora <i>pergunta</i> é sintetizada
        e o reconhecedor <i>rec</i> é ativado (a partir desse momento, ele
        poderá reconhecer interações de voz). O segundo <i>&ltmm-link></i>
        modificado define que quando for reconhecida a âncora <i>repete</i>, a
        <i>midia_principal</i> será reiniciada (terminada e iniciada).</p>
        </div>

        <div id='htmlIntro2CodeE'></div>
      `
    }
  ]
})

_data.htmlIntro2CodeA = _data.nclIntro2CodeA

_data.htmlIntro2CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <mm-media id="sinte_voz" src="sinte_voz.ssml">
    <mm-area label="pergunta"> <!-- referência id pergunta de sinte_voz.ssml-->
  </mm-media>
  ]]></script>
`

_data.htmlIntro2CodeC = _data.nclIntro2CodeC
_data.htmlIntro2CodeD = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"><![CDATA[
  <mm-input id="rec_voz" src="rec_voz.srgs">
    <mm-area label="repete"> <!-- referência id repete de rec_voz.srgs-->
  </mm-input>
  ]]></script>
`
_data.htmlIntro2CodeE = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[10,11,12,13,14,15,25,26]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <body>
    <mm-scene id="scene">
      <video id="midia_principal" src="video.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <mm-media id="sinte_voz" src="sinte_voz.ssml">
        <mm-area label="pergunta"> <!-- referência id pergunta de sinte_voz.ssml-->
      </mm-media>
      <mm-input id="rec_voz" src="rec_voz.srgs">
        <mm-area label="repete"> <!-- referência id repete de rec_voz.srgs-->
      </mm-input>
      <mm-link>
        <mm-onBegin interface="scene">
        <mm-start interface="midia_principal">
      </mm-link>
      <mm-link>
        <mm-onBegin interface="midia_principal#creditos">
        <mm-start interface="sinte_voz">
        <mm-start interface="rec_voz">
      </mm-link>
      <mm-link>
        <mm-onRecognize interface="rec_voz#repete">
        <mm-stop interface="midia_principal">
        <mm-start interface="midia_principal">
      </mm-link>
    </mm-scene>
  </body>
  </html>
  ]]></script>
`
// ----------------------------------------
// html page - recognition - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.2',
  elements: [
    {
      type: 'html',
      name: 'htmlTask2',
      html: `
      <div style="text-align: justify; width: 70%;">
      Considere as descrições sinte_voz.ssml e rec_voz.srgs, respectivamente, a
      seguir.<br><br>
      </div>

      <div id='htmlTask2CodeA'></div>
      <div id='htmlTask2CodeB'></div>

      <div style="text-align: justify; width: 70%;">
      <p>O código HTML a seguir é uma versão modificada da Tarefa 2.1 para
      permitir interações multimodais utilizando as duas descrições acima. Por
      favor, analise atenção.</p>
      </div>

      <div id='htmlTask2CodeC'></div>
    `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'htmlTask2Question',
      rows: '9',
      title: 'Qual é o novo comportamento da aplicação?'
    }
  ]
})

_data.htmlTask2CodeCOnly = `
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <body>
    <mm-scene id="scene">
      <video id="video_inicial" src="video_inicial.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <video id="video_centro" src="video_centro.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <video id="video_praia" src="video_praia.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <mm-media id="sinte_voz" src="sinte_voz.ssml">
        <mm-area label="pergunta"> 
      </mm-media>
      <mm-input id="rec_voz" src="rec_voz.srgs">
        <mm-area label="repete"></repete>
      </mm-input>
      <mm-link>
        <mm-onBegin interface="scene">
        <mm-start interface="video_inicial">
      </mm-link>
      <mm-link>
        <mm-onBegin interface="video_inicial#creditos">
        <mm-start interface="sinte_voz">
        <mm-start interface="rec_voz">
      </mm-link>
      <mm-link>
        <mm-onRecognize interface="rec_voz#centro">
        <mm-stop interface="video_inicial">
        <mm-start interface="video_centro">
      </mm-link>
      <mm-link>
        <mm-onRecognize interface="rec_voz#praia">
        <mm-stop interface="video_inicial">
        <mm-start interface="video_praia">
      </mm-link>
    </mm-scene>
  </body>
  </html>
`

_data.htmlTask2CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[17,18,19,20,21,22,30] "> <![CDATA[` + _data.htmlTask2CodeCOnly + `]]></script>
`

// ----------------------------------------
// html page - recognition combination
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.3',
  elements: [
    {
      name: 'htmlIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Um dos principais benefícios de interfaces multimodais é permitir que
        as interações dos usuários possam ser realizadas por diferentes
        modalidades.</p>
        
        <p> O trecho de código a seguir ilustra o arquivo <i>rec_gestos.gml</i>
        que segue o formato GML (Gesture Markup Language) para reconhecimento de
        gestos de mão. Ele possui dois gestos com os identificadores
        <i>swipe_esquerda</i> e <i>swipe_direita</i>, que definem gestos de mão
        para esquerda e para direita, respectivamente.</p>
        </div>

        <div id='htmlIntro3CodeA'></div>
        <div id='htmlIntro3CodeB'></div>

        <div style="text-align: justify; width: 70%;">
        <p>Na HTML estendida, a combinação de modalidades de interação pode ser
        feita utilizando uma condição composta. Uma condição composta é definida
        pelo elemento <i>&ltmm-compoundCondition></i> e tem condições simples
        como filhos. A combinação entre as condiões é definida pelo atributo
        <i>operator</i> utilizando um dos seguintes valores: 'or' quando apenas
        uma das condições é necessária; 'and' quando todas as condições são
        necessárias em qualquer ordem; e 'seq' quando todas as condições são
        necessárias e devem acontecer na sequência estabelecida.</p>

        <p>Para ilustrar o uso de combinação de modalidades, o trecho de código
        a seguir apresenta uma nova versão (modificações em destaque) da
        aplicação em Conceitos 2.2, a qual reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo é reiniciado quando usuário
        falar "repita vídeo" ou (operador "or") quando fizer um gesto de
        deslizar mão para esquerda.
        </div>

        <div id='htmlIntro3CodeC'></div> 
      `
    }
  ]
})
_data.htmlIntro3CodeA = _data.nclIntro3CodeA

_data.htmlIntro3CodeB = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"><![CDATA[
  <mm-input id="rec_gesto" src="rec_gesto.gml">
    <mm-area label="esquerda"> <!-- referência id esquerda de rec_gesto.gml-->
  </mm-input>
  ]]></script>
`
_data.htmlIntro3CodeC = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[15,16,17,27,29,30,31,32,33,34,35]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <body>
    <mm-scene id="scene">
      <video id="midia_principal" src="video.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <mm-media id="sinte_voz" src="sinte_voz.ssml">
        <mm-area label="pergunta"> <!-- referência id pergunta de sinte_voz.ssml-->
      </mm-media>
      <mm-input id="rec_voz" src="rec_voz.srgs">
        <mm-area label="repete"> <!-- referência id repete de rec_voz.srgs-->
      </mm-input>
      <mm-input id="rec_gesto" src="rec_gesto.gml">
        <mm-area label="esquerda"> <!-- referência id esquerda de rec_gesto.gml-->
      </mm-input>
     <mm-link>
        <mm-onBegin interface="scene">
        <mm-start interface="midia_principal">
      </mm-link>
      <mm-link>
        <mm-onBegin interface="midia_principal#creditos">
        <mm-start interface="sinte_voz">
        <mm-start interface="rec_voz">
        <mm-start interface="rec_gesto">
      </mm-link>
      <mm-link>
        <mm-compoundCondition operator="or">
          <mm-onRecognize interface="rec_voz#praia">
          <mm-onRecognize interface="rec_gesto#esquerda">
        </mm-compoundCondition>
        <mm-stop interface="midia_principal">
        <mm-start interface="midia_principal">
      </mm-link>
    </mm-scene>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - recognition combination - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.3',
  elements: [
    {
      type: 'comment',
      name: 'htmlTask3Question',
      rows: '47',
      title: 'Agora pedimos que você edite o código HTML da Tarefa 2.2 (copiado a seguir) para que seja possível a interação por voz <strong>ou</strong> (operador OR) interação por gestos. Na interação por gesto, você pode referenciar o arquivo de descrição <i>rec_gestos.gml</i>, apresentado em Conceitos 2.3. Considere também que o gesto de deslizar a mão para esquerda indica centro e gesto de deslizar a mão para direita indica praia.'
    }
  ]
})

// ----------------------------------------
// html page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Conceitos 2.4',
  elements: [
    {
      name: 'htmlIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de Grupo de Usuários é definido <strong>por um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Na HTML estendida, um Grupo de Usuários é definido
        pelo elemento <i>&ltmm-userClass></i>, o qual deve referenciar um
        arquivo SPARQL por meio de seu atributo <i>src</i>. O formato SPARQL é
        utilizado para definir como um determinado ususário é selecionado para
        participar ou não de um determinado grupo . O trecho de código a seguir
        apresenta o arquivo de descrição de usuários
        <i>gu_leap_microphone.sparql</i>, o qual que cada usuário do grupo deve
        ter um microfone e um leapmotion.</p>
        </div>

        <div id='htmlIntro4CodeA'></div>

        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso de um Grupo de Usuários em HTML, o trecho de
        código a seguir apresenta uma uma nova versão (modificações em destaque)
        da aplicação definida em Conceitos 2.2, a qual reinicia um vídeo dada
        uma interação por voz. Nessa versão, o vídeo será reiniciado apenas
        quando o segundo usuário falar "repita vídeo". Esse grupo é definido com
        um máximo de 2 usuários e com os dispositivos descritos no arquivo
        <i>gu_leap_microphone.sparql</i> (apresentado acima).</p>
        </div>

        <div id='htmlIntro4CodeB'></div>
      `
    }
  ]
})

_data.htmlIntro4CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false]"> <![CDATA[
    var sparql =
      \`PREFIX foaf: <http://xmlns.com/foaf/0.1>
      PREFIX prf: <http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430>
      SELECT ?person
      WHERE {
        ?person prf:component ?component.
        ?component prf: name ?name FILTER regex(?name, "Leap Motion")
        ?name FILTER regex(?name, "microfone")
      }\`
    var gu_leap_microphone = new UserGroup(sparql, 2)
  ]]></script>
`

_data.htmlIntro4CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[16,17,18,19,20,21,22,23,24,25,33,35,36]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
  <head><script src="multimodal.js"><&#47script></head>
  <body>
    <mm-scene id="scene">
      <video id="midia_principal" src="video.mp4"
        style="position: absolute; height 100%; width: 100%;">
        <mm-area id="creditos" begin="300s" end="360s">
      </video>
      <mm-media id="sinte_voz" src="sinte_voz.ssml">
        <mm-area label="pergunta">  <!-- referência id sinte_voz de sinte_voz.ssml-->
      </mm-media>
      <mm-input id="rec_voz" src="rec_voz.srgs">
        <mm-area label="repete"> <!-- referência id repete de rec_voz.srgs-->
      </mm-input>
      <mm-userClass src="gu_leap_microphone.sparql" max="2">
      <mm-link>
        <mm-onBegin interface="scene">
        <mm-start interface="midia_principal">
      </mm-link>
      <mm-link>
        <mm-onBegin interface="midia_principal#creditos">
        <mm-start interface="sinte_voz">
      </link>
      <mm-link>
        <mm-onRecognize interface="rec_voz#repete" user_id="gu_leap_microphone(2)">
        <mm-stop interface="midia_principal">
        <mm-start interface="midia_principal">
      </mm-link>
    </mm-scene>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - user - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Tarefa 2.4',
  elements: [
    {
      type: 'comment',
      name: 'htmlTask4Question',
      rows: '47',
      title: 'Agora pedimos que você edite novamente o trecho de código HTML da Tarefa 2.2 (copiado a seguir) para que apenas o segundo usuário,de um grupo de 3 usuários com microfone, possa realizar a interação por voz.'
    }]
})

// ----------------------------------------
// html feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'htmlFeedback',
  visibleIf: _switchRuleHTML,
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginHTMLFeedback'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências de como os conceitos apresentados na seção anterior
        (Mídia, Reconhecedor, Relacionamento e Grupo de Usuários)
        estão instanciados na HTML para suportar interações multimodais.</p>
        </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion1',
      title: `A HTML estendida permite **realizar rapidamente** o
        desenvolvimento de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion2',
      title: `A HTML estendida permite o desenvolvimento de aplicações
        multimodais **com qualidade**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion3',
      title: `De modo geral, a HTML estendida **é útil** para o desenvolvimento
        de aplicações multimodais.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion4',
      title: 'A HTML estendida **é simples e entendível**.',
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion5',
      title: 'A HTML estendida **é fácil de aprender**.',
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion6',
      title: `De modo geral, a HTML estendida **é fácil de utilizar**.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion7',
      title: `Os conceitos apresentados na seção anterior estão **claramente
        instanciados** na HTML estendida.`,
      choices: _agreeChoices
    },
    {
      e: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion8',
      title: `De modo geral, a HTML estendida **melhora** o desenvolvimento de
      aplicações multimodal em comparação com a HTML atual.`,
      choices: _agreeChoices
    }
  ]
})

// ----------------------------------------
// comments feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'comments',
  title: 'Comentários adicionais',
  elements: [
    {
      type: 'text',
      visible: false,
      name: 'timeBeginComments'
    },
    {
      type: 'text',
      visible: false,
      name: 'timeEndSurvey'
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Chegamos ao fim de nosso estudo. Se desejar, deixe comentários
        adicionais sobre os pontos a seguir.</p>
        </div>
      `
    },
    {
      type: 'comment',
      name: 'commentsFinal',
      rows: '9',
      title: `Estamos dispostos a ouvir sugestões para melhorar os conceitos ou nossa instanciação. Se tiver sugestões, por favor comente.`
    },
    {
      type: 'comment',
      rows: '9',
      title: `Você consegue pensar em aplicação interessantes que você poderia
        desenvolver os conceitos apresentados neste estudo? Se sim, por favor
        comente.`
    }
  ]
})

// ----------------------------------------
// final page
// ----------------------------------------

_data.surveyJSON.completedHtml = `
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <div class='alert alert-success' role='alert' style='text-align:center;'>
    <h2>Terminamos nosso estudo.<br>
    Somos muito gratos por sua participação.</h2>
    <span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;'
      aria-hidden='true'></span>
  </div>
`
