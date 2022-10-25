import { render } from '@testing-library/react'
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.js'

describe('QandA component', () => {
  test('it renders', () => {
    render(<QuestionsAndAnswers currentProductID={37311} currentProductName={'Camo Onsie'} />)
  })
})