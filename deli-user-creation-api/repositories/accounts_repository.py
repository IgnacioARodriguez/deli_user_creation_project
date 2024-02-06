from config.database import get_database

db = get_database()

async def create_account(account_data: dict) -> dict:
    try:
        accounts_collection = db.get_collection("accounts")
        accounts_collection.insert_one(account_data)

        return account_data

    except Exception as e:
        raise e