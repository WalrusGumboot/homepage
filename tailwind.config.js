const plugin = require('tailwindcss/plugin')
import { linkGroups } from "./src/lib/elements"

const links = linkGroups.flatMap(e => e.links);

let componentDef = {}

for (let link of links) {
  componentDef[".bg-".concat(link.title.replaceAll(/( |\.)/g, '-'))] = {
    "background-color": `#${link.colour}`
  }
  // console.log(".bg-".concat(link.title.replace(/( |\.)/, "-")))
}


/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {},
  safelist: links.map(e => `bg-${e.title.replaceAll(/( |\.)/g, '-')}`),
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(
        componentDef
      )
    })
  ],
}

export default config;