# Personal Website

Creating a personal website for myself here. Link: [mattychoi.com](mattychoi.com)

### Project Structure

```
personal-website/
│
├── frontend/                        # React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── api/
│   │   │   └── client.js          # API wrapper
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.production
│   ├── package.json
│   └── vite.config.js (or CRA config)
│
├── backend/
│   ├── app/
│   │   ├── main.py                # FastAPI entry
│   │   │
│   │   ├── core/
│   │   │   ├── config.py          # Env settings
│   │   │   └── security.py
│   │   │
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   └── chat.py
│   │   │   └── deps.py
│   │   │
│   │   ├── services/
│   │   │   ├── llm_service.py
│   │   │   └── rag_service.py
│   │   │
│   │   ├── models/
│   │   │   └── chat_models.py
│   │   │
│   │   ├── db/
│   │   │   └── vectorstore.py
│   │   │
│   │   └── utils/
│   │       └── document_loader.py
│   │
│   ├── chroma_db/                # Persistent vector DB
│   ├── requirements.txt
│   ├── .env
│   └── gunicorn_conf.py
│
├── nginx/
│   └── nginx.conf
│
├── deploy.sh
│
├── .gitignore
└── README.md
```