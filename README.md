Ожидаем данные с бека:

  mode - "map" (отображение карты) или "logo"(отображение qr-кода)
  imageVersion - для сравнения версий (если версия не изменилась, данные на пользователе не обновляются );
  imageBase64 -  сам рисунок;
  timeArrive - время прибытия

  все переменные изменяются в файле CONST.json
  тестовые параметры удалить из кода после успешного продакшена 
  
  вопрос для уточнення по размеру карты -  бек присылает стандартный размер? 
  вариант 1 - вывожу карту в размере, который получил с сервера
  вариант 2 - фиксирую окно с размерами на пользователе и карту изменяю под размер окна (если размеры будут разные, то изменения карты будут заметны) 