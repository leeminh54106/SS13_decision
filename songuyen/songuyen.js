// let input = +prompt("nhap vao day");
// const k = 0;
// let n = 2;
// for(let i = 1;)

// let n = +prompt("nhap so bat ki");
// let flag = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     console.log(`${n} chia het cho ${i}`);
//     flag = false;
//     break;
//   }
// }

// if (flag) {
//   console.log(`${n} la SNT`);
// } else {
//   console.log(`${n} khong phai SNT`);
// }

// for (let i = 1; i <= 9; i++) {
//   for (let k = 1; k <= 10; k++) {
//     console.log(`${i} * ${k} = ${i * k} `);
//   }
//   console.log("--------------");
// }

// ---------------------------------------ex: tìm 20 số nguyên tố-------------------------------------------
// let N = 0; //N là số lần hiện ra số nguyên tố

// let X = 2; //X là số nguyên tố xét từ số 2

// while (N < 20) {
//   //while là số lần lặp ko biết trước,for thì sẽ biết trước,N = 20 số nguyên tố
//   let check = true;

//   for (let i = 2; i <= Math.sqrt(X); i++) {
//     if (X % i === 0) {
//       check = false;
//       break;
//     }
//   }

//   // check == true tương đương với việc đã tìm được một số nguyên tố
//   if (check) {
//     console.log(`Số nguyên tố thứ ${N}: ${X}`);
//     N++;
//   }
//   X++;
// }

// ---------------------------------------ex:so hoa hao -------------------------------------------
//số hoàn hảo là ước của nó cộng vào bằng chính nó, ngoài trừ nó.vd: ước của 6 là 1,2,3,6
// debugger;
// let X = +prompt("nhap vao so ma ban can kiem tra:");
// let T = 0;
// while (X < 10) {
//   for (let i = 1; i <= X / 2; i++) {
//     if (X % i === 0) {
//       T += i; //T = T + i;
//     }
//   }

//   if (T === X) {
//     console.log(`${X} la so hoan hao`);
//   } else {
//     console.log(`${X} ko phai la so hoan hao`);

//   }
// }

// -------------------------------ex: tim 4 so hoan hao------------------------------------
// let N = 0;
// let X = 6;

// while (N < 4) {

//     let T = 0;

//     for (let i = 1; i <= X / 2; i++) {
//         if (X % i === 0) {
//             T += i;
//         }
//     }

//     if (T === X) {
//         N++;
//         console.log(`${X} là số hoàn hảo`);
//     }
//     X++;
// }

// -------------------------------ex:tam giac------------------------------------
// let N = 10;

// for (N; N >= 1; N--) {
//     let star = "";
//     for (let i = 1; i <= N; i++) {
//         star += "*";
//     }
//     console.log(star);
// }
// ---------------------------------------------
// let N = 1;

// for (N; N <= 10; N++) {
//   let star = "";
//   for (let i = 1; i <= N; i++) {
//     star += "*";
//   }
//   console.log(star);
// }

// ---------------------------------------------khoang trang

// let N = 1;

// for (N; N <= 10; N++) {
//   let space = "";

//   for (let j = 9; j > 0; j--) {
//     pace = " ";
//   }

//   let star = "";
//   for (let i = 1; i <= N; i++) {
//     star += "*";
//   }
//   console.log(space + star);
// }

// let n = 10;
// debugger;
// for (let i = 1; i <= 10; i++) {
   

//   let star = "";

//   for (let j = 10 - i; j > 0;  j--) {

//     star += "1";
//   }


//   for (let k = i; k >= 1;  k--) {
//     star += "*";
//   }
//   console.log(star);
// }

// let N = 4;

// for (let i = 1; i <= 4; i++) {
//   let result = "";

//   for (let j = N - i; j >= 1; j--) {
//     result += " ";
//   }

//   for (let z = i; z >= 1; z--) {
//     result += "*";
//   }

//   console.log(result);
// }
// --------------------------------------------------so nguyen to tu 0 den N
// let n = +prompt("nhap so lon");

