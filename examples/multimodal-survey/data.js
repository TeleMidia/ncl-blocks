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
        <p>O TeleMídia é um grupo de pesquisa do Departamento de Informática
        da PUC-Rio. O TeleMídia desenvolve pesquisas nas áreas de Sistemas 
        Multimídia e Redes de Computadores. Em particular, Sistemas de TV 
        Digital terrestre e IPTV, têm sido foco de pesquisa e inovação do 
        laboratório nos últimos anos.</p>
        
        <p>Convidamos a você a participar de uma estudo sobre nossa pesquisa
        sobre <i>Interações multimodais em linguagens
        multimídia</i>.</p>
        
        <p><strong>Ressaltamos que este estudo NÃO se destina a avaliar
        você, mas sim capturar evidências para nossa
        pesquisa.</strong></p>
        
        <p>Para prosseguirmos, pedimos seu consentimento para realizarmos
        este estudo e informamos que:</p> 
        <ul> 
        <li>Os dados coletados destinam-se estritamente a atividades de
        pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia
        têm acesso à íntegra do material resultante do estudo .</li> 
        <li>A divulgação dos resultados de nossa pesquisa em foros
        científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o
        anonimato dos participantes é preservado em qualquer material
        publicado.</li> 
        </ul>
        </div>

      `
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Caso esteja de acordo, prossiga.</p>

        OBS: Este estudo é feito em uma única página web. Caso deseje
        navegar entre as seções do estudo, <strong>NÃO</strong> utilize
        os botões de navegação do seu browser, e sim use os botôes
        <em>voltar</em> e <em>prosseguir</em> no final de cada seção do
        estudo.      
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
    {
      type: 'text',
      isRequired: true,
      name: 'email',
      title: 'Qual seu e-mail de contato?',
      validators: [{ type: 'email' }]
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'formation',
      title: 'Qual sua formação (e.g. computação, design, pós-graduação informática)?',
      choices: ['graduação em computação', 'graduação em design', 'pós-graduação em computação', 'pós-graduação em design'],
      hasOther: true,
      otherText: 'outra graduação ou outra pós-graduação'
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'sintax',
      title: `Quantas aplicações multimídia interativas você desenvolveu (independente de tecnologia ou linguagem de programação)?`,
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion1',
      title: 'Qual seu conhecimento no desenvolvimento em NCL?',
      choices: [
        { value: 0, text: 'nenhum' }, { value: 1, text: 'muito pouco' },
        { value: 2, text: 'pouco' }, { value: 3, text: 'razoável' },
        { value: 4, text: 'alto' }, { value: 5, text: 'muito alto' },
        { value: 6, text: 'expert' }]
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion2',
      title: 'Quantas aplicações NCL você desenvolveu?',
      visibleIf: '{profileQuestion1} > 0',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'sintax',
      title: `De que maneira a sintaxe da NCL influencia o
       desenvolvimento de aplicações?`,
      choices: ['atrapalha muito', 'atrapalha bastante', 'atrapalha pouco',
        'indiferente', 'ajuda pouco', 'ajuda bastante', 'ajuda muito']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion3',
      title: 'Qual seu conhecimento no desenvolvimento em HTML/JavaScript?',
      choices: [
        { value: 0, text: 'nenhum' }, { value: 1, text: 'muito pouco' },
        { value: 2, text: 'pouco' }, { value: 3, text: 'razoável' },
        { value: 4, text: 'alto' }, { value: 5, text: 'muito alto' },
        { value: 6, text: 'expert' }]
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion4',
      title: 'Quantas aplicações HTML/JavaScript você desenvolveu?',
      visibleIf: '{profileQuestion3} > 0',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'sintax',
      title: `O quanto o desenvolvimento em HTML/JavaScript requer 
      o uso de bibliotecas de manipulação de DOM, como jQuery ou Prototype?`,
      choices: ['nunca', 'quase nunca',
        'indiferente', 'quase sempre ', 'sempre']
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
        <p>O objetivo desta seção do estudo é oferecer uma introdução sobre o 
        conceito de <strong>linguagens multimídia com interações 
        multimodais</strong>, proposto em nossa pesquisa.</p>
        </div>
      `
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Primeiro devemos introduzir o que é uma linguagem multimídia, que é 
        intimamente relacionada a documento multimídia.</p>
        <br>

        <p>Steinmetz [1] caracteriza um <strong>sistema multimídia</strong> 
        como aquele que utiliza um conjunto de mídias, que ao menos uma mídia 
        seja discreta e uma seja contínua. As <strong>mídias discretas</strong> 
        são aquelas que não mudam durante sua exibição, como imagens e textos. 
        Elas também são chamadas de mídias independentes de tempo. Já as 
        <strong>mídias contínuas</strong> são aquelas que mudam durante sua 
        exibição, como áudios e vídeos. Elas também são chamadas de mídias 
        dependentes de tempo.</p>
        <br>

        <p>Um <strong>documento multimídia</strong>, também segundo Steinmentz, 
        é aquele que define como um sistema multimídia deve exibir um conjunto 
        de mídias (discretas e contínuas) na forma de uma apresentação 
        multimídia. O criador de um documento multimídia é usualmente chamado 
        de autor.</p>
        <br>

        <p>A figura a seguir ilustra a criação e apresentação de um documento 
        multimídia.</p>
        <p>Na <strong>criação do documento multimídia</strong>, o autor define 
        as mídias utilizadas e o sincronismo entre elas.</p>
        <p>O sincronismo define o comportamento da exibição das mídias no 
        decorrer do tempo da apresentação. Ele é geralmente baseado em momentos 
        de apresentação de <strong>trechos de mídia</strong> contínua. 
        Considere, por exemplo, que a parte de créditos de vídeo inicie no 
        segundo 600. Um sincronismo pode ser definido para que ao iniciar o 
        trecho dos créditos (o vídeo alcance o segundo 600), uma imagen de 
        patrocínio seja exibida.</p>

        <p>Na <strong>apresentação do documento multimídia</strong>, um sistema
        multimídia recebe o documento multimídia e os arquivos de mídia
        necessários para  realizar o sincronismo definido pelo autor. Na figura,
        por exemplo, uma imagem e um áudio são apresentados em determinado
        trecho da apresentação de um vídeo. Por fim, o sistema utiliza
        <strong>dispositivos audiovisuais</strong> para apresentar conteúdos das
        mídias (som e frames) e <strong>dispositivos apontador e de
        tecla</strong> para capturar interações de usuário.</p>

        <div class='text-center'>
          <img class='center-block img-thumbnail' style='height: 500px' 
            src='assets/overview1.svg'>
        </div>
        <br>

        <p>A <strong>linguagem multimídia</strong> é na verdade o formato que 
        permite a um autor definir um documento multimídia. Ela define uma 
        sintaxe e elementos de linguagem. Exemplos atuais de linguagens 
        multimídia são a NCL (Nested Context Language) [2] e a HTML [3].</p>
        <br>

        [1] <a 
        href='https://www.pearson.com/us/higher-education/product/Steinmetz-Multimedia-Computing-Communications-and-Applications/9780133244359.html'> 
        Steinmetz, R. and Nahrstedt, K. 1995. Multimedia: Computing, 
        Communications and Applications. Prentice Hall.</a><br>
        [2] <a href='#'>https://www.itu.int/rec/T-REC-H.761</a><br>
        [3] <a href='#'>https://www.w3.org/TR/html5</a><br>
        </div>
      `
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, devemos introduzir o conceito de <strong>linguagens 
        multimídia com interações multimodais</strong>, que está intimamente 
        relacionado com interfaces multimodais.</p>
        <br>

        <p>Oviatt [4] define que <strong>interfaces multimodais</strong> como 
        aquelas que reconhecem  interações em formas mais naturais da 
        linguagem e comportamento humano, como fala e gestos. Esse tipo de 
        interface foi apoiada pelos recentes avanços em tecnologias de 
        reconhecimento e <strong>dispositivos de interação multimodal</strong>. 
        Ilustrados a seguir, citamos o uso de microfones para reconhecimento de 
        voz, e dispositivos como LeapMotion e e Microsoft Kinect para 
        reconhecimento de gestos de mão e corpo, respectivamente.</p>
        <br>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 180px'
          src='assets/voice.jpg'> 
          <img class='img-thumbnail' style='height:
          180px' src='assets/leap.jpg'> 
          <img class='img-thumbnail'
          style='height: 180px' src='assets/kinect.jpg'>
        </div>

        <br>

        <p>Modificamos a primeira figura para ilustrar a criação e apresentação
        de um documento multimídia com suporte a interações multimodais. Nessa
        nova figura, o autor define não apenas mídias e sincronismo, como também
        o reconhecimento de interações multimodais.</p>
        
        <p>Para definir reconhecimentos, o autor utiliza de descrições
        auxiliares para reconhecer determinada interação. Essas descrições têm
        sintaxe própria que define características de interação. Por exemplo,
        uma descrição pode ser em SRGS (Speech Recognition Grammar
        Specification) [5] para definir
        o reconhecimento de comandos de voz.</p>

        <p>Na apresentação, esse sistema multimídia recebe o documento
        multimídia, arquivos de mídia e descrições multimodais necessários para
        realizar o sincronismo e reconhecimentos definidos pelo autor. Esse
        sistema utiliza dispositivos de interação multimodal para
        reconhecimento, além de dispositivos audiovisuais.</p>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 500px' 
          src='assets/overview2.svg'>
        </div>
        <br>

        <p>Por fim, uma <strong>linguagem multimídia com interações
        multimodais</strong> é aquele formato que permite definir um documento
        multimídia que não apenas sincroniza mídias, mas também reconhece
        interações multimodais.</p>

        <p>Para finalizar essa seção, podemos afirmar que uma <strong>linguagem
        multimídia é "output oriented"</strong>, pois tem foco na sincronia de
        conteúdos de mídia para apresentação, como imagens, vídeo e áudios.
        Entretanto, uma <strong>linguagem multimídia com interações multimodais
        é "output and input oriented"</strong>, pois tem foco na sincronia tanto
        de mídias, quanto de  reconhecimentos de interações como voz e
        gestos.</p>

        [4] <a href='http://dx.doi.org/10.1201/9781410615862.ch21'>
        Oviatt, S. 2007. Multimodal Interfaces. Human-Computer Interaction 
        Handbook. CRC Press, 413–432</a><br>
        [5] <a href='#'>https://www.w3.org/TR/speech-grammar<a>
        </div>
      `
    },
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Esperamos que esta introdução tenha sido útil no seu entendimento
        acerca de linguagens multimídia com interações multimodais. Favor
        prossiga.</p>
        </div>
      `
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
// concepts page - intro section
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Proposta de conceitos',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>As linguagens multimídia atuais não suportam adequadamente interações
        multimodais. Elas podem ser consideradas "output-oriented" pois focam em
        conteúdos para apresentação, como imagens, vídeo e áudios.</p>
        
        <p>Em nossa pesquisa propomos que conceitos a serem
        necessários para linguagem multimídia com interações multimodais. Mais
        precisamente esses conceitos são os de <em>Mídia, Reconhecedor,
        Sincronismo</em> e <em>Grupo de Usuários</em>.</p>
        
        <p>Esta seção tem o objetivo de detalhar esses conceitos para o
        participante e capturar evidências de nossa pesquisa. Para evitar
        possíveis dificuldades dada a sintaxe de linguagens, apresentaremos
        esses conceitos utilizando uma abordagem de <strong>desenvolvimento de
        aplicações através de blocos</strong>.</p>
        
        <p>Esse tipo de abordagem é bastante utilizado para o ensino de
        programação ou para ferramentas de geração de código. Em especial,
        esse tipo de desenvolvimento foi popularizado por ferramentas como o
        <strong>MIT Scratch</strong>[4] e <strong>MIT App
        Inventor</strong>[5]. O primeiro é utilizado para criar aplicações
        web, especialmente jogos, e o segundo utilizado para criar
        aplicações móveis. Ambos são ilustrados a seguir.</p>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 270px' 
          src='assets/scratch.jpg'>
          <span style="margin-left:10px"></span>
          <img class='img-thumbnail' style='height: 270px' 
          src='assets/appinventor.jpg'>
        </div>
        <br>

        [4] <a href='#'>scratch.mit.edu</a><br>
        [5] <a href='#'>appinventor.mit.edu</a><br>
        </div>
      `
    },
    {
      type: 'html',
      name: 'conceptsIntro1',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Primeiro, vamos detalhar o elemento <em>Mídia</em>.</p>
        
        <p>O elemento <em>Mídia</em> é definido por um identificador e por
        seu conteúdo. O conteúdo de uma <em>Mídia</em> tem porções
        identificáveis como trechos de um vídeo ou áudio. Por exemplo, os
        blocos a seguir definem duas mídias com identificadores
        <em>midia_principal</em> e <em>icone</em>, mas elas não possuem
        conteúdo. Por não terem conteúdo, ações de iniciar sobre as mídias
        acima não apresentaram resultados.</p>
        </div>
        
        <div id='conceptsIntro1a'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>Os blocos a seguir definem as mesmas mídias, mas com conteúdos de
        áudio e imagem, respectivamente. Em especial, a mídia de
        <em>midia_principal</em> tem definido um trecho chamado de
        <em>creditos</em> que inicia aos 300 e termina aos 360 segundos.</p>
        </div>
        
        <div id='conceptsIntro1b'></div></p>
      `
    },
    {
      type: 'html',
      name: 'conceptsIntro2',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p></p>Em em seguida, vamos detalhar o elemento
        <em>Sincronismo</em>.</p>

        <p>O elemento de <em>Sincronismo</em> permite definir o
        comportamento das aplicações. O uso de elementos de
        <em>Sincronismo</em> sobre elementos de <em>Mídia</em> define quando
        as mídias devem ser apresentadas. O <em>Sincronismo</em> é baseado
        em causalidade, ou seja, quando uma condição é satisfeita, ações são
        realizadas. Exemplos de condições são início ou fim de uma mídia ou
        trecho de mídia, ou a seleção de usuário sobre uma mídia. Exemplos
        de ações são iniciar ou parar uma mídia.</p>

        <p>Os blocos a seguir definem a mídia <em>midia_principal</em> e um 
        sincronismo que inicia a mídia com a aplicação. Nesse exemplo, 
        entretanto, alteramos o conteúdo da <em>midia_principal</em> para 
        um conteúdo de vídeo. É importante ressaltar que mudanças no 
        conteúdo de <em>midia_principal</em> não afetam o comportamento da 
        aplicação, desde que a mídia defina o mesmos trechos, pois os 
        <em>Sincronismo</em>s são definidos independe do conteúdo.</p>

        </div>

        <div id='conceptsIntro2a'></div><p><br>

        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso do elemento de <em>Sincronismo</em>, os
        blocos a seguir definem uma aplicação que apresenta um vídeo, que um
        ícone durante os créditos. Ao selecionar o ícone, o vídeo é
        reiniciado.</p> 
        
        <p>Mais precisamente, os blocos definem novamente
        <em>midia_principal</em> e um <em>Sincronismo<em> do bloco anterior,
        mas adicionam a mídia <em>icone</em> e mais dois
        <em>Sincronismo</em>s. O primeiro <em>Sincronismo</em> adicionado
        define que quando a <em>midia_principal</em> alcançar o seu trecho
        de <em>credito</em> a mídia <em>icone_repetir</em> deve ser
        iniciada. O segundo <em>Sincronismo</em> adicionado define que
        quando a mídia <em>icone_repetir</em> for selecionada, a
        <em>midia_principal</em> deve ser reiniciada (terminada e
        inciada)</p>
        </div>

        <div id='conceptsIntro2b'></div>
        <br>
      `
    },
    {
      type: 'html',
      name: 'conceptsIntro3',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, detalhamos a seguir o elemento <em>Reconhecedor</em>.</p>

        <p> O <em>Reconhecedor</em> também é definido por um identificador e
        por seu conteúdo. Entretanto, diferente de <em>Mídia</em>, o
        conteúdo de um <em>Reconhecedor</em> deve ser uma descrição de
        reconhecimento. Exemplos dessas são descrições que definem
        comandos de voz ou gestos de mão. Logo, porções de um
        <em>Reconhecedor</em> são porções de uma descrição de
        reconhecimento.</p>

        <p>Os blocos a seguir definem os reconhecedores <em>rec_voz</em> e
        <em>rec_gestos</em>. O <em>rec_voz</em> tem um reconhecimento de
        voz como conteúdo. Essa descrição tem o trecho <em>repetir</em> que
        reconhece o comando de voz "repita vídeo". O <rec_gestos> tem uma
        descrição de reconhecimento de gestos como conteúdo. Esse conteúdo
        utiliza dois trechos, esquerda e direita, para definir gestos de mão
        nessas direções.</p> 
        </div>
        
        <div id='conceptsIntro3a'></div><br> 
        
        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso de um <em>Reconhecedor</em>, os blocos a
        seguir são uma nova versão da aplicação que reinicia um vídeo dada
        uma interação. Mas nessa versão, ao invés de clicar, o vídeo é
        reiniciado ao usuário falar "repita vídeo".</p>
        
        <p>Mais precisamente, os blocos definem uma <em>Mídia</em>
        (<em>midia_principal</em>), um <em>Reconhecedor</em>
        (<em>rec_voz</em>) e três <em>Sincronismo</em>s. O primeiro
        <em>Sincronismo</em> define que <em>midia_principal</em> é iniciada
        com a aplicação. O segundo <em>Sincronismo</em> define que quando a
        <em>midia_principal</em> alcançar o seu trecho de <em>creditos</em>,
        o <em>Reconhecedor</em> <em>rec_voz</em> deve ser iniciado. O
        último <em>Sincronismo</em> define que quando o trecho
        <em>repetir</em> for reconhecido a <em>midia_principal</em> deve ser
        reiniciada (terminada e inciada).</p>
        </div>
        
        <div id='conceptsIntro3b'></div><br>
      `
    },
    {
      type: 'html',
      name: 'conceptsIntro4',
      html: `
        <div style="text-align: justify; width: 70%;">

        <p>Por fim, vamos detalhar o elemento <em>Grupo de
        usuários</em>.</p>

        <p> O elemento <em>Grupo de Usuários</em> é definido por um
        identificador, pelo número de membros que podem participar do grupo
        e pelos dispositivos que um usuário necessita possuir para
        participar do grupo.</p>
        
        <p>Os blocos a seguir definem um grupo de usuário <em>gu_gestos</em>
        que pode ter até 3 membros, cada um com seu reconhecedor de gestos
        (e.g. LeapMotion).</p>
        </div>

        <div id='conceptsIntro4a'></div><br>

        <div style="text-align: justify; width: 70%;">

        <p>Para ilustrar o uso de um <em>Grupo de Usuários</em>, os blocos a
        seguir são uma nova versão da aplicação que reinicia um vídeo dado]a
        uma interação. Mas nessa versão, o vídeo é reiniciado apenas quando
        o segundo usuário falar "repita vídeo".</p>

        <p>Mais precisamente, os blocos definem uma <em>Mídia</em>
        (<em>midia_principal</em>), um <em>Reconhecedor</em>
        (<em>rec_voz</em>), um <em>Grupo de Usuário</em> (<em>gu_voz</em>) e
        três <em>Sincronismo</em>s. O primeiro <em>Sincronismo</em> define
        que <em>midia_principal</em> é iniciada com a aplicação. O segundo
        <em>Sincronismo</em> define que quando a <em>midia_principal</em>
        alcançar o seu trecho de <em>creditos</em>, o <em>Reconhecedor</em>
        <em>rec_voz</em> deve ser iniciado. O último <em>Sincronismo</em>
        define que quando o trecho <em>repetir</em> for reconhecido a
        <em>midia_principal</em> deve ser reiniciada (terminada e
        iniciada).</p>
        </div>
        
        <div id='conceptsIntro4b'></div><br>
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

