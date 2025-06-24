from fastapi import APIRouter
from app.config.database import connect
from app.models.tasks_models import Task
from app.schemas.tasks_schemas import taskEntity, listTaskEntity
from bson import ObjectId

tasks_router = APIRouter()

@tasks_router.get('/')
async def start():
    return "Bem-vindo"

@tasks_router.get('/tasks')
async def list_tasks():
    return listTaskEntity(connect.kanbandb.tasks.find())

# Find
@tasks_router.get('/tasks/{task_id}')
def find_task_id(task_id):
    return taskEntity(
        connect.kanbandb.tasks.find_one(
            {"_id": ObjectId(task_id)}
        )
    )

# Create 
@tasks_router.post('/tasks')
async def create_task(task: Task):
    connect.kanbandb.tasks.insert_one(dict(task))
    return listTaskEntity(connect.kanbandb.tasks.find())

# Update
@tasks_router.put('/tasks/{task_id}')
async def update_task(task_id, task: Task):
    connect.kanbandb.tasks.find_one_and_update(
        {
            "_id": ObjectId(task_id)
        },
        {
            "$set": dict(task)
        }
    )
    return taskEntity(
        connect.kanbandb.tasks.find_one(
            {
                "_id": ObjectId(task_id)
            }
        )
    )

# Delete
@tasks_router.delete('/tasks/{task_id}')
async def delete_task(task_id):
    return taskEntity(
        connect.kanbandb.tasks.find_one_and_delete(
            {
                "_id": ObjectId(task_id)
            }
        )
    )