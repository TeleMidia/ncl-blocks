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
  surveyPostId: '51d57b85-3813-4a08-801b-4b7e077c1660',
  pages: []
}
var pageIndex

var _agreeChoices = [
  'Discordo fortemente', 'Discordo bastante', 'Discordo um pouco',
  'Não concordo nem discordo', 'Concordo um pouco', 'Concordo',
  'Concordo fortemente'
]

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
        pesquisas nas áreas de Sistemas Multimídia e, em particular, TV Digital
        e IPTV.</p>

        <p>Convidamos a você a participar deste estudo sobre nossa pesquisa
        de <i>Interações multimodais em linguagens multimídia</i>.</p>

        <p>Para prosseguirmos, pedimos seu consentimento para realizarmos
        este estudo e informamos que:</p>
        <ul>
        <li>Os dados coletados destinam-se estritamente a atividades de pesquisa
        e somente os pesquisadores do TeleMídia têm acesso.</li>
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
        OBS: Este estudo é feito em uma única página web. Caso deseje
        navegar entre as seções do estudo, <strong>NÃO</strong> utilize
        os botões de navegação do seu browser, e sim use os botões
        <em>voltar</em> e <em>prosseguir</em> no final de cada seção do
        estudo.
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
  title: 'Introdução a linguagens multimídia com interações multimodais',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Vamos nesta seção introduzir o conceito de <strong>linguagens
        multimídia com interações multimodais</strong>, proposto em nossa
        pesquisa.</p>

        <p>Recentes avanços em tecnologias de reconhecimento e dispositivos de
        interação permitiram criar <strong>interfaces multimodais</strong>. Esse
        tipo de interface utiliza formas de comunicação mais naturais da
        linguagem e comportamento humano, como fala e gestos. Ilustrados a
        seguir, citamos o uso de microfones para reconhecimento de voz, e
        dispositivos como LeapMotion e Microsoft Kinect para reconhecimento de
        gestos.

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 180px'
          src='assets/voice.jpg'>
          <img class='img-thumbnail' style='height:
          180px' src='assets/leap.jpg'>
          <img class='img-thumbnail'
          style='height: 180px' src='assets/kinect.jpg'>
        </div>
        <br>

        <p>Uma aplicação multimídia interativa define como um sistema multimídia
        deve realizar o sincronismo de mídias (discretas e contínuas) e reagir
        às interações de usuário. O criador desse tipo de aplicação é usualmente
        chamado de autor e utiliza uma <strong>linguagem multimídia</strong>
        para desenvolver sua aplicação. Exemplos de linguagens multimídia atuais
        são a NCL (Nested Context Language) e a HTML (HyperText Markup
        Language). Já uma <strong>linguagem multimídia com interações
        multimodais</strong> é aquela que permite o autor não apenas definir
        mídias e o sincronismo entre elas, mas também pode definir interações
        multimodais com os usuários. </p>

        <p>A figura a seguir ilustra a criação e execução de uma aplicação
        multimídia com interações multimodais. Na criação, a principal diferença
        é que o autor define não apenas as mídias e o sincronismos entres elas,
        mas também, defini as interações multimodais utilizando descrições
        multimodais. Por exemplo, ele pode utilizar uma descrição de
        reconhecimento de voz e um de reconhecimento de gestos. Já na execução,
        a principal diferença é que o sistema utiliza <strong>dispositivos de
        interação multimodal</strong> para realizar reconhecimentos, além de
        dispositivos audiovisuais para exibir o conteúdo das mídias (som e
        frames), e apontador e tecla para capturar interações dos usuários.</p>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 450px'
          src='assets/overview1.png'>
          <span style="margin-left:10px"></span>
          <img class='img-thumbnail' style='height: 450px'
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
      isRequired: true,
      name: 'profileNCL2',
      title: 'Quantas aplicações NCL você desenvolveu?',
      visibleIf: '{profileNCL1} > 0',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileNCL3',
      title: `De que maneira a sintaxe da NCL influencia o
       desenvolvimento de aplicações?`,
      visibleIf: '{profileNCL1} > 0',
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
      isRequired: true,
      name: 'profileHTML2',
      title: 'Quantas aplicações HTML/JavaScript você desenvolveu?',
      visibleIf: '{profileHTML1} > 0',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileHTML3',
      title: `O quanto o desenvolvimento em HTML/JavaScript requer
      o uso de bibliotecas de manipulação de DOM, como jQuery ou Prototype?`,
      visibleIf: '{profileHTML1} > 0',
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
    uma linguagem multimídia suportar interações multimodais. Mais
    precisamente, esses conceitos são os de <em>Mídia, Reconhecedor,
    Sincronismo</em> e <em>Grupo de Usuários</em>.</p>
   
    <p>Para evitar possíveis dificuldades com a sintaxe das linguagens,
    apresentaremos esses conceitos utilizando uma abordagem de
    <strong>desenvolvimento de aplicações através de blocos</strong>. Esse tipo
    de abordagem é bastante utilizado para o ensino de programação ou para
    ferramentas de geração de código. Em especial, esse tipo de desenvolvimento
    foi popularizado por ferramentas como o <strong>MIT Scratch</strong> e
    <strong>MIT App</strong> Inventor</strong> (ilustrados a seguir).</p>

    <div class='text-center'>
      <img class='img-thumbnail' style='height: 270px'
      src='assets/scratch.jpg'>
      <span style="margin-left:10px"></span>
      <img class='img-thumbnail' style='height: 270px'
      src='assets/appinventor.jpg'>
    </div>
    <br>

    <p>Vamos agora detalhar esses conceitos e perdir que você realize algumas
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
  title: 'Mídia e Sincronismo',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro1',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Mídia</em> permite definir o uso de conteúdo
        audiovisual. Ela é definida por <strong>um identificador, um conteúdo e
        âncoras</strong>. O conteúdo consiste em um arquivo de mídia, como
        imagem jpeg, vídeo mp4, áudio mp3, entre outros. As âncoras são porções
        do conteúdo e podem ser trechos temporais (e.g. entre 300s e 360s) ou
        trechos delimitados do conteúdo.</p>

        <p>Na nossa representação de blocos, a <em>Mídia</em> é definida
        juntando um bloco de <em>Mídia</em>, com o campo id preenchido, e um
        bloco de conteúdo, com as âncoras preenchidas. Exemplos de blocos serão
        apresentados para ilustrar o conceito.</p>

        <p>Os blocos a seguir definem duas mídias com identificadores
        <em>midia_principal</em> e <em>icone</em>, mas elas não possuem
        conteúdo. Por não terem conteúdo, essas <em>&ltmedia></em> não
        apresentam resultados audiovisuais.</p>
        </div>

        <div id='conceptsIntro1A'></div><br>

        <div style="text-align: justify; width: 70%;"> 
        <p>Os blocos a seguir definem as mesmas mídias acima, mas com conteúdos
        de áudio e imagem, respectivamente. Em especial, a mídia de
        <em>midia_principal</em> tem definida uma âncora chamada de
        <em>creditos</em> que inicia aos 300 e termina aos 360 segundos.</p>
        </div>

        <div id='conceptsIntro1B'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>É importante ressaltar que mudanças no conteúdo de uma <em>Mídia</em>
        não afetam o comportamento da aplicação, desde que a mídia defina os
        mesmos trechos, pois <em>Sincronismo</em>s são definidos independe do
        conteúdo. Por exemplo, os blocos a seguir definem a mesma mídia
        <em>midia_principal</em> mas com o conteúdo de vídeo.</p>
        </div>

        <div id='conceptsIntro1C'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>Além de mídias como imagens, áudio e vídeos, o conceito
        <em>Mídia</em> abrange também outras modalidades conteúdo como voz
        sintetizada e avatares humanoides. Os blocos a seguir definem a
        <em>Mídia</em> com identificador <em>sinte_voz</em>, que tem como
        conteúdo um texto para sintetização de voz. Esse conteúdo de
        sintetização possui o trecho <em>pergunta</em> que sintetiza a frase
        "você deseja repetir o vídeo?".</p>
        </div>

        <div id='conceptsIntro1D'></div><br>
      `
    },
    {
      type: 'html',
      name: 'conceptsIntro2',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Sincronismo</em> permite definir o comportamento
        das aplicações. Ele é baseado em causalidade e definido por <strong>um
        conjunto de condições e um conjunto de ações</strong>. As ações são
        executadas em sequência quando as condições são satisfeitas.</p>

        <p>Na nossa representação de blocos, o <em>Sincronismo</em> é juntato um
        um bloco <em>Sincronismo</em> com blocos de condições e blocos de ações.
        Blocos de ações podem ser de iniciar ("inicie") ou parar ("pare") uma
        <em>Mídia</em> ou <em>Reconhecedor</em>. Já as condições podem ser
        simples ou compostas. Blocos de condições simples podem ser de início
        ("ao começar") ou fim ("ao terminar") de uma mídia ou de sua âncora,
        seleção de mídia pelo usuário ("ao selecionar") ou reconhecimento de uma
        interação multimodal ("ao reconhecer").<p>

        <p>Blocos de condições compostas combinam ações simples utilizando
        um dos seguintes operadores: 'OR' quando apenas uma das condições é
        necessária; 'AND' quando todas as condições são necessárias em qualquer
        ordem; e 'SEQ' quando todos as condições são necessárias e na sequência
        estabelecida.</p>

        <p>O relacionamento entre condições e ações é definido juntando um
        bloco de <em>Sincronismo</em> com blocos de condições e ações  A tabela
        a seguir mostra exemplos de junções de blocos.</p>
        
        <table align="center" class="table-bordered table-striped
        table-condensed">
          <tr>
            <th>blocos</th>
            <th>define</th>
          </tr>
          <tr>
            <td><img class='img-thumbnail' style='height: 150px'
          src='assets/concepts-sample-1.png'></td>
            <td>condição "ao começar" e ações de "inicie"</td>
          </tr>
          <tr>
            <td><img class='img-thumbnail' style='height: 150px'
          src='assets/concepts-sample-2.png'></td>
            <td>condição "ao selecionar" e ações de "pare" e "inicie" </td>
          </tr>
          <tr>
            <td><img class='img-thumbnail' style='height: 150px'
          src='assets/concepts-sample-3.png'></td>
            <td>condição "ao reconhecer" e ações de "pare" e "inicie" </td>
          </tr>
          <tr>
            <td><img class='img-thumbnail' style='height: 150px'
                src='assets/concepts-sample-4.png'></td> 
            <td>condições "ao reconhecer" combinadas com operador "OR", ações de
            "pare" e "inicie"
            </td>
          </tr>
        </table><br>

        <p>Para ilustrar o uso desse conceito em uma aplicação, os
        blocos a seguir definem uma aplicação que apresenta um vídeo e um ícone
        durante os créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado.</p>

        <p>Essa aplicação utiliza duas <em>Mídia</em> (<em>midia_principal</em>
        e <em>icone_repetir</em>).

        <p>Para o comportamento, essa aplicação utiliza três
        <em>Sincronismo</em>. O primeiro <em>Sincronismo</em> define
        <em>midia_principal</em> inicia junto com a aplicação. O segundo
        <em>Sincronismo</em> define que quando a <em>midia_principal</em>
        alcançar o seu trecho de <em>credito</em> a mídia <em>icone_repetir</em>
        deve ser iniciada. O terceiro <em>Sincronismo</em> define que quando a
        mídia <em>icone_repetir</em> for selecionada, a <em>midia_principal</em>
        deve ser reiniciada (terminada e iniciada)</p>

        </div>

        <div id='conceptsIntro2B'></div>
      `
    }
  ]
})

