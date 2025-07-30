import emailjs from 'emailjs-com';
import { useState } from 'react';
import InputMask from 'react-input-mask';

import * as styles from './Contacts.module.scss';

export const Contacts = () => {
  const PREFIX = '+375';
  const [name, setName] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const [message, setMessage] = useState('');

  const validateName = (name: string): string | null => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return 'Введите имя';
    if (trimmed.length < 2) return 'Имя должно быть не короче 2 символов';
    if (!/^[A-Za-zА-Яа-яЁё-]+$/.test(trimmed)) return 'Имя может содержать только буквы и дефис';
    return null;
  };

  const validatePhone = (digits: string): string | null => {
    if (digits.length === 0) return 'Укажите номер телефона';
    if (digits.length < 9) return 'Номер должен быть полностью введён в формате +375(XX)XXX-XX-XX';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const phoneError = validatePhone(rawPhone);

    if (nameError) {
      setMessage(`Ошибка: ${nameError}`);
      return;
    }
    if (phoneError) {
      setMessage(`Ошибка: ${phoneError}`);
      return;
    }

    const templateParams = {
      name: name,
      phone: `+375 ${rawPhone}`,
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
        alert('Письмо отправлено!');
        setName('');
        setRawPhone('');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Ошибка: не удалось отправить сообщение. Попробуйте позже.');
      });
  };

  return (
    <section className={styles.container} id="contacts">
      <h1>Нужна консультация? Оставьте контакты – и мы с вами свяжемся!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ваше имя"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputMask
          mask="+375(99)999-99-99"
          value={rawPhone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRawPhone(e.target.value)}
        >
          {(inputProps) => <input {...inputProps} type="text" placeholder="Ваш номер" />}
        </InputMask>
        <button type="submit">заказать звонок</button>
        {message && <p className={styles.errorMsg}>{message}</p>}
      </form>
    </section>
  );
};
