import { FieldType, SectionStatusType } from '../../utils/constants'

export default {
  name: 'some name',
  title: 'title of section',
  help: 'text under title',
  status: SectionStatusType.IN_PROGRESS,

  fields: [
    {
      name: 'f3',
      type: FieldType.VERTICAL_RADIO_BTNS,
      label: 'Is your business VAT registered?',
      help: 'f2.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: [{value: '1', label: 'Yes'},{value:'2', label:'I\'m not the owner but I have the power of attorney'}],
    },
    {
      name: 'f1',
      type: FieldType.TEXT,
      label: 'f1.label',
      help: 'f1.help',
      tooltip: 'tooltip',
      placeholder: 'placeholder',
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
    {
      name: 'f2',
      type: FieldType.TEXT,
      label: 'f2.label',
      help: 'f2.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
    {
      name: 'f5',
      type: FieldType.BOXED_CHECKBOX,
      label: 'Outlet address',
      help: 'Provide it if you\'re going to use a terminal at a different address\n' +
        'than registered or correspondence addresses.',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: [{value: '1', label: 'Yes'},{value:'2', label:'I\'m not the owner but I have the power of attorney'}],
    },
    {
      name: 'f4',
      type: FieldType.BOXED_RADIO_BTNS,
      value: '2',
      label: 'f4.label',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: true,
      options: [{value: '1', label: 'Sole owner', label2: 'I own 100% of the company, and there\'s no other beneficial owners.'},
        {value:'2', label:'Other owners have more than 25%', label2: 'There is one or more additional owners who own more than 25% of\n' +
            'my business'},
        {value:'3', label:'Other owners own less than 25%', label2: 'There is one or more additional owners but they owe less than 25% of\n' +
            'my business'}],
      value: false,
      validation: {
        regexp: null,
        err: 'err f1'
      }
    },
    {
      name: 'f6',
      type: FieldType.CHECKBOX,
      label: ' authorise - if not already done - Concardis GmbH (hereinafter referred to as "Concardis") to\n' +
        'collect payments from my account by direct debit. At the same time, I instruct my bank to\n' +
        'redeem the direct debits drawn into my account by Concardis.\n' +
        'Please note: I can request a refund of the debited amount within 8 weeks of the debit date.\n' +
        'The terms and conditions agreed with my bank shall apply. Concardis will give advance notice\n' +
        'of the direct debit with due date and amount at least 1 day before the direct debit is collected',
      help: 'Provide it if you\'re going to use a terminal at a different address\n' +
        'than registered or correspondence addresses.',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      value: false,
      validation: {
        regexp: null,
        err: 'err f1'
      }
    },
    {
      name: 'f7',
      type: FieldType.BOXED_CHECKBOX_GROUP,
      label: 'f4.label',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      fields: [
        {
          name: 'f999',
          value: false,
          label: 'some label',
          help: 'help text'
        },
        {
          name: 'f888',
          value: true,
          label: 'some label',
          help: 'help text'
        }
      ]
,
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
    {
      name: 'f8',
      type: FieldType.DROPDOWN,
      value: '1',
      label: 'f4.label',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: {
        items: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'}
        ]
      }
      ,
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
    {
      name: 'f9',
      type: FieldType.HORIZONTAL_RADIO_BTNS,
      value: '1',
      label: 'f4.label',
      title: 'title',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'}
      ]
      ,
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
    {
      name: 'f10',
      type: FieldType.DATE,
      value: '1',
      label: 'f4.label',
      title: 'title',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'}
      ]
    },
    {
      name: 'f11',
      type: FieldType.TEXT_BOLD,
      value: '1',
      helpBold: 'max 12 characters in bold',
      label: 'f4.label',
      title: 'Trading name',
      help: 'f4.help',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      optional: false,
      options: [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'}
      ]
    },
  ]
}
