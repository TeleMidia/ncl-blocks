goog.require('Blockly.Blocks');

NclBlocks = {};
NclBlocks.Msg = {};
NclBlocks.Icons = {};

// ---------------------------------------- 
// messsages
// ---------------------------------------- 

NclBlocks.Msg.BODY = "app";
NclBlocks.Msg.PORT = "início da aplicação"
NclBlocks.Msg.PORT_LABEL = "quando iniciar aplicação inicie";
NclBlocks.Msg.MEDIA = "mídia";
NclBlocks.Msg.SRC = "conteúdo";
NclBlocks.Msg.MEDIAS = "mídias";
NclBlocks.Msg.INPUT = "reconhecedor";
NclBlocks.Msg.INPUTS = "reconhecedores";
NclBlocks.Msg.VIDEO = "conteúdo de vídeo";
NclBlocks.Msg.VIDEO_ANCHOR_BEGIN = "define trecho inicio";
NclBlocks.Msg.VIDEO_ANCHOR_END = ", fim";
NclBlocks.Msg.VIDEO_ITEM = "trecho do vídeo";
NclBlocks.Msg.IMAGE = "imagem";
NclBlocks.Msg.SSML = "texto para sintetização";
NclBlocks.Msg.SSML_ANCHOR = "sintetiza frase";
NclBlocks.Msg.SSML_ITEM = "frase a sintetizar";
NclBlocks.Msg.SRGS = "comandos de voz";
NclBlocks.Msg.SRGS_ANCHOR = "reconhece frase";
NclBlocks.Msg.SRGS_ITEM = "frase a reconhecer";
NclBlocks.Msg.HAND_GESTURE = "gestos de mão";
NclBlocks.Msg.HAND_GESTURE_ANCHOR = "reconhece gesto";
NclBlocks.Msg.HAND_GESTURE_ITEM = "gesto a reconhecer";
NclBlocks.Msg.LINK = "sincronismo";
NclBlocks.Msg.LINKS = "sincronismos";
NclBlocks.Msg.WHEN = "quando";
NclBlocks.Msg.DO = "faça=";
NclBlocks.Msg.USER = "usuário";
NclBlocks.Msg.USERS = "usuário";
NclBlocks.Msg.DEVICE = "dispositivo";
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
NclBlocks.Msg.SEQ = 'sequencia';
NclBlocks.Msg.AND = 'todos entre';
NclBlocks.Msg.OR = 'qualquer entre';
NclBlocks.Msg.ACTION = "ação";
NclBlocks.Msg.ACTIONS = "ações";
NclBlocks.Msg.START = "inicie";
NclBlocks.Msg.STOP = "termine";
NclBlocks.Msg.PAUSE = "pause";
NclBlocks.Msg.RESUME = "resuma";
NclBlocks.Msg.SET = "atribua";

// ---------------------------------------- 
// icons
// ---------------------------------------- 

NclBlocks.Icons.media = 'media/icon-media.png';
NclBlocks.Icons.video = 'media/icon-video.png';
NclBlocks.Icons.image = 'media/icon-image.png';
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

NclBlocks.defaultToolboxXML =
  `<xml id="toolbox" style="display: none">
  <category name="` + NclBlocks.Msg.MEDIA + `">
    <block type="media"></block>
    <block type="image"></block>
    <block type="video"></block>
    <block type="ssml"></block>
  </category>
  <category name="` + NclBlocks.Msg.INPUT + `">
    <block type="input"></block>
    <block type="srgs"></block>
    <block type="hand_gesture"></block>
  </category>
  <category name="` + NclBlocks.Msg.USER + `">
    <block type="user"></block>
    <block type="headset"></block>
    <block type="hand_gesture_sensor"></block>
  </category>
  <category name="` + NclBlocks.Msg.LINK + `">
    <block type="port"></block>
    <block type="link"></block>
  </category>
  <category name="` + NclBlocks.Msg.CONDITIONS + `">
    <block type="onbegin"></block>
    <block type="onend"></block>
    <block type="onpause"></block>
    <block type="onresume"></block>
    <block type="onselection"></block>
    <block type="onrecognize"></block>
    <block type="onrecognizeuser"></block>
    <block type="compoundcondition"></block>
  </category>
  <category name="` + NclBlocks.Msg.ACTIONS + `">
    <block type="start"></block>
    <block type="stop"></block>
    <block type="pause"></block>
    <block type="resume"></block>
    <block type="set"></block>
  </category>
</xml>`;
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
// utils functions
// ---------------------------------------- 

