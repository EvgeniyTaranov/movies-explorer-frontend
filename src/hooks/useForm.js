import { useState, useCallback } from 'react';
import { isEmail } from 'validator';

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const namePattern = /^[A-Za-zА-Яа-я\s\-]+$/;

  const handleChange = useCallback(
    (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      setValues(prevValues => ({ ...prevValues, [name]: value }));

      let newErrors = { ...errors }; // копируем текущие ошибки

      // Валидация email
      if (name === 'email') {
        if (!isEmail(value)) {
          newErrors[name] = 'Некорректный email';
        } else {
          delete newErrors[name];
        }
      }

      // Валидация имени
      if (name === 'name') {
        if (!namePattern.test(value)) {
          newErrors[name] = 'Имя может содержать только латиницу, кириллицу, пробел или дефис.';
        } else if (value.length < 2 || value.length > 30) {
          newErrors[name] = 'Имя должно содержать от 2 до 30 символов';
        } else {
          delete newErrors[name];
        }
      }

      // Валидация пароля
      if (name === 'password') {
        if (value.length < 6) {
          newErrors[name] = 'Пароль должен содержать минимум 6 символов';
        } else {
          delete newErrors[name];
        }
      }

      setErrors(newErrors);
      setIsValid(!Object.keys(newErrors).length); // пересчитываем isValid на основе новых ошибок
    },
    [errors] // зависимость от errors
  );

  const resetInput = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, []);

  return { values, handleChange, errors, isValid, setValues, resetInput };
};

export default useForm;
