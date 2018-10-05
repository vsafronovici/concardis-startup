import { FieldType, SectionStatusType } from '../../utils/constants'

export default {
  name: 'some name',
  title: 'title of section',
  help: 'text under title',
  status: SectionStatusType.IN_PROGRESS,

  fields: [
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
      name: 'f4',
      type: FieldType.BOXED_RADIO_BTNS,
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
    },
    {
      name: 'f5',
      type: FieldType.BOXED_CHECKBOX,
      label: 'Outlet address',
      help: 'Provide it if you\'re going to use a terminal at a different address\n' +
        'than registered or correspondence addresses.',
      tooltip: 'tooltip2',
      placeholder: 'placeholder',
      options: [{value: '1', label: 'Sole owner', label2: 'I own 100% of the company, and there\'s no other beneficial owners.'},
        {value:'2', label:'Other owners have more than 25%', label2: 'There is one or more additional owners who own more than 25% of\n' +
            'my business'},
        {value:'3', label:'Other owners own less than 25%', label2: 'There is one or more additional owners but they owe less than 25% of\n' +
            'my business'}],
      value: false,
    }
  ]
}
