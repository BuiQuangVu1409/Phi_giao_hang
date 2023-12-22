// Chương trình Tính Toán Phí Giao Hàng:
//     Tạo một chương trình tính toán phí giao hàng dựa trên khoảng cách,
//     trọng lượng của gói hàng, và tốc độ giao hàng yêu cầu
//     (tiêu chuẩn(1),nhanh(1.5), hỏa tốc(1.75)).
// // công thức: khoảng cách * 15000  * tốc độ + (trọng lượng*1000)
function phi(){
    let km = document.getElementById("km").value;
    let kg = document.getElementById("kg").value;
    let h = document.getElementById("h").value;
    let a = parseFloat(km);
    let b = parseFloat(kg);
    let c = parseFloat(h);
    let d = a * 15000 * c +(b * 1000);





    if(c === 1){
        alert(`phí giao hàng với tốc độ giao tiêu chuẩn là : ${d}`);
    }else if(c === 2){
        alert(`phí giao hàng với tốc độ giao nhanh là : ${d}`);
    }else if(c === 3){
        alert(`phí giao hàng với tốc độ giao hỏa tốc là : ${d}`);
    }
}