document.addEventListener('DOMContentLoaded', () => {
  // --- мотивация ---
  const MOTIVATION_MESSAGES = [
    'Маленький шаг — тоже шаг.',
    'Сегодня ты уже сделал(а) больше, чем ничего.',
    'Успех — это сумма маленьких действий каждый день.',
    'Ты движешься в правильном направлении.',
    'Важно не темпо, а направление.',
    'Сделано — лучше, чем идеально.',
    'Каждый день можно стать чуть-чуть сильнее.',
    'Твоя последовательность важнее вдохновения.',
    'Ты уже на пути, продолжай.',
    'Маленькая победа — всё равно победа.',
    'Сегодняшний успех — кирпичик будущего.',
    'Ты умеешь больше, чем думаешь.',
    'Каждый успех — это подтверждение твоей силы.',
    'Твои усилия имеют значение.',
    'Ты строишь свою новую историю.',
    'Даже тихий прогресс — это прогресс.',
    'Ты делаешь для себя важное дело.',
    'С каждым днём ты становишься устойчивее.',
    'Ты можешь гордиться собой уже сейчас.',
    'Твоя дисциплина — твоя суперсила.',
    'Ещё один день — ещё один шаг вперёд.',
    'Ты не сдаёшься — это главное.',
    'Твой будущий «я» скажет тебе спасибо.',
    'Ты выбираешь движение вместо застоя.',
    'Каждая запись — забота о себе.',
    'Ты бережно фиксируешь свои победы.',
    'Твои успехи важны, даже если маленькие.',
    'Ты уже делаешь больше, чем большинство.',
    'Ты позволяешь себе замечать хорошее.',
    'У тебя получается.',
    'Ты создаёшь привычку видеть успех.',
    'Каждый такой день укрепляет тебя.',
    'Ты превращаешь опыт в ресурс.',
    'Ты умеешь быть внимательным к себе.',
    'Твой путь уникален — и это ценность.',
    'Ты вкладываешься в своё будущее.',
    'Ты учишься быть на своей стороне.',
    'Этот день ты завершил(а) осознанно.',
    'Ты сохраняешь важное, а не только трудное.',
    'Ты замечаешь светлое — это навык.',
    'Твой внутренний опорный пункт укрепляется.',
    'Ты делаешь видимым то, что раньше забывалось.',
    'Ты даёшь себе право быть успешным(ой).',
    'Сегодня ты сделал(а) шаг к себе.',
    'Ты выбираешь фокус на росте, а не на ошибках.',
    'Каждый успех — доказательство твоей живучести.',
    'Ты уже больше, чем просто «держусь».',
    'Ты тренируешь мышцу уверенности.',
    'Ты отмечаешь, а не обесцениваешь.',
    'Ты создаёшь личный архив своей силы.',
    'Ты опираешься на факты, а не на сомнения.',
    'Ты видишь, что не стоишь на месте.',
    'Ты умеешь замечать свою эффективность.',
    'Ты превращаешь день в историю успеха.',
    'Ты достоин(на) своих побед.',
    'Ты строишь внутреннюю поддержку.',
    'Ты не пропускаешь свои достижения мимо.',
    'Ты учишь мозг видеть хорошее в себе.',
    'Ты делаешь шаг из «я должен» в «я могу».',
    'Ты честно фиксируешь, что получилось.',
    'Ты разрешаешь себе радоваться маленькому.',
    'Каждый успех — ответ твоему внутреннему критику.',
    'Ты всё больше доверяешь себе.',
    'Ты осознанно подводишь итоги дня.',
    'Ты учишься быть к себе внимательным.',
    'Ты видишь, как много уже сделано.',
    'Ты делаешь свой день завершённым.',
    'Ты даёшь себе опору на реальные факты.',
    'Ты укрепляешь привычку «замечать, а не ругать».',
    'Ты собираешь доказательства своей силы.',
    'Ты осваиваешь спокойную, устойчивую эффективность.',
    'Твоя система маленьких шагов уже работает.',
    'Ты заботишься о себе через структуру.',
    'Ты становишься автором своих успехов.',
    'Ты выстраиваешь с собой союз, а не борьбу.',
    'Ты становишься для себя надёжным взрослым.',
    'Ты фиксируешь моменты, которые нельзя отнять.',
    'Ты создаёшь карту своих побед.',
    'Ты подтверждаешь: «я могу».',
    'Ты собираешь материальные доказательства роста.',
    'Ты всё лучше слышишь себя.',
    'Ты выбираешь движение, а не застой.',
    'Ты опираешься на сделанное, а не на страх.',
    'Ты спокойно делаешь своё дело.',
    'Ты делаешь для себя важный ежедневный жест.',
    'Ты подтверждаешь свою ценность действиями.',
    'Ты замечаешь, что у тебя получается.',
    'Ты делаешь вклад в своего завтрашнего «я».',
    'Ты уже не тот человек, что вчера — ты растёшь.',
    'Ты создаёшь привычку быть на своей стороне.',
    'Ты обращаешь внимание на свои достижения.',
    'Ты укрепляешь внутреннее ощущение «я справляюсь».',
    'Ты тренируешь свой фокус на успехе.',
    'Ты превращаешь день в ресурс, а не в усталость.',
    'Ты делаешь видимым то, что обычно забывается.',
    'Ты даёшь себе шанс почувствовать удовлетворение.',
    'Ты создаёшь личную коллекцию побед.',
    'Ты становишься более внимательным к себе.',
    'Ты выбираешь себя и свои усилия.',
    'Ты фиксируешь, что у тебя получается жить.',
    'Ты выбираешь мягкую, устойчивую продуктивность.',
    'Ты строишь долговременную опору на себя.'
  ];

  // --- вкладки и экраны ---
  const tabs = document.querySelectorAll('.tab[data-view]');
  const views = document.querySelectorAll('.view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-view');

      tabs.forEach(t => t.classList.remove('tab-active'));
      tab.classList.add('tab-active');

      views.forEach(v => {
        if (v.classList.contains(`view-${view}`)) {
          v.style.display = '';
        } else {
          v.style.display = 'none';
        }
      });
    });
  });

   // --- ВСПОМОГАТЕЛЬНАЯ: диапазон недели ПН–ВС ---
  function getWeekRange(date = new Date()) {
    const d = new Date(date);
    const day = d.getDay(); // 0=вс, 1=пн, ..., 6=сб
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    return { monday, sunday };
  }

  // --- День ---
  const saveButton = document.querySelector('button[data-action="save-day"]');
  if (!saveButton) {
    alert('Кнопка "Сохранить день" не найдена');
    return;
  }
  const dateInput = document.getElementById('date-picker');
  const dateDisplay = document.getElementById('date-display');
  const successInputs = document.querySelectorAll('input[type="text"][name^="success"]');
  const mainSuccessRadios = document.querySelectorAll('input[type="radio"][name="mainSuccess"]');
    // автопереход по Enter между полями успехов
  const successInputsArray = Array.from(successInputs);
  successInputsArray.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const next = successInputsArray[index + 1];
        if (next) {
          next.focus();
        } else {
          // если это последнее поле — переводим фокус на выбор главного успеха
          const firstRadio = mainSuccessRadios[0];
          if (firstRadio) firstRadio.focus();
        }
      }
    });
  });

  const motivationContainer = document.getElementById('motivation-message');
  const historyList = document.getElementById('history-list');

  // --- Неделя ---
  const weekDateInput = document.getElementById('week-date');
  const weekLabel = document.getElementById('week-label');
  const weekDaysList = document.getElementById('week-days-list');
    const weekDaysCount = document.getElementById('week-days-count');
  const saveWeekButton = document.getElementById('save-week-button');
  const weekSummary = document.getElementById('week-summary');

  // --- Месяц ---
  const monthInput = document.getElementById('month-input');
  const monthWeeksList = document.getElementById('month-weeks-list');
  const saveMonthButton = document.getElementById('save-month-button');
  const monthSummary = document.getElementById('month-summary');

  // --- Год ---
  const yearInput = document.getElementById('year-input');
  const yearMonthsList = document.getElementById('year-months-list');
  const saveYearButton = document.getElementById('save-year-button');
  const yearSummary = document.getElementById('year-summary');

  // --- Квартал ---
  const quarterYearInput = document.getElementById('quarter-year');
  const quarterList = document.getElementById('quarter-list');
  const saveQuarterButton = document.getElementById('save-quarter-button');
  const quarterSummary = document.getElementById('quarter-summary');

  // --- Полугодие ---
  const halfYearYearInput = document.getElementById('halfyear-year');
  const halfYearList = document.getElementById('halfyear-list');
  const saveHalfYearButton = document.getElementById('save-halfyear-button');
  const halfYearSummary = document.getElementById('halfyear-summary');

  // мотивация
  function showMotivationForDate(dateKey) {
    if (!motivationContainer) return;
    if (!dateKey) {
      motivationContainer.textContent = '';
      return;
    }
    const index = Math.floor(Math.random() * MOTIVATION_MESSAGES.length);
    motivationContainer.textContent = MOTIVATION_MESSAGES[index];
  }

  // инициализация дня
