<template>
  <div>
    <h1>Day 26 — Vue Router 연습</h1>
    <h2>Vue Router 연습</h2>

    <h3>Day 27 — RouterLink와 router.push</h3>
    <nav>
      <ul>
        <RouterLink to="/">[홈]</RouterLink> |
        <RouterLink to="/posts">[게시글]</RouterLink> |
        <RouterLink to="/about">[About]</RouterLink> |
      </ul>
    </nav>
    <hr />

    <main>
      <RouterView />
    </main>
  </div>
</template>