document.addEventListener("DOMContentLoaded", () => {
    // ضع هنا رابط الـ Raw لملف data.json الخاص بك
    const jsonUrl = "https://raw.githubusercontent.com/Abdulghani010/my-catalog/main/data.json";

    const menuContainer = document.getElementById("menu-container");

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("فشل في تحميل بيانات المنيو");
            }
            return response.json();
        })
        .then(data => {
            menuContainer.innerHTML = ""; 
            
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("menu-card");

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p style="color: #2980b9; font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: bold;">${item.sizes || ''}</p>
                        <div class="price">${item.price} ج.م</div>
                    </div>
                `;

                menuContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("خطأ:", error);
            menuContainer.innerHTML = `<p style="text-align: center; color: red; grid-column: 1/-1;">عذراً، حدث خطأ أثناء تحميل المنيو. تأكد من صحة الرابط.</p>`;
        });
});
