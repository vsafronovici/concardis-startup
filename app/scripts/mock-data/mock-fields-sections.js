import { FieldType } from '../utils/constants'

export const mockFieldsSections = {
    '1': {
      title: 'section1.title',
      status: 'FINISHED',
      hidden: true,
      fields: [
        {
          id: 1,
          type: FieldType.TEXT,
          name: 'f1',
          label: 'f1.label',
          help: 'f1.help',
          value: 1,
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
            regEx: '^[0-9]+$', // if needed, otherwise don't provide this property
          }
        },
        {
          id: 2,
          type: FieldType.DROPDOWN,
          name: 'f2',
          label: 'f2.label',
          help: 'f2.help',
          value: 'No',
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
          },
          options: {
            items: { No: 'No', Yes: 'Yes' }
          }
        },
        {
          id: 3,
          type: FieldType.TEXT,
          name: 'f3',
          label: 'f3.label',
          help: 'f3.help',
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
          }
        },
        {
          id: 4,
          type: FieldType.TEXT,
          name: 'f4',
          label: 'f4.label',
          help: 'f4.help',
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
          }
        },

      ]

    },
    '2': {
      title: 'section2.title',
      status: 'IN_PROGRESS',
      hidden: false,
      fields: [
        {
          id: 1,
          type: FieldType.TEXT,
          name: 'f1',
          label: 'f1.label',
          help: 'f1.help',
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
          }
        },
        {
          id: 2,
          type: FieldType.TEXT,
          name: 'f2',
          label: 'f2.label',
          help: 'f2.help',
          validation: {
            validate: true, // if needed, otherwise false
            required: true, // if needed, otherwise false or don't provide this property
            requiredError: 'err.required',
          }
        },
        {
          id: 3,
          type: FieldType.TEXT,
          name: 'f3',
          label: 'f3.label',
          help: 'f3.help',
          validation: {
            validate: false, // if needed, otherwise false
          }
        },
        {
          id: 4,
          type: FieldType.TEXT,
          name: 'f4',
          label: 'f4.label',
          help: 'f4.help',
          validation: {
            validate: false, // if needed, otherwise false
          }
        },

      ]
    }
}
