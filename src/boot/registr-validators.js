import { defineRule, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";
import en from "@vee-validate/i18n/dist/locale/en.json";
// function cellphone(value) {}

function decimal(value) {
  // паттерн для чисел со знаком, дробная часть опциональна
  const pattern = /^[\+,\-]?[\d\s]+(\.\d+)?$/;

  if (!pattern.test(value)) {
    return "Число должно быть целым или дробным";
  }

  return true;
}

function cellphone(value) {
  // паттерн для чисел со знаком, дробная часть опциональна
  const pattern = /^\+7\(\d{3}\)-\d{3}\-\d{2}\-\d{2}$/;
  // console.log(value);
  // const pattern = /[1-9]\d{8,14}$/;

  return pattern.test(value);
}

function confirmed(value, [secondValue]) {
  return value === secondValue;
}

function password(value) {
  return typeof value === "string" && value.length > 6;
}

function walletAddress(value) {
  if (!value) return true;
  return value.length === 40;
}

function dateformat(value, [currentTime, indexDate]) {
  console.log(currentTime);

  const dateValue = value.split(".");
  if (dateValue.length === 3) {
    console.log(dateValue);
    let y = +dateValue[2],
      m = +dateValue[1].replace(/^0/, ""),
      d = +dateValue[0].replace(/^0/, "");
    m = --m;

    var x = new Date(y, m, d);

    if (currentTime) {
      const currentTimeValues = currentTime.split(".");
      let currentY = +currentTimeValues[2],
        currentM = +currentTimeValues[1].replace(/^0/, ""),
        currentD = +currentTimeValues[0].replace(/^0/, "");
      currentM = --currentM;
      const currentDate = new Date(currentY, currentM, currentD);
      console.log(currentDate, x);
      console.log(indexDate);
      if (indexDate === "<=") {
        return x <= currentDate;
      }
      if (indexDate === ">=") {
        return x >= currentDate;
      }
      if (indexDate === "<") {
        return x < currentDate;
      }
      if (indexDate === ">") {
        return x > currentDate;
      }
      return true;
    } else {
      return x.getFullYear() === y && x.getMonth() === m && x.getDate() === d;
    }
  }
  return false;
}

// глобальные правила
const rules = {
  required,
  email,
  min,
  max,
  decimal,
  cellphone,
  confirmed,
  password,
  walletAddress,
  dateformat,
};
for (let ruleName in rules) {
  defineRule(ruleName, rules[ruleName]);
}
// localize("ru", ru);
configure({
  generateMessage: localize({ ru }),
});
setLocale("ru");
