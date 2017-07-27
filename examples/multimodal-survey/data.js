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
  pages: []
}
var pageIndex

var _agreeChoices = [
  'Discordo fortemente', 'Discordo bastante', 'Discordo um pouco',
  'Não concordo nem discordo', 'Concordo um pouco', 'Concordo',
  'Concordo fortemente'
]

// var _switchRuleNCL = '{profileNCL1} >= {profileHTML1}'
var _switchRuleNCL = ''
// var _switchRuleHTML = '{profileHTML1} > {profileNCL1}'
var _switchRuleHTML = ''

// ----------------------------------------
// termo page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'termo',
  title: 'Termo de consentimento livre e esclarecido',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O TeleMídia é um grupo de pesquisa da PUC-Rio que desenvolve
        pesquisas em Sistemas Multimídia.</p>

        <p>Convidamos a você a participar deste estudo sobre nossa pesquisa
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
        <p>Caso esteja de acordo, prossiga.</p>
        </div>
      `
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


        <p><strong>Interfaces multimodais </strong>são aquelas que
        caracterizadas pelo uso (possivelmente simultâneo) de múltiplas
        modalidades dos sentidos humanos e que podem combinar entrada (e.g.
        reconhecimento de gestos do usuário) e saída (e.g. sintetização de voz).
        Comparado com as tecnologias atuais de mouse, teclado e displays, as
        tecnologias de interface multimodais permitem o desenvolvimento de
        interfaces com computadores formas de comunicação mais naturais para o
        ser da linguagem e comportamento humano, e.g. interfaces por meio de
        fala como fala e gestos. Ilustrados a seguir, citamos o uso de
        microfones para reconhecimento de voz, e dispositivos como LeapMotion e
        Microsoft Kinect para reconhecimento de gestos.</p>

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
          <img class='img-thumbnail' style='height: 400px'
          src='assets/overview1.png'>
          <span style="margin-left:10px"></span>
          <img class='img-thumbnail' style='height: 400px'
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
  name: 'perfil',
  title: 'Dados do participante',
  elements: [
    {
      type: 'text',
      isRequired: true,
      name: 'name',
      title: 'Qual seu nome?'
    },
    // {
    //   type: 'text',
    //   isRequired: true,
    //   name: 'email',
    //   title: 'Qual seu e-mail de contato?',
    //   validators: [{ type: 'email' }]
    // },
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
      name: 'profileApps',
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
      name: 'profileNCL2',
      title: `Quais modalidades de interação você utilizou em suas aplicações multimodais?`,
      visibleIf: '{profileMultimodalApps} == Sim',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileBlocks',
      title: `Você já utilizou alguma ferramenta programação por blocos, como Scratch ou MIT AppInventor?`,
      choices: ['Nunca', 'Quase nunca', 'Indiferente', 'Quase sempre ',
        'Sempre']
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
  elements: []
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

        <div id='conceptsIntro1A'></div><br>

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
        aplicação utiliza duas Mídia (<i>midia_principal</i> e
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
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">midia_principal</field>
      <value name="src">
        <block type="video" id="OFge%WW-~~.%rZKqZqym">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0">360s</field>
        </block>
      </value>
    </block>
    <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="594" y="71">
      <field name="id">icone_repetir</field>
      <value name="src">
        <block type="image" id="n8jL;6KJe-2c6B~=pPj("></block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro1BlocksB = `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="21" y="12">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="OFge%WW-~~.%rZKqZqym">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="609" y="21">
    <field name="id">midia_principal</field>
  </block>
  <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="612" y="110">
    <value name="conditions">
      <block type="onbegin" id="(H8xxhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
        <field name="id">icone_repetir</field>
      </block>
    </statement>
  </block>
  <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="24" y="238">
    <field name="id">icone_repetir</field>
    <value name="src">
      <block type="image" id="n8jL;6KJe-2c6B~=pPj("></block>
    </value>
  </block>
  <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="614" y="239">
    <value name="conditions">
      <block type="onselection" id="(H8dBhXk6.y#]q%\`UM^D">
        <field name="id">icone_repetir</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="UEqL{b=Ws2G#w}+xMs%m">
        <field name="id">icone_repetir</field>
        <next>
          <block type="stop" id="UEqL{b=Ws2G#w}+xMa%m">
            <field name="id">midia_principal</field>
            <next>
              <block type="start" id=".Pt;)N?s.:xGz;dDp@+W">
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
  <block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20">
    <field name="id">video_principal</field>
    <value name="src">
      <block type="video" id="CG[^N,5)TV)0_N#+|cgE">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="609" y="14">
    <field name="id">video_principal</field>
  </block>
  <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="609" y="99">
    <value name="conditions">
      <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
        <field name="id">icone_centro</field>
        <next>
          <block type="start" id=".Pt;)N?Y.:xGz;dDp@+W">
            <field name="id">icone_praia</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="J0=3=8AB$lViiF[SYu#!" x="20" y="160">
    <field name="id">video_centro</field>
    <value name="src">
      <block type="video" id="]70x,I^+Yv!UsVCeeY()">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="609" y="251">
    <value name="conditions">
      <block type="onselection" id="voo~B}yCX+XML3~iOm0r">
        <field name="id">icone_centro</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?">
            <field name="id">icone_centro</field>
            <next>
              <block type="stop" id="xz194KXLw:HdJABl^)[9">
                <field name="id">icone_praia</field>
                <next>
                  <block type="start" id="Wo67TbqF5]_pN(b1R3D_">
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
  <block type="media" id="IawJU?Sm-z4If\`ixT^_p" x="20" y="301">
    <field name="id">video_praia</field>
    <value name="src">
      <block type="video" id="S$1N4E3U+*W_\`=95FUu)">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="media" id="K2a)Xd1Ob5$8Ju=7i:DR" x="24" y="450">
    <field name="id">icone_praia</field>
    <value name="src">
      <block type="image" id="fQF^b?g4I,]ah26x]In~"></block>
    </value>
  </block>
  <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="613" y="455">
    <value name="conditions">
      <block type="onselection" id="O]aL:r0KkCvhs#W\`[}El">
        <field name="id">icone_praia</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="=6LVnQ^v7.gTbQiBB2rM">
            <field name="id">icone_centro</field>
            <next>
              <block type="stop" id="1UR0{9!iy~vJx~m2prd4">
                <field name="id">video_praia</field>
                <next>
                  <block type="start" id="BZ#wUT/p=J}}s(q}Us7Z">
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
  <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="26" y="540">
    <field name="id">icone_centro</field>
    <value name="src">
      <block type="image" id="n8jL;6KJe-2c6B~=pPj("></block>
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

        <div id='conceptsIntro2A'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>Um Reconhecedor permite o reconhecimento de interações
        multimodais realizadas por usuários, como voz e gestos. Ele é definido
        por <strong>um identificador, seu conteúdo e âncoras</strong>.
        Entretanto, diferente de Mídia, o conteúdo de um
        Reconhecedor deve ser uma descrição de reconhecimento. As
        âncoras são porções delimitadas dessa descrição. Por exemplo, uma
        descrição de reconhecimento de voz deve ter âncoras que devem as frases
        a serem reconhecidas.</p>

        <p>Na nossa representação de blocos, o Reconhecedor é definido
        juntando-se um bloco de Reconhecedor com o campo id preenchido, e
        um bloco de conteúdo com as âncoras preenchidas. Os blocos a seguir
        definem o reconhecedor <i>rec_voz</i>, que tem um reconhecimento de
        voz como conteúdo. Essa descrição tem o trecho <i>repetir</i> que
        reconhece o comando de voz "repita vídeo". 
        </div>

        <div id='conceptsIntro2B'></div><br>

        <div style="text-align: justify; width: 70%;"> 
        <p>Para ilustrar o uso desses conceitos, os blocos a seguir definem uma
        nova versão da aplicação da parte Conceitos 1.1  reinicia um vídeo dada
        uma interação. Nessa versão, em vez de selecionar o ícone, o vídeo é
        reiniciado quando usuário falar "quando vídeo". Essa aplicação utiliza
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

        <div id='conceptsIntro2C'></div><br>
      `
    }
  ]
})

_data.conceptsIntro2BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="OSge%SF-~~.%rZKqZqym">
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="20">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
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
  <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="OFge%WW-~~.%rZKqZqym">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="674" y="55">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="v(3}oRBymiPD}7m@(iT*" x="20" y="167">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="OIfl%BPi_3-\`+z5^x\`FD">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="672" y="161">
    <value name="conditions">
      <block type="onbegin" id="(H8xxhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="}9[3akS_o4Z)PoiFYV7v">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
            <field name="id">rec_voz</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="22" y="317">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="672" y="319">
    <value name="conditions">
      <block type="onrecognize" id="(H8dBhXk6.y#]q%\`UM^D">
        <field name="id">repetir</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="O6Xl3j%N[Dl)iB+j;|!]">
        <field name="id">midia_principal</field>
        <next>
          <block type="start" id=".Pt;)N?s.:xGz;dDp@+W">
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
  <block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20">
    <field name="id">video_principal</field>
    <value name="src">
      <block type="video" id="CG[^N,5)TV)0_N#+|cgE">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+ p - MtE:D * clWz(7oX7Hg" x="603" y="46">
    <field name="id">video_principal</field>
  </block>
  <block type="media" id="IawJU?Sm-z4If\`ixT^_p" x="20" y="164">
    <field name="id">video_praia</field>
    <value name="src">
      <block type="video" id="S$1N4E3U+*W_\`=95FUu)">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="606" y="140">
    <value name="conditions">
      <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="_:Wp~afWoH$U.E}}=?5]">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="q$s76Wl6nUee_vRx9F(3">
            <field name="id">rec_voz</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="J0=3=8AB$lViiF[SYu#!" x="24" y="310">
    <field name="id">video_centro</field>
    <value name="src">
      <block type="video" id="]70x,I^+Yv!UsVCeeY()">
        <mutation length="1"></mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="606" y="304">
    <value name="conditions">
      <block type="onrecognize" id="IokIu//km+7L0Y@Nioi[">
        <field name="id">voz_centro</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="xz194KXLw:HdJABl^)[9">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id="Wo67TbqF5]_pN(b1R3D_">
                <field name="id">video_centro</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="28" y="459">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
        <mutation length="2"></mutation>
        <field name="id_area0">voz_centro</field>
        <field name="label0">centro</field>
        <field name="id_area1">voz_praia</field>
        <field name="label1">praia</field>
      </block>
    </value>
  </block>
  <block type="link" id="4^IYT6%+lHD0%*,oZz:%" x="606" y="485">
    <value name="conditions">
      <block type="onrecognize" id="[SfTF*!(*0N7]Hv9.tNh">
        <field name="id">voz_praia</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="1UR0{9!iy~vJx~m2prd4">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id="BZ#wUT/p=J}}s(q}Us7Z">
                <field name="id">video_praia</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="media" id="B8oGN+K#=wjfeQi4K~WX" x="29" y="634">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="Oj6ycjV}(wESn+h/UL/Z">
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

        <div id='conceptsIntro3A'></div><br>

        <p>Em nossa representação de blocos, a combinação de modalidades de
        interação pode ser feita utilizando uma condição composta. A combinação
        de condições compostas podem utilizar os seguintes operadores: 'OR'
        quando apenas uma das condições é necessária; 'AND' quando todas as
        condições são necessárias em qualquer ordem; e 'SEQ' quando todos as
        condições são necessárias e na sequência estabelecida.</p>

        <p>Os blocos a seguir definem uma nova versão da aplicação da parte
        Conceitos 1.2 que reinicia um vídeo dada uma interação por voz. Nessa
        versão falar "repita vídeo" ou (operador 'OR') fazer quando gesto de
        deslizar a mão para esquerda.</p>
        </div>

        <div id='conceptsIntro3B'></div><br>
      `
    }
  ]
})

