const fetchData = async (apiUrl) => {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        for(const product of data){
            const html = `
                <div id="${product.id}" class="product">
                    <p id="title">${product.title}</p>
                    <img id="product-img" src="${product.image}" />
                    <p id="price">${product.price}</p>
                </div>
            `;
            productsContainer.insertAdjacentHTML('beforeend', html);
        }

    } catch(err) {
        console.log(err);
    }
}

fetchData('https://fakestoreapi.com/products/category/jewelery');