<template>
  <div>
    <p>This is the NoSiteName component.</p>
  </div>
  <blockquote>
    沒有使用 { property: "og:site_name", content: "TEST" },
  </blockquote>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      meta: [
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://20241108opengraph.netlify.app/testone",
        },
        {
          property: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s",
        },
      ],
    });
  },
};
</script>
<style>
blockquote {
  background-color: gainsboro;
  text-align: start;
}
</style>
