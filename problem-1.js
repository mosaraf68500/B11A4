function calculateVAT( price ) {
    if (typeof price !== "number" || isNaN(price) || price <= 0) {
        return "Invalid";
    }
    const total_vat=price*7.5;
    const vat_result=total_vat/100;
    return vat_result;
}


const result=calculateVAT(999)
console.log(result)