_data.conceptsIntro2BlocksA = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">midia_principal</field>
      <value name="src">
        <block type="video" id="OFge%WW-~~.%rZKqZqym">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0"></field>
        </block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="170">
      <field name="id">midia_principal</field>
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
          <field name="end0"></field>
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
        <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
          <field name="id">creditos</field>
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
          <field name="end0"></field>
        </block>
      </value>
    </block>
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="594" y="20">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1">
          </mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="180">
      <field name="id">midia_principal</field>
    </block>
     <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="20" y="300">
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
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="594" y="270">
      <value name="conditions">
        <block type="onrecognize" id="(H8dBhXk6.y#]q%\`UM^D">
          <field name="id">repetir</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="UEqL{b=Ws2G#w}+xMV%m">
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
          <field name="end0"></field>
        </block>
      </value>
    </block>
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="594" y="20">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repita vídeo</field>
        </block>
      </value>
    </block>
    <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="230">
      <field name="id">midia_principal</field>
    </block>
    <block type="user" id="IPnvWeecZqr2WM|RGxm|" x="594" y="200">
      <mutation length="1"></mutation>
      <field name="id">gu_voz</field>
      <value name="element_0">
        <block type="headset" id="yU[{24F}.5IJtyI;VB5k"></block>
      </value>
    </block>
    <block type="link" id="%6ew%0di,O*v%qS%d\`(\`" x="20" y="370">
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
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="594" y="350">
      <value name="conditions">
        <block type="onrecognizeuser" id="y/zz?q?8ebd@?9llBV[0">
          <field name="id">repetir</field>
          <field name="user_id">gu_gestos.2</field>
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
// concepts page - questions section
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Aplicação dos conceitos',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, pedimos que você realize as quatro tarefas a seguir. Duas
        tarefas consistem em interpretar aplicações e duas em modificar.</p>

        </p><strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar
        seus conhecimentos, mas sim capturar evidências de nossa
        pesquisa.</strong>.</p>
        <div>
      `
    },
    {
      type: 'html',
      name: 'conceptsTask1',
      html: `
        <p>Tarefa 1: Por favor, analise com cuidado os blocos a seguir.</p>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'conceptsTask1Question',
      title: `Qual é o comportamento da aplicação que corresponde os blocos
      acima:
      `
    },
    {
      type: 'html',
      name: 'conceptsTask2',
      html: `
        <p>Tarefa 2: Os blocos a seguir são uma versão modificada
        da Tarefa 1.</p>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'conceptsTask2Question',
      title: `
        Qual foi a mudança no comportamento da aplicação da Tarefa 1 para
        Tarefa 2?
      `
    },
    {
      type: 'html',
      name: 'conceptsTask3',
      html: `
        Tarefa 3: Agora, pedimos que edite os blcoos da Tarefa 2 (copiado a
        seguir) para que utilize uma interação por gestos ao invés de uma
        interação por comandos de voz. 
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
    },
    {
      type: 'html',
      name: 'conceptsTask4',
      html: `
        Tarefa 4: Agora, pedimos que edite os blocos da Tarefa 2 (copiado
        a seguir) para que apenas o segundo usuário, de um grupo de 3
        usuários com microphone, possa realizar a interação por voz.
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

_data.blocksTask1Xml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20">
      <field name="id">video_principal</field>
      <value name="src">
        <block type="video" id="CG[^N,5)TV)0_N#+|cgE">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0"></field>
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
      <field name="id">img_centro</field>
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
      <field name="id">img_praia</field>
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
          <field name="id">img_centro</field>
          <next>
            <block type="start" id=".Pt;)N?Y.:xGz;dDp@+W">
              <field name="id">img_praia</field>
            </block>
          </next>
        </block>
      </statement>
    </block>
    <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="590">
      <value name="conditions">
        <block type="onselection" id="voo~B}yCX+XML3~iOm0r">
          <field name="id">img_centro</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
          <field name="id">video_principal</field>
          <next>
            <block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?">
              <field name="id">img_centro</field>
              <next>
                <block type="stop" id="xz194KXLw:HdJABl^)[9">
                  <field name="id">img_praia</field>
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
          <field name="id">img_praia</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
          <field name="id">video_principal</field>
          <next>
            <block type="stop" id="=6LVnQ^v7.gTbQiBB2rM">
              <field name="id">img_centro</field>
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

_data.blocksTask2Xml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20">
    <field name="id">video_principal</field>
    <value name="src">
      <block type="video" id="CG[^N,5)TV)0_N#+|cgE">
        <mutation length="1">
        </mutation>
        <field name="id_area0">creditos</field>
        <field name="begin0">300s</field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="media" id="J0=3=8AB$lViiF[SYu#!" x="20" y="160">
    <field name="id">video_centro</field>
    <value name="src">
      <block type="video" id="]70x,I^+Yv!UsVCeeY()">
        <mutation length="1">
        </mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="550" y="208">
    <field name="id">img_centro</field>
    <value name="src">
      <block type="image" id="n8jL;6KJe-2c6B~=pPj(">
      </block>
    </value>
  </block>
  <block type="media" id="IawJU?Sm-z4If\`ixT^_p" x="20" y="301">
    <field name="id">video_praia</field>
    <value name="src">
      <block type="video" id="S$1N4E3U+*W_\`=95FUu)">
        <mutation length="1">
        </mutation>
        <field name="id_area0"></field>
        <field name="begin0"></field>
        <field name="end0"></field>
      </block>
    </value>
  </block>
  <block type="media" id="K2a)Xd1Ob5$8Ju=7i:DR" x="550" y="353">
    <field name="id">img_praia</field>
    <value name="src">
      <block type="image" id="fQF^b?g4I,]ah26x]In~">
      </block>
    </value>
  </block>
  <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="446">
    <field name="id">rec_voz</field>
    <value name="src">
      <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
        <mutation length="2">
        </mutation>
        <field name="id_area0">voz_centro</field>
        <field name="label0">mostre centro</field>
        <field name="id_area1">voz_praia</field>
        <field name="label1">mostre praia</field>
      </block>
    </value>
  </block>
  <block type="port" id="+ p - MtE:D * clWz(7oX7Hg" x="20" y="622">
    <field name="id">video_principal</field>
  </block>
  <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="550" y="627">
    <value name="conditions">
      <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
        <field name="id">creditos</field>
      </block>
    </value>
    <statement name="actions">
      <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
        <field name="id">img_centro</field>
        <next>
          <block type="start" id=".Pt;)N?Y.:xGz;dDp@+W">
            <field name="id">img_praia</field>
            <next>
              <block type="start" id="q$s76Wl6nUee_vRx9F(3">
                <field name="id">rec_voz</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="795">
    <value name="conditions">
      <block type="onrecognize" id="IokIu//km+7L0Y@Nioi[">
        <field name="id">voz_centro</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?">
            <field name="id">img_centro</field>
            <next>
              <block type="stop" id="xz194KXLw:HdJABl^)[9">
                <field name="id">img_praia</field>
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
  <block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="549" y="805">
    <value name="conditions">
      <block type="onrecognize" id="[SfTF*!(*0N7]Hv9.tNh">
        <field name="id">voz_praia</field>
      </block>
    </value>
    <statement name="actions">
      <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
        <field name="id">video_principal</field>
        <next>
          <block type="stop" id="=6LVnQ^v7.gTbQiBB2rM">
            <field name="id">img_centro</field>
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
// concepts feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'conceptsFeedback',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Para capturar evidências de nossa pesquisa, por favor, opine sobre os
        pontos a seguir.</p>
        </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion1',
      title: `Os conceitos apresentados **permitem realizar mais
            rapidamente** o desenvolvimento de aplicações multimodais frente a
            conceitos existentes em linguagens multimídia atuais como NCL e
            HTML`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion2',
      title: `Os conceitos apresentados **permitem aumentar a qualidade** 
            do desenvolvimento de aplicações multimodais frente a conceitos
            existentes em linguagens multimídia atuais como NCL e HTML`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion3',
      title: `De modo geral, os conceitos apresentados **são úteis** para o 
            desenvolvimento de aplicações multimodais frente a conceitos
            existentes em linguagens multimídia atuais como NCL e HTML.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion4',
      title: 'Os conceitos apresentados **são fáceis**.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion5',
      title: 'Os conceitos apresentados **são claros e entendíveis**?',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'conceptsFeedbackQuestion6',
      title: `De modo geral, os conceitos apresentados **são fáceis** de 
            utilizar.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'comment',
      rows: '9',
      title: 'Se desejar, você fale sobre que **tipos de aplicações** você gostaria de desenvolver com conceitos apresentados neste estudo.'
    }
  ]
})

// ----------------------------------------
// ncl page
// ----------------------------------------

pageIndex = _data.surveyJSON.pages.push({
  name: 'ncl',
  // visibleIf: '{profileQuestion1} >= {profileQuestion3}',
  elements: []
}) - 1

// ----------------------------------------
// ncl page - intro
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Proposta de conceitos multimodais em NCL',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>A linguagem NCL é utilizada para criar conteúdo multimídia
        interativo em sistemas de TV ( terrestre, IPTV e BroadBand). Em
        particular, sua versão atual (NCL 3.1) oferece os elementos
        <em>&ltmedia></em> e <em>&ltlink></em>. O elemento <em>&ltmedia></em>
        permite apresentar conteúdo audiovisual como imagens, vídeo e áudios. Já
        o elemento <em>&ltlink></em> permite criar sincronismos entre mídias e
        sincronismos baseados em interações de usuário por apontador e
        tecla.</p>
      
        <p>Esta seção não tem o objetivo de ensinar a linguagem NCL. Mas sim
        tem o objetivo de apresentar como os conceitos de apresentados podem ser
        instanciados na linguagem NCL. A tabela seguir apresenta quais conceitos
        propostos em nossa pesquisa estão presentes na NCL e como deve ser a
        instanciação dos ausentes.</p>

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
            <td>adcionar elemento <em>&ltinput></em></td>
          </tr>
          <tr>
            <td><em>Grupo de Usuários</em></td>
            <td>não presente</td></td>
            <td>adcionar elemento <em>&ltuserClass></em></td>
          </tr>
        </table><br>
        </div>
      `
    },
    {
      name: 'nclIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        
        <p>Primeiro, vamos detalhar o conceito de <em>Mídia</em> em NCL que é
        já implementado pelo elemento <em>&ltmedia></em>.</p>
        
        </p> O elemento  <em>&ltmedia></em> possui um identificador, conteúdo e
        propriedades. O conteúdo consiste em um arquivo de mídia, como imagem,
        video, audio, entre outros. O conteúdo de uma <em>&ltmedia></em> tem
        porções identificáveis, chamadas de âncora. Dentre outros tipos, as
        âncoras temporais definem porções da apresentação da mídia elemento
        <em>&ltarea></em>. O código a seguir ilustra duas mídias, uma imagem e
        um video. O video possui uma um ancora chamada de creditos que inicia
        aos 300 e termina aos 360 segundos.</p>
        
        <div id='nclIntro1CodeA'></div><br>
        </div>
      `
    },
    {
      name: 'nclIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        
        <p>Agora, vamos detalhar o conceito de <em>Sincronismo</em> em NCL que é
        já implementado pelo elementos <em>&ltport></em> e
        <em>&ltlink></em>.</p>
        
        <p> O elemento <em>&ltport></em> indica qual <em>&ltmedia></em> deve ser
        iniciada com a aplicação. No código a seguir, <em>&ltport></em> define
        que o elemento <em>midia_principal</em> incia com a aplicação.</p>
        
        <p>O elemento <em>&ltlink></em> indica relacionamentos através de
        <em>&ltmedia></em> através des elementos <em>&ltbind></em>. O código a
        seguir define dois <em>&ltlink></em>. O primeiro defini que quando o
        <em>video_principal</em> alcançar o seu trecho de créditos a imagem
        <em>img_repetir</em> é iniciada. O segundo que quando essa
        <em>img_reptetir</em> é selecionado <em>video_principal</em> é
        reiniciado (<em>stop</em> e <em>start</em>).</p>

        <div id='nclIntro2CodeA'></div><br>

        </div>
      `
    },
    {
      name: 'nclIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, vamos detalhar o conceito de <em>Reconhecedor</em> em NCL.
        Para implementar esse <em>Reconhecedor</em> propomos o elemento de
        <em>&ltinput></em>.</p>

        <p>O trecho de código a seguir apresenta o arquivo
        <em>rec_voz.srgs</em>. Esse arquivo é uma descrição de reconhecimento de
        voz no formato SRGS. Em particular, ele define uma porção chamada
        <em>repete</em> que define o reconhecimento de voz "repita vídeo".</p >
        
        <div id='nclIntro3CodeA'></div><br>

        <p>O trecho de código a seguir apresenta o arquivo
        <em>rec_gestos.gml</em>. Esse arquivo é uma descrição de reconhecimento
        de voz no formato GML. Em particular, ele define duas porções chamadas
        <em>swipe_esquerda</em> e  <em>swipe_direita</em>que definem acenos de
        mão para esquerda e para direita, respectivamente</p>

        <div id='nclIntro3CodeB'></div><br>

        <p>Para ilustrar o uso de um <em>Reconhecedor</em> em NCL, o código
        a seguir são uma nova versão da aplicação que reinicia um vídeo dado uma
        interação. Mas nessa versão, ao invés de clicar, o vídeo é reiniciado ao
        usuário falar "repita vídeo".</p> <p>Mais precisamente, a aplicação
        utiliza um elemento <em>&ltmedia></em> mídias, um elemento de
        <em>&ltinput></em>, um <em><port></em> e dois
        <em>&ltlink></em>s.</p>
        
        <p>O elemento de <em>&ltmedia></em> chamado de
        <em>video_principal</em> (linhas 17-19) que define um trecho chamado
        creditos que inicia aos 300s. O elemento <em>&ltinput></em>, chamado de
        <em>rec</em>é definido utilizando utilizando o arquivo SRGS
        <em>rec_voz.srgs</em> (linhas 20-22). O elemento <em>&ltport></em>
        (linha 16) define que o <em>video_principal</em> é iniciado com
        aplicação. O primeiro <em>&ltlink></em> (linhas 23-26) define que quando
        o <em>video_principal</em> alcançar a sua porção de creditos (300s) o
        reconhecedor <em>rec</em> inicia seu reconhecimento. O segundo
        <em>&ltlink></em>(linhas 27-30) define que o <em>video_principal</em>
        deve ser reiniciado (stop e start) quando for reconhecido o trecho
        <em>repete</em></p>

        <div id='nclIntro3CodeC'></div><br>

        </div>
      `
    },
    {
      name: 'nclIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, vamos detalhar o elemento <em>Grupo de Usuários</em> em NCL.
        Para implementar esse conceito propomos o elemento
        <em>&ltuserClass></em>.</p>

       <p> Um importante parte da definição de um <em>&ltuserClass></em> é como
       são descritos as caracterisicas que ususários devem ter par aparticipar
       da classe, por exemplos quais dispositivos devem possuir. Para essa
       descrição propomos um descrição  no formato SPARQL. O trecho de código a
       seguir apresenta o arquivo de descrição de ususários
       <em>gu_leap_microphone.sparql</em>. Essa descrição define que cada
       usuário do grupo deve ter um headset e um leapmotion.</p >
        
        <div id='nclIntro4CodeA'></div><br>

       <p> O elemento  <em>&ltuserClass></em> é definido dentro do
       <em>&lthead></em> de uma aplicação NCL. Ele é definido por um
       identificador, número maximo de ususário e pelo seu arquivo de descrição
       de usuários.</p>

      <p>Para ilustrar o uso de um <em>Grupo de Usuários</em> em NCL, o código
      a seguir é uma nova versão da aplicação que reinicia um vídeo dado uma
      interação (modificações em destaque). Mas nessa versão, ao invés de
      clicar, o vídeo é reiniciado ao segundo usuário do usuário falar "repita
      vídeo".</p>

      <div id='nclIntro4CodeB'></div><br>
      
      </div>
      `
    }
  ]
})