_data.conceptsIntro1BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">midia_principal</field>
    </block>
    <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="594" y="20">
      <field name="id">icone</field>
    </block>
  </xml>
`

_data.conceptsIntro1BlocksB = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">midia_principal</field>
      <value name="src">
        <block type="audio" id="OFge%WW-~~.%rZKqZqym">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0">360s</field>
        </block>
      </value>
    </block>
    <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="594" y="71">
      <field name="id">icone</field>
      <value name="src">
        <block type="image" id="n8jL;6KJe-2c6B~=pPj("></block>
      </value>
    </block>
  </xml>
`

_data.conceptsIntro1BlocksC = `
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
  </xml>
`
_data.conceptsIntro1BlocksD = `
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
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="170">
      <field name="id">midia_principal</field>
    </block>
     <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="20" y="270">
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
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="594" y="250">
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
    type: 'html',
    name: 'conceptsTask1',
    html: 'Tarefa 1: Por favor, analise com atenção os blocos a seguir.<br>'
  },
  {
    type: 'comment',
    isRequired: true,
    name: 'conceptsTask1Question',
    title: 'Qual é o comportamento da aplicação que corresponde aos blocos acima?'
  }
)

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
    <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="550" y="208">
      <field name="id">icone_centro</field>
      <value name="src">
        <block type="image" id="n8jL;6KJe-2c6B~=pPj("></block>
      </value>
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
    <block type="media" id="K2a)Xd1Ob5$8Ju=7i:DR" x="550" y="353">
      <field name="id">icone_praia</field>
      <value name="src">
        <block type="image" id="fQF^b?g4I,]ah26x]In~"></block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="443">
      <field name="id">video_principal</field>
    </block>
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="550" y="443">
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
    <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="590">
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
    <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="550" y="597">
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
  </xml>
`

// ----------------------------------------
// concepts page - recognition
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Reconhecedor',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro3',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito <em>Reconhecedor</em> permite reconhecimento de interações
        multimodais realizadas por usuários, como voz e gestos. Ele é definido
        por <strong>um identificador, seu conteúdo e âncoras</strong>.
        Entretanto, diferente de <em>Mídia</em>, o conteúdo de um
        <em>Reconhecedor</em> deve ser uma descrição de reconhecimento. As
        âncoras são porções delimitadas da descrição. Por exemplo, uma descrição
        de reconhecimento de voz deve ter âncoras que devem as frases a serem
        reconhecidas.</p>

        <p>Na nossa representação de blocos, o <em>Reconhecedor</em> é definido
        juntando um bloco de <em>Reconhecedor</em> com o campo id preenchido, e
        um bloco de conteúdo com as âncoras preenchidas. Exemplos de blocos
        serão apresentados para ilustrar o conceito.</p>

        <p>Os blocos a seguir definem os reconhecedores <em>rec_voz</em> e
        <em>rec_gestos</em>. O <em>rec_voz</em> tem um reconhecimento de voz
        como conteúdo. Essa descrição tem o trecho <em>repetir</em> que
        reconhece o comando de voz "repita vídeo". Já <em>rec_gestos</em> tem
        uma descrição de reconhecimento de gestos como conteúdo. Esse conteúdo
        utiliza dois trechos, esquerda e direita, para definir gestos de mão
        nessas direções.</p> </div>

        <div id='conceptsIntro3A'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso desse conceito em uma aplicação, os
        blocos a seguir definem uma nova versão da aplicação que reinicia um
        vídeo dada uma interação. Mas nessa versão, ao invés de selecionar, o
        vídeo é reiniciado ao usuário falar "repita vídeo".</p>

        <p>Essa aplicação utiliza duas <em>Mídia</em> (<em>midia_principal</em>
        e <em>sinte_voz</em>) e um <em>Reconhecedor</em> (<em>rec_voz</em>).
        
        <p>Para o comportamento, a aplicação utiliza três <em>Sincronismo</em>s.
        O primeiro <em>Sincronismo</em> define que <em>midia_principal</em> é
        iniciada com a aplicação. O segundo <em>Sincronismo</em> define que
        quando a <em>midia_principal</em> alcançar o seu trecho de
        <em>creditos</em> (300s), a frase da âncora <em>pergunta</em> é
        sintetizada e o <em>Reconhecedor</em> <em>rec_voz</em> inicia o
        reconhecimento. O último <em>Sincronismo</em> define que quando for
        reconhecida a âncora <em>repetir</em>,
        <em>midia_principal</em> deve ser reiniciada (terminada e iniciada).</p>
        </div>

        <div id='conceptsIntro3B'></div><br>
      `
    }
  ]
})

_data.conceptsIntro3BlocksA = `
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="180">
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="661" y="21">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
    <block type="media" id="v(3}oRBymiPD}7m@(iT*" x="20" y="177">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="OIfl%BPi_3-\`+z5^x\`FD">
          <mutation length="1"></mutation>
          <field name="id_area0">pergunta</field>
          <field name="label0">você deseja repetir o vídeo?</field>
        </block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="663" y="240">
      <field name="id">midia_principal</field>
    </block>
    <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="20" y="347">
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
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="662" y="357">
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

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'conceptsTask2',
    html: 'Tarefa 2: Os blocos a seguir são uma versão modificada da Tarefa 1. Por favor, analise. <br><br>'
  },
  {
    type: 'comment',
    isRequired: true,
    name: 'conceptsTask2Question',
    title: 'Qual é o novo comportamento da aplicação?'
  }
)

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
    <block type="media" id="J0=3=8AB$lViiF[SYu#!" x="597" y="22">
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
    <block type="media" id="B8oGN+K#=wjfeQi4K~WX" x="595" y="167">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="Oj6ycjV}(wESn+h/UL/Z">
          <mutation length="1"></mutation>
          <field name="id_area0">pergunta</field>
          <field name="label0">fale o vídeo que deseja ver, centro ou praia?</field>
        </block>
      </value>
    </block>
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="23" y="318">
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
    <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="595" y="453">
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
    <block type="port" id="+ p - MtE:D * clWz(7oX7Hg" x="27" y="502">
      <field name="id">video_principal</field>
    </block>
    <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="30" y="606">
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
    <block type="link" id="4^IYT6%+lHD0%*,oZz:%" x="597" y="616">
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
  </xml>
