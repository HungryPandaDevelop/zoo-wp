// console.log('item test')
let mapItemSales = ({
  price,
  images,
  link,
  value,
  birth,
  gender,
  race,
  target

}) => {
  console.log(target)

  return `
    <div class="map-item">
      <h3><a href="${link}">${value}</a></h3>
      <div class="map-item-box">
      ${target && `<div class="sales-item-type ${target.value}">${target.label}</div>`}
      <div class="map-item-slider">
        ${images.map(img => `<div class="map-item-img"><div class="img-cover"><img src="${img.url}" alt="pic" /></div></div>`).join('')}
      </div>
      </div>
      
      <ul class="map-item-info ln">
        ${price ? (`<li class="sales-price">Цена: <b>${price === 'empty' ? 'Договорная' : price}</b></li>`) : ''}
        ${birth ? (`<li>Дата рождения: <b>${birth}</b></li>`) : ''}
        ${gender ? (`<li>Пол: <b>${gender.label}</b></li>`) : ''}
        ${race ? (`<li>Порода: <b>${race.race.name}</b></li>`) : ''}
      </ul>
      <div class="btn-container">
        <a class="btn btn--blue" href="${link}">Подробнее</a>
      </div>
    </div>
  `
};