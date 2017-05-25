var surveyJSON = {
  completeText: "Finalizar estudo",
  completedHtml: "<br><br><br><br><br><br><br><br><br><br><br><br><div class='alert alert-success' role='alert' style='text-align:center;'> <h2>Muito bem!!!Obrigado por sua participação em nosso estudo.</h2><span class='glyphicon glyphicon-thumbs-up' style='font-size: 75px;' aria-hidden='true'>  </span></div>",
  focusFirstQuestionAutomatic: false,
  locale: "en",
  pageNextText: "seguir",
  pagePrevText: "voltar",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "O TeleMídia é um grupo de pesquisa do departamento de Informática da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas Multimídia e Redes de Computadores. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos. <br><br>Convidamos a você a participar de um de nosso estudo sobre <i>Interações multimodais em linguagens multimídia</i>. <br><br><b>Ressaltamos que esse estudo NÃO se destinar a avaliar seus conhecimentos acerca dos conceitos apresentados, mas sim capturar evidências de nossa pesquisa.</b><br><br>Para prosseguirmos, pedimos seu consentimento para realizarmos esse estudo e informamos que:<ul><li>Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.</li><li>A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em qualquer material publicado.</li></ul><br>Caso esteja de acordo, insira seu nome e email nos campos a seguir e prossiga.<br>",
          name: "termo"
        },
        {
          type: "text",
          isRequired: true,
          name: "nome"
        },
        {
          type: "text",
          isRequired: true,
          name: "email",
          inputType: "email",
          validators: [
            {
              type: "email"
            }
          ]
        }
      ],
      name: "termo",
      title: "Termo de consentimento"
    },
    {
      elements: [
        {
          type: "rating",
          isRequired: true,
          name: "profile_q1",
          title: "Qual seu conhecimento no uso da linguagem NCL?",
          rateValues: [
            {
              value: "0",
              text: {
                en: "nenhum"
              }
            },
            {
              value: "1",
              text: {
                en: "muito pouco"
              }
            }, {
              value: "2",
              text: {
                en: "pouco"
              }
            },
            {
              value: "3",
              text: {
                en: "razoável"
              }
            },
            {
              value: "4",
              text: {
                en: "alto"
              }
            },
            {
              value: "5",
              text: {
                en: "muito alto"
              }
            },
            {
              value: "6",
              text: {
                en: "expert"
              }
            }
          ]
        },
        {
          type: "rating",
          isRequired: true,
          name: "profile_q2",
          title: "Quantas aplicações NCL você desenvolveu?",
          visibleIf: "{profile_q1} > 0",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0"
              }
            }, {
              value: "1",
              text: {
                en: "1-2"
              }
            }, {
              value: "2",
              text: {
                en: "3-4"
              }
            }, {
              value: "3",
              text: {
                en: "4-5"
              }
            }, {
              value: "4",
              text: {
                en: "5-6"
              }
            }, {
              value: "5",
              text: {
                en: "7-8"
              }
            }, {
              value: "6",
              text: {
                en: "8 ou mais"
              }
            }
          ]
        },
        {
          type: "rating",
          isRequired: true,
          name: "profile_q3",
          title: "Qual seu conhecimento no uso de HTML/JavaScript?",
          rateValues: [
            {
              value: "0",
              text: {
                en: "nenhum"
              }
            },
            {
              value: "1",
              text: {
                en: "muito pouco"
              }
            }, {
              value: "2",
              text: {
                en: "pouco"
              }
            },
            {
              value: "3",
              text: {
                en: "razoável"
              }
            },
            {
              value: "4",
              text: {
                en: "alto"
              }
            },
            {
              value: "5",
              text: {
                en: "muito alto"
              }
            },
            {
              value: "6",
              text: {
                en: "expert"
              }
            }
          ]
        },
        {
          type: "rating",
          isRequired: true,
          name: "profile_q4",
          title: "Quantas aplicações HTML/JavaScript você desenvolveu?",
          visibleIf: "{profile_q3} > 0",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0"
              }
            }, {
              value: "1",
              text: {
                en: "1-2"
              }
            }, {
              value: "2",
              text: {
                en: "3-4"
              }
            }, {
              value: "3",
              text: {
                en: "4-5"
              }
            }, {
              value: "4",
              text: {
                en: "5-6"
              }
            }, {
              value: "5",
              text: {
                en: "7-8"
              }
            }, {
              value: "6",
              text: {
                en: "8 ou mais"
              }
            }
          ]
        }
      ],
      name: "perfil",
      title: "Perfil"
    },
    {
      elements: [
        {
          type: "html",
          html: "<div class='text-justify'> Primeiro devemos introduzir os conceitos de multimídia e documentos multimídia.<br><br> Steinmetz [1] caracteriza a multimídia como o uso conjunto de pelo menos uma mídia discreta e uma contínua. Mídias discretas são aquelas que não mudam com tempo ao serem exibidas e são também chamadas de mídias independente de tempo. Exemplos de mídias discretas são textos, imagens e gráficos. Mídias contínuas mudam com o tempo ao serem exibidas e também são chamdas de mídias dependentes de tempo.  Exemplos de mídias contínuas são áudios, vídeos e animações. <br><br> Um documento multimídia define como diferentes mídias (discretas e contínuas) são exibidas na forma de uma apresentação multimídia. Entres outros aspectos, um documento defini sincronismo das mídias, que consiste no comportamento das mídias ao longo do tempo da apresentação e dado interações de usuário. <br><br> A figura a seguir ilustra a criação e apresentação de um documento multimídia. Na criação, o autor do documento defini as mídias e o sincronismo. Em seguida, um sistema multimídia processa esse documento e apresenta ao usuario considerando o sincronismo definido pelo autor. Esse sistema utiliza de dispositivos audiovisuais para exibição de mídias e dispositivos de teclado e mouse para receber interações de usuário. <br><br> <img class='center-block img-thumbnail' style='height: 500px' src='assets/overview1.svg'><br><br>[1] R. Steinmetz and K. Nahrstedt. Multimedia: Computing, Communications and Applications. Prentice Hall, 1995. </div>"
        },
        {
          type: "html",
          html: "<div class='text-justify'> Agora, vamos introduzir o conceito de interações multimodais. <br><br> Oviatt [2] define  que interação multimodal visa o reconhecimento de interações baseadas em formas naturais de linguagem e comportamento humanos. <br><br> Esse tipo de interação foi apoiado pelos recentes avanços nas tecnologias e dispositivos multimodais, como o reconhecimento de fala, gestos de mão e corporais. Ilustrados a seguir, exemplos de dispositivos multimodais são o LeapMotion para gestos de mão e Microsoft Kinect para reconhecimento de gestos coporais. <br><br> <div class='text-center'> <img class='img-thumbnail' style='height: 200px' src='assets/leap.jpg'> <img class='img-thumbnail' style='height: 200px' src='assets/kinect.jpg'> </div> <br><br> A figura anterior sobre criação e apresentação de um documento multimídia foi atualizada para quando documento utiliza interações multimodais. Na criação, o autor do documento defini as mídias, o sincronismo e os reconhecimentos de interações multimodais. Em seguida, um sistema multimídia processa esse documento, apresenta as midias ao usuario e espera reconhecimentos de usuário. Esse sistema utiliza de dispositivos audiovisuais para exibição de mídias e dispositivos de interação multimodal. <br><br> <img class='center-block img-thumbnail' style='height: 500px' src='assets/overview2.svg'><br><br> [2] Oviatt S (2007) Multimodal Interfaces. Hum-Comput Interact Handb. CRC Press, 413–432 </div>"
        },
        {
          type: "html",
          name: "concepts_blocks1",
        },
        {
          type: "text",
          name: "concepts_blocks1_changes",
          visible: false
        },
        {
          type: "text",
          name: "concepts_blocks1_inserted",
          visible: false
        }
      ],
      name: "concepts",
      title: "Conceitos multimodais em linguagens multimídia"
    },
    {
      name: "concepts_feedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade dos conceitos apresentados",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "concepts_feedback_q1",
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
              name: "concepts_feedback_q2",
              title: "Os conceitos apresentadados permitem realizar mais rapidamente o desenvolmento de aplicações multimodais?",
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
              name: "concepts_feedback_q3",
              title: "De modo geral, os conceitos apresentadados são úteis para o desenvolmento de aplicações multimodais?",
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
            }]
        }, {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a facilidade dos conceitos apresentados",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "concepts_feedback_q4",
              title: "Aprender os conceitos é fácil?",
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
              name: "concepts_feedback_q5",
              title: "Os conceitos são claros e entendíveis?",
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
              name: "concepts_feedback_q6",
              title: "De modo geral, os conceitos apresentadados são fáceis de utilizar?",
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
            }]
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: "A linguagem NCL possui o foco de criar apresentações multimídia interativas.Anteriormente a NCL focava no uso de mídias audiovisuais (por exemplo imagens, vídeo e áudios) e interações por meio de apontador e tecla.<br><br>O exemplo de código a seguir ilustra o uso de novas mídias e interação.<br><br>Um exemplo de mídia NCL comum é o 'mainvideo' (linhas 12-14).<br>Essa media possui um trecho definido pela ancora 'credits'(linhas 13).<br><br>Para adicionar interações multimodais sobre esse video, adicionamos os elementos 'menu' (linhas 15-17) e 'answer' (linhas 19-21).<br>O primeiro define um áudio sintetizado utilizando o arquivo SSML chamado question.ssml (linhas 2-4).<br>O segundo define um reconhecimento de vocês utilizando  o arquivo  SRGS chamado commads.srgs (linhas 7-9).<br><br>Esse áudio sintetizado é definido pelo elo das linhas 23-27.<br>Enquanto que o reconhecimento é definido pelo elo das linhas 28-31.<br>",
          name: "ncl_intro"
        },
        {
          type: "html",
          html: "O código a seguir consiste em uma aplicação NCL sem interações multimodais.",
          name: "ncl_code1"
        },
        {
          type: "comment",
          isRequired: true,
          name: "ncl_q1",
          rows: "9",
          title: "Qual o comportamento da aplicação?"
        },
        {
          type: "html",
          html: "O aplicação NCL acima foi modificada para permitir interações multimodais. O novo código é apresentado a seguir com as modificações destacadas:",
          name: "ncl_code2"
        },
        {
          type: "comment",
          isRequired: true,
          name: "ncl_q2",
          rows: "9",
          title: "Qual o novo comportamento da aplicação?"
        }
      ],
      name: "ncl",
      title: "Conceitos multimodais em NCL"
    },
    {
      name: "ncl_feedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade da NCL estendida com conceitos multimodais.",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "ncl_feedback_q1",
              title: "A NCL estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais",
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
              name: "ncl_feedback_q2",
              title: "A NCL estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?",
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
              name: "ncl_feedback_q3",
              title: "A NCL estendida aumenta a qualidade no desenvolmento de aplicações multimodais?",
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
              name: "ncl_feedback_q4",
              title: "A NCL estendida fornece maior controle no desenvolmento de aplicações multimodais?",
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
              name: "ncl_feedback_q5",
              title: "De modo geral, A NCL estendida é util para realizar o desenvolmento de aplicações multimodais?",
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
              name: "ncl_feedback_q6",
              title: "Aprender a NCL estendida é fácil?",
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
              name: "ncl_feedback_q7",
              title: "A NCL estendida é claro e entendível?",
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
              name: "ncl_feedback_q8",
              title: "De modo geral, a NCL estendida é fácil de utilizar?",
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
            }]
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          name: "html_intro"
        }
      ],
      name: "html",
      title: "Conceitos multimodais em HTML"
    },
    {
      name: "html_feedback",
      elements: [
        {
          type: "panel",
          innerIndent: 1,
          title: "Por favor, nos ajude a compreender a utilidade da HTML/JavaScrip estendida com conceitos multimodais.",
          elements: [
            {
              type: "radiogroup",
              isRequired: true,
              name: "html_feedback_q1",
              title: "A HTML/JavaScrip estendida permite realizar mais facilmente o desenvolmento de aplicações multimodais",
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
              name: "html_feedback_q2",
              title: "A HTML/JavaScrip estendida permite realizar mais rapidamente o desenvolmento de aplicações multimodais?",
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
              name: "html_feedback_q3",
              title: "A HTML/JavaScrip estendida aumenta a qualidade no desenvolmento de aplicações multimodais?",
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
              name: "html_feedback_q4",
              title: "A HTML/JavaScrip estendida fornece maior controle no desenvolmento de aplicações multimodais?",
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
              name: "html_feedback_q5",
              title: "De modo geral, a HTML/JavaScript estendida é util para realizar o desenvolmento de aplicações multimodais?",
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
              name: "html_feedback_q6",
              title: "Aprender a HTML/Javascript estendida é fácil?",
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
              name: "html_feedback_q7",
              title: "A HTML/Javascript estendida é claro e entendível?",
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
              name: "html_feedback_q8",
              title: "De modo geral, a HTML/Javascript estendida é fácil de utilizar?",
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
            }
          ]
        }
      ]
    },
    {
      elements: [
        {
          type: "comment",
          name: "comments_q1",
          rows: "9",
          title: {
            en: "Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou sugestões relacionados ao nosso estudo."
          }
        },
        {
          type: "comment",
          name: "comments_q2",
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

// ----------------------------------------------------------------------------
// concepts page addtions
// ----------------------------------------------------------------------------

var workspace_concepts_task1;

function changes_concepts_task1(primaryEvent) {
  var json_from_event = primaryEvent.toJson();
  // console.log(json_from_event);
  var saved_json_str = survey.getQuestionByName("concepts_blocks1_changes").value;
  var json_to_save;
  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    // console.log("stored value=" + saved_json_str);
    json_to_save = JSON.parse(saved_json_str);
  }
  // console.log(json_to_save);
  json_to_save.changes.push(json_from_event);
  survey.getQuestionByName("concepts_blocks1_changes").value = JSON.stringify(json_to_save);
  // console.log(json_to_save);
}

function save_concepts_task1() {
  var xml = Blockly.Xml.workspaceToDom(workspace_concepts_task1);
  var xml_text = Blockly.Xml.domToText(xml);
  survey.getQuestionByName("concepts_blocks1_inserted").value = xml_text;
}

function inject_concepts_task1(question_id) {
  var question_div_name = "#" + question_id;
  var inject_div_name = "blockly_" + question_id;
  $(question_div_name).append("<div id=" + inject_div_name + " class='center-block'  style='height: 600px; width: 1024px;'></div>");

  Blockly.pathToBlockly = 'nclblocks/'
  workspace_concepts_task1 = Blockly.inject(inject_div_name, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: NclBlocks.defaultToolbox,
    scrollbars: true,
    sounds: true
  });
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(NclBlocks.START_WORKSPACE), workspace_concepts_task1);
  workspace_concepts_task1.addChangeListener(changes_concepts_task1);
  window.scrollTo(0, 0);
}