NclBlocks.injectInDiv = function (pathToBlockly, parend_div_id, height, opt_workspace_xml = "", opt_static = false) {
  var inject_div_name = "blockly_" + parend_div_id;
  var workspace;

  Blockly.pathToBlockly = pathToBlockly ? pathToBlockly : "./";
  if (NclBlocks.USE_BODY) {
    opt_workspace_xml = NclBlocks.START_WORKSPACE_WITH_BODY;
  }

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
      scrollbars: false,
      readOnly: true,
      sounds: true
    });
  }
  else {
    workspace = Blockly.inject(inject_div_name, {
      media: Blockly.pathToBlockly + 'media/',
      toolbox: NclBlocks.defaultToolboxXML,
      scrollbars: scrollbars,
      zoom: { controls: true },
      sounds: true
    });
  }

  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(opt_workspace_xml), workspace);

  onresize();
  Blockly.svgResize(workspace);

  return workspace;
}

// ---------------------------------------- 
// reusable InputStackMixin block
// ---------------------------------------- 

Blockly.FieldTextbutton = function (buttontext, changeHandler) {
  Blockly.FieldTextbutton.superClass_.constructor.call(this, '');
  this.buttontext_ = buttontext;
  this.changeHandler_ = changeHandler;
  this.setText(buttontext);
};

goog.inherits(Blockly.FieldTextbutton, Blockly.Field);

Blockly.FieldTextbutton.prototype.clone = function () {
  return new Blockly.FieldTextbutton(this.buttontext_, this.changeHandler_);
};

Blockly.FieldTextbutton.prototype.CURSOR = 'default';

Blockly.FieldTextbutton.prototype.showEditor_ = function () {
  if (this.changeHandler_) {
    this.changeHandler_();
  }
};

Blockly.Blocks.InputStackMixin = {
  isArrayOfValueInput: false,

  pushInput: function () {
    var oldMutationDom = this.mutationToDom();
    var oldMutation = Blockly.Xml.domToText(oldMutationDom);
    var new_input;

    var new_index = this.dynamic_array_size;
    // console.log("append element_" + new_index);

    // append element
    if (this.dynamic_array_of_value_input)
      new_input = this.appendValueInput('element_' + new_index);
    else
      new_input = this.appendDummyInput('element_' + new_index);
    this.configureNewInput(new_input, new_index);
    this.dynamic_array_size++;
    // fire mutation event
    var newMutationDom = this.mutationToDom();
    var newMutation = Blockly.Xml.domToText(newMutationDom);
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation));

    return new_input;
  },

  popInput: function () {
    if (this.dynamic_array_size <= 0) return;
    var rm_index = this.dynamic_array_size - 1;
    // console.log("remove element_" + rm_index);
    var inputNameToDelete = 'element_' + rm_index;
    var substructure = this.getInputTargetBlock(inputNameToDelete);
    if (substructure) {
      substructure.dispose(true, true);
    }
    this.removeInput(inputNameToDelete);
    this.dynamic_array_size--;
  },

  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('length', this.dynamic_array_size);
    return container;
  },

  domToMutation: function (xmlElement) {
    var new_length = xmlElement.getAttribute('length');
    // console.log(xmlElement);
    // console.log(this);
    if (new_length - this.dynamic_array_size > 0) {
      for (var i = 0; i < new_length - this.dynamic_array_size; i++)
        this.pushInput();
    } else {
      for (var i = 0; i < this.dynamic_array_size - new_length; i++)
        this.popInput();
    }
  }
}

// ---------------------------------------- 
// body block
// ---------------------------------------- 


