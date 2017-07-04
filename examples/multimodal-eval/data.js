var _data = {}

// ----------------------------------------
// surveyJSON
// ----------------------------------------

_data.surveyJSON = {
  completeText: 'Finalizar estudo',
  completedHtml: `
    <br><br><br><br><br><br><br><br><br><br><br><br>
    <div class='alert alert-success' role='alert' style='text-align:center;'>
      <h2>Muito bem!!! Terminamos a nossa entrevista.<br>
      Obrigado por sua participação em nosso estudo.</h2>
      <span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;'
        aria-hidden='true'></span>
    </div>`,
  focusFirstQuestionAutomatic: false,
  locale: 'en',
  pageNextText: 'seguir',
  pagePrevText: 'voltar',
  requiredText: '',
  showProgressBar: 'top',
  showQuestionNumbers: 'off',
  surveyPostId: '51d57b85-3813-4a08-801b-4b7e077c1660',
  // title: 'Estudo sobre interações multimodais em linguagens multimídia',
  pages: []
}

// ----------------------------------------
// termo page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'termo',
  title: 'Termo de consentimento para o estudo',
  elements: [
    {
      type: 'html',
      html: `
            O TeleMídia é um grupo de pesquisa do departamento de Informática
            da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas 
            Multimídia e Redes de Computadores. Em particular, Sistemas de TV 
            Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do 
            laboratório nos últimos anos.<br><br>
            
            Convidamos a você a participar de um de nosso estudo 
            sobre<i>Interações multimodais em linguagens multimídia</i>.<br><br>
            
            <strong>Ressaltamos que esse estudo NÃO se destina à avaliar seus 
            conhecimentos acerca dos conceitos apresentados, mas sim capturar 
            evidências de nossa pesquisa.</strong><br><br>
            
            Para prosseguirmos, pedimos seu consentimento para realizarmos esse 
            estudo e informamos que:
            <ul>
            <li>Os dados coletados destinam-se estritamente a atividades de 
            pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia 
            têm acesso à integra do material resultante da avaliação.</li>
            <li>A divulgação dos resultados de nossa pesquisa em foros 
            científicos e/ou pedagógicos pauta-se no respeito à privacidade, e 
            o anonimato dos participantes é preservado em qualquer material 
            publicado.</li>
            </ul>
          `
    },
    {
      type: 'html',
      html: 'Caso esteja de acordo, prossiga.<br>'
    }
  ]
})

// ----------------------------------------
// profile page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'perfil',
  title: 'Dados do entrevistado',
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
      name: 'formations',
      title: 'Qual sua formação (e.g. comptuação, design, pós-gradução informática)?',
      choices: ['gradução em comptuação', 'graduação em design', 'pós-gradução em computação', 'pós-gradução em design'],
      hasOther: true,
      otherText: 'outra'
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion1',
      title: 'Qual seu conhecimento no desenvolvimento em NCL?',
      choices: ['nenhum', 'muito pouco', 'pouco', 'razoável', 'alto',
        'muito alto', 'expert']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion2',
      title: 'Quantas aplicações NCL você desenvolveu?',
      visibleIf: '{profileQuestion1} != nenhum',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'sintax',
      title: `Você acredida que a sintaxe da NCL atrapalha ao
       desenvolver aplicações?`,
      choices: ['bastante improvável', 'muito improvável', 'pouco improvável',
        'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion3',
      title: 'Qual seu conhecimento no desenvolvimento em HTML/JavaScript?',
      choices: ['nenhum', 'muito pouco', 'pouco', 'razoável', 'alto',
        'muito alto', 'expert']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'profileQuestion4',
      title: 'Quantas aplicações HTML/JavaScript você desenvolveu?',
      visibleIf: '{profileQuestion3} != nenhum',
      choices: ['0', '1-2', '3-4', '5-6', '7-8', '8 ou mais']
    },
    {
      type: 'radiogroup',
      isRequired: true,
      name: 'sintax',
      title: `Você acredida que o desenvolvimento em HTML/JavaScript requisita 
      necessáriamente o uso de bibliotecas de manipulção DOM como jQuery, Zepto 
      e Prototype?`,
      choices: ['bastante improvável', 'muito improvável',
        'pouco improvável', 'indiferente', 'pouco provável',
        'muito provável', 'bastante provável']
    }
  ]
})

