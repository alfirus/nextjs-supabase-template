import { customAlphabet } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';

// ランダムなusernameを生成するためのヘルパー関数
export const generateRandomUsername = () => {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 8);
  return nanoid();
};

// ランダムな画像名を生成するためのヘルパー関数
export const generateRandomImageName = (extension: string) => {
  const uuid = uuidv4();
  return `${uuid}.${extension}`;
};
