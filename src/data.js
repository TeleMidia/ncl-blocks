var _data = {}

// ----------------------------------------
// surveyJSON
// ----------------------------------------

_data.surveyJSON = {
  completeText: 'Finalizar estudo',
  completedHtml: "<br><br><br><br><br><br><br><br><br><br><br><br><div class='alert alert-success' role='alert' style='text-align:center;'><h2>Muito bem!!!Obrigado por sua participação em nosso estudo.</h2><span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;' aria-hidden='true'></span></div>",
  focusFirstQuestionAutomatic: false,
  locale: 'en',
  pageNextText: 'seguir',
  pagePrevText: 'voltar',
  requiredText: '',
  showProgressBar: 'top',
  showQuestionNumbers: 'off',
  surveyPostId: '51d57b85-3813-4a08-801b-4b7e077c1660',
  // title: "Estudo sobre interações multimodais em linguagens multimídia",
  pages: [
    {
      name: 'termo',
      title: 'Termo de consentimento para o estudo',
      elements: [
        {
          type: 'html',
          html: `
          O TeleMídia é um grupo de pesquisa do departamento de Informática da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas Multimídia e Redes de Computadores. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos.<br><br>
          
          Convidamos a você a participar de um de nosso estudo sobre<i>Interações multimodais em linguagens multimídia</i>.<br><br>
          
          <b>Ressaltamos que esse estudo NÃO se destina à avaliar seus conhecimentos acerca dos conceitos apresentados, mas sim capturar evidências de nossa pesquisa.</b><br><br>
          
          Para prosseguirmos, pedimos seu consentimento para realizarmos esse estudo e informamos que:
          <ul>
          <li>Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.</li>
          <li>A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em qualquer material publicado.</li>
          </ul>`
        },
        {
          type: 'html',
          html: 'Caso esteja de acordo, prossiga.<br>'
        }
      ]
    },
    {
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
          choices: ['nenhum', 'muito pouco', 'pouco', 'razoável', 'alto', 'muito alto', 'expert']
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
          title: 'Você acredida que a sintaxe da NCL atrapalha ao desenvolver aplicações?',
          choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
        },
        {
          type: 'radiogroup',
          isRequired: true,
          name: 'profileQuestion3',
          title: 'Qual seu conhecimento no desenvolvimento em HTML/JavaScript?',
          choices: ['nenhum', 'muito pouco', 'pouco', 'razoável', 'alto', 'muito alto', 'expert']
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
          title: 'Você acredida que o desenvolvimento em HTML/JavaScript requisita necessáriamente o uso de bibliotecas de manipulção DOM como jQuery, Zepto e Prototype?',
          choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
        }
      ]
    },
    {
      name: 'intro',
      title: 'Introdução à conceitos multimodais',
      elements: [
        {
          type: 'html',
          html: `
              <div class='text-justify'></div>          
              Primeiro devemos introduzir os conceitos de sistema multimídia e documento multimídia.<br><br> 

              Steinmetz [1] caracteriza um <b>sistem multimídia</b> como aquele que utiliza um conjunto mídias, que ao menos uma mídia seja discreta e uma seja contínua.<br>
              <b>Mídias discretas</b> são aquelas que não mudam sua exibição no decorrer do tempo. Logo, elas também são chamadas de mídias independente de tempo.Exemplos de mídias discretas são textos, imagens e gráficos.<br>
              <b>Mídias contínuas</b> são aquelas que mudam sua exbição no decorrer do tempo. Logo, elas também são chamdas de mídias dependentes de tempo. Exemplos de mídias contínuas são áudios e vídeos.<br><br>

              Também segundo Steinmentz, um <b>documento multimídia</b> é aquele que define como um sistema multímida deve exibir um conjunto de mídias (discretas e contínuas) na forma de uma <b>apresentação multimídia</b>.<br>
              O criador de um documento multímidia é usualmente chamado de <b>autor</b>.<br>        
              Entre outros aspectos, o autor de um documento multimídia defini o <b>sincronismo</b> entre as mídias. Ou seja, ele define o comportamento da exbição das mídias no decorrer do tempo da apresentação.<br>
              O sincronismo é geralmente baseado na apresentação de <b>trechos de mídia</b> contínua ou na interação do usuário. <br>Considere, por exemplo, que a parte de créditos de vídeo inicie no segundo 600. Um sincronimo pode ser definido para que ao iniciar o trecho dos creditos (o vídeo alcance o segundo 600) uma uma imagen de patrocínio seja exibida.<br><br>

              A figura a seguir ilustra a criação e apresentação de um documento multimídia.<br>
              Na <b>criação do documento multimídia</b>, o autor defini as mídias utilizadas e o sincronismo entre elas.<br>
              Na <b>apresentação documento multimídia</b>, um sistema multimídia rcebe o documento multimídia os arquivos de mídia necessários para  realizar a apresentação de acordo com o sincronismo definido pelo autor. Na figura, por exemplo, uma imagem e um audio são apresentação em determinado trecho da apresentação de um video.<br>
              A interface entre o sistema e o usuário é feitas por <b>dispositivos audiovisuais</b>, que apreentam conteúdos das mídias(som e frases) e <b>dispositivos apontador e tecla</b>, que capituram interações de usuário.<br><br>

              <img class='center-block img-thumbnail' style='height: 500px' src='assets/overview1.svg'><br><br>

              [1] <a href='https://www.pearson.com/us/higher-education/product/Steinmetz-Multimedia-Computing-Communications-and-Applications/9780133244359.html'> Steinmetz, R. and Nahrstedt, K. 1995. Multimedia: Computing, Communications and Applications. Prentice Hall.</a></div>`
        },
        {
          type: 'html',
          html: `
              <div class='text-justify'>

              Agora, devemos introduzir o conceito de <b>interações multimodais</b>.<br><br>

              Oviatt [2] define que interação multimodals visa reconhecer interações nas as formas naturais da linguagem humana e comportamento, como fala e gestos.<br>
              Esse tipo de interação foi apoiada pelos recentes avanços em tecnologias de reconhecimento e <b>dispositivos de interação multimodal</b>. 
              Ilustrados a seguir, citamos o uso de microfones para reconhecimento de voz, e dispostivos como LeapMotion e e Microsoft Kinect para reconhecimento de gestos de mão e corpo, respectivamente.<br><br>

              <div class='text-center'>
              <img class='img-thumbnail' style='height: 200px' src='assets/voice.jpg'>
              <img class='img-thumbnail' style='height: 200px' src='assets/leap.jpg'>
              <img class='img-thumbnail' style='height: 200px' src='assets/kinect.jpg'>
              </div><br><br>

              Um <b>sistema multimídia com interações multimodais</b> deve não apenas apresentar as midias ao usuário como também reconhecer interações multimodais.<br>
              Logo, um <b>documento multimídia com interações multimodais</b> deve conter também sincronismos baseados no reconhecimento de interações multimodais.<br><br> Para o reconhecimento dessas interações, o documento multimedia pode se utilziar de descrições multimodais que atraves de uma sintaxe própria definem como reconhcer determinada interação. Por exemplo, uma descrição pode ser em SRGS (Speech Recognition Grammar Specification) para definir o reconhecimento de comandos de voz.<br><br>

              Modificamos a figura anterior, sobre criação e apresentação de um documento multimídia, para considerar agora interações multimodais.<br>
              Nessa nova figura, o autor do documento defini <b>reconhecimentos de interações multimodais</b>, além das mídias e sincronismo.<br>
              Além dos dispositivos audiovisuais para exibição de mídias, o sistema multimídia deve utilizar também <b>dispositivos de interação multimodal</b> para receonhecimentos.<br><br>

              <img class='center-block img-thumbnail' style='height: 500px' src='assets/overview2.svg'><br><br>

              [2] <a href='http://dx.doi.org/10.1201/9781410615862.ch21'>Oviatt, S. 2007. Multimodal Interfaces. Human Computer Interact Handbook. CRC Press, 413–432</a><br>
              [3] <a href='#'> https://www.w3.org/TR/speech-grammar <a>
              </div>`
        },
        {
          type: 'html',
          html: 'Caso esteja de acordo, prossiga.<br>'
        }
      ]
    },
    {
      name: 'blocks',
      title: 'Conceitos multimodais usando abstração de blocos',
      elements: [
        {
          type: 'html',
          html: `<div class='text-justify'>
                    Para melhor ilustrar o desenvolvimento de aplicações multimídia com interações multimodais, utilizaremos a seguir uma <b>descrição aplicações através da abstração de blocos</b>.<br>
                    O desenvolvimento de aplicações baseado em blocos foi popularizado por ferramentas como o <b>MIT Scratch</b>[4] e <b>MIT App Inventor</b>[5]. O primeiro é utilizado para para criar aplicações web, especialmente jogos, e o segundo utilizado para criar aplicações moveis, ambos são ilustratos a seguir.<br><br>

                    <div class='text-center'>
                    <img class='img-thumbnail' style='height: 270px' src='assets/scratch.jpg'>
                    <span style="margin-left:40px"></span>  
                    <img class='img-thumbnail' style='height: 270px' src='assets/appinventor.jpg'>
                    </div><br><br>

                    [4] <a href='#'>scratch.mit.edu </a><br>
                    [5] <a href='#'>appinventor.mit.edu</a><br>

                    </div>`
        },
        {
          type: 'html',
          name: 'conceptsBlocksIntro1',
          html: "<div class='text-justify'>Segue o uso de um sincronismo como blocos.</div>"
        },
        {
          type: 'html',
          name: 'conceptsBlocksIntro2',
          html: "<div class='text-justify'>Segue o uso de um sincronismo como blocos.</div>"
        },
        {
          type: 'html',
          name: 'conceptsBlocksIntro3',
          html: "<div class='text-justify'>Segue o uso de uma mídia, sincronismo e reconhecimento como blocos bloco.</div>"
        },
        {
          type: 'html',
          name: 'conceptsBlocksIntro4',
          html: "<div class='text-justify'>Segue o uso de uma mídia, sincronismo, reconhecimento de usuário como blocos.</div>"
        },
        {
          type: 'html',
          name: 'conceptsTask1Blocks'
        },
        {
          type: 'comment',
          isRequired: true,
          name: 'conceptsTask1Question',
          title: 'Qual o comportamento da aplicação acima?'
        },
        {
          type: 'html',
          name: 'conceptsTask2Blocks'
        },
        {
          type: 'text',
          name: 'conceptsTask2Changes',
          visible: false
        },
        {
          type: 'text',
          name: 'conceptsTask2Result',
          visible: false
        },
        {
          type: 'html',
          name: 'conceptsTask3Blocks'
        },
        {
          type: 'comment',
          isRequired: true,
          name: 'conceptsTask3Question',
          title: 'Qual o comportamento da aplicação acima?'
        },
        {
          type: 'html',
          name: 'conceptsTask4Blocks'
        },
        {
          type: 'text',
          name: 'conceptsTask4Changes',
          visible: false
        },
        {
          type: 'text',
          name: 'conceptsTask4Result',
          visible: false
        }
      ]
    },
    {
      name: 'blocksFeedback',
      elements: [
        {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a utilidade dos conceitos apresentados',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'conceptsFeedbackQuestion1',
              title: 'Os conceitos apresentadados permitem realizar mais facilmente o desenvolmento de aplicações multimodais',
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
              title: 'Os conceitos apresentadados permitem realizar mais rapidamente o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'conceptsFeedbackQuestion3',
              title: 'De modo geral, os conceitos apresentadados são úteis para o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }]
        }, {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a facilidade dos conceitos apresentados',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'conceptsFeedbackQuestion4',
              title: 'Aprender os conceitos é fácil?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'conceptsFeedbackQuestion5',
              title: 'Os conceitos são claros e entendíveis?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'conceptsFeedbackQuestion6',
              title: 'De modo geral, os conceitos apresentadados são fáceis de utilizar?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }]
        }
      ]
    },
    {
      name: 'ncl',
      title: 'Conceitos multimodais em NCL',
      elements: [
        {
          type: 'html',
          html: "A linguagem NCL possui o foco de criar apresentações multimídia interativas.Anteriormente a NCL focava no uso de mídias audiovisuais (por exemplo imagens, vídeo e áudios) e interações por meio de apontador e tecla.<br><br>O exemplo de código a seguir ilustra o uso de novas mídias e interação.<br><br>Um exemplo de mídia NCL comum é o 'mainvideo' (linhas 12-14).<br>Essa media possui um trecho definido pela ancora 'credits'(linhas 13).<br><br>Para adicionar interações multimodais sobre esse video, adicionamos os elementos 'menu' (linhas 15-17) e 'answer' (linhas 19-21).<br>O primeiro define um áudio sintetizado utilizando o arquivo SSML chamado question.ssml (linhas 2-4).<br>O segundo define um reconhecimento de vocês utilizando  o arquivo  SRGS chamado commads.srgs (linhas 7-9).<br><br>Esse áudio sintetizado é definido pelo elo das linhas 23-27.<br>Enquanto que o reconhecimento é definido pelo elo das linhas 28-31.<br>",
          name: 'nclIntro'
        },
        {
          type: 'html',
          html: 'O código a seguir consiste em uma aplicação NCL sem interações multimodais.',
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
          html: 'O aplicação NCL acima foi modificada para permitir interações multimodais. O novo código é apresentado a seguir com as modificações destacadas:',
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
    },
    {
      name: 'nclFeedback',
      elements: [
        {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a utilidade da NCL estendida com conceitos multimodais.',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion1',
              title: 'A NCL estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion2',
              title: 'A NCL estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion3',
              title: 'A NCL estendida aumenta a qualidade no desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion4',
              title: 'A NCL estendida fornece maior controle no desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion5',
              title: 'De modo geral, A NCL estendida é util para realizar o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }
          ]
        }, {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a facilidade do uso da NCL estendida',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion6',
              title: 'Aprender a NCL estendida é fácil?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion7',
              title: 'A NCL estendida é claro e entendível?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'nclFeedbackQuestion8',
              title: 'De modo geral, a NCL estendida é fácil de utilizar?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }]
        }
      ]
    },
    {
      name: 'html',
      title: 'Conceitos multimodais em HTML',
      elements: [
        {
          type: 'html',
          name: 'htmlIntro'
        }
      ]
    },
    {
      name: 'htmlFeedback',
      elements: [
        {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a utilidade da HTML/JavaScrip estendida com conceitos multimodais.',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion1',
              title: 'A HTML/JavaScrip estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion2',
              title: 'A HTML/JavaScrip estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion3',
              title: 'A HTML/JavaScrip estendida aumenta a qualidade no desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion4',
              title: 'A HTML/JavaScrip estendida fornece maior controle no desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion5',
              title: 'De modo geral, a HTML/JavaScript estendida é util para realizar o desenvolmento de aplicações multimodais?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }
          ]
        }, {
          type: 'panel',
          innerIndent: 1,
          title: 'Por favor, nos ajude a compreender a facilidade do uso de HTML/Javascript estendida',
          elements: [
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion6',
              title: 'Aprender a HTML/Javascript estendida é fácil?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion7',
              title: 'A HTML/Javascript estendida é claro e entendível?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            },
            {
              type: 'radiogroup',
              isRequired: true,
              name: 'htmlFeedbackQuestion8',
              title: 'De modo geral, a HTML/Javascript estendida é fácil de utilizar?',
              choices: ['bastante improvável', 'muito improvável', 'pouco improvável', 'indiferente', 'pouco provável', 'muito provável', 'bastante provável']
            }
          ]
        }
      ]
    },
    {
      name: 'comments',
      title: 'Comentários adicionais do entrevistado',
      elements: [
        {
          type: 'comment',
          name: 'commentsQuestion1',
          rows: '9',
          title: {
            en: 'Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou sugestões relacionados ao nosso estudo.'
          }
        },
        {
          type: 'comment',
          name: 'commentsQuestion2',
          rows: '9',
          title: {
            en: 'Adcionalmente, você poderia falar que tipos de aplicações você gostaria de desenvolver com conceitos apresentados nesse questionário.'
          }
        }
      ]
    }
  ]
}