// ----------------------------------------
// intro page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'intro',
  title: 'Introdução à linguagens multimídia com interações multimodais',
  elements: [
    {
      type: 'html',
      html: `
        <p>O objetivo dessa seção do estudo é oferecer uma introdução sobre o 
        conceito de <strong>linguagens multimídias com interações 
        multimodais</strong>, proposto em nossa pesquisa.</p>
      `
    },
    {
      type: 'html',
      html: `
        <p>Primeiro devemos introduzir o que é um linguagem multimídia, que é 
        intimamente documento multimídia.</p>
        <br>

        <p>Steinmetz [1] caracteriza um <strong>sistema multimídia</strong> 
        como aquele que utiliza um conjunto de mídias, que ao menos uma mídia 
        seja discreta e uma seja contínua. As <strong>mídias discretas</strong> 
        são aquelas que não mudam durante sua exibição, como imagens e textos. 
        Elas também são chamadas de mídias independente de tempo. Enquanto, as 
        <strong>mídias contínuas</strong> são aquelas que mudam durante sua 
        exbição, como áudios e vídeos. Elas também são chamdas de mídias 
        dependentes de tempo.</p>
        <br>

        <p>Um <strong>documento multimídia</strong>, também segundo Steinmentz, 
        é aquele que define como um sistema multímida deve exibir um conjunto 
        de mídias (discretas e contínuas) na forma de uma apresentação 
        multimídia. O criador de um documento multímidia é usualmente chamado 
        de autor.</p>
        <br>

        <p>A figura a seguir ilustra a criação e apresentação de um documento 
        multimídia.</p>
        <p>Na <strong>criação do documento multimídia</strong>, o autor defini 
        as mídias utilizadas e o sincronismo entre elas.</p>
        <p>O sincronismo define o comportamento da exbição das mídias no 
        decorrer do tempo da apresentação. Ele é geralmente baseado em momentos 
        de apresentação de <strong>trechos de mídia</strong> contínua. 
        Considere, por exemplo, que a parte de créditos de vídeo inicie no 
        segundo 600. Um sincronimo pode ser definido para que ao iniciar o 
        trecho dos creditos (o vídeo alcance o segundo 600) uma uma imagen de 
        patrocínio seja exibida.</p>

        <p>Na <strong>apresentação documento multimídia</strong>, um sistema 
        multimídia recebe o documento multimídia e os arquivos de mídia 
        necessários para  realizar o sincronismo definido pelo autor. Na figura,
        por exemplo, uma imagem e um audio são apresentação em determinado 
        trecho da apresentação de um video. Por fim, o sistema utiliza 
        <strong>dispositivos audiovisuais</strong> para apresentar conteúdos 
        das mídias (som e frames) e <strong>dispositivos apontador e 
        tecla</strong> para capiturar interações de usuário.</p>

        <div class='text-center'>
          <img class='center-block img-thumbnail' style='height: 500px' 
            src='assets/overview1.svg'>
        </div>
        <br>

        <p>A <strong>linguagem multídmidia</strong> é na verdade o formato que 
        permite um autor definir um documento multimídia. Ela define uma 
        sintaxe e elementos de linguagem. Exemplos atuais de linguagens 
        multímidia são a NCL (Nested Context Language)[2] e a HTML[3].</p>
        <br>

        [1] <a 
        href='https://www.pearson.com/us/higher-education/product/Steinmetz-Multimedia-Computing-Communications-and-Applications/9780133244359.html'> 
        Steinmetz, R. and Nahrstedt, K. 1995. Multimedia: Computing, 
        Communications and Applications. Prentice Hall.</a><br>
        [2] <a href='#'>https://www.itu.int/rec/T-REC-H.761</a><br>
        [3] <a href='#'>https://www.w3.org/TR/html5</a><br>
      `
    },
    {
      type: 'html',
      html: `
        <p>Agora, devemos introduzir o conceito de <strong>linguagens 
        multimídia com interações multimodais</strong>, que intimamente 
        relacionado com interfaces multimodais.</p>
        <br>

        <p>Oviatt [4] define que <strong>interfaces multimodais</strong> como 
        aquelas que reconhecerem  interações em formas mais naturais da 
        linguagem humana e comportamento, como fala e gestos. Esse tipo de 
        interface foi apoiada pelos recentes avanços em tecnologias de 
        reconhecimento e <strong>dispositivos de interação multimodal</strong>. 
        Ilustrados a seguir, citamos o uso de microfones para reconhecimento de 
        voz, e dispostivos como LeapMotion e e Microsoft Kinect para 
        reconhecimento de gestos de mão e corpo, respectivamente.</p>
        <br>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 180px' 
          src='assets/voice.jpg'>
          <img class='img-thumbnail' style='height: 180px' 
          src='assets/leap.jpg'>
          <img class='img-thumbnail' style='height: 180px' 
          src='assets/kinect.jpg'>
        </div>
        <br>

        <p>Modificamos a primeira figura para ilustrar a criação e apresentação 
        de um documento multimídia com suporte a interações multimodais. Nessa 
        nova figura, o autor não apenas midias e sincronismo, como também o 
        reconhecimento de interações multimodais.
        <p>Para definir receonhecimentos, o autor utiliza de descrições 
        auxiliares para reconhcer determinada interação. Essas descrição tem 
        sintaxe própria que defini características de interação. Por exemplo, 
        uma descrição pode ser em SRGS (Speech Recognition Grammar 
        Specification) [5] para definir o reconhecimento de comandos de voz.</p>
        <br>

        <p>Na apresentação, esse sistema multimídia recebe o documento 
        multimídia, arquivos de mídia e descrições multimodais necessparios 
        para realziar o sincronismo e reconhecimentos definido pelo autor. Esse 
        sistema utiliza dispositivos de interação multimodal para 
        receonhecimento, além de dispositivos audiovisuais.</p>
        <br>

        <div class='text-center'>
          <img class='img-thumbnail' style='height: 500px' 
          src='assets/overview2.svg'>
        </div>
        <br>

        <p>Por fim, uma <strong>linguagem multimídia com interações 
        multimodais</strong> é aquele formato que permite definir um documento 
        multimída com não apenas sincroniza mídias, mas também reconhecimento 
        de interações multimodais.</p>

        [4] <a href='http://dx.doi.org/10.1201/9781410615862.ch21'>
        Oviatt, S. 2007. Multimodal Interfaces. Human Computer Interact 
        Handbook. CRC Press, 413–432</a><br>
        [5] <a href='#'>https://www.w3.org/TR/speech-grammar<a>
      `
    },
    {
      type: 'html',
      html: `<p>Esperamos que esta introdução tenha sido útil no seu 
        entendimento acerca de linguagens multimídia com interações multimodais. 
        Favor prossiga.</p>`
    }
  ]
})

