/* eslint-disable */
import range from '../src/alpha'
import * as errors from '../src/errors'
import {argsToResultFactory, argsToErrorFactory} from './util'

const argsToResult = argsToResultFactory(range)
const argsToError = argsToErrorFactory(range)

describe('Alpha export', () => {
  it('returns an inclusive array of lowercase letters', () => {
    argsToResult(['a', 'e'], ['a', 'b', 'c', 'd', 'e'])
    argsToResult(['e', 'a'], ['e', 'd', 'c', 'b', 'a'])
  })

  it('returns an inclusive array of uppercase letters', () => {
    argsToResult(['A', 'E'], ['A', 'B', 'C', 'D', 'E'])
    argsToResult(['E', 'A'], ['E', 'D', 'C', 'B', 'A'])
  })

  it('returns an inclusive array of integer stepped letters', () => {
    argsToResult(['a', 'e', 2], ['a', 'c', 'e'])
    argsToResult(['e', 'a', -2], ['e', 'c', 'a'])
    argsToResult(['A', 'E', 2], ['A', 'C', 'E'])
    argsToResult(['E', 'A', -2], ['E', 'C', 'A'])
  })

  it('handles step of 0', () => {
    argsToResult(['a', 'c', 0], ['a', 'a', 'a'])
    argsToResult(['c', 'a', 0], ['c', 'c', 'c'])
  })

  it('throws if step is not an integer', () => {
    argsToError(['a', 'e', 0.5], errors.StepIsNotInteger)
  })
})
