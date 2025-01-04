# charcoal-ui-vue

> [!NOTE]
> This is NOT an official product and highly experimental at current state.

# install

```sh
pnpm add charcoal-ui-vue
```

main.ts

```ts
import { createApp } from "vue";
import charcoal from "charcoal-ui-vue";

createApp(App).use(charcoal)
```

vite.config.ts
```ts
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement(tag) {
            return tag === "pixiv-icon";
          },
        },
      },
    }),
  ],
});
```

App.vue

```vue
<script setup lang="ts">
import { ref } from "vue";
const text = ref("");
</script>

<template>
  <ch-button>hi</ch-button>
  <ch-text-field v-model="text" />
</template>

<style>
@import "charcoal-ui-vue/dist/index.css";
</style>

```

For component types see https://github.com/vuejs/language-tools/wiki/Global-Component-Types