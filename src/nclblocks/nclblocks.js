goog.require('Blockly.Blocks');

NclBlocks = {};
NclBlocks.Msg = {};
NclBlocks.Icons = {};

// ---------------------------------------- 
// messsages
// ---------------------------------------- 

NclBlocks.Msg.BODY = "app";
NclBlocks.Msg.PORT = "início da app"
NclBlocks.Msg.PORT_LABEL = "quando iniciar app inicie";
NclBlocks.Msg.MEDIA = "mídia";
NclBlocks.Msg.SRC = "conteúdo";
NclBlocks.Msg.MEDIAS = "mídias";
NclBlocks.Msg.INPUT = "reconhecedor";
NclBlocks.Msg.INPUTS = "reconhecedores";
NclBlocks.Msg.VIDEO = "vídeo";
NclBlocks.Msg.PORTION = "trecho";
NclBlocks.Msg.ANCHOR_BEGIN = "tem inicio";
NclBlocks.Msg.ANCHOR_END = "e fim";
NclBlocks.Msg.VIDEO_ITEM = "trecho do vídeo";
NclBlocks.Msg.AUDIO = "áudio";
NclBlocks.Msg.IMAGE = "imagem";
NclBlocks.Msg.SSML = "texto para sintetização";
NclBlocks.Msg.SSML_ANCHOR = "sintetiza frase";
NclBlocks.Msg.SSML_ITEM = "frase a sintetizar";
NclBlocks.Msg.SRGS = "especificação de voz";
NclBlocks.Msg.SRGS_ANCHOR = "reconhece frase";
NclBlocks.Msg.SRGS_ITEM = "frase a reconhecer";
NclBlocks.Msg.HAND_GESTURE = "especificação de gestos";
NclBlocks.Msg.HAND_GESTURE_ANCHOR = "reconhece gesto";
NclBlocks.Msg.HAND_GESTURE_ITEM = "gesto a reconhecer";
NclBlocks.Msg.LINK = "sincronismo";
NclBlocks.Msg.LINKS = "sincronismos";
NclBlocks.Msg.WHEN = "quando";
NclBlocks.Msg.DO = "faça";
NclBlocks.Msg.USER = "usuário";
NclBlocks.Msg.USERS = "tipo de usuários";
NclBlocks.Msg.MAX_USERS = "máximo de ususários"
NclBlocks.Msg.DEVICE = "dispositivo";
NclBlocks.Msg.WITH_DEVICE = "com dispositivo";
NclBlocks.Msg.DEVICES = "dispositivos";
NclBlocks.Msg.LEAP = "sensor de gestos de mão";
NclBlocks.Msg.MICROFONE = "microfone";
NclBlocks.Msg.CONDITION = "condição";
NclBlocks.Msg.CONDITION_SIMPLE = "condição simples";
NclBlocks.Msg.CONDITIONS = "condições";
NclBlocks.Msg.ONRECOGNIZE = 'reconhecer';
NclBlocks.Msg.ONRECOGNIZE_FROM_USER = 'do usuário';
NclBlocks.Msg.ONBEGIN = "iniciar";
NclBlocks.Msg.ONEND = "terminar";
NclBlocks.Msg.ONPAUSE = "pausar";
NclBlocks.Msg.ONRESUME = "resumir";
NclBlocks.Msg.ONSELECTION = "selecionar";
NclBlocks.Msg.SEQ = 'em sequencia';
NclBlocks.Msg.AND = 'todos entre';
NclBlocks.Msg.OR = 'um entre';
NclBlocks.Msg.ACTION = "ação";
NclBlocks.Msg.ACTIONS = "ações";
NclBlocks.Msg.START = "inicie";
NclBlocks.Msg.STOP = "termine";
NclBlocks.Msg.PAUSE = "pause";
NclBlocks.Msg.RESUME = "resuma";
NclBlocks.Msg.SET = "atribua";
NclBlocks.Msg.SET_TO = "com valor"

// ---------------------------------------- 
// icons
// ---------------------------------------- 

