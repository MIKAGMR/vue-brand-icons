const path = require('path')
const simple = require('simple-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const componentTemplate = (name, svg) => `
export default {
  name: '${name}',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')}
  }
}
`.trim()

const handleComponentName = name => name
  .replace('500px', 'FiveHundredPx')
  .replace(/&amp;/g, "&")
  .replace(/&apos;/g, "’")
  .replace(/\+/g, "plus")
  .replace(/^\./, "dot-")
  .replace(/\.$/, "-dot")
  .replace(/\./g, "-dot-")
  .replace(/^&/, "and-")
  .replace(/&$/, "-and")
  .replace(/&/g, "-and-")
  .replace(/[ !’]/g, "")
  .replace(/à|á|â|ã|ä/, "a")
  .replace(/ç/, "c")
  .replace(/è|é|ê|ë/, "e")
  .replace(/ì|í|î|ï/, "i")
  .replace(/ñ/, "n")
  .replace(/ò|ó|ô|õ|ö/, "o")
  .replace(/ù|ú|û|ü/, "u")
  .replace(/ý|ÿ/, "y")

const icons = Object.values(simple).map((icon) => ({
  name: icon.title,
  slug: pascalCase(handleComponentName(`${icon.title}-icon`)),
  svg: icon.svg
}))

Promise.all(icons.map(icon => {
  // const svg = simple[icon.name].toSvg()
  const component = componentTemplate(icon.slug, icon.svg)
  const filepath = `./src/components/${icon.slug}.js`
  return fs.ensureDir(path.dirname(filepath))
    .then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(() => {
  const main = icons
    .map(icon => `export { default as ${icon.slug} } from '../icons/${icon.slug}'`)
    .join('\n\n')
  return fs.outputFile('./src/index.js', main, 'utf8')
})
