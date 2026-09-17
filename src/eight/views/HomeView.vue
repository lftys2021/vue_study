<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToPost() {
  router.push("/posts");
}
</script>

<template>
  <div>
    <h1>홈</h1>
    <button @click="goToPost">게시글</button>
  </div>
</template>