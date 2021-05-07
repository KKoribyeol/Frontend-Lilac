# 꼬리별 [KKoribyeol]
## 프론트엔드 (Lilac)
![라일락](https://user-images.githubusercontent.com/48639421/113157641-0a356600-9276-11eb-8ed6-db79265b296c.jpg)  
푸시 서비스가 필요해서 사용해본 NHN Cloud의 TOAST 푸시 서비스,  
TOAST 푸시 서비스를 사용하면서 느꼈던 불편한 점을 개선하여  
모두가 사용할 수 있는 푸시 서비스를 만드는 것이 목표인 프로젝트!  

## Feature
- 푸시
  - 단일 / 대량 푸시 발송
  - 템플릿 푸시 발송
  - 그룹 푸시 발송
  - 예약 발송
- 사용자
  - 사용자 관리
  - 사용자별 프로젝트 관리
- 푸시 대상자
  - 푸시 대상자 관리
  - 푸시 대상자 그룹화

## UI
### 회원가입
![image](https://user-images.githubusercontent.com/48639421/114975437-35979200-9ebf-11eb-94fa-fa94c888708e.png)
### 로그인
![image](https://user-images.githubusercontent.com/48639421/114975481-46e09e80-9ebf-11eb-9fe7-32a6cbc2b6e3.png)
### 프로젝트 관리
![image](https://user-images.githubusercontent.com/48639421/114975534-5c55c880-9ebf-11eb-8599-2da3ff0a0430.png)
### 타겟 관리
![image](https://user-images.githubusercontent.com/48639421/114975551-67105d80-9ebf-11eb-899e-76950bd45b8e.png)
### 그룹 관리
![image](https://user-images.githubusercontent.com/48639421/114975581-7394b600-9ebf-11eb-8c4b-9c97f751271a.png)
### 템플릿 관리
![image](https://user-images.githubusercontent.com/48639421/114975614-7f807800-9ebf-11eb-8609-e5a99cfaf2f6.png)

## Project Structure
```
public
    ㄴindex.html
    ㄴrobots.txt
src
    ㄴcomponent
    |   ㄴcommon
    |   |   ㄴfeature
    |   |   ㄴheader
    |   |   |   ㄴnavigation
    |   |   ㄴside-bar
    |   |       ㄴproject
    |   ㄴdocument
    |   ㄴgroup
    |   ㄴmain
    |   ㄴproject
    |   ㄴsignin
    |   ㄴsignup
    |   |   ㄴsignup-form
    |   ㄴtarget
    |   ㄴtemplate
    ㄴrouter
    ㄴstatic
    |   ㄴfont
    |   ㄴimage
    ㄴApp.js
    ㄴconfig.js
    ㄴindex.js
```

## Library & Framework
- React
- Javascript
- Axios
