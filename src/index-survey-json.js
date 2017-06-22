var _surveyJSON = {
  completeText: "Finalizar estudo",
  completedHtml: "<br><br><br><br><br><br><br><br><br><br><br><br><div class='alert alert-success' role='alert' style='text-align:center;'><h2>Muito bem!!!Obrigado por sua participação em nosso estudo.</h2><span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;' aria-hidden='true'></span></div>",
  focusFirstQuestionAutomatic: false,
  locale: "en",
  pageNextText: "seguir",
  pagePrevText: "voltar",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "O TeleMídia é um grupo de pesquisa do departamento de Informática da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas Multimídia e Redes de Computadores. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos.<br><br>Convidamos a você a participar de um de nosso estudo sobre<i>Interações multimodais em linguagens multimídia</i>.<br><br><b>Ressaltamos que esse estudo NÃO se destinar a avaliar seus conhecimentos acerca dos conceitos apresentados, mas sim capturar evidências de nossa pesquisa.</b><br><br>Para prosseguirmos, pedimos seu consentimento para realizarmos esse estudo e informamos que:<ul><li>Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.</li><li>A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em qualquer material publicado.</li></ul><br>Caso esteja de acordo, prossiga.<br>",
          name: "termo"
        }
      ],
      name: "termo",
      title: "Termo de consentimento"
    },
    {
      elements: [
        {
          type: "text",
          isRequired: true,
          name: "name",
          title: "Qual seu nome?",
        },
        {
          type: "text",
          isRequired: true,
          name: "email",
          title: "Qual seu e-mail de contato?",
          validators: [{ type: "email" }]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "formations",
          title: "Qual sua formação (e.g. comptuação, design, pós-gradução informática)?",
          choices: ["gradução em comptuação", "graduação em design", "pós-gradução em computação", "pós-gradução em design"],
          hasOther: true,
          otherText: "outra"
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "profileQuestion1",
          title: "Qual seu conhecimento no desenvolvimento em NCL?",
          choices: ["nenhum", "muito pouco", "pouco", "razoável", "alto", "muito alto", "expert"]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "profileQuestion2",
          title: "Quantas aplicações NCL você desenvolveu?",
          visibleIf: "{profileQuestion1} != nenhum",
          choices: ["0", "1-2", "3-4", "5-6", "7-8", "8 ou mais"]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "sintax",
          title: "Você acredida que a sintaxe da NCL atrapalha ao desenvolver aplicações?",
          choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "profileQuestion3",
          title: "Qual seu conhecimento no desenvolvimento em HTML/JavaScript?",
          choices: ["nenhum", "muito pouco", "pouco", "razoável", "alto", "muito alto", "expert"]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "profileQuestion4",
          title: "Quantas aplicações HTML/JavaScript você desenvolveu?",
          visibleIf: "{profileQuestion3} != nenhum",
          choices: ["0", "1-2", "3-4", "5-6", "7-8", "8 ou mais"]
        },
        {
          type: "radiogroup",
          isRequired: true,
          name: "sintax",
          title: "Você acredida que o desenvolvimento em HTML/JavaScript requisita necessáriamente o uso de bibliotecas de manipulção DOM como jQuery, Zepto e Prototype?",
          choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
        }
      ],
      name: "perfil",
      title: "Dados do Usuário"
    },
    {
      name: "concepts",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Introdução de conceitos multimodais",
          elements: [
            {
              type: "html",
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
              type: "html",
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
            }
          ],
        },
        {
          type: "panel",
          innerIndent: 1,
          title: "Conceitos multimodais usando abstração de blocos",
          elements: [
            {
              type: "html",
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
              type: "html",
              name: "conceptsBlocksIntro1",
              html: "<div class='text-justify'>Segue o uso de um sincronismo como blocos.</div>"
            },
            {
              type: "html",
              name: "conceptsBlocksIntro2",
              html: "<div class='text-justify'>Segue o uso de um sincronismo como blocos.</div>"
            },
            {
              type: "html",
              name: "conceptsBlocksIntro3",
              html: "<div class='text-justify'>Segue o uso de uma mídia, sincronismo e reconhecimento como blocos bloco.</div>"
            },
            {
              type: "html",
              name: "conceptsBlocksIntro4",
              html: "<div class='text-justify'>Segue o uso de uma mídia, sincronismo, reconhecimento de usuário como blocos.</div>"
            },
            {
              type: "html",
              name: "conceptsTask1Blocks",
            },
            {
              type: "comment",
              isRequired: true,
              name: "conceptsTask1Question",
              title: "Qual o comportamento da aplicação acima?"
            },
            {
              type: "html",
              name: "conceptsTask2Blocks",
            },
            {
              type: "text",
              name: "conceptsTask2Changes",
              visible: false
            },
            {
              type: "text",
              name: "conceptsTask2Result",
              visible: false
            },
            {
              type: "html",
              name: "conceptsTask3Blocks",
            },
            {
              type: "comment",
              isRequired: true,
              name: "conceptsTask3Question",
              title: "Qual o comportamento da aplicação acima?"
            },
            {
              type: "html",
              name: "conceptsTask4Blocks",
            },
            {
              type: "text",
              name: "conceptsTask4Changes",
              visible: false
            },
            {
              type: "text",
              name: "conceptsTask4Result",
              visible: false
            }
          ],
        }
      ]
    },
    {
      name: "conceptsFeedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade dos conceitos apresentados",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion1",
              title: "Os conceitos apresentadados permitem realizar mais facilmente o desenvolmento de aplicações multimodais",
              choices: [
                {
                  value: "0",
                  text: {
                    en: "bastante improvável"
                  }
                }, {
                  value: "1",
                  text: {
                    en: "muito improvável"
                  }
                }, {
                  value: "2",
                  text: {
                    en: "pouco improvável"
                  }
                }, {
                  value: "3",
                  text: {
                    en: "indiferente"
                  }
                }, {
                  value: "4",
                  text: {
                    en: "pouco provável"
                  }
                }, {
                  value: "5",
                  text: {
                    en: "muito provável"
                  }
                }, {
                  value: "6",
                  text: {
                    en: "bastante provável"
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion2",
              title: "Os conceitos apresentadados permitem realizar mais rapidamente o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion3",
              title: "De modo geral, os conceitos apresentadados são úteis para o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }]
        }, {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a facilidade dos conceitos apresentados",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion4",
              title: "Aprender os conceitos é fácil?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion5",
              title: "Os conceitos são claros e entendíveis?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "conceptsFeedbackQuestion6",
              title: "De modo geral, os conceitos apresentadados são fáceis de utilizar?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }]
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: "A linguagem NCL possui o foco de criar apresentações multimídia interativas.Anteriormente a NCL focava no uso de mídias audiovisuais (por exemplo imagens, vídeo e áudios) e interações por meio de apontador e tecla.<br><br>O exemplo de código a seguir ilustra o uso de novas mídias e interação.<br><br>Um exemplo de mídia NCL comum é o 'mainvideo' (linhas 12-14).<br>Essa media possui um trecho definido pela ancora 'credits'(linhas 13).<br><br>Para adicionar interações multimodais sobre esse video, adicionamos os elementos 'menu' (linhas 15-17) e 'answer' (linhas 19-21).<br>O primeiro define um áudio sintetizado utilizando o arquivo SSML chamado question.ssml (linhas 2-4).<br>O segundo define um reconhecimento de vocês utilizando  o arquivo  SRGS chamado commads.srgs (linhas 7-9).<br><br>Esse áudio sintetizado é definido pelo elo das linhas 23-27.<br>Enquanto que o reconhecimento é definido pelo elo das linhas 28-31.<br>",
          name: "nclIntro"
        },
        {
          type: "html",
          html: "O código a seguir consiste em uma aplicação NCL sem interações multimodais.",
          name: "nclCode1"
        },
        {
          type: "comment",
          isRequired: true,
          name: "nclQuestion1",
          rows: "9",
          title: "Qual o comportamento da aplicação?"
        },
        {
          type: "html",
          html: "O aplicação NCL acima foi modificada para permitir interações multimodais. O novo código é apresentado a seguir com as modificações destacadas:",
          name: "nclCode2"
        },
        {
          type: "comment",
          isRequired: true,
          name: "nclQuestion2",
          rows: "9",
          title: "Qual o novo comportamento da aplicação?"
        }
      ],
      name: "ncl",
      title: "Conceitos multimodais em NCL"
    },
    {
      name: "nclFeedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade da NCL estendida com conceitos multimodais.",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion1",
              title: "A NCL estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion2",
              title: "A NCL estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion3",
              title: "A NCL estendida aumenta a qualidade no desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion4",
              title: "A NCL estendida fornece maior controle no desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion5",
              title: "De modo geral, A NCL estendida é util para realizar o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }
          ]
        }, {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a facilidade do uso da NCL estendida",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion6",
              title: "Aprender a NCL estendida é fácil?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion7",
              title: "A NCL estendida é claro e entendível?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "nclFeedbackQuestion8",
              title: "De modo geral, a NCL estendida é fácil de utilizar?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }]
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          name: "htmlIntro"
        }
      ],
      name: "html",
      title: "Conceitos multimodais em HTML"
    },
    {
      name: "htmlFeedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade da HTML/JavaScrip estendida com conceitos multimodais.",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion1",
              title: "A HTML/JavaScrip estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion2",
              title: "A HTML/JavaScrip estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion3",
              title: "A HTML/JavaScrip estendida aumenta a qualidade no desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion4",
              title: "A HTML/JavaScrip estendida fornece maior controle no desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion5",
              title: "De modo geral, a HTML/JavaScript estendida é util para realizar o desenvolmento de aplicações multimodais?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }
          ]
        }, {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a facilidade do uso de HTML/Javascript estendida",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion6",
              title: "Aprender a HTML/Javascript estendida é fácil?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion7",
              title: "A HTML/Javascript estendida é claro e entendível?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            },
            {
              type: "radiogroup",
              isRequired: true,
              name: "htmlFeedbackQuestion8",
              title: "De modo geral, a HTML/Javascript estendida é fácil de utilizar?",
              choices: ["bastante improvável", "muito improvável", "pouco improvável", "indiferente", "pouco provável", "muito provável", "bastante provável"]
            }
          ]
        }
      ]
    },
    {
      elements: [
        {
          type: "comment",
          name: "commentsQuestion1",
          rows: "9",
          title: {
            en: "Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou sugestões relacionados ao nosso estudo."
          }
        },
        {
          type: "comment",
          name: "commentsQuestion2",
          rows: "9",
          title: {
            en: "Adcionalmente, você poderia falar que tipos de aplicações você gostaria de desenvolver com conceitos apresentados nesse questionário."
          }
        }
      ],
      name: "comments",
      title: "Comentários adicionais"
    }
  ],
  requiredText: "",
  showProgressBar: "top",
  showQuestionNumbers: "off",
  surveyPostId: "51d57b85-3813-4a08-801b-4b7e077c1660",
  title: "Estudo sobre interações multimodais em linguagens multimídia"
}