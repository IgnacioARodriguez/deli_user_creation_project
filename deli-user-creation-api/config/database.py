from pymongo import MongoClient
from pymongo.database import Database
from dotenv import load_dotenv
import os

load_dotenv()

# Configuración de MongoDB Atlas
MONGO_DB_URL = os.getenv("MONGO_DB_URL")

MONGO_DB_NAME = os.getenv("MONGO_DB_NAME")

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