document.addEventListener("DOMContentLoaded", function() {
    // Главный аккордеон
    var acc = document.querySelectorAll(".accordion");
    acc.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Переключение активного класса
            this.classList.toggle("active");

            // Раскрытие или скрытие панели
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    // Подаккордеон
    var subAcc = document.querySelectorAll(".sub-accordion");
    subAcc.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Переключение активного класса
            this.classList.toggle("active");

            // Раскрытие или скрытие панели
            var subPanel = this.nextElementSibling;
            if (subPanel.style.display === "block") {
                subPanel.style.display = "none";
            } else {
                subPanel.style.display = "block";
            }

            // Обновляем высоту родительских панелей
            updateParentPanelHeight(this);
        });
    });

    // Обработка событий toggle для <details>
    var detailsElements = document.querySelectorAll("details");
    detailsElements.forEach(function(details) {
        details.addEventListener("toggle", function() {
            // Обновляем высоты родительских панелей
            updateParentPanelHeight(this);
        });
    });

    // Функция обновления высоты родительских панелей
    function updateParentPanelHeight(element) {
        var parentPanel = element.closest('.panel, .sub-panel');
        while (parentPanel) {
            parentPanel.style.display = "block";
            parentPanel = parentPanel.parentElement.closest('.panel, .sub-panel');
        }
    }

    // Копирование кода
    window.copyCode = function(button) {
        var code = button.previousElementSibling.innerText;
        navigator.clipboard.writeText(code).then(function() {
            // Визуальное подтверждение копирования
            button.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(function() {
                button.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        }, function(err) {
            console.error('Ошибка копирования: ', err);
        });
    };
});
