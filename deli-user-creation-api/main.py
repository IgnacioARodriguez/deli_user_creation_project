from fastapi import FastAPI
import uvicorn

app = FastAPI(
    title="Deli Api User Creation",
    description="This is the API for user creation in Deli",
    version="1.0.0",
    docs_url="/api/docs",
    redocs_url="/api/redocs",
    openapi_url="/api/openapi.json",
    servers=[
        # Come back here to add the production url
        {"url": "http://localhost:3001", "description": "LOCAL DEV SERVER"},
    ],
)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=False)