`

// ----------------------------------------
// concepts page - recognition combination
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Combinação de Reconhecedores',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro4',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>Um dos principais benefícios de interfaces multimodais é o uso
        diferentes interações, ou seja, as interações de usuários podem ser
        realizadas por diferentes modalidades. Em nossos conceitos essa
        combinação de modalidades de interação pode ser feita utilizando uma
        condição composta. Usar um operador OR indica que qualquer uma das
        interações é necessária. Já usar o operador AND indica que todas as
        interações são necessárias em qualquer ordem. E por fim usar o operador
        SEQ significa que as interações têm que ser feitas em sequência.</p> 

        <p>Os blocos a seguir modificam a aplicação acima. Mas nessa
        versão a mídia <em>midia_principal</em> é repetida quando usuário
        interage através de  voz ou (operador OR) através de gesto.</p>
        </div>

        <div id='conceptsIntro4A'></div><br>
      `
    }
  ]
})

_data.conceptsIntro4BlocksA = `
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="661" y="21">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
    <block type="input" id=".9jD5o=BhpsFB80:]=BB" x="660" y="167">
      <field name="id">rec_gesto</field>
      <value name="src">
        <block type="hand_gesture" id="}JcogVLf/Y7(1Pp@lK6,">
          <mutation length="1"></mutation>
          <field name="id_area0">esquerta</field>
          <field name="label0">esquerda</field>
        </block>
      </value>
    </block>
    <block type="media" id="v(3}oRBymiPD}7m@(iT*" x="19" y="226">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="OIfl%BPi_3-\`+z5^x\`FD">
          <mutation length="1"></mutation>
          <field name="id_area0">pergunta</field>
          <field name="label0">você deseja repetir o vídeo?</field>
        </block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="27" y="390">
      <field name="id">midia_principal</field>
    </block>
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="660" y="385">
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
    <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="32" y="487">
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
  </xml>
`

// ----------------------------------------
// concepts page - recognition combination - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'conceptsTask3',
    html: ` 
        <div style="text-align: justify; width: 70%;">
        Tarefa 3: Agora pedimos que edite os blocos da Tarefa 2 (copiados a
        seguir) para que seja possível a interação por voz <strong>ou</strong>
        (operador OR) interação por gestos. Na interação por gesto, considere
        que gesto de mão para esquerda indica centro e gesto de mão para direita
        indica praia.<br><br>
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
)

// ----------------------------------------
// concepts page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Grupo de Usuários',
  elements: [
    {
      type: 'html',
      name: 'conceptsIntro5',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Grupo de usuários</em> permite identificar
        unicamente interações de cada usuário. Por exemplo, o comando de voz
        apenas de um determinado usuário. Ele é definido por <strong>um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Mais precisamente, esses dispositivos definem o que
        um usuário necessita possuir para participar do grupo.</p>

        <p>Na nossa representação de blocos, o <em>Grupo de Usuários</em> é
        definida juntando um bloco de <em>Grupo de Usuários</em> com campo id
        preenchido e blocos de dispositivos. Por exemplo, os blocos a seguir
        definem um grupo de usuário <em>gu_gestos</em> que pode ter até 3
        membros, cada qual com seu reconhecedor de gestos (e.g. LeapMotion).</p>
        </div>

        <div id='conceptsIntro5A'></div><br>

        <div style="text-align: justify; width: 70%;"> 
        <p>Para ilustrar o uso de um <em>Grupo de Usuários</em>, os blocos a
        seguir são uma nova versão da aplicação que reinicia um vídeo dada uma
        interação por voz. Nessa versão, o vídeo será reiniciado apenas quando o
        segundo usuário falar "repita vídeo".</p>
        </div>

        <div id='conceptsIntro5B'></div>
      `
    }
  ]
})

_data.conceptsIntro5BlocksA = `
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

_data.conceptsIntro5BlocksB = `
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="669" y="22">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
    <block type="media" id="ifhmRRJ%o^5/3j{LucQj" x="22" y="178">
      <field name="id">sinte_voz</field>
      <value name="src">
        <block type="ssml" id="6d)v}%=\`HL1[M8cPHzuK">
          <mutation length="1"></mutation>
          <field name="id_area0">pergunta</field>
          <field name="label0">você deseja repetir o vídeo?</field>
        </block>
      </value>
    </block>
    <block type="user" id="IPnvWeecZqr2WM|RGxm|" x="673" y="179">
      <mutation length="1"></mutation>
      <field name="id">gu_voz</field>
      <field name="usermax">2</field>
      <value name="element_0">
        <block type="microfone" id="yU[{24F}.5IJtyI;VB5k"></block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="22" y="342">
      <field name="id">midia_principal</field>
    </block>
    <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="24" y="446">
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
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="669" y="433">
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
  </xml>
