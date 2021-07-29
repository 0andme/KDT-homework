// 상품 데이터
const data = [
  { name: "초콜렛", price: 2000 },
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 }
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item
  ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.`
  : "살 수 있는 상품이 없습니다.";

// 결과 출력
alert(msg);

// getItemByAmount 함수
function getItemByAmount(dataArray, userMoney) {

  //사용자 입력값 userMoney가 숫자로만 이루어진 문자열인지 확인
  if (isNaN(userMoney)){
    return null;
  }
  else {

  //filter메서드 사용 - dataArray배열에서 사용자의 금액으로 구매가능한 상품만 itemlist 배열에 저장
  const itemlist = dataArray.filter(
    (product) => userMoney - product.price >= 0
  );

  //itemlist를 금액 순으로 내림차순 정렬
  itemlist.sort((a,b)=>b.price-a.price);
  
  // 배열의 첫 번째 값 return 
  return itemlist[0];
  }
}
