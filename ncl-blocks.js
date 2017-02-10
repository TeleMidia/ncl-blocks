goog.require('Blockly.Blocks');

// entities

Blockly.Blocks['media'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("--media--");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput(""), "id");
    this.appendValueInput("src")
        .setCheck("media_content")
        .appendField("conteúdo");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de saida');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("--input-- ");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput(""), "id");
    this.appendValueInput("src")
        .setCheck("input_content")
        .appendField("conteúdo");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de entrada');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['user'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("--user--");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput(""), "id");
    this.appendValueInput("NAME")
        .setCheck("user_content")
        .appendField("src");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// contents

Blockly.Blocks['image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/icon-image.png", 50, 50, "*"));
    this.setOutput(true, "media_content");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['srgs'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("media/srgs.png", 50, 50, "*"));
    this.appendDummyInput().appendField('<grammar>')
    this.appendDummyInput().appendField('  <rule id="')
      .appendField(new Blockly.FieldTextInput(""), "id")
      .appendField('">')
      .appendField(new Blockly.FieldTextInput('repetir o video'), "")
    this.appendDummyInput().appendField('</grammar>')
    this.setColour(120);
    this.setOutput(true, "input_content");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ssml'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("media/ssml.png", 50, 50, "*"));
    this.appendDummyInput().appendField('<speak>')
    this.appendDummyInput().appendField('  <s id="')
      .appendField(new Blockly.FieldTextInput(""), "id").appendField('">')
      .appendField(
        new Blockly.FieldTextInput('Você gostaria de repetir o video?'), "")
      .appendField('</s>')
    this.appendDummyInput().appendField('</speak>');
    this.setColour(120);
    this.setOutput(true, "media_content");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['video'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("media/icon-video.png", 50, 50, "*"));
    this.setColour(120);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'simplecondition');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },
  saveConnections: function (containerBlock) {},

  updateShape_: function () {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendDummyInput('ADD' + i);
        input.appendField("ancora id").appendField(
            new Blockly.FieldTextInput(""), "id").appendField("inicia em")
          .appendField(new Blockly.FieldNumber(0, 0), "begin").appendField(
            "e termina em").appendField(new Blockly.FieldNumber(0, 0), "end")
          .appendField("s");
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

// behavior

Blockly.Blocks['simplecondition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["iniciar","onBegin"], ["terminar","onEnd"], ["atribuir","onEndAttribution"], ["reconhecer","onRecognize"]]), "role")
        .appendField("a")
        .appendField(new Blockly.FieldDropdown([["","OPTIONNAME"]]), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['behavior'] = {
  init: function() {
    this.appendValueInput("conditions")
        .setCheck(["compoundcondition", "simplecondition"])
        .appendField("quando");
    this.appendStatementInput("actions")
        .setCheck("simpleaction")
        .appendField("faça");
    this.setInputsInline(false);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['simpleaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["inicie","start"], ["pare","stop"], ["continue","resume"]]), "action")
        .appendField("a")
        .appendField(new Blockly.FieldDropdown([["","OPTIONNAME"]]), "NAME");
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['compoundcondition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["todos", "and"],
          ["todos em sequencia", "seq"],
          ["qualquer um", "or"]
        ]),
        "operator").appendField('acontecerem')
    this.setColour(260);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'simplecondition');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;

    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};
