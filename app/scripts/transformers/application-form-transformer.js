import { pickAll } from 'ramda'
import { SectionStatusType } from '../utils/constants'

// export const transformI18N = payload =>


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
  sections.reduce((acc, s) =>
    ({
      ...acc,
      [s.Id]: payload.filter(p => p.section === s.Id).map(p =>
        ({
          ...p,
          options: {
            items: p.options.items
          },
          validation: pickAll(['validate', 'required', 'requiredError', 'regEx'], p.validation)
        })
      ).sort((a, b) => (a.sequence - b.sequence))
    }), {})

export const transformSectionsState = sections =>
  sections.reduce((acc, s, i) =>
    ({
      ...acc,
      [s.Id]: {
        id: s.Id,
        status: i > 0 ? SectionStatusType.WAITING : SectionStatusType.IN_PROGRESS
      }
    }), {})

export const transformFieldsValues = sections =>
  sections.reduce((acc, s) =>
    ({
      ...acc,
      [s.Id]: {}
    }), {})
