import { pickAll } from 'ramda'
import { SectionStatusType } from '../utils/constants'

export const transformSectionsMeta = payload =>
  payload.map(p =>
    ({
      id: p.Id,
      title: p.Question__c,
      type: p.Type__c,
      conditionQuestion: p.Condition_Question__c,
      conditionAnswer: p.Condition_Answers__c && p.Condition_Answers__c.split(';')[0]
    })
  )


export const transformFieldsMeta = (payload, sections) =>
  sections.map(s =>
    ({
      [s.id]: payload.filter(p => p.section === s.id).map(p =>
        ({
          ...p,
          options: {
            items: p.options.items
          },
          validation: pickAll(['validate', 'required', 'requiredError', 'regEx'])
        })
      )
    })
  )
  /*payload.map(p =>
    ({
      ...p,
      options: {
        items: p.options.items
      },
      validation: pickAll(['validate', 'required', 'requiredError', 'regEx'])
    })
  )*/

export const transformSectionsState = sections =>
  sections.map((s, i) =>
    ({
      [s.id]: {
        id: s.id,
        status: i > 0 ? SectionStatusType.WAITING : SectionStatusType.IN_PROGRESS
      }
    })
  )

export const transformFieldsValues = sections =>
  sections.map(s => ({ [s.id]: {} }))
