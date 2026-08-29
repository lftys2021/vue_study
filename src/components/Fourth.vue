<script setup lang="ts">
// Day 15. ref
// import { ref } from "vue";

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const user = ref<User>({
//   id: 1,
//   name: "홍길동",
//   age: 30
// });

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

// function increaseAge() {
//   user.value.age++;
// }

// Day 16. reactive
// import { reactive } from "vue";

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// const user = reactive<User>({
//   name: "홍길동",
//   age: 30,
//   email: "hong@example.com"
// });

// function increaseAge() {
//   user.age++;
// }

// function changeName() {
//   user.name = "김철수";
// }

// Day 17. watch
// import { ref, watch } from "vue";

// const searchText = ref("");

// watch(searchText, (newValue, oldValue) => {
//   console.log("이전 값:", oldValue);
//   console.log("새로운 값:", newValue);
// });

// Day 18. 라이프사이클
// import { ref, onMounted } from "vue";

// const message = ref("로딩 중...");

// onMounted(() => {
//   console.log("컴포넌트가 화면에 표시되었습니다.");

//   message.value = "데이터 로딩 완료!";
// });

// Day 19. computed, watch, watchEffect
import {ref, computed, watch, watchEffect} from "vue";

const count = ref(0);

const doubleCount = computed(() => {
  return count.value * 2;
});

watch(count, (newValue, oldValue) => {
  console.log(
    `count 변경: ${oldValue} → ${newValue}`
  );
});

watchEffect(() => {
  console.log(
    "현재 count:",
    count.value
  );
});

function increase() {
  count.value++;
}

// Day 20. 미니 프로젝트
import {ref, computed} from "vue";

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
  },
  {
    id: 4,
    name: "박민수",
    age: 24
  }
])

const searchText = ref("");
const filteredStudents = computed(() => {
  const keyword = searchText.value
    .trim()
    .toLowerCase();
  
    if(keyword === ""){
      return students.value;
    }

    return students.value.filter(
      (student) => student.name.toLowerCase().includes(keyword)
    );
});

const studentCount = computed(() => {
  return students.value.length;
})

const searchResultCount = computed(() => {
  return filteredStudents.value.length;
});
</script>

<template>
  <!-- <div>
    <h1>Day 15. 사용자 정보</h1>

    <p>이름: {{ user.name }}</p>

    <p>나이: {{ user.age }}</p>

    <button @click="increaseAge">
      나이 +1
    </button>

    <hr />

    <h2>사용자 목록</h2>

    <ul>
      <li
        v-for="item in users"
        :key="item.id"
      >
        {{ item.name }}
        ({{ item.age }}세)
      </li>
    </ul>
  </div> -->

  <!-- <div>
    <h1>Day 16. 사용자 정보</h1>

    <p>이름: {{ user.name }}</p>

    <p>나이: {{ user.age }}</p>

    <p>이메일: {{ user.email }}</p>

    <button @click="increaseAge">
      나이 +1
    </button>

    <button @click="changeName">
      이름 변경
    </button>
  </div> -->

  <!-- <div>
    <h1>Day 17. 검색</h1>

    <input
      v-model="searchText"
      type="text"
      placeholder="검색어를 입력하세요"
    />

    <p>
      검색어: {{ searchText }}
    </p>
  </div> -->
  <!-- <div>
    <h1>Day 18. {{ message }}</h1>
  </div> -->
  <!-- <div>
    <h1>Day 19. 현재 숫자: {{ count }}</h1>

    <p>
      2배: {{ doubleCount }}
    </p>

    <button @click="increase">[+1]</button>
  </div> -->

  <div>
    <h1>Day 20. 학생 관리</h1>

    <input
      v-model="searchText"
      type="text"
      placeholder="학생 이름 검색"
    />

    <hr />

    <h2>학생 목록</h2>

    <ul>
      <li
        v-for="student in filteredStudents"
        :key="student.id"
      >
        {{ student.name }}
        ({{ student.age }}세)
      </li>
    </ul>

    <hr />

    <p>
      전체 학생:
      {{ studentCount }}명
    </p>

    <p>
      검색 결과:
      {{ searchResultCount }}명
    </p>
  </div>
</template>
