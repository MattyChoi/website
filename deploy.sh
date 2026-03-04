#!/bin/bash

cd /home/ec2-user/website

echo "Pulling latest code..."
git pull origin main

echo "Building React frontend..."
cd client
npm install
npm run build
cd ..

echo "Installing backend dependencies..."
cd server
source venv/bin/activate
pip install -r requirements.txt

echo "Restarting backend..."
sudo systemctl restart fastapi 

echo "Deployment complete."