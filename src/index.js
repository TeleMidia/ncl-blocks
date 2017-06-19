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

function insertRequiredErrorInBlocks(block_div_id) {
  var block_div_selector = "#blockly_" + block_div_id;
  var error_div_id = block_div_id + "_error";
  var error_div_selector = "#" + error_div_id;
  if (!$(error_div_selector).length) {
    $(block_div_selector).prepend("<div id='" + error_div_id + "' class='label label-danger'>" + _msg_empty_block_task + "</div>");
  }
}

function onValidateQuestions(survey, options) {
  switch (_survey.currentPage.name) {
    case "concepts":
      if (!_concepts_task2_workspace.getAllBlocks().length)
        insertRequiredErrorInBlocks(_survey.getQuestionByName("concepts_task2").idValue);
      if (!_concepts_task4_workspace.getAllBlocks().length)
        insertRequiredErrorInBlocks(_survey.getQuestionByName("concepts_task4").idValue);
      return true;
  }
  options.complete();
}

function onRenderPage(target_survey, page_and_html) {
  window.scrollTo(0, 0);
}

function onRenderQuestion(target_survey, question_and_html) {
  var question_id = question_and_html.question.idValue;
  var question_name = question_and_html.question.name;
  switch (question_name) {
    case "concepts_blocks_intro1":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(3, 130), _concepts_blocks1_xml, true);
      break;
    case "concepts_blocks_intro2":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(5, 140), _concepts_blocks2_xml,
        true);
      break;
    case "concepts_blocks_intro3":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(6, 150), _concepts_blocks3_xml, true);
      break;
    case "concepts_blocks_intro4":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(1, 80), _concepts_blocks4_xml, true);
      break;
    case "concepts_task1":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(1, 80), _concepts_task1_xml, true);
      break;
    case "concepts_task2":
      _concepts_task2_workspace = NclBlocks.injectInDiv(_pathToBlockly,
        question_id, "800px");
      _concepts_task2_workspace.addChangeListener(saveConceptsTask2Changes)
      break;
    case "concepts_task3":
      NclBlocks.injectInDiv(_pathToBlockly, question_id,
        calculateHeight(1, 80), _concepts_task3_xml, true);
      break;
    case "concepts_task4":
      _concepts_task4_workspace = NclBlocks.injectInDiv(_pathToBlockly,
        question_id, "800px");
      _concepts_task4_workspace.addChangeListener(saveConceptsTask4Changes)
      break;
    case "ncl_code1":
      $("#" + question_id).append(_ncl_code1);
      SyntaxHighlighter.highlight();
      break;
    case "ncl_code2":
      $("#" + question_id).append(_ncl_code2);
      SyntaxHighlighter.highlight();
      break;
  }
}

// ----------------------------------------
// concepts page
// ----------------------------------------

