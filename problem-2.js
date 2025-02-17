function  validContact( contacts ) {
    if (typeof contacts !== "string" || contacts.trim() === "") {
        return "Invalid";
    }
if(contacts.length===11  && contacts[0]==='0' && contacts[1]==='1' ){
    return true;
}
else{
    return false;

}

}


const result=validContact(true);
console.log(result)