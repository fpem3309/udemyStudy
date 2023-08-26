const searchForm = document.querySelector('#serachForm');
searchForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = searchForm.elements.query.value; // 폼 요소
  const config = { params: { q: searchTerm } }  // 키:값으로 쿼리 문자열
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
  makeImages(res.data)
})

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) { // api에 이미지 null 값 있음
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.appendChild(img);
    }
  }
}