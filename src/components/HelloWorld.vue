<script setup lang="ts">
import { ref } from "vue";

// Day1
const message = "Hello Vue!";

// Day2
const name = "홍길동";
const age = 30;
const imageUrl = "https://via.placeholder.com/200";
const introduction = "Vue.js를 배우고 있는 개발자입니다.";

// Day3 
const count = ref(0);

function increase() {
  count.value++;
}
function decrease() {
  count.value--;
}
function reset() {
  count.value = 0;
}

// Day4
const count1 = ref(10);

function oneP() {
  count1.value += 1;
}
function oneM() {
  count1.value -= 1;
}
function dble() {
  count1.value *= 2;
}
function reset1() {
  count1.value = 10;
}

// Day5
const name1 = ref("");
const email = ref("");
const password = ref("");

const isSubmitted = ref(false);

function signup() {
  isSubmitted.value = true;
}

</script>

<template>

  <!-- Day1 -->
  <div>
    <h1>{{ message }}</h1>
  </div>
  <!-- Day1 -->
  
  <!-- Day2 -->
  <div>
    <h1>사용자 프로필</h1>

    <img
      :src="imageUrl"
      :alt="name"
    />

    <h2>{{ name }}</h2>

    <p>나이: {{ age }}</p>

    <p>{{ introduction }}</p>
  </div>
  <!-- Day2 -->

  <!-- Day3 -->
  <div>
    <h1>현재 숫자: {{ count }}</h1>

    <button @click="decrease">
      -
    </button>

    <button @click="increase">
      +
    </button>

    <button @click="reset">
      초기화
    </button>
  </div>
  <!-- Day3 -->

  <!-- Day4 -->
  <div>
    <h1>현재 숫자: {{ count1 }}</h1>

    <button @click="oneP">[+1]</button>
    <button @click="oneM">[-1]</button>
    <button @click="dble">[×2]</button>
    <button @click="reset1">[초기화]</button>
  </div>
  <!-- Day4 -->

  <!-- Day5 -->
  <div>
    <h1>회원가입</h1>

    <div>
      <label for="name1">이름</label>

      <input
        id="name1"
        v-model="name1"
        type="text"
      />
    </div>

    <div>
      <label for="email">이메일</label>

      <input
        id="email"
        v-model="email"
        type="email"
      />
    </div>

    <div>
      <label for="password">비밀번호</label>

      <input
        id="password"
        v-model="password"
        type="password"
      />
    </div>

    <button @click="signup">
      회원가입
    </button>

    <div v-if="isSubmitted">
      <h2>입력한 정보</h2>

      <p>이름: {{ name1 }}</p>
      <p>이메일: {{ email }}</p>
      <p>비밀번호: {{ password }}</p>
    </div>
  </div>
  <!-- Day5 -->
  
</template>

<style scoped>
  img {
    width: 200px;
    height: 200px;
  }
</style>