// ----------------------------------------
// concepts page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'blocks',
  elements: [
    {
      type: 'panel',
      title: 'Proposta de conceitos',
      innerIndent: 1,
      elements: [
        {
          type: 'html',
          html: `
            <p>As linguagens multímidia atuais não suportam adequadamente
            interações multimodais. Em nosso estudo nos propomos um conjunto de
            conceitos a serem adionados nessas linguagens para oferecer tal
            suporte. Mais precisamente esses conceitos são os de <em>Mídia,
            Reconhecedor, Sincronismo</em> e <em>Usuário</em>.</p> 
            <br>
            
            <p>Esta seção tem o objetivo de detalhar esses conceitos e capturar
            o entendimento do entrevistado. Entretanto, para evitar possiveis
            dificuldades dado a sintaxe de linguagens, apresentaremos esses
            conceitos utilizando uma abordagem de <strong>desenvolvimento de
            aplicações através blocos</strong>.</p> <p>Esse tipo de abordagem é
            bastante utilizado para o ensino de programação ou para ferramentes
            de geração de código. Em especial, esse tipo de desenvolvimento foi
            popularizado por ferramentas como o <strong>MIT Scratch</strong>[4]
            e <strong>MIT App Inventor</strong>[5]. O primeiro é utilizado para
            criar aplicações web, especialmente jogos, e o segundo utilizado
            para criar aplicações moveis. Ambos são ilustratos a seguir.</p>
            <br>

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
          `
        },
        {
          type: 'html',
          name: 'blocksIntro1',
          html: `
            <p>Primeiro, vamos detalhar o elemento <em>Mídia</em>.</p>
            <br>

            <p>O elemento <em>Mídia</em> é definido por um identificador e por
            seu conteúdo. O contéudo de uma <em>Mídia</em> ter porções
            identificáveis como trechos de um video ou áudio. Por exemplo, os
            blocos a seguir definem duas mídias com identificadores
            <em>midia_principal</em> e <em>icone</em>, mas elas não possuem
            conteúdo. Por não terem conteúdo, ações de iniciar sobre as mídias
            acima não apresentaram resultados.</p> <div
            id='blocksIntro1a'></div>
            <br>

            <p>Os blocos a seguir definem as mesmas mídias, mas com conteúdos
            de áudio e imagem respectivamente. Em especial, a mídia de
            <em>midia_principal</em> tem definido um trecho chamado de
            <em>creditos</em> que inicia aos 300 e termina aos 360
            segundos.</p> <div id='blocksIntro1b'></div></p>

            <br>
          `
        },
        {
          type: 'html',
          name: 'blocksIntro2',
          html: `
            <p>Em em seguida, vamos detalhar o elemento <em>Sincronimo</em>.</p>
            <br>

            <p>O elemento de <em>Sincronimo</em> permite definir o 
            comportamento das aplicações. O uso de elementos de 
            <em>Sincronimo</em>s sobre elementos de <em>Mídia</em> define 
            quando mídias são apresentadas. O <em>Sincronimo</em> é baseado em 
            causalidade, ou seja, quando um condição é satisfeita, ações são 
            realizadas. Exemplos de condições são inicio ou fim de uma mídia ou 
            trecho de midia, ou a seleção de ususário sobre um mídia. Exemplos 
            de ações são inicar ou parar uma mídia.</p>

            <p>Os blocos a seguir definem a mídia <em>midia_principal</em> e um 
            sincronismo que inicia mídia no início aplicação. Nesse exemplo, 
            entretanto, alteramos o conteúdo da <em>midia_principal</em> para 
            um conteúdo de vídeo. É importante ressaltar que mudança no 
            conteúdo de <em>midia_principal</em> não afetam o compartamento da 
            aplicação, desde que a mídia definia o mesmos trechos. Pois os 
            <em>Sincronimo</em>s são definidos indepente do conteúdo.</p>
            <div id='blocksIntro2a'></div>
            <br>

            <p>Os blocos a seguir definem uma aplicação que apresenta um video,
            que um icone durante os creditos. Ao selecionar o icone, o video é
            reiniciado.</p>
            
            <p>Mais precismanete, os blocos definem novamente
            <em>midia_principal</em> e sincronismo do bloco anterior, mas
            adcionam a mídia <em>icone</em> e mais dois <em>Sincronimo</em>s. O
            primeiro <em>Sincronimo</em> adcionado defini que quando a
            <em>midia_principal</em> alcançar o seu trecho de <em>credito</em> a
            mídia <em>icone_repetir</em> deve ser inciada. O segundo
            <em>Sincronimo</em> adcionado defini que quando a mídia
            <em>icone_repetir</em> for sel adcionam a mídia <em>icone</em> e
            mais dois <em>Sincronimo</em>s. O primeiro <em>Sincronimo</em>
            adcionado defini que quando a <em>midia_principal</em> alcançar o
            seu trecho de <em>credito</em> a mídia <em>icone_repetir</em> deve
            ser inciada. O segundo <em>Sincronimo</em> adcionado defini que
            quando a mídia <em>icone_repetir</em> for seleciona, esta deve
            reciniciar a <em>midia_principal</em> (terminada e inciada)</p> <br>

            <div id='blocksIntro2b'></div>
            <br>
          `
        },
        {
          type: 'html',
          name: 'blocksIntro3',
          html: `
            <p>Agora, detalhamos a seguir o elemento <em>Reconhecedor</em>.</p>
            <br>

            <p> O <em>Reconhecedor</em> também é definido por um identificador e
            por seu conteúdo. Entrentato, diferente de <em>Mídia</em>, o
            conteúdo de um <em>Reconhecedor</em> deve ser uma descrição de
            reconhecimento. Exemplos dessas descrições são aquelam commandos de
            voz ou gestos de mão. Logo, porções de um <em>Reconhecedor</em> são
            porções de um descrição de reconhecimento.</p> <br>

            <p>Os blocos a seguir definem os reconhecedores
            <em>rec_voz</em> e <em>rec_gestos</em>. O <em>rec_voz</em> tem uma
            reconhecimento de voz como conteúdo. Essa descrição tem o trecho
            <em>repetir</em> que reconhece o comando de voz "repetir video". O
            <rec_gestos> tem uma descrição de reconhecimento de gestos como
            conteúdo. Esse trecho utiliza dois trechos esquerda e direita para
            definir gestos de mão nessas direções.</p> 
            
            <div id='blocksIntro3a'></div> <br> 
            

            <p>Os blocos a seguir redefine a aplicação que reinicia um video dado uma interação. Mas nessa versão, ao inves de clicar, o vídeo é reiniciado ao usuário falar "repetir video".</p> 
            <br>
            
            <p>Mais precismanete, os blocos definem uma
            a <em>Midia</em>, chamada <em>midia_principal</em>, um <em>Reconhecedor</em>, chamado <em>rec_voz</em> e três
            <em>Sincronimo</em>s. O primeiro <em>Sincronimo</em> define que
            <em>midia_principal</em>  é iniciado com a aplicação. O segundo
            <em>Sincronimo</em> defini quando a <em>midia_principal</em>
            alcançar o seu trecho de <em>creditos</em>, o <em>Reconhecedor</em>
            <em>rec_voz</em> deve ser iniciado. O <em>Sincronimo</em> último
            define que quando o trecho <em>repetir</em> for reconhecido a
            <em>midia_principal</em> (terminada e inciada)
            
            <div id='blocksIntro3b'></div>
            <br>
          `
        },
        {
          type: 'html',
          name: 'blocksIntro4',
          html: `
            <p>Por fim, vamos detalhar o elemento <em>Usuário</em>.</p>
            <br>

            <p> O elemento <em>Usuário</em> é definido por um identificador,
            pelo número de membros que podem participar do grupo e pelos
            dispositivos que devem possuim para participar da aplicação.</p><br>
            
            <p>Os blocos a seguir definem um grupo de usuário <em>gu_gestos</em>
            que possuem 3 membros e cada um reconhecedor de gestos. <br>

            <p>A seguir um <em>Usuário</em></p>
            <div id='blocksIntro4a'></div>
            <br>

            <p>A seguir um <em>Usuário</em> com sincronismo.</p>
            <div id='blocksIntro4b'></div>
            <br>
          `
        }
      ]
    },
    {
      type: 'panel',
      title: 'Entendimento dos conceitos',
      innerIndent: 1,
      elements: [
        {
          type: 'html',
          html: `
            <p>Agora, desejamos <strong>capturar</strong> seu entendimento dos 
            conceitos apresentados. Para isso, pedimos que você realize as 
            quatro tarefas a seguir. Duas tarefas consistem em interpretar 
            blocos já existem e outros dois editar blocos existentes.</p>       
                
            </p><strong>Ressaltamos que essas tarefas NÃO se destinam à avaliar 
            seus conhecimentos, mas sim capturar evidências de nossa 
            pesquisa.</strong><br>
          `
        },
        {
          type: 'html',
          name: 'blocksReadTask1',
          html: `
            <p>Tarefa 1: Por favor, analise com cuidado os blocos aseguir.</p>
          `
        },
        {
          type: 'comment',
          isRequired: true,
          name: 'blocksReadTask1Question',
          title: 'Qual o comportamento da aplicação que corresponde os blocos acima?'
        },
        {
          type: 'html',
          name: 'blocksReadTask2',
          html: `
            <p>Tarefa 2: Os blocos a seguir são um versão motificada do 
            imediatamente anterior. Por favor, analise com cuidado essa versão 
            modificada.</p>
          `
        },
        {
          type: 'comment',
          isRequired: true,
          name: 'blocksReadTask2Question',
          title: 'Qual a mudança no comportamento da aplicação anterior?'
        },
        {
          type: 'html',
          name: 'blocksEditTask1',
          html: `
            <p>Tarefa 3: Agora, pedimos que edite os blocos a seguir para 
            utilizar um interação por gestos inves de uma interação por 
            comandos de voz.</p>
          `
        },
        {
          type: 'text',
          name: 'blocksEditTask1Changes',
          visible: false
        },
        {
          type: 'text',
          name: 'blocksEditTask1Result',
          visible: false
        },
        {
          type: 'html',
          name: 'blocksEditTask2',
          html: `
            <p>Tarefa 4: Agora, pedimos que edite os blocos a seguir para que 
            apenas o segundo usuário de um grupo de usuário possa realizar a 
            interação.</p>
          `
        },
        {
          type: 'text',
          name: 'blocksEditTask2Changes',
          visible: false
        },
        {
          type: 'text',
          name: 'blocksEditTask2Result',
          visible: false
        }
      ]
    }
  ]
})

