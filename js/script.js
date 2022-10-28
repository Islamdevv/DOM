let db = [ 
    { 
        title: 'Samsung S10', 
        category: 'electronics', 
        price: 700, 
        desc: 'Super phone for your life!', 
        img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png' 
    }, 
    { 
        title: 'iPhone 13 Pro', 
        category: 'electronics', 
        price: 1100, 
        desc: 'One of the most powerful cameras!', 
        img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg' 
    }, 
    { 
        title: 'Apple', 
        category: 'fruits', 
        price: 2, 
        desc: 'Healthy fruit that is used in many dishes and desserts.', 
        img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg' 
    }, 
    { 
        title: 'Orange', 
        category: 'fruits', 
        price: 7, 
        desc: 'Fruit for one of the most popular types of juice.', 
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg' 
    }, 
    { 
        title: 'Audi R8', 
        category: 'cars', 
        price: 98000, 
        desc: 'A sports car that can reach tremendous speed.', 
        img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg' 
    } 
];

let card = document.querySelector('.card')
let select = document.querySelector('#app')
let inp = document.querySelector('.inp')
function render(p = db){
    card.innerHTML = '';
    p.forEach((i)=>{
        console.log(i.img);
        card.innerHTML += `<div class='card' style="width: 18rem'>
        <img src="${i.img}" class='card-img-top' alt=""/>
        <img src="${i.img}" class='card-img-top' alt="">
        <div class="card-body">
        <h5 class="card-title">${i.title}</h5>
        <p class="card-text">${i.category}</p>
        <p class="card-text">${i.price}</p>
        <p class="card-text">${i.desc}</p>
        </div>
        </div>` 
    })
}
render()

select.addEventListener('change', (x) => { 
    let xxx = db.filter((item) => { 
        if (item.category == select.value) { 
            return true; 
        } else { 
            return false 
        } 
    }); 
    render(xxx)
})
inp.addEventListener('input', (e) => { 
    let ppp = db.filter((item) => { 
        if ((item.category.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) || (item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)) { 
            return true; 
        } else { 
            return false;
        }
    }); 
    render(ppp) 
})



// console.log(card)