<template>
  <div class="flote">
    <TheProdect />
  </div>
</template>

<script>
import TheProdect from "@/components/ProductAll.vue";

export default {
  name: "HomePage",
  components: {
    TheProdect,
  },
};
</script>

<style>
.flote {
  margin-top: 90px;
}
</style>
