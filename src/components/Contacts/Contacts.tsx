import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { useAlert } from '@/ui/Alert/useAlert';

import * as styles from './Contacts.module.scss';

export const Contacts = () => {
  const [name, setName] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const { showAlert } = useAlert();

  const validateName = (name: string): string | null => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return 'Введите имя';
    if (trimmed.length < 2) return 'Имя должно быть не короче 2 символов';
    if (!/^[A-Za-zА-Яа-яЁё-]+$/.test(trimmed)) return 'Имя может содержать только буквы и дефис';
    return null;
  };

  const validateOperator = (digits: string): string | null => {
    const cleaned = digits.replace(/\D/g, '');
    if (cleaned.length >= 5) {
      const operatorCode = cleaned.slice(3, 5);
      const validOperators = ['25', '29', '33', '44'];
      if (!validOperators.includes(operatorCode)) {
        return 'Допустимы только коды 25, 29, 33, 44';
      }
    }
    return null;
  };

  const validatePhoneOnSubmit = (digits: string): string | null => {
    if (!digits) return 'Укажите номер телефона';
    const cleaned = digits.replace(/\D/g, '');
    if (cleaned.length < 12) {
      return 'Номер должен быть полностью введён';
    }
    return validateOperator(digits);
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setNameError(validateName(value));
  };

  const handlePhoneChange = (value: string) => {
    setRawPhone(value);
    setPhoneError(validateOperator(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalNameError = validateName(name);
    const finalPhoneError = validatePhoneOnSubmit(rawPhone);

    setNameError(finalNameError);
    setPhoneError(finalPhoneError);

    if (finalNameError || finalPhoneError) return;

    const templateParams = {
      name: name,
      phone: rawPhone,
      time: new Date().toLocaleString(),
      email: 'noreply@example.com',
      title: 'Заявка на бетон',
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        showAlert({ type: 'success', message: 'Письмо отправлено!' });
        setName('');
        setRawPhone('');
        setNameError(null);
        setPhoneError(null);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showAlert({
          type: 'error',
          message: 'Ошибка: не удалось отправить сообщение. Попробуйте позже.',
        });
      });
  };

  const isFormValid = !nameError && !phoneError && name && rawPhone;

  return (
    <section className={styles.container} id="contacts">
      <h1>Нужна консультация? Оставьте контакты – и мы с вами свяжемся!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ваше имя"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        {nameError && <p className={styles.errorMsg}>{nameError}</p>}
        <InputMask
          mask="+375(99)999-99-99"
          value={rawPhone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePhoneChange(e.target.value)}
        >
          {(inputProps) => <input {...inputProps} type="text" placeholder="Ваш номер" />}
        </InputMask>
        {phoneError && <p className={styles.errorMsg}>{phoneError}</p>}
        <button type="submit" disabled={!isFormValid}>
          заказать звонок
        </button>
      </form>
    </section>
  );
};
