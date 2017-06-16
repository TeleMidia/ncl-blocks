// ----------------------------------------
// nclblocks config
// ----------------------------------------

var _pathToBlockly = "nclblocks/";

// ----------------------------------------
// survey config
// ----------------------------------------

Survey.surveyLocalization.locales["en"] = {
  requiredError: "Por favor, responda a pergunta.",
  invalidEmail: "Por favor, entre com um email valido.",
  progressText: "Página {0} de {1}",
};
Survey.Survey.cssType = "bootstrap";

var _survey = new Survey.Model(_surveyJSON);
var _survey_css = {
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

var _msg_empty_block_task = "Por favor, preencha com blocos.";
var _concepts_task1_workspace;
var _concepts_task2_workspace;
var _concepts_task3_workspace;
var _concepts_task4_workspace;

// ----------------------------------------
// survey create
// ----------------------------------------

$("#surveyContainer").Survey({
  model: _survey,
  css: _survey_css,
  onAfterRenderPage: onRenderPage,
  onAfterRenderQuestion: onRenderQuestion,
  onServerValidateQuestions: onValidateQuestions
});

// ----------------------------------------
// survey page jump
// ----------------------------------------

$("#complete-btn").click(function () {
  _survey.doComplete();
});
if ($('#surveyPageNo').length) {
  for (var i = 0; i < _survey.pages.length; i++) {
    $("<option />")
      .attr("value", i)
      .html(_survey.pages[i].name)
      .appendTo("#surveyPageNo");
  }
}
$("#surveyPageNo").change(function () {
  _survey.currentPageNo = this.value;
});
$("#surveyPageNo").val(2).change();

// ----------------------------------------
// survey listeners
// ----------------------------------------

function onValidateQuestions(survey, options) {
  if (_survey.currentPage.name == "concepts") {
    if (_concepts_task1_workspace.getAllBlocks().length) {
      saveConceptsTask1Result();
    } else {
      var block = _survey.getQuestionByName("concepts_task1");
      var block_div_selector = "#blockly_" + block.idValue;
      var error_div_id = block.idValue + "_error";
      var error_div_selector = "#" + error_div_id;
      if (!$(error_div_selector).length) {
        $(block_div_selector).prepend("<div id='" + error_div_id + "' class='label label-danger'>" + _msg_empty_block_task + "</div>");
      }
      return true;
    }
  }
  options.complete();
}

function onRenderPage(target_survey, page_and_html) {
  window.scrollTo(0, 0);
}

function onRenderQuestion(target_survey, question_and_html) {
  switch (question_and_html.question.name) {
    case "concepts_blocks_intro1":
      injectConceptsBlocks1();
      break;
    case "concepts_blocks_intro2":
      injectConceptsBlocks2();
      break;
    case "concepts_blocks_intro3":
      injectConceptsBlocks3();
      break;
    case "concepts_blocks_intro4":
      injectConceptsBlocks4();
      break;
    case "concepts_blocks_intro5":
      injectConceptsBlocks5();
      break;
    case "concepts_task1":
      injectConceptsTask1();
      break;
    case "concepts_task2":
      injectConceptsTask2();
      break;
    case "concepts_task3":
      injectConceptsTask3();
      break;
    case "concepts_task4":
      injectConceptsTask4();
      break;
    case "ncl_code1":
      injectNclCode1();
      break;
    case "ncl_code2":
      injectNclCode2();
      break;
  }
}

// ----------------------------------------
// concepts page addtions
// ----------------------------------------
function calculateBlockHight(level, height_one_block) {
  var block_padding = 20;
  if (!level)
    return block_padding;
  else
    return block_padding * (1 + level) + height_one_block * level;
}

function alignBlocksXML(xml, height_one_block) {
  xml_x_aligned = xml.replace(/x=\"[0-9]*\"/g, 'x="' + 0 + '"');
  block_level = 0;
  function replaceHight(match) {
    ret = calculateBlockHight(block_level, height_one_block);
    block_level++;
    return 'y="' + ret + '"';
  }
  ret = xml_x_aligned.replace(/y=\"[0-9]*\"/g, replaceHight);
  return ret;
}

function injectConceptsBlocks1() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro1").idValue;
  var blocks_xml = `<xml><block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="38" y="18"><field name="id">video_intro</field><value name="src"><block type="video" id="OFge%WW-~~.%rZKqZqym"><mutation length="1"></mutation><field name="id_area0">creditos0</field><field name="begin0">300s</field><field name="end0"></field></block></value></block><block type="media" id="+t:\`jo\`8XnsCt)G;2a5*" x="45" y="156"><field name="id">video_centro</field><value name="src"><block type="video" id="z4kqvt=PDc7wHJ^_4*_Y"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="\`@uz^*4@1j3@rz9Vn* py" x="51" y="295"><field name="id">video_praia</field><value name="src"><block type="video" id=".+S0jxJ, D, O1Sw~Z\`Uo0"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block></xml>`;
  blocks_xml = alignBlocksXML(blocks_xml, 120);
  height = calculateBlockHight(3, 120);
  NclBlocks.injectInDiv(_pathToBlockly, question_id, height + 'px', blocks_xml, true);
}

function injectConceptsBlocks2() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro2").idValue;
  var blocks_xml =
    `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="38" y="18"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block>
    </xml>`;
  blocks_xml = alignBlocksXML(blocks_xml, 80);
  height = calculateBlockHight(1, 80);
  NclBlocks.injectInDiv(_pathToBlockly, question_id, height + 'px', blocks_xml,
    true);
}

function injectConceptsBlocks3() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro3").idValue;
  var blocks_xml =
    `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="38" y="18"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block>
    </xml>`;
  blocks_xml = alignBlocksXML(blocks_xml, 80);
  height = calculateBlockHight(1, 80);
  NclBlocks.injectInDiv(_pathToBlockly, question_id, height + 'px', blocks_xml, true);
}