// let flag = true;

// for (i = 2; i < n; i++) {
//   if (n % i === 0) {
//     let flag = false;
//   } else {
//     console.log(`${i} la so nguyen to`);
//   }
//   break;
// }                                                 

// let a = 1;
// let b = 1;
// let sum = 0;
// for (i = 1; i <= 10; i++) {
//   // let sum = 0;
//   let c = a + b;
//   console.log(`${c}`);
//   a = b;
//   b = c;
//   sum = sum + c;
//   console.log(sum);
// }
// ----------------------------------------------------------------------------------------------------------

// alert: trả ra undefine, thường dùng để hiện thông báo
// prompt: để nhập thông tin, trả về string khi có nhập,
//          trả về null khi ấn hủy
// confirm: để xác nhận đồng ý hoặc không, nếu có thì trả về true,
//          nếu không thì trả về false

// var, let, const
// var: có thể khai báo lại được, có thể gán lại được, có thể kích hoạt hoisting
// let: ko khai báo lại được, có thể gán lại được, không kích hoạt hoisting
// const: ko khai báo lại được, không thể gán lại được, không kích hoạt hoisting

// kiểu dữ liệu cơ bản
// number: lưu số nguyên, thập phân
// string: lưu chuỗi, được bọc trong "", '', ``
// boolean: true, false
// NaN: not a number, lưu những giá trị liên quan đên số nhưng không phải là số
// undefined: khi khai báo mà chưa gán giá trị gì
// null: khi chúng ta cố tình gán là null

// toán tử:
// +, - , * , / , %, **
// tiền tố, hậu tố: đều là dấu ++, -- chỉ khác nhau vị trí đứng(trước, sau)
// +=, -=, /=, %=, **=
// >, >=, <, <=, ==, ===

// if   else if     else
// switch   case

// Dùng dấu + để nối chuỗi:

// In ra 20 số nguyên tố đầu tiên:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, ....
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.

// viết logic để kiểm tra một số X có phải nguyên tố hay không
// dùng for từ 2 -> Math.sqrt(X)

// input: N = 0
// logic: tìm cách kiếm đủ 20 số, với mỗi số kiếm được thì tăng N lên một;
// sử dụng logic tìm số nguyên tố
// output: N = 20, in ra 20 số đấy

// X = 2,3,4,5,6,7,8,9,10,....
// let N = 0;
// let X = 2;
// while (N < 20) {
//     let check = true;
//     for (let i = 2; i <= Math.sqrt(X); i++) {
//         if (X % i === 0) {
//             check = false;
//             break;
//         }
//     }
//     // check == true tương đương với việc đã tìm được một số nguyên tố
//     if (check) {
//         N++;
//         console.log(`Số nguyên tố thứ ${N}: ${X}`);
//     }
//     X++;
// }

// Số hoàn hảo: có tổng các ước bằng chính số đó:
// VD: 6 = 3 + 2 + 1; 28 = 14 + 7 + 4 + 2 + 1; ...

// B1: Chọn một số để đi kiểm tra: X = 28;
// B2: Tìm ước: 14, 7, 4, 1
// B3: Tính tổng các ước: T = 17 + 7 + 4 + 1 = 28
// B4: So sánh T và X
// B5: Kết luận: T === X => X là số hoàn hảo <==> X không phải số hoàn hảo.

// input: X, T = 0
// output: X <> T => KL: ....

// let X = +prompt("Nhập vào số mà bạn cần kiểm tra: ");
// let T = 0;

// for (let i = 1; i <= X / 2; i++) {
//     if (X % i === 0) {
//         T += i; // T = T + i;
//     }
// }

// if (T === X) {
//     console.log(`${X} là số hoàn hảo`);
// } else {
//     console.log(`${X} không phải là số hoàn hảo`);
// }

// let N = 0;
// let X = 2;

// while (N < 4) {

//     let T = 0;

//     for (let i = 1; i <= X / 2; i++) {
//         if (X % i === 0) {
//             T += i;
//         }
//     }