NclBlocks.Icons.context = 'media/icon-context.png';
NclBlocks.Icons.media = 'media/icon-media.png';
NclBlocks.Icons.video = 'media/icon-media-video.png';
NclBlocks.Icons.image = 'media/icon-media-image.png';
NclBlocks.Icons.audio = 'media/icon-media-audio.png';
NclBlocks.Icons.input = 'media/icon-recognition.png';
NclBlocks.Icons.ssml = 'media/ssml.png';
NclBlocks.Icons.srgs = 'media/srgs.png';
NclBlocks.Icons.hand_gesture = 'media/hand-gesture.png';
NclBlocks.Icons.port = 'media/icon-link.png';
NclBlocks.Icons.link = 'media/icon-link.png';
NclBlocks.Icons.user = 'media/icon-user-class.png';
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

// ---------------------------------------- 
// colours
// ---------------------------------------- 

NclBlocks.BODY_COLOUR = 20;
NclBlocks.MEDIA_COLOUR = 100;
NclBlocks.INPUT_COLOUR = 150;
NclBlocks.USER_COLOUR = 40;
NclBlocks.LINK_COLOUR = 260;
NclBlocks.PORT_COLOUR = 260;
NclBlocks.CONDITION_COLOUR = 280;
NclBlocks.ACTION_COLOUR = 225;

// ---------------------------------------- 
// default toolbox
// ---------------------------------------- 

NclBlocks.getDefaultToolboxXML = function (toolbox_options) {
  var exclude_recognition = toolbox_options.includes("exclude_recognition") ? true : false;
  var exclude_resume_pause_set = toolbox_options.includes("exclude_resume_pause_set") ? true : false;
  var ret;

  ret = `<xml id="toolbox" style="display: none">`;
  ret += `<category name="` + NclBlocks.Msg.MEDIA + `">`;
  ret += `  <block type="media"></block>`;
  ret += `  <block type="image"></block>`;
  ret += `  <block type="audio"></block>`;
  ret += `  <block type="video"></block>`;
  ret += `  <block type="ssml"></block>`;
  ret += `</category>`;
  if (!exclude_recognition) {
    ret += `<category name="` + NclBlocks.Msg.INPUT + `">`;
    ret += `  <block type="input"></block>`;
    ret += `  <block type="srgs"></block>`;
    ret += `  <block type="hand_gesture"></block>`;
    ret += `</category>`;
    ret += `<category name="` + NclBlocks.Msg.USER + `">`;
    ret += `  <block type="user"></block>`;
    ret += `  <block type="headset"></block>`;
    ret += `  <block type="hand_gesture_sensor"></block>`;
    ret += `</category>`;
  }
  ret += `<category name="` + NclBlocks.Msg.LINK + `">`;
  ret += `  <block type="port"></block>`;
  ret += `  <block type="link"></block>`;
  ret += `</category>`;
  ret += `<category name="` + NclBlocks.Msg.CONDITIONS + `">`;
  ret += `  <block type="onbegin"></block>`;
  ret += `  <block type="onselection"></block>`;
  ret += `  <block type="onend"></block>`;
  if (!exclude_resume_pause_set) {
    ret += `  <block type="onpause"></block>`;
    ret += `  <block type="onresume"></block>`;
  }
  if (!exclude_recognition) {
    ret += `  <block type="onrecognize"></block>`;
    ret += `  <block type="onrecognizeuser"></block>`;
  }
  ret += `  <block type="compoundcondition"></block>`;
  ret += `</category>`;
  ret += `<category name="` + NclBlocks.Msg.ACTIONS + `">`;
  ret += `  <block type="start"></block>`;
  ret += `  <block type="stop"></block>`;
  if (!exclude_resume_pause_set) {
    ret += `  <block type="pause"></block>`;
    ret += `  <block type="resume"></block>`;
    ret += `  <block type="set"></block>`;
  }
  ret += `</category>`;
  ret += `</xml>`;
  return ret;
}
NclBlocks.START_WORKSPACE_WITH_BODY =
  `<xml id="startBlocks" style="display: none">
    <block type="body" inline="false" x="20" y="20"></block>
    </xml>`;

