
import {javascriptGenerator} from 'blockly/javascript';

javascriptGenerator.forBlock['takeoff'] = function(block, generator) {
  return 'takeoff';
}

javascriptGenerator.forBlock['takeoff_after_seconds'] = function(block, generator) {
  const take_off_after_seconds = block.getFieldValue('SECONDS')
  return 'takeoff after '+take_off_after_seconds+' val';
}

export const toolbarConfig = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Takeoff",
      "colour": 230,
      "contents": [
        {
          "kind": "block",
          "type": "takeoff"
        },
        {
          "kind": "block",
          "type": "takeoff_after_seconds"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Navigation",
      "colour": 230,
      "contents": [
        {
          "kind": "block",
          "type": "set_speed"
        },
        {
          "kind": "block",
          "type": "wait"
        },
        {
          "kind": "block",
          "type": "flying_forward_distance"
        },
        {
          "kind": "block",
          "type": "flying_forward_time"
        },
        {
          "kind": "block",
          "type": "flying_backward_distance"
        },
        {
          "kind": "block",
          "type": "flying_backward_time"
        },
        {
          "kind": "block",
          "type": "flying_left_distance"
        },
        {
          "kind": "block",
          "type": "flying_left_time"
        },
        {
          "kind": "block",
          "type": "flying_right_distance"
        },
        {
          "kind": "block",
          "type": "flying_right_time"
        },
        {
          "kind": "block",
          "type": "flying_up_distance"
        },
        {
          "kind": "block",
          "type": "flying_up_time"
        },
        {
          "kind": "block",
          "type": "flying_down_distance"
        },
        {
          "kind": "block",
          "type": "flying_down_time"
        },
        {
          "kind": "block",
          "type": "fly"
        },
        {
          "kind": "block",
          "type": "arc_left"
        },
        {
          "kind": "block",
          "type": "arc_right"
        },
        {
          "kind": "block",
          "type": "circle_left"
        },
        {
          "kind": "block",
          "type": "circle_right"
        },
        {
          "kind": "block",
          "type": "yaw_left"
        },
        {
          "kind": "block",
          "type": "yaw_right"
        },
      ]
    },
    {
      "kind": "category",
      "name": "Land",
      "colour": 230,
      "contents": [
        {
          "kind": "block",
          "type": "land"
        },
        {
          "kind": "block",
          "type": "land_for_seconds"
        }
      ]
    },
    {
      kind: 'sep',
    },
    {
      "kind": "category",
      "name": "Logic",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "type": 'logic_compare',
          "kind": 'block',
          "fields": {
            "OP": 'EQ',
          },
        },
        {
          type: 'logic_operation',
          kind: 'block',
          fields: {
            OP: 'AND',
          },
        },
        {
          type: 'logic_negate',
          kind: 'block',
        },
        {
          type: 'logic_boolean',
          kind: 'block',
          fields: {
            BOOL: 'TRUE',
          },
        },
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          type: 'controls_repeat_ext',
          kind: 'block',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: 'controls_whileUntil',
          kind: 'block',
          fields: {
            MODE: 'WHILE',
          },
        }
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          type: 'math_number',
          kind: 'block',
          fields: {
            NUM: 123,
          },
        },
        {
          type: 'math_arithmetic',
          kind: 'block',
          fields: {
            OP: 'ADD',
          },
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          type: 'math_single',
          kind: 'block',
          fields: {
            OP: 'ROOT',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          type: 'math_trig',
          kind: 'block',
          fields: {
            OP: 'SIN',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          type: 'math_constant',
          kind: 'block',
          fields: {
            CONSTANT: 'PI',
          },
        },
        {
          type: 'math_number_property',
          kind: 'block',
          fields: {
            PROPERTY: 'EVEN',
          },
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: 'math_round',
          kind: 'block',
          fields: {
            OP: 'ROUND',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          type: 'math_on_list',
          kind: 'block',
          fields: {
            OP: 'SUM',
          },
        },
        {
          type: 'math_modulo',
          kind: 'block',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: 'math_constrain',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: 'math_random_int',
          kind: 'block',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: 'math_random_float',
          kind: 'block',
        }
      ]
    },
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          type: 'text',
          kind: 'block',
          fields: {
            TEXT: '',
          },
        },
        {
          type: 'text_length',
          kind: 'block',
        },
        {
          type: 'text_print',
          kind: 'block',
          
        },
      ]
    },
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        {
          type: 'lists_create_with',
          kind: 'block',
        },
        {
          type: 'lists_create_with',
          kind: 'block',
        },
        {
          type: 'lists_repeat',
          kind: 'block',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          type: 'lists_length',
          kind: 'block',
        },
        {
          type: 'lists_isEmpty',
          kind: 'block',
        },
        {
          type: 'lists_indexOf',
          kind: 'block',
          fields: {
            END: 'FIRST',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list',
                  },
                },
              },
            },
          },
        },
        {
          type: 'lists_getIndex',
          kind: 'block',
          fields: {
            MODE: 'GET',
            WHERE: 'FROM_START',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list',
                  },
                },
              },
            },
          },
        },
        {
          type: 'lists_setIndex',
          kind: 'block',
          fields: {
            MODE: 'SET',
            WHERE: 'FROM_START',
          },
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list',
                  },
                },
              },
            },
          },
        },
        {
          type: 'lists_getSublist',
          kind: 'block',
          fields: {
            WHERE1: 'FROM_START',
            WHERE2: 'FROM_START',
          },
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list',
                  },
                },
              },
            },
          },
        },
        {
          type: 'lists_split',
          kind: 'block',
          fields: {
            MODE: 'SPLIT',
          },
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ',',
                },
              },
            },
          },
        },
        {
          type: 'lists_sort',
          kind: 'block',
          fields: {
            TYPE: 'NUMERIC',
            DIRECTION: '1',
          },
        }
      ],
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      categorystyle: 'variable_category',
    },
    {
      kind: 'category',
      name: 'Functions',
      custom: 'PROCEDURE',
      categorystyle: 'procedure_category',
    },
  ]
};

export const toolbarBlocksDefinitions = (Blockly) => {
  Blockly.Blocks['takeoff'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Take off");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['takeoff_after_seconds'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Take off after")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off after a specific number of seconds");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_speed'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set speed")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("cm/s");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set drone speed");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['wait'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("wait")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_forward_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Flying forward");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_forward_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_forward")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['flying_backward_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly backward");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_backward_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_backward")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_left_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly left");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_left_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_left")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_right_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly right");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_right_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_right")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_up_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly up");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_up_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_up")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_down_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly down");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_down_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_down")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fly'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fly x")
          .appendField(new Blockly.FieldNumber(0, 0, null), "x")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(0, 0, null), "y")
          .appendField("z")
          .appendField(new Blockly.FieldNumber(0, 0, null), "z");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['arc_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("arc left");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DEGREE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DEGREE")
          .appendField(" degrees with") 
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "Distance")
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['arc_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("arc right");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DEGREE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DEGREE")
          .appendField(" degrees with") 
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "Distance")
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circle_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Circle left with");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circle_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Circle right with");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['yaw_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("yaw left")
          this.appendValueInput("degreee")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "degrees")  
          .appendField("degree");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['yaw_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("yaw right")
          this.appendValueInput("degreee")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "degrees")  
          .appendField("degree");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['land'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("land");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['land_for_seconds'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Land for")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds then takeoff");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off after a specific number of seconds");
      this.setHelpUrl("");
    }
  };
};
