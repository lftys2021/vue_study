// Day 32 — State 제대로 이해하기
// import {defineStore} from "pinia";

// interface Student {
//   id: number;
//   name: string;
//   age: number;
// }

// export const useStudentStore = defineStore(
//     "student",
//     {
//         state: () => ({
//             students: [
//                 {id: 1, name: "Alice", age: 20},
//                 {id: 2, name: "Bob", age: 22},
//                 {id: 3, name: "Charlie", age: 21}
//             ] as Student[],

//             selectedStudentId: null as number | null
//         })
//     }
// );

// Day 33 — Getter
// import { defineStore } from "pinia";

// export interface Student {
//   id: number;
//   name: string;
//   age: number;
// }

// export const useStudentStore = defineStore(
//   "student",
//   {
//     state: () => ({
//       students: [
//         {
//           id: 1,
//           name: "홍길동",
//           age: 20
//         },
//         {
//           id: 2,
//           name: "김철수",
//           age: 25
//         },
//         {
//           id: 3,
//           name: "이영희",
//           age: 22
//         }
//       ] as Student[]
//     }),

//     getters: {
//         studentCount: (state) => {
//             return state.students.length;
//         },

//         studentsOver20: (state) => {
//             return state.students.filter(
//                 (student) => student.age >= 20
//             );
//         },

//         oldestStudent: (state) => {
//             if (state.students.length === 0) {
//                 return null;
//             }

//             return state.students.reduce(
//                 (oldest, student) => {
//                     return student.age > oldest.age
//                         ? student
//                         : oldest;
//                 }
//             );
//         }
//     }
//   }
// );

// Day 34 — Actions
import { defineStore } from "pinia";

export interface Student {
  id: number;
  name: string;
  age: number;
}

export const useStudentStore = defineStore(
  "student",
  {
    state: () => ({
      students: [] as Student[]
    }),

    getters: {
      studentCount: (state) => {
        return state.students.length;
      }
    },

    actions: {
      addStudent(
        name: string,
        age: number
      ) {
        const student: Student = {
          id: Date.now(),
          name,
          age
        };

        this.students.push(student);
      },

      deleteStudent(id: number) {
        this.students =
          this.students.filter(
            (student) => student.id !== id
          );
      }
    }
  }
);