// ---------------------------------------- 
// flags
// ---------------------------------------- 

Blockly.BlockSvg.START_HAT = true;
NclBlocks.USE_BODY = false;
NclBlocks.USE_CHECK = false;

NclBlocks.useBody = function () {
  Blockly.BlockSvg.START_HAT = false;
  NclBlocks.USE_BODY = true;
}

// ---------------------------------------- 
// xml blocks functions
// ---------------------------------------- 

function calculateWorkspaceHeight(level, height_one_block) {
  var block_padding = 20;
  if (!level)
    return block_padding;
  else
    return block_padding * (1 + level) + height_one_block * level;
}

function alignFirstColumnBlocksXML(xml, height_one_block) {
  function replaceXY(match, p1, p2) {
    var x = p1, y = p2;
    if (p1 < 300) { // first column
      x = 20;
    } else { // second column
      x = 550;
    }
    return 'x="' + x + '" y="' + y + '"'
  }
  var xml_x_aligned = xml.replace(/x=\"([0-9]*)\"\sy=\"([0-9]*)\"/g, replaceXY);
  return xml_x_aligned;
}

// ---------------------------------------- 
// inject functions
// ---------------------------------------- 

NclBlocks.injectInDiv = function (pathToBlockly, parend_div_id, height, opt_workspace_xml = "", opt_static = false, opt_toolbox_options = []) {
  var inject_div_name = "blockly_" + parend_div_id;
  var workspace;

  Blockly.pathToBlockly = pathToBlockly ? pathToBlockly : "./";

  // create div and configure auto resize
  var blocklyArea = document.getElementById(parend_div_id);
  var html_to_insert = "<div id=" + inject_div_name + " class='center-block' style='height: " + height + ";'></div>";
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
  if (opt_static) {
    workspace = Blockly.inject(inject_div_name, {
      media: Blockly.pathToBlockly + 'media/',
      toolbox: false,
      zoom: { controls: true },
      scrollbars: true,
      readOnly: true,
      sounds: true
    });
  }
  else {
    workspace = Blockly.inject(inject_div_name, {
      media: Blockly.pathToBlockly + 'media/',
      toolbox: NclBlocks.getDefaultToolboxXML(opt_toolbox_options),
      zoom: { controls: true },
      scrollbars: true,
      sounds: true
    });
  }
  if (NclBlocks.USE_BODY) {
    opt_workspace_xml = NclBlocks.START_WORKSPACE_WITH_BODY;
  }
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(opt_workspace_xml), workspace);

  onresize();
  Blockly.svgResize(workspace);

  return workspace;
}

// ---------------------------------------- 
// FieldTextButton
// ---------------------------------------- 

FieldTextButton = function (inputname, buttontext, changeHandler) {
  FieldTextButton.superClass_.constructor.call(this, inputname);
  this.buttontext_ = buttontext;
  this.changeHandler_ = changeHandler;
  this.setText(buttontext);
};

goog.inherits(FieldTextButton, Blockly.Field);

FieldTextButton.prototype.clone = function () {
  return new FieldTextButton(this.buttontext_, this.changeHandler_);
};

FieldTextButton.prototype.CURSOR = 'default';

FieldTextButton.prototype.showEditor_ = function () {
  if (this.changeHandler_) {
    this.changeHandler_();
  }
};

// ---------------------------------------- 
// InputStackMixin
// ---------------------------------------- 

