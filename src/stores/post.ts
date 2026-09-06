import { defineStore } from "pinia";

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export const usePostStore = defineStore(
  "post",
  {
    state: () => ({
      posts: [
        {
          id: 1,
          title: "Vue 공부",
          content:
            "Vue를 공부하고 있습니다.",
          author: "홍길동"
        },
        {
          id: 2,
          title: "TypeScript 공부",
          content:
            "TypeScript를 공부하고 있습니다.",
          author: "김철수"
        },
        {
          id: 3,
          title: "Pinia 공부",
          content:
            "Pinia를 공부하고 있습니다.",
          author: "이영희"
        }
      ] as Post[],

      searchText: ""
    }),

    getters: {
      postCount: (state) => {
        return state.posts.length;
      },

      filteredPosts: (state) => {
        const keyword =
          state.searchText
            .trim()
            .toLowerCase();

        if (keyword === "") {
          return state.posts;
        }

        return state.posts.filter(
          (post) =>
            post.title
              .toLowerCase()
              .includes(keyword) ||
            post.content
              .toLowerCase()
              .includes(keyword)
        );
      }
    },

    actions: {
      addPost(
        title: string,
        content: string,
        author: string
      ) {
        const post: Post = {
          id: Date.now(),
          title,
          content,
          author
        };

        this.posts.push(post);
      },

      deletePost(id: number) {
        this.posts =
          this.posts.filter(
            (post) => post.id !== id
          );
      },

      getPostById(id: number) {
        return this.posts.find(
          (post) => post.id === id
        );
      }
    }
  }
);