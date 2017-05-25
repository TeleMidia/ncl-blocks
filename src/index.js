// ----------------------------------------
// concepts page addtions
// ----------------------------------------

var concepts_task1_workspace;

function concepts_task1_save_changes(primaryEvent) {
  var json_from_event = primaryEvent.toJson();
  var saved_json_str = survey.getQuestionByName("concepts_task1_changes").value;
  var json_to_save;

  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    json_to_save = JSON.parse(saved_json_str);
  }
  json_to_save.changes.push(json_from_event);
  survey.getQuestionByName("concepts_task1_changes").value = JSON.stringify(json_to_save);
}

function concepts_task1_save_result() {
  var xml = Blockly.Xml.workspaceToDom(concepts_task1_workspace);
  var xml_text = Blockly.Xml.domToText(xml);

  survey.getQuestionByName("concepts_task1_result").value = xml_text;
}

function concepts_task1_inject(question_id) {
  var question_div_name = "#" + question_id;
  var inject_div_name = "blockly_" + question_id;

  $(question_div_name).append("<div id=" + inject_div_name + " class='center-block'  style='height: 600px; width: 1024px;'></div>");
  Blockly.pathToBlockly = 'nclblocks/'
  concepts_task1_workspace = Blockly.inject(inject_div_name, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: NclBlocks.defaultToolbox,
    scrollbars: true,
    sounds: true
  });
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(NclBlocks.START_WORKSPACE), concepts_task1_workspace);
  concepts_task1_workspace.addChangeListener(concepts_task1_save_changes);
  window.scrollTo(0, 0);
}

// ----------------------------------------
//  page addtions
// ----------------------------------------

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

// ----------------------------------------
// html page addtions
// ----------------------------------------

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

// ----------------------------------------
// survey listeners
// ----------------------------------------

function onRenderQuestion(target_survey, question_and_html) {
  switch (question_and_html.question.name) {
    case "concepts_task1":
      concepts_task1_inject(question_and_html.question.idValue);
      break;
    case "ncl_code1":
      inject_ncl_task1(question_and_html.question.idValue);
      break;
    case "ncl_code2":
      inject_ncl_task2(question_and_html.question.idValue);
      break;
  }

}

function onPageChanged(target_survey, old_and_new_page) {
  if (old_and_new_page.oldCurrentPage.name == "concepts") {
    concepts_task1_save_result();
  }
  window.scrollTo(0, 0);
}

// ----------------------------------------
// survey config
// ----------------------------------------

var survey, survey_css;

Survey.surveyLocalization.locales["en"] = {
  requiredError: "Por favor, responda a pergunta.",
};
Survey.Survey.cssType = "bootstrap";
survey = new Survey.Model(surveyJSON);
survey_css = {
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
  onAfterRenderQuestion: onRenderQuestion,
  onCurrentPageChanged: onPageChanged
});

// ----------------------------------------
// survey page jump
// ----------------------------------------

$("#complete-btn").click(function () {
  survey.doComplete();
});

if ($('#surveyPageNo').length) {
  for (var i = 0; i < survey.pages.length; i++) {
    $("<option />")
      .attr("value", i)
      .html(survey.pages[i].name)
      .appendTo("#surveyPageNo");
  }
}
survey.currentPageNo = 2;