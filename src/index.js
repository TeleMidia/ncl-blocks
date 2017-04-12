var surveyJSON = { completeText: "Finalizar estudo", completedHtml: "<div class=\"alert alert-success\" role=\"alert\">\n  <h3>Muito bem!!!\n  Obrigado por sua participação em nosso estudo.</h3>\n<span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"></span>\n</div>", focusFirstQuestionAutomatic: false, locale: "en", pageNextText: "seguir", pagePrevText: "voltar", pages: [{ name: "termo", elements: [{ type: "html", name: "termo", html: "O TeleMídia é um grupo de pesquisa do departamento de Informática da PUC-Rio que desenvolve pesquisas nas áreas de Sistemas Multimídia e Redes de Computadores. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos. \n<br><br>\n\nConvidamos a você a participar de um de nossos estudos, intitulada de \"Interações multimodais em linguagens multimídia\". \n<br>\n<b>Ressaltamos que esse estudo NÃO se destinar a avaliar seus conhecimentos a cerca dos conceitos apresentados, mas sim capturar evidências de nossa pesquisa.</b><br>\n<br>\n\nPara prosseguirmos, pedimos seu consentimento para realizar a avaliação descrita acima, fornecendo a você algumas informações adicionais:\n<ul>\n<li>Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.</li>\n<li>A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em quaisquer materiais que elaboramos.</li>\n</ul>\n<br>\nCaso esteja de acordo, insira seu nome e e-mail nos campos seguir e prossiga.\n<br>" }, { type: "text", name: "nome" }, { type: "text", name: "e-mail", validators: [{ type: "email" }], inputType: "email" }], title: "Termo de concentimento" }, { name: "perfil", elements: [{ type: "radiogroup", name: "xp-ncl", title: "Qual sua experiencia com a linguagem NCL?", choices: [{ value: "1", text: "1 (nenhuma)" }, "2", "3", "4", "5", "6", { value: "7", text: "7 (expert)" }] }, { type: "radiogroup", name: "n-app-ncl", title: "Quantas aplicações NCL você desenvolveu?", choices: [{ value: "1", text: "1-2" }, { value: "2", text: "3-4" }, { value: "3", text: "5-6" }, { value: "4", text: "6-7" }, { value: "5", text: "7-8" }, { value: "6", text: "8-9" }, { value: "7", text: "10 ou mais" }] }, { type: "radiogroup", name: "xp-html", title: "Qual sua experiencia com a linguagem HTML/JavaScript?", choices: [{ value: "1", text: "1 (nenhuma)" }, "2", "3", "4", "5", "6", { value: "7", text: "7 (expert)" }] }, { type: "radiogroup", name: "n-apps-html", title: "Quantas aplicações HTML/JavaScript você desenvolveu?", choices: [{ value: "1", text: "1-2" }, { value: "2", text: "3-4" }, { value: "3", text: "5-6" }, { value: "4", text: "6-7" }, { value: "5", text: "7-8" }, { value: "6", text: "8-9" }, { value: "7", text: "10 ou mais" }] }], title: "Perfil" }, { name: "conceitos-multimodais", elements: [{ type: "html", name: "conceitos-multimodais-task1" }], title: "Conceitos multimodais em linguagens multimídia" }, { name: "conceitos-multimodais-feedback", elements: [{ type: "text", name: "feedback" }], title: "Feedback dos conceitos multimodais em linguagens multimídia" }, { name: "ncl-multimodal", elements: [{ type: "html", name: "ncl-multimodal-intro", html: "A linguagem NCL possui o foco de criar apresentações multimedia interativas.\nAnteriormente a NCL focava no uso de mídias audiovisuais ---como imagens, video e audios--- e interações por meio de mouse e tecla.\n<br>\n<br>\nO exemplo de código a seguir ilustra o uso de novas mídias e interação.\n<br>\n<br>\nUm exemplo de mídia NCL comum é o 'mainvideo' (linhas 12-14). \n<br>Essa media possui um trecho definido pela ancora 'credits'(linhas 13).\n<br>\n<br>\nPara adicionar interações multimodais sobre esse video, adicionamos os elementos 'menu' (linhas 15-17) e 'anwser' (linhas 19-21).\n<br>\nO primeiro define um audio sintetizado utilizando o arquivo SSML chamado question.ssml (linhas 2-4).\n<br>\nO segundo define um reconhecimento de vocês utilizando  o arquivo  SRGS chamado commads.srgs (linhas 7-9).\n<br>\n<br>\nEsse áudio sintetizado é definido pelo elo das linhas 23-27.\n<br>\nEnquanto que o reconhecimento é definido pelo elo das linhas 28-31.\n<br>" }, { type: "html", name: "ncl-multimodal-task1", html: "O código a seguir correste a uma aplicação NCL sem interações multimodais.\n" }, { type: "text", name: "question1", title: " Qual o comportamento da aplicação?" }, { type: "html", name: "ncl-multimodal-task2", html: "O aplicação NCL acima foi modificada para permitir interações multimodais. Seu código segue:\n" }, { type: "text", name: "Qual o novo comportamento da aplicação?" }], title: "Conceitos multimodais em NCL" }, { name: "ncl-multimodal-feedback", elements: [{ type: "text", name: "feedback" }], title: "Feedback dos conceitos multimodais em NCL" }, { name: "html-multimodal", elements: [{ type: "html", name: "html-multimodal-intro" }], title: "Conceitos multimodais em HTML" }, { name: "html-multimodal-feedback", elements: [{ type: "text", name: "feedback" }], title: "Feedback dos conceitos multimodais em NCL" }, { name: "comentarios", elements: [{ type: "comment", name: "Chegamos ao fim de nosso estudo. \nSe desejar, deixe comentários ou sugestões relacionados ao nosso estudo.", rows: "9" }], title: "Comentários adcionais" }], requiredText: "", showProgressBar: "top", showQuestionNumbers: "off", surveyPostId: "51d57b85-3813-4a08-801b-4b7e077c1660", title: "Estudo sobre interações multimodais em linguagens multimídia" }

