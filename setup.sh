image_version=`date +%Y%m%d%H%M`;
echo $image_version;
# cd webhtml
git pull --rebase origin master;
docker stop webhtml;
docker rm webhtml;
docker build -t webhtml:$image_version .;
docker images;
docker run -p 10000:10000 -d --name webhtml webhtml:$image_version;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs webhtml;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)