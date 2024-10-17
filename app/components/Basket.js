"use client";

import { useEffect, useState } from "react";
import { deliveries, utensil } from "../api/api";
import Image from "next/image";
import RadioGroup from "./RadioGroup";
import { validator } from "../utils/validator";
import TextField from "./common/TextField";

const Basket = () => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const [selectedOption, setSelectedOption] = useState(
    "Доставка по Казахстану"
  );
  const [quantity, setQuantity] = useState(1); // Начальное количество
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [errors, setErrors] = useState({});

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    selectDeliveryPrice();
  }, [selectedOption, quantity]);

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

  // Изменить количество вручную через инпут
  const handleInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const selectDeliveryPrice = () => {
    selectedOption === "Доставка по Казахстану"
      ? setDeliveryPrice(deliveries[0].price)
      : setDeliveryPrice(deliveries[1].price * quantity);
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
  };

  return (
    <div className="container mx-auto p-4  py-20">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-10 xl:px-40">
        {/* Раздел с товарами */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <h1 className="w-full text-2xl font-bold mb-6">Корзина</h1>
            <div className="mb-6 flex flex-row">
              {/* Пример товара */}
              <div className="text-sm">
                <div className="flex flex-row gap-2 items-center bg-azure p-2">
                  <div className="block">
                    <Image
                      src={utensil[0].imageUrl}
                      width={100}
                      height={100}
                      alt={utensil[0].name}
                    />
                  </div>

                  <p className="flex font-bold px-1 col-span-2">
                    {utensil[0].name}
                  </p>
                  <input
                    type="number"
                    className="w-10 text-center border border-gray-300 focus:outline-none"
                    value={quantity}
                    onChange={handleInput}
                    min="1" // Минимальное количество — 1
                  />
                  <p className="ml-2 font-bold px-1">
                    {utensil[0].price} <span className="pl-2">тг</span>
                  </p>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <p className="font-bold">Доставка</p>
                  <p>
                    {deliveryPrice}
                    <span className="pl-2">тг</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between my-1 bottom-0">
            <p className="font-bold text-lg">ИТОГО</p>
            <p className="font-bold">
              {quantity * utensil[0].price + deliveryPrice}
              <span className="pl-2">тг</span>
            </p>
          </div>
        </div>
        {/* Раздел с картой и адресом доставки */}
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
                    placeholder="+70001234567"
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
      </div>
    </div>
  );
};

export default Basket;