`

// ----------------------------------------
// concepts page - user - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'conceptsTask4',
    html: `
        <div style="text-align: justify; width: 70%;"> 
        Tarefa 4: Agora pedimos que edite novamente os blocos da Tarefa 2
        (copiados a seguir) para que apenas o segundo usuário, de um grupo de 3
        usuários com microfone, possa realizar a interação por voz.<br><br>
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
)

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
        evidências sobre os conceitos que apresentamos (<em>Mídia, Reconhecedor,
        Sincronismo</em> e <em>Grupo de Usuários</em>).</p>
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
  // visibleIf: '{profileNCL1} >= {profileHTML1}',
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
      
      <p>A tabela seguir apresenta como propomos instanciação dos conceitos de
      nossa pesquisa na versão atual da NCL (3.1). O conceito de
      <em>Mídia</em> é implementado pelo elemento <em>&ltmedia></em>. O
      conceito de <em>Sincronismo</em> é implementado pelo elemento
      <em>&ltlink></em>. Por fim os conceitos de <em>Reconhecedor</em> e
      <em>Grupo de usuários</em> não são implementados.</p></p>

      <table align="center" class="table-bordered table-striped
      table-condensed">
        <tr>
          <th>Conceito</th>
          <th>NCL atual</th>
          <th>Como propomos</th>
        </tr>
        <tr>
          <td><em>Mídia</em></td>
          <td><em>&ltmedia></em></td>
          <td>manter</td>
        </tr>
        <tr>
          <td><em>Sincronismo</em></td>
          <td><em>&ltport> e <em>&ltlink></em></td>
          <td>manter</td>
        </tr>
        <tr>
          <td><em>Reconhecedor</em></td>
          <td><em>não presente</em></td>
          <td>adicionar elemento <em>&ltinput></em></td>
        </tr>
        <tr>
          <td><em>Grupo de Usuários</em></td>
          <td>não presente</td></td>
          <td>adicionar elemento <em>&ltuserClass></em></td>
        </tr>
      </table>
      <br>

      <p>Vamos agora detalhar esses conceitos e perdir que você realize algumas
      tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar
      seus conhecimentos, mas sim capturar evidências de nossa
      pesquisa.</strong></p>
      </div>
    `
  }
)

// ----------------------------------------
// ncl page - midia and link
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Mídia e Sincronismo em NCL',
  elements: [
    {
      name: 'nclIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Mídia</em> é definida por <strong>um identificador,
        um conteúdo e âncoras</strong>. Na nossa NCL, ele já é implementado pelo
        elemento <em>&ltmedia></em>. O identificador é definido pelo atributo
        <em>id</em> e o arquivo de mídia do conteúdo é definido pelo atributo
        <em>src</em>. As âncoras são definidas pelo elemento <em>area</em> e
        podem definir porções temporais com os atributos <em>begin</em> e
        <em>end</em> ou trechos delimitados com o atributo <em>label</em>.</p>

        <p>Elementos <em>&ltmedia></em> também podem possuir elementos
        <em>&ltproperty></em> para definir características de sua exibição, como
        <em>&ltsize></em> (width e height), <em>&ltposition></em> (top e left)
        and <em>&ltz-index></em>. Trechos de código serão apresentados a seguir
        para ilustrar esse conceito em NCL.</p>

        <p>O trecho de código a seguir define duas mídias com identificadores
        <em>midia_principal</em> e <em>icone</em>, mas elas não possuem
        conteúdo. Por não terem conteúdo, elas não apresentam resultados
        audiovisuais.</p>

        <div id='nclIntro1CodeA'></div><br>

        <p>O trecho de código a seguir define as mesmas mídias acima, mas com
        conteúdos de áudio e imagem, respectivamente. Em especial, a mídia de
        <em>midia_principal</em> tem definida uma âncora chamada de
        <em>creditos</em> que inicia aos 300 e termina aos 360 segundos.</p>

        <div id='nclIntro1CodeB'></div><br>

        <p>É importante ressaltar que mudanças no conteúdo de uma
        <em>&ltmedia></em> não afetam o comportamento da aplicação, desde que a
        mídia defina as mesmas âncoras, pois os sincronismos são definidos
        baseados nas âncoras e independentes do conteúdo. Por exemplo, o trecho
        de código a seguir define a mesma mídia <em>midia_principal</em>, mas
        com o conteúdo de vídeo.</p>

        <div id='nclIntro1CodeC'></div>

        <p>Além de mídias como imagens, áudio e vídeos, o elemento
        <em>&ltmedia></em> de nossa NCL deve suportar outras modalidades de
        conteúdo, como a sintetização de voz. Os trechos de código a seguir
        ilustram o uso de sintetização de voz em nossa NCL. O primeiro apresenta
        o arquivo <em>sinte_voz.ssml</em> que segue o formato SSML (Speech
        Synthesis Markup Language) para sintetização de voz. Ele possui uma
        frase com o identificador "pergunta" que sintetizada "você deseja
        repetir o vídeo?". O segundo define uma <em>&ltmedia></em> com
        identificador <em>sinte_voz</em>, que tem como conteúdo o arquivo
        <em>sinte_voz.ssml</em>. Essa <em>&ltmedia></em> possui uma âncora que
        indica a frase a ser sintetizada.</p>

        <div id='nclIntro1CodeD'></div>
        <div id='nclIntro1CodeE'></div>
      `
    },
    {
      name: 'nclIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Sincronismo</em> é baseado em causalidade e
        definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. Na NCL esse conceito já implementado pelos elementos
        <em>&ltport></em> e <em>&ltlink></em>. Os elementos <em>&ltport></em>
        indicam quais elementos  de <em>&ltmedia></em> são iniciados quando a
        aplicação é iniciada.</p>

        <p>No <em>&ltlink></em> as ações podem ser de iniciar ("start") ou parar
        ("stop") uma <em>Mídia</em> ou <em>Reconhecedor</em>. Já as condições
        podem ser simples ou compostas. As condições simples em um
        <em>&ltlink></em> podem ser de início ("onBegin") ou fim ("onEnd") de
        uma mídia ou de sua âncora, seleção de mídia pelo usuário
        ("onSelection") ou reconhecimento de uma interação multimodal
        ("onRecognition").<p>

        <p>Em nossa NCL, as condições compostas em um <em>&ltlink></em> combinam
        condições simples utilizando um dos seguintes operadores: 'OR' quando
        apenas uma das condições é necessária; 'AND' quando todas condições são
        necessárias em qualquer ordem; e 'SEQ' quando todas as condições são
        necessárias e na sequência estabelecida.</p>

        <p>O relacionamento entre condições e ações é definido pelo connector no
        atributdo <em>xconnector</em> do <em>&ltlink></em>. A tabela a seguir
        mostra exemplos de connectores.</p>
        
        <table align="center" class="table-bordered table-striped
        table-condensed">
          <tr>
            <th>nome</th>
            <th>define</th>
          </tr>
          <tr>
            <td><em>onBeginStart</td>
            <td>condição "onBegin" e ações de "start"</td>
          </tr>
          <tr>
            <td><em>onSelectionStopStart</em></td>
            <td>condição "onSelection" e ações de "stop" e "start" </td>
          </tr>
          <tr>
            <td><em>onRecognizeStopStart</em></td>
            <td>condição "onRecognize" e ações de "stop" e "start" </td>
          </tr>
          <tr>
            <td><em>onOrRecognizeStopStart</em></td> 
            <td>condições "onRecognize" combinados com operador "OR", ações de
            "stop" e "start" </td>
          </tr>
        </table><br>

        <p>A associação de elementos <em>&ltmedia></em> ou <em>&ltinput></em> em
        um <em>&ltlink></em> é definida pelo elemento <em>&ltbind></em>.</p>
        
        <p>Para ilustrar o uso desse conceito em uma aplicação NCL, o trecho de
        código a segui define uma aplicação que apresenta um vídeo e um ícone
        durante os créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado.</p>

        <p>O trecho de código utiliza um elemento <em>&ltport></em> e dois
        elementos <em>&ltlink></em>. O <em>&ltport></em> define que o elemento
        <em>midia_principal</em> inicia com a aplicação. O primeiro define que
        quando o <em>video_principal</em> alcançar o seu trecho de créditos a
        imagem <em>icone_repetir</em> é iniciada. O segundo define que quando
        essa <em>icone_reptetir</em> for selecionado o <em>video_principal</em>
        será reiniciado (<em>stop</em> e <em>start</em>).</p>

        <div id='nclIntro2CodeA'></div>
        </div>
      `
    }
  ]
})

_data.nclIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="icone">
  </media>
  <media id="midia_principal">
  </media>
  ]]></script>
`

_data.nclIntro1CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="icone" src="icone.png">
    <property name="size" value="20%, 20%"></property>
    <property name="top" value="80%"></property>
    <property name="zindex" value="1"></property>
  </media>
  <media id="midia_principal" src="audio.mp4">
    <area id="credits" begin="300s" end="360s"></area>
  </media>
  ]]></script>
`

_data.nclIntro1CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="midia_principal" src="video.mp4">
    <property name="size" value="100%, 100%"></property>
    <area id="credits" begin="300s" end="360s"></area>
  </media>
  ]]></script>
`

_data.nclIntro1CodeD = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <speak xmlns="http://www.w3.org/2001/10/synthesis">
    <s id="repetir">você deseja repetir o vídeo?</s>
  </speak>
  ]]></script>