_data.conceptsIntro3BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="20">
      <field name="id">rec_gesto</field>
      <value name="src">
        <block type="hand_gesture" id="N5Lu5_J\`hn-e3lm60 |^3">
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
  <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="OFge%WW-~~.%rZKqZqym">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="681" y="69">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="v(3}oRBymiPD}7m@(iT*" x="24" y="171">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="OIfl%BPi_3-\`+z5^x\`FD">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="683" y="181">
    <value name="conditions">
      <block type="onbegin" id="(H8xxhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="}9[3akS_o4Z)PoiFYV7v">
        <field name="id">pergunta</field>
        <next>
          <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
            <field name="id">rec_voz</field>
            <next>
              <block type="start" id=":k;*7!h^DLlpa^ls9[re">
                <field name="id">rec_gesto</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="27" y="315">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="681" y="393">
    <value name="conditions">
      <block type="compoundcondition" id="#sWuH)YfLm?005GvLQaK">
        <mutation length="2"></mutation>
        <field name="operator">or</field>
        <value name="element_0">
          <block type="onrecognize" id="(H8dBhXk6.y#]q%\`UM^D">
            <field name="id">repetir</field>
          </block>
        </value>
        <value name="element_1">
          <block type="onrecognize" id="_9w{*LI=9Gvs8$EK20Qt">
            <field name="id">esquerta</field>
          </block>
        </value>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="[gymipNN4gU6mk#uyh#l">
        <field name="id">pergunta</field>
        <next>
          <block type="stop" id="Q=dtDW}ox*A]D{[#H}iD">
            <field name="id">rec_gesto</field>
            <next>
              <block type="stop" id="O6Xl3j%N[Dl)iB+j;|!]">
                <field name="id">midia_principal</field>
                <next>
                  <block type="start" id=".Pt;)N?s.:xGz;dDp@+W">
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
  <block type="input" id=".9jD5o=BhpsFB80:]=BB" x="26" y="461">
    <field name="id">rec_gesto</field>
    <value name="src">
      <block type="hand_gesture" id="}JcogVLf/Y7(1Pp@lK6,">
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

        <div id='conceptsIntro4A'></div><br>

        <div style="text-align: justify; width: 70%;"> <p>Para ilustrar o uso de
        um Grupo de Usuários, os blocos a seguir são uma nova versão
        da aplicação da parte Conceitos 1.2 que reinicia um vídeo dada uma
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
    <block type="user" id="IPnvWeecZqr2WM|RGxm|" x="20" y="20">
      <mutation length="1"></mutation>
      <field name="id"></field>
      <field name="id">gu_gestos</field>
      <value name="element_0">
        <block type="hand_gesture_sensor" id="yU[{24F}.5IJtyI;VB5k"></block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro4BlocksB = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
    <field name="id">midia_principal</field>
    <value name="src">
      <block type="video" id="OFge%WW-~~.%rZKqZqym">
        <mutation length="1"></mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0">360s</field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="676" y="74">
    <field name="id">midia_principal</field>
  </block>
  <block type="media" id="ifhmRRJ%o^5/3j{LucQj" x="21" y="165">
    <field name="id">sinte_voz</field>
    <value name="src">
      <block type="ssml" id="6d)v}%=\`HL1[M8cPHzuK">
        <mutation length="1"></mutation>
        <field name="id_area0">pergunta</field>
        <field name="label0">você deseja repetir o vídeo?</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="680" y="185">
    <value name="conditions">
      <block type="onbegin" id="(H8xxhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
        <field name="id">rec_voz</field>
      </block>
    </statement>
  </block>
  <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="309">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
        <mutation length="1"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repita vídeo</field>
      </block>
    </value>
  </block>
  <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="680" y="322">
    <value name="conditions">
      <block type="onrecognizeuser" id="y/zz?q?8ebd@?9llBV[0">
        <field name="id">repetir</field>
        <field name="user_id">gu_gestos(2)</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="xx.sU]l9id:W4@6M~nOY">
        <field name="id">midia_principal</field>
        <next>
          <block type="start" id=".Pt;)N?s.:xGz;dDp@+W">
            <field name="id">midia_principal</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="user" id="IPnvWeecZqr2WM|RGxm|" x="22" y="448">
    <mutation length="1"></mutation>
    <field name="id">gu_voz</field>
    <field name="usermax">2</field>
    <value name="element_0">
      <block type="headset" id="4b.K20J]W:sVZy{ZYgH5"></block>
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
  elements: []
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
      
      <p>A tabela a seguir apresenta nossa proposta de instanciação dos
      conceitos discutitos anteriormente na versão atual da NCL (3.1). O
      conceito de Mídia é implementado pelo elemento <i>&ltmedia></i>. O
      conceito de Relacionamento é implementado pelo elemento <i>&ltlink></i>.
      Por fim os conceitos de Reconhecedor e Grupo de usuários não são
      implementados.</p></p>

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

      <p>Vamos agora detalhar esses conceitos e pedir que você realize algumas
      tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar
      seus conhecimentos, mas sim capturar evidências de nossa
      pesquisa.</strong></p>
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

        <div id='nclIntro1CodeA'></div><br>

        <p>O conceito de Relacionamento é baseado em causalidade e
        definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. Na NCL esse conceito já é implementado pelos elementos
        <i>&ltport></i> e <i>&ltlink></i>. Os elementos <i>&ltport></i>
        indicam quais <i>&ltmedia></i>s são iniciadas quando a
        aplicação é iniciada.</p>

        <p>No <i>&ltlink></i> as ações podem ser de iniciar ("start") ou parar
        ("stop") uma Mídia ou Reconhecedor. Já as condições
        podem ser simples ou compostas. As condições simples em um
        <i>&ltlink></i> podem ser de início ("onBegin") ou fim ("onEnd") de
        uma mídia ou de sua âncora, seleção de mídia pelo usuário
        ("onSelection") ou reconhecimento de uma interação multimodal
        ("onRecognition").</p>

        <p>O relacionamento entre condições e ações é definido pelo connector no
        atributdo <i>xconnector</i> do <i>&ltlink></i>. Por exemplo, um
        connector "onBeginStart" define uma condição "onBegin" e ações de
        "start". Já um connector <i>onSelectionStopStart</i> define uma
        condição "onSelection" e ações de "stop" e "start". A associação de
        elementos <i>&ltmedia></i> ou <i>&ltinput></i> com as condições e ações
        de um <i>&ltlink></i> é definida pelo elemento <i>&ltbind></i> do
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

        <div id='nclIntro1CodeB'></div>
        </div>
      `
    }
  ]
})

_data.nclIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="midia_principal" src="video.mp4">
    <area id="creditos" begin="300s" end="360s"></area>
  </media>
  <media id="icone" src="icone.png">
    <property name="size" value="20%, 20%"></property>
    <property name="top" value="80%"></property>
    <property name="zindex" value="1"></property>
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
      <port component="video_principal"></port>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"></property>
        <area id="creditos" begin="300s" end="360s"></area>
      </media>
      <media id="icone_repetir" src="icone_repetir.png">
        <property name="size" value="20%, 20%"></property>
        <property name="zindex" value="1"></property>
      </media>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"></bind>
        <bind role="start" component="icone_repetir"></bind>
      </link>
      <link xconnector="conEx#onSelectionStopStart">
        <bind role="onSelection" component="icone_repetir"></bind>
        <bind role="stop" component="video_principal"></bind>
        <bind role="start" component="video_principal"></bind>
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
      <port component="video_inicial"></port>
      <media id="video_inicial" src="video_inicial.mp4">
        <property name="size" value="100%, 100%"></property>
        <area id="creditos" begin="300s" end="360s"></area>
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="size" value="100%, 100%"></property>
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="size" value="100%, 100%"></property>
      </media>
      <media id="icone_centro" src="icone_centro.png">
        <property name="top" value="80%"></property>
        <property name="size" value="20%, 20%"></property>
        <property name="zindex" value="1"></property>
      </media>
      <media id="icone_praia" src="icone_praia.png">
        <property name="location" value="80%, 80%"></property>
        <property name="size" value="20%, 20%"></property>
        <property name="zindex" value="1"></property>
      </media>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_inicial" interface="creditos">
        <bind role="start" component="icone_centro"></bind></bind>
        <bind role="start" component="icone_praia" />
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="icone_centro"></bind>
        <bind role="stop" component="icone_centro"></bind>
        <bind role="stop" component="icone_praia" />
        <bind role="stop" component="video_inicial"></bind>
        <bind role="start" component="video_centro"></bind>
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="icone_praia" />
        <bind role="stop" component="icone_centro"></bind>
        <bind role="stop" component="icone_praia" />
        <bind role="stop" component="video_inicial"></bind>
        <bind role="start" component="video_praia"></bind>
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

        <p>Os trechos de código a seguir ilustram o uso de sintetização de voz
        na NCL estendida. O primeiro trecho de código apresenta o arquivo
        <i>sinte_voz.ssml</i> que segue o formato SSML (Speech Synthesis Markup
        Language) para sintetização de voz. Ele possui um elemento <i>&lts></i>
        com o identificador "pergunta" que sintetizada a frase: "você deseja
        repetir o vídeo?". O segundo trecho de código define um elemento
        <i>&ltmedia></i> com identificador <i>sinte_voz</i>, que tem como
        conteúdo o arquivo <i>sinte_voz.ssml</i>. Essa <i>&ltmedia></i> possui
        uma âncora que indica a frase a ser sintetizada.</p>

        <div id='nclIntro2CodeA'></div>
        <div id='nclIntro2CodeB'></div>

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

        <div id='nclIntro2CodeC'></div>
        <div id='nclIntro2CodeD'></div><br>

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

        <div id='nclIntro2CodeE'></div>

        </div>
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
    <area label="pergunta"></area> <!-- referência id repetir de sinte_voz.ssml-->
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
      <port component="video_principal"></port>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"></property>
        <area id="creditos" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"></area> <!-- referência id pergunta de sinte_voz.ssml-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></repete>  <!-- referência id repete de rec_voz.srgs-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"></bind>
        <bind role="start" component="sinte_voz" interface="pergunta"></bind>
        <bind role="start" component="rec_voz"></bind>
      </link>
      <link xconnector="conEx#onRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete"/>
        <bind role="stop" component="rec_voz"></bind>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
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

      <div id='nclTask2CodeA'></div>
      <div id='nclTask2CodeB'></div>

      <p>O código NCL a seguir é uma versão modificada da Tarefa 2.1 para
      permitir interações multimodais utilizando as duas descrições acima. Por
      favor, analise atenção.</p>

      <div id='nclTask2CodeC'></div>
      </div>
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
      <port component="video_inicial"></port>
      <media id="video_inicial" src="video_inicial.mp4">
        <property name="size" value="100%, 100%"></property>
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="size" value="100%, 100%"></property>
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="size" value="100%, 100%"></property>
      </media>
      <media id="sinte_voz_videos" src="sinte_voz_videos.ssml">
        <area label="pergunta"></area>
      </media>
      <input id="rec_voz_videos" src="rec_voz_videos.sgrs">
        <area label="centro"></area>
        <area label="praia"></area>
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_inicial" interface="creditos"></area>
        <bind role="start" component="sinte_voz_videos" interface="pergunta"></bind>
        <bind role="start" component="rec_voz"></bind>
      </link>
      <link xconnector="onRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="centro"></bind>
        <bind role="stop" component="rec_voz"></bind>
        <bind role="stop" component="video_inicial"></bind>
        <bind role="start" component="video_centro"></bind>
      </link>
      <link xconnector="onRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz_videos" interface="praia"></bind>
        <bind role="stop" component="rec_voz_videos"></area>
        <bind role="stop" component="video_inicial"></bind>
        <bind role="start" component="video_praia"></bind>
      </link>
    </body>
  </ncl>
`

