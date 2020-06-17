
import './styles.css';

const tipPercentage = .20;



const btnCalculate = document.getElementById('btnCalculate') as HTMLButtonElement;
const txtAmount = document.getElementById('txtAmount') as HTMLInputElement;
const spnBillAmount = document.getElementById('spnBillAmount') as HTMLSpanElement;
console.log({
    btnCalculate,
    txtAmount,
    spnBillAmount
})


btnCalculate.addEventListener('click', handleCalculate);


function handleCalculate() {
    const amount = txtAmount.valueAsNumber;
    spnBillAmount.innerText = amount.toString();
    txtAmount.select();
    txtAmount.focus();
}