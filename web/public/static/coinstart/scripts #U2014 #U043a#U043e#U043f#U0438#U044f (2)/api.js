var api = {
    "fromUniquePaySystems": [
      2,
      106,
      5,
      87,
      7,
      58,
      126,
      15,
      93,
      94,
      48,
      18,
      95,
      17,
      97,
      88,
      90,
      96,
      89,
      8,
      35,
      33,
      32,
      34,
      37,
      73,
      77,
      132,
      107,
      74,
      4,
      85,
      6,
      55,
      110,
      57,
      105,
      113,
      129,
      40,
      131,
      115,
      44,
      26,
      27,
      28,
      29,
      30,
      31,
      68,
      75,
      13,
      14,
      46,
      19,
      20,
      65,
      66,
      22,
      23,
      38,
      41,
      42,
      43,
      54,
      62,
      63,
      49,
      50,
      51,
      52,
      53,
      21,
      59,
      60,
      67,
      69,
      70,
      76,
      82,
      83,
      84,
      98,
      99,
      100,
      101,
      102,
      104,
      111,
      114
    ],
    "currentWay": [
      5,
      4
    ],
    "toDirections": [
      5,
      87,
      7,
      58,
      126,
      48,
      8,
      77,
      132,
      107,
      74,
      4,
      85,
      6,
      55,
      110,
      57,
      125,
      105,
      113,
      129,
      40,
      130,
      131,
      115,
      44,
      26,
      27,
      28,
      29,
      30,
      31,
      68,
      75,
      13,
      14,
      46,
      19,
      20,
      65,
      66,
      22,
      23,
      38,
      41,
      42,
      59,
      60,
      67,
      69,
      70,
      76,
      82,
      83,
      84,
      98,
      99,
      100,
      101,
      102,
      104,
      111,
      114,
      117,
      118,
      119,
      120,
      121,
      122,
      134,
      135,
      160
    ],
    "paySystems": [
      {
        "name_ru": "Сбербанк RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": 1,
        "name_en": null,
        "id": 2,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/sberbank-color.svg",
        "logoWhite": "pslogo/sberbank-white.svg",
        "logoWithoutBackground": "pslogo/sberbank.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 2,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Сбербанка (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Сбербанка (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 3,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 2,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Bitcoin",
        "network": 1,
        "notify_in_ru": "В целях безопасности и получения платежа сервис CoinStart требует 2  подтверждения транзакции отправителя от сети Bitcoin. Процесс подтверждения транзакции может занять некоторое время.",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 8,
        "group": 2,
        "name_en": null,
        "id": 5,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/bitcoin-color.svg",
        "logoWhite": "pslogo/bitcoin-white.svg",
        "logoWithoutBackground": "pslogo/bitcoin.svg",
        "currency": "btc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Bitcoin кошелёк от 28 до 100 символов",
            "type": "T",
            "id": 5,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 5,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Bitcoin (BEP20)",
        "network": 2,
        "notify_in_ru": "Убедитесь в правильности выбора сети.\r\nСеть выбранная Вами BEP20.",
        "notify_to_en": null,
        "notify_to_ru": "Убедитесь в правильности выбора сети.\r\nСеть выбранная Вами BEP20.",
        "round": 8,
        "group": 2,
        "name_en": null,
        "id": 87,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/bitcoin-color_roaAtSz_JbfaFau.svg",
        "logoWhite": "pslogo/bitcoin-white_1YJI5lU.svg",
        "logoWithoutBackground": "pslogo/bitcoin_wpUSsOS_mRuv3o6.svg",
        "currency": "btc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Bitcoin BEP20 кошелёк",
            "type": "T",
            "id": 99,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 87,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Litecoin",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 7,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/litecoin-color.svg",
        "logoWhite": "pslogo/litecoin-white.svg",
        "logoWithoutBackground": "pslogo/litecoin.svg",
        "currency": "ltc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Litecoin от 30 до 50 символов",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Litecoin от 30 до 50 символов",
            "type": "T",
            "id": 23,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 7,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Binance Coin (BEP20)",
        "network": null,
        "notify_in_ru": "Пожалуйста, будьте внимательны, Вы выбрали направление Binance Coin (BNB) сети BEP20 (BSC). Отправка иной криптовалюты на данный адрес или же отправка средств на данный адрес иной сетью приведет к потере средств.",
        "notify_to_en": null,
        "notify_to_ru": "Пожалуйста, убедитесь в том что Ваш кошелек работает в сети BEP20 (BSC). В случае, если Ваш кошелек работает в иной сети, средства могут быть утрачены.",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 58,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-3.svg",
        "logoWhite": "pslogo/2-3_85V1Uee.svg",
        "logoWithoutBackground": "pslogo/1-3_0ay2FJL.svg",
        "currency": "bnb",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Binance Coin кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Binance Coin кошелёк",
            "type": "T",
            "id": 64,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 58,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Binance Coin (BEP2)",
        "network": null,
        "notify_in_ru": "Пожалуйста, будьте внимательны, Вы выбрали направление Binance Coin (BNB) сети BEP2. Отправка иной криптовалюты на данный адрес или же отправка средств на данный адрес иной сетью приведет к потере средств.",
        "notify_to_en": null,
        "notify_to_ru": "Пожалуйста, убедитесь в том что Ваш кошелек работает в сети BEP2. В случае, если Ваш кошелек работает в иной сети, средства могут быть утрачены.",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 126,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-3_RdyiNMV.svg",
        "logoWhite": "pslogo/2-3_85V1Uee_cDU5mUP.svg",
        "logoWithoutBackground": "pslogo/1-3_0ay2FJL_fPyLPAh.svg",
        "currency": "bnb",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 126,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Binance Coin кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Binance Coin кошелёк",
            "type": "T",
            "id": 64,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 126,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Альфа банк  RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": 5,
        "name_en": null,
        "id": 15,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/alfa-color.svg",
        "logoWhite": "pslogo/alfa-white.svg",
        "logoWithoutBackground": "pslogo/alfa.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 15,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты Альфа банка (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты Альфа банка (без пробелов)",
            "type": "T",
            "id": 4,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 15,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Хоум Кредит",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 93,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/home_credit-color.svg",
        "logoWhite": "pslogo/home_credit-white.svg",
        "logoWithoutBackground": "pslogo/home-credit.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 93,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Хоум Кредита (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Хоум Кредита (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 101,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 93,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Почта банк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 94,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/pochta_bank-color.svg",
        "logoWhite": "pslogo/pochta_bank-white.svg",
        "logoWithoutBackground": "pslogo/pochta_bank.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 94,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Почта банка (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Почта банка (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 102,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 94,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Юmoney (Я.деньги)",
        "network": null,
        "notify_in_ru": "Для оплаты заявки Вам необходимо отправить средства с Вашего кошелька ЮMoney на реквизиты карты, выданные Вам в строке \"номер карты\". После совершения оплаты не забудьте нажать на кнопку \"Я оплатил\".",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 48,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-146.svg",
        "logoWhite": "pslogo/0-148.svg",
        "logoWithoutBackground": "pslogo/0-147.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Номер кошелька Юmoney",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер кошелька Юmoney",
            "type": "T",
            "id": 53,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 48,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Тинькофф",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 18,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/tinkoff-color.svg",
        "logoWhite": "pslogo/tinkoff-white.svg",
        "logoWithoutBackground": "pslogo/tinkoff.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 18,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Тинькофф (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Тинькофф (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 16,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 18,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "МТС Банк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 95,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/mts_bank-color.svg",
        "logoWhite": "pslogo/mts_bank-white.svg",
        "logoWithoutBackground": "pslogo/mts_bank.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 95,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта МТС банк (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта МТС банк (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 107,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 95,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ВТБ",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 16,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_vtb.svg",
        "logoWhite": "pslogo/2-4_vtb.svg",
        "logoWithoutBackground": "pslogo/1-4_vtb.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 16,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта ВТБ (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта ВТБ (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 18,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 16,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Visa/MC RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 17,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/v-mc-color.svg",
        "logoWhite": "pslogo/v-mc-white.svg",
        "logoWithoutBackground": "pslogo/v-mc.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 17,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 20,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 17,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Мобильная связь РФ",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 97,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/mobile-color.svg",
        "logoWhite": "pslogo/mobile-white.svg",
        "logoWithoutBackground": "pslogo/mobile.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Номер телефона",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер телефона",
            "type": "P",
            "id": 57,
            "alias": "phone",
            "placeholder_to_en": null,
            "bank": 97,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Райффайзенбанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 88,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/raiffaizenbank-color.svg",
        "logoWhite": "pslogo/raiffaizenbank-white.svg",
        "logoWithoutBackground": "pslogo/raiffaizenbank.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 88,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Райффайзенбанка (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Райффайзенбанка (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 100,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 88,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Промсвязьбанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 90,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/promsvyazbank-color.svg",
        "logoWhite": "pslogo/promsvyazbank-white.svg",
        "logoWithoutBackground": "pslogo/promsvyazbank.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 90,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Промсвязьбанка (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Промсвязьбанка (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 104,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 90,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Авангард",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 96,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/avangard-color.svg",
        "logoWhite": "pslogo/avangard-white.svg",
        "logoWithoutBackground": "pslogo/avangard.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 96,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Авангард (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Авангард (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 108,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 96,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Открытие",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 89,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/otkrytie-color.svg",
        "logoWhite": "pslogo/otkrytie-white.svg",
        "logoWithoutBackground": "pslogo/otkrytie.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 89,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Открытие (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Открытие (без пробелов), от 16 до 18 цифр",
            "type": "T",
            "id": 103,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 89,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Qiwi RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "В виду особенностей платежной системы, мы отправляем средства исключительно на идентифицированные кошельки Qiwi.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 8,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/qiwi-color.svg",
        "logoWhite": "pslogo/qiwi-white.svg",
        "logoWithoutBackground": "pslogo/qiwi.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек QIWI",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек QIWI",
            "type": "P",
            "id": 9,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 8,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "РНКБ",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 35,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/РНКБ-color.svg",
        "logoWhite": "pslogo/РНКБ-white.svg",
        "logoWithoutBackground": "pslogo/РНКБ_UgGBfIh.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 35,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта РНКБ (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта РНКБ (без пробелов)",
            "type": "N",
            "id": 41,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 35,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Газпромбанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 33,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/газпромбанк-color.svg",
        "logoWhite": "pslogo/газпромбанк-white.svg",
        "logoWithoutBackground": "pslogo/газпромбанк_CiTI1t7.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 33,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Газпромбанка (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Газпромбанка (без пробелов)",
            "type": "N",
            "id": 39,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 33,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Русский стандарт",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 32,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/РСБ-color.svg",
        "logoWhite": "pslogo/РСБ-white.svg",
        "logoWithoutBackground": "pslogo/РСБ_ji284QJ.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 32,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Русского стандарта (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Русского стандарта (без пробелов)",
            "type": "N",
            "id": 38,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 32,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Кукуруза",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 34,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/кукуруза-color.svg",
        "logoWhite": "pslogo/кукуруза-white.svg",
        "logoWithoutBackground": "pslogo/кукуруза_jiSVM9s.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 34,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Кукуруза (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Кукуруза (без пробелов)",
            "type": "N",
            "id": 40,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 34,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "РосБанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 37,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/Росбанк-color.svg",
        "logoWhite": "pslogo/росбанк-white.svg",
        "logoWithoutBackground": "pslogo/росбанк_41Pcx63.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 37,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта РосБанка (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта РосБанка (без пробелов)",
            "type": "N",
            "id": 43,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 37,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Россельхозбанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 73,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-6.svg",
        "logoWhite": "pslogo/2-6.svg",
        "logoWithoutBackground": "pslogo/1-6.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 73,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 73,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Polygon",
        "network": 5,
        "notify_in_ru": "Убедитесь в правильности выбора сети. Вы выбрали сеть Polygon Matic. Отправка средств иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Убедитесь в правильности выбора сети. Вы выбрали сеть Polygon Matic. В случае если Ваш кошелек работает в иной сети чем сеть Polygon Matic - средства будут утеряны.",
        "round": 6,
        "group": 11,
        "name_en": null,
        "id": 77,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-3_ouvzTeo.svg",
        "logoWhite": "pslogo/2-3_VArpriJ.svg",
        "logoWithoutBackground": "pslogo/1-3_prq5mV0_fwVlsr5.svg",
        "currency": "matic",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Polygon",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Polygon",
            "type": "T",
            "id": 88,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 77,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Matic BEP20 (BSC)",
        "network": 2,
        "notify_in_ru": "Убедитесь в правильности выбора сети. Вы выбрали сеть BEP20 (BSC). Отправка средств иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Убедитесь в правильности выбора сети. Вы выбрали сеть BEP20 (BSC). В случае если Ваш кошелек работает в иной сети чем сеть BEP20 (BSC) - средства будут утеряны.",
        "round": 6,
        "group": 11,
        "name_en": null,
        "id": 132,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/DH-white_eALuUBn.svg",
        "logoWhite": "pslogo/2-3_VArpriJ_Hrxp8r3.svg",
        "logoWithoutBackground": "pslogo/1-3_prq5mV0_fwVlsr5_IcOk6L9.svg",
        "currency": "matic",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Matic BEP20 (BSC)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Matic BEP20 (BSC)",
            "type": "T",
            "id": 145,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 132,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "TON Coin",
        "network": null,
        "notify_in_ru": "Обратите внимание на то, что мы принимаем TON Coin классической сетью TON Network. Отправка TON Coin иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на то, что мы отправляем TON Coin классической сетью TON Network. Если Ваш кошелек TON Coin использует иную сеть, отправка TON Coin на Ваш кошелек может привести к утере средств.",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 107,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_TON.svg",
        "logoWhite": "pslogo/2-4_TON.svg",
        "logoWithoutBackground": "pslogo/1-4_TON.svg",
        "currency": "ton",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 107,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "TON Coin кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "TON Coin кошелёк",
            "type": "T",
            "id": 119,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 107,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Solana",
        "network": null,
        "notify_in_ru": "Обратите внимание на то, что мы принимаем Solana классической сетью Sola. Отправка Solana иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на то, что мы отправляем Solana классической сетью Sola. Если Ваш кошелек классической сетью Solana использует иную сеть, отправка Solana на Ваш кошелек может привести к утере средств.",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 74,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/soalana.svg",
        "logoWhite": "pslogo/solana_white.svg",
        "logoWithoutBackground": "pslogo/solana_simple.svg",
        "currency": "sol",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Solana",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Solana",
            "type": "T",
            "id": 83,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 74,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ethereum (ERC20)",
        "network": null,
        "notify_in_ru": "Мы не принимаем и не отправляем средства на контрактные адреса.",
        "notify_to_en": "",
        "notify_to_ru": "Мы не принимаем и не отправляем средства на контрактные адреса.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 4,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/ethereum-color.svg",
        "logoWhite": "pslogo/ethereum-white.svg",
        "logoWithoutBackground": "pslogo/ethereum.svg",
        "currency": "eth",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Etherium кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Etherium кошелёк",
            "type": "T",
            "id": 7,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 4,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 4,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ethereum (BEP20)",
        "network": null,
        "notify_in_ru": "Вы выбрали сеть BEP2. Пожалуйста, убедитесь что Вы выбрали верную сеть. В случае отправки средств на данный кошелек сетью ERC20, Ваши средства могут быть утеряны. Мы не принимаем и не отправляем средства на контрактные адреса.",
        "notify_to_en": "",
        "notify_to_ru": "Мы не принимаем и не отправляем средства на контрактные адреса. Пожалуйста убедитесь в том что Вы выбрали верную сеть ETH. В случае не правильного выбора сети средства будут утеряны.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 85,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/ethereum-color_j1ALuL7_sd8tH83.svg",
        "logoWhite": "pslogo/ethereum-white_lUiIKnk.svg",
        "logoWithoutBackground": "pslogo/ethereum_LBlUtVe_0JXjEgO.svg",
        "currency": "eth",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Etherium кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Etherium кошелёк",
            "type": "T",
            "id": 7,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 85,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 85,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Выберите сеть:BEP2",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Выберите сеть:BEP2",
            "type": "R",
            "id": 79,
            "alias": "network",
            "placeholder_to_en": null,
            "bank": 85,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ethereum Classic",
        "network": null,
        "notify_in_ru": "Мы используем классическую сеть Ethereum Classic.",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем классическую сеть Ethereum Classic.",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 6,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/ether-classic-color.svg",
        "logoWhite": "pslogo/ether-classic-white.svg",
        "logoWithoutBackground": "pslogo/ether-classic.svg",
        "currency": "etc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Ethereum Classic",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Ethereum Classic",
            "type": "T",
            "id": 22,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 6,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tether USDT (TRC20)",
        "network": 3,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 55,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4.svg",
        "logoWhite": "pslogo/2-4.svg",
        "logoWithoutBackground": "pslogo/1-4.svg",
        "currency": "usdt",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Tether (TRC20)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Tether (TRC20)",
            "type": "T",
            "id": 59,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 55,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tether USDT (BEP20)",
        "network": 2,
        "notify_in_ru": "Будьте внимательны, Вы выбрали сеть Tether USDT BEP20. Отправка другой валюты на данный адрес приведет к потере средств.",
        "notify_to_en": null,
        "notify_to_ru": "Вы выбрали направление Tether USDT BEP20. Пожалуйста, убедитесь в правильности выбора сети.",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 110,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_yl0QVSU.svg",
        "logoWhite": "pslogo/2-4_5nKNnFE.svg",
        "logoWithoutBackground": "pslogo/1-4_STTihj0.svg",
        "currency": "usdt",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Tether (BEP20)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Tether (BEP20)",
            "type": "T",
            "id": 136,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 110,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tether USDT (ERC20)",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 57,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-2.svg",
        "logoWhite": "pslogo/2-2.svg",
        "logoWithoutBackground": "pslogo/1-2.svg",
        "currency": "usdt",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Tether (ERC20)",
            "type": "T",
            "id": 61,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 57,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tether USDT (SOL)",
        "network": null,
        "notify_in_ru": "Будьте внимательны, Вы выбрали сеть Tether USDT SOL. Отправка другой валюты а так же отправка USDT иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": null,
        "notify_to_ru": "Вы выбрали направление Tether USDT SOL. Пожалуйста, убедитесь в правильности выбора сети.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 125,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_yl0QVSU_1.svg",
        "logoWhite": "pslogo/2-4_5nKNnFE_1.svg",
        "logoWithoutBackground": "pslogo/1-4_STTihj0_1.svg",
        "currency": "usdt",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк Tether (SOL)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Tether (SOL)",
            "type": "T",
            "id": 137,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 125,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Binance USD (BEP2)",
        "network": null,
        "notify_in_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 105,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_r5gfLbi.svg",
        "logoWhite": "pslogo/2-4_n4oVhCH.svg",
        "logoWithoutBackground": "pslogo/1-4_0Ua1S4A.svg",
        "currency": "busd",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 105,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Binance USD кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Binance Coin кошелёк",
            "type": "T",
            "id": 118,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 105,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Binance USD (BEP20)",
        "network": null,
        "notify_in_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 106,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_r5gfLbi.svg",
        "logoWhite": "pslogo/2-4_n4oVhCH.svg",
        "logoWithoutBackground": "pslogo/1-4_0Ua1S4A.svg",
        "currency": "busd",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 105,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Binance USD кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Binance Coin кошелёк",
            "type": "T",
            "id": 118,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 105,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "DAI (BEP20)",
        "network": null,
        "notify_in_ru": "Будьте внимательны, мы принимаем DAI сетью BEP20 (BSC). Отправка DAI иной сетью или же отправка иной валюты на выданный Вам кошелек приведет к потере средств.",
        "notify_to_en": null,
        "notify_to_ru": "Мы отправляем DAI сетью BEP20 (BSC).",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 113,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_dai.svg",
        "logoWhite": "pslogo/2-4_dai.svg",
        "logoWithoutBackground": "pslogo/1-4_dai.svg",
        "currency": "dai",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек DAI (BEP20)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек DAI (BEP20)",
            "type": "T",
            "id": 125,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 113,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "USDCoin ERC20 (USDC)",
        "network": 4,
        "notify_in_ru": "Обратите внимание, Вы выбрали сеть USDC ERC20. Отправка USD Coin иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, Вы выбрали сеть USDC ERC20. Пожалуйста, указывайте адрес USC именно в сети ERC20 иначе Ваши средства будут утеряны.",
        "round": 2,
        "group": 10,
        "name_en": null,
        "id": 129,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_usd-coinerc.svg",
        "logoWhite": "pslogo/2-4_usd-coinerc-white.svg",
        "logoWithoutBackground": "pslogo/1-4_usd-coinerc-color.svg",
        "currency": "usdc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "USD Coin адрес",
            "placeholder_in_en": null,
            "placeholder_to_ru": "USD Coin адрес",
            "type": "T",
            "id": 47,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 129,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "USDCoin BEP20 (USDC)",
        "network": 2,
        "notify_in_ru": "Обратите внимание, Вы выбрали сеть USDC BEP20. Отправка USD Coin иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, Вы выбрали сеть USDC BEP20. Пожалуйста, указывайте адрес USC именно в сети BEP20 иначе Ваши средства будут утеряны.",
        "round": 2,
        "group": 10,
        "name_en": null,
        "id": 40,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_usd-coin.svg",
        "logoWhite": "pslogo/2-4_usd-coin-white.svg",
        "logoWithoutBackground": "pslogo/1-4_usd-coin-color.svg",
        "currency": "usdc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "USD Coin адрес",
            "placeholder_in_en": null,
            "placeholder_to_ru": "USD Coin адрес",
            "type": "T",
            "id": 47,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 40,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "USDCoin SOL (USDC)",
        "network": null,
        "notify_in_ru": "Будьте внимательны, Вы выбрали сеть USDCoin (USDC) SOL. Отправка другой валюты а так же отправка USDC иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Вы выбрали направление USDCoin USDC SOL. Пожалуйста, убедитесь в правильности выбора сети.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 130,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_usd-coinSOLA.svg",
        "logoWhite": "pslogo/2-4_usd-coin-whiteSOLA.svg",
        "logoWithoutBackground": "pslogo/1-4_usd-coin-colorSOLA.svg",
        "currency": "usdc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "USDCoin SOL кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "USDCoin SOL кошелёк",
            "type": "T",
            "id": 143,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 130,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "USDCoin TRC20 (USDC)",
        "network": null,
        "notify_in_ru": "Будьте внимательны, Вы выбрали сеть USDCoin (USDC) TRC20 (TRON MAINNET). Отправка другой валюты а так же отправка USDC иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Вы выбрали направление USDCoin USDC TRC20 (TRON MAINNET). Пожалуйста, убедитесь в правильности выбора сети.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 131,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_usd-cointrc20_ntuHPGp.svg",
        "logoWhite": "pslogo/2-4_usd-coin-whitetrc20_6ZUP7Zb.svg",
        "logoWithoutBackground": "pslogo/1-4_usd-coin-colortrc20_lgBP4VD.svg",
        "currency": "usdc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "USDCoin TRC20 кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "USDCoin TRC20 кошелёк",
            "type": "T",
            "id": 144,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 131,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "True USD (BEP20)",
        "network": null,
        "notify_in_ru": "Обратите внимание, мы принимаем True USD(TUSD) сетью BEP20. Пожалуйста, убедитесь в том что Ваш кошелек TUSD работает в сети BEP20. В случае отправки средств иной сетью на данный адрес, средства будут утеряны.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, мы отправляем True USD(TUSD) сетью BEP20. Пожалуйста, убедитесь в том что Ваш кошелек TUSD работает в сети BEP20. В случае неверного выбора сети средства будут утеряны.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 115,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-3_TUSD_hc1U0t1.svg",
        "logoWhite": "pslogo/2-3_TUSD_v1vYCwq.svg",
        "logoWithoutBackground": "pslogo/1-3_TUSD_LsOGBCF.svg",
        "currency": "tusd",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "True USD кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "True USD кошелёк",
            "type": "T",
            "id": 127,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 115,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Cosmos",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 44,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/cosmos-color.svg",
        "logoWhite": "pslogo/cosmos-white.svg",
        "logoWithoutBackground": "pslogo/cosmos_I7wbCN8.svg",
        "currency": "atom",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Cosmos",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Cosmos",
            "type": "T",
            "id": 44,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 44,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 44,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Dash",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 26,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/dash-color.svg",
        "logoWhite": "pslogo/dash-white.svg",
        "logoWithoutBackground": "pslogo/dash_y0Yt1qa.svg",
        "currency": "dash",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Dash кошелёк от 28 до 36 символов",
            "type": "T",
            "id": 27,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 26,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Dogecoin",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 27,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/dogecoin-color.svg",
        "logoWhite": "pslogo/dogecoin-white.svg",
        "logoWithoutBackground": "pslogo/dogecoin_5VlRZWD.svg",
        "currency": "doge",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Dogecoin кошелёк",
            "type": "T",
            "id": 28,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 27,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Monero",
        "network": null,
        "notify_in_ru": "Мы отправляем средства после 5 подтверждений транзакции сетью Monero.",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 28,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/monero-color.svg",
        "logoWhite": "pslogo/monero-white.svg",
        "logoWithoutBackground": "pslogo/monero.svg",
        "currency": "xmr",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Monero кошелёк",
            "type": "T",
            "id": 29,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 28,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tron",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "Мы отправляем Tron исключительно с использованием сети TRC-20",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 29,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/tron-color.svg",
        "logoWhite": "pslogo/tron-white.svg",
        "logoWithoutBackground": "pslogo/tron_Rzq9yqo.svg",
        "currency": "trx",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Tron кошелёк",
            "type": "T",
            "id": 31,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 29,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "XRP",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, из за особенности системы Rippel, первый депозит на Ваш коешлек не может быть менее 20XRP",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 30,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/ripple-color.svg",
        "logoWhite": "pslogo/ripple-white.svg",
        "logoWithoutBackground": "pslogo/ripple_yvgVU8u.svg",
        "currency": "xrp",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "XRP кошелёк",
            "type": "T",
            "id": 32,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 30,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Destination tag, необязательный параметр",
            "type": "T",
            "id": 33,
            "alias": "dt",
            "placeholder_to_en": null,
            "bank": 30,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Zcash",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 7,
        "group": null,
        "name_en": null,
        "id": 31,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/zcash-color.svg",
        "logoWhite": "pslogo/zcash-white.svg",
        "logoWithoutBackground": "pslogo/zcash_j3p40am.svg",
        "currency": "zec",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Zcash кошелёк",
            "type": "T",
            "id": 34,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 31,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "EOS",
        "network": null,
        "notify_in_ru": "Мы используем сеть EOS",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем сеть EOS",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 68,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_qXMsnTr.svg",
        "logoWhite": "pslogo/2-4_EJvQLjn.svg",
        "logoWithoutBackground": "pslogo/1-4_XGelXu6_nd2VF7d.svg",
        "currency": "eos",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 68,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек EOS",
            "type": "T",
            "id": 70,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 68,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Polkadot",
        "network": null,
        "notify_in_ru": "Мы используем классическую сеть Polkadot.\r\nОбратите внимание на то, что первый депозит на вновь созданные кошельки Polkadot, должен составлять не менее 1 DOT.",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем классическую сеть Polkadot.\r\nОбратите внимание на то, что первый депозит на вновь созданные кошельки Polkadot, должен составлять не менее 1 DOT.",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 75,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-9_1IS04nJ.svg",
        "logoWhite": "pslogo/2-9_rAewt10.svg",
        "logoWithoutBackground": "pslogo/1-9_AEXJ6HF.svg",
        "currency": "dot",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 75,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Кошелек Polkadot",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Polkadot",
            "type": "T",
            "id": 86,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 75,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Payeer RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 13,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/payeer-color.svg",
        "logoWhite": "pslogo/payeer-white.svg",
        "logoWithoutBackground": "pslogo/payeer.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Payeer RUB",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Payeer RUB",
            "type": "T",
            "id": 54,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 13,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Payeer USD",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 14,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/payeer-color_50ErZdJ.svg",
        "logoWhite": "pslogo/payeer-white_nBqK6Oo.svg",
        "logoWithoutBackground": "pslogo/payeer_4emUwrV.svg",
        "currency": "usd",
        "currencyFilter": "d",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Payeer USD",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Payeer USD",
            "type": "T",
            "id": 55,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 14,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Payeer EUR",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 46,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/payeer-color_EnYmyja.svg",
        "logoWhite": "pslogo/payeer-white_VtwWDz1.svg",
        "logoWithoutBackground": "pslogo/payeer_ZSfsTwV.svg",
        "currency": "eur",
        "currencyFilter": "e",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Payeer EUR",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Payeer EUR",
            "type": "T",
            "id": 56,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 46,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "AdvCash RUB",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 19,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/advcash-color_yVBagpy.svg",
        "logoWhite": "pslogo/advcash-white.svg",
        "logoWithoutBackground": "pslogo/advcash.svg",
        "currency": "rub",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк AdvCash без пробелов",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк AdvCash без пробелов",
            "type": "T",
            "id": 63,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 19,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "AdvCash USD",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 20,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/advcash-color_kb0LIwz.svg",
        "logoWhite": "pslogo/advcash-white_vJjaVcX.svg",
        "logoWithoutBackground": "pslogo/advcash_699aUDC.svg",
        "currency": "usd",
        "currencyFilter": "d",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк AdvCash без пробелов",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк AdvCash без пробелов",
            "type": "T",
            "id": 62,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 20,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ADVCash EUR",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 65,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/advcash-color_2rjKveK.svg",
        "logoWhite": "pslogo/advcash-white_J61itQw.svg",
        "logoWithoutBackground": "pslogo/advcash_w4WaFls.svg",
        "currency": "eur",
        "currencyFilter": "e",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк AdvCash без пробелов",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк AdvCash без пробелов",
            "type": "T",
            "id": 73,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 65,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ADVCash UAH",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 66,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/advcash-color_LmoCf1m.svg",
        "logoWhite": "pslogo/advcash-white_c5fnV2P.svg",
        "logoWithoutBackground": "pslogo/advcash_Yqdy31w.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк AdvCash без пробелов",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк AdvCash без пробелов",
            "type": "T",
            "id": 74,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 66,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "NEM",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 22,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/nem-color.svg",
        "logoWhite": "pslogo/nem-white.svg",
        "logoWithoutBackground": "pslogo/nem_gKGuEx2.svg",
        "currency": "xem",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Адрес NEM",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Адрес NEM",
            "type": "T",
            "id": 25,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 22,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Message Code (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Message Code (необязательно)",
            "type": "T",
            "id": 26,
            "alias": "code",
            "placeholder_to_en": null,
            "bank": 22,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Tezos",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 23,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/tezos-color.svg",
        "logoWhite": "pslogo/tezos-white.svg",
        "logoWithoutBackground": "pslogo/tezos.svg",
        "currency": "xtz",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Tezos кошелёк",
            "type": "T",
            "id": 37,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 23,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Lisk",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 38,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/lisk-color.svg",
        "logoWhite": "pslogo/lisk-white.svg",
        "logoWithoutBackground": "pslogo/lisk.svg",
        "currency": "lsk",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Lisk",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Lisk",
            "type": "T",
            "id": 45,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 38,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 38,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ICON",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 41,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/ICON-color.svg",
        "logoWhite": "pslogo/ICON-white.svg",
        "logoWithoutBackground": "pslogo/ICON_oXVVoQ3.svg",
        "currency": "icx",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "ICON адрес",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ICON адрес",
            "type": "T",
            "id": 48,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 41,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 41,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "BAT",
        "network": null,
        "notify_in_ru": "Обратите внимание на то, что мы принимаем BAT (Basic Attention Token) сетью ERC-20. Отправка BAT иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на то, что мы отправляем BAT (Basic Attention Token) сетью ERC-20. Если Ваш кошелек BAT использует иную сеть, отправка BAT на Ваш кошелек может привести к утере средств.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 42,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/BAT-color.svg",
        "logoWhite": "pslogo/BAT-white.svg",
        "logoWithoutBackground": "pslogo/BAT_qI2VbC5.svg",
        "currency": "bat",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "BAT адрес",
            "placeholder_in_en": null,
            "placeholder_to_ru": "BAT адрес",
            "type": "T",
            "id": 49,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 42,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 42,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Qtum",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 43,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/qtum-color.svg",
        "logoWhite": "pslogo/qtum-white.svg",
        "logoWithoutBackground": "pslogo/qtum_c8nULMr.svg",
        "currency": "qtum",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Qtum адрес",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Qtum адрес",
            "type": "T",
            "id": 50,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 43,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 43,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Visa/MC UAH",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 54,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/v-mc-color_LUbqkDN.svg",
        "logoWhite": "pslogo/v-mc-white_ipygNjR.svg",
        "logoWithoutBackground": "pslogo/v-mc_aKMiHUS.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 54,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 20,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 54,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Название банка",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Название банка",
            "type": "T",
            "id": 21,
            "alias": "bank",
            "placeholder_to_en": null,
            "bank": 54,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Сбербанк UAH",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 62,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/sberbank-color_IySS3wK.svg",
        "logoWhite": "pslogo/sberbank-white_a0G0frD.svg",
        "logoWithoutBackground": "pslogo/sberbank_CRukkRP.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 62,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 62,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Альфа банк UAH",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 63,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/alfa-color_DSU1kdW.svg",
        "logoWhite": "pslogo/alfa-white_ckULZhM.svg",
        "logoWithoutBackground": "pslogo/alfa_YMnROUd.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 63,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 63,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ПУМБ",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 49,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/5.svg",
        "logoWhite": "pslogo/5.2.svg",
        "logoWithoutBackground": "pslogo/5.1.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 49,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 49,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ощадбанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 50,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/2.svg",
        "logoWhite": "pslogo/2.2.svg",
        "logoWithoutBackground": "pslogo/2.1.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 50,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 50,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "УкрСиббанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 51,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/3.svg",
        "logoWhite": "pslogo/3.2.svg",
        "logoWithoutBackground": "pslogo/3.1_oD8kMYF.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 51,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 51,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Монобанк",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 52,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/4.svg",
        "logoWhite": "pslogo/4.2.svg",
        "logoWithoutBackground": "pslogo/4.1_Bt4OTlr.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 52,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 52,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Privat 24 UAH",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 53,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/1.svg",
        "logoWhite": "pslogo/1.2.svg",
        "logoWithoutBackground": "pslogo/1.1.svg",
        "currency": "uah",
        "currencyFilter": "u",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 53,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов)",
            "type": "N",
            "id": 58,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 53,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Bitcoin Gold",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 21,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/bitcoin-gold-color.svg",
        "logoWhite": "pslogo/bitcoin-gold-white.svg",
        "logoWithoutBackground": "pslogo/bitcoin-gold.svg",
        "currency": "btg",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Bitcoin Gold",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Bitcoin Gold",
            "type": "T",
            "id": 24,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 21,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Bitcoin Cash",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 59,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-1.svg",
        "logoWhite": "pslogo/2-1_DZeZs3l.svg",
        "logoWithoutBackground": "pslogo/1-1_MWOIX6Y.svg",
        "currency": "bch",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Bitcoin Cash",
            "type": "T",
            "id": 66,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 59,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Stellar",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 60,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/stellar-color.svg",
        "logoWhite": "pslogo/stellar-white.svg",
        "logoWithoutBackground": "pslogo/stellar.svg",
        "currency": "xlm",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 60,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Stellar account",
            "type": "T",
            "id": 65,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 60,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Cardano",
        "network": null,
        "notify_in_ru": "Мы используем классическую сеть Cardano - ADA",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем классическую сеть Cardano - ADA.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 67,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-3_O68nrHT.svg",
        "logoWhite": "pslogo/2-3_0Q6LPer.svg",
        "logoWithoutBackground": "pslogo/1-3_6JUD0FN.svg",
        "currency": "ada",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "MEMO (необязательно)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "MEMO (необязательно)",
            "type": "T",
            "id": 51,
            "alias": "memo",
            "placeholder_to_en": null,
            "bank": 67,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Cardano",
            "type": "T",
            "id": 69,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 67,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Uniswap",
        "network": null,
        "notify_in_ru": "Мы используем сеть ERC20",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем сеть ERC20",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 69,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-5_YhjFwVs.svg",
        "logoWhite": "pslogo/2-5_bCp31Kl.svg",
        "logoWithoutBackground": "pslogo/1-5_qYY09a0.svg",
        "currency": "uni",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Uniswap",
            "type": "T",
            "id": 71,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 69,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Bitcoin SV",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 70,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-2_PbReEM1.svg",
        "logoWhite": "pslogo/2-2_Qm6mfNB.svg",
        "logoWithoutBackground": "pslogo/1-2_MhfriCk.svg",
        "currency": "bsv",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "-",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк Bitcoin SV",
            "type": "T",
            "id": 72,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 70,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Wrapped Bitcoin",
        "network": null,
        "notify_in_ru": "Мы используем  сеть  ERC20",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем  сеть  ERC20",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 76,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-2_Kf2x0kY.svg",
        "logoWhite": "pslogo/2-2_FtSyEjt.svg",
        "logoWithoutBackground": "pslogo/1-2_L91kTl1.svg",
        "currency": "wbtc",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Wrapped Bitcoin",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Wrapped Bitcoin",
            "type": "T",
            "id": 87,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 76,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "0x (ERC20)",
        "network": null,
        "notify_in_ru": "Обратите внимание на то, что мы принимаем 0x сетью ERC-20. Отправка 0x иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на то, что мы отправляем 0x сетью ERC-20. Если Ваш кошелек 0x использует иную сеть, отправка 0x на Ваш кошелек может привести к утере средств.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 82,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-1_r42U14Y.svg",
        "logoWhite": "pslogo/2-1_kogS0EQ.svg",
        "logoWithoutBackground": "pslogo/1-1_neo740K_Ak9BdZP.svg",
        "currency": "zrx",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек 0x",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек 0x",
            "type": "T",
            "id": 93,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 82,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "VeChain",
        "network": null,
        "notify_in_ru": "Мы используем классическую сеть VeChain",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем классическую сеть VeChain",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 83,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_RqpSumG.svg",
        "logoWhite": "pslogo/2-4_K8sPLLd.svg",
        "logoWithoutBackground": "pslogo/1-4_xIzTXEo_MwJuNzd.svg",
        "currency": "vet",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек VeChain",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек VeChain",
            "type": "T",
            "id": 94,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 83,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ravencoin",
        "network": null,
        "notify_in_ru": "Мы используем классическую сеть RavenCoin",
        "notify_to_en": "",
        "notify_to_ru": "Мы используем классическую сеть RavenCoin",
        "round": 8,
        "group": null,
        "name_en": null,
        "id": 84,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Ravecoin-color.svg",
        "logoWhite": "pslogo/Ravecoin-white.svg",
        "logoWithoutBackground": "pslogo/ravecoin.svg",
        "currency": "rvn",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелек Ravencoin",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелек Ravencoin",
            "type": "T",
            "id": 111,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 84,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Pancakeswap (BSC)",
        "network": null,
        "notify_in_ru": "Обратите внимание на то, что мы принимаем PancakeSwap сетью BEP-20 (Binance Smart Chain). Отправка PancakeSwap иной сетью на данный адрес приведет к потере средств.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на то, что мы отправляем PancakeSwap сетью BEP-20 (Binance Smart Chain). Если Ваш кошелек PancakeSwap  использует иную сеть, отправка PancakeSwap на Ваш кошелек может привести к утере средств.",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 98,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Pancakeswap-color.svg",
        "logoWhite": "pslogo/Pancakeswap-white.svg",
        "logoWithoutBackground": "pslogo/Pancakeswap.svg",
        "currency": "cake",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "PancakeSwap кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "PancakeSwap кошелёк",
            "type": "T",
            "id": 109,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 98,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Chainlink",
        "network": null,
        "notify_in_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание на выбор сети. В случае не правильного выбора сети средства будут утеряны.",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 99,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Сhainlink-color.svg",
        "logoWhite": "pslogo/Сhainlink-white.svg",
        "logoWithoutBackground": "pslogo/Сhainlink.svg",
        "currency": "link",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Chainlink кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Chainlink кошелёк",
            "type": "T",
            "id": 110,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 99,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Выберите сеть:ERC20,Sola",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Выберите сеть:ERC20,Sola",
            "type": "R",
            "id": 117,
            "alias": "network",
            "placeholder_to_en": null,
            "bank": 99,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Algorand",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 100,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Algorand-color.svg",
        "logoWhite": "pslogo/Algorand-white.svg",
        "logoWithoutBackground": "pslogo/Algorand.svg",
        "currency": "algo",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Algorand кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Algorand кошелёк",
            "type": "T",
            "id": 112,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 100,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Waves",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 4,
        "group": null,
        "name_en": null,
        "id": 101,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Waves-color.svg",
        "logoWhite": "pslogo/Waves-white.svg",
        "logoWithoutBackground": "pslogo/Waves.svg",
        "currency": "waves",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Waves кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Waves кошелёк",
            "type": "T",
            "id": 113,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 101,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Ontology",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 0,
        "group": null,
        "name_en": null,
        "id": 102,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Ontology-color.svg",
        "logoWhite": "pslogo/Ontology-white.svg",
        "logoWithoutBackground": "pslogo/Ontology.svg",
        "currency": "ont",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Ontology кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Ontology кошелёк",
            "type": "T",
            "id": 114,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 102,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Filecoin",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 104,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/Filecoin-color.svg",
        "logoWhite": "pslogo/Filecoin-white.svg",
        "logoWithoutBackground": "pslogo/Filecoin.svg",
        "currency": "fil",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Filecoin кошелёк",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Filecoin кошелёк",
            "type": "T",
            "id": 116,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 104,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "NEAR Protocol",
        "network": null,
        "notify_in_ru": "Мы принимаем NEAR Protocol классической сетью NEAR",
        "notify_to_en": "",
        "notify_to_ru": "Мы отправляем NEAR Protocol классической сетью NEAR",
        "round": 5,
        "group": null,
        "name_en": null,
        "id": 111,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_near.svg",
        "logoWhite": "pslogo/2-4_near.svg",
        "logoWithoutBackground": "pslogo/1-4_near.svg",
        "currency": "near",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "Кошелёк NEAR Protocol",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Кошелёк NEAR Protocol",
            "type": "T",
            "id": 123,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 111,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Avalanche (AVAX)",
        "network": null,
        "notify_in_ru": "Обратите внимание, мы принимаем Avalanche (AVAX) сетью AVAX C-Chain. Пожалуйста, убедитесь в том что Ваш кошелек AVAX работает в сети AVAX C-Chain. В случае отправки средств иной сетью на данный адрес, средства будут утеряны.",
        "notify_to_en": "",
        "notify_to_ru": "Обратите внимание, мы отправляем Avalanche (AVAX) сетью AVAX C-Chain. Пожалуйста, убедитесь в том что Ваш кошелек AVAX работает в сети AVAX C-Chain. В случае неверного выбора сети средства будут утеряны.",
        "round": 6,
        "group": null,
        "name_en": null,
        "id": 114,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-3_ULBus7e.svg",
        "logoWhite": "pslogo/2-3_85V1Uee_wWgE8Wa.svg",
        "logoWithoutBackground": "pslogo/1-3_0ay2FJL_0OsQOSl.svg",
        "currency": "avax",
        "currencyFilter": "c",
        "inputs": [
          {
            "placeholder_in_ru": "AVAX Кошелек C-Chain",
            "placeholder_in_en": null,
            "placeholder_to_ru": "AVAX Кошелек C-Chain",
            "type": "T",
            "id": 126,
            "alias": "wallet",
            "placeholder_to_en": null,
            "bank": 114,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "HalykBank KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 117,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_HALYK.svg",
        "logoWhite": "pslogo/2-4_HALYK.svg",
        "logoWithoutBackground": "pslogo/1-4_HALYK.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 117,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Halyk Bank, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Halyk Bank, от 16 до 18 цифр",
            "type": "N",
            "id": 129,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 117,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Сбербанк KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 118,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/sberbank-color_gcXO5pY.svg",
        "logoWhite": "pslogo/sberbank-white_E7Ow4uA.svg",
        "logoWithoutBackground": "pslogo/sberbank_nC3JAuF.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 118,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Сбербанка, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Сбербанка, от 16 до 18 цифр",
            "type": "N",
            "id": 130,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 118,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "ForteBank KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 119,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_FORTE.svg",
        "logoWhite": "pslogo/2-4_FORTE.svg",
        "logoWithoutBackground": "pslogo/1-4_FORTE.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 119,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Forte Bank , от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Forte Bank , от 16 до 18 цифр",
            "type": "N",
            "id": 131,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 119,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Kaspi Bank KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 120,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_KASPI.svg",
        "logoWhite": "pslogo/2-4_KASPI.svg",
        "logoWithoutBackground": "pslogo/1-4_KASPI.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 120,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Kaspi Bank, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Kaspi Bank, от 16 до 18 цифр",
            "type": "N",
            "id": 132,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 120,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Jusan Bank KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 121,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_Jysan.svg",
        "logoWhite": "pslogo/2-4_Jysan.svg",
        "logoWithoutBackground": "pslogo/1-4_Jysan.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 121,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Карта Jysan Bank, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Jysan Bank, от 16 до 18 цифр",
            "type": "N",
            "id": 133,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 121,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Visa/MasterCard KZT",
        "network": null,
        "notify_in_ru": "Мы принимаем средства с использованием сторонней платежной системы.",
        "notify_to_en": null,
        "notify_to_ru": "Обратите внимание, выплаты происходят с использованием сторонней платежной системы. Чаще всего средства зачисляются моментально, но иногда могут зачисляться в течение часа. В исключительных случаях средства могут зачисляться до 2-х рабочих дней.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 122,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/v-mc-color_yuRLxbz.svg",
        "logoWhite": "pslogo/v-mc-white_BCzFbJk.svg",
        "logoWithoutBackground": "pslogo/v-mc_5xMkpSb.svg",
        "currency": "kzt",
        "currencyFilter": "k",
        "inputs": [
          {
            "placeholder_in_ru": "ФИО отправителя",
            "placeholder_in_en": null,
            "placeholder_to_ru": "ФИО получателя",
            "type": "T",
            "id": 1,
            "alias": "fio",
            "placeholder_to_en": null,
            "bank": 122,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты, от 16 до 18 цифр",
            "type": "N",
            "id": 134,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 122,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "MasterCard EUR",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Мы осуществляем отправку средств в валюте EUR исключительно на карты MASTERCARD стран Евросоюза. Выплаты происходят с использованием сторонней платежной системы. Срок зачисления средств может составлять до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 127,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_VisaMcEur.svg",
        "logoWhite": "pslogo/2-4_VisaMcEur.svg",
        "logoWithoutBackground": "pslogo/1-4_VisaMcEur.svg",
        "currency": "eur",
        "currencyFilter": "e",
        "inputs": [
          {
            "placeholder_in_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Карта Visa/MC (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 20,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 127,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Срок действия карты (месяц)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (месяц)",
            "type": "N",
            "id": 141,
            "alias": "Expire month",
            "placeholder_to_en": null,
            "bank": 127,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Срок действия карты (год)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (год)",
            "type": "N",
            "id": 142,
            "alias": "Expire year",
            "placeholder_to_en": null,
            "bank": 127,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Любой банк EUR",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "Мы осуществляем отправку средств в валюте EUR исключительно на карты MASTERCARD стран Евросоюза. Выплаты происходят с использованием сторонней платежной системы. Срок зачисления средств может составлять до 24 часов.",
        "round": 2,
        "group": null,
        "name_en": null,
        "id": 128,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-4_wireEUR.svg",
        "logoWhite": "pslogo/2-4_wireEUR.svg",
        "logoWithoutBackground": "pslogo/1-4_wireEur.svg",
        "currency": "eur",
        "currencyFilter": "e",
        "inputs": [
          {
            "placeholder_in_ru": "Номер карты, от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты, от 16 до 18 цифр",
            "type": "N",
            "id": 138,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 128,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Срок действия карты (месяц)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (месяц)",
            "type": "N",
            "id": 141,
            "alias": "Expire month",
            "placeholder_to_en": null,
            "bank": 128,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Срок действия карты (год)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (год)",
            "type": "N",
            "id": 142,
            "alias": "Expire year",
            "placeholder_to_en": null,
            "bank": 128,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Карта UZCARD UZS",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 0,
        "group": null,
        "name_en": null,
        "id": 134,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-1_white_eALuUBn.svg",
        "logoWhite": "pslogo/2-3_VArpriJ_vGuK7OZ.svg",
        "logoWithoutBackground": "pslogo/1-3_prq5mV0_fwVlsr5_RRP2taF.svg",
        "currency": "uzs",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Номер карты UZCARD",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты UZCARD",
            "type": "T",
            "id": 148,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 134,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Карта HUMO UZS",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": null,
        "notify_to_ru": "",
        "round": 0,
        "group": null,
        "name_en": null,
        "id": 135,
        "notify_in_en": null,
        "city": null,
        "logoWithBackground": "pslogo/0-1_humo.svg",
        "logoWhite": "pslogo/2-3_humo.svg",
        "logoWithoutBackground": "pslogo/1-3_humo.svg",
        "currency": "uzs",
        "currencyFilter": "r",
        "inputs": [
          {
            "placeholder_in_ru": "Номер карты HUMO",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты HUMO",
            "type": "T",
            "id": 147,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 135,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      },
      {
        "name_ru": "Visa/MasterCard AZN",
        "network": null,
        "notify_in_ru": "",
        "notify_to_en": "",
        "notify_to_ru": "",
        "round": 2,
        "group": null,
        "name_en": "Visa/MasterCard AZN",
        "id": 160,
        "notify_in_en": "",
        "city": null,
        "logoWithBackground": "pslogo/0-4_VisaMcAZN_vJOWhDn.svg",
        "logoWhite": "pslogo/2-4_VisaMcAZN_P3d37yk.svg",
        "logoWithoutBackground": "pslogo/1-4_VisaMcAZN_VxiS4No.svg",
        "currency": "azn",
        "currencyFilter": "a",
        "inputs": [
          {
            "placeholder_in_ru": "Срок действия карты (месяц)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (месяц)",
            "type": "N",
            "id": 141,
            "alias": "Expire month",
            "placeholder_to_en": null,
            "bank": 160,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Срок действия карты (год)",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Срок действия карты (год)",
            "type": "N",
            "id": 142,
            "alias": "Expire year",
            "placeholder_to_en": null,
            "bank": 160,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": false,
            "visibleTo": true
          },
          {
            "placeholder_in_ru": "Номер карты (без пробелов), от 16 до 18 цифр",
            "placeholder_in_en": null,
            "placeholder_to_ru": "Номер карты (без пробелов), от 16 до 18 цифр",
            "type": "N",
            "id": 152,
            "alias": "card",
            "placeholder_to_en": null,
            "bank": 160,
            "headerFrom": "",
            "headerTo": "",
            "visibleFrom": true,
            "visibleTo": true
          }
        ]
      }
    ],
    "waysNotifications": [
      {
        "bank_to": 136,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 155,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 137,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 157,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 139,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 154,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 142,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 156,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 141,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 142,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 142,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 149,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 149,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 145,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 137,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 150,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 153,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 148,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 156,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 147,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 147,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 153,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 145,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 154,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 138,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 148,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 143,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 156,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 136,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 146,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 144,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 140,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 146,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 151,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 152,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 153,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 144,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 136,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 158,
        "notify_way": "Для обмена дирхамов на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 155,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 154,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 151,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 152,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 155,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 139,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 151,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 140,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 157,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 140,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 136,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 145,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 143,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 156,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 153,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 151,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 152,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 152,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 154,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 148,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 155,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 136,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 155,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 155,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 155,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 138,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 148,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 147,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 143,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 141,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 150,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 137,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 141,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 140,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 147,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 144,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 141,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 140,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 140,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 146,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 150,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 143,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 145,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 136,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 158,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на дирхамы следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 142,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 150,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 137,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 152,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 141,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 146,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 137,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 144,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 145,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 148,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 150,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 157,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 151,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 137,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 144,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 153,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 156,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 144,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 139,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 146,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 153,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 158,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 148,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 148,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 150,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 138,
        "notify_way": "Для обмена рублей на  Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 151,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 142,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 142,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 156,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 154,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 150,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 150,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 152,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 154,
        "notify_way": "Для обмена долларов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 144,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 158,
        "notify_way": "Для обмена дирхамов на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 139,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 5,
        "bank_in": 139,
        "notify_way": "Для обмена рублей на Bitcoin следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 145,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 146,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 141,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 147,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 136,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 139,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 143,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 145,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 157,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 143,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 145,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 153,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 158,
        "bank_in": 57,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 154,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 157,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 140,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 144,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 138,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 4,
        "bank_in": 152,
        "notify_way": "Для обмена долларов на Ethereum следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 143,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 142,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 137,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 157,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 152,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 148,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 141,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 149,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 149,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 139,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 154,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 146,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 147,
        "bank_in": 57,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 139,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 141,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 136,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 142,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 149,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 149,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 143,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 140,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 158,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на дирхамы следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 138,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 138,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 55,
        "bank_in": 151,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 138,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 147,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 147,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 155,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 153,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 137,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 158,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 158,
        "bank_in": 55,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 151,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 138,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 156,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 157,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 57,
        "bank_in": 146,
        "notify_way": "Для обмена наличных на USDT следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для согласования времени посещения офиса<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 157,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на рубли следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 149,
        "bank_in": 5,
        "notify_way": "Для обмена Bitcoin на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 149,
        "bank_in": 4,
        "notify_way": "Для обмена Ethereum на доллары следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      },
      {
        "bank_to": 156,
        "bank_in": 55,
        "notify_way": "Для обмена USDT на наличные следуйте алгоритму:<br/>1.Заполните поля с личными данными<br/>2.Нажмите кнопку обменять<br/>3.Напишите в чат по наличным с номером заявки для получения реквизитов для оплаты<br/>4.По любому возникшему вопросу также пишите в чат с номером вашей заявки"
      }
    ],
    "groups": {
      "1": {
        "name_ru": "Сбербанк",
        "name_en": null,
        "id": 1,
        "logoWithBackground": "pslogo/sberbank-color_IjifXLk.svg",
        "logoWhite": "pslogo/sberbank-white_YuWV8x8.svg",
        "logoWithoutBackground": "pslogo/sberbank_d9HDvuA.svg"
      },
      "2": {
        "name_ru": "Bitcoin",
        "name_en": null,
        "id": 2,
        "logoWithBackground": "pslogo/bitcoin-color_9I3F5eK.svg",
        "logoWhite": "pslogo/bitcoin-white_XFXumcI.svg",
        "logoWithoutBackground": "pslogo/bitcoin_7yCjQHQ.svg"
      },
      "3": {
        "name_ru": "AdvCash",
        "name_en": null,
        "id": 3,
        "logoWithBackground": "pslogo/advcash-color_oR04MRZ.svg",
        "logoWhite": "pslogo/advcash-white_7HVPALv.svg",
        "logoWithoutBackground": "pslogo/advcash_7rPKNhd.svg"
      },
      "4": {
        "name_ru": "Payeer",
        "name_en": null,
        "id": 4,
        "logoWithBackground": "pslogo/payeer-color_pwSHc5n.svg",
        "logoWhite": "pslogo/payeer-white_fhE6Ym5.svg",
        "logoWithoutBackground": "pslogo/payeer_JHsK5h2.svg"
      },
      "5": {
        "name_ru": "Альфа банк",
        "name_en": null,
        "id": 5,
        "logoWithBackground": "pslogo/alfa-color_zqvR5wU.svg",
        "logoWhite": "pslogo/alfa-white_wNcDBe0.svg",
        "logoWithoutBackground": "pslogo/alfa_T5sECfU.svg"
      },
      "6": {
        "name_ru": "Visa/MC",
        "name_en": null,
        "id": 6,
        "logoWithBackground": "pslogo/v-mc-color_m3sy5xe.svg",
        "logoWhite": "pslogo/v-mc-white_Md71Pzw.svg",
        "logoWithoutBackground": "pslogo/v-mc_mJUjZD7.svg"
      },
      "7": {
        "name_ru": "BUSD",
        "name_en": null,
        "id": 7,
        "logoWithBackground": "pslogo/0-4_FR1bUpP.svg",
        "logoWhite": "pslogo/2-4_E1DhRoN.svg",
        "logoWithoutBackground": "pslogo/1-4_SNqxiWJ.svg"
      },
      "8": {
        "name_ru": "Tether USDT",
        "name_en": null,
        "id": 8,
        "logoWithBackground": "pslogo/0-4_Squje6J.svg",
        "logoWhite": "pslogo/2-4_UPuEgno.svg",
        "logoWithoutBackground": "pslogo/1-4_Sf16t4K.svg"
      },
      "9": {
        "name_ru": "KZT",
        "name_en": null,
        "id": 9,
        "logoWithBackground": "pslogo/KZT.svg",
        "logoWhite": "pslogo/KZT_o0hbpSM.svg",
        "logoWithoutBackground": "pslogo/KZT_NQgJDdV.svg"
      },
      "10": {
        "name_ru": "USD Coin",
        "name_en": null,
        "id": 10,
        "logoWithBackground": "pslogo/0-4_usd-coinerc_K4fyJDw.svg",
        "logoWhite": "pslogo/2-4_usd-coinerc-white_aPZ7apr.svg",
        "logoWithoutBackground": "pslogo/1-4_usd-coinerc-color_5YO8cGt.svg"
      },
      "11": {
        "name_ru": "Matic",
        "name_en": null,
        "id": 11,
        "logoWithBackground": "pslogo/0-3_ouvzTeo_cXgCzA7.svg",
        "logoWhite": "pslogo/2-3_VArpriJ_LoxZ2vS.svg",
        "logoWithoutBackground": "pslogo/1-3_prq5mV0_fwVlsr5_YQxhvqD.svg"
      },
      "12": {
        "name_ru": "Наличные RUB",
        "name_en": null,
        "id": 12,
        "logoWithBackground": "pslogo/RUB-color_q00OelZ.svg",
        "logoWhite": "pslogo/RUB-white_olb6CNY.svg",
        "logoWithoutBackground": "pslogo/RUB_1vsHmKa_9b2Qcp1.svg"
      },
      "13": {
        "name_ru": "Наличные USD",
        "name_en": null,
        "id": 13,
        "logoWithBackground": "pslogo/USD-color_q00OelZ.svg",
        "logoWhite": "pslogo/USD-white_olb6CNY.svg",
        "logoWithoutBackground": "pslogo/USD_1vsHmKa_8JSw0dM.svg"
      },
      "14": {
        "name_ru": "Наличные AED",
        "name_en": null,
        "id": 14,
        "logoWithBackground": "pslogo/cash_aed.svg",
        "logoWhite": "pslogo/cash_aed_white.svg",
        "logoWithoutBackground": "pslogo/cash_aed_more.svg"
      },
      "15": {
        "name_ru": "Наличные TRY",
        "name_en": "Cash TRY",
        "id": 15,
        "logoWithBackground": "pslogo/TRY-color_q00OelZ.svg",
        "logoWhite": "pslogo/TRY-white_olb6CNY.svg",
        "logoWithoutBackground": "pslogo/TRY_1vsHmKa.svg"
      }
    },
    "networks": {
      "1": {
        "id": 1,
        "name": "BTC",
        "logo": "pslogo/bitcoin_mQmKXvs.svg"
      },
      "2": {
        "id": 2,
        "name": "BEP 20",
        "logo": "pslogo/1-3_0ay2FJL_XH4uCiM.svg"
      },
      "3": {
        "id": 3,
        "name": "TRC 20",
        "logo": "pslogo/trc20.svg"
      },
      "4": {
        "id": 4,
        "name": "ERC 20",
        "logo": ""
      },
      "5": {
        "id": 5,
        "name": "POLYGON",
        "logo": ""
      }
    },
    "cities": {
      "1": {
        "name_ru": "Москва",
        "logo": "",
        "name_en": null,
        "id": 1
      },
      "2": {
        "name_ru": "Санкт-Петербург",
        "logo": "",
        "name_en": null,
        "id": 2
      },
      "3": {
        "name_ru": "Краснодар",
        "logo": "",
        "name_en": null,
        "id": 3
      },
      "4": {
        "name_ru": "Екатеринбург",
        "logo": "",
        "name_en": null,
        "id": 4
      },
      "5": {
        "name_ru": "Сочи",
        "logo": "",
        "name_en": null,
        "id": 5
      },
      "6": {
        "name_ru": "Казань",
        "logo": "",
        "name_en": null,
        "id": 6
      },
      "7": {
        "name_ru": "Ростов-на-Дону",
        "logo": "",
        "name_en": null,
        "id": 7
      },
      "8": {
        "name_ru": "Дубаи",
        "logo": "",
        "name_en": null,
        "id": 8
      },
      "9": {
        "name_ru": "Ереван",
        "logo": "",
        "name_en": null,
        "id": 9
      },
      "10": {
        "name_ru": "Самара",
        "logo": "",
        "name_en": null,
        "id": 10
      },
      "11": {
        "name_ru": "Стамбул",
        "logo": "",
        "name_en": null,
        "id": 11
      },
      "12": {
        "name_ru": "Анталья",
        "logo": "",
        "name_en": null,
        "id": 12
      },
      "13": {
        "name_ru": "Новосибирск",
        "logo": "",
        "name_en": null,
        "id": 13
      }
    }
  };