// ----------------------------------------
// concepts page blocks
// ----------------------------------------

_data.blocksIntro1aXml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">midia_principal</field>
    </block>
    <block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="594" y="20">
      <field name="id">icone</field>
    </block>
  </xml>
`

_data.blocksIntro1bXml = `
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

_data.blocksIntro2aXml = `
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

_data.blocksIntro2bXml = `
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

_data.blocksIntro3aXml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="20">
      <field name="id">rec_voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="1"></mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repetir video</field>
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

_data.blocksIntro3bXml = `
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
          <mutation length="2">
          </mutation>
          <field name="id_area0">repetir</field>
          <field name="label0">repetir video</field>
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
_data.blocksIntro4aXml = `
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

_data.blocksIntro4bXml = `
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
        <mutation length="2"></mutation>
        <field name="id_area0">repetir</field>
        <field name="label0">repetir video</field>
        <field name="id_area1"></field>
        <field name="label1"></field>
      </block>
    </value>
  </block>
  <block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="230">
    <field name="id">midia_principal</field>
  </block>
  <block type="user" id="IPnvWeecZqr2WM|RGxm|" x="594" y="200">
    <mutation length="1"></mutation>
    <field name="id">gu_gestos</field>
    <value name="element_0">
      <block type="hand_gesture_sensor" id="yU[{24F}.5IJtyI;VB5k"></block>
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
        <field name="user_id">gu_gestos</field>
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

_data.blocksReadTask1Xml = `
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