InputStackMixin = {
  stack_of_value_input: false,

  pushInput: function () {
    var oldMutationDom = this.mutationToDom();
    var oldMutation = Blockly.Xml.domToText(oldMutationDom);
    var new_input;

    // append element
    var new_index = this.stack_size;
    // console.log("append element_" + new_index);
    if (this.stack_of_value_input)
      new_input = this.appendValueInput('element_' + new_index);
    else
      new_input = this.appendDummyInput('element_' + new_index);
    this.configureNewInput(new_input, new_index);
    this.moveInputBefore(new_input.name, 'edit');
    this.stack_size++;
    // fire mutation event
    var newMutationDom = this.mutationToDom();
    var newMutation = Blockly.Xml.domToText(newMutationDom);
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation));

    return new_input;
  },

  popInput: function () {
    var oldMutationDom = this.mutationToDom();
    var oldMutation = Blockly.Xml.domToText(oldMutationDom);

    if (this.stack_size <= 0) return;
    var rm_index = this.stack_size - 1;
    // console.log("remove element_" + rm_index);
    var inputNameToDelete = 'element_' + rm_index;
    var substructure = this.getInputTargetBlock(inputNameToDelete);
    if (substructure) {
      substructure.outputConnection.disconnect();
      // substructure.dispose(true, true);
    }
    this.removeInput(inputNameToDelete);
    this.stack_size--;

    // fire mutation event
    var newMutationDom = this.mutationToDom();
    var newMutation = Blockly.Xml.domToText(newMutationDom);
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation));
  },

  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('length', this.stack_size);
    return container;
  },

  domToMutation: function (xmlElement) {
    var new_length = xmlElement.getAttribute('length');
    // console.log(xmlElement);
    // console.log(this);
    if (new_length - this.stack_size > 0) {
      for (var i = 0; i < new_length - this.stack_size; i++)
        this.pushInput();
    } else {
      for (var i = 0; i < this.stack_size - new_length; i++)
        this.popInput();
    }
  },

  addMinusPlusDummyInput: function () {
    this.appendDummyInput('edit')
      .appendField(new FieldTextButton('minus', '–', function () {
        this.sourceBlock_.popInput();
      }))
      .appendField(new FieldTextButton('plus', '+', function () {
        this.sourceBlock_.pushInput();
      }));
  }
}

// ---------------------------------------- 
// IdFieldDropdown
// ---------------------------------------- 

IdFieldDropdown = function (id_type) {
  this.id_type = id_type;
  menuGenerator = null;
  if (id_type == 'media')
    menuGenerator = this.getMediaIds;
  else if (id_type == 'input')
    menuGenerator = this.getInputIds;
  else if (id_type == 'user')
    menuGenerator = this.getUserIds;
  else if (id_type == 'node')
    menuGenerator = this.getBothMediaInputIds;
  IdFieldDropdown.superClass_.constructor.call(this, menuGenerator);
}
goog.inherits(IdFieldDropdown, Blockly.FieldDropdown);

IdFieldDropdown.prototype.getMediaIds = function () {
  // at toolbox 
  if (!this.sourceBlock_) return [['-', '-']];
  // at workspace and no mediaIds
  if (!this.sourceBlock_.workspace.mediaIds)
    this.sourceBlock_.workspace.mediaIds = [['-', '-']];
  // at workspace 
  return this.sourceBlock_.workspace.mediaIds
}

IdFieldDropdown.prototype.getInputIds = function () {
  // at toolbox 
  if (!this.sourceBlock_) return [['-', '-']];
  // at workspace and no inputIds
  if (!this.sourceBlock_.workspace.inputIds)
    this.sourceBlock_.workspace.inputIds = [['-', '-']];
  // at workspace 
  return this.sourceBlock_.workspace.inputIds
}

IdFieldDropdown.prototype.getUserIds = function () {
  // at toolbox 
  if (!this.sourceBlock_) return [['-', '-']];
  // at workspace and no userIds
  if (!this.sourceBlock_.workspace.userIds)
    this.sourceBlock_.workspace.userIds = [['-', '-']];
  // at workspace 
  return this.sourceBlock_.workspace.userIds
}

IdFieldDropdown.prototype.getBothMediaInputIds = function () {
  // at toolbox 
  if (!this.sourceBlock_) return [['-', '-']];
  // at workspace and no inputIds/mediaIds
  var medias = this.sourceBlock_.workspace.mediaIds;
  if (!medias) medias = [['-', '-']];
  var inputs = this.sourceBlock_.workspace.inputIds;
  if (!inputs) inputs = [['-', '-']];
  var ret = medias.concat(inputs).sort();
  if (ret[1][0] == '-')
    ret.splice(1, 1);
  return ret;
}

