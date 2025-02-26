/**
 * @jest-environment jsdom
 */

const { get, getObject, set, setObject, remove } = require('../cookies');

test("get::method - should get an null item from the cookies storage", (done) => {
  expect(get("test_storage_item", null)).toEqual(null);
  done();
});

test("set::method - should get string result from cookie", (done) => {
  set("test_storage_item_set", 10)
  expect(get("test_storage_item_set", null)).toEqual("10");
  done();
});

test("setObject::method - should get Object result from storage item", (done) => {
  setObject("test_storage_item", {"testItem": "testItemValue"});
  expect(getObject("test_storage_item")).toEqual({"testItem": "testItemValue"});
  done();
});

test("delete::method - should get null from storage item", (done) => {
  set("test_storage_item_1", 10)
  remove("test_storage_item_1");
  expect(get("test_storage_item_1", null)).toEqual(null);
  done();
});
