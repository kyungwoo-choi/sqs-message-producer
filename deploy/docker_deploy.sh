# shellcheck disable=SC2129
mkdir -p /www/deploy/logs/user-event-api

# start
echo -e "($(date +%Y-%m-%d) $(date +%T)) START" >> /www/deploy/logs/user-event-api/docker_deploy.log

# check server environment
echo "------ echo SERVER_ENVIRONMENT ------" >> /www/deploy/logs/user-event-api/docker_deploy.log
source ~/.bashrc
echo $SERVER_ENVIRONMENT >> /www/deploy/logs/user-event-api/docker_deploy.log

# move to destination directory
cd /www/deploy/user-event-api

aws secretsmanager get-secret-value --secret-id env/$SERVER_ENVIRONMENT/user-event-consumer --query SecretString --output text | jq -r 'to_entries[] | "\(.key)=\(.value)"' > ./.env

# check docker images
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker images" >> /www/deploy/logs/user-event-api/docker_deploy.log
docker images &>> /www/deploy/logs/user-event-api/docker_deploy.log

# login to ecr
echo -e "($(date +%Y-%m-%d) $(date +%T)) aws ecr" >> /www/deploy/logs/user-event-api/docker_deploy.log
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin {ecr address} &>> /www/deploy/logs/user-event-api/docker_deploy.log

# pull newly docker images
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker pull" >> /www/deploy/logs/user-event-api/docker_deploy.log
#docker pull 781553267068.dkr.ecr.ap-northeast-2.amazonaws.com/user-event-api:$SERVER_ENVIRONMENT-latest &>> /www/deploy/logs/user-event-api/docker_deploy.log
docker-compose pull &>> /www/deploy/logs/user-event-api/docker_deploy.log

# down(stop & remove) old containers
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker down" >> /www/deploy/logs/user-event-api/docker_deploy.log
docker-compose down &>> /www/deploy/logs/user-event-api/docker_deploy.log

# up containers
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker run" >> /www/deploy/logs/user-event-api/docker_deploy.log
docker-compose up -d &>> /www/deploy/logs/user-event-api/docker_deploy.log

# remove unused images
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker prune" >> /www/deploy/logs/user-event-api/docker_deploy.log
docker image prune -f &>> /www/deploy/logs/user-event-api/docker_deploy.log

# check containres
echo -e "($(date +%Y-%m-%d) $(date +%T)) docker container" >> /www/deploy/logs/user-event-api/docker_deploy.log
docker container ls &>> /www/deploy/logs/user-event-api/docker_deploy.log

rm -f ./.env
