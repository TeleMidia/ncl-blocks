goog.require('Blockly.Blocks');

NclBlocks = {};
NclBlocks.Msg = {};
NclBlocks.Icons = {};

// messsages

NclBlocks.Msg.BODY = "aplicação";
NclBlocks.Msg.PORT = "início da aplicação"
NclBlocks.Msg.PORT_LABEL = "quando iniciar aplicação inicie";
NclBlocks.Msg.MEDIA = "mídia";
NclBlocks.Msg.SRC = "conteúdo";
NclBlocks.Msg.MEDIAS = "mídias";
NclBlocks.Msg.INPUT = "reconhecedor";
NclBlocks.Msg.INPUTS = "reconhecedores";
NclBlocks.Msg.VIDEO = "vídeo";
NclBlocks.Msg.VIDEO_ANCHOR = "define trecho inicio, fim=";
NclBlocks.Msg.VIDEO_ITEM = "trecho do vídeo";
NclBlocks.Msg.IMAGE = "imagem";
NclBlocks.Msg.SSML = "texto para sintetização";
NclBlocks.Msg.SSML_ANCHOR = "sintetiza frase=";
NclBlocks.Msg.SSML_ITEM = "frase a sintetizar";
NclBlocks.Msg.SRGS = "comandos de voz";
NclBlocks.Msg.SRGS_ANCHOR = "reconhece frase=";
NclBlocks.Msg.SRGS_ITEM = "frase a reconhecer";
NclBlocks.Msg.HAND_GESTURE = "gestos de mão";
NclBlocks.Msg.HAND_GESTURE_ANCHOR = "reconhece gesto=";
NclBlocks.Msg.HAND_GESTURE_ITEM = "gesto a reconhecer";
NclBlocks.Msg.LINK = "sincronismo";
NclBlocks.Msg.LINKS = "sincronismos";
NclBlocks.Msg.WHEN = "quando=";
NclBlocks.Msg.DO = "faça=";
NclBlocks.Msg.USER = "usuário";
NclBlocks.Msg.USERS = "usuário";
NclBlocks.Msg.DEVICE = "dispositivo";
NclBlocks.Msg.DEVICES = "dispositivos";
NclBlocks.Msg.LEAP = "sensor de gestos de mão";
NclBlocks.Msg.MICROFONE = "microfone";
NclBlocks.Msg.CONDITION = "condição";
NclBlocks.Msg.CONDITIONS = "condições";
NclBlocks.Msg.ONRECOGNIZE = 'reconhecer';
NclBlocks.Msg.ONRECOGNIZE_FROM_USER = 'do usuário';
NclBlocks.Msg.ONBEGIN = "iniciar"
NclBlocks.Msg.ONEND = "terminar"
NclBlocks.Msg.ONPAUSE = "pausar"
NclBlocks.Msg.ONRESUME = "resumir"
NclBlocks.Msg.ONSELECTION = "selecionar"
NclBlocks.Msg.SEQ = 'sequencia';
NclBlocks.Msg.AND = 'todos entre';
NclBlocks.Msg.OR = 'qualquer entre';
NclBlocks.Msg.ACTION = "ação";
NclBlocks.Msg.ACTIONS = "ações";
NclBlocks.Msg.START = "inicie"
NclBlocks.Msg.STOP = "termine"
NclBlocks.Msg.PAUSE = "pause"
NclBlocks.Msg.RESUME = "resuma"
NclBlocks.Msg.SET = "atribua"

// icons

