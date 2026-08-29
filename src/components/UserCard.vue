<script setup lang="ts">
interface Props {
  id: number;
  name: string;
  age: number;
}

defineProps<Props>();

const emit = defineEmits<{
  delete: [id: number];
}>();

function deleteUser(id: number) {
  emit("delete", id);
}
</script>

<template>
  <div class="user-card">
    <h2>{{ name }}</h2>

    <p>번호: {{ id }}</p>

    <p>나이: {{ age }}</p>
  </div>
  <button @click="deleteUser(id)">[삭제]</button>
</template>

<style scoped>
.user-card {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
</style>