_data.nclIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <media id="img_repetir" src="img_repetir.png">
    <property name="width" value="20%" />
    <property name="hight" value="20%" />
    <property name="zindex" value="1" />
  </media>
  <media id="video_principal" src="video.mp4">
    <property name="width" value="100%" />
    <property name="hight" value="100%" />
    <area label="credits" begin="300s" end="360s" />
  </media>
  ]]></script>
`
_data.nclIntro2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[16,21,26,30]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <causalConnector id="onSelectionStopStart">
          <simpleCondition role="onSelection" max="unbounded"/>
          <compoundAction>
            <simpleAction role="stop" max="unbounded"/>
            <simpleAction role="start" max="unbounded"/>
          </compoundAction>
        </causalConnector>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
        <area label="credits" begin="300s" end="360s" />
      </media>
      <media id="img_repetir" src="img_repetir.png">
        <property name="width" value="20%" />
        <property name="hight" value="20%" />
        <property name="zindex" value="1" />
      </media>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"/>
        <bind role="start" component="rec"/>
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="img_repetir"/>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
      </link>
    </body>
  </ncl>
  ]]></script>
`
_data.nclIntro3CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [2]"> <![CDATA[
  <grammar xmlns="http://www.w3.org/2001/06/grammar">
    <rule id="repete">repita vídeo</rule>
  </grammar>
  ]]></script>