`

_data.nclIntro1CodeE = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="sinte_voz" src="sinte_voz.ssml">
    <area label="repetir"></area>
  </media>
  ]]></script>
`

_data.nclIntro2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[7,8,12,16,20,]">
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
        <area id="credits" begin="300s" end="360s"></area>
      </media>
      <media id="icone_repetir" src="icone_repetir.png">
        <property name="size" value="20%, 20%"></property>
        <property name="zindex" value="1"></property>
      </media>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"></bind>
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

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'nclTask1',
    html: `
        <div style="text-align: justify; width: 70%;">
        <p>Tarefa 1: Por favor, analise com atenção o trecho de código NCL a
        seguir.</p>
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
)

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
        <area id="credits" begin="300s" end="360s"></area>
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
  title: 'Reconhecedor em NCL',
  elements: [
    {
      name: 'nclIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Reconhecedor</em> é definido por <strong>um identificador, seu
        conteúdo e âncoras</strong>. Na nossa NCL, ele é implementado pelo
        elemento <em>&ltinput></em>. O identificador é definido pelo atributo
        <em>id</em> e a descrição de reconhecimento é definida pelo atributo
        <em>src</em>. As âncoras são definidas pelo elemento <em>area</em> e
        podem definir trechos delimitados da descrição com o atributo
        <em>label</em>. Trechos de código ilustram exemplos de descrições de
        reconhecimento.</p>

        <p>O trecho de código a seguir ilustra o arquivo <em>rec_voz.srgs</em>
        que seguir o formato SRGS (Speech Recognition Grammar Specification)
        reconhecimento de voz. Ele possui uma frase com o identificador
        <em>repete</em> que define o reconhecimento de voz "repita vídeo".</p>

        <div id='nclIntro3CodeA'></div><br>

        <p>O trecho de código a seguir ilustra o arquivo <em>rec_gestos.gml</em>
        que segue o formato GML(Gesture Markup Language) para reconhecimento de
        gestos de mão. Ele possui dois gestos com os identificadores
        <em>swipe_esquerda</em> e <em>swipe_direita</em>, que definem gestos de
        mão para esquerda e para direita, respectivamente.</p>

        <div id='nclIntro3CodeB'></div><br>

        <p>Para ilustrar o uso desse conceito em uma aplicação NCL, o trecho de
        código a seguir apresenta uma nova versão da aplicação que reinicia um
        vídeo dada uma interação (modificações em destaque). Nessa versão, ao
        invés de selecionar, o vídeo é reiniciado ao usuário falar "repita
        vídeo".</p>

        <p>Essa aplicação utiliza dois elementos de
        <em>&ltmedia></em> (<em>video_principal</em> e <em>sinte_voz</em>) e um
        <em>&ltinput></em> (<em>rec_voz</em>). Os elementos <em>sinte_voz</em> e
        <em>rec_voz</em> usam respectivamente os arquivos
        <em>sinte_voz.srgs</em> e <em>rec_voz.srgs</em> (apresentados acima). 
        
        <p>Para o comportamento, a aplicação utiliza um elemento
        <em>&ltport></em> e dois <em>&ltlink></em>. O <em>&ltport></em>
        define que o <em>video_principal</em> é iniciado com aplicação. O
        primeiro <em>&ltlink></em> define que quando o <em>video_principal</em>
        alcançar a sua porção <em>creditos</em> (300s), a frase da âncora
        <em>pergunta</em> é sintetizada e o reconhecedor <em>rec_voz</em> inicia
        seu reconhecimento. O segundo <em>&ltlink></em> define que quando for
        reconhecida a âncora <em>repete</em>, a <em>midia_principal</em> deve
        ser reiniciada (terminada e iniciada).</p>

        <div id='nclIntro3CodeC'></div>

        </div>
      `
    }
  ]
})

_data.nclIntro3CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [3]"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <grammar xmlns="http://www.w3.org/2001/06/grammar">
    <rule id="repete">repita vídeo</rule>
  </grammar>
  ]]></script>
`
_data.nclIntro3CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [3,6]"> <![CDATA[
  <?xml version="1.0" encoding="UTF-8"?>
  <GestureMarkupLanguage>
    <Gesture id="swipe_esquerda" type="swipe">
      ...
    </Gesture>
    <Gesture id="swipe_direta" type="swipe">
      ...
    </Gesture>
  </GestureMarkupLanguage>
  ]]></script>
`
_data.nclIntro3CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[14,17,25]">
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
        <area id="credits" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"></area>
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></repete>
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"></bind>
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

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'nclTask2',
    html: `
    <div style="text-align: justify; width: 70%;">
    Tarefa 2: Considere as descrições sinte_voz_videos.ssml e
    rec_voz_videos.srgs a seguir.<br><br>

    <div id='nclTask2CodeA'></div>
    <div id='nclTask2CodeB'></div>

    <p>A aplicação NCL da Tarefa 1 foi modificada para permitir interações
    multimodais utilizando as duas descrições acima. Uma versão modificada
    da Tarefa 1 é apresentada a seguir com as modificações destacadas. Por
    favor, analise com atenção.</p>

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
)

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
  auto-links: false; highlight: [19,22,28,29,31,37]">
  <![CDATA[` + _data.nclTask2CCodeOnly + ` ]]></script>
`

// ----------------------------------------
// ncl page - recognition combination
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Combinação de Reconhecedores em NCL',
  elements: [
    {
      name: 'nclIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Um dos principais benefícios de interfaces multimodais é o uso
        diferentes interações. Ou seja, as interações de usuários podem ser
        realizadas por diferentes modalidades. Em nossos, conceitos essa
        combinação de modalidades de interação pode ser feita utilizando uma
        condição composta. Usar um operador 'OR' indica que qualquer uma das
        interações é necessária. Já usar operador 'AND' indica que todas as
        interações são necessárias em qualquer ordem. E por fim usar o operador
        'SEQ' significa que as interações tem que ser feitas em sequência.</p> 

        <p>Os blocos a seguir modificam a aplicação acima. Mas nessa
        versão a mídia <em>midia_principal</em> é repetida quando usuário
        interage através de voz ou (operador 'OR') através de gesto.</p>

        <div id='nclIntro4CodeA'></div><br>
        </div>
      `
    }
  ]
})

_data.nclIntro4CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[14,17,25]">
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
        <area id="credits" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.ssml">
        <area label="pergunta"></area>
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></repete>
      </input>
      <input id="rec_gesto" src="rec_gesto.gml">
        <area label="esquerda"></repete>
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"></bind>
        <bind role="start" component="sinte_voz" interface="pergunta"></bind>
        <bind role="start" component="rec_voz"></bind>
      </link>
      <link xconnector="conEx#onOrRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete"/>
        <bind role="onRecognize" component="rec_gesto" interface="esquerda"/>
        <bind role="stop" component="rec_gesto"></bind>
        <bind role="stop" component="rec_voz"></bind>
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

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'comment',
    isRequired: true,
    name: 'nclTask3Question',
    rows: '47',
    title: `Tarefa 3: Agora pedimos que edite o código NCL da Tarefa 2
      (copiado  a seguir) para que seja possível a interação por voz
      <strong>ou</strong> (operador OR) interação por gestos. Na interação por
      gesto,você pode referenciar o arquivo de descrição
      <em>rec_gestos.gml</em> apresentado nesta seção e considere que gesto de
      mão para esquerda indica centro e gesto de mão para direita indica
      praia.
    `
  }
)

// ----------------------------------------
// ncl page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Grupo de Usuários em NCL',
  elements: [
    {
      name: 'nclIntro5',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Grupo de Usuários</em> é definido <strong>por um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Na nossa NCL, ele é implementado pelo elemento
        <em>&ltuserClass></em> dentro do <em>&lthead></em>. O identificador é
        definido pelo atributo <em>id</em> e os dispositivos são definidos por
        um arquivo de descrição definido em <em>src</em>. Para essa descrição
        propomos um descrição  no formato SPARQL. O trecho de código a seguir
        apresenta o arquivo de descrição de usuários
        <em>gu_leap_microphone.sparql</em>. Essa descrição define que cada
        usuário do grupo deve ter um microfone e um leapmotion.</p>

        <div id='nclIntro5CodeA'></div><br>

        <p>Para ilustrar o uso de um <em>Grupo de Usuários</em> em NCL, o trecho
        de código a seguir apresenta uma nova versão da aplicação que reinicia
        um vídeo dada uma interação por voz (modificações em destaque). Mas
        nessa versão, ao invés de clicar, o vídeo será reiniciado ao segundo
        usuário do usuário falar "repita vídeo".</p>

        <div id='nclIntro5CodeB'></div>
        </div>
      `
    }
  ]
})

