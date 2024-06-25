#!/bin/bash

echo "Entrez le message de commit :"
read commit_message

git add .

git commit -m "$commit_message"

git push heroku main