const today = new Date();
const todayKey = today.getFullYear() + '-' + 
                 String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                 String(today.getDate()).padStart(2, '0');
  if (dateInput) {
    dateInput.value = todayKey;
    updateDateDisplay(today);
    loadDayData(todayKey);
    showMotivationForDate(todayKey);
    updateHistory();
  }

  // инициализация недели
  if (weekDateInput) {
    weekDateInput.value = todayKey;
    updateWeekView(todayKey);
  }

  // инициализация месяца
  if (monthInput) {
    const ym = todayKey.slice(0, 7); // YYYY-MM
    monthInput.value = ym;
    updateMonthView(ym);
  }

  // инициализация год/квартал/полугодие
  if (yearInput) {
    const y = today.getFullYear();
    yearInput.value = y;
    updateYearView(String(y));
    yearInput.addEventListener('change', () => {
      const val = String(yearInput.value);
      updateYearView(val);
    });
  }

  if (quarterYearInput) {
    const y = today.getFullYear();
    quarterYearInput.value = y;
    updateQuarterView(String(y));
    quarterYearInput.addEventListener('change', () => {
      const val = String(quarterYearInput.value);
      updateQuarterView(val);
    });
  }

  if (halfYearYearInput) {
    const y = today.getFullYear();
    halfYearYearInput.value = y;
    updateHalfYearView(String(y));
    halfYearYearInput.addEventListener('change', () => {
      const val = String(halfYearYearInput.value);
      updateHalfYearView(val);
    });
  }

  // изменение даты дня
  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const selectedKey = dateInput.value;
      const selectedDate = new Date(selectedKey);
      if (!selectedKey || isNaN(selectedDate.getTime())) {
        if (motivationContainer) motivationContainer.textContent = '';
        return;
      }
      updateDateDisplay(selectedDate);
      loadDayData(selectedKey);
      showMotivationForDate(selectedKey);
    });
  }

  // изменение даты недели
  if (weekDateInput) {
    weekDateInput.addEventListener('change', () => {
      const selectedKey = weekDateInput.value;
      updateWeekView(selectedKey);
    });
  }

  // изменение месяца
  if (monthInput) {
    monthInput.addEventListener('change', () => {
      const ym = monthInput.value;
      updateMonthView(ym);
      if (yearInput && ym) {
        const y = ym.slice(0, 4);
        if (String(yearInput.value) === y) {
          updateYearView(String(y));
        }
      }
      if (quarterYearInput && ym) {
        quarterYearInput.value = ym.slice(0, 4);
        updateQuarterView(quarterYearInput.value);
      }
      if (halfYearYearInput && ym) {
        halfYearYearInput.value = ym.slice(0, 4);
        updateHalfYearView(halfYearYearInput.value);
      }
    });
  }

  // сохранение дня
  saveButton.addEventListener('click', () => {
    const selectedDateKey = dateInput.value;
    const selectedDate = new Date(selectedDateKey);

    if (!selectedDateKey || isNaN(selectedDate.getTime())) {
      alert('Пожалуйста, выбери дату.');
      return;
    }

    const successes = [];
    successInputs.forEach((input, index) => {
      successes.push({
        index: index + 1,
        text: input.value.trim()
      });
    });

    const mainSuccessRadio = document.querySelector('input[type="radio"][name="mainSuccess"]:checked');

    if (!mainSuccessRadio) {
      alert('Пожалуйста, выбери главный успех дня.');
      return;
    }

    const mainIndex = parseInt(mainSuccessRadio.value, 10);
    const mainSuccess = successes.find(item => item.index === mainIndex);

    if (!mainSuccess || mainSuccess.text === '') {
      alert('Главный успех не может быть пустым. Пожалуйста, заполни текст и выбери его.');
      return;
    }

    const hasAnyText = successes.some(item => item.text !== '');
    if (!hasAnyText) {
      alert('Пожалуйста, заполни хотя бы один успех.');
      return;
    }

    const dayData = {
      date: selectedDateKey,
      displayDate: selectedDate.toLocaleDateString('ru-RU'),
      successes,
      mainSuccessIndex: mainIndex
    };

    const raw = localStorage.getItem('successDiaryDays');
    const allDays = raw ? JSON.parse(raw) : {};

    allDays[selectedDateKey] = dayData;
    localStorage.setItem('successDiaryDays', JSON.stringify(allDays));

    alert('День сохранён!');
    updateHistory();

    if (weekDateInput && weekDateInput.value === selectedDateKey) {
      updateWeekView(weekDateInput.value);
    }

    if (monthInput && monthInput.value === selectedDateKey.slice(0, 7)) {
      updateMonthView(monthInput.value);
    }
    if (yearInput && String(yearInput.value) === selectedDateKey.slice(0, 4)) {
      updateYearView(String(yearInput.value));
    }
    if (quarterYearInput && String(quarterYearInput.value) === selectedDateKey.slice(0, 4)) {
      updateQuarterView(String(quarterYearInput.value));
    }
    if (halfYearYearInput && String(halfYearYearInput.value) === selectedDateKey.slice(0, 4)) {
      updateHalfYearView(String(halfYearYearInput.value));
    }
  });

  // сохранение успеха недели
  if (saveWeekButton) {
    saveWeekButton.addEventListener('click', () => {
      const selectedWeekKey = getWeekKey(weekDateInput.value);
      const selectedRadio = document.querySelector('input[name="weekMain"]:checked');
      if (!selectedRadio) {
        alert('Пожалуйста, выбери успех недели.');
        return;
      }
      const dayKey = selectedRadio.value;

      const rawDays = localStorage.getItem('successDiaryDays');
      const allDays = rawDays ? JSON.parse(rawDays) : {};
      const dayData = allDays[dayKey];
      if (!dayData) {
        alert('Не удалось найти данные дня для этой недели.');
        return;
      }
      const main = dayData.successes.find(s => s.index === dayData.mainSuccessIndex);

      const rawWeeks = localStorage.getItem('successDiaryWeeks');
      const allWeeks = rawWeeks ? JSON.parse(rawWeeks) : {};

      allWeeks[selectedWeekKey] = {
        weekKey: selectedWeekKey,
        from: getWeekStartDate(weekDateInput.value).toLocaleDateString('ru-RU'),
        to: getWeekEndDate(weekDateInput.value).toLocaleDateString('ru-RU'),
        dayDate: dayData.displayDate,
        dayIso: dayData.date,
        mainSuccessText: main ? main.text : ''
      };

      localStorage.setItem('successDiaryWeeks', JSON.stringify(allWeeks));

      weekSummary.textContent = `Выбран успех недели: ${dayData.displayDate} — ${main ? main.text : ''}`;
      alert('Успех недели сохранён!');

      if (monthInput) {
        updateMonthView(monthInput.value);
        if (yearInput && monthInput.value) {
          const y = monthInput.value.slice(0, 4);
          if (String(yearInput.value) === y) {
            updateYearView(String(y));
          }
        }
        if (quarterYearInput && monthInput.value) {
          quarterYearInput.value = monthInput.value.slice(0, 4);
          updateQuarterView(quarterYearInput.value);
        }
        if (halfYearYearInput && monthInput.value) {
          halfYearYearInput.value = monthInput.value.slice(0, 4);
          updateHalfYearView(halfYearYearInput.value);
        }
      }
    });
  }

  // --- День: вспомогательные функции ---

  function updateDateDisplay(dateObj) {
    if (dateDisplay) {
      dateDisplay.textContent = ` (${dateObj.toLocaleDateString('ru-RU')})`;
    }
  }

  function loadDayData(dateKey) {
    const raw = localStorage.getItem('successDiaryDays');
    const allDays = raw ? JSON.parse(raw) : {};
    const dayData = allDays[dateKey];

    successInputs.forEach(input => {
      input.value = '';
    });
    mainSuccessRadios.forEach(r => {
      r.checked = false;
    });

    if (!dayData) {
      return;
    }

    dayData.successes.forEach(item => {
      const input = document.querySelector(`input[type="text"][name="success${item.index}"]`);
      if (input) {
        input.value = item.text;
      }
    });

    const mainRadio = document.querySelector(`input[type="radio"][name="mainSuccess"][value="${dayData.mainSuccessIndex}"]`);
    if (mainRadio) {
      mainRadio.checked = true;
    }
  }

  function updateHistory() {
    if (!historyList) return;

    historyList.innerHTML = '';

    const raw = localStorage.getItem('successDiaryDays');
    const allDays = raw ? JSON.parse(raw) : {};

    const entries = Object.values(allDays);
    if (entries.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Пока нет сохранённых дней.';
      historyList.appendChild(li);
      return;
    }

    entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    const lastSeven = entries.slice(0, 7);

    lastSeven.forEach(day => {
      const li = document.createElement('li');
      const main = day.successes.find(item => item.index === day.mainSuccessIndex);
      const mainText = main && main.text ? main.text : '(главный успех не найден)';
      li.textContent = `${day.displayDate}: ${mainText}`;
      historyList.appendChild(li);
    });
  }

  // --- Неделя: функции ---

