#!/bin/bash

# Get the directory of the script
script_directory=$(dirname "$0")

# Get the parent directory
parent_directory=$(dirname "$script_directory")

curl localhost:4000/api/workouts -d @$parent_directory/data/benchpress.json -H 'content-type: application/json' | jq .