_data.blocksReadTask2Xml = `
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
  <block type="link" id="% 6sP% 0di, O * v % qS % d\`(\`" x="550" y="627">
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
// concepts feedback page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'blocksFeedback',
  elements: [
    {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude agora a capturar a usa perceção sobre 
        utilidade dos conceitos apresentados.`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion1',
          title: `Os conceitos apresentadados permitem realizar mais facilmente 
            o desenvolmento de aplicações multimodais`,
          choices: [
            {
              value: '0',
              text: {
                en: 'bastante improvável'
              }
            }, {
              value: '1',
              text: {
                en: 'muito improvável'
              }
            }, {
              value: '2',
              text: {
                en: 'pouco improvável'
              }
            }, {
              value: '3',
              text: {
                en: 'indiferente'
              }
            }, {
              value: '4',
              text: {
                en: 'pouco provável'
              }
            }, {
              value: '5',
              text: {
                en: 'muito provável'
              }
            }, {
              value: '6',
              text: {
                en: 'bastante provável'
              }
            }
          ]
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion2',
          title: `Os conceitos apresentadados permitem realizar mais 
            rapidamente o desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion3',
          title: `De modo geral, os conceitos apresentadados são úteis para o 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }]
    }, {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude agora a capturar a usa perceção sobre a 
        facilidade dos conceitos apresentados.`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion4',
          title: 'Aprender os conceitos é fácil?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion5',
          title: 'Os conceitos são claros e entendíveis?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'conceptsFeedbackQuestion6',
          title: `De modo geral, os conceitos apresentadados são fáceis de 
            utilizar?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }]
    }
  ]
})

