import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieList from '../components/MovieList.vue'

describe('MovieList', () => {
  it('renders the heading', () => {
    const wrapper = mount(MovieList)
    expect(wrapper.text()).toContain('My Movie Watchlist')
  })

  it('renders the add movie form', () => {
    const wrapper = mount(MovieList)
    expect(wrapper.text()).toContain('Add a Movie')
  })

  it('renders the add movie button', () => {
    const wrapper = mount(MovieList)
    expect(wrapper.text()).toContain('Add Movie')
  })
})