function getWeekKey(dateStr) {
  if (!dateStr) return null;

  const start = getWeekStartDate(dateStr); // уже ПОНЕДЕЛЬНИК
  if (isNaN(start.getTime())) return null;

  const year = start.getFullYear();

  // номер недели считаем относительно первого понедельника года
  const jan4 = new Date(year, 0, 4);                // 4 января всегда в ISO‑неделе 1
  const jan4Monday = getWeekStartDate(jan4.toISOString().slice(0, 10));

  const diffMs = start - jan4Monday;
  const week = 1 + Math.round(diffMs / (7 * 24 * 60 * 60 * 1000));

  return `${year}-W${String(week).padStart(2, '0')}`;
}


function getWeekStartDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return d;

  const day = d.getDay();           // 0=вс, 1=пн, ..., 6=сб
  const diffToMonday = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diffToMonday);
  d.setHours(0, 0, 0, 0);
  return d;                         // всегда понедельник
}

function getWeekEndDate(dateStr) {
  const start = getWeekStartDate(dateStr);
  if (isNaN(start.getTime())) return start;

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return end;                       // всегда воскресенье (для себя)
}


  function getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  }

  function updateWeekView(dateStr) {
  if (!weekDaysList || !weekLabel) return;

  weekDaysList.innerHTML = '';
  weekSummary.textContent = '';
  saveWeekButton.disabled = true;

  const baseDate = dateStr ? new Date(dateStr) : new Date();
  if (isNaN(baseDate.getTime())) {
    weekLabel.textContent = '';
    const li = document.createElement('li');
    li.textContent = 'Неверная дата.';
    weekDaysList.appendChild(li);
    return;
  }

  // ЖЁСТКИЙ расчёт ПН–ВС для любой даты
  const day = baseDate.getDay(); // 0=вс, 1=пн, ..., 6=сб
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);
  
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  weekLabel.textContent = ` (${monday.toLocaleDateString('ru-RU')} — ${sunday.toLocaleDateString('ru-RU')})`;

  const raw = localStorage.getItem('successDiaryDays');
  const allDays = raw ? JSON.parse(raw) : {};

 // Цикл для подсчёта дней в неделе
const daysInWeek = [];
const current = new Date(monday);
while (current <= sunday) {
  // ЛОКАЛЬНАЯ дата без смещения пояса
  const isoKey = current.getFullYear() + '-' + 
                 String(current.getMonth() + 1).padStart(2, '0') + '-' + 
                 String(current.getDate()).padStart(2, '0');
  
  if (allDays[isoKey]) {
    daysInWeek.push(allDays[isoKey]);
  }
  current.setDate(current.getDate() + 1);
}

  if (weekDaysCount) {
    if (daysInWeek.length === 0) {
      weekDaysCount.textContent = 'За эту неделю пока нет сохранённых дней.';
    } else {
      weekDaysCount.textContent = `Сохранено дней на этой неделе: ${daysInWeek.length}`;
    }
  }

  if (daysInWeek.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'За эту неделю пока нет сохранённых дней.';
    weekDaysList.appendChild(li);
    return;
  }

  saveWeekButton.disabled = false;

  // ключ недели — по понедельнику (Пн–Вс).
const weekKey = `${monday.toISOString().slice(0, 10)}`;
  const rawWeeks = localStorage.getItem('successDiaryWeeks');
  const allWeeks = rawWeeks ? JSON.parse(rawWeeks) : {};
  const existingWeek = allWeeks[weekKey];
  if (existingWeek && existingWeek.mainSuccessText) {
    weekSummary.textContent = `Ранее выбран успех недели: ${existingWeek.dayDate} — ${existingWeek.mainSuccessText}`;
  }

  // список дней для выбора
  let daysWithMainSuccess = 0;
  const currentDay = new Date(monday);
