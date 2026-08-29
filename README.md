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