// ----------------------------------------------------------------------------
//  page addtions
// ----------------------------------------------------------------------------

function inject_ncl_task1(question_id) {
  var question_div_name = "#" + question_id;
  var code =
    `<script type="syntaxhighlighter" class="brush: xml; toolbar: false;">
  <![CDATA[
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
  ]]></script>`;
  $(question_div_name).append(code);
  SyntaxHighlighter.highlight();
}

// ----------------------------------------------------------------------------
// html page addtions
// ----------------------------------------------------------------------------


function inject_ncl_task2(question_id) {
  var question_div_name = "#" + question_id;
  var code =
    `<script type="syntaxhighlighter" class="brush: xml; toolbar: false; highlight: [11,12,13,14,15,16,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]">
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
  </ncl>
  ]]></script>`;
  $(question_div_name).append(code);
  SyntaxHighlighter.highlight();
}

// ----------------------------------------------------------------------------
// survey
// ----------------------------------------------------------------------------

function onRenderQuestion(target_survey, question_and_html) {
  // console.log(question_and_html);
  switch (question_and_html.question.name) {
    case "concepts_blocks1":
      inject_concepts_task1(question_and_html.question.idValue);
      break;
    case "ncl_code1":
      inject_ncl_task1(question_and_html.question.idValue);
      break;
    case "ncl_code2":
      inject_ncl_task2(question_and_html.question.idValue);
      break;
  }

}