Blockly.Blocks.body = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.body.init = function () {
  this.setColour(NclBlocks.BODY_COLOUR);
  this.contextMenu = false;


  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField()
      .setCheck(NclBlocks.USE_CHECK ? ['media_type', 'input_type', 'user_type', 'link_type'] : null)
      ;
  };
  // add name
  this.appendDummyInput()
    .appendField('{' + NclBlocks.Msg.BODY + '}').appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));;
  // add sections names
  // this.appendDummyInput('MEDIAS')
  //   .appendField(new Blockly.FieldTextbutton('+' + NclBlocks.Msg.MEDIA, function () {
  //     this.sourceBlock_.pushInput("INPUTS");
  //   }));
  // this.appendDummyInput('INPUTS')
  //   .appendField(new Blockly.FieldTextbutton('+' + NclBlocks.Msg.INPUT, function () {
  //     this.sourceBlock_.pushInput("USERS");
  //   }));
  // this.appendDummyInput('USERS')
  //   .appendField(new Blockly.FieldTextbutton('+' + NclBlocks.Msg.USER, function () {
  //     this.sourceBlock_.pushInput("LINKS");
  //   }));
  // this.appendDummyInput('LINKS')
  //   .appendField(new Blockly.FieldTextbutton('+' + NclBlocks.Msg.LINK, function () {
  //     this.sourceBlock_.pushInput("edit");
  //   }));
  // add initial inputs
  for (var i = 0; i < 5; i++)
    this.pushInput();
}

// ---------------------------------------- 
// media ids
// ---------------------------------------- 

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

// ---------------------------------------- 
// input ids
// ---------------------------------------- 

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

// ---------------------------------------- 
// user ids
// ---------------------------------------- 

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

// ---------------------------------------- 
// media, image, ssml, video blocks
// ---------------------------------------- 

Blockly.Blocks.media = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.media, 25, 25,
        '*'))
      .appendField('{' + NclBlocks.Msg.MEDIA + '}');
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? 'media_src_type' : null)
      .appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId), 'id')
      .appendField(', ' + NclBlocks.Msg.SRC + '=');
    this.setInputsInline(false);
    this.setColour(NclBlocks.MEDIA_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'media_type');
    this.contextMenu = false;
  }
};

Blockly.Blocks.video = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.video.init = function () {
  this.setColour(NclBlocks.MEDIA_COLOUR);
  this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
  this.contextMenu = false;

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = false;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId), 'id_area' + index)
      .appendField(NclBlocks.Msg.VIDEO_ANCHOR_BEGIN + '=')
      .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
      .appendField(NclBlocks.Msg.VIDEO_ANCHOR_END + '=')
      .appendField(new Blockly.FieldTextInput(''), 'end' + index);
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.video, 25, 25, '*'))
    .appendField('{' + NclBlocks.Msg.VIDEO + '}');
  // add edit buttons
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add one area
  this.pushInput();
}

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

Blockly.Blocks.ssml = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.ssml.init = function () {
  this.setColour(NclBlocks.MEDIA_COLOUR);
  this.setOutput(true, NclBlocks.USE_CHECK ? 'media_src_type' : null);
  this.contextMenu = false;

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = false;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId), 'id_area' + index)
      .appendField(NclBlocks.Msg.SSML_ANCHOR + '=')
      .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.ssml, 25, 25, '*'))
    .appendField('{' + NclBlocks.Msg.SSML + '}');
  this.dynamic_array_size++;
  // add plus button
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add one area
  this.pushInput();
}

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
      .appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId), 'id')
      .appendField(', ' + NclBlocks.Msg.SRC + '=');
    this.setInputsInline(false);
    this.setColour(NclBlocks.INPUT_COLOUR);
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'input_type');
    this.contextMenu = false;
  }
};

// ---------------------------------------- 
// srgs, hand_gestures blocks
// ---------------------------------------- 

Blockly.Blocks.srgs = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.srgs.init = function () {
  this.setColour(NclBlocks.INPUT_COLOUR);
  this.setOutput(true, NclBlocks.USE_CHECK ? 'input_src_type' : null);
  this.contextMenu = false;

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = false;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId), 'id_area' + index)
      .appendField(NclBlocks.Msg.SRGS_ANCHOR + '=')
      .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.srgs, 25, 25, '*'))
    .appendField('{' + NclBlocks.Msg.SRGS + '}');
  // add edit buttons
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add one area
  this.pushInput();
}

