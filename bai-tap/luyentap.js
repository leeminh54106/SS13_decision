// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn:
// Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình
// và tổng của những điểm này.

// let a = +prompt("nhap diem vat ly:");
// let b = +prompt("nhap diem hoa hoc:");
// let c = +prompt("nhap diem vat ly:");

// let result = a + b + c;

// //diem trung binh =  (a + b + c) /3; clg

// //tong diem = a + b + C; clg

// console.log("tong diem = " + result);
// debugger;
// console.log(`diem trung binh = ${result / 3}`);

// ----------------------------------------------------------------------------------------

// Bài 2: Viết chương trình nhập một giá trị là độ 0C (Celsius)
// và chuyển nó sang độ 0F (Fahrenheit).
// [Hướng dẫn: C/5 = (F-32)/9].

// let DoC = +prompt("nhap do C");
// let DoF = (DoC / 5) * 9 + 32;
// alert("do F = " + DoF);

// ----------------------------------------------------------------------------------------

// Bài 3: Viết chương trình tính diện tích hình tròn.
// S = R^2 x pi
// let R = +prompt("nhap ban kinh vao");
// let S = R ** 2 * 3.14;
// alert(`dien tich hinh tron la :  ${S}`);

// ----------------------------------------------------------------------------------------

// Bài 4: Viết một đoạn mã hỏi tên người dùng, sau đó chào họ và nói gì đó đáng yêu với họ
// input: Anh Tôn
// output: Hi Anh Tôn đẹp zaii !!!

// let ten = prompt("ten ban la gi"); //hoi ten nguoi dung
// alert("xin chao " + ten + " dep zai"); //hien thi gi do dang yeu

// ---------------------------------------------------------------------------------------- if else

// bài làm thử
// let time = +prompt("nhap gio vao");
// if (time >= 0 && time <= 14) {
//   console.log("van con som");
// } else if (time > 14 && time <= 24) {
//   console.log("da muon roi");
// } else {
//   console.log("sai roi");
// }

// ---------------------------------------------------------------------------------------- if else

// luyện tập cho người dùng nhập độ tuổi để đi xe bus
// <3: không hợp lệ
// 3 - 7: free
// 8 - 16: 7k
// 17 - 35: 10k
// 36 - 55: 5k
// >56: free

// let age = +prompt("nhap so tuoi");
// if ((age >= 3 && age <= 7) || age > 56) {
//   console.log("free");
// } else if (age >= 8 && age <= 16) {
//   console.log("7k");
// } else if (age >= 17 && age <= 35) {
//   console.log("10k");
// } else if (age >= 36 && age <= 55) {
//   console.log("5k");
// } else {
//   console.log("ko hop le");
// }

// ---------------------------------------------------------------------------------------- switch case # if else

//if else được sử dụng trong miền giá trị
//switch case sét từng trường hợp

// ---------------------------------------------------------------------------------------- if else  &&  switch case

// Cách xác định năm nhuận: Những năm chia hết cho 4 là năm nhuận,
// ngoại trừ những năm chia hết cho 100 mà không chia hết cho 400.

// Từ đó, có thể rút gọn thành các quy tắc xác định năm nhuận:

// Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận

// Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận

// Những năm chia hết đồng thời cho 100 và 400 là năm nhuận

// let year = +prompt("nhap nam can kiem tra");
// if (year % 4 == 0 && year % 100 != 0) {
//   console.log("la nam nhuan");
// } else if (year % 100 == 0 && year % 400 != 0) {
//   console.log("la nam nhuan");
// } else if (year % 100 == 0 && year % 400 == 0) {
//   console.log("la nam nhuan");
// } else {
//   console.log("ko phai nam nhuan");
// }

// -----------------------------ket hop switch case vs if else-------------------------------------------

