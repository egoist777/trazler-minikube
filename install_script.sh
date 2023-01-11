#!/bin/bash

echo Write a tag name...
read tag
echo Enter the release name...
read release

eval $(minikube -p minikube docker-env)
cd nginx-trazler
docker build -t nginx:$tag  . && cd ../ 
sed -i'.original' -e "s/change/$tag/g" "restclient-helm-release/values.yaml"
rm restclient-helm-release/*.original && helm install $release ./restclient-helm-release && sleep 10
echo "127.0.0.1  trazler.info" >> /etc/hosts
minikube service $release-restclient-service &

sed -i'.original' -e "s/$tag/change/g" "restclient-helm-release/values.yaml"
rm restclient-helm-release/*.original
