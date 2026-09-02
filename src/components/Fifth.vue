<script setup lang="ts">
import { ref, onMounted } from "vue";
// import StudentCard from "./StudentCard.vue";
import PostList from "./PostList.vue";


// interface Student {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// const students = ref<Student[]>([
//   {
//     id: 1,
//     name: "홍길동",
//     age: 20,
//     email: "hong@example.com"
//   },
//   {
//     id: 2,
//     name: "김철수",
//     age: 25,
//     email: "kim@example.com"
//   },
//   {
//     id: 3,
//     name: "이영희",
//     age: 22,
//     email: "lee@example.com"
//   }
// ]);

// function deleteStudent(id: number) {
//   students.value = students.value.filter(
//     (student) => student.id !== id
//   );
// }

// interface Student {
//   id: number;
//   name: string;
//   age: number;
// }

// const students = ref<Student[]>([]);

// const loading = ref(false);

// const error = ref("");

// async function fetchStudents() {
//   loading.value = true;
//   error.value = "";

//   try {
//     const response = await fetch(
//       "http://localhost:8000/students"
//     );

//     if (!response.ok) {
//       throw new Error(
//         "학생 목록을 불러오지 못했습니다."
//       );
//     }

//     const data: Student[] =
//       await response.json();

//     students.value = data;
//   } catch (err) {
//     error.value =
//       err instanceof Error
//         ? err.message
//         : "알 수 없는 오류가 발생했습니다.";
//   } finally {
//     loading.value = false;
//   }
// }

// onMounted(() => {
//   fetchStudents();
// });

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const posts = ref<Post[]>([
  {
    id: 1,
    title: "Vue 공부",
    content: "Vue를 공부하고 있습니다.",
    author: "홍길동"
  },
  {
    id: 2,
    title: "TypeScript 공부",
    content: "TypeScript도 공부하고 있습니다.",
    author: "김철수"
  },
  {
    id: 3,
    title: "게시판 만들기",
    content: "Vue와 FastAPI로 게시판을 만듭니다.",
    author: "이영희"
  }
]);

const postCount = computed(() => {
  return posts.value.length;
});

function deletePost(id: number) {
  posts.value = posts.value.filter(
    (post) => post.id !== id
  );
}
</script>

<template>
  <!-- <div>
    <h1>Day 21 — TypeScript 타입 정의</h1>
    <h2>학생 정보</h2>
    <p>번호: {{ student.id }}</p>
    <p>이름: {{ student.name }}</p>
    <p>나이: {{ student.age }}</p>
    <p>이메일: {{ student.email }}</p>
  </div>

  <div>
    <h1>Day 22 — Props에 TypeScript 적용</h1>
    <h2>학생 정보</h2>

    <StudentCard
      :student="student"
    />
  </div> -->

  <!-- <div>
    <h1>Day 23 — Emit + TypeScript</h1>
    <h1>학생 목록</h1>

    <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
      @delete="deleteStudent"
    />
  </div> -->

  <!-- <div>
    <h1>Day 24 — API 데이터에 TypeScript 적용</h1>
    <h2>학생 목록</h2>

    <p v-if="loading">
      로딩 중...
    </p>

    <p v-if="error">
      {{ error }}
    </p>

    <ul v-if="!loading && !error">
      <li
        v-for="student in students"
        :key="student.id"
      >
        {{ student.name }}
        ({{ student.age }}세)
      </li>
    </ul>
  </div> -->

  <div>
    <h1>Day 25 — 게시글 목록 종합 실습</h1>
    <h1>게시판</h1>

    <p>
      게시글:
      {{ postCount }}개
    </p>

    <PostList
      :posts="posts"
      @delete="deletePost"
    />    
  </div>
</template>