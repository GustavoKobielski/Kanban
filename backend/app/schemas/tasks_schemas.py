def taskEntity(db_item) -> dict:
    return {
        "id": str(db_item['_id']),
        "title": (db_item['task_title']),
        "desc": (db_item['task_desc']),
        "author": (db_item['task_author'])
    }

def listTaskEntity(db_item_list) -> list:
    list_task = []
    for item in db_item_list:
        list_task.append(taskEntity(item))
    return list_task