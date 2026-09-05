<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Vue 공부",
    content: "Vue를 공부하고 있습니다.",
    author: "홍길동"
  },
  {
    id: 2,
    title: "TypeScript 공부",
    content: "TypeScript를 공부하고 있습니다.",
    author: "김철수"
  },
  {
    id: 3,
    title: "FastAPI 공부",
    content: "FastAPI를 공부하고 있습니다.",
    author: "이영희"
  }
];

const route = useRoute();

const postId = computed(() => {
  return Number(route.params.id);
});

const post = computed(() => {
  return posts.find(
    (post) => post.id === postId.value
  );
});
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>

    <p>
      작성자:
      {{ post.author }}
    </p>

    <hr />

    <p>
      {{ post.content }}
    </p>
  </div>

  <div v-else>
    <h1>게시글을 찾을 수 없습니다.</h1>
  </div>

  <RouterLink to="/posts">
    목록으로
  </RouterLink>
</template>