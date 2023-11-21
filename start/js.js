const firstName = prompt ("Напишите Ваше имя")
const secondName = prompt ("Напишите имя, понравившегося Вам человека")

const rezyltat = (Math.ceil((Math.random()*100))) 

if (rezyltat < 33 && firstName != null && firstName!= "" && secondName != null && secondName != "") {
    alert (`Совместимост равна ${rezyltat}. У имен ${firstName} и ${secondName} низкая совместимось.`)
}
else if (rezyltat >=34 && rezyltat <=59 && firstName != null && firstName != "" && secondName != null && secondName != "") {
    alert (`Совместимост равна ${rezyltat}. У имен ${firstName} и ${secondName} совместимость хорошая, но может быть и лучше.`)
}
else if (rezyltat >=60 && firstName != null && firstName != "" && secondName != null && secondName != ""){
    alert (`Совместимост равна ${rezyltat}. Совместимость отличная, человек с именем ${secondName} Вам подходит)`)
}
else {
    alert("Заполните имена")
}

// `Совместимост равна ${rezyltat}. У имен ${firstName} и ${secondName} низкая совместимось.`