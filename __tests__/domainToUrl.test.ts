import { domainToUrl } from '../src'

describe('domainToUrl', () => {
  it('should convert scheme and domain to url', () => {
    expect(domainToUrl('https', 'test.com')).toBe('https://www.test.com')
  })
})
