import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d119cc9 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _3989033b = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _1cae586c = () => interopDefault(import('../pages/posts/add.vue' /* webpackChunkName: "pages/posts/add" */))
const _5eb0d9dc = () => interopDefault(import('../pages/posts/edit/_id.vue' /* webpackChunkName: "pages/posts/edit/_id" */))
const _df36cf3a = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _9ed30792 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _0d119cc9,
    name: "list"
  }, {
    path: "/posts",
    component: _3989033b,
    name: "posts"
  }, {
    path: "/posts/add",
    component: _1cae586c,
    name: "posts-add"
  }, {
    path: "/posts/edit/:id?",
    component: _5eb0d9dc,
    name: "posts-edit-id"
  }, {
    path: "/posts/:id",
    component: _df36cf3a,
    name: "posts-id"
  }, {
    path: "/",
    component: _9ed30792,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
