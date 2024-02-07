import json
from repositories.accounts_repository import create_account as create_account_repository, get_account as get_account_repository
from utils.email_sender import confirmation_email_sender

async def create_account(body: dict):
    try:
        account_data = {
            "username": body["username"],
            "age": body["age"],
            "full_name": body["fullName"],
            "email": body["email"],
            "country": body["country"],
        }
        account_exists = await get_account(account_data["username"], account_data["email"])

        if account_exists == 'Email already in use':
            return {'error': 'Email already in use'}
        elif account_exists == 'Username already in use':
            return {'error': 'Username already in use'}

        account_created = await create_account_repository(account_data)

        confirmation_email_sender(account_data["username"], account_data["email"])

        return account_created

    except Exception as e:
        raise Exception(f'Error creating account: {e}')


async def get_account(username: str, email: str) -> str:
    try:
        account_data = {
            "username": username,
            "email": email
        }

        account = await get_account_repository(account_data)

        return account

    except Exception as e:
        raise Exception(f'Error getting account: {e}')
