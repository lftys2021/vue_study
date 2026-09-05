<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToAbout() {
  router.push("/about");
}

function goToPost() {
  router.push("/posts");
}
</script>

<template>
  <div>
    <h1>홈</h1>

    <p>Vue Router 실습입니다.</p>
    <button @click="goToAbout">About로 이동</button>
    <button @click="goToPost">게시글 보러가기</button>
  </div>
</template>