NclBlocks.Icons.video = 'media/icon-video.png';
NclBlocks.Icons.image = 'media/icon-image.png';
NclBlocks.Icons.ssml = 'media/ssml.png';
NclBlocks.Icons.srgs = 'media/srgs.png';
NclBlocks.Icons.hand_gesture = 'media/hand-gesture.png';
NclBlocks.Icons.port = 'media/icon-link.png';
NclBlocks.Icons.link = 'media/icon-link.png';
NclBlocks.Icons.hand_gesture_sensor = 'media/hand-gesture-sensor.png';
NclBlocks.Icons.microfone = 'media/headset.png';
NclBlocks.Icons.onrecognize = 'media/icon-bind-onselection.png';
NclBlocks.Icons.onbegin = 'media/icon-bind-onbegin.png';
NclBlocks.Icons.onend = 'media/icon-bind-onend.png';
NclBlocks.Icons.onpause = 'media/icon-bind-onpause.png';
NclBlocks.Icons.onresume = 'media/icon-bind-onresume.png';
NclBlocks.Icons.onselection = 'media/icon-bind-onselection.png';
NclBlocks.Icons.start = 'media/icon-bind-start.png';
NclBlocks.Icons.stop = 'media/icon-bind-stop.png';
NclBlocks.Icons.pause = 'media/icon-bind-pause.png';
NclBlocks.Icons.resume = 'media/icon-bind-resume.png';
NclBlocks.Icons.set = 'media/icon-bind-set.png';

// colours

NclBlocks.USE_CHECK = false;
NclBlocks.BODY_COLOUR = 20;
NclBlocks.MEDIA_COLOUR = 100;
NclBlocks.INPUT_COLOUR = 150;
NclBlocks.USER_COLOUR = 40;
NclBlocks.LINK_COLOUR = 260;
NclBlocks.PORT_COLOUR = 260;
NclBlocks.CONDITION_COLOUR = 280;
NclBlocks.ACTION_COLOUR = 230;

// configuration

Blockly.BlockSvg.START_HAT = true;
NclBlocks.USE_BODY = false;
NclBlocks.START_WORKSPACE = "";
NclBlocks.defaultToolbox =
  `<xml id="toolbox" style="display: none">
  <category name="`+ NclBlocks.Msg.MEDIA + `">
    <block type="media"></block>
    <block type="image"></block>
    <block type="video"></block>
    <block type="ssml"></block>
  </category>
  <category name="`+ NclBlocks.Msg.INPUT + `">
    <block type="input"></block>
    <block type="srgs"></block>
    <block type="hand_gesture"></block>
  </category>
  <category name="`+ NclBlocks.Msg.USER + `">
    <block type="user"></block>
    <block type="headset"></block>
    <block type="hand_gesture_sensor"></block>
  </category>
  <category name="`+ NclBlocks.Msg.LINK + `">
    <block type="port"></block>
    <block type="link"></block>
  </category>
  <category name="`+ NclBlocks.Msg.CONDITIONS + `">
    <block type="onbegin"></block>
    <block type="onend"></block>
    <block type="onpause"></block>
    <block type="onresume"></block>
    <block type="onselection"></block>
    <block type="onrecognize"></block>
    <block type="onrecognizeuser"></block>
    <block type="compoundcondition"></block>
  </category>
  <category name="`+ NclBlocks.Msg.ACTIONS + `">
    <block type="start"></block>
    <block type="stop"></block>
    <block type="pause"></block>
    <block type="resume"></block>
    <block type="set"></block>
  </category>
</xml>`;

// utils functions

function nclblocks_use_body() {
  Blockly.BlockSvg.START_HAT = false;
  NclBlocks.USE_BODY = true;
  NclBlocks.START_WORKSPACE =
    `<xml id="startBlocks" style="display: none">
    <block type="body" inline="false" x="20" y="20"></block>
    </xml>`;
}

