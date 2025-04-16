import cardValidator from "card-validator";

export function capitalizeFirstWord(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function slugToWords(slug) {
  if (Array.isArray(slug)) {
   const updatedArray = slug?.map((slg)=>(slg).replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()))
    return updatedArray?.join(" , ")
  } else {
    let words = slug?.replace(/-/g, ' ').replace(/_/g, ' ');
  
    words = words?.replace(/\b\w/g, char => char.toUpperCase());
  
    return words;
  }
}
export function capitalizeAllWords(text) {
  if (text) {

    const words = text?.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return capitalizedWords.join(" ");
  } else {
    return text
  }
}

export const isCardNumberValid = (cardNumber) => {
  const numericCardNumber = cardNumber.replace(/\D/g, "");

  let sum = 0;
  let double = false;

  for (let i = numericCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(numericCardNumber.charAt(i), 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
};

export async function getCardBrand(cardNumber) {
  const cardBrand = cardValidator.number(cardNumber).card.type;

  if (cardBrand) {
    return cardBrand;
  } else {
    return null;
  }
}

const cardBrandMapping = {
  visa: {
    countries: "All countries",
    color: "#E4E7F3",
    icons: "/image/visacard.png",
  },
  mastercard: {
    countries: "All countries",
    color: "#F6DFBC",
    icons: "/image/mastercard.png",
  },
  "american-express": {
    countries:
      "All countries except Brazil, Malaysia, Thailand, and the United Arab Emirates",
    color: "#2086c1",
    icons: "/image/modalicon3.png",
  },
  discover: {
    countries:
      "Canada, Japan, United Kingdom, United States, and EEA countries",
    color: "#891731",
    icons: "/image/modalicon4.png",
  },
};

export function getCardInfo(cardBrand) {
  return cardBrandMapping[cardBrand] || { countries: "Unknown", color: "#ccc" };
}

const getRandomInteger2 = () => {
  return Math.floor(Math.random() * 1000);
};

export const getDeviceIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("device_id"));
  }
};

const setDeviceIdToLocalStorage = (deviceId) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("device_id", JSON.stringify(deviceId));
  }
};


const getRandomInteger = () => {
  const min = 10000000; // 8-digit minimum
  const max = 999999999; // 9-digit maximum
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUserIdFromLocalStorage = () => {
  return typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user_id")) : null;
};

export const setUserIdToLocalStorage = () => {
  if (typeof window !== "undefined") {
    const min = 100000000;
    const max = 999999999;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

    localStorage.setItem("user_id", randomInteger.toString());
  }
};


export const useUserId = (usersession) => {
  if (!usersession) {
    const userId = getUserIdFromLocalStorage();
    if (!userId) {
      const randomUserId = getRandomInteger();
      setUserIdToLocalStorage(randomUserId);
      return randomUserId;
    }
    return userId;
  }

  const userId = usersession?.user?.id;
  setUserIdToLocalStorage(userId);
  return userId;
};

const useDeviceId = () => {
  const deviceId = getDeviceIdFromLocalStorage();

  if (!deviceId) {
    const randomDeviceId = getRandomInteger2();
    setDeviceIdToLocalStorage(randomDeviceId);
    return randomDeviceId;
  }

  return deviceId;
};

export { useDeviceId };


export function makeProductReview(slug) {
  
  const min = 500;
  const max = 1000;
  
  const fixedNumber = min + (slug.length % (max - min + 1));

  return fixedNumber;
}


export const excludedPaths = ["/unavailable", '/boxes-compaign/[id]', '/404',
  '/political-campaign-supplies', '/political-campaign-supplies/[id]'
];

export const euMemberStates = [
  "GB",
  "AU",
  "CA",
  "US",
  "RU",
  "AT", // Austria
  "BE", // Belgium
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czechia
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IE", // Ireland
  "IT", // Italy
  "LV", // Latvia
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "NL", // Netherlands
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE"  // Sweden
]
