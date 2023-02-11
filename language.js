const messages = {
    en: {
      outOfRange: (criteria) => `${criteria} is out of range!`,
      inRange: (criteria) => `${criteria} is within range!`,
      temperature: 'Temperature',
      soc: 'State of Charge',
      chargeRate: 'Charge rate',
      warning: (criteria) => `Approaching ${criteria} limit!`,
    },
    ge: {
      outOfRange: (criteria) => `${criteria} ist außerhalb des Bereichs!`,
      inRange: (criteria) => `${criteria} ist innerhalb des Bereichs!`,
      temperature: 'Temperatur',
      soc: 'Ladezustand',
      chargeRate: 'Ladegeschwindigkeit',
      warning: (criteria) => `Annäherung an die Grenze ${criteria}!`,
    },
    hi: {
        outOfRange: (criteria) => `${criteria} श्रृंखला के बाहर है!`,
        inRange: (criteria) => `${criteria} सीमा के भीतर है!`,
        temperature: 'तापमान',
        soc: 'चार्ज स्थिति',
        chargeRate: 'चार्ज दर',
        warning: (criteria) => `${criteria} सीमा की तरफ!`,
      },
      fr: {
        outOfRange: (criteria) => `${criteria} est en dehors de la plage!`,
        inRange: (criteria) => `${criteria} est dans la plage!`,
        temperature: 'Température',
        soc: 'État de charge',
        chargeRate: 'Taux de charge',
        warning: (criteria) => `Approchez la limite de ${criteria}!`,
      },
      ja: {
        outOfRange: (criteria) => `${criteria}は範囲外です！`,
        inRange: (criteria) => `${criteria}は範囲内です！`,
        temperature: '温度',
        soc: '充電状態',
        chargeRate: '充電率',
        warning: (criteria) => `${criteria}制限に近づいています！`,
      },
      kn: {
        outOfRange: (criteria) => `${criteria} ರೀತಿಯಲ್ಲಿ ಹೊಂದಿದೆ!`,
        inRange: (criteria) => `${criteria} ವಿವಿಧವಲ್ಲಿ ಹೊಂದಿದೆ!`,
        temperature: 'ತಾಪಮಾನ',
        soc: 'ರಿಚರ್ಜ್ ಸ್ಥಿತಿ',
        chargeRate: 'ರಿಚರ್ಜ್ ದರ',
        warning: (criteria) => `${criteria} ಸಿಮೆಟ್ ಬಂದಲು!`,
      },

  };
const lang= 'en';

module.exports=messages[lang];