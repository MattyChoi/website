# Backend for my personal website

## Quickstart

The following command starts up the backend service of the website

```
cd server
source venv/bin/activate
pip3 install -r requirements.txt
uvicorn main:app --reload
```

and to update the `requirements.txt` file, run the following command:

```
pip3 freeze > requirements.txt
```
