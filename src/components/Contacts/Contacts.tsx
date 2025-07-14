import emailjs from 'emailjs-com';
import { useState } from 'react';

import * as styles from './Contacts.module.scss';

export const Contacts = () => {
  const PREFIX = '+375';
  const [name, setName] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const [message, setMessage] = useState('');

  const formatPhone = (digits: string) => {
    let formatted = PREFIX;
    if (digits.length > 0) formatted += `(${digits.slice(0, 2)}`;
    if (digits.length >= 2) formatted += `)`;
    if (digits.length > 2) formatted += `${digits.slice(2, 5)}`;
    if (digits.length > 5) formatted += `-${digits.slice(5, 7)}`;
    if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`;
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input.replace(/\D/g, '').replace(/^375/, '').slice(0, 9);
    setRawPhone(digits);
  };

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
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        templateParams,
        process.env.PUBLIC_KEY!,
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
    <section className={styles.container}>
      <h1>Нужна консультация? Оставьте контакты – и мы с вами свяжемся!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ваше имя"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="+375(XX)XXX-XX-XX"
          type="text"
          value={formatPhone(rawPhone)}
          onChange={handlePhoneChange}
        />
        <button type="submit">заказать звонок</button>
        {message && <p className={styles.errorMsg}>{message}</p>}
      </form>
    </section>
  );
};