// let month = +prompt("nhap thang can kiem tra");
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("co 31 ngay");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 12:
//     console.log("co 30 ngay");
//     break;
//   case 2:
//     let year = +prompt("nhap nam can kiem tra");
//     if (year % 4 == 0 && year % 100 != 0) {
//       console.log("la nam nhuan");
//       console.log("thang 2 co 29 ngay");
//     } else if (year % 100 == 0 && year % 400 != 0) {
//       console.log("la nam nhuan");
//       console.log("thang 2 co 29 ngay");
//     } else if (year % 100 == 0 && year % 400 == 0) {
//       console.log("la nam nhuan");
//       console.log("thang 2 co 29 ngay");
//     } else {
//       console.log("ko phai nam nhuan");
//       console.log("thang 2 co 28 ngay");
//     }
//     break;
// }

// ---------------------------------------------------------------------------------------- if else

// bài tập: ss9-bt6 : tính cân nặng cơ thể
// bmi = weight / ( height ^ 2 );
// <18.5 gầy
// 18.5 - 24.9 bt
// >= 25 thừa cân
// 25 - 29.9 tiền béo phì
// 30 - 34.9 béo cấp độ 1
// 35 - 39.9 béo cấp độ 2
// >= 40 béo cấp độ 3

// let weight = +prompt("nhap can nang");
// let height = +prompt("nhap chieu cao");
// let bmi = weight / height ** 2;
// console.log(bmi);

// if (bmi < 18.5) {
//   console.log("gay");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("bt");
// } else if (bmi >= 25) {
//   console.log("thua can");
//   if (bmi >= 30 && bmi <= 34.9) {
//     console.log("beo phi cap do 1");
//   } else if (bmi >= 35 && bmi <= 39.9) {
//     console.log("beo phi cap do 2");
//   } else if (bmi > 40) {
//     console.log("beo phi cam do 3");
//   }
// }
// ---------------------------------------------------------------------- loop vòng lặp
// vòng lặp while : lặp đi lặp lại vòng lặp không biết trước,ko xác định
// for:vòng lặp biết trước số lần
// do , while : hiển thị ít nhất 1 lần, xong mới sét điều kiện,
//
/// ---------------------------------------------------------------------- loop vòng lặp
// bài tập in ra bảng cửu chương
// let number = 1;
// for (i = number; i <= 10; i++) {
//   for (let k = 1; k <= 10; k++) {
//     console.log(`${i} * ${k} = ${i * k}`);
//   }
//   console.log("--");
// }

/// ---------------------------------------------------------------------- if else

// Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c.
// Tiến hành kiểm tra xem số nào là max và số nào là min.
// Sau đó in max và in ra màn hình console theo cú pháp “Max là - …” “Min là - …”.123

// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// let c = +prompt("nhap so c");
// let max = "";
// let min = "";

// if (a > b) {
//   max = a;
//   min = b;
// } else {
//   min = a;
//   max = b;
// }
// if (max < c) {
//   max = c;
// }
// if (min > c) {
//   min = c;
// }
// console.log(`max = ${max};
// min = ${min}`);

/// ---------------------------------------------------------------------- switch case if
// bài tập tìm cung hoàng đạo

// let date = +prompt("nhap ngay sinh");
// let month = +prompt("nhap thang sinh");

// switch (month) {
//   case 1:
//     date > 0 && date <= 19? alert("ma ket") : date > 19 && date <= 31? alert("bao binh") : alert("ko co ngay do");
//     break;
//   case 2:
//     date > 0 && date <= 18 ? console.log('bao binh') : date < 29 ? console.log('song ngu') : console.log("ko co ngay do");
//       break;
    
//   case 3:
//     date > 0 && date <= 20 ? console.log('song ngu') : date < 31 ? console.log('song ngu') : console.log("ko co ngay do");
   
//       break;
    
