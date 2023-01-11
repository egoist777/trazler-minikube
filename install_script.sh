#!/bin/bash

echo Write a tag name...
read tag
echo Enter the release name...
read release

eval $(minikube -p minikube docker-env)
cd nginx-trazler
docker build -t nginx:$tag  . && cd ../ 
sed -i'.original' -e "s/change/$tag/g" "trazler-helm-chart/values.yaml"
rm trazler-helm-chart/*.original && helm install $release ./trazler-helm-chart && sleep 10
if grep -R "127.0.0.1  trazler.info" "/etc/hosts"
then 
  echo "Record exists!"
else
  echo "Adding record..."
  echo "127.0.0.1  trazler.info" >> /etc/hosts
fi
minikube service $release-trazler-service &

sed -i'.original' -e "s/$tag/change/g" "trazler-helm-chart/values.yaml"
rm trazler-helm-chart/*.original