//     if (T === X) {
//         N++;
//         console.log(`${X} là số hoàn hảo`);
//     }
//     X++;
// }

// let N = 10;
// for (N; N >= 1; N--) {
//     let star = "";
//     for (let i = 1; i <= N; i++) {
//         star += "*";
//     }
//     console.log(star);
// }

// let N = 1;
// for (N; N <= 10; N++) {
//     let star = "";
//     for (i = 1; i <= N; i++) {
//         star += "*";
//     }
//     console.log(star)
// }

// let N = 10;

// for (let i = 1; i <= 10; i++) {
//     let result = "";

//     for (let j = N - i; j >= 1; j--) {
//         result += " ";
//     }

//     for (let z = i; z >= 1; z--) {
//         result += "*";
//     }

//     console.log(result);
// }

// Bài tập trên lớp:
// 1. Viết chương trình nhập vào số N. Hiển thị các số nguyên tố từ 0 → N.
// let N = +prompt("Nhập N: ");

// for (let i = 2; i < N; i++) {
//     let check = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             check = false;
//             break;
//         }
//     }

//     if (check) {
//         console.log(i);
//     }
// }

// 2. Viết chương trình nhập vào số N. Hiển thị N số nguyên tố theo thứ tự tăng dần.
// let N = +prompt("Nhập N: ");
// let X = 2;
// while (N > 0) {
//     let check = true;
//     for (let i = 2; i <= Math.sqrt(X); i++) {
//         if (X % i === 0) {
//             check = false;
//             break;
//         }
//     }
//     if (check) {
//         console.log(X);
//         N--;
//     }
//     X++;
// }

// 3. Viết chương trình nhập vào số nguyên N.
// Nếu giá trị nhập vào > 0, yêu cầu người dùng nhập tiếp cho đến
// khi nào nhập vào số < 0 thì kết thúc.
// Hiển thị kết quả phân loại các số vừa nhập thuộc các nhóm
// số nguyên tố, số hoàn hảo, số chẵn, số lẻ.
// let N;
// do {
//     // do something
// } while (N > 0);

// 4. Tính tổng 30 số đầu tiên chia hết cho 5
// debugger;
// let total = 0;
// let count = 0;
// let N = 1;
// while (count < 5) {
//     if (N % 5 === 0) {
        
//         total += 5;
        
//         count++;
//         console.log(total);
//     }
//     N++;
// }

// 8. Vẽ sao tam giác cân n >= 2;??????
// debugger;
// let N = +prompt("Nhập n >= 2: ");

// for (let i = 1; i <= N; i++) {
//     let star = "";
//     for (let j = N - i; j >= 1; j--) {
//         star += "1";
//     }

//     for (let z = 1; z <= 2 * i - 1; z++) {
//         star += "*";
//     }
//     console.log(star);
// }

// 10.
// let str1 = "son";
// let str2 = "";
// for (let i = str1.length - 1; i >= 0; i--) {
//     str2 += str1.charAt(i);
// }
// console.log(str2);

// Luyện tập 2:
// 4. Chiều dài là 20; rộng ;
// input: a = 20; b = 8;
// output: hình chữ nhật rỗng;
// debugger;
// for (let i = 1; i <= 8; i++) {
//     if (i === 1 || i === 8) {
//         for (let j = 1; j <= 20; j++) {
//             document.write("*");
//         }
//     } else {
//         for (let j = 1; j <= 20; j++) {
//             if (j === 1 || j === 20) {
//                 document.write("*");
//             } else {
//                 document.write('&ensp;');
//             }
//         }
//     }
//     document.writeln('<br />');
// }

// 6. Lãi suất
let tienGoc = 1000000;
let laiSuat = 0.05;
for (let i = 1; i <= 6; i++) {
    console.log(`thang ${i}: ${tienGoc} || ${(tienGoc * laiSuat).toFixed(2)} `,);
    tienGoc += tienGoc * laiSuat;
}