_data.nclIntro5CodeA = `
  <script type="syntaxhighlighter" class="brush: plain; toolbar: false;
  auto-links: false; highlight:[6,7]"> <![CDATA[
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
_data.nclIntro5CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[8,9,31]"> <![CDATA[
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
        <area id="credits" begin="300s" end="360s"></area>
      </media>
      <media id="sinte_voz" src="sinte_voz.srgs">
        <area label="pergunta"></area>
      </media>
      <input id="rec_voz" src="rec_voz.srgs">
        <area label="repete"></area>
      </input>
      <link xconnector="conEx#onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"></bind>
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
// ncl page - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'comment',
    name: 'nclTask4Question',
    rows: '47',
    title: ` Tarefa 4: Agora pedimos que edite novamente o trecho de código
    NCL da Tarefa 2 (copiado a seguir) para que apenas o segundo usuário, de
    um grupo de 3 usuários com microfone, possa realizar a interação por
    voz.`
  }
)

// ----------------------------------------
// ncl feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'nclFeedback',
  // visibleIf: '{profileNCL1} >= {profileHTML1}',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências de como os conceitos apresentados na seção
        anterior(<em>Mídia, Reconhecedor, Sincronismo</em> e <em>Grupo de
        Usuários</em>) estão instanciados na NCL para suportar interações
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
  // visibleIf: '{profileHTML1} > {profileNCL1}',
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
    <em>Mídia</em> é parcialmente implementado por elementos como
    <em>&ltimg></em>, <em>&ltvideo></em> e <em>&ltaudio></em>, pois estes
    não possuem nosso conceito de âncora. O conceito de <em>Sincronismo</em>
    é parcialmente implementado pelo elemento <em>script</em>, pois estes
    permitem definir comportamentos na aplicação, como interações de usuário
    por apontador. Por fim os conceitos de <em>Reconhecedor</em> e <em>Grupo
    de usuários</em> não são implementados.</p>

    <table align="center" class="table-bordered table-striped
    table-condensed">
      <tr>
        <th>Conceito</th>
        <th>HTML atual</th>
        <th>Como propomos</th>
      </tr>
      <tr>
        <td><em>&ltmedia></em></td>
        <td><em>&ltimg></em>, <em>&ltvideo></em>, <em>&ltaudio></em>
        </td>
        <td>estender esses elementos com <em>&ltarea></em></td>
      </tr>
      <tr>
        <td><em>Sincronismo</em></td>
        <td><em>&ltscript></em></td>
        <td><em>&ltscript></em> com o objeto JavaScript
        <em>Synchronism</em></td>
      </tr>
      <tr>
        <td><em>Reconhecedor</em></td>
        <td><em>não presente</em></td>
        <td>adicionar elemento <em>&ltinput></em></td>
      </tr>
      <tr>
        <td><em>Grupo de Usuários</em></td>
        <td>não presente</td></td>
        <td>adicionar elemento <em>&ltuserClass></em></td>
      </tr>
    </table>
    <br>
    <p>Vamos agora detalhar esses conceitos e perdir que você realize
    algumas tarefas. <strong>Ressaltamos que essas tarefas NÃO se destinam a
    avaliar seus conhecimentos, mas sim capturar evidências de nossa
    pesquisa.</strong>.</p>
    </div>
  `
})

// ----------------------------------------
// html page - media and link
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Mídia e Sincronismo em HTML',
  elements: [
    {
      name: 'htmlIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Mídia</em> é definido por <strong>um identificador,
        um conteúdo e âncoras</strong>. Na nossa HTML, ele  é parcialmente
        implementado por elementos como <em>&ltimg></em>, <em>&ltaudio></em>,
        <em>&ltvideo></em> e <em>&ltobj></em>. O identificador é definido pelo
        atributo <em>id</em> e o arquivo de mídia do conteúdo é definido
        atributo <em>src</em>. Para permitir definir âncoras esses elementos são
        estendidos com elementos <em>&ltarea></em>. Uma <em>&ltarea></em> pode
        definir uma porção temporal com os atributos <em>begin</em> e
        <em>end</em> ou um trecho delimitado com o atributo <em>label</em>.</p>

        <p>Elementos <em>Mídia</em> também podem possuir propriedades para
        definir características de sua exibição definidas no atributo
        <em>&ltstyle></em>. Trechos de código serão apresentados a seguir para
        ilustrar esse conceito em HTML.</p>

        <p>O trecho de código a seguir define as duas mídias com identificadores
        <em>midia_principal</em> e <em>icone</em>, mas elas não possuem
        conteúdo. Por não terem conteúdo, elas não apresentaram resultados
        audiovisuais.</p>

        <div id='htmlIntro1CodeA'></div><br>

        <p>O trecho de código a seguir define as mesmas mídias acima, mas com
        conteúdos de áudio e imagem, respectivamente. Em especial, a mídia de
        <em>midia_principal</em> tem definida uma âncora chamada de
        <em>creditos</em> que inicia aos 300 e termina aos 360 segundos.</p>

        <div id='htmlIntro1CodeB'></div><br>

        <p>É importante ressaltar que mudanças no conteúdo de uma
        <em>&ltmedia></em> não afetam o comportamento da aplicação, desde que a
        mídia defina as mesmas âncoras, pois os sincronismos são definidos
        baseados nas âncoras e independentes do conteúdo. Por exemplo, o trecho
        de código a seguir define a mesma mídia <em>midia_principal</em> mas
        com o conteúdo de vídeo.</p>

        <div id='htmlIntro1CodeC'></div>

        <p>Além de mídias como imagens, áudio e vídeos, a nossa HTML estendida
        e suportar outras modalidades de conteúdo como sintetização de voz e  
        avatares humanoides. Por exemplo, os trechos de código a seguir ilustram
        o uso de sintetização de voz em nossa HTML.</p>

        <p>Além de mídias como imagens, áudio e vídeos, o elemento
        <em>&ltmedia></em> de nossa HTML deve suportar outras modalidades de
        conteúdo, como a sintetização de voz. Os trechos de código a seguir
        ilustram o uso de sintetização de voz em nossa HTML. O primeiro
        apresenta o arquivo <em>sinte_voz.ssml</em> que segue o formato SSML
        (Speech Synthesis Markup Language) para sintetização de voz. Ele possui
        uma frase com o identificador "pergunta" que sintetizada "você deseja
        repetir o vídeo?". O segundo define uma <em>&ltmedia></em> com
        identificador <em>sinte_voz</em>, que tem como conteúdo o arquivo
        <em>sinte_voz.ssml</em>. Essa <em>&ltmedia></em> possui uma âncora que
        indica a frase a ser sintetizada.</p>

        <div id='htmlIntro1CodeD'></div>

        <div id='htmlIntro1CodeE'></div>

        </div>
      `
    },
    {
      name: 'htmlIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito de <em>Sincronismo</em> é baseado em causalidade e
        definido por <strong>um conjunto de condições e um conjunto de
        ações</strong>. Na nossa HTML, ele é implementado pelo elemento
        <em>&ltscript></em>, com um código JavaScript que utiliza o objeto
        <em>Synchronism</em>. <p>As ações podem ser de iniciar ("start") ou
        parar ("stop") uma <em>Mídia</em> ou <em>Reconhecedor</em>. Já as
        condições podem ser simples ou compostas. 
        
        <p>As condições simples em um objeto <em>Synchronism</em> podem ser de
        início ("onBegin") ou fim ("onEnd") de uma mídia ou de sua âncora,
        seleção de mídia pelo usuário ("onSelection") ou reconhecimento de uma
        interação multimodal ("onRecognition").<p>

        <p>Condições compostas em um objeto <em>Synchronism</em> combinam ações
        simples utilizando um dos seguintes operadores: 'OR' quando apenas uma
        das condições é necessária; 'AND' quando todas as condições são
        necessárias em qualquer ordem; e 'SEQ' quando todas as condições são
        necessárias e na sequência estabelecida.</p>

        <p>O relacionamento entre condições e ações é definida pelo objeto
        <em>Synchronism</em>. A tabela a seguir mostra exemplos de parâmetros do
        construtor do objeto <em>Synchronism</em>.</p>
        
        <table align="center" class="table-bordered table-striped
        table-condensed">
          <tr>
            <th>nome</th>
            <th>define</th>
          </tr>
          <tr>
            <td><em>onBeginStart</td>
            <td>condição "onBegin" e ações de "start"</td>
          </tr>
          <tr>
            <td><em>onSelectionStopStart</em></td>
            <td>condição "onSelection" e ações de "stop" e "start" </td>
          </tr>
          <tr>
            <td><em>onRecognizeStopStart</em></td>
            <td>condição "onRecognize" e ações de "stop" e "start" </td>
          </tr>
          <tr>
            <td><em>onOrRecognizeStopStart</em></td> 
            <td>condições "onRecognize" combinados com operador "OR", ações de
            "stop" e "start" </td>
          </tr>
        </table><br>

        <p>A associação de elementos <em>&ltmedia></em> ou <em>&ltinput></em> o
        <em>&ltlink></em> esta interessado é definida pelo método <em>bind</em>
        de objeto <em>Synchronism</em>.</p>

        <p>Para ilustrar o uso desse conceito em uma aplicação HTML, o trecho de
        código a seguir define uma aplicação que apresenta um vídeo e um ícone
        durante os créditos do vídeo. Se o usuário selecionar o ícone, o vídeo é
        reiniciado.</p>

        <p>O trecho de código utiliza três objetos <em>Synchronism</em>. O
        primeiro define que o elemento <em>midia_principal</em> inicia com a
        aplicação. O segundo define que quando o <em>video_principal</em>
        alcançar o seu trecho de créditos, a imagem <em>icone_repetir</em> é
        iniciada. O terceiro define que quando <em>icone_repetir</em> for
        selecionado, o <em>video_principal</em> será reiniciado (<em>stop</em> e
        <em>start</em>).</p>

        <div id='htmlIntro2CodeA'></div>
        </div>
      `
    }
  ]
})