// ----------------------------------------
// ncl page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'ncl',
  title: 'Conceitos multimodais em NCL',
  elements: [
    {
      type: 'html',
      html: `
      <p>A linguagem NCL possui o foco de criar apresentações multimídia
      interativas. Anteriormente a NCL focava no uso de mídias audiovisuais
      (por exemplo imagens, vídeo e áudios) e interações por meio de
      apontador e tecla.</p> 
      <br>
    
      <p>O exemplo de código a seguir ilustra o uso de novas mídias e
      interação. Um exemplo de mídia NCL comum é o 'mainvideo' (linhas
      12-14). Essa media possui um trecho definido pela ancora 'credits'
      (linhas 13).</p> 
      <br>
    
      <p>Para adicionar interações multimodais sobre esse video, adicionamos
      os elementos 'menu' (linhas 15-17) e 'answer' (linhas 19-21). O
      primeiro define um áudio sintetizado utilizando o arquivo SSML chamado
      question.ssml (linhas 2-4).O segundo define um reconhecimento de vocês
      utilizando o arquivo SRGS chamado commads.srgs (linhas 7-9).</p> 
      <br>
    
      <p>Esse áudio sintetizado é definido pelo elo das linhas 23-27.
      Enquanto que o reconhecimento é definido pelo elo das linhas 28-31.</p>
      `,
      name: 'nclIntro'
    },
    {
      type: 'html',
      html: `O código a seguir consiste em uma aplicação NCL sem interações 
        multimodais.`,
      name: 'nclCode1'
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclQuestion1',
      rows: '9',
      title: 'Qual o comportamento da aplicação?'
    },
    {
      type: 'html',
      html: `O aplicação NCL acima foi modificada para permitir interações 
        multimodais. O novo código é apresentado a seguir com as modificações 
        destacadas:`,
      name: 'nclCode2'
    },
    {
      type: 'comment',
      isRequired: true,
      name: 'nclQuestion2',
      rows: '9',
      title: 'Qual o novo comportamento da aplicação?'
    }
  ]
})

