class ImageManager {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.images = {};
  }

  addImage(filename) {
    const name = this.getNameFromFilename(filename);
    const url = `${this.baseUrl}/images/webp/${filename}`;
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
const baseUrl = 'https://raw.githubusercontent.com/your-username/your-repo/main';
const imageManager = new ImageManager(baseUrl);

// Добавляем изображения
imageManager.addImage('example1.webp');
imageManager.addImage('another-image.webp');

// Сохраняем JSON в файл
const fs = require('fs');
fs.writeFileSync('images.json', imageManager.toJSON());

console.log('JSON file has been saved.');
