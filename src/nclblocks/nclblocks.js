goog.require('Blockly.Blocks');

NclBlocks = {};

NclBlocks.USE_BODY = false;
NclBlocks.USE_CHECK = false;
NclBlocks.BODY_COLOUR = 20;
NclBlocks.MEDIA_COLOUR = 100;
NclBlocks.INPUT_COLOUR = 150;
NclBlocks.USER_COLOUR = 40;
NclBlocks.LINK_COLOUR = 260;
NclBlocks.PORT_COLOUR = 260;
NclBlocks.CONDITION_COLOUR = 280;
NclBlocks.ACTION_COLOUR = 230;
NclBlocks.START_WORKSPACE = "";

NclBlocks.BODY_STR = "aplicação";
NclBlocks.PORT_STR = "início da aplicação"
NclBlocks.PORT_LABEL_STR = "quando iniciar aplicação inicie";
NclBlocks.MEDIA_STR = "mídia";
NclBlocks.SRC_STR = "conteúdo";
NclBlocks.MEDIAS_STR = "mídias";
NclBlocks.INPUT_STR = "reconhecedor";
NclBlocks.INPUTS_STR = "reconhecedores";
NclBlocks.VIDEO_STR = "vídeo";
NclBlocks.VIDEO_ANCHOR_STR = "define trecho inicio, fim=";
NclBlocks.VIDEO_ITEM_STR = "trecho do vídeo";
NclBlocks.IMAGE_STR = "imagem";
NclBlocks.SSML_STR = "texto para sintetização";
NclBlocks.SSML_ANCHOR_STR = "sintetiza frase=";
NclBlocks.SSML_ITEM_STR = "frase a sintetizar";
NclBlocks.SRGS_STR = "comandos de voz";
NclBlocks.SRGS_ANCHOR_STR = "reconhece frase=";
NclBlocks.SRGS_ITEM_STR = "frase a reconhecer";
NclBlocks.HAND_GESTURE_STR = "gestos de mão";
NclBlocks.HAND_GESTURE_ANCHOR_STR = "reconhece gesto=";
NclBlocks.HAND_GESTURE_ITEM_STR = "gesto a reconhecer";
NclBlocks.LINK_STR = "sincronismo";
NclBlocks.LINKS_STR = "sincronismos";
NclBlocks.WHEN_STR = "quando=";
NclBlocks.DO_STR = "faça=";
NclBlocks.USER_STR = "usuário";
NclBlocks.USERS_STR = "usuário";
NclBlocks.DEVICE_STR = "dispositivo";
NclBlocks.DEVICES_STR = "dispositivos";
NclBlocks.LEAP_STR = "sensor de gestos de mão";
NclBlocks.MICROFONE_STR = "microfone";
NclBlocks.CONDITION_STR = "condição";
NclBlocks.CONDITIONS_STR = "condições";
NclBlocks.ONRECOGNIZE_STR = 'reconhecer';
NclBlocks.ONRECOGNIZE_FROM_USER_STR = 'do usuário';
NclBlocks.ONBEGIN_STR = "iniciar"
NclBlocks.ONEND_STR = "terminar"
NclBlocks.ONPAUSE_STR = "pausar"
NclBlocks.ONRESUME_STR = "resumir"
NclBlocks.ONSELECTION_STR = "selecionar"
NclBlocks.SEQ_STR = 'sequencia';
NclBlocks.AND_STR = 'todos entre';
NclBlocks.OR_STR = 'qualquer entre';
NclBlocks.ACTION_STR = "ação";
NclBlocks.ACTIONS_STR = "ações";
NclBlocks.START_STR = "inicie"
NclBlocks.STOP_STR = "termine"
NclBlocks.PAUSE_STR = "pause"
NclBlocks.RESUME_STR = "resuma"
NclBlocks.SET_STR = "atribua"

Blockly.BlockSvg.START_HAT = true;

function useNclBlocksBody() {
  Blockly.BlockSvg.START_HAT = true;
  NclBlocks.USE_BODY = true;
  NclBlocks.START_WORKSPACE =
    `<xml id="startBlocks" style="display: none">
    <block type="body" inline="false" x="20" y="20"></block>
    </xml>`;
}

// body