// ---------------------------------------- 
// IdFieldText
// ---------------------------------------- 

IdFieldText = function (text, id_type) {
  this.id_type = id_type;
  opt_validator = null;
  if (id_type == 'media')
    opt_validator = this.validateMediaId;
  else if (id_type == 'input')
    opt_validator = this.validateInputId;
  else if (id_type == 'user')
    opt_validator = this.validateUserId;
  IdFieldText.superClass_.constructor.call(this, text,
    opt_validator);
}
goog.inherits(IdFieldText, Blockly.FieldTextInput);

IdFieldText.prototype.validateMediaId = function (text) {
  if (!text) return;
  // empty or at toolbox
  if (!this.workspace_) return null;
  // at workspace and no mediaIds
  if (!this.workspace_.mediaIds)
    this.workspace_.mediaIds = [['-', '-']];
  for (var i in this.workspace_.mediaIds)
    if (this.workspace_.mediaIds[i][0] === text)
      return null;
}

IdFieldText.prototype.validateInputId = function (text) {
  if (!text) return;
  // empty or at toolbox
  if (!this.workspace_) return null;
  // at workspace and no inputIds
  if (!this.workspace_.inputIds)
    this.workspace_.inputIds = [['-', '-']];
  for (var i in this.workspace_.inputIds)
    if (this.workspace_.inputIds[i][0] === text)
      return null;
}

IdFieldText.prototype.validateUserId = function (text) {
  if (!text) return;
  // empty or at toolbox 
  if (!this.workspace_) return null;
  // at workspace and no userIds
  if (!this.workspace_.userIds)
    this.workspace_.userIds = [['-', '-']];
  for (var i in this.workspace_.userIds)
    if (this.workspace_.userIds[i][0] === text)
      return null;
}

IdFieldText.prototype.onFinishEditing_ = function (text) {
  if (text == "") return;
  if (this.id_type == "media")
    this.workspace_.mediaIds.push([text, text]);
  else if (this.id_type == "input")
    this.workspace_.inputIds.push([text, text]);
  else if (this.id_type == "user")
    this.workspace_.userIds.push([text, text]);
};

IdFieldText.prototype.removeId = function () {
  if (this.workspace_) {
    if (this.id_type == "media" && this.workspace_.mediaIds) {
      var index = -1;
      for (var i = 0; i < this.workspace_.mediaIds.length; i++)
        if (this.workspace_.mediaIds[i][0] == this.text_)
          index = index = i;
      if (index > -1)
        this.workspace_.mediaIds.splice(index, 1);
    }
    else if (this.id_type == "input" && this.workspace_.inputIds) {
      var index = -1;
      for (var i = 0; i < this.workspace_.inputIds.length; i++)
        if (this.workspace_.inputIds[i][0] == this.text_)
          index = i;
      if (index > -1)
        this.workspace_.inputIds.splice(index, 1);
    }
    else if (this.id_type == "user" && this.workspace_.userIds) {
      var index = -1;
      for (var i = 0; i < this.workspace_.userIds.length; i++)
        if (this.workspace_.userIds[i][0] == this.text_)
          index = i;
      if (index > -1)
        this.workspace_.userIds.splice(this, index, 1);
    }
  }
};

IdFieldText.prototype.setText = function (newText) {
  if (newText != this.text_) this.removeId();
  IdFieldText.superClass_.setText.call(this, newText);
}

IdFieldText.prototype.dispose = function () {
  this.removeId(this.text_);
  IdFieldText.superClass_.dispose.call(this);
}

// ---------------------------------------- 
// body block
// ---------------------------------------- 

Blockly.Blocks.body = {
  init: function () {
    this.setColour(NclBlocks.BODY_COLOUR);
    this.contextMenu = false;
    this.setDeletable(false);

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = true;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField()
        .setCheck(NclBlocks.USE_CHECK ? ['media_type', 'input_type', 'user_type', 'link_type'] : null);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.context,
        20, 20, '*'))
      .appendField('{' + NclBlocks.Msg.BODY + '}');
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add initial inputs
    for (var i = 0; i < 5; i++)
      this.pushInput();
  }
}
Object.assign(Blockly.Blocks.body, InputStackMixin);

