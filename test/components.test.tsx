import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Header from '../src/components/Header'

describe('Header', () => {
  it('should render', () => {
    render(<Header />)
  })
})
