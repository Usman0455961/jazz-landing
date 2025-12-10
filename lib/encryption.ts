import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'fallback-key-change-in-production';

/**
 * Encrypts a string using AES encryption
 * @param text - The text to encrypt
 * @returns The encrypted text as a base64 string
 */
export function encrypt(text: string): string {
  const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY);
  return encrypted.toString();
}

/**
 * Decrypts an AES encrypted string
 * @param encryptedText - The encrypted text (base64)
 * @returns The decrypted text
 */
export function decrypt(encryptedText: string): string {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY);
  return decrypted.toString(CryptoJS.enc.Utf8);
}
