<script setup lang="ts">
import { useStudentStore  } from "../stores/student";

const studentStore = useStudentStore();
</script>

<template>
    <div>
        <h1>학생 목록</h1>

        <ul>
        <li
            v-for="student in studentStore.students"
            :key="student.id"
        >
            {{ student.name }}
            ({{ student.age }}세)
        </li>
        </ul>
    </div>
</template>