`
_data.nclIntro3CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [3,21]"> <![CDATA[
  <?xml version="1.0" encoding="UTF-8"?>
  <GestureMarkupLanguage>
    <Gesture id="swipe_esquerda" type="swipe">
      <match><action><initial>
        <event touch_event="touchEnd"/>
        <cluster point_number_min="1" point_number_max="5" 
          acceleration_max="0.5"/>
      </initial></action></match>
      <analysis><algorithm class="kinemetric" type="discrete">
          <library module="swipe" />
          <variables><property id="dx" result="dx"/>
          </variables>
          <delta_filter><property ref="dx" active="true" delta_max="-0.01"/>
          </delta_filter>
        </algorithm></analysis>
      <mapping><update dispatch_type="discrete" dispatch_mode="cluster_remove" 
        dispatch_reset="cluster_remove">
        <gesture_event type="custom"></gesture_event>
      </update></mapping>
    </Gesture>
    <Gesture id="swipe_direta" type="swipe">
      <match><action><initial>
        <event touch_event="touchEnd"/>
        <cluster point_number_min="1" point_number_max="5" 
          acceleration_max="0.5"/>
      </initial></action></match>
      <analysis><algorithm class="kinemetric" type="discrete">
          <library module="swipe" />
          <variables><property id="dx" result="dx"/>
          </variables>
          <delta_filter><property ref="dx" active="true" delta_min="0.01"/>
          </delta_filter>
        </algorithm></analysis>
      <mapping><update dispatch_type="discrete" dispatch_mode="cluster_remove" 
        dispatch_reset="cluster_remove">
        <gesture_event type="custom"></gesture_event>
      </update></mapping>
    </Gesture>
  </GestureMarkupLanguage>
  ]]></script>
`
_data.nclIntro3CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[16,21,24,28]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <causalConnector id="onRecognizeStopStart">
          <simpleCondition role="onRecognize" max="unbounded"/>
          <compoundAction>
            <simpleAction role="stop" max="unbounded"/>
            <simpleAction role="start" max="unbounded"/>
          </compoundAction>
        </causalConnector>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
        <area label="credits" begin="300s" end="360s" />
      </media>
      <input id="rec"src="rec_voz.srgs">
        <area label="repete"/>
      </input>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"/>
        <bind role="start" component="rec"/>
      </link>
      <link xconnector="onRecognizeStopStart">
        <bind role="onRecognize" component="rec_voz" interface="repete"/>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
      </link>
    </body>
  </ncl>
  ]]></script>
