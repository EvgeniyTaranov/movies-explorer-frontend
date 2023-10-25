import { useState, useCallback } from 'react';
import { isEmail } from 'validator';
import { isEqual } from 'lodash';

const useForm = (initialRequiredFields) => {
  const [values, setValues] = useState({});
  const [initialValues, setInitialValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const namePattern = /^[A-Za-zА-Яа-я\s\-]+$/;

  const requiredFields = initialRequiredFields;

  const handleChange = useCallback(
    (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      const updatedValues = { ...values, [name]: value };

      let newErrors = { ...errors };

      if (name === 'email') {
        if (!isEmail(value)) {
          newErrors[name] = 'Некорректный email';
        } else {
          delete newErrors[name];
        }
      }

      if (name === 'name') {
        if (!namePattern.test(value)) {
          newErrors[name] = 'Имя может содержать только латиницу, кириллицу, пробел или дефис.';
        } else if (value.length < 2 || value.length > 30) {
          newErrors[name] = 'Имя должно содержать от 2 до 30 символов';
        } else {
          delete newErrors[name];
        }
      }

      if (name === 'password') {
        if (value.length < 6) {
          newErrors[name] = 'Пароль должен содержать минимум 6 символов';
        } else {
          delete newErrors[name];
        }
      }

      setErrors(newErrors);
      setIsValid(
        requiredFields.every(field => updatedValues[field]) &&
        !Object.keys(newErrors).length &&
        !isEqual(initialValues, updatedValues)
      );

      setValues(updatedValues);
    },
    [errors, values, initialValues]
  );

  const resetInput = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, []);

  return { values, handleChange, errors, isValid, setValues, resetInput, setInitialValues, isSubmitting, setIsSubmitting };
};

export default useForm;