function nclblocks_inject_as_child_div(parend_div_id, toolbox, start_workspace, readOnly, scrollbars) {
  var inject_div_name = "blockly_" + parend_div_id;
  var workspace;

  // create div and configure auto resize
  var blocklyArea = document.getElementById(parend_div_id);
  var html_to_insert = "<div id=" + inject_div_name + " class='center-block' style='height: 600px;'></div>";
  blocklyArea.innerHTML += html_to_insert;
  var padding = window.getComputedStyle(blocklyArea, null).getPropertyValue('padding-right');
  var blocklyDiv = document.getElementById(inject_div_name);
  var onresize = function (e) {
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth - 2 * padding + 'px';
  };
  window.addEventListener('resize', onresize, false);
  
  // inject
  workspace = Blockly.inject(inject_div_name, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: toolbox,
    scrollbars: scrollbars,
    readOnly: readOnly,
    sounds: true
  });
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(start_workspace), workspace);

  onresize();
  Blockly.svgResize(workspace);

  return workspace;
}


// body

Blockly.Blocks.media_item = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.MEDIA);
    this.setPreviousStatement(true, ['media_item']);
    this.setNextStatement(true, ['media_item', 'input_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.input_item = {
  init: function () {
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.INPUT);
    this.setPreviousStatement(true, ['media_item', 'input_item']);
    this.setNextStatement(true, ['input_item', 'link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.link_item = {
  init: function () {
    this.setColour(NclBlocks.LINK_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.LINK);
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.body = {
  init: function () {
    this.setColour(NclBlocks.BODY_COLOUR);
    this.appendDummyInput().appendField('--' + NclBlocks.Msg.BODY + '--');
    this.appendValueInput('MEDIA0')
      .setCheck(NclBlocks.USE_CHECK ? 'media' : null)
      .appendField(NclBlocks.Msg.MEDIAS + ':');
    this.appendValueInput('INPUT0')
      .setCheck(NclBlocks.USE_CHECK ? 'input' : null)
      .appendField(NclBlocks.Msg.INPUTS + ':');
    this.appendValueInput('USER0')
      .setCheck(NclBlocks.USE_CHECK ? 'user' : null)
      .appendField(NclBlocks.Msg.USERS + ':');
    this.appendValueInput('LINK0')
      .setCheck(NclBlocks.USE_CHECK ? 'link' : null)
      .appendField(NclBlocks.Msg.LINKS + ':');
    this.setMutator(new Blockly.Mutator(['media_item',
      'input_item', 'link_item'
    ]));
    this.mediaCount = 2;
    this.inputCount = 2;
    this.linkCount = 2;
    this.contextMenu = false;
    this.setDeletable(false);
    this.updateShape_();
  },

  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('mediaCount', this.mediaCount);
    container.setAttribute('inputCount', this.inputCount);
    container.setAttribute('linkCount', this.linkCount);
    return container;
  },

  domToMutation: function (xmlElement) {
    this.mediaCount = parseInt(xmlElement.getAttribute('mediaCount'), 10) || 1;
    this.inputCount = parseInt(xmlElement.getAttribute('inputCount'), 10) || 1;
    this.linkCount = parseInt(xmlElement.getAttribute('linkCount'), 10) || 1;
    this.updateShape_();
  },
  // Populate the mutator's dialog with this block's components.
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.setColour(NclBlocks.BODY_COLOUR);
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.mediaCount; i++) {
      var itemBlock = workspace.newBlock('media_item');
      if (i === 0) itemBlock.setMovable(false);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    for (var i = 0; i < this.inputCount; i++) {
      var itemBlock = workspace.newBlock('input_item');
      itemBlock.initSvg();
      if (i === 0) itemBlock.setMovable(false);
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    for (var i = 0; i < this.linkCount; i++) {
      var itemBlock = workspace.newBlock('link_item');
      itemBlock.initSvg();
      if (i === 0) itemBlock.setMovable(false);
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },

  // Reconfigure this block based on the mutator dialog's components.
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var mediaAux = 0,
      inputAux = 0,
      linkAux = 0;
    while (itemBlock) {
      if (itemBlock.type == 'media_item') {
        mediaAux++;
      }
      if (itemBlock.type == 'input_item') {
        inputAux++;
      }
      if (itemBlock.type == 'link_item') {
        linkAux++;
      }
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.mediaCount = mediaAux;
    this.inputCount = inputAux;
    this.linkCount = linkAux;
    this.updateShape_();
  },
  // Store pointers to any connected child blocks.
  saveConnections: function () { },
  updateShape_: function () {
    for (var i = 1; i < this.mediaCount; i++) {
      if (!this.getInput('MEDIA' + i)) {
        this.appendValueInput('MEDIA' + i)
          .setCheck(NclBlocks.USE_CHECK ? 'media' : null);
        this.moveInputBefore('MEDIA' + i, 'INPUT0');
      }
    }
    for (var i = 1; i < this.inputCount; i++) {
      if (!this.getInput('INPUT' + i)) {
        this.appendValueInput('INPUT' + i)
          .setCheck(NclBlocks.USE_CHECK ? 'input' : null);
        this.moveInputBefore('INPUT' + i, 'USER0');
      }
    }
    for (var i = 1; i < this.linkCount; i++) {
      if (!this.getInput('LINK' + i)) {
        this.appendValueInput('LINK' + i)
          .setCheck(NclBlocks.USE_CHECK ? 'link' : null);
      }
    }
  }
};

// media ids

var mediaIds = [
  ['-', '-']
];

function getMediaIds() {
  return mediaIds;
}

function validateMediaId(text) {
  if (text === '') return null;
  for (var i in mediaIds) {
    if (mediaIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.MediaIdFieldText = function (text, opt_validator) {
  Blockly.MediaIdFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.MediaIdFieldText, Blockly.FieldTextInput);

Blockly.MediaIdFieldText.prototype.onFinishEditing_ = function (text) {
  mediaIds.push([text, text]);
};

// input ids

var inputIds = [
  ['-', '-']
];

function getinputIds() {
  return inputIds;
}

function getBothMediaInputIds() {
  ret = mediaIds.concat(inputIds);
  ret.sort().splice(0, 1);
  return ret;
}

function validateInputId(text) {
  if (text === '') return null;
  for (var i in inputIds) {
    if (inputIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.InputIdFieldText = function (text, opt_validator) {
  Blockly.InputIdFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.InputIdFieldText, Blockly.FieldTextInput);

Blockly.InputIdFieldText.prototype.onFinishEditing_ = function (text) {
  inputIds.push([text, text]);
};

// user ids
var userIds = [
  ['-', '-']
];

function getuserIds() {
  return userIds;
}

function validateUserId(text) {
  if (text === '') return null;
  for (var i in userIds) {
    if (userIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.NclUserFieldText = function (text, opt_validator) {
  Blockly.NclUserFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.NclUserFieldText, Blockly.FieldTextInput);

Blockly.NclUserFieldText.prototype.onFinishEditing_ = function (text) {
  userIds.push([text, text]);
};

// media

Blockly.Blocks.media = {
  init: function () {
    this.appendDummyInput()
      .appendField('--' + NclBlocks.Msg.MEDIA + '--');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'media_content' : null)
      .appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId))
      .appendField(', ' + NclBlocks.Msg.SRC + '=');
    this.setInputsInline(false);
    this.setColour(NclBlocks.MEDIA_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'media');
    this.contextMenu = false;
  }
};

// input

Blockly.Blocks.input = {
  init: function () {
    this.appendDummyInput()
      .appendField('--' + NclBlocks.Msg.INPUT + '--');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'input_content' : null)
      .appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId))
      .appendField(', ' + NclBlocks.Msg.SRC + '=');
    this.setInputsInline(false);
    this.setColour(NclBlocks.MEDIA_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'input');
    this.contextMenu = false;
  }
};

// user

Blockly.Blocks.device_item = {
  init: function () {
    this.setColour(NclBlocks.USER_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.DEVICE);
    this.setPreviousStatement(true, ['device_item']);
    this.setNextStatement(true, ['device_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.user = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.user.init = function () {
  this.appendDummyInput()
    .appendField('--' + NclBlocks.Msg.USERS + '--');
  this.appendValueInput('ADD0')
    .appendField('id=')
    .appendField(new Blockly.NclUserFieldText('',
      validateUserId))
    .setCheck(NclBlocks.USE_CHECK ? 'user_content' : null)
    .appendField(', ' + NclBlocks.Msg.DEVICES + '=');
  this.setColour(NclBlocks.USER_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setMutator(new Blockly.Mutator(['device_item']));
  if (NclBlocks.USE_BODY == true) this.setOutput(true, 'user');
  this.contextMenu = false;
};

Blockly.Blocks.user.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.USER_COLOUR);
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('device_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.user.updateShape_ = function () {
  // Add new inputs.
  for (var i = 1; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      var input = this.appendValueInput('ADD' + i);
      input.setCheck(NclBlocks.USE_CHECK ? 'user_content' : null);
    }
  }
  // Remove deleted inputs.
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// port

Blockly.Blocks.port = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.port, 30, 30, '*'))
      .appendField('--' + NclBlocks.Msg.LINK + '--')
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.PORT_LABEL)
      .appendField(new Blockly.FieldDropdown(getBothMediaInputIds), 'NAME');
    this.setInputsInline(false);
    this.setColour(NclBlocks.PORT_COLOUR);
    this.contextMenu = false;
  }
};

// link

Blockly.Blocks.link = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.link, 30, 30, '*'))
      .appendField('--' + NclBlocks.Msg.LINK + '--');
    this.appendValueInput('conditions')
      .setCheck(NclBlocks.USE_CHECK ? ['compoundcondition', 'simplecondition'] : null)
      .appendField(NclBlocks.Msg.WHEN);
    this.appendStatementInput('actions')
      .setCheck(NclBlocks.USE_CHECK ? 'simpleaction' : null)
      .appendField(NclBlocks.Msg.DO);
    this.setInputsInline(false);
    this.setColour(NclBlocks.LINK_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'link');
    this.contextMenu = false;
  }
};

// user contents - headset

Blockly.Blocks.headset = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.microfone, 30, 30, '*'))
      .appendField('--' + NclBlocks.Msg.MICROFONE + '--');
    this.setOutput(true, 'user_content');
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

