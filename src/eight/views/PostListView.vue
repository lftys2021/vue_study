<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const posts = ref<Post[]>([]);
const loading = ref(false);
const error = ref("");

async function fetchPosts() {
  loading.value = true;
  error.value = "";
  try {
    const response = await fetch("http://localhost:8000/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    posts.value = await response.json();
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An unknown error occurred";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
    <div>
        <h1>Post List</h1>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            - <p>{{ post.content }}</p>
            - <small>Author: {{ post.author }}</small>
            </li>
        </ul>
    </div>
</template>