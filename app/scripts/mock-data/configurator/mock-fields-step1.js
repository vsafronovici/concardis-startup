export default [
  { type: 'Slider', title: 'page1.f1.title', options: { sliderValues: ['MinValue', 'InterValue1', 'InterValue2', 'InterValue3', 'InterValue4', 'MaxValue'] }, name: 'page1.f1', label: 'page1.f1.label', defaultValue: 'MinValue' },
  { type: 'Slider', title: 'page1.f2.title', options: { sliderValues: ['MinValue', 'InterValue1', 'InterValue2', 'InterValue3', 'InterValue4', 'MaxValue'] }, name: 'page1.f2', label: 'page1.f2.label', defaultValue: 'MinValue' },
  { type: 'Slider', title: 'page1.f3.title', options: { sliderValues: ['MinValue', 'InterValue1', 'InterValue2', 'InterValue3', 'InterValue4', 'MaxValue'] }, name: 'page1.f3', label: 'page1.f3.label', defaultValue: 'MinValue' },
  {
    validation: {
      validate: true, requiredError: 'Requir', required: true
    },
    type: 'drop_down',
    title: 'page1.f4.title',
    options: {
      dropdownItems: {
        Hotel: 'Hotel', Restaur: 'Restaur', Service: 'Service', Petrol: 'Petrol', Retail: 'Retail', Tourism: 'Tourism'
      }
    },
    name: 'page1.f4',
    label: 'page1.f4.label',
    fieldHint: 'page1.f4.hint'
  }
]
