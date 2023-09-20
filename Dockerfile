FROM node:16

RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

RUN yarn global add pm2
RUN pm2 install pm2-logrotate && pm2 set pm2-logrotate:compress true

# 앱 디렉토리
WORKDIR /

# 의존성 설치
COPY ./package*.json ./
COPY ./yarn* ./

# 패키지파일들 받기
RUN yarn cache clean && yarn install

# 앱 소스 추가
COPY ./ .

RUN yarn build

EXPOSE 3001
CMD pm2-runtime start built/App.js --env production
