const plugin = require('tailwindcss/plugin')
import { linkGroups } from "./src/lib/elements"

const links = linkGroups.flatMap(e => e.links);

let componentDef = {}

for (let link of links) {
  componentDef[".bg-".concat(link.title)] = {
    "background-color": `#${link.colour}`
  }
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {},
  safelist: links.map(e => `bg-${e.title}`),
  plugins: [
    plugin(function ({addComponents}) {
      addComponents(
        componentDef
      )
    })
  ],
}

export default config;