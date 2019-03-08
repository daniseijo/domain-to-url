import { domainToUrl } from '../src'

describe('domainToUrl', () => {
  it('should convert scheme and domain to url', () => {
    expect(domainToUrl('https', 'test.com')).toBe('https://www.test.com')
  })
  it('should fail when scheme is not http or https', () => {
    expect(() => {
      domainToUrl('fail', 'test.com')
    }).toThrowError()
  })
  it('should fail when domain has more than 2 dots', () => {
    expect(() => {
      domainToUrl('http', 'api.test.com')
    }).toThrowError()
  })
})