// ----------------------------------------
// intro page
// ----------------------------------------

_data.conceptsBlocks1Xml = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20">
      <field name="id">video_intro</field>
      <value name="src">
        <block type="video" id="OFge%WW-~~.%rZKqZqym">
          <mutation length="1"></mutation>
          <field name="id_area0">creditos</field>
          <field name="begin0">300s</field>
          <field name="end0"></field>
        </block>
      </value>
    </block>
    <block type="media" id="+t:\`jo\`8XnsCt)G;2a5*" x="20" y="156">
      <field name="id">video_centro</field>
      <value name="src">
        <block type="video" id="z4kqvt=PDc7wHJ^_4*_Y">
          <mutation length="1"></mutation>
          <field name="id_area0"></field>
          <field name="begin0"></field>
          <field name="end0"></field>
        </block>
      </value>
    </block>
    <block type="media" id="\`@uz^*4@1j3@rz9Vn* py" x="20" y="295">
      <field name="id">video_praia</field>
      <value name="src">
        <block type="video" id=".+S0jxJ, D, O1Sw~Z\`Uo0">
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
        <block type="image" id="n8jL;6KJe-2c6B~=pPj(">
        </block>
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
        <block type="image" id="fQF^b?g4I,]ah26x]In~">
        </block>
      </value>
    </block>
  </xml>`
_data.conceptsBlocks2Xml = `
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
      <field name="component">video_principal</field>
    </block>
    <block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="550" y="443">
      <value name="conditions">
        <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
          <field name="onbegin">creditos</field>
        </block>
      </value>
      <statement name="actions">
        <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
          <field name="start">img_centro</field>
          <next>
            <block type="start" id=".Pt;)N?Y.:xGz;dDp@+W">
              <field name="start">img_praia</field>
            </block>
          </next>
        </block>
      </statement>
    </block>
    <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="590">
      <value name="conditions">
        <block type="onselection" id="voo~B}yCX+XML3~iOm0r">
          <field name="onselection">img_centro</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
          <field name="stop">video_principal</field>
          <next>
            <block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?">
              <field name="stop">img_centro</field>
              <next>
                <block type="stop" id="xz194KXLw:HdJABl^)[9">
                  <field name="stop">img_praia</field>
                  <next>
                    <block type="start" id="Wo67TbqF5]_pN(b1R3D_">
                      <field name="start">video_centro</field>
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
          <field name="onselection">img_praia</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
          <field name="stop">video_principal</field>
          <next>
            <block type="stop" id="=6LVnQ^v7.gTbQiBB2rM">
              <field name="stop">img_centro</field>
              <next>
                <block type="stop" id="1UR0{9!iy~vJx~m2prd4">
                  <field name="stop">video_praia</field>
                  <next>
                    <block type="start" id="BZ#wUT/p=J}}s(q}Us7Z">
                      <field name="start">video_praia</field>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </xml>`
_data.conceptsBlocks3Xml = `
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
    <block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="446">
      <field name="id">voz</field>
      <value name="src">
        <block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3">
          <mutation length="2"></mutation>
          <field name="id_area0">voz_centro</field>
          <field name="label0">mostre centro</field>
          <field name="id_area1">voz_praia</field>
          <field name="label1">mostre praia</field>
        </block>
      </value>
    </block>
    <block type="port" id="+ p - MtE:D * clWz(7oX7Hg" x="20" y="622">
      <field name="component">video_principal</field>
    </block>
    <block type="link" id="% 6sP% 0di, O * v % qS % d\`(\`" x="550" y="636">
      <value name="conditions">
        <block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D">
          <field name="onbegin">creditos</field>
        </block>
      </value>
      <statement name="actions">
        <block type="start" id="UEqL{b=Ws2G#w}+xMV%m">
          <field name="start">img_centro</field>
          <next>
            <block type="start" id=".Pt;)N?Y.:xGz;dDp@+W">
              <field name="start">img_praia</field>
            </block>
          </next>
        </block>
      </statement>
    </block>
    <block type="port" id="kj!MgSL@c5_TE,IF#xe$" x="20" y="707">
      <field name="component">voz</field>
    </block>
    <block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="795">
      <value name="conditions">
        <block type="onrecognize" id="IokIu//km+7L0Y@Nioi[">
          <field name="onrecognize">voz_centro</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="4(:vxHKc1ivMD9TqKrTd">
          <field name="stop">video_principal</field>
          <next>
            <block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?">
              <field name="stop">img_centro</field>
              <next>
                <block type="stop" id="xz194KXLw:HdJABl^)[9">
                  <field name="stop">img_praia</field>
                  <next>
                    <block type="start" id="Wo67TbqF5]_pN(b1R3D_">
                      <field name="start">video_centro</field>
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
          <field name="onrecognize">voz_praia</field>
        </block>
      </value>
      <statement name="actions">
        <block type="stop" id="qh{EZTXTYXj5QRw:x+l#">
          <field name="stop">video_principal</field>
          <next>
            <block type="stop" id="=6LVnQ^v7.gTbQiBB2rM">
              <field name="stop">img_centro</field>
              <next>
                <block type="stop" id="1UR0{9!iy~vJx~m2prd4">
                  <field name="stop">video_praia</field>
                  <next>
                    <block type="start" id="BZ#wUT/p=J}}s(q}Us7Z">
                      <field name="start">video_praia</field>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </xml>`
_data.conceptsBlocks4Xml = `<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20">
    <value name="src">
      <block type="image" id="LHprn9YiDsg/Nlglks0f"></block>
    </value>
  </block>
</xml>`
_data.conceptsTask1Xml = `<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20">
    <value name="src">
      <block type="image" id="LHprn9YiDsg/Nlglks0f"></block>
    </value>
  </block>
</xml>`
_data.conceptsTask3Xml = `<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20">
    <value name="src">
      <block type="image" id="LHprn9YiDsg/Nlglks0f"></block>
    </value>
  </block>
</xml>`

// ----------------------------------------
//  ncl page
// ----------------------------------------

_data.nclCode1 = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false;"><![CDATA[
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
  ]]></script>`

_data.nclCode2 = `
  <script type="syntaxhighlighter" class="brush: xml; toolbar: false; highlight: [11,12,13,14,15,16,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]"><![CDATA[
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
  </ncl>
  ]]></script>`

// ----------------------------------------
// html page functions
// ----------------------------------------
