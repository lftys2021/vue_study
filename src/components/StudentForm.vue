<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const age = ref("");

const emit = defineEmits<{
  add: [
    name: string,
    age: number
  ];
}>();

function addStudent() {
  if (name.value.trim() === "") {
    return;
  }

  const studentAge = Number(age.value);

  if (!studentAge || studentAge <= 0) {
    return;
  }

  emit(
    "add",
    name.value,
    studentAge
  );

  name.value = "";
  age.value = "";
}
</script>

<template>
  <div>
    <input
      v-model="name"
      type="text"
      placeholder="학생 이름"
    />

    <input
      v-model="age"
      type="number"
      placeholder="나이"
    />
    <button @click="addStudent">[학생 추가]</button>
  </div>
</template>