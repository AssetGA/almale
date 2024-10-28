"use client";

import { useEffect, useState } from "react";
import RadioGroup from "./RadioGroup";
import { validator } from "../utils/validator";
import TextField from "./common/TextField";

const Delivery = ({ handleOptionChange }) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    street: "",
    city: "",
    postalCode: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(
    "Доставка по Казахстану"
  );

  const options = [
    { value: "Доставка по Казахстану", label: "Доставка по Казахстану" },
    { value: "Доставка международная", label: "Доставка международная" },
  ];

  const handleInputChange = (target) => {
    setAddress((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя Фамилия обязательны для заполнения",
      },
    },
    mobile: {
      max: {
        message: "Проверьте номер",
        value: 20,
      },
      isContainDigit: {
        message: "Только цифры",
      },
    },
    street: {
      isRequired: {
        message: "Адрес необходим для заполнения",
      },
      max: {
        message: "Проверьте адрес",
        value: 100,
      },
    },
    city: {
      isRequired: {
        message: "Необходимо указать город",
      },
      max: {
        message: "Проверьте название",
        value: 30,
      },
    },
    postalCode: {
      isRequired: {
        message: "Необходимо указать почтовый код",
      },
      max: {
        message: "Проверьте код",
        value: 15,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [address]);

  const validate = () => {
    const errors = validator(address, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить обработку отправки адреса
    const isValid = validate();
    if (!isValid) return;
    console.log("18546");
  };

  return (
    <div className="flex">
      {/* Форма ввода адреса */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RadioGroup
              options={options}
              name="options"
              selectedOption={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block">Ваше имя</label>
              <TextField
                type="text"
                name="name"
                value={address.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="Нұрсултан Нұрсултан-ұлы"
                required
                error={errors.name}
              />
            </div>

            <div className="mb-2">
              <label className="block">Мобильный номер</label>
              <TextField
                type="text"
                name="mobile"
                value={address.mobile}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="+77011234567"
                error={errors.mobile}
              />
            </div>

            <div className="mb-2">
              <label className="block">Адрес доставки</label>
              <TextField
                type="text"
                name="street"
                value={address.street}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="ул. Пушкина, дом 10, кв 28"
                error={errors.street}
              />
            </div>
            <div className="mb-2">
              <label className="block">Город</label>
              <TextField
                type="text"
                name="city"
                value={address.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="Астана"
                error={errors.city}
              />
            </div>
            <div className="mb-2">
              <label className="block">Почтовый индекс</label>
              <TextField
                type="text"
                name="postalCode"
                value={address.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="101000"
                error={errors.postalCode}
              />
            </div>
            <div className="mb-2">
              <label className="block">Электронная почта (необязательно)</label>
              <TextField
                type="text"
                name="postalCode"
                value={address.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray"
                placeholder="Получайте информацию о новинках"
                error={errors.email}
              />
            </div>
            <div className="flex flex-row justify-end">
              {/* <button
                    type="submit"
                    className="bg-red text-white py-2 px-4 rounded-md mr-2"
                  >
                    Изменить
                  </button> */}
              <button
                type="submit"
                className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-light"
                disabled={!isValid}
              >
                Оформить заказ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
