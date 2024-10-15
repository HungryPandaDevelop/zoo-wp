// console.log('item test')
let mapItemCompanies = ({
  specialization_company,
  images,
  link,
  value,
  address_company,
  sales_count

}) => {


  return `
    <div class="map-item">
      <h3><a href="${link}">${value}</a></h3>
      <div class="map-item-slider">
        ${images.map(img => `<div class="map-item-img"><div class="img-cover"><img src="${img.url}" alt="pic" /></div></div>`).join('')}
      </div>
      <ul class="map-item-info ln">
        <li>Специализация: <b>${specialization_company.map(el => `<span>${el.name}</span>`).join(', ')}</b></li>
        <li>Адрес: <b>${address_company.address}</b></li>
        <li>Количество объявлений: <b>${sales_count}</b></li>
      </ul> 
      <div class="btn-container">
        <a class="btn btn--blue" href="${link}">Подробнее</a>
      </div>
    </div >
  `
};