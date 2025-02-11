// const threehours = 60*60 * 3 *1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const data =  new Date(0 + threehours + oneDay); //  31/12/1969  Timestamp unix ou época unix
// console.log(data.toString());
// const data = new Date(2025, 6, 10, 15,00,00); // a, m, d, h, M, s, ms
// const data = new Date();
// console.log('Dia', data.getDate());
// console.log('Ano', data.getFullYear());
// console.log('Mês', data.getMonth());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Sec', data.getSeconds());
// console.log('Mil', data.getMilliseconds());
// console.log(Date.now());
// console.log(data.toString());



function formatDate(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hour = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    return `${dia}/${mes}/${ano} ${hour}:${min}:${sec}`
}

const data = new Date();
const dateBrazil = formatDate(data);
console.log(dateBrazil)