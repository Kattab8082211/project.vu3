<template>
  <div>
    <h1>📡 عرض البيانات من API</h1>

    <!-- عرض البيانات لو فيه نتائج -->
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <p v-else>⏳ جاري التحميل...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error("حدث خطأ:", error);
      });
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h2 {
  margin: 0;
  font-size: 18px;
}
li {
  background: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
