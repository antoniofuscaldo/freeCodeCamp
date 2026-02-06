/**

2026 Winter Games Day 1: Opening Day

Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:

Country	Code	Flag
Albania	"AL"	"🇦🇱"
Andorra	"AD"	"🇦🇩"
Argentina	"AR"	"🇦🇷"
Armenia	"AM"	"🇦🇲"
Australia	"AU"	"🇦🇺"
Austria	"AT"	"🇦🇹"
Azerbaijan	"AZ"	"🇦🇿"
Belgium	"BE"	"🇧🇪"
Benin	"BJ"	"🇧🇯"
Bolivia	"BO"	"🇧🇴"
Bosnia and Herzegovina	"BA"	"🇧🇦"
Brazil	"BR"	"🇧🇷"
Bulgaria	"BG"	"🇧🇬"
Canada	"CA"	"🇨🇦"
Chile	"CL"	"🇨🇱"
China	"CN"	"🇨🇳"
Colombia	"CO"	"🇨🇴"
Croatia	"HR"	"🇭🇷"
Cyprus	"CY"	"🇨🇾"
Czech Republic	"CZ"	"🇨🇿"
Denmark	"DK"	"🇩🇰"
Ecuador	"EC"	"🇪🇨"
Eritrea	"ER"	"🇪🇷"
Estonia	"EE"	"🇪🇪"
Finland	"FI"	"🇫🇮"
France	"FR"	"🇫🇷"
Georgia	"GE"	"🇬🇪"
Germany	"DE"	"🇩🇪"
Great Britain	"GB"	"🇬🇧"
Greece	"GR"	"🇬🇷"
Guinea-Bissau	"GW"	"🇬🇼"
Haiti	"HT"	"🇭🇹"
Hong Kong	"HK"	"🇭🇰"
Hungary	"HU"	"🇭🇺"
Iceland	"IS"	"🇮🇸"
India	"IN"	"🇮🇳"
Iran	"IR"	"🇮🇷"
Ireland	"IE"	"🇮🇪"
Israel	"IL"	"🇮🇱"
Italy	"IT"	"🇮🇹"
Jamaica	"JM"	"🇯🇲"
Japan	"JP"	"🇯🇵"
Kazakhstan	"KZ"	"🇰🇿"
Kenya	"KE"	"🇰🇪"
Kosovo	"XK"	"🇽🇰"
Kyrgyzstan	"KG"	"🇰🇬"
Latvia	"LV"	"🇱🇻"
Lebanon	"LB"	"🇱🇧"
Liechtenstein	"LI"	"🇱🇮"
Lithuania	"LT"	"🇱🇹"
Luxembourg	"LU"	"🇱🇺"
Madagascar	"MG"	"🇲🇬"
Malaysia	"MY"	"🇲🇾"
Malta	"MT"	"🇲🇹"
Mexico	"MX"	"🇲🇽"
Moldova	"MD"	"🇲🇩"
Monaco	"MC"	"🇲🇨"
Mongolia	"MN"	"🇲🇳"
Montenegro	"ME"	"🇲🇪"
Morocco	"MA"	"🇲🇦"
Netherlands	"NL"	"🇳🇱"
New Zealand	"NZ"	"🇳🇿"
Nigeria	"NG"	"🇳🇬"
North Macedonia	"MK"	"🇲🇰"
Norway	"NO"	"🇳🇴"
Pakistan	"PK"	"🇵🇰"
Philippines	"PH"	"🇵🇭"
Poland	"PL"	"🇵🇱"
Portugal	"PT"	"🇵🇹"
Puerto Rico	"PR"	"🇵🇷"
Romania	"RO"	"🇷🇴"
San Marino	"SM"	"🇸🇲"
Saudi Arabia	"SA"	"🇸🇦"
Serbia	"RS"	"🇷🇸"
Singapore	"SG"	"🇸🇬"
Slovakia	"SK"	"🇸🇰"
Slovenia	"SI"	"🇸🇮"
South Africa	"ZA"	"🇿🇦"
South Korea	"KR"	"🇰🇷"
Spain	"ES"	"🇪🇸"
Sweden	"SE"	"🇸🇪"
Switzerland	"CH"	"🇨🇭"
Thailand	"TH"	"🇹🇭"
Trinidad & Tobago	"TT"	"🇹🇹"
Turkey	"TR"	"🇹🇷"
Ukraine	"UA"	"🇺🇦"
United Arab Emirates	"AE"	"🇦🇪"
United States	"US"	"🇺🇸"
Uruguay	"UY"	"🇺🇾"
Uzbekistan	"UZ"	"🇺🇿"
Venezuela	"VE"	"🇻🇪"

*/