function inject_conceitos_multimodais_task1(question_id) {
  var question_div_name = "#" + question_id;
  var inject_div_name = "blockly_" + question_id;
  $(question_div_name).append("<div id='" + inject_div_name + "' style='height: 600px; width: 100%;'></div>");

  var toolbox = '<xml id="toolbox" style="display: none">';
  toolbox += '  <category name="entidades">';
  toolbox += '    <block type="media"></block>';
  toolbox += '    <block type="input"></block>';
  toolbox += '    <block type="user"></block>';
  toolbox += '    <block type="link"></block>';
  toolbox += '  </category>';
  toolbox += '  <category name="caracteristicas de usuário">';
  toolbox += '    <block type="headset"></block>';
  toolbox += '    <block type="hand_gesture_sensor"></block>';
  toolbox += '  </category>';
  toolbox += '  <category name="conteúdo de mídia">';
  toolbox += '    <block type="image"></block>';
  toolbox += '    <block type="video"></block>';
  toolbox += '    <block type="ssml"></block>';
  toolbox += '  </category>';
  toolbox += '  <category name="conteúdo de reconhecedor">';
  toolbox += '    <block type="srgs"></block>';
  toolbox += '    <block type="hand_gesture"></block>';
  toolbox += '  </category>';
  toolbox += '  <category name="condições">';
  toolbox += '    <block type="onbegin"></block>';
  toolbox += '    <block type="onend"></block>';
  toolbox += '    <block type="onpause"></block>';
  toolbox += '    <block type="onresume"></block>';
  toolbox += '    <block type="onselection"></block>';
  toolbox += '    <block type="onrecognize"></block>';
  toolbox += '    <block type="onrecognizeuser"></block>';
  toolbox += '    <block type="compoundcondition"></block>';
  toolbox += '  </category>';
  toolbox += '  <category name="ações">';
  toolbox += '    <block type="start"></block>';
  toolbox += '    <block type="stop"></block>';
  toolbox += '    <block type="pause"></block>';
  toolbox += '    <block type="resume"></block>';
  toolbox += '    <block type="set"></block>';
  toolbox += '  </category>';
  toolbox += '</xml>';
  var startBlocks = '<xml id="startBlocks" style="display: none">';
  startBlocks += '<block type="body" inline="false" x="20" y="20"></block>';
  startBlocks += '</xml>';

  Blockly.pathToBlockly = 'nclblocks/'
  Blockly.BlockSvg.START_HAT = true;
  var NCLBLOCKS_USEBODY = false;

  var workspace = Blockly.inject(inject_div_name, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: toolbox,
    scrollbars: true,
    sounds: true
  });
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlocks), workspace)
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
    `<script type="syntaxhighlighter" class="brush: xml; toolbar: false;">
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
    case "ncl-multimodal-task1":
      inject_ncl_multimodal_task1(question_and_html.question.idValue);
      break;
    case "ncl-multimodal-task2":
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

function sendDataToServer(survey) {
  survey.sendResult('51d57b85-3813-4a08-801b-4b7e077c1660');
}

Survey.Survey.cssType = "bootstrap";
var survey = new Survey.Model(surveyJSON);
var survey_css = {
  // root of survey
  "root": "panel panel-default",
  "header": "panel-header text-center breadcrumb",
  "body": "panel-body",
  "footer": "panel-footer",
  // page
  "pageTitle": "page-header text-center breadcrumb",
  "row": "panel panel-default",
  "question": { root: "panel-body", title: "breadcrumb panel-header" },
  "error": {
    "root": "",
    "icon": "glyphicon glyphicon-exclamation-sign",
    "item": "label label-danger"
  },
  "navigationButton": "btn btn-primary"
};

$("#surveyContainer").Survey({
  model: survey,
  css: survey_css,
  onAfterRenderQuestion: onRenderQuestion,
  onComplete: sendDataToServer,
  // onAfterRenderPage: onRenderPage,
  // onRenderPanel: onRenderPanel,
  // onCurrentPageChanged: onPageChanged,
  // onAfterRenderSurvey: onRenderSurvey
});