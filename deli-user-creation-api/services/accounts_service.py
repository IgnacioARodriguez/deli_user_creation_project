import json
from repositories.accounts_repository import create_account as create_account_repository
from utils.email_sender import confirmation_email_sender

async def create_account(body: dict) -> dict:
    try:
        account_data = {
            "username": body["username"],
            "age": body["age"],
            "full_name": body["fullName"],
            "email": body["email"],
            "country": body["country"],
        }

        print('Sending confirmation email...')
        confirmation_email_sender()

        account_created = await create_account_repository(account_data)

        return account_created

    except Exception as e:
        raise e