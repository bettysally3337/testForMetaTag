<template>
  <div>
    <p>This is the TestOne component.</p>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "testtesttest",
      htmlAttrs: {
        lang: "zh-tw",
      },
    });
  },
};
</script>
