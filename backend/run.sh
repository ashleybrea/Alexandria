#!/bin/bash
# Run the Alexandria FastAPI backend with auto-reload
# Run this once in terminal to make it executable: chmod +x run.sh
uvicorn alexandria_api:app --reload