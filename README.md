# Pet-Shop 강의자료

## 준비 사항

> MetaMask 계정 생성
>
> Ropsten ETH

<br>

## Remix IDE 스마트 컨트렉트 작성

> 웹 브라우저에서 Remix IDE 사이트 (https://remix.ethereum.org) 열기
>
> 좌측에 Workspace 옆에 + 버튼을 눌러서 Workspace 새로 만들기
>
> contracts폴더를 클릭하고 스마트 컨트랙트 파일 Adoption.sol(파일명은 자유) 만들기
>
> 깃헙에 있는 Adoption.sol 파일 내용을 전부 복사하여 Adoption.sol(파일명은 자유) 파일에 붙여넣기
>
> ctrl + s 를 눌러서 저장하기
>
> 좌측 <img width="25" alt="스크린샷 2022-09-04 오후 3 03 51" src="https://user-images.githubusercontent.com/39263149/188299824-e29ccae4-2800-4800-9af6-87da6f465fe9.png"> 아이콘을 클릭하여 컴파일 환경 설정
>
> (Compliler+ 메뉴 아래의 선택창에서 0.4.17버전로 변경)
>
> 푸른색 버튼(Compile Adoption.sol) 을 클릭하여 실행 파일 만들기
>
> 좌측 <img width="25" alt="스크린샷 2022-09-04 오후 3 03 56" src="https://user-images.githubusercontent.com/39263149/188299825-f7acbe8a-51b8-48ba-870f-3a9d833aac64.png"> 아이콘을 클릭하고
> <img width="200" alt="스크린샷 2022-09-04 오후 2 58 16" src="https://user-images.githubusercontent.com/39263149/188299752-4e3138b7-4145-4a6a-ab3d-418e5f091c22.png">
> 이 부분을 Adoption 으로 변경
>
> <img width="200" alt="스크린샷 2022-09-04 오후 3 02 01" src="https://user-images.githubusercontent.com/39263149/188299789-86ae28bd-c254-4619-8876-090384be07d7.png"> 이부분을 Injected Provider 로 변경 (MetaMask에서 연결 알림 뜨면 연결하기 버튼 클릭)
>
> Depoly 아이콘을 클릭하여 MetaMask 계약 확인 후 스마트 컨트랙트 배포
>
> <img width="200" height="30" alt="스크린샷 2022-09-02 오후 12 15 08" src="https://user-images.githubusercontent.com/39263149/188300085-91e597b4-1641-496f-be7d-ccb35e2157a0.png"> Deployed Contracts 부분이 생기면 <img width="30" height="30" alt="스크린샷 2022-09-04 오후 3 15 37" src="https://user-images.githubusercontent.com/39263149/188300131-d9f1adb5-0170-480c-9f6c-52ef2dcaf782.png"> 를 클릭하여 스마트 컨트랙트 주소 복사 (1)
>
> Deploy 완료 후 좌측 <img width="25" alt="스크린샷 2022-09-04 오후 3 20 32" src="https://user-images.githubusercontent.com/39263149/188300315-7217938e-9d5e-4387-bd72-58e512f914eb.png"> 아이콘을 클릭하여 <img width="41" alt="스크린샷 2022-09-04 오후 3 24 35" src="https://user-images.githubusercontent.com/39263149/188300459-897dd471-2e90-42b1-8880-5895af84555a.png"> 하단에 아이콘 클릭하여 ABI 복사 (2)

<br>

## Web으로 실행시키기

> 미리 작성된 CodePen 파일 열기 (https://codepen.io/pugoxjbx-the-animator/pen/dyePYYY)
>
> MetaMask와 CodePen 사이트 연결 승인
>
> 우측 <img width="53" alt="스크린샷 2022-09-04 오후 4 01 34" src="https://user-images.githubusercontent.com/39263149/188301565-b3663409-bc92-4fcf-be0d-5d2fa60633e0.png"> 코드에서 <img width="337" alt="스크린샷 2022-09-04 오후 4 15 21" src="https://user-images.githubusercontent.com/39263149/188302049-5b3f59b6-b305-4e73-8c62-90d28bd1e60f.png"> 33번째 줄에 복사한 컨트렉트 주소 값(1) ' ' 안에 붙여넣기
>
> 아랫줄에 <img width="290" alt="스크린샷 2022-09-04 오후 4 15 27" src="https://user-images.githubusercontent.com/39263149/188302048-aef4d188-7e88-45f0-96ac-11e95e8f3d63.png"> 36번째 줄에 복사한 ABI 값(2) `` 안에 붙여넣기
>
> 아래 ui에서 원하는 강아지를 정한 뒤 입양하기 버튼 클릭
>
> MetaMask를 통해 거래 승인
>
> 입양이 완료되면 입양완료 메세지가 나오고 입양이 완료됨 (거래에 약간의 시간이 걸릴 수 있음)
