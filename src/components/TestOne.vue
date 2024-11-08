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
      meta: [
        { property: "og:title", content: "testForMetaTag" },
        {
          property: "og:type",
          content: "website",
        },
      ],
    });
  },
};
</script>
