// תפריט אקורדיון בדף תעודת בגרות מלאה/חלקית - לא קשור לתרגיל סיום משולב
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//תרגיל סיום משולב


var slideIndex = 1;  //יצירת משתנה שיאפשר לפנות לתמונות באמצעות מספר

function currentSlide(current_number) {
    showSlides(slideIndex = current_number); // מציג את התמונה הראשית על פי המספר שלה בתפריט בלחיצה
}


function plusSlides(minusOrPlus1) {
    showSlides(slideIndex += minusOrPlus1);  //הפונקציה מחזירה /מעבירה את התמונה בהתאם ללחיצה
}


// לא קוראים לה בכפתור 
function showSlides(current_number) {
    var slides = document.getElementsByClassName("mySlides");  //משתנה המכיל את כל התמונות עם הקלאס אשר מסתיר את התמונות במצב ברירת מחדל, אורך -6
    
    let dots = document.getElementsByClassName("demo"); //משתנה המכיל את כל התמונות עם הקלאס אשר נותן שקיפות לתמונות, אורך -6

    var captionText = document.getElementById("caption");  // משתנה המקבל את הכותרת של התמונה הראשית הנוכחית
    if (current_number > slides.length) { slideIndex = 1 } //אחרי 6 חזרה לתמונה 1

    if (current_number < 1) { slideIndex = slides.length } // מתחת ל-1 לחזור לתמונה -6
    for (i = 0; i < slides.length; i++)
    {   //כל התמונות לא יוצגו במצב התחלתי, התמונה הראשונה קיבלה קלאס מיוחד על מנת שתופיע במצב התחלתי
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" activeGallery", "");// מחפש את הערך הקיים עם הקלאס שמבטל שקיפות ונותן קו מתאר ומבטל אותו כלומר מחליף את הקלאס לקלאס ריק
    }

    slides[slideIndex - 1].style.display = "block"; //התמונה שלחצו עליה מוצגת כתמונה ראשית
    dots[slideIndex - 1].className += " activeGallery"; //התפריט, במיקום של התמונה הראשית מקבל קלאס אקטיב- קו מתאר וביטול שקיפות
    captionText.innerHTML = dots[slideIndex - 1].alt; //מתאים את הכותרת של התמונה (אלט) בהתאם ללחיצה בתפריט
}