`

_data.nclIntro4CodeA = `
  <script type="syntaxhighlighter" class="brush: plain; toolbar: false;
  auto-links: false; highlight:[6,7]"> <![CDATA[
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX prf: <http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430>
  SELECT ?person
  WHERE {
  ?person prf:component ? component.
  ?component prf: name ? name FILTER regex(?name, “Leap Motion”) 
    ? name FILTER regex(?name, “Microphone”)
  }
  ]]></script>
`
_data.nclIntro4CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight:[13,14,15,16,32,34]"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <causalConnector id="onRecognizeStopStart">
          <simpleCondition role="onRecognize" max="unbounded"/>
          <compoundAction>
            <simpleAction role="stop" max="unbounded"/>
            <simpleAction role="start" max="unbounded"/>
          </compoundAction>
        </causalConnector>
      </connectorBase>
      <userBase>
        <userClass id="gu_leap_microphone" max="2"
          userClassDescription="gu_leap_microphone.sparql" /> 
      </userBase>
    </head>
    <body>
      <port component="video_principal"/>
      <media id="video_principal" src="video.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
        <area label="credits" begin="300s" end="360s" />
      </media>
      <input id="rec"src="rec_voz.srgs">
        <area label="repete"/>
      </input>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="video_principal" interface="credits"/>
        <bind role="start" component="rec"/>
      </link>
      <link xconnector="onRecognizeStart">
        <bind role="onRecognize" component="rec_voz" interface="repete">
          <linkParam name="user_id" value="gu_leap_microphone(2)"/>
        </bind>
        <bind role="stop" component="video_principal"/>
        <bind role="start" component="video_principal"/>
      </link>
    </body>
  </ncl>
  ]]></script>
`

