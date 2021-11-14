export function traducirClima(clima) {
  switch(clima) {
    case 'Clouds':
      clima = 'Nublado';
      break;
    case 'Clear':
      clima = 'Despejado';
      break;
    default:
      break;
  }

  return clima;
}

export function traducirDescripcion(descripcion){
  switch(descripcion) {
    case 'clear sky':
      descripcion = 'Cielo despejado';
      break;
    case 'overcast clouds':
      descripcion = 'Cielo encapotado';
      break;
    case 'broken clouds':
      descripcion = 'Parcialmente nublado';
      break;
   default:
      break;
  }

  return descripcion;
}