function getFlag(code) {
  const flags = {
    AL: '🇦🇱',
    AD: '🇦🇩',
    AR: '🇦🇷',
    AM: '🇦🇲',
    AU: '🇦🇺',
    AT: '🇦🇹',
    AZ: '🇦🇿',
    BE: '🇧🇪',
    BJ: '🇧🇯',
    BO: '🇧🇴',
    BA: '🇧🇦',
    BR: '🇧🇷',
    BG: '🇧🇬',
    CA: '🇨🇦',
    CL: '🇨🇱',
    CN: '🇨🇳',
    CO: '🇨🇴',
    HR: '🇭🇷',
    CY: '🇨🇾',
    CZ: '🇨🇿',
    DK: '🇩🇰',
    EC: '🇪🇨',
    ER: '🇪🇷',
    EE: '🇪🇪',
    FI: '🇫🇮',
    FR: '🇫🇷',
    GE: '🇬🇪',
    DE: '🇩🇪',
    GB: '🇬🇧',
    GR: '🇬🇷',
    GW: '🇬🇼',
    HT: '🇭🇹',
    HK: '🇭🇰',
    HU: '🇭🇺',
    IS: '🇮🇸',
    IN: '🇮🇳',
    IR: '🇮🇷',
    IE: '🇮🇪',
    IL: '🇮🇱',
    IT: '🇮🇹',
    JM: '🇯🇲',
    JP: '🇯🇵',
    KZ: '🇰🇿',
    KE: '🇰🇪',
    XK: '🇽🇰',
    KG: '🇰🇬',
    LV: '🇱🇻',
    LB: '🇱🇧',
    LI: '🇱🇮',
    LT: '🇱🇹',
    LU: '🇱🇺',
    MG: '🇲🇬',
    MY: '🇲🇾',
    MT: '🇲🇹',
    MX: '🇲🇽',
    MD: '🇲🇩',
    MC: '🇲🇨',
    MN: '🇲🇳',
    ME: '🇲🇪',
    MA: '🇲🇦',
    NL: '🇳🇱',
    NZ: '🇳🇿',
    NG: '🇳🇬',
    MK: '🇲🇰',
    NO: '🇳🇴',
    PK: '🇵🇰',
    PH: '🇵🇭',
    PL: '🇵🇱',
    PT: '🇵🇹',
    PR: '🇵🇷',
    RO: '🇷🇴',
    SM: '🇸🇲',
    SA: '🇸🇦',
    RS: '🇷🇸',
    SG: '🇸🇬',
    SK: '🇸🇰',
    SI: '🇸🇮',
    ZA: '🇿🇦',
    KR: '🇰🇷',
    ES: '🇪🇸',
    SE: '🇸🇪',
    CH: '🇨🇭',
    TH: '🇹🇭',
    TT: '🇹🇹',
    TR: '🇹🇷',
    UA: '🇺🇦',
    AE: '🇦🇪',
    US: '🇺🇸',
    UY: '🇺🇾',
    UZ: '🇺🇿',
    VE: '🇻🇪',
  };

  return flags[code] || '';
}