// ----------------------------------------
//  ncl page - questions
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Aplicação dos conceitos',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        <p>Agora, pedimos que você realize as quatro tarefas a seguir. Duas
        tarefas consistem em interpretar códigos e outra duas editar
        códigos<></p>
        
        <p><strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar seus
        conhecimentos, mas sim capturar evidências de nossa
        pesquisa.</strong>.</p> 
        </div>
      `
    },
    {
      type: 'html',
      name: 'nclTask1',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Tarefa 1: Por favor, analise com cuidado o código NCL a seguir.</p>
        <div id='nclTask1Code'></div><br>
        </div>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclTask1Question',
      rows: '9',
      title: 'Qual o comportamento da aplicação?'
    },
    {
      type: 'html',
      name: 'nclTask2',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Tarefa 2: O aplicação NCL da Tarefa 1 foi modificada para permitir
        interações multimodais. O novo código é apresentado a seguir com as
        modificações destacadas. Por favor, analise com cuidado.</p>
        <div id='nclTask2Code'></div><br>
        </div>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclTask2Question',
      rows: '9',
      title: 'Qual o novo comportamento da aplicação?'
    },
    {
      type: 'comment',
      name: 'nclTask3Question',
      rows: '47',
      title: {
        en: `
          Tarefa 3: Agora, pedimos que edite o código NCL da Tarefa 2 (copiado a
          seguir) para que utilize uma interação por gestos ao invés de uma
          interação por comandos de voz. 
        `
      }
    },
    {
      type: 'comment',
      name: 'nclTask4Question',
      rows: '47',
      title: {
        en: `
          Tarefa 4: Agora, pedimos que edite o código NCL da Tarefa 2 (copiado a
          seguir) para que apenas o segundo usuário, de um grupo de 3 usuários,
          com microphone, possa realizar a interação por voz.
        `
      }
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
        <causalConnector id="onBeginStart">
          <simpleCondition role="onBegin"/>
          <simpleAction role="start" max="unbounded" qualifier="par"/>
        </causalConnector>
        <causalConnector id="onSelectionStopStart">
          <simpleCondition role="onSelection" />
          <compoundAction>
            <simpleAction role="stop" ax="unbounded"/>
            <simpleAction role="start" max="unbounded" />
          </compoundAction>
        </causalConnector>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal" />
      <media id="video_principal" src="video_principal.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
        <area label="credits" begin="300s" end="360s" />
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
      </media>
      <media id="img_centro" src="img_centro.png">
        <property name="width" value="20%" />
        <property name="hight" value="20%" />
      </media>
      <media id="img_praia" src="img_praia.png">
        <property name="left" value="80%" />
        <property name="width" value="20%" />
        <property name="hight" value="20%" />
      </media>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos">
        <bind role="start" component="img_centro" />
        <bind role="start" component="img_praia" />
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="img_centro" />
        <bind role="stop" component="img_centro" />
        <bind role="stop" component="img_praia" />
        <bind role="stop" component="video_principal" />
        <bind role="start" component="video_principal" />
      </link>
      <link xconnector="onSelectionStopStart">
        <bind role="onSelection" component="img_praia" />
        <bind role="stop" component="img_centro" />
        <bind role="stop" component="img_praia" />
        <bind role="stop" component="video_principal" />
        <bind role="start" component="video_principal" />
      </link>
    </body>
  </ncl>
  ]]></script>
`
_data.nclTask2CodeOnly = `
  <?xml version= "1.0" encoding= "ISO-8859-1" ?>
   <ncl xmlns="http://www.ncl.org.br/NCL3.0/EDTVProfile">
    <head>
      <connectorBase>
        <causalConnector id="onBeginStart">
          <simpleCondition role="onBegin"/>
          <simpleAction role="start" max="unbounded" qualifier="par"/>
        </causalConnector>
        <causalConnector id="onRecognizeStopStart">
          <simpleCondition role="onRecognize" />
          <compoundAction>
            <simpleAction role="stop" ax="unbounded"/>
            <simpleAction role="start" max="unbounded" />
          </compoundAction>
        </causalConnector>
      </connectorBase>
    </head>
    <body>
      <port component="video_principal" />
      <media id="video_principal" src="video_principal.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
        <area label="credits" begin="300s" end="360s" />
      </media>
      <media id="video_centro" src="centro.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
      </media>
      <media id="video_praia" src="praia.mp4">
        <property name="width" value="100%" />
        <property name="hight" value="100%" />
      </media>
      <input id="rec" src="rec_voz.sgrs">
        <area label="centro" />
        <area label="praia" />
      </input>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="video_principal" interface="creditos" />
        <bind role="start" component="rec_voz" />
      </link>
      <link xconnector="onRecognizeStopStart">
        <bind role="onRecognize" component="rec" interface="centro" />
        <bind role="stop" component="video_principal" />
        <bind role="start" component="video_centro" />
      </link>
      <link xconnector="onRecognizeStopStart">
        <bind role="onRecognize" component="rec" interface="praia" />
        <bind role="stop" component="video_principal" />
        <bind role="start" component="video_praia" />
      </link>
    </body>
  </ncl>
`

