// Elementos HTML
const inputMonto   = document.getElementById('montoenPeso')
const selectMoneda = document.getElementById('moneda')
const btnBuscar    = document.getElementById('btnBuscar')
const resultadoConversion = document.getElementById('resultado')
const mensajeError = document.getElementById('error')

 //Api Monedas
const urlIndicadores= 'https://mindicador.cl/api/'

//resultadoConversion.textContent = 'Hola Resultado'

async function convertirMoneda() {
 try {

 
 const montoPesos = Number(inputMonto.value)
 const codigoMoneda = selectMoneda.value

  if (!codigoMoneda) {
    mensajeError.textContent = 'Seleccione moneda'
    return
   } 
   const res =  await fetch(`https://mindicador.cl/api/${codigoMoneda}`)
   const data = await res.json()
   const valordeMoneda = data.serie[0].valor
//  console.log('aqui moneda')
//  console.log(valordeMoneda)
//  console.log(montoPesos)
//  console.log(codigoMoneda)

    const resultado = montoPesos / valordeMoneda

    resultadoConversion.textContent = resultado.toFixed(2)
} catch (error) { 
    console.log(error);
 }


}


btnBuscar.addEventListener('click',convertirMoneda )
 


