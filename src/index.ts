import './styles.css';

const secretNumber = getRandomInt(1, 9); //Math.floor(Math.random() * 10);
const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    //console.log('got clicked', this);
    const that = this as HTMLDivElement;
    if (that.dataset.secret) {
        that.classList.add('winner');
        squares.forEach(x => x !== that ? x.classList.add('loser') : x);
    }
    else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}