_data.nclTask2CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [19,20,21,22,23,24,25,28,29,31,32,33,34,35,36,37,38,39,40,41]">
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

        <div id='nclIntro3CodeA'></div>
        <div id='nclIntro3CodeB'></div><br>
        
        <p>Na NCL estendida, a combinação de modalidades de interação pode ser
        defiida utilizando uma condição composta. Uma condição composta em um
        <i>&ltlink></i> combina condições simples utilizando um dos seguintes
        operadores: 'OR' quando apenas uma das condições é necessária; 'AND'
        quando todas condições são necessárias em qualquer ordem; e 'SEQ' quando
        todas as condições são necessárias e devem acontecer na sequência
        estabelecida.</p>
        
        <p>Para ilustrar o uso de combinação de modalidades, o trecho de código
        a seguir apresenta uma uma nova versão (modificações em destaque) da
        aplicação da parte Conceitos 2.2 que reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo é reiniciado quando usuário
        falar "repita vídeo" ou (operador 'OR') fazer quando gesto de deslizar
        mão para esquerda.</p>
        
        <div id='nclIntro3CodeC'></div><br> </div>
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
      <port component="video_principal"></port>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"></property>
        <area id="creditos" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"></area> <!-- referência id pergunta de sinte_voz.ssml-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></repete> <!-- referência id repete de rec_voz.srgs-->
      </input>
      <input id="rec_gesto" src="rec_gesto.gml">
        <area label="esquerda"></repete> <!-- referência id esquerda de rec_gesto.gml-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"></bind>
        <bind role="start" component="sinte_voz" interface="pergunta"></bind>
        <bind role="start" component="rec_voz"></bind>
        <bind role="start" component="rec_gesto"></bind>
      </link>
      <link xconnector="conEx#onOrRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete"/>
        <bind role="onRecognize" component="rec_gesto" interface="esquerda"/>
        <bind role="stop" component="rec_voz"></bind>
        <bind role="stop" component="rec_gesto"></bind>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
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
        <div style="text-align: justify; width: 70%;"> <p>O conceito de Grupo de
        Usuários é definido <strong>por um identificador, número máximo de
        participantes e quais dispositivos estes utilizam</strong>. Na NCL, o
        Grupo de Usuários é implementado pelo elemento <i>&ltuserClass></i>,
        filho do elemento <i>&lthead></i>. O identificador é definido pelo
        atributo <i>id</i> e os dispositivos são definidos por um arquivo de
        descrição no formato SPARQL. O trecho de código a seguir apresenta o
        arquivo de descrição de usuários <i>gu_leap_microphone.sparql</i>. Essa
        descrição define que cada usuário do grupo deve ter um microfone e um
        lLeapMotion.</p>

        <div id='nclIntro4CodeA'></div><br>

        <p>Para ilustrar o uso de um Grupo de Usuários em NCL, o trecho de
        código a seguir apresenta uma nova versão (modificações em destaque) da
        aplicação da parte Conceitos 2.2 que reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo será reiniciado apenas quando
        segundo usuário falar "repita vídeo". Esse grupo é definido com um
        máximo de 2 usuários e com os dispositivos descritos no arquivo
        <i>gu_leap_microphone.sparql</i> (apresentado acima).</p>

        <div id='nclIntro4CodeB'></div>
        </div>
      `
    }
  ]
})

_data.nclIntro4CodeA = `
  <script type="syntaxhighlighter" class="brush: plain; toolbar: false;
  auto-links: false"> <![CDATA[
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
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
      <port component="video_principal"></port>
      <media id="video_principal" src="video.mp4">
        <property name="size" value="100%, 100%"></property>
        <area id="creditos" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.srgs">
        <area label="pergunta"></area> <!-- referência id pergunta de sinte_voz.srgs-->
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></area> <!-- referência id repete de rec_voz.srgs-->
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos"></bind>
        <bind role="start" component="sinte_voz" interface="pergunta"></bind>
        <bind role="start" component="rec_voz"></bind>
      </link>
      <link xconnector="conEx#onRecognizeStart">
        <bind role="onRecognize" component="rec_voz" interface="repete">
          <bindParam name="user_id" value="gu_leap_microphone(2)"></bindParam>
        </bind>
        <bind role="stop" component="video_principal"></bind>
        <bind role="start" component="video_principal"></bind>
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
      name: 'htmlFeedbackQuestion7',
      title: `Os conceitos apresentados na seção anterior estão **claramente
        instanciados** na NCL estendida.`,
      choices: _agreeChoices
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion8',
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
  elements: []
}) - 1

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'html',
  html: `
    <div style="text-align: justify; width: 70%;">
    <p>A linguagem HTML é utilizada para criar conteúdo multimídia em
    sistemas web. <strong>Nesta seção, não vamos ensinar a linguagem
    HTML</strong>, mas vamos apresentar como os conceitos da seção anterior
    são instanciados na HTML para esta oferecer suporte a interações
    multimodais.</p>
    
    <p>A tabela seguir apresenta como propomos instanciar os conceitos de
    nossa pesquisa na versão atual da HTML (5.0). O conceito de
    Mídia é parcialmente implementado por elementos como
    <i>&ltimg></i>, <i>&ltvideo></i> e <i>&ltaudio></i>, pois estes
    não possuem nosso conceito de âncora. O conceito de Relacionamento
    é parcialmente implementado pelo elemento <i>script</i>, pois estes
    permitem definir comportamentos na aplicação, como interações de usuário
    por apontador. Por fim os conceitos de Reconhecedor e Grupo
    de usuários não são implementados.</p>

    <table align="center" class="table-bordered table-striped
    table-condensed">
      <tr>
        <th>Conceito</th>
        <th>HTML atual</th>
        <th>Como propomos</th>
      </tr>
      <tr>
        <td><i>&ltmedia></i></td>
        <td><i>&ltimg></i>, <i>&ltvideo></i>, <i>&ltaudio></i>
        </td>
        <td>estender esses elementos com <i>&ltarea></i></td>
      </tr>
      <tr>
        <td>Relacionamento</td>
        <td><i>&ltscript></i></td>
        <td><i>&ltscript></i> com o objeto JavaScript
        <i>Relationship</i></td>
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
    <p>Vamos agora detalhar esses conceitos e pedir que você realize algumas
    tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar
    seus conhecimentos, mas sim capturar evidências de nossa
    pesquisa.</strong>.</p>
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
        <p>O conceito de Mídia é definido por <strong>um identificador,
        um conteúdo e âncoras</strong>. Na HTML, ele é parcialmente
        implementado por elementos como <i>&ltimg></i>, <i>&ltaudio></i>,
        <i>&ltvideo></i> e <i>&ltobject></i>. O identificador é definido
        pelo atributo <i>id</i> e o arquivo de mídia do conteúdo é definido
        atributo <i>src</i>. Para permitir definir âncoras esses elementos são
        estendidos com elementos <i>&ltarea></i>. Uma <i>&ltarea></i> pode
        definir uma porção temporal com os atributos <i>begin</i> e
        <i>end</i> ou um trecho delimitado com o atributo <i>label</i>.</p>

        <p>Elementos Mídia também podem possuir propriedades para
        definir características de sua exibição definidas no atributo
        <i>&ltstyle></i>. Trechos de código serão apresentados a seguir para
        ilustrar esse conceito em HTML. O trecho de código a seguir define as
        duas mídias com identificadores <i>midia_principal</i> e
        <i>icone_repetir</i>, e com conteúdos de vídeo e imagem,
        respectivamente. Em especial, a mídia de <i>midia_principal</i> possui
        uma âncora chamada de <i>creditos</i> que inicia aos 300 e termina aos
        360 segundos.</p>

        <div id='htmlIntro1CodeA'></div><br>

        <p>O conceito de Relacionamento é baseado em causalidade e
        definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. Na HTML estendida, ele é implementado pelo elemento
        <i>&ltscript></i>, com um código JavaScript que utiliza o objeto
        <i>Relationship</i>.</p>
        
        <p>As ações podem ser de iniciar ("start") ou parar ("stop") uma Mídia
        ou Reconhecedor. Já as condições podem ser simples ou compostas. As
        condições simples em um objeto <i>Relationship</i> podem ser de início
        ("onBegin") ou fim ("onEnd") de uma mídia ou de sua âncora, seleção de
        mídia pelo usuário ("onSelection") ou reconhecimento de uma interação
        multimodal ("onRecognition").<p>

        <p>O relacionamento entre condições e ações é definido pelo parâmetro de
        criação do objeto <i>Relationship</i>. Por exemplo, um uma parâmetro
        "onBeginStart" define uma condição "onBegin" e ações de "start".
        Já um connector <i>onSelectionStopStart</i> define uma condição
        "onSelection" e ações de "stop" e "start". A associação de elementos
        Mídia ou Reconhecedo com as condições e ações de um objeto
        <i>Relationship</i> é definida pelo método <i>bind</i>.</p>

        <p>Para ilustrar o uso desses conceitos, o trecho de código a seguir
        define uma aplicação que apresenta um vídeo e um ícone durante os
        créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado. Ele utiliza dois <i>img</i>, um <i>video</i> e um
        <i>script</i> que define três objetos <i>Relationship</i>. O
        primeiro <i>Relationship</i> define que o elemento
        <i>midia_principal</i> inicia com a aplicação. O segundo
        <i>Relationship</i> define que quando o <i>video_principal</i>
        alcançar o seu trecho de <i>creditos<i>, a imagem <i>icone_repetir</i> é
        iniciada. O <i>Relationship</i> terceiro define que quando
        <i>icone_repetir</i> for selecionado, o <i>video_principal</i> será
        reiniciado (<i>stop</i> e <i>start</i>).</p>

        <div id='htmlIntro1CodeB'></div>
        </div>
      `
    }
  ]
})

