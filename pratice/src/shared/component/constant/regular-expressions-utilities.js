const EMAIL_REGEX = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const ALPHABET_REGEX = /^[A-Za-z]+$/;
const ALPHABET_WITH_SPACE_REGEX = /^([a-zA-Z0-9]+\s?)*$/;
const ADDRESS_REGEX = /^[^\s]+[A-Za-z0-9'\.\-\s\,].*/;
const PAN_NUMBER_REGEX = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
const AADHAR_NUMBER_REGEX = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/
const WORD_WITH_SPACE_REGEX = /[^a-zA-Z ]/g;
const WORD_REGEX = /[^a-zA-Z]/g;
const NUMBER_REGEX = /\D/g;
const PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const upiIdRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


export {
    EMAIL_REGEX, ALPHABET_WITH_SPACE_REGEX, ADDRESS_REGEX, PAN_NUMBER_REGEX, WORD_WITH_SPACE_REGEX, NUMBER_REGEX, WORD_REGEX, AADHAR_NUMBER_REGEX, PASSWORD,
    upiIdRegex
};