// user contents - hand_gesture_sensor

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.hand_gesture_sensor,
        30, 30, '*'))
      .appendField('--' + NclBlocks.Msg.LEAP + '--');
    this.setOutput(true, 'user_content');
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

// media contents - image

Blockly.Blocks.image = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.image, 30, 30,
        '*'))
      .appendField('--' + NclBlocks.Msg.IMAGE + '--');
    this.setOutput(true, 'media_content');
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.contextMenu = false;
  }
};

// media contents - ssml

Blockly.Blocks.sentence_item = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.SSML_ITEM);
    this.setPreviousStatement(true, ['sentence_item']);
    this.setNextStatement(true, ['sentence_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.ssml = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.ssml.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.ssml, 30, 30, '*'))
    .appendField('--' + NclBlocks.Msg.SSML + '--');
  this.setColour(NclBlocks.MEDIA_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'media_content');
  this.setMutator(new Blockly.Mutator(['sentence_item']));
  this.contextMenu = false;
};

Blockly.Blocks.ssml.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.MEDIA_COLOUR);
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;

  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('sentence_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.ssml.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.ssml.saveConnections = function () { };

Blockly.Blocks.ssml.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.MediaIdFieldText('',
          validateMediaId))
        .appendField(NclBlocks.Msg.SSML_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// media contents - video

Blockly.Blocks.clip_item = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.VIDEO_ITEM);
    this.setPreviousStatement(true, ['clip_item']);
    this.setNextStatement(true, ['clip_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.video = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.video.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.video, 30, 30,
      '*'))
    .appendField('--' + NclBlocks.Msg.VIDEO + '--');
  this.setColour(NclBlocks.MEDIA_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'media_content');
  this.setMutator(new Blockly.Mutator(['clip_item']));
  this.contextMenu = false;
};

