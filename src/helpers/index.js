import * as Yup from 'yup';
import { toast } from 'react-toastify';

export function validateNumber(value, isAmount = false) {
  if (value === '') return true;

  if (value.length > 9) return false;

  if (isAmount && value.length > 4) return false;

  if (value.charAt(0) === '0' && value.length >= 2) return false;

  const rgx = /^[0-9]*$/;

  if (value.match(rgx)) return true;

  return false;
}

export function validetFileds(params) {
  if (
    params.minNumber === '' ||
    params.maxNumber === '' ||
    params.amout === ''
  ) {
    toast.error('É necessário preencher todos os campos');
    return false;
  }

  if (params.maxNumber <= params.minNumber) {
    toast.error('O campo "Até" deve ser maior do que o campo "De"');
    return false;
  }

  return true;
}

export async function generateNumber(params) {
  const schema = Yup.object().shape({
    minNumber: Yup.number().min(0).required(),
    maxNumber: Yup.number().moreThan(Yup.ref('minNumber')).required(),
    amount: Yup.number().min(1).max(10000).required(),
  });

  if (!(await schema.isValid(params))) {
    return [];
  }

  try {
    let numbers = [];

    const { minNumber, maxNumber, amount } = params;

    while (numbers.length !== parseInt(amount, 10)) {
      const value = parseInt(
        Math.random() * (maxNumber - minNumber + 1) + minNumber,
        10
      );

      const checkNumber = numbers.filter((item) => item === value);

      if (amount > maxNumber - minNumber) numbers.push(value);
      else if (!checkNumber.length) numbers.push(value);
    }

    numbers = numbers.sort((a, b) => a - b);

    return numbers;
  } catch (error) {
    return [];
  }
}
