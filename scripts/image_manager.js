class ImageManager {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.images = {};
  }

  addImage(filename) {
    const name = this.getNameFromFilename(filename);
    const url = `${this.baseUrl}/${filename}`;
    this.images[name] = url;
  }

  getImageUrl(name) {
    return this.images[name] || null;
  }

  getNameFromFilename(filename) {
    return filename.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '_');
  }

  getAllImages() {
    return this.images;
  }

  toJSON() {
    return JSON.stringify(this.images, null, 2);
  }
}

// Создаем экземпляр ImageManager
const baseUrl = 'https://raw.githubusercontent.com/RandomNameQ/SmileysEverywhereDATA/main/images';
const imageManager = new ImageManager(baseUrl);

// Добавляем изображения
imageManager.addImage('NOOO.webp');
imageManager.addImage('catJam.webp');
imageManager.addImage('catKISS.webp');
imageManager.addImage('popCat.webp');

// Выводим JSON в консоль (для проверки)
console.log(imageManager.toJSON());

// Если вы запускаете это на сервере с Node.js, раскомментируйте следующие строки:
// const fs = require('fs');
// fs.writeFileSync('images.json', imageManager.toJSON());
// console.log('JSON file has been saved.');
