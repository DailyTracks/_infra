# DailyTracks Server

해당 레포는 플랫폼 서버에 대한 레포입니다.

## Instruction to Tech

- Usage Library
  - express
  - multer
  - mysql2
  - axios
  - bull
  - cors
  - dotenv
  - exif-parser
  - passport
  - passport-naver-v2
  - passport-oauth
  - sequelize
  - sequelize-auto
  - socket.io
  - socket.io-client
  - swagger-autogen
  - swagger-ui-express
- infra environment
  - aws ec2
- proxy
  - nginx

## Installation Instructions

1. server1과 server2에 .env.temp를 .env로 파일명을 바꿔준다.
2. docker-compose up --build -d 로 백그라운드로 build한다.
   - docker-compose 를 확인하고, 사용하는 port를 비워주어야한다.

## Folder Structure

- nginx - proxy 와 로드밸러서 역할
- server1 - 서비스 로직 서버
- server2 - io 로직 서버 (채팅)
