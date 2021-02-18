#!/bin/bash

ssh -i .ssh/seveganwebsite seveganwebsite@35.237.93.95  "cd server && git pull && sudo docker-compose down && sudo docker-compose up -d"
