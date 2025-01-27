export function getIntroByLanguage(language : string) {
  switch (language) {
    case "ro":
      return '/ru/videos/intro-ro.mp4';
    case "ru":
      return '/ru/videos/intro-ru.mp4';
    default:
      return '/en/videos/intro-en.mp4';
  }
}

export function getIntroByLanguageMobile(language : string) {
  switch (language) {
    case "ro":
      return 'ro/videos/intro-ro.mp4';
    case "ru":
      return 'ru/videos/intro-ru.mp4';
    default:
      return 'en/videos/intro-en.mp4';
  }
}

export function getRoadMapByLanguage(language : string) {
  switch (language) {
    case "ru":
      return "/icons/road-map-ru.svg";
    case "ro":
      return "/icons/road-map-ro.svg";
    default:
      return "/icons/road-map-en.svg";
  }
}
