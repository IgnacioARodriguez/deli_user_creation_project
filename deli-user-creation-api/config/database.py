from pymongo import MongoClient
from pymongo.database import Database
from dotenv import load_dotenv
import os

load_dotenv()

print('ACAA MONGO URL', type(os.getenv("MONGO_DB_URL")), os.getenv("MONGO_DB_URL"))
mongo_url = os.getenv("MONGO_DB_URL").strip('"')

# Configuración de MongoDB Atlas
MONGO_DB_URL = mongo_url

MONGO_DB_NAME = "deli-db"

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