from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Hello FastAPI!"
    }

@app.get("/posts")
def get_posts():
    return [
        {
            "id": 1,
            "title": "Vue 공부",
            "content": "Vue를 공부하고 있습니다.",
            "author": "홍길동"
        },
        {
            "id": 2,
            "title": "FastAPI 공부",
            "content": "FastAPI를 공부하고 있습니다.",
            "author": "김철수"
        }
    ]