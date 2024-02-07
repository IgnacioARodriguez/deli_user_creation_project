from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
from services.accounts_service import create_account as create_account_service
import json

router = APIRouter(prefix="/api/accounts", tags=["accounts"])

@router.post("/")
async def create_account(request: Request):
    try:
        body = await request.json()

        account_creation_response = await create_account_service(body)

        if 'error' in account_creation_response:
            return JSONResponse(
                status_code=409,
                content=account_creation_response
            )

        return JSONResponse(
            status_code=201,
            content='Account created successfully!'
        )

    except Exception as e:
        print(e)
        return JSONResponse(
            status_code=500,
            content='Internal server error'
        )