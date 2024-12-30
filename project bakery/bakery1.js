document.addEventListener('DOMContentLoaded', () => {
    const specialsContent = document.getElementById('specials-content');
    const productContent = document.getElementById('product-content');
    
    
    const dailySpecials = [

        { day: 'Monday', item: 'Croissant', product: { title: 'Hot Croissant', description: 'Known for their distinctive crescent shape and light, layered texture, they are a beloved breakfast or snack item..', price: '&#8377;90.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.39.17_ee4d8f95.jpg' }},
        { day: 'Tuesday', item: 'Donats', product: { title: 'Donats', description: 'Donuts are a sweet, fried pastry with a delightful combination of flavors and textures.', price: '&#8377;150.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/donates.jpg' }},
        { day: 'Wednesday', item: 'Cup Cake', product: { title: 'Red Vine Cup Cake', description: 'These mini cakes are versatile, easy to make, and perfect for any occasion.', price: '&#8377;220.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.44.37_1b67eda5.jpg' }},
        { day: 'Thursday', item: 'Cookies', product: { title: 'Choco Chip Cookies', description: 'From chocolate chip to oatmeal raisin, cookies are a versatile and timeless treat.', price: '&#8377;290.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.45.57_c26aeb32.jpg' }},
        { day: 'Friday', item: 'Sandwich', product: { title: 'Grilled Cheese Sandwich', description: 'A Sandwich is a versatile and convenient meal made by placing filling between slices of bread.', price: '&#8377;350.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.48.19_2e7c6108.jpg' }},
        { day: 'Saturday', item: 'Roll', product: { title: 'Chocolate Swiss Roll', description: ' It is perfect for special occasions or as a delightful treat with tea or coffee.', price: '&#8377;150.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.49.42_f1783d8d.jpg' }},
        { day: 'Sunday', item: 'Puff', product: { title: 'Special Paneer Puff', description: 'They can be sweet or savory and are perfect for a wide variety of dishes and desserts.', price: '&#8377;80.00', image: 'C:/Users/mithu/OneDrive/Desktop/New folder/WhatsApp Image 2024-12-17 at 00.51.36_60a55c80.jpg' }},

         ];

   
    const today = new Date().getDay();
    const special = dailySpecials[today - 1] || dailySpecials[6]; 

  
     specialsContent.innerHTML = `<p><strong>${special.day} Special:</strong> ${special.item}</p>`;

   
    const product = special.product;
    productContent.innerHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h1 class="product-title">${product.title}</h1>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
});
