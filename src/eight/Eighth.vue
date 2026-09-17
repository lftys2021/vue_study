<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Student {
  id: number;
  name: string;
  age: number;
}

const students = ref<Student[]>([]);

async function fetchStudents() {
  const response = await fetch(
    "http://127.0.0.1:8000/students"
  );

  students.value =
    await response.json();
}

onMounted(fetchStudents);
</script>

<template>
  <div>
    <h1>학생 목록</h1>

    <ul>
      <li
        v-for="student in students"
        :key="student.id"
      >
        {{ student.name }}
        -
        {{ student.age }}세
      </li>
    </ul>
  </div>
</template>
<!-- <template>
  <div>
    <h1>8주차 — FastAPI와 Vue 연결</h1>

    <nav>
      <ul>
        <RouterLink to="/">[홈]</RouterLink> |
        <RouterLink to="/posts">[게시글]</RouterLink>
      </ul>
    </nav>
    <hr />

    <main>
      <RouterView />
    </main>
  </div>
</template> -->