_data.htmlIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <img id="icone"></img>
  <audio id="midia_principal"></img>
  ]]></script>
`

_data.htmlIntro1CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <img id="icone" src="icone.png"
     style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
  </img>
  <audio id="midia_principal" src="audio.mp3">
    <area id="credits" begin="300s" end="360s"></area>
  </audio>
  ]]></script>
`

_data.htmlIntro1CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <img id="icone" src="icone.png"
   style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
  </img>
  <video id="midia_principal" src="video.mp4" 
    style="position: absolute; height 100%; width: 100%;">
    <area id="credits" begin="300s" end="360s"></area>
  </video>
  ]]></script>
`

_data.htmlIntro1CodeD = _data.nclIntro1CodeD

_data.htmlIntro1CodeE = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <object id="sinte_voz" src="sinte_voz.ssml">
    <area label="repetir"></area>
  </object>
  ]]></script>
`

// ----------------------------------------
// html page - media and link - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'htmlTask1',
    html: `
      <div style="text-align: justify; width: 70%;">
      <p>Tarefa 1: Por favor, analise com atenção o trecho de código HTML a
      seguir.</p>
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
)

_data.htmlTask1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="video_inicial" src="video_inicial.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <video id="video_centro" src="video_centro.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <video id="video_praia" src="video_praia.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <img id="icone_centro" src="icone_centro.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <img id="icone_praia" src="icone_praia.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <script>
      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "video_inicial")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "video_inicial", "credits")
      sync.bind("start", "icone_centro")
      sync.bind("start", "icone_praia")

      var sync3 = new Synchronism("onSelectionStopStart")
      sync.bind("onSelection", "icone_centro")
      sync.bind("stop", "video_inicial")
      sync.bind("start", "video_centro")

      var sync3 = new Synchronism("onSelectionStopStart")
      sync.bind("onSelection", "icone_praia")
      sync.bind("stop", "video_inicial")
      sync.bind("start", "video_praia")
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
  title: 'Reconhecedores em HTML',
  elements: [
    {
      name: 'htmlIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>O conceito <em>Reconhecedor</em> é definido por <strong>um
        identificador, seu conteúdo e âncoras</strong>. Na nossa HTML, ele é
        implementado pelo elemento <em>&ltobj></em>. O identificador é definido
        pelo atributo <em>id</em> e a descrição de reconhecimento é definida
        pelo atributo <em>src</em>. As âncoras são definidas pelo elemento
        <em>area</em> e podem definir trechos delimitados da descrição com o
        atributo <em>label</em>. Trechos de código serão apresentados a seguir
        para ilustrar esse conceito em HTML.</p>

        <p>O trecho de código a seguir ilustra o arquivo <em>rec_voz.srgs</em>
        que seguir o formato SRGS (Speech Recognition Grammar Specification)
        reconhecimento de voz. Ele possui uma frase com o identificador
        <em>repete</em> que define o reconhecimento de voz "repita vídeo".</p>

        <div id='htmlIntro3CodeA'></div><br>

        <p>O trecho de código a seguir ilustra o arquivo <em>rec_gestos.gml</em>
        que segue o formato GML(Gesture Markup Language) para reconhecimento de
        gestos de mão. Ele possui dois gestos com os identificadores
        <em>swipe_esquerda</em> e <em>swipe_direita</em>, que definem gestos de
        mão para esquerda e para direita, respectivamente.</p>

        <div id='htmlIntro3CodeB'></div><br>

        <p>Para ilustrar o uso desse conceito em uma aplicação HTML, o trecho de
        código a seguir apresenta uma nova versão da aplicação que reinicia um
        vídeo dada uma interação (modificações em destaque). Nessa versão,
        ao invés de selecionar, o vídeo é reiniciado ao usuário falar "repita
        vídeo".</p>

        <p>Essa aplicação utiliza dois elementos de mídia
        (<em>video_principal</em> e <em>sinte_voz</em>) e um de reconhecimento
        (<em>rec_voz</em>). Os elementos <em>sinte_voz</em> e <em>rec_voz</em>
        usam respectivamente os arquivos <em>sinte_voz.srgs</em> e
        <em>rec_voz.srgs</em> (apresentados a cima). 
        
        <p>Para o comportamento, a aplicação utiliza um <em>&ltscript></em> com
        três objetos <em>Synchronism</em>. O primeiro <em>Synchronism</em>
        define que <em>midia_principal</em> é iniciada com a aplicação. O
        segundo <em>Synchronism</em> define que quando o
        <em>video_principal</em> alcançar a sua porção de <em>creditos</em>
        (300s), a frase da âncora <em>pergunta</em> é sintetizada e o
        reconhecedor <em>rec</em> inicia seu reconhecimento. O último
        <em>Synchronism</em> define que o <em>video_principal</em> deve ser
        reiniciado (<em>stop</em> e <em>start</em>) quando for reconhecido o
        trecho <em>repete</em>.</p>

        <div id='htmlIntro3CodeC'></div>

        </div>
      `
    }
  ]
})

_data.htmlIntro2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[5,9,13,17,21]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"></area>
    </video>
    <img id="icone_repetir" src="icone_repetir.png"
      style="position: absolute; width: 20%; height: 20%; top: 80%; z-index: 1;">
    </img>
    <script>
      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "midia_principal")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "midia_principal", "credits")
      sync.bind("start", "icone_repetir")

      var sync3 = new Synchronism("onSelectionStopStart")
      sync.bind("onSelection", "icone_repetir")
      sync.bind("stop", "midia_principal")
      sync.bind("start", "midia_principal")
    <&#47script>
  </body>
  </html>
  ]]></script>
