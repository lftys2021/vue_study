<!-- <script setup lang="ts">
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
</template> -->

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { usePostStore } from "../stores/post";

const postStore = usePostStore();

const {
  posts,
  searchText,
  filteredPosts,
  postCount
} = storeToRefs(postStore);
</script>

<template>
  <div>
    <h1>게시글 목록</h1>

    <p>
      전체 게시글:
      {{ postCount }}개
    </p>

    <input
      v-model="searchText"
      placeholder="게시글 검색"
    />

    <ul>
      <li
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <RouterLink
          :to="`/posts/${post.id}`"
        >
          {{ post.title }}
        </RouterLink>

        -
        {{ post.author }}

        <button
          @click="postStore.deletePost(post.id)"
        >
          삭제
        </button>
      </li>
    </ul>
  </div>
</template>
