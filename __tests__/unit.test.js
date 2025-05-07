// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber Test
test('checks if a phone number is valid', () => {
  expect(isPhoneNumber("243-454-6726")).toBe(true);
});

test('checks if a phone number is valid', () => {
  expect(isPhoneNumber("343-432-6724")).toBe(true);
});

test('checks if a phone number is valid', () => {
  expect(isPhoneNumber("243-454-672")).toBe(false);
});

test('checks if a phone number is valid', () => {
  expect(isPhoneNumber("2433-454-663")).toBe(false);
});

// isEmail Test
test('checks if an email number is valid', () => {
  expect(isEmail("cse110@gmail.com")).toBe(true);
});

test('checks if an email number is valid', () => {
  expect(isEmail("cse110stUdent@YaHooo.net")).toBe(true);
});

test('checks if an email number is valid', () => {
  expect(isEmail("cse110stUdent*@YaHooo.net")).toBe(false);
});

test('checks if an email number is valid', () => {
  expect(isEmail("cse110@gmail.com.net")).toBe(false);
});

// isStrongPasswordTest

test('checks if a password is strong', () => {
  expect(isStrongPassword("c_asdasd")).toBe(true);
});

test('checks if a password is strong', () => {
  expect(isStrongPassword("passww0rd")).toBe(true);
});

test('checks if a password is strong', () => {
  expect(isStrongPassword("_casdasd")).toBe(false);
});

test('checks if a password is strong', () => {
  expect(isStrongPassword("asd*2*s")).toBe(false);
});

// isDate Test

test('checks if a date is valid', () => {
  expect(isDate("3/20/2024")).toBe(true);
});

test('checks if a date is valid', () => {
  expect(isDate("10/7/2024")).toBe(true);
});

test('checks if a date is valid', () => {
  expect(isDate("10/7/24")).toBe(false);
});

test('checks if a date is valid', () => {
  expect(isDate("102/7/2024")).toBe(false);
});

// isHexColor Test

test('checks if a hex code is valid', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('checks if a hex code is valid', () => {
  expect(isHexColor("#ff5733")).toBe(true);
});

test('checks if a hex code is valid', () => {
  expect(isHexColor("#FFF?")).toBe(false);
});

test('checks if a hex code is valid', () => {
  expect(isHexColor("#FF")).toBe(false);
});