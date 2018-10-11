export default [{
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 1,
  "sections": [{
    "type": "Simple",
    "sequence": 1,
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "horizontal_radio_btns",
      "tooltip": "ch1_s1_field1_hint",
      "sequence": 1,
      "objectApi": "ccApplication_Form_Contact__c",
      "name": "ch1_s1_field1",
      "label": "ch1_s1_field1_label",
      "helpText": "ch1_s1_field1_tooltip",
      "fieldApi": "Title__c",
      "description": "ch1_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 40}],
      "type": "text",
      "tooltip": "ch1_s1_field2_hint",
      "sequence": 2,
      "objectApi": "ccApplication_Form_Contact__c",
      "name": "ch1_s1_field2",
      "label": "ch1_s1_field2_label",
      "helpText": "ch1_s1_field2_tooltip",
      "fieldApi": "Name__c",
      "description": "ch1_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 40}],
      "type": "text",
      "tooltip": "ch1_s1_field3_hint",
      "sequence": 3,
      "objectApi": "ccApplication_Form_Contact__c",
      "name": "ch1_s1_field3",
      "label": "ch1_s1_field3_label",
      "helpText": "ch1_s1_field3_tooltip",
      "fieldApi": "Surname__c",
      "description": "ch1_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "text",
      "tooltip": "ch1_s1_field4_hint",
      "sequence": 4,
      "objectApi": "ccApplication_Form_Contact__c",
      "name": "ch1_s1_field4",
      "label": "ch1_s1_field4_label",
      "helpText": "ch1_s1_field4_tooltip",
      "fieldApi": "E_Mail__c",
      "description": "ch1_s1_field4_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "vertical_radio_btns",
      "tooltip": "ch1_s1_field5_hint",
      "sequence": 5,
      "objectApi": "ccApplication_Form_Contact__c",
      "name": "ch1_s1_field5",
      "listOfValues": [{"value": "TBD", "label": "role_option_2"}, {
        "value": "TBD",
        "label": "role_option_1"
      }, {"value": "TBD", "label": "role_option_2"}, {"value": "TBD", "label": "role_option_1"}],
      "label": "ch1_s1_field5_label",
      "helpText": "ch1_s1_field5_tooltip",
      "fieldApi": "Your_Role_in_the_Company__c",
      "description": "ch1_s1_field5_description"
    }]
  }],
  "code": "Chapter_1"
}, {
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 2,
  "sections": [{
    "type": "Simple",
    "sequence": 2,
    "name": "Company details",
    "fields": [{
      "validationRules": [{"required": true, "maximum": 100}],
      "type": "text",
      "tooltip": "ch2_s1_field1_hint",
      "sequence": 1,
      "objectApi": "ccApplication_Form__c",
      "name": "ch2_s1_field1",
      "label": "ch2_s1_field1_label",
      "helpText": "ch2_s1_field1_tooltip",
      "fieldApi": "Company_Name__c",
      "description": "ch2_s1_field1_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s1_field2_hint",
      "sequence": 2,
      "objectApi": "ccApplication_Form__c",
      "name": "ch2_s1_field2",
      "listOfValues": [{"value": "TBD", "label": "structure_option_1", "description": "1"}, {
        "value": "TBD",
        "label": "structure_option_1",
        "description": "1"
      }],
      "label": "ch2_s1_field2_label",
      "helpText": "ch2_s1_field2_tooltip",
      "fieldApi": "Company_Structure__c",
      "description": "ch2_s1_field2_description"
    }, {
      "validationRules": [{"required": false, "maximum": 100}],
      "type": "text",
      "tooltip": "ch2_s1_field3_hint",
      "sequence": 3,
      "objectApi": "ccApplication_Form__c",
      "name": "ch2_s1_field3",
      "listOfValues": [{"value": "TBD", "label": "structure_option_2"}, {
        "value": "TBD",
        "label": "structure_option_2"
      }],
      "label": "ch2_s1_field3_label",
      "helpText": "ch2_s1_field3_tooltip",
      "fieldApi": "Company_Trading_Name__c",
      "description": "ch2_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s1_field4_hint",
      "sequence": 4,
      "name": "ch2_s1_field4",
      "listOfValues": [{"value": "TBD", "label": "reg_state_option_1"}, {
        "value": "TBD",
        "label": "reg_state_option_3"
      }, {"value": "TBD", "label": "reg_state_option_2"}, {
        "value": "TBD",
        "label": "structure_option_3"
      }, {"value": "TBD", "label": "reg_state_option_4"}, {
        "value": "TBD",
        "label": "reg_state_option_1"
      }, {"value": "TBD", "label": "reg_state_option_3"}, {
        "value": "TBD",
        "label": "reg_state_option_2"
      }, {"value": "TBD", "label": "structure_option_3"}, {"value": "TBD", "label": "reg_state_option_4"}],
      "label": "ch2_s1_field4_label",
      "helpText": "ch2_s1_field4_tooltip",
      "description": "ch2_s1_field4_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s1_field5_hint",
      "sequence": 5,
      "name": "ch2_s1_field5",
      "listOfValues": [{"value": "TBD", "label": "structure_option_4"}, {
        "value": "TBD",
        "label": "reg_court_option_1"
      }, {"value": "TBD", "label": "reg_court_option_3"}, {
        "value": "TBD",
        "label": "reg_court_option_2"
      }, {"value": "TBD", "label": "reg_court_option_4"}, {
        "value": "TBD",
        "label": "reg_court_option_3"
      }, {"value": "TBD", "label": "reg_court_option_2"}, {"value": "TBD", "label": "reg_court_option_4"}],
      "label": "ch2_s1_field5_label",
      "helpText": "ch2_s1_field5_tooltip",
      "description": "ch2_s1_field5_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "text",
      "tooltip": "ch2_s1_field6_hint",
      "sequence": 6,
      "name": "ch2_s1_field6",
      "listOfValues": [{"value": "TBD", "label": "structure_option_5"}],
      "label": "ch2_s1_field6_label",
      "helpText": "ch2_s1_field6_tooltip",
      "description": "ch2_s1_field6_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "vertical_radio_btns",
      "tooltip": "ch2_s1_field7_hint",
      "sequence": 7,
      "name": "ch2_s1_field7",
      "listOfValues": [{"value": "TBD", "label": "structure_option_6"}, {
        "value": "TBD",
        "label": "owner_option_3"
      }, {"value": "TBD", "label": "owner_option_1"}, {"value": "TBD", "label": "owner_option_2"}, {
        "value": "TBD",
        "label": "structure_option_6"
      }, {"value": "TBD", "label": "owner_option_3"}, {"value": "TBD", "label": "owner_option_1"}, {
        "value": "TBD",
        "label": "owner_option_2"
      }],
      "label": "ch2_s1_field7_label",
      "helpText": "ch2_s1_field7_tooltip",
      "description": "ch2_s1_field7_description"
    }]
  }, {
    "type": "Conditional",
    "sequence": 3,
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "horizontal_radio_btns",
      "tooltip": "ch1_s1_field1_hint",
      "sequence": 8,
      "name": "ch1_s1_field1",
      "listOfValues": [{"value": "TBD", "label": "title_option_1"}, {"value": "TBD", "label": "title_option_2"}],
      "label": "ch1_s1_field1_label",
      "helpText": "ch1_s1_field1_tooltip",
      "description": "ch1_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 100}],
      "type": "text",
      "tooltip": "ch1_s1_field2_hint",
      "sequence": 9,
      "name": "ch1_s1_field2",
      "label": "ch1_s1_field2_label",
      "helpText": "ch1_s1_field2_tooltip",
      "description": "ch1_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 100}],
      "type": "text",
      "tooltip": "ch1_s1_field3_hint",
      "sequence": 10,
      "name": "ch1_s1_field3",
      "label": "ch1_s1_field3_label",
      "helpText": "ch1_s1_field3_tooltip",
      "description": "ch1_s1_field3_description"
    }, {
      "validationRules": [{"required": false, "maximum": 100}],
      "type": "text",
      "tooltip": "ch2_s2_field4_hint",
      "sequence": 11,
      "name": "ch2_s2_field4",
      "label": "ch2_s2_field4_label",
      "helpText": "ch2_s2_field4_tooltip",
      "description": "ch2_s2_field4_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "date",
      "tooltip": "ch2_s2_field5_hint",
      "sequence": 12,
      "name": "ch2_s2_field5",
      "label": "ch2_s2_field5_label",
      "helpText": "ch2_s2_field5_tooltip",
      "description": "ch2_s2_field5_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s2_field6_hint",
      "sequence": 13,
      "name": "ch2_s2_field6",
      "listOfValues": [{"value": "TBD", "label": "country_option_20"}, {
        "value": "TBD",
        "label": "country_option_198"
      }, {"value": "TBD", "label": "country_option_237"}, {
        "value": "TBD",
        "label": "country_option_169"
      }, {"value": "TBD", "label": "country_option_165"}, {
        "value": "TBD",
        "label": "country_option_21"
      }, {"value": "TBD", "label": "country_option_183"}, {
        "value": "TBD",
        "label": "country_option_84"
      }, {"value": "TBD", "label": "country_option_140"}, {
        "value": "TBD",
        "label": "country_option_156"
      }, {"value": "TBD", "label": "country_option_69"}, {
        "value": "TBD",
        "label": "country_option_34"
      }, {"value": "TBD", "label": "country_option_64"}, {
        "value": "TBD",
        "label": "country_option_19"
      }, {"value": "TBD", "label": "country_option_6"}, {"value": "TBD", "label": "country_option_75"}, {
        "value": "TBD",
        "label": "country_option_4"
      }, {"value": "TBD", "label": "country_option_212"}, {
        "value": "TBD",
        "label": "country_option_68"
      }, {"value": "TBD", "label": "country_option_93"}, {
        "value": "TBD",
        "label": "country_option_130"
      }, {"value": "TBD", "label": "country_option_184"}, {
        "value": "TBD",
        "label": "country_option_104"
      }, {"value": "TBD", "label": "country_option_30"}, {
        "value": "TBD",
        "label": "country_option_167"
      }, {"value": "TBD", "label": "country_option_52"}, {
        "value": "TBD",
        "label": "country_option_171"
      }, {"value": "TBD", "label": "country_option_105"}, {
        "value": "TBD",
        "label": "country_option_144"
      }, {"value": "TBD", "label": "country_option_15"}, {
        "value": "TBD",
        "label": "country_option_230"
      }, {"value": "TBD", "label": "country_option_208"}, {
        "value": "TBD",
        "label": "country_option_232"
      }, {"value": "TBD", "label": "country_option_23"}, {
        "value": "TBD",
        "label": "country_option_88"
      }, {"value": "TBD", "label": "country_option_141"}, {
        "value": "TBD",
        "label": "country_option_17"
      }, {"value": "TBD", "label": "country_option_248"}, {
        "value": "TBD",
        "label": "country_option_49"
      }, {"value": "TBD", "label": "country_option_247"}, {
        "value": "TBD",
        "label": "country_option_204"
      }, {"value": "TBD", "label": "country_option_145"}, {
        "value": "TBD",
        "label": "country_option_118"
      }, {"value": "TBD", "label": "country_option_185"}, {
        "value": "TBD",
        "label": "country_option_195"
      }, {"value": "TBD", "label": "country_option_71"}, {
        "value": "TBD",
        "label": "country_option_170"
      }, {"value": "TBD", "label": "country_option_128"}, {
        "value": "TBD",
        "label": "country_option_108"
      }, {"value": "TBD", "label": "country_option_94"}, {
        "value": "TBD",
        "label": "country_option_43"
      }, {"value": "TBD", "label": "country_option_99"}, {
        "value": "TBD",
        "label": "country_option_114"
      }, {"value": "TBD", "label": "country_option_26"}, {
        "value": "TBD",
        "label": "country_option_136"
      }, {"value": "TBD", "label": "country_option_47"}, {
        "value": "TBD",
        "label": "country_option_110"
      }, {"value": "TBD", "label": "country_option_120"}, {
        "value": "TBD",
        "label": "country_option_46"
      }, {"value": "TBD", "label": "country_option_162"}, {
        "value": "TBD",
        "label": "country_option_152"
      }, {"value": "TBD", "label": "country_option_216"}, {
        "value": "TBD",
        "label": "country_option_28"
      }, {"value": "TBD", "label": "country_option_65"}, {
        "value": "TBD",
        "label": "country_option_168"
      }, {"value": "TBD", "label": "country_option_233"}, {
        "value": "TBD",
        "label": "country_option_7"
      }, {"value": "TBD", "label": "country_option_92"}, {
        "value": "TBD",
        "label": "country_option_39"
      }, {"value": "TBD", "label": "country_option_135"}, {
        "value": "TBD",
        "label": "country_option_236"
      }, {"value": "TBD", "label": "country_option_147"}, {
        "value": "TBD",
        "label": "country_option_82"
      }, {"value": "TBD", "label": "country_option_125"}, {
        "value": "TBD",
        "label": "country_option_126"
      }, {"value": "TBD", "label": "country_option_202"}, {
        "value": "TBD",
        "label": "country_option_227"
      }, {"value": "TBD", "label": "country_option_210"}, {
        "value": "TBD",
        "label": "country_option_2"
      }, {"value": "TBD", "label": "country_option_189"}, {
        "value": "TBD",
        "label": "country_option_45"
      }, {"value": "TBD", "label": "country_option_58"}, {
        "value": "TBD",
        "label": "country_option_61"
      }, {"value": "TBD", "label": "country_option_249"}, {
        "value": "TBD",
        "label": "country_option_112"
      }, {"value": "TBD", "label": "country_option_226"}, {
        "value": "TBD",
        "label": "country_option_40"
      }, {"value": "TBD", "label": "country_option_60"}, {
        "value": "TBD",
        "label": "country_option_37"
      }, {"value": "TBD", "label": "country_option_16"}, {
        "value": "TBD",
        "label": "country_option_36"
      }, {"value": "TBD", "label": "country_option_148"}, {
        "value": "TBD",
        "label": "country_option_76"
      }, {"value": "TBD", "label": "country_option_207"}, {
        "value": "TBD",
        "label": "country_option_194"
      }, {"value": "TBD", "label": "country_option_91"}, {
        "value": "TBD",
        "label": "country_option_115"
      }, {"value": "TBD", "label": "country_option_180"}, {
        "value": "TBD",
        "label": "country_option_41"
      }, {"value": "TBD", "label": "country_option_48"}, {
        "value": "TBD",
        "label": "country_option_100"
      }, {"value": "TBD", "label": "country_option_231"}, {
        "value": "TBD",
        "label": "country_option_85"
      }, {"value": "TBD", "label": "country_option_157"}, {
        "value": "TBD",
        "label": "country_option_63"
      }, {"value": "TBD", "label": "country_option_221"}, {
        "value": "TBD",
        "label": "country_option_50"
      }, {"value": "TBD", "label": "country_option_143"}, {
        "value": "TBD",
        "label": "country_option_35"
      }, {"value": "TBD", "label": "country_option_22"}, {
        "value": "TBD",
        "label": "country_option_181"
      }, {"value": "TBD", "label": "country_option_96"}, {
        "value": "TBD",
        "label": "country_option_215"
      }, {"value": "TBD", "label": "country_option_172"}, {
        "value": "TBD",
        "label": "country_option_73"
      }, {"value": "TBD", "label": "country_option_159"}, {
        "value": "TBD",
        "label": "country_option_32"
      }, {"value": "TBD", "label": "country_option_8"}, {
        "value": "TBD",
        "label": "country_option_123"
      }, {"value": "TBD", "label": "country_option_25"}, {
        "value": "TBD",
        "label": "country_option_42"
      }, {"value": "TBD", "label": "country_option_160"}, {
        "value": "TBD",
        "label": "country_option_54"
      }, {"value": "TBD", "label": "country_option_9"}, {
        "value": "TBD",
        "label": "country_option_119"
      }, {"value": "TBD", "label": "country_option_146"}, {
        "value": "TBD",
        "label": "country_option_200"
      }, {"value": "TBD", "label": "country_option_12"}, {
        "value": "TBD",
        "label": "country_option_223"
      }, {"value": "TBD", "label": "country_option_131"}, {
        "value": "TBD",
        "label": "country_option_150"
      }, {"value": "TBD", "label": "country_option_95"}, {
        "value": "TBD",
        "label": "country_option_116"
      }, {"value": "TBD", "label": "country_option_80"}, {
        "value": "TBD",
        "label": "country_option_89"
      }, {"value": "TBD", "label": "country_option_235"}, {
        "value": "TBD",
        "label": "country_option_201"
      }, {"value": "TBD", "label": "country_option_220"}, {
        "value": "TBD",
        "label": "country_option_102"
      }, {"value": "TBD", "label": "country_option_31"}, {
        "value": "TBD",
        "label": "country_option_186"
      }, {"value": "TBD", "label": "country_option_244"}, {
        "value": "TBD",
        "label": "country_option_176"
      }, {"value": "TBD", "label": "country_option_192"}, {
        "value": "TBD",
        "label": "country_option_103"
      }, {"value": "TBD", "label": "country_option_187"}, {
        "value": "TBD",
        "label": "country_option_137"
      }, {"value": "TBD", "label": "country_option_239"}, {
        "value": "TBD",
        "label": "country_option_197"
      }, {"value": "TBD", "label": "country_option_142"}, {
        "value": "TBD",
        "label": "country_option_124"
      }, {"value": "TBD", "label": "country_option_163"}, {
        "value": "TBD",
        "label": "country_option_78"
      }, {"value": "TBD", "label": "country_option_62"}, {
        "value": "TBD",
        "label": "country_option_222"
      }, {"value": "TBD", "label": "country_option_3"}, {
        "value": "TBD",
        "label": "country_option_246"
      }, {"value": "TBD", "label": "country_option_57"}, {
        "value": "TBD",
        "label": "country_option_97"
      }, {"value": "TBD", "label": "country_option_161"}, {
        "value": "TBD",
        "label": "country_option_86"
      }, {"value": "TBD", "label": "country_option_251"}, {
        "value": "TBD",
        "label": "country_option_113"
      }, {"value": "TBD", "label": "country_option_199"}, {
        "value": "TBD",
        "label": "country_option_193"
      }, {"value": "TBD", "label": "country_option_10"}, {
        "value": "TBD",
        "label": "country_option_33"
      }, {"value": "TBD", "label": "country_option_51"}, {
        "value": "TBD",
        "label": "country_option_81"
      }, {"value": "TBD", "label": "country_option_173"}, {
        "value": "TBD",
        "label": "country_option_217"
      }, {"value": "TBD", "label": "country_option_122"}, {
        "value": "TBD",
        "label": "country_option_139"
      }, {"value": "TBD", "label": "country_option_111"}, {
        "value": "TBD",
        "label": "country_option_90"
      }, {"value": "TBD", "label": "country_option_129"}, {
        "value": "TBD",
        "label": "country_option_218"
      }, {"value": "TBD", "label": "country_option_18"}, {
        "value": "TBD",
        "label": "country_option_138"
      }, {"value": "TBD", "label": "country_option_133"}, {
        "value": "TBD",
        "label": "country_option_179"
      }, {"value": "TBD", "label": "country_option_214"}, {
        "value": "TBD",
        "label": "country_option_228"
      }, {"value": "TBD", "label": "country_option_206"}, {
        "value": "TBD",
        "label": "country_option_182"
      }, {"value": "TBD", "label": "country_option_238"}, {
        "value": "TBD",
        "label": "country_option_219"
      }, {"value": "TBD", "label": "country_option_224"}, {
        "value": "TBD",
        "label": "country_option_83"
      }, {"value": "TBD", "label": "country_option_55"}, {
        "value": "TBD",
        "label": "country_option_67"
      }, {"value": "TBD", "label": "country_option_164"}, {
        "value": "TBD",
        "label": "country_option_155"
      }, {"value": "TBD", "label": "country_option_229"}, {
        "value": "TBD",
        "label": "country_option_14"
      }, {"value": "TBD", "label": "country_option_250"}, {
        "value": "TBD",
        "label": "country_option_77"
      }, {"value": "TBD", "label": "country_option_252"}, {
        "value": "TBD",
        "label": "country_option_166"
      }, {"value": "TBD", "label": "country_option_79"}, {
        "value": "TBD",
        "label": "country_option_190"
      }, {"value": "TBD", "label": "country_option_205"}, {
        "value": "TBD",
        "label": "country_option_134"
      }, {"value": "TBD", "label": "country_option_151"}, {
        "value": "TBD",
        "label": "country_option_240"
      }, {"value": "TBD", "label": "country_option_132"}, {
        "value": "TBD",
        "label": "country_option_188"
      }, {"value": "TBD", "label": "country_option_109"}, {"value": "TBD", "label": "country_option_242"}],
      "label": "ch2_s2_field6_label",
      "helpText": "ch2_s2_field6_tooltip",
      "description": "ch2_s2_field6_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s2_field7_hint",
      "sequence": 14,
      "name": "ch2_s2_field7",
      "label": "ch2_s2_field7_label",
      "helpText": "ch2_s2_field7_tooltip",
      "description": "ch2_s2_field7_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "boxed_radio_btns",
      "tooltip": "ch2_s2_field8_hint",
      "sequence": 15,
      "name": "ch2_s2_field8",
      "label": "ch2_s2_field8_label",
      "helpText": "ch2_s2_field8_tooltip",
      "description": "ch2_s2_field8_description"
    }]
  }, {
    "type": "Conditional Repetitive",
    "sequence": 4,
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "horizontal_radio_btns",
      "tooltip": "ch1_s1_field1_hint",
      "sequence": 16,
      "name": "ch1_s1_field1",
      "label": "ch1_s1_field1_label",
      "helpText": "ch1_s1_field1_tooltip",
      "description": "ch1_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 100}],
      "type": "text",
      "tooltip": "ch1_s1_field2_hint",
      "sequence": 17,
      "name": "ch1_s1_field2",
      "label": "ch1_s1_field2_label",
      "helpText": "ch1_s1_field2_tooltip",
      "description": "ch1_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 100}],
      "type": "text",
      "tooltip": "ch1_s1_field3_hint",
      "sequence": 18,
      "name": "ch1_s1_field3",
      "label": "ch1_s1_field3_label",
      "helpText": "ch1_s1_field3_tooltip",
      "description": "ch1_s1_field3_description"
    }, {
      "validationRules": [{"required": false, "maximum": 100}],
      "type": "text",
      "tooltip": "ch2_s2_field4_hint",
      "sequence": 19,
      "name": "ch2_s2_field4",
      "label": "ch2_s2_field4_label",
      "helpText": "ch2_s2_field4_tooltip",
      "description": "ch2_s2_field4_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "date",
      "tooltip": "ch2_s2_field5_hint",
      "sequence": 20,
      "name": "ch2_s2_field5",
      "label": "ch2_s2_field5_label",
      "helpText": "ch2_s2_field5_tooltip",
      "description": "ch2_s2_field5_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s2_field6_hint",
      "sequence": 21,
      "name": "ch2_s2_field6",
      "label": "ch2_s2_field6_label",
      "helpText": "ch2_s2_field6_tooltip",
      "description": "ch2_s2_field6_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch2_s2_field7_hint",
      "sequence": 22,
      "name": "ch2_s2_field7",
      "listOfValues": [{"value": "TBD", "label": "country_option_205"}, {
        "value": "TBD",
        "label": "country_option_223"
      }, {"value": "TBD", "label": "country_option_81"}, {
        "value": "TBD",
        "label": "country_option_129"
      }, {"value": "TBD", "label": "country_option_31"}, {
        "value": "TBD",
        "label": "country_option_75"
      }, {"value": "TBD", "label": "country_option_34"}, {"value": "TBD", "label": "country_option_1"}, {
        "value": "TBD",
        "label": "country_option_80"
      }, {"value": "TBD", "label": "country_option_124"}, {
        "value": "TBD",
        "label": "country_option_224"
      }, {"value": "TBD", "label": "country_option_83"}, {
        "value": "TBD",
        "label": "country_option_117"
      }, {"value": "TBD", "label": "country_option_97"}, {
        "value": "TBD",
        "label": "country_option_202"
      }, {"value": "TBD", "label": "country_option_179"}, {
        "value": "TBD",
        "label": "country_option_241"
      }, {"value": "TBD", "label": "country_option_94"}, {
        "value": "TBD",
        "label": "country_option_58"
      }, {"value": "TBD", "label": "country_option_65"}, {
        "value": "TBD",
        "label": "country_option_127"
      }, {"value": "TBD", "label": "country_option_22"}, {
        "value": "TBD",
        "label": "country_option_138"
      }, {"value": "TBD", "label": "country_option_111"}, {
        "value": "TBD",
        "label": "country_option_245"
      }, {"value": "TBD", "label": "country_option_123"}, {
        "value": "TBD",
        "label": "country_option_172"
      }, {"value": "TBD", "label": "country_option_93"}, {
        "value": "TBD",
        "label": "country_option_25"
      }, {"value": "TBD", "label": "country_option_53"}, {
        "value": "TBD",
        "label": "country_option_207"
      }, {"value": "TBD", "label": "country_option_235"}, {
        "value": "TBD",
        "label": "country_option_178"
      }, {"value": "TBD", "label": "country_option_126"}, {
        "value": "TBD",
        "label": "country_option_145"
      }, {"value": "TBD", "label": "country_option_249"}, {
        "value": "TBD",
        "label": "country_option_240"
      }, {"value": "TBD", "label": "country_option_120"}, {
        "value": "TBD",
        "label": "country_option_204"
      }, {"value": "TBD", "label": "country_option_243"}, {
        "value": "TBD",
        "label": "country_option_196"
      }, {"value": "TBD", "label": "country_option_110"}, {
        "value": "TBD",
        "label": "country_option_251"
      }, {"value": "TBD", "label": "country_option_70"}, {
        "value": "TBD",
        "label": "country_option_226"
      }, {"value": "TBD", "label": "country_option_215"}, {
        "value": "TBD",
        "label": "country_option_225"
      }, {"value": "TBD", "label": "country_option_200"}, {
        "value": "TBD",
        "label": "country_option_12"
      }, {"value": "TBD", "label": "country_option_234"}, {
        "value": "TBD",
        "label": "country_option_173"
      }, {"value": "TBD", "label": "country_option_112"}, {
        "value": "TBD",
        "label": "country_option_73"
      }, {"value": "TBD", "label": "country_option_194"}, {
        "value": "TBD",
        "label": "country_option_150"
      }, {"value": "TBD", "label": "country_option_232"}, {
        "value": "TBD",
        "label": "country_option_144"
      }, {"value": "TBD", "label": "country_option_10"}, {
        "value": "TBD",
        "label": "country_option_96"
      }, {"value": "TBD", "label": "country_option_40"}, {
        "value": "TBD",
        "label": "country_option_188"
      }, {"value": "TBD", "label": "country_option_183"}, {
        "value": "TBD",
        "label": "country_option_20"
      }, {"value": "TBD", "label": "country_option_116"}, {
        "value": "TBD",
        "label": "country_option_210"
      }, {"value": "TBD", "label": "country_option_7"}, {
        "value": "TBD",
        "label": "country_option_159"
      }, {"value": "TBD", "label": "country_option_163"}, {
        "value": "TBD",
        "label": "country_option_64"
      }, {"value": "TBD", "label": "country_option_213"}, {
        "value": "TBD",
        "label": "country_option_114"
      }, {"value": "TBD", "label": "country_option_228"}, {
        "value": "TBD",
        "label": "country_option_193"
      }, {"value": "TBD", "label": "country_option_62"}, {
        "value": "TBD",
        "label": "country_option_82"
      }, {"value": "TBD", "label": "country_option_192"}, {
        "value": "TBD",
        "label": "country_option_24"
      }, {"value": "TBD", "label": "country_option_121"}, {
        "value": "TBD",
        "label": "country_option_9"
      }, {"value": "TBD", "label": "country_option_187"}, {
        "value": "TBD",
        "label": "country_option_4"
      }, {"value": "TBD", "label": "country_option_227"}, {
        "value": "TBD",
        "label": "country_option_30"
      }, {"value": "TBD", "label": "country_option_74"}, {
        "value": "TBD",
        "label": "country_option_146"
      }, {"value": "TBD", "label": "country_option_119"}, {
        "value": "TBD",
        "label": "country_option_54"
      }, {"value": "TBD", "label": "country_option_103"}, {
        "value": "TBD",
        "label": "country_option_128"
      }, {"value": "TBD", "label": "country_option_66"}, {
        "value": "TBD",
        "label": "country_option_35"
      }, {"value": "TBD", "label": "country_option_161"}, {
        "value": "TBD",
        "label": "country_option_109"
      }, {"value": "TBD", "label": "country_option_137"}, {
        "value": "TBD",
        "label": "country_option_185"
      }, {"value": "TBD", "label": "country_option_56"}, {
        "value": "TBD",
        "label": "country_option_136"
      }, {"value": "TBD", "label": "country_option_29"}, {
        "value": "TBD",
        "label": "country_option_17"
      }, {"value": "TBD", "label": "country_option_45"}, {
        "value": "TBD",
        "label": "country_option_244"
      }, {"value": "TBD", "label": "country_option_167"}, {
        "value": "TBD",
        "label": "country_option_59"
      }, {"value": "TBD", "label": "country_option_157"}, {
        "value": "TBD",
        "label": "country_option_208"
      }, {"value": "TBD", "label": "country_option_91"}, {
        "value": "TBD",
        "label": "country_option_182"
      }, {"value": "TBD", "label": "country_option_52"}, {
        "value": "TBD",
        "label": "country_option_41"
      }, {"value": "TBD", "label": "country_option_133"}, {
        "value": "TBD",
        "label": "country_option_92"
      }, {"value": "TBD", "label": "country_option_166"}, {
        "value": "TBD",
        "label": "country_option_26"
      }, {"value": "TBD", "label": "country_option_149"}, {
        "value": "TBD",
        "label": "country_option_239"
      }, {"value": "TBD", "label": "country_option_79"}, {
        "value": "TBD",
        "label": "country_option_143"
      }, {"value": "TBD", "label": "country_option_217"}, {
        "value": "TBD",
        "label": "country_option_51"
      }, {"value": "TBD", "label": "country_option_11"}, {
        "value": "TBD",
        "label": "country_option_156"
      }, {"value": "TBD", "label": "country_option_36"}, {
        "value": "TBD",
        "label": "country_option_219"
      }, {"value": "TBD", "label": "country_option_170"}, {
        "value": "TBD",
        "label": "country_option_115"
      }, {"value": "TBD", "label": "country_option_98"}, {
        "value": "TBD",
        "label": "country_option_78"
      }, {"value": "TBD", "label": "country_option_46"}, {
        "value": "TBD",
        "label": "country_option_76"
      }, {"value": "TBD", "label": "country_option_151"}, {
        "value": "TBD",
        "label": "country_option_85"
      }, {"value": "TBD", "label": "country_option_60"}, {"value": "TBD", "label": "country_option_8"}, {
        "value": "TBD",
        "label": "country_option_186"
      }, {"value": "TBD", "label": "country_option_229"}, {
        "value": "TBD",
        "label": "country_option_15"
      }, {"value": "TBD", "label": "country_option_47"}, {"value": "TBD", "label": "country_option_5"}, {
        "value": "TBD",
        "label": "country_option_102"
      }, {"value": "TBD", "label": "country_option_252"}, {
        "value": "TBD",
        "label": "country_option_104"
      }, {"value": "TBD", "label": "country_option_190"}, {
        "value": "TBD",
        "label": "country_option_221"
      }, {"value": "TBD", "label": "country_option_242"}, {
        "value": "TBD",
        "label": "country_option_147"
      }, {"value": "TBD", "label": "country_option_168"}, {
        "value": "TBD",
        "label": "country_option_28"
      }, {"value": "TBD", "label": "country_option_14"}, {
        "value": "TBD",
        "label": "country_option_209"
      }, {"value": "TBD", "label": "country_option_88"}, {
        "value": "TBD",
        "label": "country_option_101"
      }, {"value": "TBD", "label": "country_option_69"}, {
        "value": "TBD",
        "label": "country_option_33"
      }, {"value": "TBD", "label": "country_option_169"}, {
        "value": "TBD",
        "label": "country_option_131"
      }, {"value": "TBD", "label": "country_option_140"}, {
        "value": "TBD",
        "label": "country_option_191"
      }, {"value": "TBD", "label": "country_option_201"}, {
        "value": "TBD",
        "label": "country_option_155"
      }, {"value": "TBD", "label": "country_option_113"}, {
        "value": "TBD",
        "label": "country_option_199"
      }, {"value": "TBD", "label": "country_option_122"}, {
        "value": "TBD",
        "label": "country_option_86"
      }, {"value": "TBD", "label": "country_option_108"}, {
        "value": "TBD",
        "label": "country_option_152"
      }, {"value": "TBD", "label": "country_option_48"}, {
        "value": "TBD",
        "label": "country_option_141"
      }, {"value": "TBD", "label": "country_option_211"}, {
        "value": "TBD",
        "label": "country_option_37"
      }, {"value": "TBD", "label": "country_option_233"}, {
        "value": "TBD",
        "label": "country_option_158"
      }, {"value": "TBD", "label": "country_option_16"}, {
        "value": "TBD",
        "label": "country_option_250"
      }, {"value": "TBD", "label": "country_option_55"}, {
        "value": "TBD",
        "label": "country_option_118"
      }, {"value": "TBD", "label": "country_option_87"}, {
        "value": "TBD",
        "label": "country_option_135"
      }, {"value": "TBD", "label": "country_option_77"}, {
        "value": "TBD",
        "label": "country_option_105"
      }, {"value": "TBD", "label": "country_option_27"}, {
        "value": "TBD",
        "label": "country_option_99"
      }, {"value": "TBD", "label": "country_option_142"}, {
        "value": "TBD",
        "label": "country_option_247"
      }, {"value": "TBD", "label": "country_option_139"}, {
        "value": "TBD",
        "label": "country_option_203"
      }, {"value": "TBD", "label": "country_option_171"}, {
        "value": "TBD",
        "label": "country_option_63"
      }, {"value": "TBD", "label": "country_option_165"}, {
        "value": "TBD",
        "label": "country_option_18"
      }, {"value": "TBD", "label": "country_option_181"}, {
        "value": "TBD",
        "label": "country_option_57"
      }, {"value": "TBD", "label": "country_option_148"}, {
        "value": "TBD",
        "label": "country_option_198"
      }, {"value": "TBD", "label": "country_option_222"}, {
        "value": "TBD",
        "label": "country_option_125"
      }, {"value": "TBD", "label": "country_option_38"}, {
        "value": "TBD",
        "label": "country_option_162"
      }, {"value": "TBD", "label": "country_option_50"}, {
        "value": "TBD",
        "label": "country_option_42"
      }, {"value": "TBD", "label": "country_option_153"}, {
        "value": "TBD",
        "label": "country_option_160"
      }, {"value": "TBD", "label": "country_option_195"}, {
        "value": "TBD",
        "label": "country_option_218"
      }, {"value": "TBD", "label": "country_option_72"}, {
        "value": "TBD",
        "label": "country_option_180"
      }, {"value": "TBD", "label": "country_option_175"}, {
        "value": "TBD",
        "label": "country_option_246"
      }, {"value": "TBD", "label": "country_option_95"}, {
        "value": "TBD",
        "label": "country_option_90"
      }, {"value": "TBD", "label": "country_option_44"}, {"value": "TBD", "label": "country_option_6"}],
      "label": "ch2_s2_field7_label",
      "helpText": "ch2_s2_field7_tooltip",
      "description": "ch2_s2_field7_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "boxed_checkbox",
      "tooltip": "ch2_s2_field8_hint",
      "sequence": 23,
      "name": "ch2_s2_field8",
      "label": "ch2_s2_field8_label",
      "helpText": "ch2_s2_field8_tooltip",
      "description": "ch2_s2_field8_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "boxed_checkbox",
      "tooltip": "ch2_s2_field9_hint",
      "sequence": 24,
      "name": "ch2_s2_field9",
      "label": "ch2_s2_field9_label",
      "helpText": "ch2_s2_field9_tooltip",
      "description": "ch2_s2_field9_description"
    }]
  }],
  "code": "Chapter_2"
}, {
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 3,
  "sections": [{
    "type": "Simple",
    "sequence": 5,
    "name": "Company address as in the registry",
    "fields": [{
      "validationRules": [{"required": true, "maximum": 60}],
      "type": "text",
      "tooltip": "ch3_s1_field1_hint",
      "sequence": 1,
      "name": "ch3_s1_field1",
      "label": "ch3_s1_field1_label",
      "helpText": "ch3_s1_field1_tooltip",
      "description": "ch3_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 5}],
      "type": "text",
      "tooltip": "ch3_s1_field2_hint",
      "sequence": 2,
      "name": "ch3_s1_field2",
      "label": "ch3_s1_field2_label",
      "helpText": "ch3_s1_field2_tooltip",
      "description": "ch3_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 40}],
      "type": "text",
      "tooltip": "ch3_s1_field3_hint",
      "sequence": 3,
      "name": "ch3_s1_field3",
      "label": "ch3_s1_field3_label",
      "helpText": "ch3_s1_field3_tooltip",
      "description": "ch3_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch3_s1_field4_hint",
      "sequence": 4,
      "name": "ch3_s1_field4",
      "listOfValues": [{"value": "TBD", "label": "country_option_133"}, {
        "value": "TBD",
        "label": "country_option_86"
      }, {"value": "TBD", "label": "country_option_211"}, {
        "value": "TBD",
        "label": "country_option_32"
      }, {"value": "TBD", "label": "country_option_11"}, {
        "value": "TBD",
        "label": "country_option_206"
      }, {"value": "TBD", "label": "country_option_213"}, {
        "value": "TBD",
        "label": "country_option_35"
      }, {"value": "TBD", "label": "country_option_185"}, {
        "value": "TBD",
        "label": "country_option_39"
      }, {"value": "TBD", "label": "country_option_146"}, {
        "value": "TBD",
        "label": "country_option_222"
      }, {"value": "TBD", "label": "country_option_55"}, {
        "value": "TBD",
        "label": "country_option_236"
      }, {"value": "TBD", "label": "country_option_196"}, {
        "value": "TBD",
        "label": "country_option_23"
      }, {"value": "TBD", "label": "country_option_89"}, {
        "value": "TBD",
        "label": "country_option_67"
      }, {"value": "TBD", "label": "country_option_29"}, {
        "value": "TBD",
        "label": "country_option_158"
      }, {"value": "TBD", "label": "country_option_31"}, {
        "value": "TBD",
        "label": "country_option_14"
      }, {"value": "TBD", "label": "country_option_160"}, {
        "value": "TBD",
        "label": "country_option_57"
      }, {"value": "TBD", "label": "country_option_195"}, {
        "value": "TBD",
        "label": "country_option_74"
      }, {"value": "TBD", "label": "country_option_117"}, {
        "value": "TBD",
        "label": "country_option_232"
      }, {"value": "TBD", "label": "country_option_10"}, {
        "value": "TBD",
        "label": "country_option_37"
      }, {"value": "TBD", "label": "country_option_42"}, {
        "value": "TBD",
        "label": "country_option_144"
      }, {"value": "TBD", "label": "country_option_243"}, {
        "value": "TBD",
        "label": "country_option_68"
      }, {"value": "TBD", "label": "country_option_166"}, {
        "value": "TBD",
        "label": "country_option_64"
      }, {"value": "TBD", "label": "country_option_186"}, {
        "value": "TBD",
        "label": "country_option_198"
      }, {"value": "TBD", "label": "country_option_73"}, {
        "value": "TBD",
        "label": "country_option_44"
      }, {"value": "TBD", "label": "country_option_169"}, {
        "value": "TBD",
        "label": "country_option_223"
      }, {"value": "TBD", "label": "country_option_230"}, {
        "value": "TBD",
        "label": "country_option_78"
      }, {"value": "TBD", "label": "country_option_102"}, {
        "value": "TBD",
        "label": "country_option_69"
      }, {"value": "TBD", "label": "country_option_54"}, {
        "value": "TBD",
        "label": "country_option_111"
      }, {"value": "TBD", "label": "country_option_214"}, {
        "value": "TBD",
        "label": "country_option_81"
      }, {"value": "TBD", "label": "country_option_94"}, {
        "value": "TBD",
        "label": "country_option_21"
      }, {"value": "TBD", "label": "country_option_183"}, {
        "value": "TBD",
        "label": "country_option_40"
      }, {"value": "TBD", "label": "country_option_116"}, {
        "value": "TBD",
        "label": "country_option_142"
      }, {"value": "TBD", "label": "country_option_245"}, {
        "value": "TBD",
        "label": "country_option_38"
      }, {"value": "TBD", "label": "country_option_88"}, {
        "value": "TBD",
        "label": "country_option_248"
      }, {"value": "TBD", "label": "country_option_159"}, {
        "value": "TBD",
        "label": "country_option_124"
      }, {"value": "TBD", "label": "country_option_72"}, {
        "value": "TBD",
        "label": "country_option_71"
      }, {"value": "TBD", "label": "country_option_147"}, {
        "value": "TBD",
        "label": "country_option_188"
      }, {"value": "TBD", "label": "country_option_76"}, {
        "value": "TBD",
        "label": "country_option_227"
      }, {"value": "TBD", "label": "country_option_225"}, {
        "value": "TBD",
        "label": "country_option_90"
      }, {"value": "TBD", "label": "country_option_112"}, {
        "value": "TBD",
        "label": "country_option_239"
      }, {"value": "TBD", "label": "country_option_16"}, {
        "value": "TBD",
        "label": "country_option_115"
      }, {"value": "TBD", "label": "country_option_139"}, {
        "value": "TBD",
        "label": "country_option_26"
      }, {"value": "TBD", "label": "country_option_93"}, {
        "value": "TBD",
        "label": "country_option_149"
      }, {"value": "TBD", "label": "country_option_226"}, {
        "value": "TBD",
        "label": "country_option_113"
      }, {"value": "TBD", "label": "country_option_170"}, {
        "value": "TBD",
        "label": "country_option_70"
      }, {"value": "TBD", "label": "country_option_106"}, {
        "value": "TBD",
        "label": "country_option_45"
      }, {"value": "TBD", "label": "country_option_162"}, {
        "value": "TBD",
        "label": "country_option_235"
      }, {"value": "TBD", "label": "country_option_49"}, {
        "value": "TBD",
        "label": "country_option_28"
      }, {"value": "TBD", "label": "country_option_136"}, {
        "value": "TBD",
        "label": "country_option_34"
      }, {"value": "TBD", "label": "country_option_107"}, {
        "value": "TBD",
        "label": "country_option_51"
      }, {"value": "TBD", "label": "country_option_207"}, {
        "value": "TBD",
        "label": "country_option_50"
      }, {"value": "TBD", "label": "country_option_184"}, {
        "value": "TBD",
        "label": "country_option_20"
      }, {"value": "TBD", "label": "country_option_63"}, {
        "value": "TBD",
        "label": "country_option_189"
      }, {"value": "TBD", "label": "country_option_108"}, {
        "value": "TBD",
        "label": "country_option_118"
      }, {"value": "TBD", "label": "country_option_48"}, {
        "value": "TBD",
        "label": "country_option_126"
      }, {"value": "TBD", "label": "country_option_8"}, {"value": "TBD", "label": "country_option_52"}, {
        "value": "TBD",
        "label": "country_option_47"
      }, {"value": "TBD", "label": "country_option_163"}, {
        "value": "TBD",
        "label": "country_option_190"
      }, {"value": "TBD", "label": "country_option_131"}, {
        "value": "TBD",
        "label": "country_option_77"
      }, {"value": "TBD", "label": "country_option_123"}, {
        "value": "TBD",
        "label": "country_option_194"
      }, {"value": "TBD", "label": "country_option_59"}, {
        "value": "TBD",
        "label": "country_option_79"
      }, {"value": "TBD", "label": "country_option_19"}, {
        "value": "TBD",
        "label": "country_option_200"
      }, {"value": "TBD", "label": "country_option_155"}, {
        "value": "TBD",
        "label": "country_option_127"
      }, {"value": "TBD", "label": "country_option_231"}, {
        "value": "TBD",
        "label": "country_option_250"
      }, {"value": "TBD", "label": "country_option_172"}, {
        "value": "TBD",
        "label": "country_option_192"
      }, {"value": "TBD", "label": "country_option_129"}, {
        "value": "TBD",
        "label": "country_option_17"
      }, {"value": "TBD", "label": "country_option_238"}, {
        "value": "TBD",
        "label": "country_option_234"
      }, {"value": "TBD", "label": "country_option_167"}, {
        "value": "TBD",
        "label": "country_option_218"
      }, {"value": "TBD", "label": "country_option_220"}, {
        "value": "TBD",
        "label": "country_option_152"
      }, {"value": "TBD", "label": "country_option_120"}, {
        "value": "TBD",
        "label": "country_option_151"
      }, {"value": "TBD", "label": "country_option_132"}, {
        "value": "TBD",
        "label": "country_option_182"
      }, {"value": "TBD", "label": "country_option_75"}, {"value": "TBD", "label": "country_option_3"}, {
        "value": "TBD",
        "label": "country_option_1"
      }, {"value": "TBD", "label": "country_option_87"}, {"value": "TBD", "label": "country_option_5"}, {
        "value": "TBD",
        "label": "country_option_208"
      }, {"value": "TBD", "label": "country_option_24"}, {
        "value": "TBD",
        "label": "country_option_15"
      }, {"value": "TBD", "label": "country_option_205"}, {
        "value": "TBD",
        "label": "country_option_177"
      }, {"value": "TBD", "label": "country_option_103"}, {
        "value": "TBD",
        "label": "country_option_197"
      }, {"value": "TBD", "label": "country_option_193"}, {
        "value": "TBD",
        "label": "country_option_175"
      }, {"value": "TBD", "label": "country_option_187"}, {
        "value": "TBD",
        "label": "country_option_122"
      }, {"value": "TBD", "label": "country_option_100"}, {
        "value": "TBD",
        "label": "country_option_2"
      }, {"value": "TBD", "label": "country_option_121"}, {
        "value": "TBD",
        "label": "country_option_157"
      }, {"value": "TBD", "label": "country_option_210"}, {
        "value": "TBD",
        "label": "country_option_228"
      }, {"value": "TBD", "label": "country_option_98"}, {
        "value": "TBD",
        "label": "country_option_135"
      }, {"value": "TBD", "label": "country_option_161"}, {
        "value": "TBD",
        "label": "country_option_110"
      }, {"value": "TBD", "label": "country_option_244"}, {
        "value": "TBD",
        "label": "country_option_97"
      }, {"value": "TBD", "label": "country_option_36"}, {
        "value": "TBD",
        "label": "country_option_156"
      }, {"value": "TBD", "label": "country_option_105"}, {
        "value": "TBD",
        "label": "country_option_145"
      }, {"value": "TBD", "label": "country_option_203"}, {
        "value": "TBD",
        "label": "country_option_114"
      }, {"value": "TBD", "label": "country_option_119"}, {
        "value": "TBD",
        "label": "country_option_84"
      }, {"value": "TBD", "label": "country_option_128"}, {
        "value": "TBD",
        "label": "country_option_53"
      }, {"value": "TBD", "label": "country_option_125"}, {
        "value": "TBD",
        "label": "country_option_80"
      }, {"value": "TBD", "label": "country_option_58"}, {"value": "TBD", "label": "country_option_9"}, {
        "value": "TBD",
        "label": "country_option_176"
      }, {"value": "TBD", "label": "country_option_181"}, {
        "value": "TBD",
        "label": "country_option_224"
      }, {"value": "TBD", "label": "country_option_153"}, {
        "value": "TBD",
        "label": "country_option_247"
      }, {"value": "TBD", "label": "country_option_150"}, {
        "value": "TBD",
        "label": "country_option_252"
      }, {"value": "TBD", "label": "country_option_202"}, {
        "value": "TBD",
        "label": "country_option_219"
      }, {"value": "TBD", "label": "country_option_251"}, {
        "value": "TBD",
        "label": "country_option_242"
      }, {"value": "TBD", "label": "country_option_4"}, {
        "value": "TBD",
        "label": "country_option_134"
      }, {"value": "TBD", "label": "country_option_46"}, {
        "value": "TBD",
        "label": "country_option_204"
      }, {"value": "TBD", "label": "country_option_137"}, {
        "value": "TBD",
        "label": "country_option_96"
      }, {"value": "TBD", "label": "country_option_154"}, {
        "value": "TBD",
        "label": "country_option_92"
      }, {"value": "TBD", "label": "country_option_43"}, {
        "value": "TBD",
        "label": "country_option_66"
      }, {"value": "TBD", "label": "country_option_30"}, {
        "value": "TBD",
        "label": "country_option_65"
      }, {"value": "TBD", "label": "country_option_6"}, {
        "value": "TBD",
        "label": "country_option_221"
      }, {"value": "TBD", "label": "country_option_229"}, {
        "value": "TBD",
        "label": "country_option_165"
      }, {"value": "TBD", "label": "country_option_7"}, {
        "value": "TBD",
        "label": "country_option_168"
      }, {"value": "TBD", "label": "country_option_199"}, {
        "value": "TBD",
        "label": "country_option_241"
      }, {"value": "TBD", "label": "country_option_27"}, {
        "value": "TBD",
        "label": "country_option_22"
      }, {"value": "TBD", "label": "country_option_171"}, {
        "value": "TBD",
        "label": "country_option_138"
      }, {"value": "TBD", "label": "country_option_217"}],
      "label": "ch3_s1_field4_label",
      "helpText": "ch3_s1_field4_tooltip",
      "description": "ch3_s1_field4_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "text",
      "tooltip": "ch3_s1_field5_hint",
      "sequence": 5,
      "name": "ch3_s1_field5",
      "label": "ch3_s1_field5_label",
      "helpText": "ch3_s1_field5_tooltip",
      "description": "ch3_s1_field5_description"
    }, {
      "validationRules": [{"required": false}],
      "type": "text",
      "tooltip": "ch3_s1_field6_hint",
      "sequence": 6,
      "name": "ch3_s1_field6",
      "label": "ch3_s1_field6_label",
      "helpText": "ch3_s1_field6_tooltip",
      "description": "ch3_s1_field6_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "boxed_checkbox_group",
      "tooltip": "ch3_s1_field7_hint",
      "sequence": 7,
      "name": "ch3_s1_field7",
      "listOfValues": [{"value": "TBD1", "label": "address_option_1"}, {"value": "TBD2", "label": "address_option_2"}],
      "label": "ch3_s1_field7_label",
      "helpText": "ch3_s1_field7_tooltip",
      "description": "ch3_s1_field7_description"
    }]
  }, {
    "type": "Conditional Repetitive",
    "sequence": 6,
    "fields": [{
      "validationRules": [{"required": true, "maximum": 60}],
      "type": "text",
      "tooltip": "ch3_s1_field1_hint",
      "sequence": 8,
      "name": "ch3_s1_field1",
      "label": "ch3_s1_field1_label",
      "helpText": "ch3_s1_field1_tooltip",
      "description": "ch3_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 5}],
      "type": "text",
      "tooltip": "ch3_s1_field2_hint",
      "sequence": 9,
      "name": "ch3_s1_field2",
      "label": "ch3_s1_field2_label",
      "helpText": "ch3_s1_field2_tooltip",
      "description": "ch3_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 40}],
      "type": "text",
      "tooltip": "ch3_s1_field3_hint",
      "sequence": 10,
      "name": "ch3_s1_field3",
      "label": "ch3_s1_field3_label",
      "helpText": "ch3_s1_field3_tooltip",
      "description": "ch3_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch3_s1_field4_hint",
      "sequence": 11,
      "name": "ch3_s1_field4",
      "label": "ch3_s1_field4_label",
      "helpText": "ch3_s1_field4_tooltip",
      "description": "ch3_s1_field4_description"
    }]
  }],
  "code": "Chapter_3"
}, {
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 4,
  "sections": [{
    "type": "Simple",
    "sequence": 7,
    "name": "Type of business",
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch4_s1_field1_hint",
      "sequence": 1,
      "name": "ch4_s1_field1",
      "listOfValues": [{"value": "TBD", "label": "industry_option_8"}, {
        "value": "TBD",
        "label": "structure_option_7"
      }, {"value": "TBD", "label": "industry_option_3"}, {
        "value": "TBD",
        "label": "industry_option_5"
      }, {"value": "TBD", "label": "industry_option_9"}, {
        "value": "TBD",
        "label": "industry_option_2"
      }, {"value": "TBD", "label": "industry_option_1"}, {
        "value": "TBD",
        "label": "industry_option_4"
      }, {"value": "TBD", "label": "industry_option_7"}, {
        "value": "TBD",
        "label": "industry_option_6"
      }, {"value": "TBD", "label": "structure_option_7"}, {
        "value": "TBD",
        "label": "industry_option_3"
      }, {"value": "TBD", "label": "industry_option_5"}, {
        "value": "TBD",
        "label": "industry_option_9"
      }, {"value": "TBD", "label": "industry_option_2"}, {
        "value": "TBD",
        "label": "industry_option_1"
      }, {"value": "TBD", "label": "industry_option_4"}, {
        "value": "TBD",
        "label": "industry_option_7"
      }, {"value": "TBD", "label": "industry_option_6"}],
      "label": "ch4_s1_field1_label",
      "helpText": "ch4_s1_field1_tooltip",
      "description": "ch4_s1_field1_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch4_s1_field2_hint",
      "sequence": 2,
      "name": "ch4_s1_field2",
      "listOfValues": [{"value": "TBD", "label": "activity_option_8"}, {
        "value": "TBD",
        "label": "activity_option_13"
      }, {"value": "TBD", "label": "activity_option_33"}, {
        "value": "TBD",
        "label": "activity_option_36"
      }, {"value": "TBD", "label": "activity_option_14"}, {
        "value": "TBD",
        "label": "activity_option_10"
      }, {"value": "TBD", "label": "activity_option_5"}, {
        "value": "TBD",
        "label": "activity_option_39"
      }, {"value": "TBD", "label": "activity_option_31"}, {
        "value": "TBD",
        "label": "activity_option_15"
      }, {"value": "TBD", "label": "activity_option_25"}, {
        "value": "TBD",
        "label": "activity_option_22"
      }, {"value": "TBD", "label": "activity_option_44"}, {
        "value": "TBD",
        "label": "activity_option_7"
      }, {"value": "TBD", "label": "activity_option_23"}, {
        "value": "TBD",
        "label": "activity_option_30"
      }, {"value": "TBD", "label": "activity_option_21"}, {
        "value": "TBD",
        "label": "activity_option_28"
      }, {"value": "TBD", "label": "activity_option_18"}, {
        "value": "TBD",
        "label": "activity_option_1"
      }, {"value": "TBD", "label": "activity_option_29"}, {
        "value": "TBD",
        "label": "activity_option_6"
      }, {"value": "TBD", "label": "activity_option_11"}, {
        "value": "TBD",
        "label": "activity_option_43"
      }, {"value": "TBD", "label": "structure_option_8"}, {
        "value": "TBD",
        "label": "activity_option_24"
      }, {"value": "TBD", "label": "activity_option_38"}, {
        "value": "TBD",
        "label": "activity_option_27"
      }, {"value": "TBD", "label": "activity_option_4"}, {
        "value": "TBD",
        "label": "activity_option_3"
      }, {"value": "TBD", "label": "activity_option_34"}, {
        "value": "TBD",
        "label": "activity_option_2"
      }, {"value": "TBD", "label": "activity_option_20"}, {
        "value": "TBD",
        "label": "activity_option_35"
      }, {"value": "TBD", "label": "activity_option_42"}, {
        "value": "TBD",
        "label": "activity_option_16"
      }, {"value": "TBD", "label": "activity_option_26"}, {
        "value": "TBD",
        "label": "activity_option_17"
      }, {"value": "TBD", "label": "activity_option_37"}, {
        "value": "TBD",
        "label": "activity_option_32"
      }, {"value": "TBD", "label": "activity_option_12"}, {
        "value": "TBD",
        "label": "activity_option_9"
      }, {"value": "TBD", "label": "activity_option_41"}, {
        "value": "TBD",
        "label": "activity_option_19"
      }, {"value": "TBD", "label": "activity_option_40"}, {
        "value": "TBD",
        "label": "activity_option_5"
      }, {"value": "TBD", "label": "activity_option_39"}, {
        "value": "TBD",
        "label": "activity_option_31"
      }, {"value": "TBD", "label": "activity_option_15"}, {
        "value": "TBD",
        "label": "activity_option_25"
      }, {"value": "TBD", "label": "activity_option_22"}, {
        "value": "TBD",
        "label": "activity_option_44"
      }, {"value": "TBD", "label": "activity_option_7"}, {
        "value": "TBD",
        "label": "activity_option_23"
      }, {"value": "TBD", "label": "activity_option_30"}, {
        "value": "TBD",
        "label": "activity_option_21"
      }, {"value": "TBD", "label": "activity_option_28"}, {
        "value": "TBD",
        "label": "activity_option_18"
      }, {"value": "TBD", "label": "activity_option_1"}, {
        "value": "TBD",
        "label": "activity_option_29"
      }, {"value": "TBD", "label": "activity_option_6"}, {
        "value": "TBD",
        "label": "activity_option_11"
      }, {"value": "TBD", "label": "activity_option_43"}, {
        "value": "TBD",
        "label": "structure_option_8"
      }, {"value": "TBD", "label": "activity_option_24"}, {
        "value": "TBD",
        "label": "activity_option_38"
      }, {"value": "TBD", "label": "activity_option_27"}, {
        "value": "TBD",
        "label": "activity_option_4"
      }, {"value": "TBD", "label": "activity_option_3"}, {
        "value": "TBD",
        "label": "activity_option_34"
      }, {"value": "TBD", "label": "activity_option_2"}, {
        "value": "TBD",
        "label": "activity_option_20"
      }, {"value": "TBD", "label": "activity_option_35"}, {
        "value": "TBD",
        "label": "activity_option_42"
      }, {"value": "TBD", "label": "activity_option_16"}, {
        "value": "TBD",
        "label": "activity_option_26"
      }, {"value": "TBD", "label": "activity_option_17"}, {
        "value": "TBD",
        "label": "activity_option_37"
      }, {"value": "TBD", "label": "activity_option_32"}, {
        "value": "TBD",
        "label": "activity_option_12"
      }, {"value": "TBD", "label": "activity_option_9"}, {
        "value": "TBD",
        "label": "activity_option_41"
      }, {"value": "TBD", "label": "activity_option_19"}, {"value": "TBD", "label": "activity_option_40"}],
      "label": "ch4_s1_field2_label",
      "helpText": "ch4_s1_field2_tooltip",
      "description": "ch4_s1_field2_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch4_s1_field3_hint",
      "sequence": 3,
      "name": "ch4_s1_field3",
      "listOfValues": [{"value": "TBD", "label": "subactivity_option_137"}, {
        "value": "TBD",
        "label": "subactivity_option_188"
      }, {"value": "TBD", "label": "subactivity_option_212"}, {
        "value": "TBD",
        "label": "subactivity_option_45"
      }, {"value": "TBD", "label": "subactivity_option_220"}, {
        "value": "TBD",
        "label": "subactivity_option_206"
      }, {"value": "TBD", "label": "subactivity_option_109"}, {
        "value": "TBD",
        "label": "subactivity_option_251"
      }, {"value": "TBD", "label": "subactivity_option_91"}, {
        "value": "TBD",
        "label": "subactivity_option_76"
      }, {"value": "TBD", "label": "subactivity_option_55"}, {
        "value": "TBD",
        "label": "subactivity_option_66"
      }, {"value": "TBD", "label": "subactivity_option_248"}, {
        "value": "TBD",
        "label": "subactivity_option_126"
      }, {"value": "TBD", "label": "subactivity_option_205"}, {
        "value": "TBD",
        "label": "subactivity_option_245"
      }, {"value": "TBD", "label": "subactivity_option_159"}, {
        "value": "TBD",
        "label": "subactivity_option_53"
      }, {"value": "TBD", "label": "subactivity_option_223"}, {
        "value": "TBD",
        "label": "subactivity_option_239"
      }, {"value": "TBD", "label": "subactivity_option_234"}, {
        "value": "TBD",
        "label": "subactivity_option_232"
      }, {"value": "TBD", "label": "subactivity_option_30"}, {
        "value": "TBD",
        "label": "subactivity_option_172"
      }, {"value": "TBD", "label": "subactivity_option_142"}, {
        "value": "TBD",
        "label": "subactivity_option_203"
      }, {"value": "TBD", "label": "subactivity_option_252"}, {
        "value": "TBD",
        "label": "subactivity_option_183"
      }, {"value": "TBD", "label": "subactivity_option_243"}, {
        "value": "TBD",
        "label": "subactivity_option_176"
      }, {"value": "TBD", "label": "subactivity_option_44"}, {
        "value": "TBD",
        "label": "subactivity_option_154"
      }, {"value": "TBD", "label": "subactivity_option_175"}, {
        "value": "TBD",
        "label": "subactivity_option_130"
      }, {"value": "TBD", "label": "subactivity_option_1"}, {
        "value": "TBD",
        "label": "subactivity_option_58"
      }, {"value": "TBD", "label": "subactivity_option_201"}, {
        "value": "TBD",
        "label": "subactivity_option_13"
      }, {"value": "TBD", "label": "subactivity_option_112"}, {
        "value": "TBD",
        "label": "subactivity_option_52"
      }, {"value": "TBD", "label": "subactivity_option_15"}, {
        "value": "TBD",
        "label": "subactivity_option_263"
      }, {"value": "TBD", "label": "subactivity_option_118"}, {
        "value": "TBD",
        "label": "subactivity_option_240"
      }, {"value": "TBD", "label": "subactivity_option_59"}, {
        "value": "TBD",
        "label": "subactivity_option_113"
      }, {"value": "TBD", "label": "subactivity_option_164"}, {
        "value": "TBD",
        "label": "subactivity_option_24"
      }, {"value": "TBD", "label": "subactivity_option_231"}, {
        "value": "TBD",
        "label": "subactivity_option_186"
      }, {"value": "TBD", "label": "subactivity_option_181"}, {
        "value": "TBD",
        "label": "subactivity_option_107"
      }, {"value": "TBD", "label": "subactivity_option_94"}, {
        "value": "TBD",
        "label": "subactivity_option_146"
      }, {"value": "TBD", "label": "subactivity_option_78"}, {
        "value": "TBD",
        "label": "subactivity_option_81"
      }, {"value": "TBD", "label": "structure_option_9"}, {
        "value": "TBD",
        "label": "subactivity_option_106"
      }, {"value": "TBD", "label": "subactivity_option_2"}, {
        "value": "TBD",
        "label": "subactivity_option_10"
      }, {"value": "TBD", "label": "subactivity_option_169"}, {
        "value": "TBD",
        "label": "subactivity_option_202"
      }, {"value": "TBD", "label": "subactivity_option_193"}, {
        "value": "TBD",
        "label": "subactivity_option_74"
      }, {"value": "TBD", "label": "subactivity_option_194"}, {
        "value": "TBD",
        "label": "subactivity_option_119"
      }, {"value": "TBD", "label": "subactivity_option_258"}, {
        "value": "TBD",
        "label": "subactivity_option_21"
      }, {"value": "TBD", "label": "subactivity_option_88"}, {
        "value": "TBD",
        "label": "subactivity_option_35"
      }, {"value": "TBD", "label": "subactivity_option_182"}, {
        "value": "TBD",
        "label": "subactivity_option_108"
      }, {"value": "TBD", "label": "subactivity_option_100"}, {
        "value": "TBD",
        "label": "subactivity_option_133"
      }, {"value": "TBD", "label": "subactivity_option_224"}, {
        "value": "TBD",
        "label": "subactivity_option_23"
      }, {"value": "TBD", "label": "subactivity_option_120"}, {
        "value": "TBD",
        "label": "subactivity_option_9"
      }, {"value": "TBD", "label": "subactivity_option_115"}, {
        "value": "TBD",
        "label": "subactivity_option_276"
      }, {"value": "TBD", "label": "subactivity_option_95"}, {
        "value": "TBD",
        "label": "subactivity_option_98"
      }, {"value": "TBD", "label": "subactivity_option_7"}, {
        "value": "TBD",
        "label": "subactivity_option_198"
      }, {"value": "TBD", "label": "subactivity_option_227"}, {
        "value": "TBD",
        "label": "subactivity_option_101"
      }, {"value": "TBD", "label": "subactivity_option_269"}, {
        "value": "TBD",
        "label": "subactivity_option_11"
      }, {"value": "TBD", "label": "subactivity_option_51"}, {
        "value": "TBD",
        "label": "subactivity_option_104"
      }, {"value": "TBD", "label": "subactivity_option_226"}, {
        "value": "TBD",
        "label": "subactivity_option_139"
      }, {"value": "TBD", "label": "subactivity_option_264"}, {
        "value": "TBD",
        "label": "subactivity_option_5"
      }, {"value": "TBD", "label": "subactivity_option_26"}, {
        "value": "TBD",
        "label": "subactivity_option_267"
      }, {"value": "TBD", "label": "subactivity_option_114"}, {
        "value": "TBD",
        "label": "subactivity_option_247"
      }, {"value": "TBD", "label": "subactivity_option_156"}, {
        "value": "TBD",
        "label": "subactivity_option_209"
      }, {"value": "TBD", "label": "subactivity_option_65"}, {
        "value": "TBD",
        "label": "subactivity_option_217"
      }, {"value": "TBD", "label": "subactivity_option_63"}, {
        "value": "TBD",
        "label": "subactivity_option_18"
      }, {"value": "TBD", "label": "subactivity_option_244"}, {
        "value": "TBD",
        "label": "subactivity_option_48"
      }, {"value": "TBD", "label": "subactivity_option_121"}, {
        "value": "TBD",
        "label": "subactivity_option_125"
      }, {"value": "TBD", "label": "subactivity_option_170"}, {
        "value": "TBD",
        "label": "subactivity_option_124"
      }, {"value": "TBD", "label": "subactivity_option_138"}, {
        "value": "TBD",
        "label": "subactivity_option_68"
      }, {"value": "TBD", "label": "subactivity_option_73"}, {
        "value": "TBD",
        "label": "subactivity_option_79"
      }, {"value": "TBD", "label": "subactivity_option_228"}, {
        "value": "TBD",
        "label": "subactivity_option_270"
      }, {"value": "TBD", "label": "subactivity_option_80"}, {
        "value": "TBD",
        "label": "subactivity_option_257"
      }, {"value": "TBD", "label": "subactivity_option_131"}, {
        "value": "TBD",
        "label": "subactivity_option_168"
      }, {"value": "TBD", "label": "subactivity_option_97"}, {
        "value": "TBD",
        "label": "subactivity_option_250"
      }, {"value": "TBD", "label": "subactivity_option_256"}, {
        "value": "TBD",
        "label": "subactivity_option_155"
      }, {"value": "TBD", "label": "subactivity_option_6"}, {
        "value": "TBD",
        "label": "subactivity_option_127"
      }, {"value": "TBD", "label": "subactivity_option_74"}, {
        "value": "TBD",
        "label": "subactivity_option_194"
      }, {"value": "TBD", "label": "subactivity_option_119"}, {
        "value": "TBD",
        "label": "subactivity_option_258"
      }, {"value": "TBD", "label": "subactivity_option_21"}, {
        "value": "TBD",
        "label": "subactivity_option_88"
      }, {"value": "TBD", "label": "subactivity_option_35"}, {
        "value": "TBD",
        "label": "subactivity_option_182"
      }, {"value": "TBD", "label": "subactivity_option_108"}, {
        "value": "TBD",
        "label": "subactivity_option_100"
      }, {"value": "TBD", "label": "subactivity_option_133"}, {
        "value": "TBD",
        "label": "subactivity_option_224"
      }, {"value": "TBD", "label": "subactivity_option_23"}, {
        "value": "TBD",
        "label": "subactivity_option_120"
      }, {"value": "TBD", "label": "subactivity_option_9"}, {
        "value": "TBD",
        "label": "subactivity_option_115"
      }, {"value": "TBD", "label": "subactivity_option_276"}, {
        "value": "TBD",
        "label": "subactivity_option_95"
      }, {"value": "TBD", "label": "subactivity_option_98"}, {
        "value": "TBD",
        "label": "subactivity_option_7"
      }, {"value": "TBD", "label": "subactivity_option_198"}, {
        "value": "TBD",
        "label": "subactivity_option_227"
      }, {"value": "TBD", "label": "subactivity_option_101"}, {
        "value": "TBD",
        "label": "subactivity_option_269"
      }, {"value": "TBD", "label": "subactivity_option_11"}, {
        "value": "TBD",
        "label": "subactivity_option_51"
      }, {"value": "TBD", "label": "subactivity_option_104"}, {
        "value": "TBD",
        "label": "subactivity_option_226"
      }, {"value": "TBD", "label": "subactivity_option_139"}, {
        "value": "TBD",
        "label": "subactivity_option_264"
      }, {"value": "TBD", "label": "subactivity_option_5"}, {
        "value": "TBD",
        "label": "subactivity_option_26"
      }, {"value": "TBD", "label": "subactivity_option_267"}, {
        "value": "TBD",
        "label": "subactivity_option_114"
      }, {"value": "TBD", "label": "subactivity_option_247"}, {
        "value": "TBD",
        "label": "subactivity_option_156"
      }, {"value": "TBD", "label": "subactivity_option_209"}, {
        "value": "TBD",
        "label": "subactivity_option_65"
      }, {"value": "TBD", "label": "subactivity_option_217"}, {
        "value": "TBD",
        "label": "subactivity_option_63"
      }, {"value": "TBD", "label": "subactivity_option_18"}, {
        "value": "TBD",
        "label": "subactivity_option_244"
      }, {"value": "TBD", "label": "subactivity_option_48"}, {
        "value": "TBD",
        "label": "subactivity_option_121"
      }, {"value": "TBD", "label": "subactivity_option_125"}, {
        "value": "TBD",
        "label": "subactivity_option_170"
      }, {"value": "TBD", "label": "subactivity_option_124"}, {
        "value": "TBD",
        "label": "subactivity_option_138"
      }, {"value": "TBD", "label": "subactivity_option_68"}, {
        "value": "TBD",
        "label": "subactivity_option_73"
      }, {"value": "TBD", "label": "subactivity_option_79"}, {
        "value": "TBD",
        "label": "subactivity_option_228"
      }, {"value": "TBD", "label": "subactivity_option_270"}, {
        "value": "TBD",
        "label": "subactivity_option_80"
      }, {"value": "TBD", "label": "subactivity_option_257"}, {
        "value": "TBD",
        "label": "subactivity_option_131"
      }, {"value": "TBD", "label": "subactivity_option_168"}, {
        "value": "TBD",
        "label": "subactivity_option_97"
      }, {"value": "TBD", "label": "subactivity_option_250"}, {
        "value": "TBD",
        "label": "subactivity_option_256"
      }, {"value": "TBD", "label": "subactivity_option_155"}, {
        "value": "TBD",
        "label": "subactivity_option_6"
      }, {"value": "TBD", "label": "subactivity_option_127"}, {
        "value": "TBD",
        "label": "subactivity_option_262"
      }, {"value": "TBD", "label": "subactivity_option_82"}, {
        "value": "TBD",
        "label": "subactivity_option_184"
      }, {"value": "TBD", "label": "subactivity_option_140"}, {
        "value": "TBD",
        "label": "subactivity_option_128"
      }, {"value": "TBD", "label": "subactivity_option_90"}, {
        "value": "TBD",
        "label": "subactivity_option_173"
      }, {"value": "TBD", "label": "subactivity_option_161"}, {
        "value": "TBD",
        "label": "subactivity_option_233"
      }, {"value": "TBD", "label": "subactivity_option_167"}, {
        "value": "TBD",
        "label": "subactivity_option_134"
      }, {"value": "TBD", "label": "subactivity_option_40"}, {
        "value": "TBD",
        "label": "subactivity_option_177"
      }, {"value": "TBD", "label": "subactivity_option_195"}, {
        "value": "TBD",
        "label": "subactivity_option_25"
      }, {"value": "TBD", "label": "subactivity_option_242"}, {
        "value": "TBD",
        "label": "subactivity_option_197"
      }, {"value": "TBD", "label": "subactivity_option_60"}, {
        "value": "TBD",
        "label": "subactivity_option_225"
      }, {"value": "TBD", "label": "subactivity_option_272"}, {
        "value": "TBD",
        "label": "subactivity_option_116"
      }, {"value": "TBD", "label": "subactivity_option_152"}, {
        "value": "TBD",
        "label": "subactivity_option_141"
      }, {"value": "TBD", "label": "subactivity_option_149"}, {
        "value": "TBD",
        "label": "subactivity_option_57"
      }, {"value": "TBD", "label": "subactivity_option_143"}, {
        "value": "TBD",
        "label": "subactivity_option_16"
      }, {"value": "TBD", "label": "subactivity_option_8"}, {
        "value": "TBD",
        "label": "subactivity_option_163"
      }, {"value": "TBD", "label": "subactivity_option_255"}, {
        "value": "TBD",
        "label": "subactivity_option_266"
      }, {"value": "TBD", "label": "subactivity_option_229"}, {
        "value": "TBD",
        "label": "subactivity_option_64"
      }, {"value": "TBD", "label": "subactivity_option_277"}, {
        "value": "TBD",
        "label": "subactivity_option_145"
      }, {"value": "TBD", "label": "subactivity_option_36"}, {
        "value": "TBD",
        "label": "subactivity_option_67"
      }, {"value": "TBD", "label": "subactivity_option_165"}, {
        "value": "TBD",
        "label": "subactivity_option_219"
      }, {"value": "TBD", "label": "subactivity_option_37"}, {
        "value": "TBD",
        "label": "subactivity_option_179"
      }, {"value": "TBD", "label": "subactivity_option_46"}, {
        "value": "TBD",
        "label": "subactivity_option_84"
      }, {"value": "TBD", "label": "subactivity_option_4"}, {
        "value": "TBD",
        "label": "subactivity_option_56"
      }, {"value": "TBD", "label": "subactivity_option_19"}, {
        "value": "TBD",
        "label": "subactivity_option_129"
      }, {"value": "TBD", "label": "subactivity_option_102"}, {
        "value": "TBD",
        "label": "subactivity_option_85"
      }, {"value": "TBD", "label": "subactivity_option_31"}, {
        "value": "TBD",
        "label": "subactivity_option_28"
      }, {"value": "TBD", "label": "subactivity_option_213"}, {
        "value": "TBD",
        "label": "subactivity_option_75"
      }, {"value": "TBD", "label": "subactivity_option_43"}, {
        "value": "TBD",
        "label": "subactivity_option_93"
      }, {"value": "TBD", "label": "subactivity_option_260"}, {
        "value": "TBD",
        "label": "subactivity_option_144"
      }, {"value": "TBD", "label": "subactivity_option_218"}, {
        "value": "TBD",
        "label": "subactivity_option_275"
      }, {"value": "TBD", "label": "subactivity_option_187"}, {
        "value": "TBD",
        "label": "subactivity_option_132"
      }, {"value": "TBD", "label": "subactivity_option_96"}, {
        "value": "TBD",
        "label": "subactivity_option_3"
      }, {"value": "TBD", "label": "subactivity_option_211"}, {
        "value": "TBD",
        "label": "subactivity_option_54"
      }, {"value": "TBD", "label": "subactivity_option_174"}, {
        "value": "TBD",
        "label": "subactivity_option_110"
      }, {"value": "TBD", "label": "subactivity_option_158"}, {
        "value": "TBD",
        "label": "subactivity_option_178"
      }, {"value": "TBD", "label": "subactivity_option_216"}, {
        "value": "TBD",
        "label": "subactivity_option_92"
      }, {"value": "TBD", "label": "subactivity_option_111"}, {
        "value": "TBD",
        "label": "subactivity_option_189"
      }, {"value": "TBD", "label": "subactivity_option_261"}, {
        "value": "TBD",
        "label": "subactivity_option_86"
      }, {"value": "TBD", "label": "subactivity_option_222"}, {
        "value": "TBD",
        "label": "subactivity_option_210"
      }, {"value": "TBD", "label": "subactivity_option_62"}, {
        "value": "TBD",
        "label": "subactivity_option_238"
      }, {"value": "TBD", "label": "subactivity_option_71"}, {
        "value": "TBD",
        "label": "subactivity_option_160"
      }, {"value": "TBD", "label": "subactivity_option_190"}, {
        "value": "TBD",
        "label": "subactivity_option_99"
      }, {"value": "TBD", "label": "subactivity_option_69"}, {
        "value": "TBD",
        "label": "subactivity_option_20"
      }, {"value": "TBD", "label": "subactivity_option_33"}, {
        "value": "TBD",
        "label": "subactivity_option_150"
      }, {"value": "TBD", "label": "subactivity_option_117"}, {
        "value": "TBD",
        "label": "subactivity_option_47"
      }, {"value": "TBD", "label": "subactivity_option_70"}, {
        "value": "TBD",
        "label": "subactivity_option_34"
      }, {"value": "TBD", "label": "subactivity_option_192"}, {
        "value": "TBD",
        "label": "subactivity_option_39"
      }, {"value": "TBD", "label": "subactivity_option_151"}, {
        "value": "TBD",
        "label": "subactivity_option_41"
      }, {"value": "TBD", "label": "subactivity_option_180"}, {
        "value": "TBD",
        "label": "subactivity_option_254"
      }, {"value": "TBD", "label": "subactivity_option_72"}, {
        "value": "TBD",
        "label": "subactivity_option_265"
      }, {"value": "TBD", "label": "subactivity_option_273"}, {
        "value": "TBD",
        "label": "subactivity_option_83"
      }, {"value": "TBD", "label": "subactivity_option_157"}, {
        "value": "TBD",
        "label": "subactivity_option_200"
      }, {"value": "TBD", "label": "subactivity_option_147"}, {
        "value": "TBD",
        "label": "subactivity_option_148"
      }, {"value": "TBD", "label": "subactivity_option_38"}, {
        "value": "TBD",
        "label": "subactivity_option_77"
      }, {"value": "TBD", "label": "subactivity_option_136"}, {
        "value": "TBD",
        "label": "subactivity_option_241"
      }, {"value": "TBD", "label": "subactivity_option_274"}, {
        "value": "TBD",
        "label": "subactivity_option_27"
      }, {"value": "TBD", "label": "subactivity_option_237"}, {
        "value": "TBD",
        "label": "subactivity_option_61"
      }, {"value": "TBD", "label": "subactivity_option_214"}, {
        "value": "TBD",
        "label": "subactivity_option_249"
      }, {"value": "TBD", "label": "subactivity_option_259"}, {
        "value": "TBD",
        "label": "subactivity_option_89"
      }, {"value": "TBD", "label": "subactivity_option_185"}, {
        "value": "TBD",
        "label": "subactivity_option_14"
      }, {"value": "TBD", "label": "subactivity_option_22"}, {
        "value": "TBD",
        "label": "subactivity_option_32"
      }, {"value": "TBD", "label": "subactivity_option_171"}, {
        "value": "TBD",
        "label": "subactivity_option_162"
      }, {"value": "TBD", "label": "subactivity_option_204"}, {
        "value": "TBD",
        "label": "subactivity_option_236"
      }, {"value": "TBD", "label": "subactivity_option_246"}, {
        "value": "TBD",
        "label": "subactivity_option_280"
      }, {"value": "TBD", "label": "subactivity_option_230"}, {
        "value": "TBD",
        "label": "subactivity_option_268"
      }, {"value": "TBD", "label": "subactivity_option_208"}, {
        "value": "TBD",
        "label": "subactivity_option_207"
      }, {"value": "TBD", "label": "subactivity_option_29"}, {
        "value": "TBD",
        "label": "subactivity_option_123"
      }, {"value": "TBD", "label": "subactivity_option_235"}, {
        "value": "TBD",
        "label": "subactivity_option_271"
      }, {"value": "TBD", "label": "subactivity_option_196"}, {
        "value": "TBD",
        "label": "subactivity_option_153"
      }, {"value": "TBD", "label": "subactivity_option_253"}, {
        "value": "TBD",
        "label": "subactivity_option_105"
      }, {"value": "TBD", "label": "subactivity_option_281"}, {
        "value": "TBD",
        "label": "subactivity_option_103"
      }, {"value": "TBD", "label": "subactivity_option_87"}, {
        "value": "TBD",
        "label": "subactivity_option_166"
      }, {"value": "TBD", "label": "subactivity_option_122"}, {
        "value": "TBD",
        "label": "subactivity_option_221"
      }, {"value": "TBD", "label": "subactivity_option_279"}, {
        "value": "TBD",
        "label": "subactivity_option_42"
      }, {"value": "TBD", "label": "subactivity_option_12"}, {
        "value": "TBD",
        "label": "subactivity_option_50"
      }, {"value": "TBD", "label": "subactivity_option_49"}, {
        "value": "TBD",
        "label": "subactivity_option_191"
      }, {"value": "TBD", "label": "subactivity_option_17"}, {
        "value": "TBD",
        "label": "subactivity_option_135"
      }, {"value": "TBD", "label": "subactivity_option_278"}, {
        "value": "TBD",
        "label": "subactivity_option_215"
      }, {"value": "TBD", "label": "subactivity_option_199"}],
      "label": "ch4_s1_field3_label",
      "helpText": "ch4_s1_field3_tooltip",
      "description": "ch4_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "vertical_radio_btns",
      "tooltip": "ch4_s1_field4_hint",
      "sequence": 4,
      "name": "ch4_s1_field4",
      "listOfValues": [{"value": "TBD", "label": "vat_option_2"}, {
        "value": "TBD",
        "label": "vat_option_1"
      }, {"value": "TBD", "label": "structure_option_10"}],
      "label": "ch4_s1_field4_label",
      "helpText": "ch4_s1_field4_tooltip",
      "description": "ch4_s1_field4_description"
    }]
  }, {
    "type": "Conditional",
    "sequence": 8,
    "fields": [{
      "validationRules": [{"required": true, "maximum": 10}],
      "type": "text",
      "tooltip": "ch4_s2_field1_hint",
      "sequence": 5,
      "name": "ch4_s2_field1",
      "listOfValues": [{"value": "TBD", "label": "structure_option_11"}],
      "label": "ch4_s2_field1_label",
      "helpText": "ch4_s2_field1_tooltip",
      "description": "ch4_s2_field1_description"
    }]
  }],
  "code": "Chapter_4"
}, {
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 5,
  "sections": [{
    "type": "Simple",
    "sequence": 9,
    "fields": [{
      "validationRules": [{"required": true, "maximumBold": 12, "maximum": 24}],
      "type": "text",
      "tooltip": "ch5_s1_field1_hint",
      "sequence": 1,
      "name": "ch5_s1_field1",
      "label": "ch5_s1_field1_label",
      "helpText": "ch5_s1_field1_tooltip",
      "description": "ch5_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximumBold": 12, "maximum": 24}],
      "type": "text",
      "tooltip": "ch5_s1_field2_hint",
      "sequence": 2,
      "name": "ch5_s1_field2",
      "label": "ch5_s1_field2_label",
      "helpText": "ch5_s1_field2_tooltip",
      "description": "ch5_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximumBold": 12, "maximum": 24}],
      "type": "text",
      "tooltip": "ch5_s1_field3_hint",
      "sequence": 3,
      "name": "ch5_s1_field3",
      "label": "ch5_s1_field3_label",
      "helpText": "ch5_s1_field3_tooltip",
      "description": "ch5_s1_field3_description"
    }, {
      "validationRules": [{"required": true, "maximumBold": 12, "maximum": 24}],
      "type": "text",
      "tooltip": "ch5_s1_field4_hint",
      "sequence": 4,
      "name": "ch5_s1_field4",
      "label": "ch5_s1_field4_label",
      "helpText": "ch5_s1_field4_tooltip",
      "description": "ch5_s1_field4_description"
    }, {
      "validationRules": [{"required": true, "maximumBold": 12, "maximum": 24}],
      "type": "text",
      "tooltip": "ch5_s1_field5_hint",
      "sequence": 5,
      "name": "ch5_s1_field5",
      "label": "ch5_s1_field5_label",
      "helpText": "ch5_s1_field5_tooltip",
      "description": "ch5_s1_field5_description"
    }]
  }, {
    "type": "Conditional",
    "sequence": 10,
    "name": "Delivery",
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "drop_down",
      "tooltip": "ch5_s2_field1_hint",
      "sequence": 6,
      "name": "ch5_s2_field1",
      "listOfValues": [{"value": "TBD", "label": "deadline_option_3"}],
      "label": "ch5_s2_field1_label",
      "helpText": "ch5_s2_field1_tooltip",
      "description": "ch5_s2_field1_description"
    }]
  }],
  "code": "Chapter_5"
}, {
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "WAITING",
  "sequence": 6,
  "sections": [{
    "type": "Simple",
    "sequence": 11,
    "fields": [{
      "validationRules": [{"required": true}],
      "type": "text",
      "tooltip": "ch6_s1_field1_hint",
      "sequence": 1,
      "name": "ch6_s1_field1",
      "label": "ch6_s1_field1_label",
      "helpText": "ch6_s1_field1_tooltip",
      "description": "ch6_s1_field1_description"
    }, {
      "validationRules": [{"required": true, "maximum": 22}],
      "type": "text",
      "tooltip": "ch6_s1_field2_hint",
      "sequence": 2,
      "name": "ch6_s1_field2",
      "label": "ch6_s1_field2_label",
      "helpText": "ch6_s1_field2_tooltip",
      "description": "ch6_s1_field2_description"
    }, {
      "validationRules": [{"required": true, "maximum": 11}],
      "type": "text",
      "tooltip": "ch6_s1_field3_hint",
      "sequence": 3,
      "name": "ch6_s1_field3",
      "label": "ch6_s1_field3_label",
      "helpText": "ch6_s1_field3_tooltip",
      "description": "ch6_s1_field3_description"
    }, {
      "validationRules": [{"required": true}],
      "type": "checkbox",
      "tooltip": "ch6_s1_field4_hint",
      "sequence": 4,
      "name": "ch6_s1_field4",
      "label": "ch6_s1_field4_label",
      "helpText": "ch6_s1_field4_tooltip",
      "description": "ch6_s1_field4_description"
    }]
  }],
  "code": "Chapter_6"
}]
