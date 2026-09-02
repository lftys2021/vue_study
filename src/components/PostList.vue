<script setup lang="ts">
import PostItem from "./PostItem.vue";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const props = defineProps<{
  posts: Post[];
}>();

const emit = defineEmits<{
  delete: [id: number];
}>();

function deletePost(id: number) {
  emit("delete", id);
}
</script>

<template>
  <div>
    <PostItem
      v-for="post in props.posts"
      :key="post.id"
      :post="post"
      @delete="deletePost"
    />
  </div>
</template>