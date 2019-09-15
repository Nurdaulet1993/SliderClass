window.onload = (e) => {

    // const sum = (e) => {
    //     console.log('Hello')
    // };
    //
    // document.querySelector('#heading').addEventListener('click', sum);
    //
    // document.querySelectorAll('.btn-group .btn').forEach((item, i, mass) => {
    //     item.onclick = function (e) {
    //         let name = this.getAttribute('name');
    //         console.dir(name);
    //     }
    // })


    document.querySelectorAll('.goods .goods__item').forEach((item, i, goods) => {
            item.onclick = function (e) {
                this.classList.toggle('active');
                let sum = 0;
                document.querySelectorAll('.goods .goods__item.active').forEach(item => {
                    sum += item.getAttribute('data-price') * 1;
                });
                document.querySelector('.result').innerHTML = `Общая сумма ${sum}`;
            }
    });

};ы