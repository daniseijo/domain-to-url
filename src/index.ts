export const domainToUrl = (scheme: string, domain: string) => {
  if (scheme !== 'http' && scheme !== 'https') {
    throw Error('Scheme must be http or https')
  }
  if (domain.split('.').length !== 2) {
    throw new Error('Domain must be of type "domain.com"')
  }
  return `${scheme}://www.${domain}`
}