Blockly.Blocks.video.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.MEDIA_COLOUR);
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('clip_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.video.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.video.saveConnections = function () { };

Blockly.Blocks.video.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.MediaIdFieldText('',
          validateMediaId))
        .appendField(NclBlocks.Msg.VIDEO_ANCHOR)
        .appendField(new Blockly.FieldNumber(0, 0), 'begin')
        .appendField(',')
        .appendField(new Blockly.FieldNumber(0, 0), 'end');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// input contents - srgs

Blockly.Blocks.recognition_item = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.SRGS_ITEM);
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.srgs = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.srgs.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.srgs, 30, 30, '*'))
    .appendField('--' + NclBlocks.Msg.SRGS + '--');
  this.setColour(NclBlocks.MEDIA_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['recognition_item']));
  this.contextMenu = false;
};

Blockly.Blocks.srgs.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.MEDIA_COLOUR);
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('recognition_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.srgs.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.srgs.saveConnections = function () { };

Blockly.Blocks.srgs.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.InputIdFieldText('',
          validateInputId))
        .appendField(NclBlocks.Msg.SRGS_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// input contents - gesture

Blockly.Blocks.hand_gesture_item = {
  init: function () {
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.HAND_GESTURE_ITEM);
    this.setPreviousStatement(true, ['hand_gesture_item']);
    this.setNextStatement(true, ['hand_gesture_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.hand_gesture = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.hand_gesture.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.hand_gesture, 30, 30,
      '*'))
    .appendField('--' + NclBlocks.Msg.HAND_GESTURE + '--');
  this.setColour(NclBlocks.INPUT_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['hand_gesture_item']));
  this.contextMenu = false;
};