`
_data.htmlIntro3CodeA = _data.nclIntro3CodeA
_data.htmlIntro3CodeB = _data.nclIntro3CodeB

_data.htmlIntro3CodeC = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[9,12,20,25]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area>
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area>
    </object>
    <script>
      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "midia_principal")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "midia_principal", "credits")
      sync.bind("start", "sinte_voz")
      sync.bind("start", "rec_voz")

      var sync3 = new Synchronism("onRecognizeStopStart")
      sync.bind("onRecognize", "rec_voz", "repete")
      sync.bind("stop", "midia_principal")
      sync.bind("start", "midia_principal")

    <&#47script>
  </body>
  </html>
  ]]></script>
`
// ----------------------------------------
// html page - recognition - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'html',
    name: 'htmlTask2',
    html: `
        <div style="text-align: justify; width: 70%;">
        Tarefa 2: Considere as descrições sinte_voz.ssml e rec_voz.srgs,
        respectivamente, a seguir.<br><br>

        <div id='htmlTask2CodeA'></div>
        <div id='htmlTask2CodeB'></div>

        <p>A aplicação HTML da Tarefa 1 foi modificada para permitir interações
        multimodais utilizando as duas descrições acima. O novo trecho de código
        é apresentado a seguir com as modificações destacadas. Por favor,
        analise com atenção.</p>

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
)

_data.htmlTask2CodeCOnly = `
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="video_inicial" src="video_inicial.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"></area>
    </video>
    <video id="video_centro" src="video_centro.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"></area>
    </video>
    <video id="video_praia" src="video_praia.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"></area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"></area>
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"></repete>
    </object>
    <script>
      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "video_inicial")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "video_inicial", "credits")
      sync.bind("start", "sinte_voz", "pergunta")
      sync.bind("start", "rec_voz")

      var sync3 = new Synchronism("onRecognizeStopStart")
      sync.bind("onRecognize", "rec_voz", "centro")
      sync.bind("stop", "video_inicial")
      sync.bind("start", "video_centro")

      var sync3 = new Synchronism("onRecognizeStopStart")
      sync.bind("onRecognize", "rec_voz", "praia")
      sync.bind("stop", "video_inicial")
      sync.bind("start", "video_praia")
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
  title: 'Combinação de Reconhecedores em HTML',
  elements: [
    {
      name: 'htmlIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Um dos principais benefícios de interfaces multimodais é o uso
        diferentes interações, ou seja, as interações de usuários podem ser
        realizadas por diferentes modalidades. Em nossos, conceitos essa
        combinação de modalidades de interação pode ser feita utilizando uma
        condição composta. Usar um operador OR indica que qualquer uma das
        interações é necessária. Já usar operador AND indica que todas as
        interações são necessárias em qualquer ordem. E por fim usar o operador
        SEQ significa que as interações tem que ser feitas em sequência.</p> 

        <p>Os blocos a seguir modificam a aplicação acima. Mas nessa
        versão a mídia <em>midia_principal</em> é repetida quando usuário
        interage através de voz ou (operador OR) através de gesto.</p>

        <div id='htmlIntro4CodeA'></div><br>
        </div>
      `
    }
  ]
})

_data.htmlIntro4CodeA = `
 <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[15,23,29]"><![CDATA[
  <!DOCTYPE html>
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area>
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area>
    </object>
    <object id="rec_gesto" src="rec_gesto.gml">
      <area label="esquerda"><&#47area>
    </object>
    <script>
      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "midia_principal")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "midia_principal", "credits")
      sync.bind("start", "sinte_voz")
      sync.bind("start", "rec_voz")
      sync.bind("start", "rec_gesto")

      var sync3 = new Synchronism("onOrRecognizeStopStart")
      sync.bind("onRecognize", "rec_voz", "repete")
      sync.bind("onRecognize", "rec_gesto", "esquerda")
      sync.bind("stop", "rec_voz")
      sync.bind("stop", "rec_gesto")
      sync.bind("stop", "midia_principal")
      sync.bind("start", "midia_principal")

    <&#47script>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - recognition combination - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'comment',
    name: 'htmlTask3Question',
    rows: '47',
    title: `Tarefa 3: Agora pedimos que edite o código HTML da Tarefa 2
        (copiado  a seguir) para que seja possível a interação por voz
        <strong>ou</strong> (operador OR) interação por gestos. Na interação por
        gesto, você pode referenciar o arquivo de descrição
        <em>rec_gestos.gml</em> apresentado nesta seção e considere que gesto de
        mão para esquerda indica centro e gesto de mão para direita indica
        praia.
      `
  }
)

// ----------------------------------------
// html page - user
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Grupo de Usuários em HTML',
  elements: [
    {
      name: 'htmlIntro5',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p> conceito de <em>Grupo de Usuários</em> é definido <strong>por um
        identificador, número máximo de participantes e quais dispositivos estes
        utilizam</strong>. Na nossa HTML, ele é implementado por elemento
        JavaScript que utilize um objeto <em>&ltUserGroup></em>. Para essa
        descrição propomos usar um descrição no formato SPARQL. Essa descrição é
        utilizada como parâmetro na criação do objeto <em>&ltUserGroup></em>. O
        trecho a seguir apresenta um codigo JavaScript que cria um objeto
        <em>&ltUserGroup></em> em que cada usuário do grupo deve ter um
        microfone e um leapmotion.</p>

        <div id='htmlIntro5CodeA'></div><br>

        <p>Para ilustrar o uso de um <em>Grupo de Usuários</em> em HTML, o
        código a seguir é uma nova versão da aplicação que reinicia um vídeo
        dada uma interação de voz (modificações em destaque). Nessa versão, o
        vídeo é reiniciado apenas quando o segundo usuário falar "repita
        vídeo".</p>

        <div id='htmlIntro5CodeB'></div>
        </div>
      `
    }
  ]
})

_data.htmlIntro5CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[7,8]"> <![CDATA[
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

_data.htmlIntro5CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[16,25,33,35]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
  <head><script src="synchronism.js"><&#47script></head>
  <body>
    <video id="midia_principal" src="video.mp4"
      style="position: absolute; height 100%; width: 100%;">
      <area id="credits" begin="300s" end="360s"><&#47area>
    </video>
    <object id="sinte_voz" src="sinte_voz.ssml">
      <area label="pergunta"><&#47area>
    </object>
    <object id="rec_voz" src="rec_voz.srgs">
      <area label="repete"><&#47area>
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

      var sync1 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "body")
      sync.bind("start", "midia_principal")

      var sync2 = new Synchronism("onBeginStart")
      sync.bind("onBegin", "midia_principal", "credits")
      sync.bind("start", "sinte_voz")

      var sync3 = new Synchronism("onRecognizeStopStart")
      sync.bind("onRecognize", "rec_voz", "repete", gu_leap_microphone, 2)
      sync.bind("stop", "midia_principal")
      sync.bind("start", "midia_principal")
    <&#47script>
  </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - user - task
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push(
  {
    type: 'comment',
    name: 'htmlTask4Question',
    rows: '47',
    title: ` Tarefa 4: Agora pedimos que edite novamente o trecho de código
        HTML da Tarefa 2 (copiado a seguir) para que apenas o segundo usuário,
        de um grupo de 3 usuários com microfone, possa realizar a interação por
        voz.`
  }
)

// ----------------------------------------
// html feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'htmlFeedback',
  // visibleIf: '{profileNCL1} > {profileHTML1}',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Por favor, opine sobre os pontos a seguir. Eles visam capturar
        evidências de como os conceitos apresentados na seção anterior
        (<em>Mídia, Reconhecedor, Sincronismo</em> e <em>Grupo de Usuários</em>)
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
      title: `Estamos dispostos a ouvir sugestões para melhorar os conceitos ou nossa instaciação. Se tiver sugestões, por favor comente.`
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