// ----------------------------------------
//  ncl page codes
// ----------------------------------------

_data.nclCode1 = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <causalConnector id="onKeySelectionStart">
          <connectorParam name="var"/>
          <connectorParam name="keyCode"/>
          <simpleCondition role="onSelection" key="$keyCode"/>
          <simpleAction role="start" max="unbounded"/>
        </causalConnector>
      </connectorBase>
    </head>
    <body>
      <port component="mainvideo"/>
      <media id="mainvideo" type="video/mp4" src="video.mp4">
        <property name="width" value="100%"/>
        <property name="height" value="100%"/>
        <area label="credits" begin="300s" end="360s" />
      </media>
      <link xconnector="onKeySelectionStart">
        <bind role="onSelection" component="mainvideo" interface="credits">
          <bindParam name="keyCode" value="RED"/>
        </bind>
        <bind role="start" component="mainvideo"/>
      </link>
    </body>
  </ncl>
  ]]>
  </script>
`

_data.nclCode2 = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false; 
  highlight: [11,12,13,14,15,16,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
  48]">
  <![CDATA[
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <ncl>
    <head>
      <connectorBase>
        <causalConnector id="onKeySelectionStart">
          <connectorParam name="var"/>
          <connectorParam name="keyCode"/>
          <simpleCondition role="onSelection" key="$keyCode"/>
          <simpleAction role="start" max="unbounded"/>
        </causalConnector>
        <!-- begin modification-->
        <causalConnector id="onRecognizeStart">
          <simpleCondition role="onRecognize" max="unbounded"/>
          <simpleAction role="start" max="unbounded"/>
        </causalConnector>
        <!-- end modification-->
      </connectorBase>
    </head>
    <body>
      <port component="mainvideo"/>
      <media id="mainvideo" type="video/mp4" src="video.mp4">
        <property name="width" value="100%"/>
        <property name="height" value="100%"/>
        <area label="credits" begin="300s" end="360s" />
      </media>
      <link xconnector="onKeySelectionStart">
        <bind role="onSelection" component="mainvideo" interface="credits">
          <bindParam name="keyCode" value="RED"/>
        </bind>
        <bind role="start" component="mainvideo"/>
      </link>
      <!-- begin modification-->
      <media id="tts" type="application/ssml+xml" src="question.ssml">
        <area label="repeat_question"/>
      </media>
      <input id="asr" type="application/srgs+xml" src="repeat.srgs">
        <area label="repeat_command"/>
      </input>
      <link xconnector="onBeginStart">
        <bind role="onBegin" component="mainvideo" interface="credits"/>
        <bind role="start" component="tts" interface="repeat_question"/>
        <bind role="start" component="answer"/>
      </link>
      <link xconnector="onRecognizeStart">
        <bind role="onRecognize" component="asr" interface="repeat_command"/>
        <bind role="start" component="mainvideo"/>
      </link>
      <!-- end modification-->
    </body>
  </ncl>]]>
  </script>
`

