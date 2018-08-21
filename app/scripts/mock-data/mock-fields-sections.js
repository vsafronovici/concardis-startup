import { FieldType } from '../utils/constants'

export const mockFieldsSections = {
  current: 1,
  sections: [
    {
      id: 1,
      title: 'section1.title',
      status: 'FINISHED',
      hidden: true,
      fields: [
        {
          id: 1,
          type: FieldType.TEXT,
          name: 'f1',
          label: 'f1.label',
          help: 'f1.help'
        },
        {
          id: 2,
          type: FieldType.TEXT,
          name: 'f2',
          label: 'f2.label',
          help: 'f2.help'
        },
        {
          id: 3,
          type: FieldType.TEXT,
          name: 'f3',
          label: 'f3.label',
          help: 'f3.help'
        },
        {
          id: 4,
          type: FieldType.TEXT,
          name: 'f4',
          label: 'f4.label',
          help: 'f4.help'
        },

      ]
    },
    {
      id: 2,
      title: 'section2.title',
      status: 'IN_PROGRESS',
      hidden: false,
      fields: [
        {
          id: 1,
          type: FieldType.TEXT,
          name: 'f1',
          label: 'f1.label',
          help: 'f1.help'
        },
        {
          id: 2,
          type: FieldType.TEXT,
          name: 'f2',
          label: 'f2.label',
          help: 'f2.help'
        },
        {
          id: 3,
          type: FieldType.TEXT,
          name: 'f3',
          label: 'f3.label',
          help: 'f3.help'
        },
        {
          id: 4,
          type: FieldType.TEXT,
          name: 'f4',
          label: 'f4.label',
          help: 'f4.help'
        },

      ]
    },
    {
      id: 3,
      title: 'section3.title',
      status: 'WAITING',
      hidden: true,
      fields: [
        {
          id: 21,
          type: FieldType.TEXT,
          name: 'f1',
          label: 'f1.label',
          help: 'f1.help'
        },
        {
          id: 22,
          type: FieldType.TEXT,
          name: 'f2',
          label: 'f2.label',
          help: 'f2.help'
        },
        {
          id: 23,
          type: FieldType.TEXT,
          name: 'f3',
          label: 'f3.label',
          help: 'f3.help'
        },
        {
          id: 24,
          type: FieldType.TEXT,
          name: 'f4',
          label: 'f4.label',
          help: 'f4.help'
        },

      ]
    }
  ]
}