//   case 4:
//     date > 0 && date <= 19 ? console.log('bach duong') : date < 30 ? console.log('kim nguu') : console.log("ko co ngay do");
//       break;
//   case 5:
//     date > 0 && date <= 31 ? console.log('kim nguu') : date < 31 ? console.log('cung song tu') : console.log("ko co ngay do");
//       break;
    
//   case 6:
//     date > 0 && date <=  21? console.log('song tu') : date < 30 ? console.log('cu giai') : console.log("ko co ngay do");

//       break;
    
//   case 7:
//     date > 0 && date <= 22 ? console.log('cu giai') : date < 31 ? console.log('su tu') : console.log("ko co ngay do");

//       break;
    

//   case 8:
//     date > 0 && date <= 22 ? console.log('su tu') : date <  31? console.log('xu nu') : console.log("ko co ngay do");
   
    
//   case 9:
//     date > 0 && date <= 22 ? console.log('xu nu') : date < 30 ? console.log('thien binh') : console.log("ko co ngay do");

//       break;
    
//   case 10:
//     date > 0 && date <= 23 ? console.log('thien binh') : date < 31 ? console.log('ho cap') : console.log("ko co ngay do");
   
//       break;
    
//   case 11:
//     date > 0 && date <= 21 ? console.log('ho cap') : date < 30 ? console.log('nhan ma') : console.log("ko co ngay do");
   
//       break;
    
//   case 12:
//     date > 0 && date <= 21 ? console.log('nhan ma') : date < 31 ? console.log('ma ket') : console.log("ko co ngay do");
    
//       break;
    
// }

/// ---------------------------------------------------------------------- switch case if

// bài tập hiển thị 20 số nguyên tố đầu:
// số nguyên tố là số bắt đầu từ 2
// số nguyên tố chỉ chia hết cho 1 và chính nó
// debugger;
// let n = 0;
// let x = 2;

// while (n < 20) {
//   let flag = true;
//   for (i = 2; i <= Math.sqrt(x); i++) {
//     if (x % i === 0) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(`snt la ${x}`);
//     n++;
//   }
//   x++;
// }

// -------------------------
// bài tập sét số đó có phải là SNT hay ko

// let n = +prompt("nhap so can kiem tra");
// if (n > 0) {
//   let flag = true;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       console.log(`${n} ko phai la SNT`);
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(`${n} la SNT`);
//   }
// } else {
//   console.log(`${n} ko la SNT`);
// }

//--------------------------------------------------- while for if else

// bài tập xét xem số đó có phải là số hoàn hảo hay ko?

// let n = +prompt('nhap so can tim');
// let t = 0; //t dãy để cộng các ước của số cần Tìm
// while(n<10){


// for(i = 1; i <= n/2; i++){
//     if(n%i===0){
//         t += i;
//     }
// }
// if(t===n){
//     console.log(`${n} la SHH`);
// }else{
//     console.log(`${n} ko la SHH`);
// }
// }

//---------------------------------------------------
// tìm 4 số hoàn hảo
// debugger;
// let n = 0;
// let x = 6;


// while( n < 4){
//     let t = 0;
//     for(let i = 1; i <= x/2; i++){
//         if(x % i === 0){
//             t+= i;
//         }
//     }
//     if(t === x){
//         console.log(`${x} la SHH`);
//         n++
//     }
//     x++
// }
//------------------------------------------------------------in ra tam giac
// in ra tam giac

// for(let i = 1; i <= 10; i++){
 
//     let star = "";
    
//     for(let x = 10 - i; x > 0; x--){
//         star += " ";
//     }
//     for(let y =i; y >= 1; y--){
//         star+='*'
//     }
//     console.log(star);
// }

//------------------------------------------------------------in ra tam giac

// for(let i = 10; i >= 1; i--){

//     let star = "";

//     for(let z = 10 - i; z >= 1; z--){
//         star += " ";
//     }

//     for(let y = i; y >= 1; y--){
//         star += '*';
        
//     }
    
//     console.log(star);
// }

// -----------------------------------------------------------