var _concepts_blocks1_xml = `<xml><block type="media" id="s]~V8B!V%oD-X^+]Jpjq" x="20" y="20"><field name="id">video_intro</field><value name="src"><block type="video" id="OFge%WW-~~.%rZKqZqym"><mutation length="1"></mutation><field name="id_area0">creditos0</field><field name="begin0">300s</field><field name="end0"></field></block></value></block><block type="media" id="+t:\`jo\`8XnsCt)G;2a5*" x="20" y="156"><field name="id">video_centro</field><value name="src"><block type="video" id="z4kqvt=PDc7wHJ^_4*_Y"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="\`@uz^*4@1j3@rz9Vn* py" x="20" y="295"><field name="id">video_praia</field><value name="src"><block type="video" id=".+S0jxJ, D, O1Sw~Z\`Uo0"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block></xml>`;
var _concepts_blocks2_xml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20"><field name="id">video_principal</field><value name="src"><block type="video" id="CG[^N,5)TV)0_N#+|cgE"><mutation length="1"></mutation><field name="id_area0">creditos</field><field name="begin0">300s</field><field name="end0"></field></block></value></block><block type="media" id="J0=3=8AB$lViiF[SYu#!" x="20" y="160"><field name="id">video_centro</field><value name="src"><block type="video" id="]70x,I^+Yv!UsVCeeY()"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="548" y="208"><field name="id">img_centro</field><value name="src"><block type="image" id="n8jL;6KJe-2c6B~=pPj("></block></value></block><block type="media" id="IawJU?Sm-z4If\`ixT^_p" x="20" y="301"><field name="id">video_praia</field><value name="src"><block type="video" id="S$1N4E3U+*W_\`=95FUu)"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="K2a)Xd1Ob5$8Ju=7i:DR" x="547" y="353"><field name="id">img_praia</field><value name="src"><block type="image" id="fQF^b?g4I,]ah26x]In~"></block></value></block><block type="port" id="+p-MtE:D*clWz(7oX7Hg" x="20" y="443"><field name="component">video_principal</field></block><block type="link" id="%6sP%0di,O*v%qS%d\`(\`" x="550" y="443"><value name="conditions"><block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D"><field name="onbegin">creditos</field></block></value><statement name="actions"><block type="start" id="UEqL{b=Ws2G#w}+xMV%m"><field name="start">img_centro</field><next><block type="start" id=".Pt;)N?Y.:xGz;dDp@+W"><field name="start">img_praia</field></block></next></block></statement></block><block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="590"><value name="conditions"><block type="onselection" id="voo~B}yCX+XML3~iOm0r"><field name="onselection">img_centro</field></block></value><statement name="actions"><block type="stop" id="4(:vxHKc1ivMD9TqKrTd"><field name="stop">video_principal</field><next><block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?"><field name="stop">img_centro</field><next><block type="stop" id="xz194KXLw:HdJABl^)[9"><field name="stop">img_praia</field><next><block type="start" id="Wo67TbqF5]_pN(b1R3D_"><field name="start">video_centro</field></block></next></block></next></block></next></block></statement></block><block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="550" y="597"><value name="conditions"><block type="onselection" id="O]aL:r0KkCvhs#W\`[}El"><field name="onselection">img_praia</field></block></value><statement name="actions"><block type="stop" id="qh{EZTXTYXj5QRw:x+l#"><field name="stop">video_principal</field><next><block type="stop" id="=6LVnQ^v7.gTbQiBB2rM"><field name="stop">img_centro</field><next><block type="stop" id="1UR0{9!iy~vJx~m2prd4"><field name="stop">video_praia</field><next><block type="start" id="BZ#wUT/p=J}}s(q}Us7Z"><field name="start">video_praia</field></block></next></block></next></block></next></block></statement></block></xml>`;
var _concepts_blocks3_xml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="media" id="DACXRk{ds*},dxviHR(c" x="20" y="20"><field name="id">video_principal</field><value name="src"><block type="video" id="CG[^N,5)TV)0_N#+|cgE"><mutation length="1"></mutation><field name="id_area0">creditos</field><field name="begin0">300s</field><field name="end0"></field></block></value></block><block type="media" id="J0=3=8AB$lViiF[SYu#!" x="20" y="160"><field name="id">video_centro</field><value name="src"><block type="video" id="]70x,I^+Yv!UsVCeeY()"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="PnS;4T$~ftTn7U;nWSZb" x="550" y="208"><field name="id">img_centro</field><value name="src"><block type="image" id="n8jL;6KJe-2c6B~=pPj("></block></value></block><block type="media" id="IawJU?Sm-z4If\`ixT^_p" x="20" y="301"><field name="id">video_praia</field><value name="src"><block type="video" id="S$1N4E3U+*W_\`=95FUu)"><mutation length="1"></mutation><field name="id_area0"></field><field name="begin0"></field><field name="end0"></field></block></value></block><block type="media" id="K2a)Xd1Ob5$8Ju=7i:DR" x="550" y="353"><field name="id">img_praia</field><value name="src"><block type="image" id="fQF^b?g4I,]ah26x]In~"></block></value></block><block type="input" id="ajd0c?1i@etzB;UdMIC*" x="20" y="446"><field name="id">voz</field><value name="src"><block type="srgs" id="N5Lu5_J\`hn-e3lm60 |^3"><mutation length="2"></mutation><field name="id_area0">centro</field><field name="label0">mostre centro</field><field name="id_area1">praia</field><field name="label1">mostre praia</field></block></value></block><block type="port" id="+ p - MtE:D * clWz(7oX7Hg" x="20" y="622"><field name="component">video_principal</field></block><block type="link" id="% 6sP% 0di, O * v % qS % d\`(\`" x="550" y="636"><value name="conditions"><block type="onbegin" id="(H8dBhXk6.y#]q%\`UM^D"><field name="onbegin">creditos</field></block></value><statement name="actions"><block type="start" id="UEqL{b=Ws2G#w}+xMV%m"><field name="start">img_centro</field><next><block type="start" id=".Pt;)N?Y.:xGz;dDp@+W"><field name="start">img_praia</field></block></next></block></statement></block><block type="port" id="kj!MgSL@c5_TE,IF#xe$" x="20" y="707"><field name="component">voz</field></block><block type="link" id="M)^!XeQ3fwhKEwGTcoGK" x="20" y="795"><value name="conditions"><block type="onrecognize" id="IokIu//km+7L0Y@Nioi["><field name="onrecognize">centro</field></block></value><statement name="actions"><block type="stop" id="4(:vxHKc1ivMD9TqKrTd"><field name="stop">video_principal</field><next><block type="stop" id="9Eb$H9^oR7Z)o_g^A7r?"><field name="stop">img_centro</field><next><block type="stop" id="xz194KXLw:HdJABl^)[9"><field name="stop">img_praia</field><next><block type="start" id="Wo67TbqF5]_pN(b1R3D_"><field name="start">video_centro</field></block></next></block></next></block></next></block></statement></block><block type="link" id="BLK@~VH8\`;o!;uMR.^tZ" x="549" y="805"><value name="conditions"><block type="onrecognize" id="[SfTF*!(*0N7]Hv9.tNh"><field name="onrecognize">praia</field></block></value><statement name="actions"><block type="stop" id="qh{EZTXTYXj5QRw:x+l#"><field name="stop">video_principal</field><next><block type="stop" id="=6LVnQ^v7.gTbQiBB2rM"><field name="stop">img_centro</field><next><block type="stop" id="1UR0{9!iy~vJx~m2prd4"><field name="stop">video_praia</field><next><block type="start" id="BZ#wUT/p=J}}s(q}Us7Z"><field name="start">video_praia</field></block></next></block></next></block></next></block></statement></block></xml>`;
var _concepts_blocks4_xml = `<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block></xml>`;
var _concepts_task1_xml = `<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block></xml>`;
var _concepts_task3_xml = `<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="media" id="KZ[g}J_gz%iQCj#u(I:P" x="0" y="20"><value name="src"><block type="image" id="LHprn9YiDsg/Nlglks0f"></block></value></block></xml>`;
var _concepts_task2_workspace;
var _concepts_task4_workspace;

function saveConceptsTask2Changes(primaryEvent) {
  // save conceptsTask2 change
  var saved_json_str = _survey.getQuestionByName("concepts_task2_changes").value;
  var json_from_event = primaryEvent.toJson();
  var json_to_save;

  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    json_to_save = JSON.parse(saved_json_str);
  }
  json_to_save.changes.push(json_from_event);
  // console.log(json_from_event);
  _survey.getQuestionByName("concepts_task2_changes").value = JSON.stringify(json_to_save);

  // save conceptsTask2 result
  var xml = Blockly.Xml.workspaceToDom(_concepts_task2_workspace);
  // console.log(xml));
  var xml_text = Blockly.Xml.domToText(xml);
  _survey.getQuestionByName("concepts_task2_result").value = xml_text;
}

function saveConceptsTask4Changes(primaryEvent) {
  // save conceptsTask2 change
  var saved_json_str = _survey.getQuestionByName("concepts_task4_changes").value;
  var json_from_event = primaryEvent.toJson();
  var json_to_save;

  if (saved_json_str == null) {
    json_to_save = { "changes": [] };
  } else {
    json_to_save = JSON.parse(saved_json_str);
  }
  json_to_save.changes.push(json_from_event);
  console.log(json_from_event);
  _survey.getQuestionByName("concepts_task4_changes").value = JSON.stringify(json_to_save);

  // save conceptsTask2 result
  var xml = Blockly.Xml.workspaceToDom(_concepts_task4_workspace);
  console.log(xml);
  var xml_text = Blockly.Xml.domToText(xml);
  _survey.getQuestionByName("concepts_task4_result").value = xml_text;
}

// ----------------------------------------
//  ncl page
// ----------------------------------------

var _ncl_code1 =
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

var _ncl_code2 =
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

// ----------------------------------------
// html page functions
// ----------------------------------------

