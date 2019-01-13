import Vue from 'vue'
import { configure } from '@storybook/vue'

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
