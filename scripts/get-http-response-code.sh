#!/bin/bash
#
curl -s localhost:4000/api/workouts -o /dev/null -w '%{response_code}' | jq .
