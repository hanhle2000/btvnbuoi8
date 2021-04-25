//BAI0:Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// function snt(number)
// {
//   let check=true;
// if(number<2)
// {
//  check=false;
// }
// else if(number==2)
// {
//  check=true;
// }
// else{
// for(let index=2;index<number-1;index++){
//  if(number%index==0)
//  {
//    check=false;
//  }
// }
// }
// if(check===true){
//  console.log("la so nt") ;
// }
// else{
//  console.log("không"); 
// }

// }
// snt(109)
// console.log('...............bai1.........');

//BAI1:1. Viết chương trình in ra các số từ 1 đến n?
// let b1=10;
// {
//     for(let i=0;i<=b1;i++)
//     console.log(i);
//     console.log('..........bai 2........');
// }

//..........BAI2:Viết chương trình in ra các số lẻ từ 1 đến n(ok)

//     function hienthi(){
//     var number=document.getElementsById("number").value;
//     for(let i=0;i<=number;i++ )
//         {
//             if(i%2==1)
//            alert(i);
        
//         } 

//        document.getElementsById("kq").innerHTML=result;
// }

// console.log('..........bai 3........');

//.....BAI3 :các số chẵn từ 0-n (ok)
// let b3=20;
// {
//     for(let i=0;i<b3;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//     }
// }
// console.log('..........bai 4........');

//....BAI4 : Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?

// let a=(n)=>{
//         for(let i=0;i<=n;i+=2){
//             let count = 0;
//             for(let j=0;j<=Math.sqrt(i);j++)
//               if(i%j==0){
//                   count++;
//                   break;
//               }
//             if(count==0)
//                 console.log(i);
//     }
//     }
//     a(50);
// console.log('..........bai 5........');

//......BAI 5:Viết chương trình tính tổng từ 1 đến n(ok)
// let b5=5;
// let s=0;
// for(let i=1;i<=b5;i++)
// {
//     s=s+i;
    
// }
// console.log(s);
// console.log('..........bai 6.........');

//........BAI6: Viết chương trình tính tổng bình phương của các số từ 1 đến n(ok)
// let b6=3;
// let sum=0;
// for(let i=1;i<=b6;i++)
// {
//     sum=sum+i;
    
// }
// console.log(sum*sum);
// console.log('..........bai 7........');

//.......Bai7:Tính tổng các số lẻ trong khoảng 1 đến n?(ok)
// let b7=5;
// let tong=0;
// for(let i=1;i<=b7;i+=2)
//     {
//         tong=tong+i;
//     }
//      console.log(tong);
// console.log('..........bai 8........');
//..........BAI8: Kiểm tra số n có toàn số lẻ tạo thành hay không?
// let n=405;
// check=true;
// while(n/=10)
// {
//     if((n%10)%2==0)
//     {
//         check=false;
//     }
// }
// if(check==true)
// {
//     console.log('đúng');
// }
// else{
//     console.log('sai');
// }