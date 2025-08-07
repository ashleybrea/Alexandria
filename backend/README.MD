# Alexandria Backend

## Setup

First, install all required dependencies using the provided `requirements.txt` file:

```bash
pip install -r requirements.txt
```

## Running the FastAPI App

To start the API server, run:

```bash
uvicorn alexandria_api:app --reload
```

This will launch the server at [http://127.0.0.1:8000](http://127.0.0.1:8000).

If you prefer, you can also use the provided `run.sh` script:

```bash
chmod +x run.sh   # Run this once to make the script