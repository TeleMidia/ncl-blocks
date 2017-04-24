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
          html: "O TeleMídia é um grupo de pesquisa do departamento de Informática da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas Multimídia e Redes de Computadores. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos. \n<br><br>\n\nConvidamos a você a participar de um de nossos estudos, intitulada de \"Interações multimodais em linguagens multimídia\". \n<br>\n<b>Ressaltamos que esse estudo NÃO se destinar a avaliar seus conhecimentos acerca dos conceitos apresentados, mas sim capturar evidências de nossa pesquisa.</b><br>\n<br>\n\nPara prosseguirmos, pedimos seu consentimento para realizar a avaliação descrita acima, fornecendo a você algumas informações adicionais:\n<ul>\n<li>Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.</li>\n<li>A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em quaisquer materiais que elaboramos.</li>\n</ul>\n<br>\nCaso esteja de acordo, insira seu nome e email nos campos seguir e prossiga.\n<br>",
          name: "termo"
        },
        {
          type: "text",
          name: "nome"
        },
        {
          type: "text",
          inputType: "email",
          name: "email",
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
          name: "xp-ncl",
          title: "Qual sua experiencia com a linguagem NCL?",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0 (nenhuma)"
              }
            },
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            {
              value: "7",
              text: {
                en: "7 (expert)"
              }
            }
          ]
        },
        {
          type: "rating",
          name: "n-app-ncl",
          title: "Quantas aplicações NCL você desenvolveu?",
          visibleIf: "{xp-ncl} > 0",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0"
              }
            },
            {
              value: "0",
              text: {
                en: "1-2"
              }
            }, {
              value: "0",
              text: {
                en: "3-4"
              }
            }, {
              value: "0",
              text: {
                en: "4-5"
              }
            }, {
              value: "0",
              text: {
                en: "5-6"
              }
            },
            {
              value: "7",
              text: {
                en: "7 ou mais"
              }
            }
          ]
        },
        {
          type: "rating",
          name: "xp-html",
          title: "Qual sua experiencia com a linguagem HTML/JavaScript?",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0 (nenhuma)"
              }
            },
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            {
              value: "7",
              text: {
                en: "7 (expert)"
              }
            }
          ]
        },
        {
          type: "rating",
          name: "n-apps-html",
          title: "Quantas aplicações HTML/JavaScript você desenvolveu?",
          visibleIf: "{xp-html} > 0",
          rateValues: [
            {
              value: "0",
              text: {
                en: "0"
              }
            },
            {
              value: "0",
              text: {
                en: "1-2"
              }
            }, {
              value: "0",
              text: {
                en: "3-4"
              }
            }, {
              value: "0",
              text: {
                en: "4-5"
              }
            }, {
              value: "0",
              text: {
                en: "5-6"
              }
            },
            {
              value: "7",
              text: {
                en: "7 ou mais"
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
          name: "conceitos-multimodais-intro-1",
          html: "Criação de documentos multimedia é mostrado a seguir. <br><br> <img class='center-block img-thumbnail' width='80%' src='assets/conceitos-multimodais-cycle-1.svg'><br><br> Criação de documentos multimídia com interações multimodais é mostrado a seguir.<br><br> <img class='center-block img-thumbnail'  width='80%' src='assets/conceitos-multimodais-cycle-2.svg'>"
        },
        {
          type: "html",
          name: "conceitos-multimodais-task1",
        }
      ],
      name: "conceitos-multimodais",
      title: "Conceitos multimodais em linguagens multimídia"
    },
    {
      elements: [
        {
          type: "text",
          name: "feedback"
        }
      ],
      name: "conceitos-multimodais-feedback",
      title: "Feedback dos conceitos multimodais em linguagens multimídia"
    },
    {
      elements: [
        {
          type: "html",
          html: "A linguagem NCL possui o foco de criar apresentações multimídia interativas.\nAnteriormente a NCL focava no uso de mídias audiovisuais ---como imagens, vídeo e áudios--- e interações por meio de mouse e tecla.\n<br>\n<br>\nO exemplo de código a seguir ilustra o uso de novas mídias e interação.\n<br>\n<br>\nUm exemplo de mídia NCL comum é o 'mainvideo' (linhas 12-14). \n<br>Essa media possui um trecho definido pela ancora 'credits'(linhas 13).\n<br>\n<br>\nPara adicionar interações multimodais sobre esse video, adicionamos os elementos 'menu' (linhas 15-17) e 'anwser' (linhas 19-21).\n<br>\nO primeiro define um áudio sintetizado utilizando o arquivo SSML chamado question.ssml (linhas 2-4).\n<br>\nO segundo define um reconhecimento de vocês utilizando  o arquivo  SRGS chamado commads.srgs (linhas 7-9).\n<br>\n<br>\nEsse áudio sintetizado é definido pelo elo das linhas 23-27.\n<br>\nEnquanto que o reconhecimento é definido pelo elo das linhas 28-31.\n<br>",
          name: "ncl-multimodal-intro"
        },
        {
          type: "html",
          html: "O código a seguir correste a uma aplicação NCL sem interações multimodais.\n",
          name: "ncl-multimodal-code1"
        },
        {
          type: "comment",
          name: "ncl-multimodal-question1",
          rows: "9",
          title: "Qual o comportamento da aplicação?"
        },
        {
          type: "html",
          html: "O aplicação NCL acima foi modificada para permitir interações multimodais. O novo código é apresentado a seguir com as modificações destacadas:\n",
          name: "ncl-multimodal-code2"
        },
        {
          type: "comment",
          name: "ncl-multimodal-question2",
          rows: "9",
          title: "Qual o novo comportamento da aplicação?"
        }
      ],
      name: "ncl-multimodal",
      title: "Conceitos multimodais em NCL"
    },
    {
      elements: [
        {
          type: "text",
          name: "aceitacao-ncl",
          title: {
            en: "Qual a sua aceitação de conceitos multimodais em NCL"
          }
        }
      ],
      name: "ncl-multimodal-feedback",
      title: "Feedback dos conceitos multimodais em NCL"
    },
    {
      elements: [
        {
          type: "html",
          name: "html-multimodal-intro"
        }
      ],
      name: "html-multimodal",
      title: "Conceitos multimodais em HTML"
    },
    {
      elements: [
        {
          type: "text",
          name: "aceitacao-HTML",
          title: {
            en: "Qual a sua aceitação de conceitos multimodais em HTML"
          }
        }
      ],
      name: "html-multimodal-feedback",
      title: {
        default: "Feedback dos conceitos multimodais em NCL",
        en: "Feedback dos conceitos multimodais em HTML"
      }
    },
    {
      elements: [
        {
          type: "comment",
          name: "comentarios",
          rows: "9",
          title: {
            en: "Chegamos ao fim de nosso estudo. Se desejar, deixe comentários ou sugestões relacionados ao nosso estudo."
          }
        }
      ],
      name: "comentarios",
      title: "Comentários adicionais"
    }
  ],
  requiredText: "",
  showProgressBar: "top",
  showQuestionNumbers: "off",
  surveyPostId: "51d57b85-3813-4a08-801b-4b7e077c1660",
  title: "Estudo sobre interações multimodais em linguagens multimídia"
}