function injectConceptsBlocks4() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro4").idValue;
  var blocks_xml =
    `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="38" y="18"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block>
    </xml>`;
  blocks_xml = alignBlocksXML(blocks_xml, 80);
  height = calculateBlockHight(1, 80);
  NclBlocks.injectInDiv(_pathToBlockly, question_id, height + 'px', blocks_xml, true);
}

function injectConceptsBlocks5() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro5").idValue;
  var blocks_xml =
    `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="38" y="18"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block>
    </xml>`;
  blocks_xml = alignBlocksXML(blocks_xml, 80);
  height = calculateBlockHight(1, 80);
  NclBlocks.injectInDiv(_pathToBlockly, question_id, height + 'px', blocks_xml, true);
}

function saveConceptsTask1Changes(primaryEvent) {
  var saved_json_str = _survey.getQuestionByName("concepts_task1_changes").value;
  var json_from_event = primaryEvent.toJson();
  var json_to_save;

  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    json_to_save = JSON.parse(saved_json_str);
  }
  json_to_save.changes.push(json_from_event);
  // console.log(json_from_event);
  // console.log(Blockly.Xml.workspaceToDom(_concepts_task1_workspace));
  _survey.getQuestionByName("concepts_task1_changes").value = JSON.stringify(json_to_save);
}

function saveConceptsTask1Result() {
  var xml = Blockly.Xml.workspaceToDom(_concepts_task1_workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  // console.log(xml_text);
  _survey.getQuestionByName("concepts_task1_result").value = xml_text;
}

function injectConceptsTask1() {

  var question_id = _survey.getQuestionByName("concepts_task1").idValue;
  _concepts_task1_workspace = NclBlocks.injectInDiv(_pathToBlockly, question_id, "800px");
  _concepts_task1_workspace.addChangeListener(saveConceptsTask1Changes);
}

function injectConceptsTask2() {

  var question_id = _survey.getQuestionByName("concepts_task2").idValue;
  _concepts_task2_workspace = NclBlocks.injectInDiv(_pathToBlockly, question_id, "800px");
  // _concepts_task2_workspace.addChangeListener(saveConceptsTask1Changes);
}

function injectConceptsTask3() {

  var question_id = _survey.getQuestionByName("concepts_task3").idValue;
  _concepts_task3_workspace = NclBlocks.injectInDiv(_pathToBlockly, question_id, "800px");
  // _concepts_task2_workspace.addChangeListener(saveConceptsTask1Changes);
}

function injectConceptsTask4() {

  var question_id = _survey.getQuestionByName("concepts_task4").idValue;
  _concepts_task4_workspace = NclBlocks.injectInDiv(_pathToBlockly, question_id, "800px");
  // _concepts_task2_workspace.addChangeListener(saveConceptsTask1Changes);
}

// ----------------------------------------
//  ncl page functions
// ----------------------------------------

function injectNclCode1() {
  var question_id = _survey.getQuestionByName("ncl_code1").idValue;
  var question_div_selector = "#" + question_id;
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
  $(question_div_selector).append(code);
  SyntaxHighlighter.highlight();
}

function injectNclCode2() {
  var question_id = _survey.getQuestionByName("ncl_code2").idValue;
  var question_div_selector = "#" + question_id;
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
  $(question_div_selector).append(code);
  SyntaxHighlighter.highlight();
}

// ----------------------------------------
// html page functions
// ----------------------------------------