Blockly.Blocks.media_item = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.MEDIA_STR);
    this.setPreviousStatement(true, ['media_item']);
    this.setNextStatement(true, ['media_item', 'input_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.input_item = {
  init: function () {
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.INPUT_STR);
    this.setPreviousStatement(true, ['media_item', 'input_item']);
    this.setNextStatement(true, ['input_item', 'link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.link_item = {
  init: function () {
    this.setColour(NclBlocks.LINK_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.LINK_STR);
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.body = {
  init: function () {
    this.setColour(NclBlocks.BODY_COLOUR);
    this.appendDummyInput().appendField('--' + NclBlocks.BODY_STR + '--');
    this.appendValueInput('MEDIA0')
      .setCheck(NclBlocks.USE_CHECK ? 'media' : null)
      .appendField(NclBlocks.MEDIAS_STR + ':');
    this.appendValueInput('INPUT0')
      .setCheck(NclBlocks.USE_CHECK ? 'input' : null)
      .appendField(NclBlocks.INPUTS_STR + ':');
    this.appendValueInput('USER0')
      .setCheck(NclBlocks.USE_CHECK ? 'user' : null)
      .appendField(NclBlocks.USERS_STR + ':');
    this.appendValueInput('LINK0')
      .setCheck(NclBlocks.USE_CHECK ? 'link' : null)
      .appendField(NclBlocks.LINKS_STR + ':');
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
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('--' + NclBlocks.MEDIA_STR + '--');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'media_content' : null)
      .appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId))
      .appendField(', ' + NclBlocks.SRC_STR + '=');
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
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('--' + NclBlocks.INPUT_STR + '--');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'input_content' : null)
      .appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId))
      .appendField(', ' + NclBlocks.SRC_STR + '=');
    this.setInputsInline(false);
    this.setColour(NclBlocks.INPUT_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'input');
    this.contextMenu = false;
  }
};

// user

Blockly.Blocks.device_item = {
  init: function () {
    this.setColour(NclBlocks.USER_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.DEVICE_STR);
    this.setPreviousStatement(true, ['device_item']);
    this.setNextStatement(true, ['device_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.user = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.user.init = function () {
  this.appendDummyInput()
    .appendField('--' + NclBlocks.USERS_STR + '--');
  this.appendValueInput('ADD0')
    .appendField('id=')
    .appendField(new Blockly.NclUserFieldText('',
      validateUserId))
    .setCheck(NclBlocks.USE_CHECK ? 'user_content' : null)
    .appendField(', ' + NclBlocks.DEVICES_STR + '=');
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-link.png', 45, 45, '*'))
      .appendField('--' + NclBlocks.LINK_STR + '--')
    this.appendDummyInput()
      .appendField(NclBlocks.PORT_LABEL_STR)
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
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-link.png', 45, 45, '*'))
      .appendField('--' + NclBlocks.LINK_STR + '--');
    this.appendValueInput('conditions')
      .setCheck(NclBlocks.USE_CHECK ? ['compoundcondition', 'simplecondition'] : null)
      .appendField(NclBlocks.WHEN_STR);
    this.appendStatementInput('actions')
      .setCheck(NclBlocks.USE_CHECK ? 'simpleaction' : null)
      .appendField(NclBlocks.DO_STR);
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
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/headset.png', 45, 45, '*'))
      .appendField('--' + NclBlocks.MICROFONE_STR + '--');
    this.setOutput(true, 'user_content');
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

// user contents - hand_gesture_sensor

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/hand-gesture-sensor.png',
        45, 45, '*'))
      .appendField('--' + NclBlocks.LEAP_STR + '--');
    this.setOutput(true, 'user_content');
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

// media contents - image

Blockly.Blocks.image = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-image.png', 45, 45,
        '*'))
      .appendField('--' + NclBlocks.IMAGE_STR + '--');
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
      .appendField(NclBlocks.SSML_ITEM_STR);
    this.setPreviousStatement(true, ['sentence_item']);
    this.setNextStatement(true, ['sentence_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.ssml = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.ssml.init = function () {
  this.appendDummyInput()
    .setAlign(Blockly.ALIGN_CENTRE)
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/ssml.png', 45, 45, '*'))
    .appendField('--' + NclBlocks.SSML_STR + '--');
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
        .appendField(NclBlocks.SSML_ANCHOR_STR)
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
      .appendField(NclBlocks.VIDEO_ITEM_STR);
    this.setPreviousStatement(true, ['clip_item']);
    this.setNextStatement(true, ['clip_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.video = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.video.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-video.png', 45, 45,
      '*'))
    .appendField('--' + NclBlocks.VIDEO_STR + '--')
    .setAlign(Blockly.ALIGN_CENTRE);
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
        .appendField(NclBlocks.VIDEO_ANCHOR_STR)
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
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.appendDummyInput()
      .appendField(NclBlocks.SRGS_ITEM_STR);
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.srgs = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.srgs.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/srgs.png', 45, 45, '*'))
    .appendField('--' + NclBlocks.SRGS_STR + '--')
    .setAlign(Blockly.ALIGN_CENTRE);
  this.setColour(NclBlocks.INPUT_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['recognition_item']));
  this.contextMenu = false;
};