// Цикл для радиокнопок (ниже в той же функции)
for (let i = 0; i < 7; i++) {
  // ТОЖЕ ЛОКАЛЬНАЯ дата
  const isoKey = currentDay.getFullYear() + '-' + 
                 String(currentDay.getMonth() + 1).padStart(2, '0') + '-' + 
                 String(currentDay.getDate()).padStart(2, '0');
                 
  const dayData = allDays[isoKey];

    const li = document.createElement('li');
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '0.5rem';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'weekMain';
    radio.value = isoKey;

    const span = document.createElement('span');
    span.textContent = `${currentDay.toLocaleDateString('ru-RU')}: `;

    if (dayData && dayData.successes && dayData.mainSuccessIndex) {
      const main = dayData.successes.find(s => s.index === dayData.mainSuccessIndex);
      if (main && main.text) {
        span.textContent += main.text;
        radio.disabled = false;
        daysWithMainSuccess++;
      } else {
        span.textContent += '(нет текста главного успеха)';
        radio.disabled = true;
      }
    } else {
      span.textContent += '(нет данных)';
      radio.disabled = true;
    }

    label.appendChild(radio);
    label.appendChild(span);
    li.appendChild(label);
    weekDaysList.appendChild(li);

    currentDay.setDate(currentDay.getDate() + 1);
  }
}


  // --- Месяц: функции ---

  function updateMonthView(ym) {
    if (!monthWeeksList || !ym) return;

    monthWeeksList.innerHTML = '';
    monthSummary.textContent = '';
    saveMonthButton.disabled = true;
      const monthWeeksCount = document.getElementById('month-weeks-count');


    const rawWeeks = localStorage.getItem('successDiaryWeeks');
    const allWeeks = rawWeeks ? JSON.parse(rawWeeks) : {};

    const entries = Object.values(allWeeks);
    if (entries.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Пока нет сохранённых успехов недели.';
      monthWeeksList.appendChild(li);
      return;
    }

    const monthWeeks = entries.filter(w => {
      if (!w.dayIso) return false;
      return w.dayIso.slice(0, 7) === ym;
    });
        if (monthWeeksCount) {
      if (monthWeeks.length === 0) {
        monthWeeksCount.textContent = 'За этот месяц пока нет выбранных успехов недели.';
      } else {
        monthWeeksCount.textContent = `Выбрано успехов недели в этом месяце: ${monthWeeks.length}`;
      }
    }


    if (monthWeeks.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'За этот месяц пока нет выбранных успехов недели.';
      monthWeeksList.appendChild(li);
      return;
    }

    saveMonthButton.disabled = false;

    const rawMonths = localStorage.getItem('successDiaryMonths');
    const allMonths = rawMonths ? JSON.parse(rawMonths) : {};
    const existingMonth = allMonths[ym];
    if (existingMonth && existingMonth.mainSuccessText) {
      monthSummary.textContent = `Ранее выбран успех месяца: ${existingMonth.weekRange} — ${existingMonth.mainSuccessText}`;
    }

    monthWeeks.forEach(week => {
      const li = document.createElement('li');

      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.gap = '0.5rem';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'monthMain';
      radio.value = week.weekKey;

      const span = document.createElement('span');
      span.textContent = `${week.from} – ${week.to}: ${week.mainSuccessText || '(нет текста успеха недели)'}`;

      label.appendChild(radio);
      label.appendChild(span);
      li.appendChild(label);
      monthWeeksList.appendChild(li);
    });

    saveMonthButton.onclick = () => {
      const selectedRadio = document.querySelector('input[name="monthMain"]:checked');
      if (!selectedRadio) {
        alert('Пожалуйста, выбери успех месяца.');
        return;
      }

      const weekKey = selectedRadio.value;
      const chosenWeek = monthWeeks.find(w => w.weekKey === weekKey);
      if (!chosenWeek) {
        alert('Не удалось найти данные недели.');
        return;
      }

      const rawMonthsInner = localStorage.getItem('successDiaryMonths');
      const allMonthsInner = rawMonthsInner ? JSON.parse(rawMonthsInner) : {};

      allMonthsInner[ym] = {
        monthKey: ym,
        weekKey: weekKey,
        weekRange: `${chosenWeek.from} – ${chosenWeek.to}`,
        mainSuccessText: chosenWeek.mainSuccessText || ''
      };

      localStorage.setItem('successDiaryMonths', JSON.stringify(allMonthsInner));

      monthSummary.textContent = `Выбран успех месяца: ${chosenWeek.from} – ${chosenWeek.to} — ${chosenWeek.mainSuccessText || ''}`;
      alert('Успех месяца сохранён!');

      const yearKey = ym.slice(0, 4);
      if (yearInput && String(yearInput.value) === yearKey) {
        updateYearView(yearKey);
      }
      if (quarterYearInput && String(quarterYearInput.value) === yearKey) {
        updateQuarterView(yearKey);
      }
      if (halfYearYearInput && String(halfYearYearInput.value) === yearKey) {
        updateHalfYearView(yearKey);
      }
    };
  }

  // --- Квартал: выбор из месяцев года ---

  function updateQuarterView(yearKey) {
    if (!quarterList || !yearKey) return;

    quarterList.innerHTML = '';
    if (quarterSummary) quarterSummary.textContent = '';
    if (saveQuarterButton) saveQuarterButton.disabled = true;

    const rawMonths = localStorage.getItem('successDiaryMonths');
    const allMonths = rawMonths ? JSON.parse(rawMonths) : {};

    const monthsEntries = Object.values(allMonths).filter(m => m.monthKey && m.monthKey.slice(0, 4) === yearKey);

    if (monthsEntries.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'За этот год пока нет выбранных успехов месяца.';
      quarterList.appendChild(li);
      return;
    }

    const byQuarter = {
      Q1: [],
      Q2: [],
      Q3: [],
      Q4: []
    };

    monthsEntries.forEach(m => {
      const monthNum = parseInt(m.monthKey.slice(5, 7), 10);
      const q = Math.ceil(monthNum / 3);
      const key = `Q${q}`;
      byQuarter[key].push(m);
    });

    const storageQuartersKey = 'successDiaryQuarters';
    const rawQuarters = localStorage.getItem(storageQuartersKey);
    const allQuarters = rawQuarters ? JSON.parse(rawQuarters) : {};

    ['Q1', 'Q2', 'Q3', 'Q4'].forEach(qKey => {
      const quarterKey = `${yearKey}-${qKey}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = `${quarterKey}`;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const monthsInQuarter = byQuarter[qKey];
      if (!monthsInQuarter || monthsInQuarter.length === 0) {
        const span = document.createElement('span');
        span.textContent = 'Нет выбранных успехов месяца в этом квартале.';
        block.appendChild(span);
      } else {
        monthsInQuarter.sort((a, b) => a.monthKey.localeCompare(b.monthKey));

        monthsInQuarter.forEach(m => {
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `quarterMain-${yearKey}`;
          radio.value = m.monthKey;

          const span = document.createElement('span');
          span.textContent = `${formatMonthKeyRu(m.monthKey)}: ${m.mainSuccessText || '(нет текста успеха месяца)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingQuarter = allQuarters[quarterKey];
        if (existingQuarter && existingQuarter.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех квартала: ${existingQuarter.sourceMonthLabel} — ${existingQuarter.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      quarterList.appendChild(li);
    });

    if (saveQuarterButton) {
      saveQuarterButton.disabled = false;
      saveQuarterButton.onclick = () => {
        const selectedRadio = document.querySelector(`input[name="quarterMain-${yearKey}"]:checked`);
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех квартала (один из месяцев).');
          return;
        }

        const monthKey = selectedRadio.value;
        const monthNum = parseInt(monthKey.slice(5, 7), 10);
        const quarterIdx = Math.ceil(monthNum / 3);
        const quarterKey = `${yearKey}-Q${quarterIdx}`;

        const rawMonthsInner = localStorage.getItem('successDiaryMonths');
        const allMonthsInner = rawMonthsInner ? JSON.parse(rawMonthsInner) : {};
        const monthData = allMonthsInner[monthKey];
        if (!monthData) {
          alert('Не удалось найти данные месяца.');
          return;
        }

        const rawQuartersInner = localStorage.getItem(storageQuartersKey);
        const allQuartersInner = rawQuartersInner ? JSON.parse(rawQuartersInner) : {};

        allQuartersInner[quarterKey] = {
          quarterKey,
          sourceMonthKey: monthKey,
          sourceMonthLabel: formatMonthKeyRu(monthKey),
          mainSuccessText: monthData.mainSuccessText || ''
        };

        localStorage.setItem(storageQuartersKey, JSON.stringify(allQuartersInner));

        if (quarterSummary) {
          quarterSummary.textContent = `Выбран успех квартала: ${formatMonthKeyRu(monthKey)} — ${monthData.mainSuccessText || ''}`;
        }
        alert('Успех квартала сохранён!');
        updateHalfYearView(yearKey);
      };
    }
  }

  // --- Полугодие: выбор из кварталов года ---

  function updateHalfYearView(yearKey) {
    if (!halfYearList || !yearKey) return;

    halfYearList.innerHTML = '';
    if (halfYearSummary) halfYearSummary.textContent = '';
    if (saveHalfYearButton) saveHalfYearButton.disabled = true;

    const storageQuartersKey = 'successDiaryQuarters';
    const rawQuarters = localStorage.getItem(storageQuartersKey);
    const allQuarters = rawQuarters ? JSON.parse(rawQuarters) : {};

    const qKeysYear = Object.keys(allQuarters).filter(k => k.startsWith(`${yearKey}-Q`));
    if (qKeysYear.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'За этот год пока нет выбранных успехов квартала.';
      halfYearList.appendChild(li);
      return;
    }

    const storageHalfKey = 'successDiaryHalfYears';
    const rawHalfYears = localStorage.getItem(storageHalfKey);
    const allHalfYears = rawHalfYears ? JSON.parse(rawHalfYears) : {};

    ['H1', 'H2'].forEach(hCode => {
      const halfKey = `${yearKey}-${hCode}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = halfKey;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const quartersInHalf = hCode === 'H1' ? ['Q1', 'Q2'] : ['Q3', 'Q4'];
      const quartersData = quartersInHalf
        .map(q => allQuarters[`${yearKey}-${q}`])
        .filter(Boolean);

      if (quartersData.length === 0) {
        const span = document.createElement('span');
        span.textContent = 'Нет выбранных успехов квартала в этом полугодии.';
        block.appendChild(span);
      } else {
        quartersData.forEach(qData => {
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `halfYearMain-${yearKey}`;
          radio.value = qData.quarterKey;

          const span = document.createElement('span');
          span.textContent = `${qData.quarterKey}: ${qData.mainSuccessText || '(нет текста успеха квартала)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingHalf = allHalfYears[halfKey];
        if (existingHalf && existingHalf.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех полугодия: ${existingHalf.sourceQuarterKey} — ${existingHalf.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      halfYearList.appendChild(li);
    });

    if (saveHalfYearButton) {
      saveHalfYearButton.disabled = false;
      saveHalfYearButton.onclick = () => {
        const selectedRadio = document.querySelector(`input[name="halfYearMain-${yearKey}"]:checked`);
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех полугодия (один из кварталов).');
          return;
        }

        const quarterKey = selectedRadio.value;
        const qData = allQuarters[quarterKey];
        if (!qData) {
          alert('Не удалось найти данные квартала.');
          return;
        }

        const hIndex = quarterKey.endsWith('Q1') || quarterKey.endsWith('Q2') ? 'H1' : 'H2';
        const halfKey = `${yearKey}-${hIndex}`;

        const rawHalfYearsInner = localStorage.getItem(storageHalfKey);
        const allHalfYearsInner = rawHalfYearsInner ? JSON.parse(rawHalfYearsInner) : {};

        allHalfYearsInner[halfKey] = {
          halfYearKey: halfKey,
          sourceQuarterKey: quarterKey,
          mainSuccessText: qData.mainSuccessText || ''
        };

        localStorage.setItem(storageHalfKey, JSON.stringify(allHalfYearsInner));

        if (halfYearSummary) {
          halfYearSummary.textContent = `Выбран успех полугодия: ${quarterKey} — ${qData.mainSuccessText || ''}`;
        }
        alert('Успех полугодия сохранён!');
        updateYearView(yearKey);
      };
    }
  }

  // --- Год: выбор из полугодий ---

  function updateYearView(yearKey) {
    if (!yearMonthsList || !yearKey) return;

    yearMonthsList.innerHTML = '';
    if (yearSummary) yearSummary.textContent = '';
    if (saveYearButton) saveYearButton.disabled = true;

    const storageHalfKey = 'successDiaryHalfYears';
    const rawHalfYears = localStorage.getItem(storageHalfKey);
    const allHalfYears = rawHalfYears ? JSON.parse(rawHalfYears) : {};

    const halfKeys = [`${yearKey}-H1`, `${yearKey}-H2`];
    const halfEntries = halfKeys
      .map(k => allHalfYears[k])
      .filter(Boolean);

    if (halfEntries.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'За этот год пока нет выбранных успехов полугодия.';
      yearMonthsList.appendChild(li);
      return;
    }

    if (saveYearButton) saveYearButton.disabled = false;

    const storageYearsKey = 'successDiaryYears';
    const rawYears = localStorage.getItem(storageYearsKey);
    const allYears = rawYears ? JSON.parse(rawYears) : {};
    const existingYear = allYears[yearKey];
    if (existingYear && existingYear.mainSuccessText && yearSummary) {
      yearSummary.textContent = `Ранее выбран успех года: ${existingYear.sourceHalfYearKey} — ${existingYear.mainSuccessText}`;
    }

    halfKeys.forEach(hKey => {
      const hData = allHalfYears[hKey];
      const li = document.createElement('li');

      if (!hData) {
        li.textContent = `${hKey}: (за это полугодие нет выбранного успеха квартала)`;
        yearMonthsList.appendChild(li);
        return;
      }

      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.gap = '0.5rem';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `yearMain-${yearKey}`;
      radio.value = hKey;

      const span = document.createElement('span');
      span.textContent = `${hKey}: ${hData.mainSuccessText || '(нет текста успеха полугодия)'}`;

      label.appendChild(radio);
      label.appendChild(span);
      li.appendChild(label);
      yearMonthsList.appendChild(li);
    });

    if (saveYearButton) {
      saveYearButton.onclick = () => {
        const selectedRadio = document.querySelector(`input[name="yearMain-${yearKey}"]:checked`);
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех года.');
          return;
        }

        const halfKey = selectedRadio.value;
        const hData = allHalfYears[halfKey];
        if (!hData) {
          alert('Не удалось найти данные полугодия.');
          return;
        }

        const rawYearsInner = localStorage.getItem(storageYearsKey);
        const allYearsInner = rawYearsInner ? JSON.parse(rawYearsInner) : {};

        allYearsInner[yearKey] = {
          yearKey,
          sourceHalfYearKey: halfKey,
          mainSuccessText: hData.mainSuccessText || ''
        };

        localStorage.setItem(storageYearsKey, JSON.stringify(allYearsInner));

        if (yearSummary) {
          yearSummary.textContent = `Выбран успех года: ${halfKey} — ${hData.mainSuccessText || ''}`;
        }
        alert('Успех года сохранён!');
      };
    }
  }

  // --- формат месяца ---

  function formatMonthKeyRu(ym) {
    if (!ym || ym.length < 7) return ym;
    const [year, month] = ym.split('-');
    const names = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    const idx = parseInt(month, 10) - 1;
    const name = names[idx] || month;
    return `${name} ${year}`;
  }
    // ===== 2 ГОДА: выбор из успехов года =====

  const twoYearsList = document.getElementById('two-years-list');
  const saveTwoYearsButton = document.getElementById('save-2years-button');
  const twoYearsSummary = document.getElementById('two-years-summary');

  function updateTwoYearsView() {
    if (!twoYearsList) return;

    twoYearsList.innerHTML = '';
    if (twoYearsSummary) twoYearsSummary.textContent = '';
    if (saveTwoYearsButton) saveTwoYearsButton.disabled = true;

    const rawYears = localStorage.getItem('successDiaryYears');
    const allYears = rawYears ? JSON.parse(rawYears) : {};

    const yearKeys = Object.keys(allYears)
      .map(y => parseInt(y, 10))
      .filter(y => !isNaN(y))
      .sort((a, b) => a - b);

    if (yearKeys.length < 2) {
      const li = document.createElement('li');
      li.textContent = 'Пока недостаточно сохранённых успехов года (нужно минимум 2 года подряд).';
      twoYearsList.appendChild(li);
      return;
    }

    const pairs = [];
    for (let i = 0; i < yearKeys.length - 1; i++) {
      const y1 = yearKeys[i];
      const y2 = yearKeys[i + 1];
      if (y2 === y1 + 1) {
        pairs.push([y1, y2]);
      }
    }

    if (pairs.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Нет пар подряд идущих годов с сохранёнными успехами.';
      twoYearsList.appendChild(li);
      return;
    }

    const storageTwoYearsKey = 'successDiaryTwoYears';
    const rawTwoYears = localStorage.getItem(storageTwoYearsKey);
    const allTwoYears = rawTwoYears ? JSON.parse(rawTwoYears) : {};

    pairs.forEach(([y1, y2]) => {
      const key = `${y1}-${y2}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = `${y1}–${y2}`;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const year1 = allYears[String(y1)];
      const year2 = allYears[String(y2)];

      if (!year1 && !year2) {
        const span = document.createElement('span');
        span.textContent = 'Нет сохранённых успехов года для этой пары.';
        block.appendChild(span);
      } else {
        [year1, year2].forEach((yData, idx) => {
          if (!yData) return;
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `twoYearsMain-${key}`;
          radio.value = yData.yearKey;

          const span = document.createElement('span');
          span.textContent = `${yData.yearKey}: ${yData.mainSuccessText || '(нет текста успеха года)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingTwo = allTwoYears[key];
        if (existingTwo && existingTwo.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех за 2 года: ${existingTwo.sourceYearKey} — ${existingTwo.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      twoYearsList.appendChild(li);
    });

    if (saveTwoYearsButton) {
      saveTwoYearsButton.disabled = false;
      saveTwoYearsButton.onclick = () => {
        const selectedRadio = document.querySelector('input[name^="twoYearsMain-"]:checked');
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех за 2 года (один из успехов года).');
          return;
        }

        const nameAttr = selectedRadio.name;          // twoYearsMain-2026-2027
        const pairKey = nameAttr.replace('twoYearsMain-', '');
        const yearKey = selectedRadio.value;

        const yData = allYears[yearKey];
        if (!yData) {
          alert('Не удалось найти данные года.');
          return;
        }

        const rawTwoYearsInner = localStorage.getItem(storageTwoYearsKey);
        const allTwoYearsInner = rawTwoYearsInner ? JSON.parse(rawTwoYearsInner) : {};

        allTwoYearsInner[pairKey] = {
          pairKey,
          sourceYearKey: yearKey,
          mainSuccessText: yData.mainSuccessText || ''
        };

        localStorage.setItem(storageTwoYearsKey, JSON.stringify(allTwoYearsInner));

        if (twoYearsSummary) {
          twoYearsSummary.textContent = `Выбран успех за 2 года (${pairKey}): ${yearKey} — ${yData.mainSuccessText || ''}`;
        }
        alert('Успех за 2 года сохранён!');
      };
    }
  }

  // вызывать обновление, когда заходишь на вкладку «2 года»
  const tabTwoYears = document.querySelector('.tab[data-view="2years"]');
  if (tabTwoYears) {
    tabTwoYears.addEventListener('click', () => {
      updateTwoYearsView();
    });
  }
  // ===== 5 ЛЕТ: выбор из успехов года =====

  const fiveYearsList = document.getElementById('five-years-list');
  const saveFiveYearsButton = document.getElementById('save-5years-button');
  const fiveYearsSummary = document.getElementById('five-years-summary');

  function updateFiveYearsView() {
    if (!fiveYearsList) return;

    fiveYearsList.innerHTML = '';
    if (fiveYearsSummary) fiveYearsSummary.textContent = '';
    if (saveFiveYearsButton) saveFiveYearsButton.disabled = true;

    const rawYears = localStorage.getItem('successDiaryYears');
    const allYears = rawYears ? JSON.parse(rawYears) : {};

    const yearKeys = Object.keys(allYears)
      .map(y => parseInt(y, 10))
      .filter(y => !isNaN(y))
      .sort((a, b) => a - b);

    if (yearKeys.length < 5) {
      const li = document.createElement('li');
      li.textContent = 'Пока недостаточно сохранённых успехов года (нужно минимум 5 лет подряд).';
      fiveYearsList.appendChild(li);
      return;
    }

    const ranges = [];
    for (let i = 0; i <= yearKeys.length - 5; i++) {
      const y1 = yearKeys[i];
      const y5 = yearKeys[i + 4];
      if (y5 === y1 + 4) {
        ranges.push([y1, y5]);
      }
    }

    if (ranges.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Нет подряд идущих диапазонов по 5 лет с сохранёнными успехами года.';
      fiveYearsList.appendChild(li);
      return;
    }

    const storageFiveKey = 'successDiaryFiveYears';
    const rawFiveYears = localStorage.getItem(storageFiveKey);
    const allFiveYears = rawFiveYears ? JSON.parse(rawFiveYears) : {};

    ranges.forEach(([start, end]) => {
      const key = `${start}-${end}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = `${start}–${end}`;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const yearsInRange = [];
      for (let y = start; y <= end; y++) {
        const yData = allYears[String(y)];
        if (yData) yearsInRange.push(yData);
      }

      if (yearsInRange.length === 0) {
        const span = document.createElement('span');
        span.textContent = 'Нет сохранённых успехов года в этом диапазоне.';
        block.appendChild(span);
      } else {
        yearsInRange.forEach(yData => {
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `fiveYearsMain-${key}`;
          radio.value = yData.yearKey;

          const span = document.createElement('span');
          span.textContent = `${yData.yearKey}: ${yData.mainSuccessText || '(нет текста успеха года)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingFive = allFiveYears[key];
        if (existingFive && existingFive.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех за 5 лет: ${existingFive.sourceYearKey} — ${existingFive.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      fiveYearsList.appendChild(li);
    });

    if (saveFiveYearsButton) {
      saveFiveYearsButton.disabled = false;
      saveFiveYearsButton.onclick = () => {
        const selectedRadio = document.querySelector('input[name^="fiveYearsMain-"]:checked');
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех за 5 лет (один из успехов года).');
          return;
        }

        const nameAttr = selectedRadio.name;          // fiveYearsMain-2023-2027
        const rangeKey = nameAttr.replace('fiveYearsMain-', '');
        const yearKey = selectedRadio.value;

        const rawYearsInner = localStorage.getItem('successDiaryYears');
        const allYearsInner = rawYearsInner ? JSON.parse(rawYearsInner) : {};
        const yData = allYearsInner[yearKey];
        if (!yData) {
          alert('Не удалось найти данные года.');
          return;
        }

        const rawFiveYearsInner = localStorage.getItem(storageFiveKey);
        const allFiveYearsInner = rawFiveYearsInner ? JSON.parse(rawFiveYearsInner) : {};

        allFiveYearsInner[rangeKey] = {
          rangeKey,
          sourceYearKey: yearKey,
          mainSuccessText: yData.mainSuccessText || ''
        };

        localStorage.setItem(storageFiveKey, JSON.stringify(allFiveYearsInner));

        if (fiveYearsSummary) {
          fiveYearsSummary.textContent = `Выбран успех за 5 лет (${rangeKey}): ${yearKey} — ${yData.mainSuccessText || ''}`;
        }
        alert('Успех за 5 лет сохранён!');
      };
    }
  }

  const tabFiveYears = document.querySelector('.tab[data-view="5years"]');
  if (tabFiveYears) {
    tabFiveYears.addEventListener('click', () => {
      updateFiveYearsView();
    });
  }
  // ===== 7 ЛЕТ: выбор из успехов года =====

  const sevenYearsList = document.getElementById('seven-years-list');
  const saveSevenYearsButton = document.getElementById('save-7years-button');
  const sevenYearsSummary = document.getElementById('seven-years-summary');

  function updateSevenYearsView() {
    if (!sevenYearsList) return;

    sevenYearsList.innerHTML = '';
    if (sevenYearsSummary) sevenYearsSummary.textContent = '';
    if (saveSevenYearsButton) saveSevenYearsButton.disabled = true;

    const rawYears = localStorage.getItem('successDiaryYears');
    const allYears = rawYears ? JSON.parse(rawYears) : {};

    const yearKeys = Object.keys(allYears)
      .map(y => parseInt(y, 10))
      .filter(y => !isNaN(y))
      .sort((a, b) => a - b);

    if (yearKeys.length < 7) {
      const li = document.createElement('li');
      li.textContent = 'Пока недостаточно сохранённых успехов года (нужно минимум 7 лет подряд).';
      sevenYearsList.appendChild(li);
      return;
    }

    const ranges = [];
    for (let i = 0; i <= yearKeys.length - 7; i++) {
      const y1 = yearKeys[i];
      const y7 = yearKeys[i + 6];
      if (y7 === y1 + 6) {
        ranges.push([y1, y7]);
      }
    }

    if (ranges.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Нет подряд идущих диапазонов по 7 лет с сохранёнными успехами года.';
      sevenYearsList.appendChild(li);
      return;
    }

    const storageSevenKey = 'successDiarySevenYears';
    const rawSevenYears = localStorage.getItem(storageSevenKey);
    const allSevenYears = rawSevenYears ? JSON.parse(rawSevenYears) : {};

    ranges.forEach(([start, end]) => {
      const key = `${start}-${end}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = `${start}–${end}`;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const yearsInRange = [];
      for (let y = start; y <= end; y++) {
        const yData = allYears[String(y)];
        if (yData) yearsInRange.push(yData);
      }

      if (yearsInRange.length === 0) {
        const span = document.createElement('span');
        span.textContent = 'Нет сохранённых успехов года в этом диапазоне.';
        block.appendChild(span);
      } else {
        yearsInRange.forEach(yData => {
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `sevenYearsMain-${key}`;
          radio.value = yData.yearKey;

          const span = document.createElement('span');
          span.textContent = `${yData.yearKey}: ${yData.mainSuccessText || '(нет текста успеха года)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingSeven = allSevenYears[key];
        if (existingSeven && existingSeven.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех за 7 лет: ${existingSeven.sourceYearKey} — ${existingSeven.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      sevenYearsList.appendChild(li);
    });

    if (saveSevenYearsButton) {
      saveSevenYearsButton.disabled = false;
      saveSevenYearsButton.onclick = () => {
        const selectedRadio = document.querySelector('input[name^="sevenYearsMain-"]:checked');
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех за 7 лет (один из успехов года).');
          return;
        }

        const nameAttr = selectedRadio.name;          // sevenYearsMain-2020-2026
        const rangeKey = nameAttr.replace('sevenYearsMain-', '');
        const yearKey = selectedRadio.value;

        const rawYearsInner = localStorage.getItem('successDiaryYears');
        const allYearsInner = rawYearsInner ? JSON.parse(rawYearsInner) : {};
        const yData = allYearsInner[yearKey];
        if (!yData) {
          alert('Не удалось найти данные года.');
          return;
        }

        const rawSevenYearsInner = localStorage.getItem(storageSevenKey);
        const allSevenYearsInner = rawSevenYearsInner ? JSON.parse(rawSevenYearsInner) : {};

        allSevenYearsInner[rangeKey] = {
          rangeKey,
          sourceYearKey: yearKey,
          mainSuccessText: yData.mainSuccessText || ''
        };

        localStorage.setItem(storageSevenKey, JSON.stringify(allSevenYearsInner));

        if (sevenYearsSummary) {
          sevenYearsSummary.textContent = `Выбран успех за 7 лет (${rangeKey}): ${yearKey} — ${yData.mainSuccessText || ''}`;
        }
        alert('Успех за 7 лет сохранён!');
      };
    }
  }

  const tabSevenYears = document.querySelector('.tab[data-view="7years"]');
  if (tabSevenYears) {
    tabSevenYears.addEventListener('click', () => {
      updateSevenYearsView();
    });
  }
  // ===== 10 ЛЕТ: выбор из успехов года =====

  const tenYearsList = document.getElementById('ten-years-list');
  const saveTenYearsButton = document.getElementById('save-10years-button');
  const tenYearsSummary = document.getElementById('ten-years-summary');

  function updateTenYearsView() {
    if (!tenYearsList) return;

    tenYearsList.innerHTML = '';
    if (tenYearsSummary) tenYearsSummary.textContent = '';
    if (saveTenYearsButton) saveTenYearsButton.disabled = true;

    const rawYears = localStorage.getItem('successDiaryYears');
    const allYears = rawYears ? JSON.parse(rawYears) : {};

    const yearKeys = Object.keys(allYears)
      .map(y => parseInt(y, 10))
      .filter(y => !isNaN(y))
      .sort((a, b) => a - b);

    if (yearKeys.length < 10) {
      const li = document.createElement('li');
      li.textContent = 'Пока недостаточно сохранённых успехов года (нужно минимум 10 лет подряд).';
      tenYearsList.appendChild(li);
      return;
    }

    const ranges = [];
    for (let i = 0; i <= yearKeys.length - 10; i++) {
      const y1 = yearKeys[i];
      const y10 = yearKeys[i + 9];
      if (y10 === y1 + 9) {
        ranges.push([y1, y10]);
      }
    }

    if (ranges.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Нет подряд идущих диапазонов по 10 лет с сохранёнными успехами года.';
      tenYearsList.appendChild(li);
      return;
    }

    const storageTenKey = 'successDiaryTenYears';
    const rawTenYears = localStorage.getItem(storageTenKey);
    const allTenYears = rawTenYears ? JSON.parse(rawTenYears) : {};

    ranges.forEach(([start, end]) => {
      const key = `${start}-${end}`;
      const li = document.createElement('li');

      const block = document.createElement('div');
      block.style.display = 'flex';
      block.style.flexDirection = 'column';
      block.style.gap = '0.25rem';

      const title = document.createElement('div');
      title.textContent = `${start}–${end}`;
      title.style.fontWeight = '600';
      block.appendChild(title);

      const yearsInRange = [];
      for (let y = start; y <= end; y++) {
        const yData = allYears[String(y)];
        if (yData) yearsInRange.push(yData);
      }

      if (yearsInRange.length === 0) {
        const span = document.createElement('span');
        span.textContent = 'Нет сохранённых успехов года в этом диапазоне.';
        block.appendChild(span);
      } else {
        yearsInRange.forEach(yData => {
          const label = document.createElement('label');
          label.style.display = 'flex';
          label.style.alignItems = 'center';
          label.style.gap = '0.5rem';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = `tenYearsMain-${key}`;
          radio.value = yData.yearKey;

          const span = document.createElement('span');
          span.textContent = `${yData.yearKey}: ${yData.mainSuccessText || '(нет текста успеха года)'}`;

          label.appendChild(radio);
          label.appendChild(span);
          block.appendChild(label);
        });

        const existingTen = allTenYears[key];
        if (existingTen && existingTen.mainSuccessText) {
          const prev = document.createElement('div');
          prev.textContent = `Ранее выбран успех за 10 лет: ${existingTen.sourceYearKey} — ${existingTen.mainSuccessText}`;
          prev.style.fontSize = '0.85rem';
          prev.style.opacity = '0.8';
          block.appendChild(prev);
        }
      }

      li.appendChild(block);
      tenYearsList.appendChild(li);
    });

    if (saveTenYearsButton) {
      saveTenYearsButton.disabled = false;
      saveTenYearsButton.onclick = () => {
        const selectedRadio = document.querySelector('input[name^="tenYearsMain-"]:checked');
        if (!selectedRadio) {
          alert('Пожалуйста, выбери успех за 10 лет (один из успехов года).');
          return;
        }

        const nameAttr = selectedRadio.name;          // tenYearsMain-2020-2029
        const rangeKey = nameAttr.replace('tenYearsMain-', '');
        const yearKey = selectedRadio.value;

        const rawYearsInner = localStorage.getItem('successDiaryYears');
        const allYearsInner = rawYearsInner ? JSON.parse(rawYearsInner) : {};
        const yData = allYearsInner[yearKey];
        if (!yData) {
          alert('Не удалось найти данные года.');
          return;
        }

        const rawTenYearsInner = localStorage.getItem(storageTenKey);
        const allTenYearsInner = rawTenYearsInner ? JSON.parse(rawTenYearsInner) : {};

        allTenYearsInner[rangeKey] = {
          rangeKey,
          sourceYearKey: yearKey,
          mainSuccessText: yData.mainSuccessText || ''
        };

        localStorage.setItem(storageTenYearsKey, JSON.stringify(allTenYearsInner));

        if (tenYearsSummary) {
          tenYearsSummary.textContent = `Выбран успех за 10 лет (${rangeKey}): ${yearKey} — ${yData.mainSuccessText || ''}`;
        }
        alert('Успех за 10 лет сохранён!');
      };
    }
  }

  const tabTenYears = document.querySelector('.tab[data-view="10years"]');
  if (tabTenYears) {
    tabTenYears.addEventListener('click', () => {
      updateTenYearsView();
    });
  }
  // ===== ЭКСПОРТ / ИМПОРТ ДАННЫХ =====

  const exportButton = document.getElementById('export-data-button');
  const importInput = document.getElementById('import-data-input');
  const settingsStatus = document.getElementById('settings-status');

  function setSettingsStatus(text) {
    if (settingsStatus) {
      settingsStatus.textContent = text || '';
    }
  }

  function getAllDataForExport() {
    return {
      successDiaryDays: JSON.parse(localStorage.getItem('successDiaryDays') || '{}'),
      successDiaryWeeks: JSON.parse(localStorage.getItem('successDiaryWeeks') || '{}'),
      successDiaryMonths: JSON.parse(localStorage.getItem('successDiaryMonths') || '{}'),
      successDiaryYears: JSON.parse(localStorage.getItem('successDiaryYears') || '{}'),
      successDiaryQuarters: JSON.parse(localStorage.getItem('successDiaryQuarters') || '{}'),
      successDiaryHalfYears: JSON.parse(localStorage.getItem('successDiaryHalfYears') || '{}'),
      successDiaryTwoYears: JSON.parse(localStorage.getItem('successDiaryTwoYears') || '{}'),
      successDiaryFiveYears: JSON.parse(localStorage.getItem('successDiaryFiveYears') || '{}'),
      successDiarySevenYears: JSON.parse(localStorage.getItem('successDiarySevenYears') || '{}'),
      successDiaryTenYears: JSON.parse(localStorage.getItem('successDiaryTenYears') || '{}')
    };
  }

  function applyImportedData(data) {
    if (data.successDiaryDays) {
      localStorage.setItem('successDiaryDays', JSON.stringify(data.successDiaryDays));
    }
    if (data.successDiaryWeeks) {
      localStorage.setItem('successDiaryWeeks', JSON.stringify(data.successDiaryWeeks));
    }
    if (data.successDiaryMonths) {
      localStorage.setItem('successDiaryMonths', JSON.stringify(data.successDiaryMonths));
    }
    if (data.successDiaryYears) {
      localStorage.setItem('successDiaryYears', JSON.stringify(data.successDiaryYears));
    }
    if (data.successDiaryQuarters) {
      localStorage.setItem('successDiaryQuarters', JSON.stringify(data.successDiaryQuarters));
    }
    if (data.successDiaryHalfYears) {
      localStorage.setItem('successDiaryHalfYears', JSON.stringify(data.successDiaryHalfYears));
    }
    if (data.successDiaryTwoYears) {
      localStorage.setItem('successDiaryTwoYears', JSON.stringify(data.successDiaryTwoYears));
    }
    if (data.successDiaryFiveYears) {
      localStorage.setItem('successDiaryFiveYears', JSON.stringify(data.successDiaryFiveYears));
    }
    if (data.successDiarySevenYears) {
      localStorage.setItem('successDiarySevenYears', JSON.stringify(data.successDiarySevenYears));
    }
    if (data.successDiaryTenYears) {
      localStorage.setItem('successDiaryTenYears', JSON.stringify(data.successDiaryTenYears));
    }
  }

  if (exportButton) {
    exportButton.addEventListener('click', () => {
      try {
        const allData = getAllDataForExport();
        const json = JSON.stringify(allData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        const now = new Date();
        const stamp = now.toISOString().slice(0, 10);
        a.download = `success-diary-backup-${stamp}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setSettingsStatus('Файл с данными успешно сохранён.');
      } catch (e) {
        console.error(e);
        alert('Не удалось экспортировать данные.');
      }
    });
  }

  if (importInput) {
    importInput.addEventListener('change', () => {
      const file = importInput.files && importInput.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = e => {
        try {
          const text = e.target.result;
          const data = JSON.parse(text);

          if (typeof data !== 'object' || data === null) {
            alert('Файл не похож на резервную копию.');
            return;
          }

          const confirmImport = confirm('Импорт перезапишет текущие данные дневника. Продолжить?');
          if (!confirmImport) return;

          applyImportedData(data);
          setSettingsStatus('Данные успешно импортированы. Перезагрузите страницу, чтобы увидеть изменения.');
          alert('Импорт завершён. Перезагрузите страницу.');
        } catch (err) {
          console.error(err);
          alert('Ошибка при чтении файла. Проверь, что это правильный JSON-файл резервной копии.');
        } finally {
          importInput.value = '';
        }
      };
      reader.readAsText(file, 'utf-8');
    });
  }
  // ===== ДРЕВО: ТРИ РЕЖИМА ОТОБРАЖЕНИЯ =====

  const treeContainer = document.getElementById('tree-container');
  const treeModeRadios = document.querySelectorAll('input[name="tree-mode"]');

     // 1) ВСЕ УСПЕХИ (только дни, сгруппированные по годам и месяцам)

  function renderAllSuccessesTree() {
    treeContainer.innerHTML = '';

    const days = JSON.parse(localStorage.getItem('successDiaryDays') || '{}');
    const dayValues = Object.values(days);

    if (dayValues.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'Пока нет сохранённых дней с успехами.';
      treeContainer.appendChild(p);
      return;
    }

    // сортируем по дате
    dayValues.sort((a, b) => a.date.localeCompare(b.date));

    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.paddingLeft = '0';
    list.style.margin = '0';

    let currentYear = '';
    let currentMonth = '';

    dayValues.forEach(d => {
      const [year, month] = d.date.split('-');
      const main = d.successes.find(s => s.index === d.mainSuccessIndex);
      const text = main ? main.text : '';

      // новый год — добавляем заголовок года
      if (year !== currentYear) {
        currentYear = year;
        currentMonth = ''; // сбросим месяц

        const yearLi = document.createElement('li');
        yearLi.style.marginTop = '0.75rem';
        yearLi.style.fontWeight = '700';
        yearLi.textContent = `${year}`;
        list.appendChild(yearLi);
      }

      // новый месяц — добавляем заголовок месяца
      if (month !== currentMonth) {
        currentMonth = month;

        const monthLi = document.createElement('li');
        monthLi.style.marginTop = '0.5rem';
        monthLi.style.fontWeight = '600';
        monthLi.textContent = formatMonthKeyRu(`${year}-${month}`);
        list.appendChild(monthLi);
      }

      // сам день
      const dayLi = document.createElement('li');
      dayLi.style.marginLeft = '1rem';
      dayLi.style.marginBottom = '0.2rem';
      dayLi.textContent = `${d.displayDate}: ${text}`;
      list.appendChild(dayLi);
    });

    treeContainer.appendChild(list);
  }



  // 2) ТОЛЬКО НЕДЕЛИ (как раньше)

  function renderAllWeeks() {
    treeContainer.innerHTML = '';

    const weeks = JSON.parse(localStorage.getItem('successDiaryWeeks') || '{}');
    const weekValues = Object.values(weeks);

    if (weekValues.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'Пока нет сохранённых успехов недели.';
      treeContainer.appendChild(p);
      return;
    }

    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.paddingLeft = '0';

    weekValues
      .sort((a, b) => (a.dayIso || '').localeCompare(b.dayIso || ''))
      .forEach(w => {
        const li = document.createElement('li');
        li.style.marginBottom = '0.25rem';
        li.textContent = `${w.from} – ${w.to}: ${w.mainSuccessText || ''}`;
        list.appendChild(li);
      });

    treeContainer.appendChild(list);
  }

  // 3) УРОВНИ (как раньше)

  function renderLevelsView() {
    treeContainer.innerHTML = '';

    const weeks = JSON.parse(localStorage.getItem('successDiaryWeeks') || '{}');
    const months = JSON.parse(localStorage.getItem('successDiaryMonths') || '{}');
    const quarters = JSON.parse(localStorage.getItem('successDiaryQuarters') || '{}');
    const halfYears = JSON.parse(localStorage.getItem('successDiaryHalfYears') || '{}');
    const years = JSON.parse(localStorage.getItem('successDiaryYears') || '{}');
    const twoYears = JSON.parse(localStorage.getItem('successDiaryTwoYears') || '{}');
    const fiveYears = JSON.parse(localStorage.getItem('successDiaryFiveYears') || '{}');
    const sevenYears = JSON.parse(localStorage.getItem('successDiarySevenYears') || '{}');
    const tenYears = JSON.parse(localStorage.getItem('successDiaryTenYears') || '{}');

    function createSection(title) {
      const wrap = document.createElement('div');
      wrap.style.marginBottom = '1.5rem';

      const h = document.createElement('h3');
      h.textContent = title;
      h.style.fontSize = '1rem';
      h.style.marginBottom = '0.5rem';
      wrap.appendChild(h);

      const list = document.createElement('ul');
      list.style.listStyle = 'none';
      list.style.paddingLeft = '0';
      list.style.margin = '0';
      wrap.appendChild(list);

      treeContainer.appendChild(wrap);
      return list;
    }

    const weekValues = Object.values(weeks);
    if (weekValues.length > 0) {
      const list = createSection('Уровень недели (выбранные успехи недели)');
      weekValues
        .sort((a, b) => (a.dayIso || '').localeCompare(b.dayIso || ''))
        .slice(-4)
        .forEach(w => {
          const li = document.createElement('li');
          li.textContent = `${w.from} – ${w.to}: ${w.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    const monthValues = Object.values(months);
    if (monthValues.length > 0) {
      const list = createSection('Уровень месяца (выбранные успехи месяца)');
      monthValues
        .sort((a, b) => a.monthKey.localeCompare(b.monthKey))
        .forEach(m => {
          const li = document.createElement('li');
          li.textContent = `${formatMonthKeyRu(m.monthKey)}: ${m.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    const quarterValues = Object.values(quarters);
    if (quarterValues.length > 0) {
      const list = createSection('Уровень квартала');
      quarterValues
        .sort((a, b) => a.quarterKey.localeCompare(b.quarterKey))
        .forEach(q => {
          const li = document.createElement('li');
          li.textContent = `${q.quarterKey}: ${q.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    const halfValues = Object.values(halfYears);
    if (halfValues.length > 0) {
      const list = createSection('Уровень полугодия');
      halfValues
        .sort((a, b) => a.halfYearKey.localeCompare(b.halfYearKey))
        .forEach(h => {
          const li = document.createElement('li');
          li.textContent = `${h.halfYearKey}: ${h.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    const yearValues = Object.values(years);
    if (yearValues.length > 0) {
      const list = createSection('Уровень года');
      yearValues
        .sort((a, b) => a.yearKey.localeCompare(b.yearKey))
        .forEach(y => {
          const li = document.createElement('li');
          li.textContent = `${y.yearKey}: ${y.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    function addRangeSection(title, obj, keyField) {
      const values = Object.values(obj);
      if (values.length === 0) return;
      const list = createSection(title);
      values
        .sort((a, b) => (a[keyField] || '').localeCompare(b[keyField] || ''))
        .forEach(r => {
          const key = r[keyField] || '';
          const li = document.createElement('li');
          li.textContent = `${key}: ${r.mainSuccessText || ''}`;
          list.appendChild(li);
        });
    }

    addRangeSection('Уровень 2 лет', twoYears, 'pairKey');
    addRangeSection('Уровень 5 лет', fiveYears, 'rangeKey');
    addRangeSection('Уровень 7 лет', sevenYears, 'rangeKey');
    addRangeSection('Уровень 10 лет', tenYears, 'rangeKey');

    if (!treeContainer.children.length) {
      const p = document.createElement('p');
      p.textContent = 'Пока нет выбранных успехов на уровнях недели, месяца и выше.';
      treeContainer.appendChild(p);
    }
  }

  function rebuildTreeByMode() {
    const selected = Array.from(treeModeRadios).find(r => r.checked);
    if (!selected) return;
    if (selected.value === 'all') {
      renderAllSuccessesTree();
    } else if (selected.value === 'all-weeks') {
      renderAllWeeks();
    } else {
      renderLevelsView();
    }
  }

  if (treeModeRadios && treeModeRadios.length > 0) {
    treeModeRadios.forEach(radio => {
      radio.addEventListener('change', rebuildTreeByMode);
    });
  }

  const tabTree = document.querySelector('.tab[data-view="tree"]');
  if (tabTree) {
    tabTree.addEventListener('click', () => {
      rebuildTreeByMode();
    });
  }
    // ===== PWA: регистрация service worker =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/success-diary/service-worker.js');
  });
}


});
