import { ssrRenderAttrs } from 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/hookable/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unctx/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unhead/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/h3/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/ufo/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/destr/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/scule/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/klona/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/ohash/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/radix3/dist/index.mjs';
import 'node:async_hooks';
import 'node:fs';
import 'node:url';
import 'file:///Users/menno/Code/nuxt-monorepo-bug/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>HAI</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-cnXjPlyQ.mjs.map
