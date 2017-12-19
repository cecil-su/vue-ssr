import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  console.log('create router')
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: {
        template: '<div>app</div>'
      }}
    ]
  })
}