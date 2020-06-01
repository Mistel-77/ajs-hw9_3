import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('перевод содержимого загруженного ArrayBuffer в строку', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
