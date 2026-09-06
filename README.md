# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Vue.js 학습 로드맵
전체 과정
-----------------------------------------------------
단계  |	주제               | 목표
-----------------------------------------------------
01단계 | Vue 시작	       | Vue 프로젝트 구조 이해
02단계 | 템플릿 문법        | 	화면에 데이터 출력
03단계 | 반응형 데이터      | 데이터 변화에 따라 화면 변경
04단계 | 이벤트	사용자      | 입력 처리
05단계 | 조건문/반복문	    | 목록과 조건부 화면
06단계 | 컴포넌트          | 화면을 기능별로 분리
07단계 | Props / Emit	  | 부모-자식 컴포넌트 통신
08단계 | Composition API  |	ref, reactive, computed, watch
09단계 | TypeScript	      | Vue + TypeScript
10단계 | Router	          | 여러 페이지 구현
11단계 | Pinia	          | 전역 상태 관리
12단계 | API	          | FastAPI와 연결
13단계 | 미니 프로젝트	    | Todo / 게시판
14단계 | 최종 프로젝트      | FastAPI 게시판 프론트엔드
-----------------------------------------------------

# 1. 현 폴더를 Git 저장소로 초기화
git init

# 2. 업로드할 파일들을 대기열(Staging Area)에 추가
git add -A

# 3. 변경 사항 저장 메시지(커밋) 작성
git commit -m "Day5"

# 4. 기본 브랜치 이름을 main으로 변경
git branch -M main

# 5. 내 GitHub 원격 저장소와 연결 (복사한 주소 붙여넣기)
git remote add origin https://github.com/lftys2021/vue_study.git

# 6. GitHub로 업로드
git push -u origin main


# 1. GitHub에서 프로젝트 전체 내려받기
git clone https://github.com/lftys2021/vue_study.git

# 6. GitHub로 다운로드
git pull origin main

# 2. 내려받은 프로젝트 폴더로 이동
cd javascript

# 3. node_modules 패키지들 일괄 설치 (깃허브에는 node_modules가 안 올라가므로 필수!)
npm install

# 4. 실행 테스트
npm run dev


# 1주차 — Vue 기초 Day1 ~ Day5 실습 정답 알려줘.
## 1주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------
Day 1 | Hello Vue   | src/App.vue, {{ }}
Day 2 | 사용자 프로필 | v-bind:, :속성
Day 3 | 카운터       | const count = ref(0); 반응형 데이터
Day 4 | 숫자 계산기   | ref, @click, 함수
Day 5 | 회원가입 폼  | 회원가입 폼, v-model
-----------------------------------------------------

# 2주차 — 조건문과 목록 Day 6 ~ Day 10 실습 정답 알려줘.
## 2주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------
Day  6 | v-if 로그인 상태 | 조건부 렌더링, v-if, v-else
Day  7 | v-for 학생 목록  |  목록 출력, v-for, :key
Day  8 | Todo 만들기 ①   | Todo 추가, push(), v-model
Day  9 | Todo 만들기 ②   | Todo 삭제/완료, filter(), 객체 배열
Day 10 | computed       | 계산된 값, computed()
-----------------------------------------------------

# 3주차 — 컴포넌트.
## 3주차 전체 목표
App.vue
 │
 ├── StudentForm.vue
 │
 └── StudentList.vue
       │
       ├── StudentItem.vue
       ├── StudentItem.vue
       └── StudentItem.vue

## 3주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------
Day 11 | v-if 로그인 상태 | 조건부 렌더링, v-if, v-else
Day 12 | v-for 학생 목록  |  목록 출력, v-for, :key
Day 13 | Todo 만들기 ①   | Todo 추가, push(), v-model
Day 14 | Todo 만들기 ②   | Todo 삭제/완료, filter(), 객체 배열
-----------------------------------------------------

## 3주차 최종 암기 그림
┌─────────────────────┐
│      부모 컴포넌트    │
│                     │
│      App.vue        │
└─────────┬───────────┘
          │
          │ Props
          ↓
┌─────────────────────┐
│      자식 컴포넌트    │
│                     │
│   StudentList.vue   │
└─────────┬───────────┘
          │
          │ Props
          ↓
┌─────────────────────┐
│      손자 컴포넌트    │
│                     │
│   StudentItem.vue   │
└─────────┬───────────┘
          │
          │ Emit
          ↓
┌─────────────────────┐
│      부모 컴포넌트    │
│                     │
│   App.vue           │
└─────────────────────┘

# 4주차 — Composition API.
## 4주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------------------------------------------
Day 15 | ref 심화                          | ref, 기본/객체/배열 반응형 데이터
Day 16 | reactive                         |  reactive, 객체와 배열의 반응형 처리
Day 17 | watch                            | watch, 데이터 변화 감시
Day 18 | Lifecycle                        | Lifecycle, onMounted 등
Day 19 | computed vs watch vs watchEffect | computed / watch / watchEffect, 세 기능의 차이
Day 20 | 검색 가능한 학생 관리               | 미니 프로젝트, 검색 가능한 학생 관리
-----------------------------------------------------------------------------------------

# 5주차
## 5주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------------------------------------------
Day 21 | TypeScript 타입 정의         | TypeScript 기본 타입, interface, type
Day 22 | Props에 TypeScript 적용      | Props 타입 지정, defineProps
Day 23 | Emit + TypeScript           | Emit 타입 지정, defineEmits
Day 24 | API 데이터에 TypeScript 적용  | API 데이터 타입, interface + fetch
Day 25 | 게시글 목록 종합 실습          | 종합 실습, 게시글 목록
-----------------------------------------------------------------------------------------

## 5주차 핵심 정리
TypeScript
│
├── interface
│     ↓
│   데이터 구조 정의
│
├── ref<Student[]>
│     ↓
│   반응형 데이터 타입 지정
│
├── defineProps
│     ↓
│   부모 → 자식 데이터 타입 지정
│
└── defineEmits
      ↓
    자식 → 부모 이벤트 타입 지정

# 6주차
## 6주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------------------------------------------
Day 26 | TypeScript 타입 정의       | 설치, 설정, RouterView
Day 27 | RouterLink와 router.push  | RouterLink, router.push()
Day 28 | 동적 라우팅                | /posts/:id
Day 29 | 중첩 라우팅                | Nested Route, children
Day 30 | Vue Router 종합 실습       | 게시판 목록 → 상세 → 이동
-----------------------------------------------------------------------------------------

## 6주차 핵심 정리
① Router
② RouterView
③ RouterLink
④ router.push()
⑤ 동적 라우팅
⑥ 중첩 라우팅

# 7주차
## 7주차 전체 계획
Day	   | 학습 주제  | 핵심
-----------------------------------------------------
Day 31 | Pinia 기본 | 설치, Store 생성, state
Day 32 | State	   | state, storeToRefs
Day 33 | Getters   | getters, computed
Day 34 | Actions   | actions, 데이터 변경
Day 35 | 종합 실습  | 게시판 Store 만들기
-----------------------------------------------------

## 7주차 프로젝트 구조
Component
    ↓
Pinia Store
 ┌───────────────┐
 │ State         │
 │ Getters       │
 │ Actions       │
 └───────────────┘
    ↓
Component

src
├── components
│   ├── Counter.vue
│   └── PostItem.vue
│
├── stores
│   ├── counter.ts
│   └── post.ts
│
├── views
│   └── ...
│
├── App.vue
└── main.ts
