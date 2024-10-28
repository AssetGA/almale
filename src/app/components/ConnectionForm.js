"use client";

import React, { useState } from "react";
import botService from "../service/bot-service";

const ConnectionForm = ({ t }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const answer = await botService.get({ ...formData });
      if (answer) {
        setSubmitted(true); // Показать сообщение об успешной отправке
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div id="contact" className="w-full">
      <div className="lg:px-40 md:px-20 px-5 sm:py-40 py-5 bg-green sm:bg-white">
        <h2
          className="text-2xl font-bold mb-6 text-white sm:text-black text-center"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.form.head}
        </h2>
        <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 text-white sm:bg-green rounded-md">
          <div className="w-full p-2 md:p-6">
            {submitted ? (
              <p className="text-green-500 text-center">{t.form.answer}</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md focus:outline-none sm:text-sm bg-green-light"
                    placeholder={`${t.form.name}`}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md sm:text-sm bg-green-light"
                    placeholder={`${t.form.phone}`}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md sm:text-sm bg-green-light"
                    placeholder={`${t.form.email}`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 rounded-md sm:text-sm bg-green-light"
                  />
                </div>

                <div className="flex text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-white text-black hover:text-white hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {t.form.button}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="w-full">
            <div className="p-5 md:p-10">
              <div
                className="text-xl"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {t.form.contact}
              </div>
              <p className="pt-5">{t.form.aemail}</p>
              <p className="pt-5">{t.form.aphone}</p>
              <p className="pt-5">{t.form.aaddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionForm;
