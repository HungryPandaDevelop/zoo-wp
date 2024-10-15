

const getPhoto = (foto_profilya) => {

  const img = '/wp-content/themes/zoonika/images/icons/avatar-black.svg';

  let renderImg = img;
  if (foto_profilya) {
    if (foto_profilya !== '[]') {
      renderImg = JSON.parse(foto_profilya);
      renderImg = renderImg[0].url;
    }
  }


  return renderImg;
}

export default getPhoto