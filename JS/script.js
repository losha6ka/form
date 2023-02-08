let coun = 0;
function onClick(el) {
    coun++;
    el.innerHTML = "Нажатий: " + coun;
    // console.log(el.value);
};
let class2 = document.querySelector('.class2');
let arr = ['Alex', 'alex', 'Vlad', 'vlad', 'name', 'Name'];
class2.addEventListener('keyup', function () {
    let textError = document.querySelector('.text-error');
    let btn = document.querySelector('.btn');
    let random = function (min, max) {
        let randomEx = min + Math.random() * (max - min + 1);
        return Math.floor(randomEx);
    }
    function error() {
        for (let i = 0; i < arr.length; i++) {
            if (class2.value == arr[i]) {
                class2.classList.add('active');
                textError.classList.add('active');
                btn.addEventListener('mouseenter', function () {
                    btn.style.left = `${random(0, 100)}%`;
                    btn.style.top = `${random(0, 100)}%`;
                })
                btn.addEventListener('click', function () {
                    btn.innerHTML = 'Ты меня поймал, но я не нажмусь';
                })
            }
        };
    };
    function chek() {
        for (let i = 0; i < arr.length; i++) {
            if (class2.value != arr[i]) {
                class2.classList.remove('active');
                textError.classList.remove('active');
                btn.addEventListener('mouseenter', function () {
                    btn.style.left = `50%`;
                    btn.style.top = `100%`;
                })
                btn.style.left = `50%`;
                btn.style.top = `100%`;
                btn.addEventListener('click', function () {
                    btn.innerHTML = 'Отправлено';
                })
                btn.innerHTML = 'Отправить';
            }
        };
    };
    chek();
    error();

});