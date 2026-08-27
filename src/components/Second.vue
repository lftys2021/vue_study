<script setup lang="ts">
import { ref, computed } from "vue";

// Day 6. v-if
const isLogin = ref(false);
const userName = ref("홍길동");

function login() {
  isLogin.value = true;
}

function logout() {
  isLogin.value = false;
}

// Day 7. v-for
const todos = [
  "Vue 공부",
  "TypeScript 공부",
  "프로젝트 만들기"
];

const students = [
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
];

// Day 8. Todo 만들기 ①
const newTodo = ref("");
const todos1 = ref([
  "Vue 공부",
  "TypeScript 공부",
  "운동하기"
]);

function addTodo() {
  if (newTodo.value.trim() === "") {
    return;
  }

  todos1.value.push(newTodo.value);

  newTodo.value = "";
}

// Day 9. Todo 만들기 ②
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos2 = ref<Todo[]>([
  {
    id: 1,
    title: "Vue 공부",
    completed: false
  },
  {
    id: 2,
    title: "TypeScript 공부",
    completed: true
  },
  {
    id: 3,
    title: "운동하기",
    completed: false
  }
]);

const completedCount = computed(() => {
  return todos2.value.filter(
    (todo) => todo.completed
  ).length;
});

function deleteTodo(id: number) {
  todos2.value = todos2.value.filter(
    (todo) => todo.id !== id
  );
}

// Day 10. computed
const count = ref(10);

const doubleCount = computed(() => {
  return count.value * 2;
});

const tripleCount = computed(() => {
  return count.value * 3;
});

function increase() {
  count.value++;
}

function decrease() {
  count.value--;
}


</script>

<template>
    <div>
        <h1>Day 6</h1>
        <h2>로그인 상태</h2>
        <div v-if="isLogin">
            <h3>{{ userName }}님 환영합니다.</h3>
            <button @click="logout">로그아웃</button>
        </div>
        <div v-else>
            <p>로그인이 필요합니다.</p>
            <button @click="login">[로그인]</button>
        </div>
    </div>

    <div>
        <h1>Day 7</h1>
        <h2>할 일 목록</h2>
        <ul>
            <li v-for="todo in todos" :key="todo">
                {{ todo }}
            </li>
        </ul>

        <h2>학생 목록</h2>

        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="student in students" :key="student.id">
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td> 
                        <td>{{ student.age }}</td>
                    </tr>
                </tbody>
        </table>
    </div>

    <div>
        <h1>Day 8</h1>
        <div>
            <label for="newTodo">할 일 입력</label>
            <input v-model="newTodo" type="text" placeholder="할 일을 입력하세요"/>
        </div>
        <button @click="addTodo">[추가]</button>
        <ul>
            <li v-for="todo in todos1" :key="todo">
                {{ todo }}
            </li>
        </ul>
    </div>

    <div>
        <h1>Day 9</h1>
        <ul>
            <li v-for="todo in todos2" :key="todo">
                <input v-model="todo.completed" type="checkbox" />
                {{ todo.title }} <button @click="deleteTodo(todo.id)">[삭제]</button>
            </li>
        </ul>
        <hr />
        <p>전체: {{ todos2.length }}개</p>
        <p>완료: {{ completedCount }}개</p>
    </div>

    <div>
        <h1>Day 10</h1>
        <p>현재 숫자 : {{ count }}</p>
        <p>2배 : {{ doubleCount }}</p>
        <p>3배 : {{ tripleCount }}</p>
        <button @click="increase">[+1]</button>
        <button @click="decrease">[-1]</button>
    </div>
    
</template>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid black;
}
</style>