from pymongo import MongoClient
from pymongo.database import Database
from dotenv import load_dotenv
import os

load_dotenv()

mongo_db_url = os.getenv("MONGO_DB_URL").strip('"')
mongo_db_name = os.getenv("MONGO_DB_NAME").strip('"')

# Configuración de MongoDB Atlas
MONGO_DB_URL = mongo_db_url

MONGO_DB_NAME = mongo_db_name

# Conexión a la base de datos
try:
    client: MongoClient = MongoClient(MONGO_DB_URL)
    db: Database = client[MONGO_DB_NAME]

except Exception as e:
    raise Exception(f'Error connecting to database: {e}')

def get_database() -> Database:
    if db is not None:
        return db
    else:
        raise Exception("Database not found")