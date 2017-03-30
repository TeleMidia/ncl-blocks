var surveyJSON = { pageNextText: "seguir", pages: [{ name: "termo", questions: [{ type: "html", name: "termo", html: "<div class='bs-callout bs-callout-info'>O TeleMídia, Grupo de Pesquisa do Departamento de informática da PUC-Rio, desenvolve pesquisa científica nas áreas de Sistemas Multimídia/Hipermídia e Comunicação de Dados Multimídia. Em particular, Sistemas de TV Digital, terrestre e IPTV, têm sido foco de pesquisa e inovação do laboratório nos últimos anos. <br>\n<br>\nConvidamos a você a participar de um de nossos estudos. \nTrata-se da avaliação de uma pesquisa intitulada de \"novas interações de usuario em linguagens multimedia\". <br>\nEla NÃO se destinar a avaliar seus conhecimentos e sim para avaliar o resultado de nossa pesquisa.<br>\n<br>\n<br>\nPara prosseguirmos, pedimos seu consentimento para realizar a avaliação descrita acima, fornecendo a você algumas informações adicionais.<br>\n- Os dados coletados destinam-se estritamente a atividades de pesquisa e desenvolvimento, e somente os pesquisadores do TeleMídia têm acesso à integra do material resultante da avaliação.<br>\n- A divulgação dos resultados de nossa pesquisa em foros científicos e/ou pedagógicos pauta-se no respeito à privacidade, e o anonimato dos participantes é preservado em quaisquer materiais que elaboramos.<br>\n<br>\n<br> <div id='blocklyDiv' style='height: 600px; width: 100%;'></div> </div>" }, { type: "text", name: "nome", title: "Caso esteja de acordo, insira seu nome no campo a seguir e prossiga." }], title: "Termo de concentimento" }, { name: "perfil", questions: [{ type: "radiogroup", name: "experiencia NCL", title: "Qual sua experiencia com a linguagem NCL?", choices: [{ value: "1", text: "1 (nenhuma)" }, "2", "3", "4", "5", "6", { value: "7", text: "7 (expert)" }] }, { type: "radiogroup", name: "apps NCL", title: "Quantas aplicações NCL você desenvolveu?", choices: [{ value: "1", text: "1-2" }, { value: "2", text: "3-4" }, { value: "3", text: "5-6" }, { value: "4", text: "6-7" }, { value: "5", text: "7-8" }, { value: "6", text: "8-9" }, { value: "7", text: "10 ou mais" }] }, { type: "radiogroup", name: "experiencia HTML", title: "Qual sua experiencia com a linguagem HTML/JavaScript?", choices: [{ value: "1", text: "1 (nenhuma)" }, "2", "3", "4", "5", "6", { value: "7", text: "7 (expert)" }] }, { type: "radiogroup", name: "apps HTML", title: "Quantas aplicações HTML/JavaScript você desenvolveu?", choices: [{ value: "1", text: "1-2" }, { value: "2", text: "3-4" }, { value: "3", text: "5-6" }, { value: "4", text: "6-7" }, { value: "5", text: "7-8" }, { value: "6", text: "8-9" }, { value: "7", text: "10 ou mais" }] }], title: "Perfil" }, { name: "interações multimodais em autoria multimídia", questions: [{ type: "html", name: "question1" }], title: "introdução a linguagens multimídia" }, { name: "NCL com interações multimodais", questions: [{ type: "html", name: "question2" }] }, { name: "HTML com interações multimodais", questions: [{ type: "html", name: "question3" }] }, { name: "aceitação", questions: [{ type: "html", name: "question4" }], title: "Avaliação final" }], requiredText: "", showProgressBar: "bottom", showQuestionNumbers: "off", surveyPostId: "51d57b85-3813-4a08-801b-4b7e077c1660", title: "Avalição de suporte a interações multimodais em linguagens multimídia" }

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
  "navigationButton": "btn btn-primary"
};

$("#surveyContainer").Survey({ model: survey, css: survey_css });

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
var NCLBLOCKS_USEBODY = true;
var workspace = Blockly.inject('blocklyDiv', {
  media: Blockly.pathToBlockly + 'media/',
  toolbox: toolbox,
  scrollbars: true,
  sounds: true
});
Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlocks), workspace)