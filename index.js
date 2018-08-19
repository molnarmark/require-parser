module.exports = function RequireParser(text, opts = {}) {
  return text.match(/require\(.*?\)/g)
    .map(match => {
      const modulePath = match.match(/\(.*?\)/g)[0].replace(/\(|\)|'/g, '')
      return {
        originalMatch: match,
        modulePath,
        isInstalledModule: !modulePath.includes('.')
      }
    })
}