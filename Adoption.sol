pragma solidity ^0.4.17;
contract Adoption {
    // 이더리움 Address의 배열
    address[4] public adopters;

    // 입양 요청
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 3);

        adopters[petId] = msg.sender;

        return petId;
    }

    // 입양 상태
    function getAdopters() public view returns (address[4]) {
        return adopters;
    }
}