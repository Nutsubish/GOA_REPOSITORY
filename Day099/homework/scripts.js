// w3schoolshi da front end mentoris davaleba
//front end mentor

let form = document.getElementById('mortgageForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
    const interestRate = 3.5 / 100 / 12;

    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyRepayment = (loanAmount * x * interestRate) / (x - 1);
    const totalRepayment = monthlyRepayment * loanTerm;

    
});