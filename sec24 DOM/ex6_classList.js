const h2 = document.querySelector('h2');
// h2.setAttribute('class', 'purple'); // setAttribute로 class 지정
// h2.setAttribute('class', 'border'); // setAttribute로 class 지정 (위 purple은 제거됨)

// let currentClasses = h2.getAttribute('class');  // "border"
// h2.setAttribute('class', `${currentClasses} purple`); // setAttribute로 class지정 2개


/* classList */
h2.classList.add('purple'); // class를 추가
h2.classList.add('border'); // 기존 class제거되지않고 추가
h2.classList.remove('border'); // class제거

h2.classList.contains('purple') // true/false로 포함됐는지 확인

h2.classList.toggle('border') // 있으면->제거, 없으면->추가
