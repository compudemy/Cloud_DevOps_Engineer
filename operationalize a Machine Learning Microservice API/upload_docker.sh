#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
# dockerpath=<your docker ID/path>
dockerpath=arnoldrx/ml:api

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"

# Step 3:
# Push image to a docker repository
docker login -u "arnoldrx" -p "HGhfGWzSFQTyW3g" docker.io
docker tag api:latest $dockerpath
docker push $dockerpath