// 1. Viết chương trình nhập vào số N. Hiển thị các số nguyên tố từ 0 → N.

// debugger;
// let n = +prompt(`nhap vao`);
// let x = 2;

// while(n > 0){
//     let flag = true;
//     for(let i = 2; i <= Math.sqrt(x); i++){

//         if(x % i === 0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         console.log(`${x} la so nguyen to`);
//         n--;
//     }
//    x++;
// }

// -----------------------------------------------------------
// viết 30 số đầu tiên chia hết cho 5
// let n = 0;
// let x = 0;
// let z = 1;
// while( n < 30){
//     if(z % 5 === 0){
//         n++;
        
//     }
// }

// -----------------------------------------------------------tam giác cân
// let n = +prompt('nhap so >= 2');

// for(i = 1; i <= n; i++){
//     let star = '';
//     for(x = n - i; x >= 1; x--){
//         star += "1";
//     }

//     for(z = 1; z <= 2 * i - 1; z++ ){
//         star += "*";
//     }
//     console.log(star);
// }
// // --------------------------------------------------------------------

// let n = +prompt ('nhap so can tim');

// for(i = 1; i<= n; i++){

//     let star = "";

//     for(z = 1; z < i; z++){
//         star += ' ';
//     }
//     for(y = n*2-2 ; y >= 2*i - 2; y--){
//         star += "*";
       
//     }
//     console.log(star);  
// }

// // --------------------------------------------------------------------
// số armstrong
// let so = +prompt('nhap so can kiem tra');

// let sothuhai = so;

// let chuoiso = 0;
// let copyso = so;
// let tong = 0;

// while(so >=1){
//     chuoiso += 1;
//     so = so/10;
// }

// while (copyso > 0){
//     let copysothuhai = copyso % 10;
//     tong += Math.pow(copysothuhai, chuoiso);
//     copyso = (copyso - copysothuhai) / 10;
// }

// if(tong == sothuhai){
//     alert('dung');
// }else{
//     alert('sai');
// }
// -------------------------------------------
// số đảo ngược
//  let n = prompt('nhap ten vao');
 
//  let vitri = '';

//  for(i = n.length - 1; i >=0; i--){
//     vitri += n[i]
//  }
//  console.log(vitri);

//  --------------------------------------------------
// in so armstrong
// let socantim = +prompt('nhap so can tim');

// let chuyensovechuoi = socantim.toString();

// let tong = 0;

// for(let i = 0; i <= chuyensovechuoi.length - 1;i++){

//     let chuyenivethanhso = Number(chuyensovechuoi[i]);

//     tong += Math.pow(chuyenivethanhso,chuyensovechuoi.length );
// }

// if(tong === socantim){
//     alert('la so amrstrong');
// }else{
//     alert('ko phai la amrstrong');
// }

//---------------------
// let n = prompt('nhap ten');

// let c = '';

// for(i = n.length -1; i >= 0; i--){
//     c += n[i];
// }
// alert(c);
////---------------------------------------------------------
// in ra hinh vuong
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
//-----------------------------------------------------------------
// tinh tien

// let n = +prompt('nhap so be hon 100');

// if( n < 1 || n >100){
//     alert('nhap lai');
// }else{
    
//     for( let i = 1; i <= n ; i++){
//         let row = '';
//         for(let x = i; x < i + n ; x++){
//             row += x  + ' ';
//         }
//         console.log(row);
//     }
// }

// ----------
// debugger;
let n = +prompt('nhap so nho hon 100');
let x = n; // nếu ko đặt biết x thì n sẽ tăng đến vô tận

if(n < 1 || n >100){
    alert('nhap lai');
}else{
    for(i = 1; i <= n; i++){
        let row = '';
        for(z = i; z < x + 1; z++){
            row += z + " ";
            
        }
        console.log(row);
        x++;
    }
   
} 
// --------------------------------------------------