_data.htmlIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <video id="midia_principal" src="video.mp4"
    style="position: absolute; height 100%; width: 100%;">
    <area id="creditos" begin="300s" end="360s"></area>
  </video>
  <img id="icone" src="icone.png"
     style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
  </img>
  ]]></script>
`

_data.htmlIntro1CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[5,9,13,17,21]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"></area>
    </video>
    <img id="icone_repetir" src="icone_repetir.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <script>
      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "midia_principal")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "midia_principal", "creditos")
      r2.bind("start", "icone_repetir")

      var r3 = new Relationship("onSelectionStopStart")
      r3.bind("onSelection", "icone_repetir")
      r3.bind("stop", "midia_principal")
      r3.bind("start", "midia_principal")
    <&#47script>
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
      <div id='htmlTask1CodeA'></div>
      </div>
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
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="video_inicial" src="video_inicial.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <video id="video_centro" src="video_centro.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <video id="video_praia" src="video_praia.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <img id="icone_centro" src="icone_centro.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <img id="icone_praia" src="icone_praia.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <script>
      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "video_inicial")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "video_inicial", "creditos")
      r2.bind("start", "icone_centro")
      r2.bind("start", "icone_praia")

      var r3 = new Relationship("onSelectionStopStart")
      r3.bind("onSelection", "icone_centro")
      r3.bind("stop", "video_inicial")
      r3.bind("start", "video_centro")

      var r4 = new Relationship("onSelectionStopStart")
      r4.bind("onSelection", "icone_praia")
      r4.bind("stop", "video_inicial")
      r4.bind("start", "video_praia")
    <&#47script>
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
        deve suportar outras modalidades de conteúdo, como interações por voz.
        </p>

        <p>Os trechos de código a seguir ilustram o uso de sintetização de voz
        na HTML estendida. O primeiro trecho de código apresenta o arquivo
        <i>sinte_voz.ssml</i> que segue o formato SSML (Speech Synthesis Markup
        Language) para sintetização de voz. Ele possui um elemento <i>&lts></i>
        com identificador "pergunta" que sintetizada a frase: "você deseja
        repetir o vídeo?". O segundo trecho de código define uma
        <i>&ltobject></i> com identificador <i>sinte_voz</i>, que tem como
        conteúdo o arquivo <i>sinte_voz.ssml</i>. Esse <i>&ltobject></i> possui
        uma âncora que indica a frase a ser sintetizada.</p>

        <div id='htmlIntro2CodeA'></div>
        <div id='htmlIntro2CodeB'></div>

        <p>O conceito de Reconhecedor é definido por <strong>um
        identificador, seu conteúdo e âncoras</strong>. Na HTML estendida, ele é
        implementado pelo elemento <i>&ltobject></i>. O identificador é
        definido pelo atributo <i>id</i> e a descrição de reconhecimento é
        definida pelo atributo <i>src</i>. As âncoras são definidas pelo
        elemento <i>area</i> e podem definir trechos delimitados da descrição
        com o atributo <i>label</i>.</p>

        <p>Para ilustrar o uso de um Reconhecedor, os trechos de código a seguir
        ilustram o uso de reconhecimento de voz na HTML estendida. O primeiro
        trecho ilustra o arquivo <i>rec_voz.srgs</i> que segue o formato SRGS
        (Speech Recognition Grammar Specification) reconhecimento de voz. Ele
        possui uma frase com o identificador <i>repete</i> que define o
        reconhecimento de voz "repita vídeo". O segundo define um
        <i>&ltobject></i> com identificador <i>rec_voz</i>, que tem como
        conteúdo o arquivo <i>rec_voz.srgs</i>. Esse <i>&ltobject></i> possui
        uma âncora que indica a frase a ser reconhecida.</p>

        <div id='htmlIntro2CodeC'></div>
        <div id='htmlIntro2CodeD'></div><br>

        <p>Para ilustrar o uso de interação por voz, o trecho de código a seguir
        apresenta uma nova versão (modificações em destaque) da aplicação da
        parte Conceitos 2.1 que reinicia um vídeo dada uma interação por
        seleção. Nessa versão, em vez de selecionar o ícone, o vídeo é
        reiniciado quando usuário falar "repita vídeo". A primeira diferença
        está no uso dos elementos <i>sinte_voz</i> e <i>rec_voz</i> para
        interação por voz, que utilizam os arquivos <i>sinte_voz.srgs</i> e
        <i>rec_voz.srgs</i> (apresentados acima).</p>

        <p>Dois objetos <i>Relationship</i> do elemento <i>&ltscript></i> também
        foram modificados. O primeiro <i>Relationship</i> modificado define que
        quando o <i>video_principal</i> alcançar o trecho de <i>creditos</i>
        (300s), a frase da âncora <i>pergunta</i> é sintetizada e o reconhecedor
        <i>rec</i> é ativado (a partir desse momento, ele poderá reconhecer
        interações de voz). O segundo <i>Relationship</i> modificado define que
        quando for reconhecida a âncora <i>repete</i>, a <i>midia_principal</i>
        será reiniciada (terminada e iniciada).</p>

        <div id='htmlIntro2CodeE'></div>

        </div>
      `
    }
  ]
})

