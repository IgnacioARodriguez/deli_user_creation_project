from fastapi import APIRouter, Request
from services.accounts_service import create_account as create_account_service
import json

router = APIRouter(prefix="/api/accounts", tags=["accounts"])

@router.post("/")
async def create_account(request: Request) -> str:
    try:
        body = await request.json()
        print(body)
        account_created = await create_account_service(body)

        return json.dumps(account_created)

    except Exception as e:
        raise e