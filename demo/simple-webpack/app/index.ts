import greeter from './greeter';

const element = greeter();

setTimeout(() => {
    document.getElementById('root').appendChild(element);
}, 2000);