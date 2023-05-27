#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # As long as last commit is not test or a Merge pull request
  git log -1 --pretty=%B | grep -E --quiet "test|Merge pull request"
fi