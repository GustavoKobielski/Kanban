from pydantic import BaseModel

class Task(BaseModel):
    task_title: str
    task_desc: str
    task_author: str