// ---------------------------------------- 
// media block
// ---------------------------------------- 

Blockly.Blocks.media = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.media, 25, 25,
        '*'))
      .appendField('{' + NclBlocks.Msg.MEDIA + '}');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'media_src_type' : null)
      .appendField('id')
      .appendField(new IdFieldText('', 'media'), 'id')
      .appendField('e ' + NclBlocks.Msg.SRC);
    this.setInputsInline(false);
    this.setColour(NclBlocks.MEDIA_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'media_type');
    this.contextMenu = false;
  }
};

// ---------------------------------------- 
// media_src_type blocks
// ---------------------------------------- 

Blockly.Blocks.image = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.image, 25, 25,
        '*'))
      .appendField('{' + NclBlocks.Msg.IMAGE + '}');
    this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.video = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = false;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', 'media'), 'id_area' + index)
        .appendField(NclBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NclBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.video, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.VIDEO + '}');
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add one area
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.video, InputStackMixin);

Blockly.Blocks.audio = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = false;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', 'media'), 'id_area' + index)
        .appendField(NclBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NclBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.audio, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.AUDIO + '}');
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add one area
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.audio, InputStackMixin);

Blockly.Blocks.ssml = {
  init: function () {
    this.setColour(NclBlocks.MEDIA_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = false;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', 'media'), 'id_area' + index)
        .appendField(NclBlocks.Msg.SSML_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.ssml, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.SSML + '}');
    this.stack_size++;
    // add plus button
    this.addMinusPlusDummyInput();
    // add one area
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.ssml, InputStackMixin);

// ---------------------------------------- 
// input block
// ---------------------------------------- 

Blockly.Blocks.input = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.input, 25, 25,
        '*'))
      .appendField('{' + NclBlocks.Msg.INPUT + '}');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'input_src_type' : null)
      .appendField('id')
      .appendField(new IdFieldText('', 'input'), 'id')
      .appendField('e ' + NclBlocks.Msg.SRC);
    this.setInputsInline(false);
    this.setColour(NclBlocks.INPUT_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'input_type');
    this.contextMenu = false;
  }
};

// ---------------------------------------- 
// input_src_type blocks
// ---------------------------------------- 

Blockly.Blocks.srgs = {
  init: function () {
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'input_src_type' : null);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = false;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', 'input'), 'id_area' + index)
        .appendField(NclBlocks.Msg.SRGS_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.srgs, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.SRGS + '}');
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add one area
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.srgs, InputStackMixin);

Blockly.Blocks.hand_gesture = {
  init: function () {
    this.setColour(NclBlocks.INPUT_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'input_src_type' : null);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = false;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', 'input'), 'id_area' + index)
        .appendField(NclBlocks.Msg.HAND_GESTURE_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.hand_gesture, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.HAND_GESTURE + '}');
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add one area
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.hand_gesture, InputStackMixin);

// ---------------------------------------- 
// user related blocks
// ---------------------------------------- 

Blockly.Blocks.user = {
  init: function () {
    this.setColour(NclBlocks.USER_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'user_type');
    this.setInputsInline(false);
    this.contextMenu = false;

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = true;
    this.configureNewInput = function (new_input, index) {
      new_input.appendField(NclBlocks.Msg.WITH_DEVICE)
        .setCheck(NclBlocks.USE_CHECK ? 'user_device_type' : null)
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.user, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.USERS + '}');
    this.appendDummyInput()
      .appendField('id')
      .appendField(new IdFieldText('', 'user'), 'id')
      .appendField(NclBlocks.Msg.MAX_USERS)
      .appendField(new Blockly.FieldTextInput('2'));
    // add edit buttons
    this.addMinusPlusDummyInput();
    // add one device
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.user, InputStackMixin);

Blockly.Blocks.headset = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.microfone, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.MICROFONE + '}');
    this.setOutput(true, NclBlocks.USE_CHECK ? 'user_device_type' : null);
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.hand_gesture_sensor,
        25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LEAP + '}');
    this.setOutput(true, NclBlocks.USE_CHECK ? 'user_device_type' : null);
    this.setColour(NclBlocks.USER_COLOUR);
    this.contextMenu = false;
  }
};

