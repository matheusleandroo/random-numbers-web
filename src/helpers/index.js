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
