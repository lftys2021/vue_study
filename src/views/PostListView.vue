<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  author: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Vue 공부",
    author: "홍길동"
  },
  {
    id: 2,
    title: "TypeScript 공부",
    author: "김철수"
  },
  {
    id: 3,
    title: "FastAPI 공부",
    author: "이영희"
  }
];
</script>

<template>
  <div>
    <h1>게시글 목록</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        [<RouterLink :to="`/posts/${post.id}`">
          {{ post.title }}
        </RouterLink>]
        | {{ post.author }}
      </li>
    </ul>
  </div>
</template>