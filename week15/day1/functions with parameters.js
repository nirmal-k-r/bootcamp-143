var interest_rate=0.07; //global variable

function calculate_total_amount_repaid(loan_amount, number_of_years){
    total=loan_amount+ (number_of_years*interest_rate*loan_amount);
    return total;
}

result=calculate_total_amount_repaid(1000000,5);

console.log(result); 