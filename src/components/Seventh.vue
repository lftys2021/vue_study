<script setup lang="ts">
import { ref } from "vue";
// import { storeToRefs } from "pinia";
// import { useCounterStore } from "../stores/counter";
import { useStudentStore } from "../stores/student";

// const counterStore = useCounterStore();

// function increase() {
//   counterStore.count++;
// }
// function decrease() {
//   studentStore.count--;
// }

const studentStore = useStudentStore();
// const {
//   students,
//   selectedStudentId
// } = storeToRefs(studentStore);

const name = ref("");
const age = ref(20);

function addStudent() {
  if (name.value.trim() === "") {
    return;
  }

  studentStore.addStudent(
    name.value,
    age.value
  );

  name.value = "";
  age.value = 20;
}

</script>

<template>
    <!-- <div>
        <h1>Pinia Counter</h1>

        <p>
            숫자: {{ counterStore.count }}
        </p>
        <button @click="increase">
            [+1]
        </button>
        <button @click="decrease">
            [-1]
        </button>
    </div> -->
    <!-- <div>
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

        <p>
            선택된 학생:
            {{ selectedStudentId }}
        </p>
    </div> -->
    <!-- <div>
        <h1>학생 관리</h1>

        <p>
        전체 학생:
        {{ studentStore.studentCount }}명
        </p>

        <h2>20세 이상</h2>

        <ul>
        <li
            v-for="student in studentStore.studentsOver20"
            :key="student.id"
        >
            {{ student.name }}
            ({{ student.age }}세)
        </li>
        </ul>
    </div> -->

    <div>
        <h1>학생 관리</h1>

        <input v-model="name" placeholder="이름" />
        <input v-model.number="age" type="number" />

        <button @click="addStudent">
            학생 추가
        </button>

        <hr />

        <ul>
            <li
                v-for="student in studentStore.students"
                :key="student.id"
            >
                {{ student.name }}
                ({{ student.age }}세)

                <button @click="studentStore.deleteStudent(student.id)">
                    삭제
                </button>
            </li>
        </ul>
    </div>
</template>