_data.htmlIntro2CodeA = _data.nclIntro2CodeA

_data.htmlIntro2CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <object id="sinte_voz" src="sinte_voz.ssml">
    <area label="pergunta"></area> <!-- referência id pergunta de sinte_voz.ssml-->
  </object>
  ]]></script>
`

_data.htmlIntro2CodeC = _data.nclIntro2CodeC
_data.htmlIntro2CodeD = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[9,12,20,25]"><![CDATA[
  <!DOCTYPE html>
  <object id="rec_voz" src="rec_voz.srgs">
    <area label="repete"><&#47area> <!-- referência id repete de rec_voz.srgs-->
  </object>
  ]]></script>
`
_data.htmlIntro2CodeE = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[9,12,20,25]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area> <!-- referência id pergunta de sinte_voz.ssml-->
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area> <!-- referência id repete de rec_voz.srgs-->
    </object>
    <script>
      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "midia_principal")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "midia_principal", "creditos")
      r2.bind("start", "sinte_voz")
      r2.bind("start", "rec_voz")

      var r3 = new Relationship("onRecognizeStopStart")
      r3.bind("onRecognize", "rec_voz", "repete")
      r3.bind("stop", "midia_principal")
      r3.bind("start", "midia_principal")

    <&#47script>
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

      <div id='htmlTask2CodeA'></div>
      <div id='htmlTask2CodeB'></div>

      <p>O código HTML a seguir é uma versão modificada da Tarefa 2.1 para
      permitir interações multimodais utilizando as duas descrições acima. Por
      favor, analise atenção.</p>

      <div id='htmlTask2CodeC'></div>
      </div>
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
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="video_inicial" src="video_inicial.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"></area>
    </video>
    <video id="video_centro" src="video_centro.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"></area>
    </video>
    <video id="video_praia" src="video_praia.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"></area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"></area> 
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"></repete>
    </object>
    <script>
      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "video_inicial")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "video_inicial", "creditos")
      r2.bind("start", "sinte_voz", "pergunta")
      r2.bind("start", "rec_voz")

      var r3 = new Relationship("onRecognizeStopStart")
      r2.bind("onRecognize", "rec_voz", "centro")
      r2.bind("stop", "video_inicial")
      r2.bind("start", "video_centro")

      var r4 = new Relationship("onRecognizeStopStart")
      r4.bind("onRecognize", "rec_voz", "praia")
      r4.bind("stop", "video_inicial")
      r4.bind("start", "video_praia")
    <&#47script>
  </body>
  </html>
