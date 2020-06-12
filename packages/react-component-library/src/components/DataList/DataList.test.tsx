import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DataList, DataListItem } from '.'

describe('DataList', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <DataList title="title">
          <DataListItem description="One">1</DataListItem>
          <DataListItem description="Two">2</DataListItem>
          <DataListItem description="Three">3</DataListItem>
        </DataList>
      )
    })

    it('should render the title', () => {
      expect(wrapper.queryByText('title')).toBeInTheDocument()
    })

    it('should not render the badge', () => {
      expect(wrapper.queryAllByTestId('badge')).toHaveLength(0)
    })

    it('should render a list of items', () => {
      const linkElements = wrapper.queryAllByTestId('data-list-item')
      expect(linkElements).toHaveLength(3)
    })
  })

  describe('when collapsible', () => {
    beforeEach(() => {
      wrapper = render(
        <DataList title="title" isCollapsible>
          <DataListItem description="One">1</DataListItem>
          <DataListItem description="Two">2</DataListItem>
          <DataListItem description="Three">3</DataListItem>
        </DataList>
      )
    })

    it('should hide the items', () => {
      expect(wrapper.queryByTestId('data-list').classList).not.toContain('is-expanded')
    })

    it('should render the badge', () => {
      expect(wrapper.queryByTestId('badge')).toHaveTextContent('3')
    })

    describe('when the header is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('data-list-header').click()
      })

      it('should show the items', () => {
        expect(wrapper.queryByTestId('data-list').classList).toContain('is-expanded')
      })
    })
  })
})
