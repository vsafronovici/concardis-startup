import { SectionType } from '../utils/constants'

export const mockSectionsMeta = [
    {
      id: '1',
      title: 'section1.title',
      type: SectionType.SIMPLE,
    },
    {
      id: '2',
      title: 'section2.title',
      type: SectionType.CONDITIONAL,
      Condition_Answers: 'Yes;No',
      Condition_Question: 'Altern'
    }
]


