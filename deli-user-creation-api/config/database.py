from pymongo import MongoClient
from pymongo.database import Database

# Configuración de MongoDB Atlas
MONGO_DB_URL = "mongodb+srv://deli-user-creation-db-username:deliprojectapi@deli-user-creation-db.uiawp4n.mongodb.net/?retryWrites=true&w=majority"
MONGO_DB_NAME = "deli-user-creation-db"

# Conexión a la base de datos
try:
    client: MongoClient = MongoClient(MONGO_DB_URL)
    db: Database = client[MONGO_DB_NAME]

except Exception as e:
    raise e

def get_database() -> Database:
    if db is not None:
        return db
    else:
        raise Exception("Database not found")