`

_data.htmlTask2CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[` + _data.htmlTask2CodeCOnly + `]]></script>
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

        <div id='htmlIntro3CodeA'></div>
        <div id='htmlIntro3CodeB'></div><br>

        <p>Na HTML estendida, a combinação de modalidades de interação pode ser
        feita utilizando uma condição composta. Essas condições compostas
        condições são definidas por um objeto <i>Relationship</i> utilizando
        um dos seguintes operadores: 'OR' quando apenas uma das condições é
        necessária; 'AND' quando todas as condições são necessárias em qualquer
        ordem; e 'SEQ' quando todas as condições são necessárias e devem
        acontecer na sequência estabelecida.</p>

        <p>Para ilustrar o uso de combinação de modalidades, o trecho de código
        a seguir apresenta uma nova versão (modificações em destaque) da
        aplicação da parte Conceitos 2.2 que reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo é reiniciado quando usuário
        falar "repita vídeo" ou (operador 'OR') fazer quando gesto de deslizar
        mão para esquerda.

        <div id='htmlIntro3CodeC'></div><br> 
        </div>
      `
    }
  ]
})
_data.htmlIntro3CodeA = _data.nclIntro3CodeA

_data.htmlIntro3CodeB = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false"><![CDATA[
  <object id="rec_gesto" src="rec_gesto.gml">
    <area label="esquerda"><&#47area> <!-- referência id esquerda de rec_gesto.gml-->
  </object>
  ]]></script>