Blockly.Blocks.srgs.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.INPUT_COLOUR);
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
        .appendField(NclBlocks.SRGS_ANCHOR_STR)
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
      .appendField(NclBlocks.HAND_GESTURE_ITEM_STR);
    this.setPreviousStatement(true, ['hand_gesture_item']);
    this.setNextStatement(true, ['hand_gesture_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.hand_gesture = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.hand_gesture.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/hand-gesture.png', 45, 45,
      '*'))
    .appendField('--' + NclBlocks.HAND_GESTURE_STR + '--')
    .setAlign(Blockly.ALIGN_CENTRE);
  this.setColour(NclBlocks.INPUT_COLOUR);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['hand_gesture_item']));
  this.contextMenu = false;
};

Blockly.Blocks.hand_gesture.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.setColour(NclBlocks.INPUT_COLOUR);
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
        .appendField(NclBlocks.HAND_GESTURE_ANCHOR_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onbegin.png', 15,
        15, '*'))
      .appendField(NclBlocks.ONBEGIN_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onend.png', 15,
        15, '*'))
      .appendField(NclBlocks.ONEND_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onpause.png', 15,
        15, '*'))
      .appendField(NclBlocks.ONPAUSE_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onresume.png',
        15, 15, '*'))
      .appendField(NclBlocks.ONRESUME_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField(NclBlocks.ONSELECTION_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField(NclBlocks.ONRECOGNIZE_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField(NclBlocks.ONRECOGNIZE_STR)
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME')
      .appendField(NclBlocks.ONRECOGNIZE_FROM_USER_STR)
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
      .appendField(NclBlocks.CONDITION_STR);
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
      [NclBlocks.SEQ_STR, 'seq'],
      [NclBlocks.AND_STR, 'and'],
      [NclBlocks.OR_STR, 'or']
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-start.png', 15,
        15, '*'))
      .appendField(NclBlocks.START_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-stop.png', 15,
        15, '*'))
      .appendField(NclBlocks.STOP_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-pause.png', 15,
        15, '*'))
      .appendField(NclBlocks.PAUSE_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-resume.png', 15,
        15, '*'))
      .appendField(NclBlocks.RESUME_STR)
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
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'media/icon-bind-set.png', 15, 15,
        '*'))
      .appendField(NclBlocks.SET_STR)
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


NclBlocks.defaultToolbox =
  `<xml id="toolbox" style="display: none">
  <category name="`+ NclBlocks.MEDIA_STR + `">
    <block type="media"></block>
    <block type="image"></block>
    <block type="video"></block>
    <block type="ssml"></block>
  </category>
  <category name="`+ NclBlocks.INPUT_STR + `">
    <block type="input"></block>
    <block type="srgs"></block>
    <block type="hand_gesture"></block>
  </category>
  <category name="`+ NclBlocks.USER_STR + `">
    <block type="user"></block>
    <block type="headset"></block>
    <block type="hand_gesture_sensor"></block>
  </category>
  <category name="`+ NclBlocks.LINK_STR + `">
    <block type="port"></block>
    <block type="link"></block>
  </category>
  <category name="`+ NclBlocks.CONDITIONS_STR + `">
    <block type="onbegin"></block>
    <block type="onend"></block>
    <block type="onpause"></block>
    <block type="onresume"></block>
    <block type="onselection"></block>
    <block type="onrecognize"></block>
    <block type="onrecognizeuser"></block>
    <block type="compoundcondition"></block>
  </category>
  <category name="`+ NclBlocks.ACTIONS_STR + `">
    <block type="start"></block>
    <block type="stop"></block>
    <block type="pause"></block>
    <block type="resume"></block>
    <block type="set"></block>
  </category>
</xml>`;