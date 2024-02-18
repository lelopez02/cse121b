document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchButton').addEventListener('click', searchPhotos);
    document.getElementById('searchInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchPhotos();
        }
    });
});

async function searchPhotos() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = '42160807-47cc2d80db6050484923d2967';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Error when searching for photos. Status code: ${response.status}`);
            return;
        }

        const data = await response.json();

        if (data.hits && Array.isArray(data.hits)) {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';

            data.hits.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.previewURL;
                img.alt = photo.tags;
                img.addEventListener('click', () => openPhoto(photo.largeImageURL));
                gallery.appendChild(img);
            });
        } else {
            console.error('API response is invalid:', data);
        }
    } catch (error) {
        console.error('Error when searching for photos:', error);
    }
}

function openPhoto(url) {
    window.open(url, '_blank');
}