_data.nclTask2Code = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false; highlight: [9,10,11,12,13,14,15,33,34,35,36,41,46]">
  <![CDATA[` + _data.nclTask2CodeOnly + ` ]]></script>
`

// ----------------------------------------
// ncl feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'nclFeedback',
  // visibleIf: '{profileQuestion1} >= {profileQuestion3}',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Para capturar evidências de nossa pesquisa, por favor, opine sobre os
        pontos a seguir.</p>
        </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion1',
      title: `A NCL estendida **permite realizar mais 
            rapidamente** o desenvolvimento de aplicações multimodais frente a
            NCL atual.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion2',
      title: `A NCL estendida **permite aumentar a qualidade** 
            do desenvolvimento de aplicações multimodais frente a NCL atual`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion3',
      title: `De modo geral, a NCL estendida permite **é útel** para o 
            desenvolvimento de aplicações multimodais frente a NCL atual.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion4',
      title: 'NCL estendida **é fácil** de aprender.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion5',
      title: 'A NCL estendida **é clara e entendível**.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'nclFeedbackQuestion6',
      title: 'De modo geral, a NCL estendida **é fácil** de utilizar.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'comment',
      rows: '9',
      title: 'Os conceitos de aplicações multimodais estão claramente presentes na linguagem NCL estendida.'
    }
  ]
})

// ----------------------------------------
// html page
// ----------------------------------------

pageIndex = _data.surveyJSON.pages.push({
  name: 'html',
  // visibleIf: '{profileQuestion3} > {profileQuestion1}',
  elements: []
}) - 1

// ----------------------------------------
// html page - intro
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Proposta de conceitos multimodais em HTML',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: ` 
        <div style="text-align: justify; width: 70%;">

        <p>A linguagem HTML é utilizada criar conteúdo multimídia para serviços
        web. Em particular, sua versão atual (HTML 5) oferece os elementos
        <em>&ltimg></em>, <em>&ltvideo></em> e <em>&ltaudio></em>. Esses
        elementos permitem apresentar respectivamente imagens, vídeo e áudios.
        Para criar sincronismos, entretanto, o HTML recorre a um a JavaScript
        como linguagem auxiliar através do elemento <em>&ltscript></em>.
        Elementos JavaScript podem criar sincronismos de mídias e sincronismos
        baseados em interações de usuário por apontador e tecla.</p>
        
        <p>Esta seção não tem o objetivo de ensinar a linguagem HTML. Esta
        seção tem sim o objetivo de apresentar como os conceitos de interação
        multimodal podem ser instanciados na linguagem HTML. A tabela seguir
        apresenta quais conceitos propostos em nossa pesquisa estão presentes
        na HTML e como deve ser a instanciação dos ausentes.</p>

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
            <td>estender adcionando com trechos</td>
          </tr>
          <tr>
            <td><em>Sincronismo</em></td>
            <td><em>&ltscript></em></td>
            <td>manter</td>
          </tr>
          <tr>
            <td><em>Reconhecedor</em></td>
            <td><em>não presente</em></td>
            <td>adcionar elemento <em>&ltinput></em></td>
          </tr>
          <tr>
            <td><em>Grupo de Usuários</em></td>
            <td>não presente</td></td>
            <td>adcionar elemento <em>&ltuserClass></em></td>
          </tr>
        </table><br>
        </div>
      `
    },
    {
      name: 'htmlIntro1',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;"> 
        
        <p>Primeiro, vamos detalhar o conceito de <em>Mídia</em> em HTML que é
        já implementado por diferentes elementos, como <em>&ltimg></em>,
        <em>&ltaudio></em> e <em>&ltvideo></em>. Entretanto, esses elementos não
        possuem porções identificáveis. Logo, propromos os elementos para
        definir esses porções. Mais precisamente, elementos <em>&ltimg></em> e
        <em>&ltimg></em> para porções temporais e <em>&llabel></em> para porções
        em uma descrição textual.</p>
        
        <div id='htmlIntro1CodeA'></div><br>
        </div>
      `
    },
    {
      name: 'htmlIntro2',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        
        <p>Agora, vamos detalhar o conceito de <em>Sincronismo</em> em HTML que
        é parcialmente implementado pelo elemento <em>&lscript></em> utilizando
        a linguagem JavaScript.</p>

        <div id='htmlIntro2CodeA'></div><br>

        </div>
      `
    },
    {
      name: 'htmlIntro3',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Primeiro, vamos detalhar o conceito de <em>Reconhecedor</em> em HTML.
        Para implementar esse <em>Reconhecedor</em> propomos o elemento de
        <em>&ltinput></em></p>

        <p>O trecho de código a seguir apresenta o arquivo
        <em>rec_voz.srgs</em>. Esse arquivo é uma descrição de reconhecimento de
        voz no formato SRGS. Em particular, ele define uma porção chamada
        <em>repete</em> que define o reconhecimento de voz "repita vídeo".</p>

        <div id='htmlIntro3CodeA'></div><br>

        <p>O trecho de código a seguir apresenta o arquivo
        <em>rec_gestos.gml</em>. Esse arquivo é uma descrição de reconhecimento
        de voz no formato GML. Em particular, ele define duas porções chamadas
        <em>swipe_esquerda</em> e  <em>swipe_direita</em>que definem acenos de
        mão para esquerda e para direita, respectivamente</p>

        <div id='htmlIntro3CodeB'></div><br>

        <p>O trecho de código a seguir ilustra uma aplicação que apresenta um
        vídeo, ao qual pode ser reiniciado em sua portão de créditos por
        comandos de voz. Mais precisamente, a aplicação utiliza um elemento
        <em>&ltmedia></em> mídias, um elemento de <em>&ltinput></em>, um
        <em><port></em> e dois <em>&ltlink></em>s.</p> <p>O elemento de
        <em>&ltmedia></em> chamado de <em>video_principal</em> (linhas 17-19)
        que define um trecho chamado créditos que inicia aos 300s. O elemento
        <em>&ltinput></em>, chamado de <em>rec</em>é definido utilizando
        utilizando o arquivo SRGS <em>rec_voz.srgs</em> (linhas 20-22). O
        elemento <em>&ltport></em> (linha 16) define que o
        <em>video_principal</em> é iniciado com aplicação. O primeiro
        <em>&ltlink></em> (linhas 23-26) define que quando o
        <em>video_principal</em> alançar a sua porção de créditos (300s) o
        reconhecedor <em>rec</em> inicia seu reconhecimento. O segundo
        <em>&ltlink></em>(linhas 27-30) define que o <em>video_principal</em>
        deve ser reiniciado (stop e start) quando for reconhecido o trecho
        <em>repete</em>.</p>

        <div id='htmlIntro3CodeC'></div><br>
        </div>
      `
    },
    {
      name: 'htmlIntro4',
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, vamos detalhar o elemento <em>Grupo de Usuários</em> em HTML.
        Para implementar esse conceito propomos o elemento
        <em>&ltuserClass></em>.</p>

       <p> Um importante parte da definição de um <em>&ltuserClass></em> é como
       são descritos as caracterisicas que ususários devem ter par aparticipar
       da classe, por exemplos quais dispositivos devem possuir. Para essa
       descrição propomos um descrição  no formato SPARQL. O trecho de código a
       seguir apresenta o arquivo de descrição de ususários
       <em>gu_leap_microphone.sparql</em>. Essa descrição define que cada
       usuário do grupo deve ter um headset e um leapmotion.</p >
        
        <div id='htmlIntro4CodeA'></div><br>

        <div style="text-align: justify; width: 70%;">
        <p>Para ilustrar o uso de um <em>Grupo de Usuários</em> em HTML, o
        código a seguir é uma nova versão da aplicação que reinicia um video
        dado uma interação. Mas nessa versão, ao invés de clicar, o vídeo é
        reiniciado ao usuário falar "repita vídeo".</p> <p>Mais precisamente, a
        aplicação utiliza um elemento <em>&ltmedia></em> mídias, um elemento de
        <em>&ltinput></em>, um <em><port></em> e dois
        <em>&ltlink></em>s.</p>
        
        <p>O elemento de <em>&ltmedia></em> chamado de <em>video_principal</em>
        (linhas 17-19) que define um trecho chamado créditos que inicia aos
        300s. O elemento <em>&ltinput></em>, chamado de <em>rec</em>é definido
        utilizando utilizando o arquivo SRGS <em>rec_voz.srgs</em> (linhas
        20-22). O elemento <em>&ltport></em> (linha 16) define que o
        <em>video_principal</em> é iniciado com aplicação. O primeiro
        <em>&ltlink></em> (linhas 23-26) define que quando o
        <em>video_principal</em> alcançar a sua porção de créditos (300s) o
        reconhecedor <em>rec</em> inicia seu reconhecimento. O segundo
        <em>&ltlink></em>(linhas 27-30) defique que o <em>video_principal</em>
        deve ser reiniciado (stop e start) quando for reconhecido o trecho
        <em>repete</em></p>
        </div>

        <div id='htmlIntro4CodeB'></div><br>
      `
    }
  ]
})

_data.htmlIntro1CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ]]></script>
`

_data.htmlIntro2CodeA = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ]]></script>
`
_data.htmlIntro3CodeA = _data.nclIntro3CodeA
_data.htmlIntro3CodeB = _data.nclIntro3CodeB

_data.htmlIntro3CodeC = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ]]></script>
`

