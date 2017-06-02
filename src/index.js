// ----------------------------------------
// nclblocks config
// ----------------------------------------

Blockly.pathToBlockly = 'nclblocks/';

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

// ----------------------------------------
// survey create
// ----------------------------------------

$("#surveyContainer").Survey({
  model: _survey,
  css: _survey_css,
  onAfterRenderPage: on_render_page,
  onAfterRenderQuestion: on_render_question,
  onServerValidateQuestions: on_validate_questions
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

function on_validate_questions(survey, options) {
  if (_survey.currentPage.name == "concepts") {
    if (_concepts_task1_workspace.getAllBlocks().length) {
      concepts_task1_save_result();
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

function on_render_page(target_survey, page_and_html) {
  window.scrollTo(0, 0);
}

function on_render_question(target_survey, question_and_html) {
  switch (question_and_html.question.name) {
    case "concepts_blocks_intro1":
      concepts_blocks1_inject();
      break;
    case "concepts_blocks_intro2":
      concepts_blocks2_inject();
      break;
    case "concepts_blocks_intro3":
      concepts_blocks3_inject();
      break;
    case "concepts_blocks_intro4":
      concepts_blocks4_inject();
      break;
    case "concepts_blocks_intro5":
      concepts_blocks5_inject();
      break;
    case "concepts_task1":
      concepts_task1_inject();
      break;
    case "ncl_code1":
      ncl_code1_inject();
      break;
    case "ncl_code2":
      ncl_code2_inject();
      break;
  }
}

// ----------------------------------------
// concepts page addtions
// ----------------------------------------

function concepts_blocks1_inject() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro1").idValue;
  var height = 200;
  var blocks1 =
    `<xml id="startBlocks" style="display: none">
    <block type="media" inline="false" x="`+ height * 2 + `" y="` + height / 2 + `"></block>
    </xml>`;
  nclblocks_inject(question_id, "", blocks1, true, false, height + "px");
}

function concepts_blocks2_inject() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro2").idValue;
  var height = 200;
  var blocks1 =
    `<xml id="startBlocks" style="display: none">
    <block type="media" inline="false" x="`+ height * 2 + `" y="` + height / 2 + `"></block>
    </xml>`;
  nclblocks_inject(question_id, "", blocks1, true, false, height + "px");
}

function concepts_blocks3_inject() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro3").idValue;
  var height = 200;
  var blocks1 =
    `<xml id="startBlocks" style="display: none">
    <block type="media" inline="false" x="`+ height * 2 + `" y="` + height / 2 + `"></block>
    </xml>`;
  nclblocks_inject(question_id, "", blocks1, true, false, height + "px");
}

function concepts_blocks4_inject() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro4").idValue;
  var height = 200;
  var blocks1 =
    `<xml id="startBlocks" style="display: none">
    <block type="media" inline="false" x="`+ height * 2 + `" y="` + height / 2 + `"></block>
    </xml>`;
  nclblocks_inject(question_id, "", blocks1, true, false, height + "px");
}

function concepts_blocks5_inject() {
  var question_id = _survey.getQuestionByName("concepts_blocks_intro5").idValue;
  var height = 200;
  var blocks1 =
    `<xml id="startBlocks" style="display: none">
    <block type="media" inline="false" x="`+ height * 2 + `" y="` + height / 2 + `"></block>
    </xml>`;
  nclblocks_inject(question_id, "", blocks1, true, false, height + "px");
}


function concepts_task1_save_changes(primaryEvent) {
  var saved_json_str = _survey.getQuestionByName("concepts_task1_changes").value;
  var json_from_event = primaryEvent.toJson();
  var json_to_save;

  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    json_to_save = JSON.parse(saved_json_str);
  }
  json_to_save.changes.push(json_from_event);
  _survey.getQuestionByName("concepts_task1_changes").value = JSON.stringify(json_to_save);
}

function concepts_task1_save_result() {
  var xml = Blockly.Xml.workspaceToDom(_concepts_task1_workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  _survey.getQuestionByName("concepts_task1_result").value = xml_text;
}

function concepts_task1_inject() {

  var question_id = _survey.getQuestionByName("concepts_task1").idValue;
  _concepts_task1_workspace = nclblocks_inject(question_id, NclBlocks.defaultToolbox, "", false, true, "800px");
  _concepts_task1_workspace.addChangeListener(concepts_task1_save_changes);
}

// ----------------------------------------
//  ncl page functions
// ----------------------------------------

function ncl_code1_inject() {
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

function ncl_code2_inject() {
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

