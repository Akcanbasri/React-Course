//Modül içinden belirli bir değişkeni alma (import)
// import { apiKey } from "./util.js";

//Modül içinden tüm içeriği alma ve 'apiKey' değişkenini default olarak alma
// import apiKey from "./util.js";

//Birden fazla değişkeni tek bir isim altında alma
// import { apiKey, abc } from "./util.js";

//Alias kullanarak değişkenleri farklı isimlerle alma
// import { apiKey, abc as content } from "./util.js";

//Tüm modülü bir nesne olarak alma
// import * as util from "./util.js";

//Değişkenlere erişim ve kullanım
// console.log(content);
// console.log(util.apiKey);
// console.log(util.abc);

//Değişken tanımlama ve kullanım
// const userMessage = "Merhaba herkese!";
// console.log(userMessage);

//Koşullu ifadeler
// if (10 === 10) {
//   console.log(31);
// }

//Fonksiyon tanımlama ve çağırma
// function greetUser(userName, message = "Merhaba") {
//   return "Merhaba, ben " + userName + ". \n" + "Mesajım şu: " + message;
// }

// console.log(greetUser("deneme kullanıcı"));

//Modülü dışa aktarma (export)
// export default (userName, message) => {
//   console.log("Merhaba");
//   return userName + " " + message;
// };

//Nesne tanımlama ve kullanma
// const user = {
//   name: "mahmut",
//   age: 32,
//   greet() {
//     console.log("Merhaba");
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

//Sınıf tanımlama ve kullanma
// class User {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   greet() {
//     console.log("Merhaba " + this.name);
//   }
// }

// const user1 = new User("hasan", "32");

// console.log(user1);
// user1.greet();

//Dizi işlemleri
// const hobbies = ["futbol", "yemek yapma", "kitap okuma"];

// console.log(hobbies[0]);

// hobbies.push("çalışma");

// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "futboll");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);

//Destructuring (Yapıyı parçalama)
// const [firstName, lastName] = ["Basri", "Akcan"];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 31,
// };

// console.log(userName);
// console.log(age);

//Spread operatörü kullanarak dizileri birleştirme
// const hobbies = ["Spor", "Yemek yapma"];
// const user = {
//   name: "Max",
//   age: 34,
// };
// const newHobbies = ["Okuma"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

//Spread operatörü kullanarak nesneleri birleştirme
// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

//Koşullu ifadeler
// if (10 === 10) {
//   //
// } else if (5 == 5) {
//   //
// } else if (2 === 2) {
//   //
// } else {
//   //
// }

//Kullanıcıdan giriş almak
// const password = prompt("Şifreniz");

// if (password === "Merhaba") {
//   console.log("Merhaba çalıştı");
// } else if (password === "merhaba") {
//   console.log("merhaba çalıştı");
// } else {
//   console.log("Erişim izni verilmedi");
// }

//Döngüler
// const hobbies = ["Spor", "Gym", "Yüzme"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//Belirli bir HTML elementini kaldırma
// const list = document.querySelector("ul");
// list.remove();

//Zaman aşımını (timeout) işleyen bir fonksiyon tanımlanıyor
// function handleTimeout() {
//   console.log("Zaman aşımı!");
// }

//Zaman aşımını işleyen bir başka fonksiyon, bu sefer ok fonksiyonu (arrow function) olarak tanımlanıyor
// const handleTimeout2 = () => {
//   console.log("Zaman aşımı! ...... bir kez daha");
// };

//setTimeout fonksiyonu ile belirli bir süre sonra yukarıda tanımlanan fonksiyonlar çağrılacak
// setTimeout(handleTimeout, 2000); // 2 saniye sonra handleTimeout çağrılacak
// setTimeout(handleTimeout2, 3000); // 3 saniye sonra handleTimeout2 çağrılacak
// setTimeout(() => {
//   console.log("Daha fazla zaman aşımı...");
// }, 4000); // 4 saniye sonra anonim ok fonksiyon çağrılacak

//greeter fonksiyonu, bir başka fonksiyonu parametre olarak alıp çağıran bir fonksiyon örneğidir
// function greeter(greetFn) {
//   greetFn();
// }

// greeter fonksiyonu ile anonim ok fonksiyonu (arrow function) parametre olarak veriliyor
// greeter(() => console.log("Merhaba"));

// içi içe fonskiyonlar
// function init() {
//   function greet() {
//     console.log("Hi!");
//   }

//   greet();
// }

// cant call !!
// great();

// init();

// bu değişkenler değişmezler.
// let userMessage = "Hello!";
// userMessage = "hello there "

// arrayler değiştirilebilir.
const hobbies = ["Sports", "Gym"];
hobbies.push("Swimming");
console.log(hobbies);
