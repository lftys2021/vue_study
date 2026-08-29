<script setup lang="ts">
interface Student {
  id: number;
  name: string;
  age: number;
}

defineProps<{
  student: Student;
}>();

const emit = defineEmits<{
  delete: [id: number];
}>();
</script>

<template>
  <li>
    <span>
      {{ student.id }}.
      {{ student.name }}
      ({{ student.age }}세)
    </span>

    <button @click="emit('delete', student.id)">[삭제]</button>
  </li>
</template>