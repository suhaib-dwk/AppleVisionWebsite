import './styles/index.css';
import './styles/style.css';

const images = require.context('./assets', true, /\.(png|svg|jpg|jpeg|gif)$/);

images.keys().forEach((filename) => {
    const imageName = filename.match(/\.\/(.*)\./)[1];

    const imageElement = document.getElementById(imageName);
    if (imageElement) {
        imageElement.src = images(filename);
    }
});
