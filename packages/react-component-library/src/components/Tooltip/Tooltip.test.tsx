import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Tooltip, TOOLTIP_POSITION } from '.'

describe('Tooltip', () => {
  let wrapper: RenderResult

  describe('When no default position is provided', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip />)
    })

    it('should not include an id', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute('id', '')
    })

    it('should include the tooltip css class', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveClass('rn-tooltip')
    })

    it('should set a default position', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveClass('rn-tooltip--above')
    })
  })

  describe('When a position relative to is provided', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip position={TOOLTIP_POSITION.BELOW} />)
    })

    it('should set the position', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveClass('rn-tooltip--below')
    })
  })

  describe('When an id is provided', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip id="ID123" />)
    })

    it('should set the id', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute('id', 'ID123')
    })
  })

  describe('When a title is provided', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip title="Test Title" />)
    })

    it('should display a title', () => {
      expect(wrapper.getByTestId('tooltip-title')).toBeInTheDocument()
    })
  })

  describe('when a position it provided', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip top={100} left={200} />)
    })

    it('should include the position', () => {
      expect(wrapper.getByTestId('tooltip').getAttribute('style')).toContain(
        'left: 200px'
      )
      expect(wrapper.getByTestId('tooltip').getAttribute('style')).toContain(
        'top: 100px'
      )
    })
  })
})