`
_data.htmlIntro3CodeC = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[15,16,17,27,29,30,31,32,33,34,35]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area> <!-- referência id pergunta de sinte_voz.ssml-->
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area> <!-- referência id repete de rec_voz.srgs-->
    </object>
    <object id="rec_gesto" src="rec_gesto.gml">
      <area label="esquerda"><&#47area> <!-- referência id esquerda de rec_gesto.gml-->
    </object>
    <script>
      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "midia_principal")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "midia_principal", "creditos")
      r2.bind("start", "sinte_voz")
      r2.bind("start", "rec_voz")
      r2.bind("start", "rec_gesto")

      var r3 = new Relationship("onOrRecognizeStopStart")
      r3.bind("onRecognize", "rec_voz", "repete")
      r3.bind("onRecognize", "rec_gesto", "esquerda")
      r3.bind("stop", "rec_voz")
      r3.bind("stop", "rec_gesto")
      r3.bind("stop", "midia_principal")
      r3.bind("start", "midia_principal")

    <&#47script>
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
      title: 'Agora pedimos que você edite o código HTML da Tarefa 2.2 (copiado a seguir) para que seja possível a interação por voz <strong>ou</strong> (operador OR) interação por gestos. Na interação por gesto, você pode referenciar o arquivo de descrição <i>rec_gestos.gml</i>, apresentado em Conceitos 2.3, e considere que gesto de deslizar a mão para esquerda indica centro e gesto de deslizar a mão para direita indica praia.'
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
        utilizam</strong>. Na HTML estendida, o Grupo de Usuários é implementado
        por elemento JavaScript que utilize um objeto <i>&ltUserGroup></i>. Os
        dispositivos são definidos por um arquivo de descrição no formato SPARQL
        definido como parâmetro na criação do objeto <i>&ltUserGroup></i>. O
        trecho de código a seguir apresenta o arquivo de descrição de usuários
        <i>gu_leap_microphone.sparql</i>. Essa descrição define que cada usuário
        do grupo deve ter um microfone e um leapmotion.</p>

        <div id='htmlIntro4CodeA'></div><br>

        <p>Para ilustrar o uso de um Grupo de Usuários em HTML, o trecho de
        código a seguir apresenta uma uma nova versão (modificações em destaque)
        da aplicação da parte Conceitos 2.2 que reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo será reiniciado apenas quando
        segundo usuário falar "repita vídeo". Esse grupo é definido com um
        máximo de 2 usuários e com os dispositivos descritos no arquivo
        <i>gu_leap_microphone.sparql</i> (apresentado acima).</p>

        <div id='htmlIntro4CodeB'></div>
        </div>
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
  <head><script src="relationship.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="creditos" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area>  <!-- referência id sinte_voz de sinte_voz.ssml-->
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area> <!-- referência id repete de rec_voz.srgs-->
    </object>
    <script>
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

      var r1 = new Relationship("onBeginStart")
      r1.bind("onBegin", "body")
      r1.bind("start", "midia_principal")

      var r2 = new Relationship("onBeginStart")
      r2.bind("onBegin", "midia_principal", "creditos")
      r2.bind("start", "sinte_voz")

      var r3 = new Relationship("onRecognizeStopStart")
      r3.bind("onRecognize", "rec_voz", "repete", gu_leap_microphone, 2)
      r3.bind("stop", "midia_principal")
      r3.bind("start", "midia_principal")
    <&#47script>
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
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências de como os conceitos apresentados na seção anterior
        >Mídia, Reconhecedor, Relacionameni> e Grupo de Usuários)
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
