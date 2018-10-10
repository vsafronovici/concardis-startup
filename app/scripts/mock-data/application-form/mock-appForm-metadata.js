export default [{
  "title": "chapterMetadata.Title__c",
  "subtitle": "chapterMetadata.Sub_Title__c",
  "status": "FINISHED",
  "sequence": 1,
  "sections": [{
    "sequence": 1,
    "fields": [{
      "type": "horizontal_radio_btns",
      "sequence": 1,
      "required": true,
      "label": "ch1.s1.field1"
    }, {"type": "text", "sequence": 2, "required": true, "label": "ch1.s1.field2"}, {
      "type": "text",
      "sequence": 3,
      "required": true,
      "label": "ch1.s1.field3"
    }, {"type": "text", "sequence": 4, "required": false, "label": "ch1.s1.field4"}, {
      "type": "vertical_radio_btns",
      "sequence": 5,
      "required": true,
      "label": "ch1.s1.field5"
    }]
  }]
}
  , {
    "title": "chapterMetadata.Title__c",
    "subtitle": "chapterMetadata.Sub_Title__c",
    "status": "FINISHED",
    "sequence": 2,
    "sections": [{
      "type": "Simple",
      "sequence": 1,
      "fields": [{"type": "vertical_radio_btns", "required": false, "label": "ch2.s1.field7"}, {
        "type": "text",
        "sequence": 1,
        "required": false,
        "label": "ch2.s1.field1"
      }, {"type": "drop_down", "sequence": 2, "required": false, "label": "ch2.s1.field2"}, {
        "type": "text",
        "sequence": 3,
        "required": false,
        "label": "ch2.s1.field3"
      }, {"type": "drop_down", "sequence": 4, "required": false, "label": "ch2.s1.field4"}, {
        "type": "drop_down",
        "sequence": 5,
        "required": false,
        "label": "ch2.s1.field5"
      }, {"type": "text", "sequence": 6, "required": false, "label": "ch2.s1.field6"}]
    }, {
      "type": "Conditional",
      "sequence": 2,
      "fields": [{"type": "text", "required": false, "label": "ch2.s2.field6", "helpText": "6"}, {
        "type": "text",
        "sequence": 1,
        "required": false,
        "label": "ch1.s1.field1"
      }, {"type": "text", "sequence": 2, "required": false, "label": "ch1.s1.field2"}, {
        "type": "text",
        "sequence": 3,
        "required": false,
        "label": "ch1.s1.field3"
      }, {"type": "text", "sequence": 4, "required": false, "label": "ch2.s2.field4"}, {
        "type": "text",
        "sequence": 5,
        "required": false,
        "label": "ch2.s2.field5"
      }, {"type": "text", "sequence": 7, "required": false, "label": "ch2.s2.field7"}, {
        "type": "text",
        "sequence": 8,
        "required": false,
        "label": "ch2.s2.field8"
      }]
    }, {
      "type": "Conditional Repetitive",
      "sequence": 3,
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch1.s1.field1"}, {
        "type": "text",
        "sequence": 2,
        "required": false,
        "label": "ch1.s1.field2"
      }, {"type": "text", "sequence": 3, "required": false, "label": "ch1.s1.field3"}, {
        "type": "text",
        "sequence": 4,
        "required": false,
        "label": "ch2.s2.field4"
      }, {"type": "text", "sequence": 5, "required": false, "label": "ch2.s2.field5"}, {
        "type": "text",
        "sequence": 6,
        "required": false,
        "label": "ch2.s2.field6"
      }, {"type": "text", "sequence": 7, "required": false, "label": "ch2.s2.field7"}, {
        "type": "text",
        "sequence": 8,
        "required": false,
        "label": "ch2.s2.field8"
      }, {"type": "text", "sequence": 9, "required": false, "label": "ch2.s2.field9"}]
    }]
  },
  {
    "title": "chapterMetadata.Title__c",
    "subtitle": "chapterMetadata.Sub_Title__c",
    "status": "FINISHED",
    "sequence": 3,
    "sections": [{
      "sequence": 5,
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch3.s1.field1"}, {
        "type": "text",
        "sequence": 2,
        "required": false,
        "label": "ch3.s1.field2"
      }, {"type": "text", "sequence": 3, "required": false, "label": "ch3.s1.field3"}, {
        "type": "drop_down",
        "sequence": 4,
        "required": false,
        "label": "ch3.s1.field4"
      }, {"type": "text", "sequence": 5, "required": false, "label": "ch3.s1.field5"}, {
        "type": "text",
        "sequence": 6,
        "required": false,
        "label": "ch3.s1.field6"
      }, {"type": "text", "sequence": 7, "required": false, "label": "ch3.s1.field7"}]
    }, {
      "sequence": 6,
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch3.s1.field1"}, {
        "type": "text",
        "sequence": 2,
        "required": false,
        "label": "ch3.s1.field2"
      }, {"type": "text", "sequence": 3, "required": false, "label": "ch3.s1.field3"}, {
        "type": "drop_down",
        "sequence": 4,
        "required": false,
        "label": "ch3.s1.field4"
      }]
    }]
  },
  {
    "title": "chapterMetadata.Title__c",
    "subtitle": "chapterMetadata.Sub_Title__c",
    "status": "FINISHED",
    "sequence": 4,
    "sections": [{
      "type": "Simple",
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch4.s2.field1"}]
    }, {
      "type": "Simple",
      "fields": [{
        "type": "drop_down",
        "sequence": 1,
        "required": false,
        "label": "ch4.s1.field1"
      }, {"type": "drop_down", "sequence": 2, "required": false, "label": "ch4.s1.field2"}, {
        "type": "drop_down",
        "sequence": 3,
        "required": false,
        "label": "ch4.s1.field3"
      }, {"type": "vertical_radio_btns", "sequence": 4, "required": false, "label": "ch4.s1.field4"}]
    }]
  }
  , {
    "title": "chapterMetadata.Title__c",
    "subtitle": "chapterMetadata.Sub_Title__c",
    "status": "IN_PROGRESS",
    "sequence": 5,
    "sections": [{
      "type": "Conditional",
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch5.s2.field1"}]
    }, {
      "type": "Simple",
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch5.s1.field1"}, {
        "type": "text",
        "sequence": 2,
        "required": false,
        "label": "ch5.s1.field2"
      }, {"type": "text", "sequence": 3, "required": false, "label": "ch5.s1.field3"}, {
        "type": "text",
        "sequence": 4,
        "required": false,
        "label": "ch5.s1.field4"
      }, {"type": "text", "sequence": 5, "required": false, "label": "ch5.s1.field5"}]
    }]
  }, {
    "title": "chapterMetadata.Title__c",
    "subtitle": "chapterMetadata.Sub_Title__c",
    "status": "WAITING",
    "sequence": 6,
    "sections": [{
      "type": "Simple",
      "fields": [{"type": "text", "sequence": 1, "required": false, "label": "ch6.s1.field1"}, {
        "type": "text",
        "sequence": 2,
        "required": false,
        "label": "ch6.s1.field2"
      }, {"type": "text", "sequence": 3, "required": false, "label": "ch6.s1.field3"}, {
        "type": "text",
        "sequence": 4,
        "required": false,
        "label": "ch6.s1.field4"
      }]
    }]
  }]