function inject_conceitos_multimodais_task1(question_id) {
  var question_div_name = "#" + question_id;
  var inject_div_name = "blockly_" + question_id;
  $(question_div_name).append("<div id='" + inject_div_name + "' style='height: 600px; width: 100%;'></div>");

  NCLBLOCKS_USEBODY = false;
  var startBlocks = "";
  if (NCLBLOCKS_USEBODY) {
    var startBlocks = '<xml id="startBlocks" style="display: none">';
    startBlocks += '<block type="body" inline="false" x="20" y="20"></block>';
    startBlocks += '</xml>';
  }
  Blockly.pathToBlockly = 'nclblocks/'
  Blockly.BlockSvg.START_HAT = true;

  var workspace = Blockly.inject(inject_div_name, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: defaultNCLBlocksToolbox,
    scrollbars: true,
    sounds: true
  });
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlocks), workspace)
  window.scrollTo(0, 0);
}
function inject_ncl_multimodal_task1(question_id) {
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

function inject_ncl_multimodal_task2(question_id) {
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

function onRenderQuestion(target_survey, question_and_html) {
  // console.log(question_and_html);
  switch (question_and_html.question.name) {
    case "conceitos-multimodais-task1":
      inject_conceitos_multimodais_task1(question_and_html.question.idValue);
      break;
    case "ncl-multimodal-code1":
      inject_ncl_multimodal_task1(question_and_html.question.idValue);
      break;
    case "ncl-multimodal-code2":
      inject_ncl_multimodal_task2(question_and_html.question.idValue);
      break;
  }

}

function onRenderPage(target_survey, page_and_html) {
  console.log(page_and_html);
}

function onRenderSurvey(target_survey, survey_and_html) {
  console.log(survey_and_html);
}

function onRenderPanel(target_survey, panel_and_html) {
  console.log(panel_and_html);
}

function onPageChanged(target_survey, old_and_new_page) {
  console.log(old_and_new_page);
}

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

$("#surveyContainer").Survey({
  model: survey,
  css: survey_css,
  onAfterRenderQuestion: onRenderQuestion
  // onAfterRenderPage: onRenderPage,
  // onRenderPanel: onRenderPanel,
  // onCurrentPageChanged: onPageChanged,
  // onAfterRenderSurvey: onRenderSurvey
});