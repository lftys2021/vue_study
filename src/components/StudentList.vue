<script setup lang="ts">
import StudentItem from "./StudentItem.vue";

interface Student {
  id: number;
  name: string;
  age: number;
}

defineProps<{
  students: Student[];
}>();

const emit = defineEmits<{
  delete: [id: number];
}>();
</script>

<template>
  <ul>
    <StudentItem
      v-for="student in students"
      :key="student.id"
      :student="student"
      @delete="emit('delete', $event)"
    />
  </ul>
</template>