Blockly.Blocks.hand_gesture.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.MEDIA_COLOUR);
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('hand_gesture_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.hand_gesture.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.hand_gesture.saveConnections = function () { };

Blockly.Blocks.hand_gesture.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.FieldTextInput(''), 'id=')
        .appendField(NclBlocks.Msg.HAND_GESTURE_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// conditions

Blockly.Blocks.onbegin = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onbegin, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.ONBEGIN)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onend = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onend, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONEND)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onpause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onpause, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.ONPAUSE)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline('pause');
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onresume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onresume,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRESUME)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onselection = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onselection,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONSELECTION)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onrecognize = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onrecognize,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onrecognize,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME')
      .appendField(NclBlocks.Msg.ONRECOGNIZE_FROM_USER)
      .appendField(new Blockly.FieldDropdown(getuserIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

// compound condition

Blockly.Blocks.condition_item = {
  init: function () {
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.CONDITION);
    this.setPreviousStatement(true, ['condition_item']);
    this.setNextStatement(true, ['condition_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.compoundcondition = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.compoundcondition.init = function () {
  this.appendDummyInput()
    .appendField(
    new Blockly.FieldDropdown([
      [NclBlocks.Msg.SEQ, 'seq'],
      [NclBlocks.Msg.AND, 'and'],
      [NclBlocks.Msg.OR, 'or']
    ]),
    'operator');
  this.setColour(NclBlocks.CONDITION_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'simplecondition');
  this.setMutator(new Blockly.Mutator(['condition_item']));
  this.contextMenu = false;
};

Blockly.Blocks.compoundcondition.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('condition_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.compoundcondition.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendValueInput('ADD' + i);
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// actions

Blockly.Blocks.start = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.start, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.START)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.stop = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.stop, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.STOP)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.pause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.pause, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.PAUSE)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.resume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.resume, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.RESUME)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.set = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.set, 15, 15,
        '*'))
      .appendField(NclBlocks.Msg.SET)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};
