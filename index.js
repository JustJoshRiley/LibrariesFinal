"use strict";
exports.__esModule = true;
exports.getPhone = void 0;
var StringLib = require('@justjoshriley/stringlib');
var datelib_1 = require("@justjoshriley/datelib");
var data_1 = require("./data");
function capitalizeFirstName(string) {
    return StringLib.capitalizeFirstLetter(string);
}
function capitalizeLastName(string) {
    return StringLib.capitalizeFirstLetter(string);
}
function getDate(string) {
    var newDate = new datelib_1.dateObj(string);
    var year = newDate.year;
    var month = newDate.month;
    var dateArr = string.split('-')[1];
    return "".concat(month, " ").concat(dateArr, ", ").concat(year);
}
function whenDate(string) {
    var now = new Date();
    var then = new Date(string);
    if (then === now) {
        return 'Last Payment: Today';
    }
    var dif = now - then;
    var years = Math.floor(dif / 1000 / 60 / 60 / 24 / 365);
    if (years >= 1) {
        return "Last Payment: ".concat(years, " years ago");
    }
    var months = (then.getMonth() - now.getMonth());
    if (months >= 1) {
        return "Last Payment: ".concat(months, " months ago");
    }
    var days = Math.ceil((dif / 1000 / 60 / 60 / 24));
    console.log(days);
    if (days < 1) {
        var seconds = parseInt((dif / 1000 + ""), 10);
        return "Last Payment: ".concat(seconds, " ago");
    }
    return "Last Payment: ".concat(days, " days ago");
}
function getPhone(number) {
    var count = number.length;
    if (count < 10) {
        return "Not Enough Digits";
    }
    if (count > 10) {
        return "Too Many Digits";
    }
    if (count === 10) {
        var phoneNumber = number;
        var areaCode = phoneNumber.toString().slice(0, 3);
        var second3Digits = phoneNumber.toString().slice(3, 6);
        var last4digits = phoneNumber.toString().slice(6, 10);
        return "(".concat(areaCode, ") ").concat(second3Digits, "-").concat(last4digits);
    }
}
exports.getPhone = getPhone;
function getCity(string) {
    var cityCapped = capitalizeFirstName(string);
    return cityCapped;
}
console.log("poop");
function getMakeAndModel(make, model) {
    var Make = capitalizeFirstName(make);
    var Model = capitalizeFirstName(model);
    return "".concat(Make, " ").concat(Model);
}
for (var d in data_1.data) {
    var item = data_1.data[d];
    var firstName = item.first_name;
    var lastName = item.last_name;
    var purchaseDate = item.purchased;
    var lastPaymentDate = item.lastpayment;
    var phoneNumber = item.phone;
    var carMake = item.make;
    var carModel = item.model;
    var city = item.city;
    var name_1 = "".concat(capitalizeFirstName(firstName), " ").concat(capitalizeLastName(lastName));
    console.log(name_1);
    var makeAndModel = getMakeAndModel(carMake, carModel);
    console.log(makeAndModel);
    var purchased = getDate(purchaseDate);
    console.log(purchased);
    var time = whenDate(lastPaymentDate);
    console.log(time);
    var phone = getPhone(phoneNumber);
    console.log(phone);
    var cityCapped = getCity(city);
    console.log(cityCapped);
}
