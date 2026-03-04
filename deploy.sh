#!/bin/bash

cd /home/ec2-user/website
            
echo "Pulling latest code..."
git pull origin main

echo "Setting up backend..."
cd server
source venv/bin/activate
pip install -r requirements.txt

echo "Restarting FastAPI..."
sudo systemctl restart fastapi

echo "Building frontend..."
cd ../client
npm install
npm run build

echo "Deploying frontend to Nginx..."
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r dist/* /usr/share/nginx/html/
cd ..

echo "Deployment complete!"