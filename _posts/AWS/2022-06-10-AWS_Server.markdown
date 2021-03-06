---
layout: post
title: AWS 서버구축
date: 2022-06-10 13:14 +0900
category: AWS
---

> AWS 서버구축

### 구성
* 서버: EC2 + ELB + RDS
* 개발: Git + CodePipeline(CodeBulid + CodeDeploy)

### 구축 방법
* EC2 생성  
	* OS: Amazon Linux 2  
	* 필요에 따라 인스턴스 유형을 선택  

```sh
# linux 서버 셋팅

# 기본 업데이트
sudo yum update -y

# openjdk 11 설치
sudo curl -L https://corretto.aws/downloads/latest/amazon-corretto-11-x64-linux-jdk.rpm -o jdk11.rpm
sudo yum localinstall jdk11.rpm
sudo /usr/sbin/alternatives --config java
java --version
rm -rf jdk11.rpm

# nodejs 설치(v16)
sudo yum install -y gcc-c++ make 
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash - 
sudo yum install -y nodejs
sudo npm install -g forever

# codedeploy-agent 설치
sudo yum install ruby
sudo yum install wget
cd /home/ec2-user
wget https://aws-codedeploy-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent status  

# time-zone 변경
timedatectl list-timezones | grep Seoul
sudo timedatectl set-timezone Asia/Seoul
```

* FTP를 통해서 jar파일 업로드 및 실행  
	* nohup java -jar apiserver-0.0.1-SNAPSHOT.jar > /dev/null 2> /dev/null < /dev/null &  

* 탄력적 IP 등록  

* 로드발랜서 등록  
	* 인스턴스의 가용영역을 포함해야함.  

* RDS 생성 - MariaDB  
	* time-zone 변경: 파라미터 그룹에서 타임존그룹을 생성하여 파라미터그룹 변경  

* 보안그룹 설정  
	* 인스턴스 보안그룹은 가용영역과 개발자만 접근가능하도록 설정  
	* 로드발랜서는 모든 IP허용  
	* RDS 보안그룹은 인스턴스 보안그룹을 포함하도록 하며, CodeBulid 시 TDD를 위해 CodeBulid에서도 접근가능하도록 해야함.  

* CodePipeline 생성
	* 배포 시 속도 향상을 위해 등록한 로드발랜서의 그룹속성을 수정해야함.  
	* "appspec.yml"파일로 배포 수명 주기에 의해 관리할 수 있음.  

<br>


