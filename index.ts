const StringLib = require('@justjoshriley/stringlib');
import { dateObj } from '@justjoshriley/datelib';
import {data} from './data';

function capitalizeFirstName(string:string):string {
	return StringLib.capitalizeFirstLetter(string);
}

function capitalizeLastName(string:string):string {
	return StringLib.capitalizeFirstLetter(string);
}

function getDate(string:string):string {
	const newDate:dateObj = new dateObj(string);
	const year:number = newDate.year;
	const month:string = newDate.month;
	const dateArr:string = string.split('-')[1];
	return `${month} ${dateArr}, ${year}`;
}

function whenDate(string:string):string {
	const now:any = new Date();
	const then:any = new Date(string);
	if (then === now) {
	return 'Last Payment: Today';
	}
	const dif:number = now - then;
	const years:number = Math.floor(dif / 1000 / 60 / 60 / 24 / 365);
	if (years >= 1) {
	return `Last Payment: ${years} years ago`;
	}
	const months:number = (then.getMonth() - now.getMonth());
	if (months >= 1) {
	return `Last Payment: ${months} months ago`;
	}
	const days:number = Math.ceil((dif / 1000 / 60 / 60 / 24));
	console.log(days);
	if (days < 1) {
	const seconds:number = parseInt((dif / 1000 + ""), 10);
	return `Last Payment: ${seconds} ago`;
	}
	return `Last Payment: ${days} days ago`;
}

function getPhone(number:string):string {
    const count:number = number.length
    if(count < 10) {
        return "Not Enough Digits"
    }
    if(count > 10) {
        return "Too Many Digits"
    } 
    if(count === 10) {
        const phoneNumber:string = number;
        const areaCode:string = phoneNumber.toString().slice(0, 3);
        const second3Digits:string = phoneNumber.toString().slice(3, 6);
        const last4digits:string = phoneNumber.toString().slice(6, 10);
        return `(${areaCode}) ${second3Digits}-${last4digits}`;
    }
}


function getCity(string:string):string {
	const cityCapped = capitalizeFirstName(string);
	return cityCapped;
}
console.log("poop")

function getMakeAndModel(make:string, model:string):string {
	const Make:string = capitalizeFirstName(make);
	const Model:string = capitalizeFirstName(model);
	return `${Make} ${Model}`;
}

for (const d in data) {
	const item: {
    id: number;
    first_name: string;
    last_name: string;
    purchased: string;
    lastpayment: string;
    phone: string;
    make: string;
    model: string;
    city: string;
    } = data[d];
	const firstName:string = item.first_name;
	const lastName:string = item.last_name;
	const purchaseDate:string = item.purchased;
	const lastPaymentDate:string= item.lastpayment;
	const phoneNumber:string = item.phone;
	const carMake:string = item.make;
	const carModel:string = item.model;
	const city:string = item.city;

	const name:string = `${capitalizeFirstName(firstName)} ${capitalizeLastName(lastName)}`;
	console.log(name);
	const makeAndModel:string = getMakeAndModel(carMake, carModel);
	console.log(makeAndModel);
	const purchased:string = getDate(purchaseDate);
	console.log(purchased);
	const time:string = whenDate(lastPaymentDate);
	console.log(time);
	const phone:string = getPhone(phoneNumber);
	console.log(phone);
	const cityCapped:string = getCity(city);
	console.log(cityCapped);
}

export{getPhone}