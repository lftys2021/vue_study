<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const props = defineProps<{
  post: Post;
}>();

const emit = defineEmits<{
  delete: [id: number];
}>();

function deletePost() {
  emit("delete", props.post.id);
}
</script>

<template>
  <article class="post">
    <h2>{{ props.post.title }}</h2>

    <p>
      {{ props.post.content }}
    </p>

    <small>
      작성자: {{ props.post.author }}
    </small>

    <br />

    <button @click="deletePost">
      삭제
    </button>
  </article>
</template>

<style scoped>
.post {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
</style>