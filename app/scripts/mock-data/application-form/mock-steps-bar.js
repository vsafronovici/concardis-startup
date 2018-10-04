import { ApplicationFormSteps, SectionStatusType } from './../../utils/constants'

export const sectionsMock = [{id: 1, title: ApplicationFormSteps.STEP_1, },
  {	id: 2, title: ApplicationFormSteps.STEP_2, },
  {	id: 3, title: ApplicationFormSteps.STEP_3, },
  {	id: 4, title: ApplicationFormSteps.STEP_4, },
  {	id: 5, title: ApplicationFormSteps.STEP_5, },
  {	id: 6, title: ApplicationFormSteps.STEP_6, },]

  export const sectionsStateMock = [{id: 1, status: SectionStatusType.WAITING},
    {	id: 2, status: SectionStatusType.WAITING },
    {	id: 3, status: SectionStatusType.IN_PROGRESS },
    {	id: 4, status: SectionStatusType.WAITING },
    {	id: 5, status: SectionStatusType.WAITING },
    {	id: 6, status: SectionStatusType.WAITING },]