// ----------------------------------------
// ncl feedback page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'nclFeedback',
  elements: [
    {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude a compreender a utilidade da NCL estendida 
        com conceitos multimodais.`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion1',
          title: `A NCL estendida permite realizar mais facilmente o 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion2',
          title: `A NCL estendida permite realizar mais rapidamente o 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion3',
          title: `A NCL estendida aumenta a qualidade no desenvolmento de   
            aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion4',
          title: `A NCL estendida fornece maior controle no desenvolmento de 
            aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion5',
          title: `De modo geral, A NCL estendida é util para realizar o 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }
      ]
    }, {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude a compreender a facilidade do uso da NCL 
        estendida`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion6',
          title: 'Aprender a NCL estendida é fácil?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion7',
          title: 'A NCL estendida é claro e entendível?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'nclFeedbackQuestion8',
          title: 'De modo geral, a NCL estendida é fácil de utilizar?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }]
    }
  ]
})

// ----------------------------------------
// html page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'html',
  title: 'Conceitos multimodais em HTML',
  elements: [
    {
      type: 'html',
      name: 'htmlIntro'
    }
  ]
})

// ----------------------------------------
// html page codes
// ----------------------------------------

// ----------------------------------------
// html feedback page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'htmlFeedback',
  elements: [
    {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude a compreender a utilidade da HTML/JavaScrip 
        estendida com conceitos multimodais.`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion1',
          title: `A HTML/JavaScrip estendida permite realizar mais facilmente o 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion2',
          title: `A HTML/JavaScrip estendida permite realizar mais rapidamente 
            o desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion3',
          title: `A HTML/JavaScrip estendida aumenta a qualidade no 
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion4',
          title: `A HTML/JavaScrip estendida fornece maior controle no  
            desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion5',
          title: `De modo geral, a HTML/JavaScript estendida é util para 
            realizar o desenvolmento de aplicações multimodais?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }
      ]
    }, {
      type: 'panel',
      innerIndent: 1,
      title: `Por favor, nos ajude a compreender a facilidade do uso de   
        HTML/Javascript estendida`,
      elements: [
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion6',
          title: 'Aprender a HTML/Javascript estendida é fácil?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion7',
          title: 'A HTML/Javascript estendida é claro e entendível?',
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'htmlFeedbackQuestion8',
          title: `De modo geral, a HTML/Javascript estendida é fácil de 
            utilizar?`,
          choices: ['bastante improvável', 'muito improvável',
            'pouco improvável', 'indiferente', 'pouco provável',
            'muito provável', 'bastante provável']
        }
      ]
    }
  ]
})

// ----------------------------------------
// comments feedback page texts
// ----------------------------------------

_data.surveyJSON.pages.push({
  name: 'comments',
  title: 'Comentários adicionais do entrevistado',
  elements: [
    {
      type: 'comment',
      name: 'commentsQuestion1',
      rows: '9',
      title: {
        en: `Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou 
          sugestões relacionados ao nosso estudo.`
      }
    },
    {
      type: 'comment',
      name: 'commentsQuestion2',
      rows: '9',
      title: {
        en: `Adcionalmente, se desejar, você fale sobre que tipos de aplicações 
          você gostaria de desenvolver com conceitos apresentados nesse estudo.`
      }
    }
  ]
})
