function isObject(value: object) {
  return (
    Object.prototype.toString.call(value).replace(/\[|\]|\s|object/g, "") ===
    "Object"
  );
}

console.log(isObject({}));
console.log(isObject({ name: "woowa" }));
console.log(isObject([0, 1, 2]));
console.log(new RegExp("object"));
console.log(function () {
  console.log("hello world");
});
console.log(isObject(class Class {}));

// 원시타입
console.log(isObject(20)); // false
console.log(isObject("hello")); // false
