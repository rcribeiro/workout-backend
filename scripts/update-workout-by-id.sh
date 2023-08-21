#!/bin/bash

# Get the directory of the script
script_directory=$(dirname "$0")

# Get the parent directory
parent_directory=$(dirname "$script_directory")

# Check if at least one argument is provided
if [ $# -eq 0 ]; then
    echo "No arguments provided."
    exit 1
fi

# Access the first argument
id="$1"

curl -X PATCH "localhost:4000/api/workouts/$id" -d @$parent_directory/data/updatepushups.json -H 'content-type: application/json' | jq .
