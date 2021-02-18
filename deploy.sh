#!/bin/bash

ssh -i /c/Users/emanu/.ssh/seveganwebsite seveganwebsite@35.237.93.95  "cd sevegan && git pull && sudo docker-compose down && sudo docker-compose up -d"
