document.addEventListener("DOMContentLoaded", () => {
https://raw.githubusercontent.com/Abdulghani010/my-catalog/refs/heads/main/data.json    const jsonUrl = "رابط_الـ_Raw_الخاص_بـ_ملف_data.json";

    const menuContainer = document.getElementById("menu-container");

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("فشل في تحميل بيانات المنيو");
            }
            return response.json();
        })
        .then(data => {
            menuContainer.innerHTML = ""; // تفريغ الحاوية قبل العرض
            
            // افترضنا أن الـ JSON يحتوي على مصفوفة باسم items أو يمثل مصفوفة مباشرة
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("menu-card");

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
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