Blockly.Blocks.hand_gesture = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.hand_gesture.init = function () {
  this.setColour(NclBlocks.INPUT_COLOUR);
  this.setOutput(true, NclBlocks.USE_CHECK ? 'input_src_type' : null);
  this.contextMenu = false;

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = false;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId), 'id_area' + index)
      .appendField(NclBlocks.Msg.HAND_GESTURE_ANCHOR + '=')
      .appendField(new Blockly.FieldTextInput(''), 'label' + index);
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.hand_gesture, 25, 25, '*'))
    .appendField('{' + NclBlocks.Msg.HAND_GESTURE + '}');
  // add edit buttons
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add one area
  this.pushInput();;
}

// ---------------------------------------- 
// user related blocks
// ---------------------------------------- 

Blockly.Blocks.user = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.user.init = function () {
  this.setColour(NclBlocks.USER_COLOUR);
  if (NclBlocks.USE_BODY == true) this.setOutput(true, 'user_type');
  this.setInputsInline(false);
  this.contextMenu = false;

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = true;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField(NclBlocks.Msg.DEVICE + '=')
      .setCheck(NclBlocks.USE_CHECK ? 'user_device_type' : null)
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.user, 25, 25, '*'))
    .appendField('{' + NclBlocks.Msg.USERS + '}');
  // add edit buttons
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add first device
  this.pushInput();
}

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
      .appendField(new Blockly.FieldDropdown(getBothMediaInputIds), 'component');
    if (NclBlocks.USE_BODY == true) this.setOutput(true, 'link_type');
    this.setInputsInline(false);
    this.setColour(NclBlocks.PORT_COLOUR);
    this.contextMenu = false;
  }
};

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
      .appendField(NclBlocks.Msg.WHEN + '=');
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'onbegin');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onend = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onend, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONEND)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'onend');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'onpause');
    this.setInputsInline('pause');
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'onresume');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'onselection');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getinputIds), 'onrecognize');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getinputIds), 'onrecognize')
      .appendField(NclBlocks.Msg.ONRECOGNIZE_FROM_USER)
      .appendField(new Blockly.FieldDropdown(getuserIds), 'onrecognize_from_user');
    this.setInputsInline(false);
    this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.setColour(NclBlocks.CONDITION_COLOUR);
    this.contextMenu = false;
  }
};

Blockly.Blocks.compoundcondition = Object.assign({}, Blockly.Blocks.InputStackMixin);
Blockly.Blocks.compoundcondition.init = function () {
  this.setColour(NclBlocks.CONDITION_COLOUR);
  this.setOutput(true, NclBlocks.USE_CHECK ? 'condition_type' : null);
  this.contextMenu = false;
  this.setInputsInline(false);

  // InputStackMixin config
  this.dynamic_array_size = 0;
  this.dynamic_array_of_value_input = true;
  this.configureNewInput = function (new_input, index) {
    new_input.appendField(NclBlocks.Msg.WHEN + '=')
      .setCheck(NclBlocks.USE_CHECK ? 'condition_type' : null);
    this.moveInputBefore(new_input.name, "edit");
  };
  // add name
  this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([
      [NclBlocks.Msg.SEQ, 'seq'], [NclBlocks.Msg.AND, 'and'],
      [NclBlocks.Msg.OR, 'or']
    ]), 'operator');
  // add plus button
  this.appendDummyInput('edit')
    .appendField(new Blockly.FieldTextbutton('–', function () {
      this.sourceBlock_.popInput();
    }))
    .appendField(new Blockly.FieldTextbutton('+', function () {
      this.sourceBlock_.pushInput();
    }));
  // add two conditions
  this.pushInput();
  this.pushInput();
}

// ---------------------------------------- 
// actions blocks
// ---------------------------------------- 

Blockly.Blocks.start = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.start, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.START)
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'start');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'stop');
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'pause');
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'resume');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
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
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'set')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setNextStatement(true, NclBlocks.USE_CHECK ? 'simpleaction_type' : null);
    this.setColour(NclBlocks.ACTION_COLOUR);
    this.contextMenu = false;
  }
};