// function onRenderPage(target_survey, page_and_html) {
//   console.log(page_and_html);
// }

// function onRenderSurvey(target_survey, survey_and_html) {
//   console.log(survey_and_html);
// }

// function onRenderPanel(target_survey, panel_and_html) {
//   console.log(panel_and_html);
// }

function onPageChanged(target_survey, old_and_new_page) {
  // console.log(old_and_new_page);
  // console.log(survey);
  if (old_and_new_page.oldCurrentPage.name == "concepts") {
    save_concepts_task1();
  }
}

var customSurveyStrings = {
  requiredError: "Por favor, responda a pergunta.",
};
Survey.surveyLocalization.locales["en"] = customSurveyStrings;
Survey.Survey.cssType = "bootstrap";

var survey = new Survey.Model(surveyJSON);
var survey_css = {
  // root
  "root": "h4 panel panel-default",
  "header": "h3 text-center breadcrumb",
  "body": "panel-body",
  "footer": "panel-footer text-center ",
  "pageTitle": "h3 text-center breadcrumb",
  // row
  "row": "",
  "question": { root: "h4 panel-body panel panel-default", title: "h4 breadcrumb" },
  "error": {
    "root": "",
    "icon": "glyphicon glyphicon-exclamation-sign",
    "item": "label label-danger"
  },
  "navigationButton": "h4 btn btn-primary"
};

if ($('#surveyPageNo').length) {
  for (var i = 0; i < survey.pages.length; i++) {
    $("<option />")
      .attr("value", i)
      .html(survey.pages[i].name)
      .appendTo("#surveyPageNo");
  }
}

$("#surveyContainer").Survey({
  model: survey,
  css: survey_css,
  onAfterRenderQuestion: onRenderQuestion,
  // onAfterRenderPage: onRenderPage,
  // onRenderPanel: onRenderPanel,
  onCurrentPageChanged: onPageChanged
  // onAfterRenderSurvey: onRenderSurvey
});

survey.currentPageNo = 3;