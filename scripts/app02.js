"use strict";

/* global */
const page = {
  issuedBy: document.querySelector(".issuedBy"),
  surname: document.querySelector(".surname"),
  name: document.querySelector(".name"),
  middleName: document.querySelector(".middleName"),
  sex: document.querySelector(".sex"),
  city: document.querySelector(".city"),
  language: document.querySelector('[language="RU"]'),
};

/* data */
const ruChanges = {
  issuedBy: "ГУ МДВ РОССИИ ПО Г.МОСКВЕ",
  surname: "ЖИЛЬЦОВ",
  name: "ИВАН",
  middleName: "ДМИТРИЕВИЧ",
  sex: "МУЖ.",
  city: "ГОРОД МОСКВА",
  language: "ИЗМЕНИТЬ НА ENG",
};

const engChanges = {
  issuedBy: "GU MDV RUSSIA OF MOSCOW",
  surname: "ZHILTSOV",
  name: "IVAN",
  middleName: "DMITRIEVICH",
  sex: "MAN",
  city: "CITY MOSCOW",
  language: "ИЗМЕНИТЬ НА RU",
};

/* util */
function changeLanguage() {
  const lang = page.language.getAttribute("language");
  switch (lang) {
    case "RU":
      for (const index in page) {
        page[index].innerText = engChanges[index];
      }
      return page.language.setAttribute("language", "EN");
    case "EN":
      for (const index in page) {
        page[index].innerText = ruChanges[index];
      }
      return page.language.setAttribute("language", "RU");
  }
}
