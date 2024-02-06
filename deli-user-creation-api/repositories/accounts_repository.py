from config.database import get_database

db = get_database()

async def create_account(account_data: dict) -> dict:
    try:
        accounts_collection = db.get_collection("accounts")
        accounts_collection.insert_one(account_data)

        return account_data

    except Exception as e:
        raise e
    

async def get_account(account_data: dict) -> str:
    try:
        accounts_collection = db.get_collection("accounts")
        account_email = accounts_collection.find_one({"email": account_data["email"]})
        account_username = accounts_collection.find_one({"username": account_data["username"]})

        if account_email:
            return 'Email already in use'
        elif account_username:
            return 'Username already in use'
        else:
            return 'Account not found'

    except Exception as e:
        raise e