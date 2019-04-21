let tickets = [
    '020047',
    '020078',
    '020103',
    '020104',
    '020117',
    '020174',
    '020175',
    '020218',
    '020300',
    '020301',
    '020302',
    '020303',
    '020362',
    '020390',
    '020391',
    '020392',
    '020447',
    '020511',
    '020514',
    '020515',
    '020516',
    '020569',
    '020579',
    '020587',
    '020589',
    '020590',
    '020595',
    '020606',
    '020613',
    '020622',
    '020626',
    '020629',
    '020644',
    '020677',
    '020682',
    '020697',
    '020783',
    '020832',
    '020834',
];

let findAll = (number) => {
    document.getElementById('display-winning').innerHTML = '';
    let found = tickets.filter(raffleNumber => raffleNumber.includes(number));
    found.forEach(ticket => {
        console.log(ticket);
        document.getElementById('display-winning').innerHTML += `<li class="collection-item">${ticket}</li>`;
    });
}