_data.htmlIntro4CodeA = _data.nclIntro4CodeA

_data.htmlIntro4CodeB = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ]]></script>
`

// ----------------------------------------
// html page - questions
// ----------------------------------------

_data.surveyJSON.pages[pageIndex].elements.push({
  type: 'panel',
  title: 'Aplicação dos conceitos',
  innerIndent: 1,
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Agora, pedimos que você realize as quatro tarefas a seguir. Duas
        tarefas consistem em interpretar códigos e outra duas editar
        códigos<></p> 
        
        <p><strong>Ressaltamos que essas tarefas NÃO se destinam a avaliar seus
        conhecimentos, mas sim capturar evidências de nossa
        pesquisa.</strong>.</p>
        </div>
      `
    },
    {
      type: 'html',
      name: 'htmlTask1',
      html: `
        <p>Tarefa 1: Por favor, analise com cuidado o código HTML a seguir.</p>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'htmlTask1Question',
      rows: '9',
      title: 'Qual o comportamento da aplicação?'
    },
    {
      type: 'html',
      name: 'htmlTask2',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Tarefa 2: O aplicação HTML da Tarefa 1 foi modificada para permitir
        interações multimodais. O novo código é apresentado a seguir com as
        modificações destacadas. Por favor, analise com cuidado o código
        HTML.</p>
        </div>
      `
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'htmlTask2Question',
      rows: '9',
      title: 'Qual o novo comportamento da aplicação?'
    },
    {
      type: 'comment',
      name: 'htmlTask3Question',
      rows: '9',
      title: {
        en: `
          Tarefa 3: Agora, pedimos que edite o código HTML da Tarefa 2 (copiado
          a seguir) para que utilize uma interação por gestos ao invés de uma
          interação por comandos de voz. 
        `
      }
    },
    {
      type: 'comment',
      name: 'htmlTask4Question',
      rows: '9',
      title: {
        en: `
          Tarefa 4: Agora, pedimos que edite o código HTML da Tarefa 2 (copiado
          a seguir) para que apenas o segundo usuário, de um grupo de 3
          usuários com microphone, possa realizar a interação por voz.
        `
      }
    }
  ]
})

_data.htmlTask1Code = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ]]></script>
`

_data.htmlTask2CodeOnly = `
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
`

_data.htmlTask2Code = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;
  auto-links: false;"> <![CDATA[` + _data.htmlTask2CodeOnly + `]]></script>
`

// ----------------------------------------
// html feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'htmlFeedback',
  // visibleIf: '{profileQuestion3} > {profileQuestion1}',
  elements: [
    {
      type: 'html',
      html: `
        <div style="text-align: justify; width: 70%;">
        <p>Para capturar evidências de nossa pesquisa, por favor, opine sobre os
        pontos a seguir.</p> </div>
      `
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion1',
      title: `A HTML estendida **permite realizar mais 
            rapidamente** o desenvolvimento de aplicações multimodais frente a
            HTML atual.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion2',
      title: `A HTML estendida **permite aumentar a qualidade**
            do desenvolvimento de aplicações multimodais frente a HTML atual.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion3',
      title: `De modo geral, a HTML estendida **é útel** para o 
            desenvolvimento de aplicações multimodais frente a HTML atual..`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion4',
      title: 'A HTML estendida **é fácil** de aprender.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion5',
      title: 'A HTML estendida **é clara e entendível**.',
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'htmlFeedbackQuestion6',
      title: `De modo geral, a HTML estendida **é fácil** de 
            utilizar.`,
      choices: ['discordo fortemente', 'discordo bastante', 'discordo um pouco',
        'não concordo nem discordo', 'concordo um pouco', 'concordo bastante',
        'concordo fortemente']
    },
    {
      type: 'comment',
      rows: '9',
      title: 'Os conceitos de aplicações multimodais estão claramente presentes na linguagem HTML estendida.'
    }
  ]
})

// ----------------------------------------
// comments feedback page
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'comments',
  title: 'Comentários adicionais do participante',
  elements: [
    {
      type: 'comment',
      name: 'commentsFinal',
      rows: '9',
      title: 'Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou sugestões relacionados ao nosso estudo.'
    }
  ]
})

// ----------------------------------------
// final page
// ----------------------------------------

_data.surveyJSON.completedHtml = `
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <div class='alert alert-success' role='alert' style='text-align:center;'>
    <h2>Muito bem!!! Terminamos a nosso estudo.<br>
    Obrigado por sua participação.</h2>
    <span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;'
      aria-hidden='true'></span>
  </div>
`
