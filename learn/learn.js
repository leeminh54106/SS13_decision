// in 1000 lan

import { month, date } from "../luyentap/luyentap";

// co 1 bien chay theo doi so lan lap goi la i
// - diem bat dau cua vong lap
// -diem ket thuc cua vong lap
// -buoc nhay cua bien chay i

// for (let i = 0; i <= 4; i = i + 1) {
//   alert("hello world");
//   alert(i);
// }

// ex1: cho nguoi dung nhap vao so n
// tinh tong cua day so a = 1 + 2 + 3 + 4 + n--------------------------------------------

// let n = +prompt("nhap so");
// let total = 0;
// for (let i = 1; i < n; i = i + 1) {
//   total = total + i;
//   console.log("ket qua" + i);

//   console.log("ket qua", total);
// }
// -----------------------------------------------------------------------------
// let input = +prompt("nhap so");
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(input + i);
// }
// ex1: cho nguoi dung nhap vao so n
// tinh tong cua day so a = 1 * 2 * 3 * 4 * n--------------------------------------------
// let n = +prompt("nhap so");
// let total = 1;
// for (let i = 1; i < n; i = i + 1) {
//   total = total * i;
//   console.log(total);
// }

// console.log("ket qua");
// console.log(total);

// let n = +prompt("nhap so");
// let total = 0;
// for (let i = 1; i < n; i = i + 1) {
//   total = total  + i** 2;
//   console.log(total);
// }

// ex2-cho nguoi dung nhap so
// chia het cho 3 fizz
// chia het cho 5 buzz
// chia het cho 3 va 5 fizzbuzz

// let n = +prompt("nhap n:");

// for (let i = 1; i <= n; i = i +1) {
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("fizzbuzz");
//   }
//   else if (i % 5 === 0 ){
//     console.log("buzz");
// }
// else if (i % 3 === 0 ){
//   console.log("fuzz");
// }
// else{
//   console.log(i);
// }
// }

// let a = 1;
// let b = 1;
// let c = a + b;

// a = b;
// b = c;

// let a = 1;
// let b = 1;

// for (let i = 0; i < 20; i++) {
//   let c = a + b;
//   a = b;
//   b = c;
//   console.log(c);
// }

// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8

// let loop = true;
// while(loop === true){

// let answer = +prompt("nhap so bingo 1 - 100");

// let result = 49;

// if (answer > result) {
//   console.log("too big");
// } else if (answer < result) {
//   console.log("too small");
// } else {
//   console.log("bingo");
//   loop = false;
// }
// }

// let loop = true;
// while (loop === true) {
//   let hoi = prompt("m co yeu t ko?");
//   if (hoi === "yes") {
//     // dung
//     loop = false;
//   }
// }
switch (month) {
  case 1:
    ngay <= 19 && ngay > 0
      ? alert(
          "bạn sinh ngày " +
            ngay +
            " tháng " +
            thang +
            "\nbạn thuộc cung ma kết"
        )
      : ngay > 19 && ngay <= 31
      ? alert(
          "bạn sinh ngày " +
            ngay +
            " tháng " +
            thang +
            "\nbạn thuộc cung bảo bình"
        )
      : alert("không có ngày mà bạn nhập");
    break;

  case 2:
    if (date > 0 && date <= 29) {
      date <= 18 ? console.log("bao binh") : console.log("song ngu");
      break;
    }
  case 3:
    if (date > 0 && date <= 31) {
      date <= 20 ? console.log("song ngu") : console.log("bach duong");
      break;
    }
  case 4:
    if (date > 0 && date <= 30) {
      date <= 19 ? console.log("bach duong") : console.log("cung kim nguu");
      break;
    }
  case 5:
    if (date > 0 && date <= 31) {
      date <= 20 ? console.log("kim nguu") : console.log("cung song tu");
      break;
    }
  case 6:
    if (date > 0 && date <= 30) {
      date <= 21 ? console.log("cung song tu") : console.log("cung cu giai");
      break;
    }
  case 7:
    if (date > 0 && date <= 31) {
      date <= 22 ? console.log("cung cu giai ") : console.log("cung su tu ");
      break;
    }

  case 8:
    if (date > 0 && date <= 31) {
      date <= 22 ? console.log("cung su tu ") : console.log("cung xu nu ");
      break;
    }
  case 9:
    if (date > 0 && date <= 30) {
      date <= 22 ? console.log("cung xu nu ") : console.log("cung thien binh");
      break;
    }
  case 10:
    if (date > 0 && date <= 31) {
      date <= 23 ? console.log("cung thien binh") : console.log("cung ho cap ");
      break;
    }
  case 11:
    if (date > 0 && date <= 30) {
      date <= 21 ? console.log("cung ho cap ") : console.log("cung nhan ma ");
      break;
    }
  case 12:
    if (date > 0 && date <= 31) {
      date <= 21 ? console.log("cung  nhan ma") : console.log("cung  ma ket");
      break;
    }
}