// ---------------------------------------- 
// port block
// ---------------------------------------- 

Blockly.Blocks.port = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.port, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LINK + '}')
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.PORT_LABEL)
      .appendField(new IdFieldDropdown('node'), 'component');
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'link_type');
    this.setInputsInline(false);
    this.setColour(NclBlocks.PORT_COLOUR);
    this.contextMenu = false;
  }
}

// ---------------------------------------- 
// link block
// ---------------------------------------- 

Blockly.Blocks.link = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.link, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LINK + '}');
    this.appendValueInput('conditions')
      .setCheck(NclBlocks.USE_CHECK ? 'condition_type' : null)
      .appendField(NclBlocks.Msg.WHEN);
    this.appendStatementInput('actions')
      .setCheck(NclBlocks.USE_CHECK ? 'simpleaction_type' : null)
      .appendField(NclBlocks.Msg.DO);
    this.setInputsInline(false);
    this.setColour(NclBlocks.LINK_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'link_type');
    this.contextMenu = false;
  }
};

// ---------------------------------------- 
// condition blocks
// ---------------------------------------- 

Blockly.Blocks.onbegin = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onbegin, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.ONBEGIN)
      .appendField(new IdFieldDropdown('media'), 'onbegin');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}
Blockly.Blocks.onend = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onend, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONEND)
      .appendField(new IdFieldDropdown('media'), 'onend');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}
Blockly.Blocks.onpause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onpause, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.ONPAUSE)
      .appendField(new IdFieldDropdown('media'), 'onpause');
    this.setInputsInline('pause');
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.onresume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onresume,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRESUME)
      .appendField(new IdFieldDropdown('media'), 'onresume');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.onselection = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onselection,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONSELECTION)
      .appendField(new IdFieldDropdown('media'), 'onselection');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.onrecognize = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onrecognize,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new IdFieldDropdown('input'), 'onrecognize');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onrecognize,
        15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new IdFieldDropdown('input'), 'onrecognize')
      .appendField(NclBlocks.Msg.ONRECOGNIZE_FROM_USER)
      .appendField(new IdFieldDropdown('user'), 'onrecognize_from_user');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.compoundcondition = {
  init:
  function () {
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.contextMenu = false;
    this.setInputsInline(false);

    // InputStackMixin config
    this.stack_size = 0;
    this.stack_of_value_input = true;
    this.configureNewInput = function (new_input, index) {
      new_input.setCheck(NclBlocks.USE_CHECK ? 'condition_type' : null);
    };
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [NclBlocks.Msg.SEQ, 'seq'], [NclBlocks.Msg.AND, 'and'],
        [NclBlocks.Msg.OR, 'or']
      ]), 'operator');
    // add plus button
    this.addMinusPlusDummyInput();
    // add two conditions
    this.pushInput();
    this.pushInput();
  }
}
Object.assign(Blockly.Blocks.compoundcondition, InputStackMixin);

// ---------------------------------------- 
// actions blocks
// ---------------------------------------- 

Blockly.Blocks.start = {
  init:
  function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.start, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.START)
      .appendField(new IdFieldDropdown('media'), 'start');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.stop = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.stop, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.STOP)
      .appendField(new IdFieldDropdown('media'), 'stop');
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.pause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.pause, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.PAUSE)
      .appendField(new IdFieldDropdown('media'), 'pause');
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.resume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.resume, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.RESUME)
      .appendField(new IdFieldDropdown('media'), 'resume');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
}

Blockly.Blocks.set = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.set, 15, 15,
        '*'))
      .appendField(NclBlocks.Msg.SET)
      .appendField(new IdFieldDropdown('media'), 'set')
      .appendField(NclBlocks.Msg.SET_TO)
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
}