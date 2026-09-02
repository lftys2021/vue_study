<script setup lang="ts">
interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
}

const props = defineProps<{
  student: Student;
}>();

const emit = defineEmits<{
  delete: [id: number];
}>();

function deleteStudent() {
  emit("delete", props.student.id);
}
</script>

<template>
  <div>
    <h2>{{ props.student.name }}</h2>

    <p>번호: {{ props.student.id }}</p>
    <p>나이: {{ props.student.age }}</p>
    <p>이메일: {{ props.student.email }}</p>
    <button @click="deleteStudent">
      [삭제]
    </button>
  </div>
</template>