<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
// import Second from './components/Second.vue';
// import TodoInput from './components/TodoInput.vue';
// import TodoList from './components/TodoList.vue';
// import { ref } from "vue";
// import UserCard from "./components/UserCard.vue";

// const users = [
//   {
//     id: 1,
//     name: "홍길동",
//     age: 30
//   },
//   {
//     id: 2,
//     name: "김철수",
//     age: 25
//   },
//   {
//     id: 3,
//     name: "이영희",
//     age: 28
//   }
// ];

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const users = ref<User[]>([
//   {
//     id: 1,
//     name: "홍길동",
//     age: 30
//   },
//   {
//     id: 2,
//     name: "김철수",
//     age: 25
//   },
//   {
//     id: 3,
//     name: "이영희",
//     age: 28
//   }
// ]);

// function deleteUser(id: number) {
//   users.value = users.value.filter(
//     (user) => user.id !== id
//   );
// }

import { ref, computed } from "vue";

import StudentForm from "./components/StudentForm.vue";
import StudentList from "./components/StudentList.vue";

interface Student {
  id: number;
  name: string;
  age: number;
}

const students = ref<Student[]>([
  {
    id: 1,
    name: "홍길동",
    age: 20
  },
  {
    id: 2,
    name: "김철수",
    age: 25
  },
  {
    id: 3,
    name: "이영희",
    age: 22
  }
]);

let nextId = 4;

const studentCount = computed(() => {
  return students.value.length;
});

function addStudent(
  name: string,
  age: number
) {
  students.value.push({
    id: nextId++,
    name,
    age
  });
}

function deleteStudent(id: number) {
  students.value = students.value.filter(
    (student) => student.id !== id
  );
}
</script>

<template>
  <!-- <div>
    <h1>Day 11. Todo List</h1>

    <TodoInput />

    <TodoList />
  </div> -->

  <!-- <div>
    <h1>Day 12, 13. 사용자 목록</h1>

    <UserCard
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :name="user.name"
      :age="user.age"
      @delete="deleteUser"
    />
  </div> -->

  <div>
    <h1>Day 14. 학생 관리</h1>

    <StudentForm
      @add="addStudent"
    />

    <hr />

    <h2>
      학생 목록
    </h2>

    <StudentList
      :students="students"
      @delete="deleteStudent"
    />

    <hr />

    <p>
      전체 학생:
      {{ studentCount }}명
    </p>
  </div>
</template>
