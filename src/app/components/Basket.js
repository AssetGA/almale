"use client";

import { useEffect, useRef, useState } from "react";
import { deliveries } from "../api/api";
import Image from "next/image";
import RadioGroup from "./RadioGroup";
import { validator } from "../utils/validator";
import TextField from "./common/TextField";
import { useAppDispatch, useAppSelector, useAppStore } from "../store/hooks";
import { loadOrder, orderCreate } from "../store/orderSlice";
import {
  clearUsersError,
  getApiUrl,
  initializeUsers,
  signUp,
  UnauthorizeUser,
  Verify,
} from "../store/users";
import Link from "next/link";

const Basket = ({ lang, t }) => {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(loadOrder());
    store.dispatch(initializeUsers());
    initialized.current = true;
  }
  const dispatch = useAppDispatch();
  const { entity } = useAppSelector((state) => state.product);
  const { entities, error, auth, api, userId } = useAppSelector(
    (state) => state.users
  );

  const product = entity.length === 0 ? null : entity[0];

  const [address, setAddress] = useState({
    name: "",
    email: "",
    mobile: "",
    street: "",
    city: "",
    postalCode: "",
  });
  const [order, setOrder] = useState({
    productId: "",
    quantity: 1,
    deliveryPrice: 0,
    total: 0,
    userId: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(
    "Доставка по Казахстану"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "Доставка по Казахстану", label: `${t.basket.deliveryLabel1}` },
    { value: "Доставка международная", label: `${t.basket.deliveryLabel2}` },
  ];

  const handleInputChange = (target) => {
    setAddress((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  // Изменить количество вручную через инпут
  const handleInput = ({ target }) => {
    setOrder((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const selectDeliveryPrice = () => {
    selectedOption === "Доставка по Казахстану"
      ? setOrder({ ...order, deliveryPrice: deliveries[0].price })
      : setOrder({
          ...order,
          deliveryPrice: deliveries[1].price * order.quantity,
        });
  };

  useEffect(() => {
    selectDeliveryPrice();
  }, [selectedOption, order.quantity]);

  const validatorConfig = {
    name: {
      isRequired: {
        message: `${t.basket.errorName}`,
      },
    },
    email: {
      isRequired: {
        message: `${t.basket.errorEmail}`,
      },
    },
    mobile: {
      max: {
        message: `${t.basket.errorMobile}`,
        value: 20,
      },
      isContainDigit: {
        message: `${t.basket.errorMobileCount}`,
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

  useEffect(() => {
    dispatch(getApiUrl());
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить обработку отправки адреса
    const isValid = validate();
    if (!isValid) return;
    dispatch(signUp({ name: address.name, email: address.email }));

    openModal();
  };
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Обработка ввода кода
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  // Отправка кода
  const handleSubmitCheck = (e) => {
    e.preventDefault();
    dispatch(Verify({ ...address, code: code }));
    setCode("");
    closeModal(); // Закрываем модальное окно после отправки
  };

  const handleGo = (e) => {
    e.preventDefault();
    const newTotal = order.quantity * product.price + order.deliveryPrice;
    dispatch(
      orderCreate({
        ...order,
        total: newTotal,
        productId: product._id,
        userId: userId,
      })
    );
    window.location.assign(`${api.content}`);
    dispatch(UnauthorizeUser());
  };

  return (
    <div className="container mx-auto p-4  py-20">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-10 xl:px-40">
        {/* Раздел с товарами */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <h1 className="w-full text-2xl font-bold mb-6">{t.basket.head}</h1>
            <div className="mb-6 flex flex-row">
              {/* Пример товара */}
              <div className="text-sm">
                <div className="flex flex-row gap-2 items-center bg-azure p-2">
                  <div className="block">
                    {product && (
                      <Image
                        src={product?.imageUrl}
                        width={100}
                        height={100}
                        alt="alma-le"
                      />
                    )}
                  </div>

                  <p className="flex font-bold px-1 col-span-2">
                    {product?.name}
                  </p>
                  <input
                    name="quantity"
                    type="number"
                    className="w-10 text-center border border-gray-300 focus:outline-none"
                    value={Number(order.quantity)}
                    onChange={handleInput}
                    min="1" // Минимальное количество — 1
                  />
                  <p className="ml-2 font-bold px-1">
                    {product?.price}{" "}
                    <span className="pl-2">{lang !== "en" ? "тг" : "t"}</span>
                  </p>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <p className="font-bold">{t.basket.delivery}</p>
                  <p>
                    {order.deliveryPrice}
                    <span className="pl-2">{lang !== "en" ? "тг" : "t"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between my-1 bottom-0">
            <p className="font-bold text-lg">{t.basket.total}</p>
            <p className="font-bold">
              {order.quantity * product?.price + order.deliveryPrice}
              <span className="pl-2"> {lang !== "en" ? "тг" : "t (KZ)"}</span>
            </p>
          </div>
        </div>
        {/* Раздел с картой и адресом доставки */}
        <div className="flex">
          {/* Форма ввода адреса */}
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">{t.basket.delivery}</h2>
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
                  <label className="block">{t.basket.name}</label>
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
                  <label className="block">{t.basket.email}</label>
                  <TextField
                    type="text"
                    name="email"
                    value={address.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray"
                    placeholder="email"
                    error={errors.email}
                  />
                </div>
                <div className="mb-2">
                  <label className="block">{t.basket.phone}</label>
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
                  <label className="block">{t.basket.address}</label>
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
                  <label className="block">{t.basket.city}</label>
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
                  <label className="block">{t.basket.postIndex}</label>
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
                  <button
                    type="submit"
                    className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-light"
                    disabled={!isValid}
                  >
                    {t.basket.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Модальное окно */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">{t.basket.head2}</h2>
              <form onSubmit={handleSubmitCheck}>
                <input
                  type="number"
                  value={code}
                  onChange={handleCodeChange}
                  className="border border-gray-300 p-2 w-full mb-4"
                  placeholder="Введите код"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="border px-4 py-2 rounded-md mr-2 hover:bg-green-light hover:text-white"
                    onClick={closeModal}
                  >
                    {t.basket.buttonClose}
                  </button>
                  <button
                    type="submit"
                    className="bg-green text-white px-4 py-2 rounded-md hover:bg-green-light"
                  >
                    {t.basket.buttonSend}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {error === "Unauthorize" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">{t.basket.headVerif}</h2>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="border px-4 py-2 rounded-md mr-2 hover:bg-green-light hover:text-white"
                  onClick={() => dispatch(clearUsersError())}
                >
                  {t.basket.buttonVerifyClose}
                </button>
              </div>
            </div>
          </div>
        )}
        {auth === true && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white md:px-6 m-2 py-6 rounded-lg shadow-lg max-w-md w-full text-center">
              <div className="flex flex-cols w-full items-center">
                <h2 className="text-xl font-bold mb-4 mx-auto">
                  {t.basket.headKaspi}
                </h2>
                <div className="flex w-20 h-20 bg-[url('/img/kaspi.png')] bg-contain bg-no-repeat mx-auto"></div>
              </div>

              <div className="flex justify-center">
                <Link
                  href={`/${lang}/product`}
                  className="border px-4 py-2 rounded-md mr-2 hover:bg-green-light hover:text-white"
                >
                  {t.basket.buttonKaspiBack}
                </Link>

                <button
                  onClick={handleGo}
                  className="border px-4 py-2 rounded-md mr-2 hover:bg-green-light hover:text-white"
                >
                  {t.basket.buttonToKaspi}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
