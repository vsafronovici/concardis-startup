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
      label: 'f1.label',
      help: 'f1.help',
      tooltip: 'tooltip',
      placeholder: 'placeholder',
      optional: true,
      validation: {
        regexp: '^([0-9]{1,})$',
        err: 'err f1'
      }
    },
  ]
}
