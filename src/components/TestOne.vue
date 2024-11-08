<template>
  <div>
    <p>This is the TestOne component.</p>
  </div>
  <blockquote>
    使用 useMeta <br />
    ({ title: "testtesttest",
    <br />meta: [ <br />{property: "og:title", content: "testOne" }, <br />{
    property: "og:type", content: "website" }, <br />{property: "og:url",
    content: "https://20241108opengraph.netlify.app/testone",}, <br />{
    property: "og:image",
    content:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s",
    }
  </blockquote>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "testtesttest",
      meta: [
        { property: "og:site_name", content: "Lexi Site" },
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
