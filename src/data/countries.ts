export interface Country {
  name: string;
  latitude: number;
  longitude: number;
  emoji: string;
}

export const countries: Country[] = [
  { name: 'España', latitude: 40.463667, longitude: -3.74922, emoji: '🇪🇸' },
  { name: 'Francia', latitude: 46.227638, longitude: 2.213749, emoji: '🇫🇷' },
  { name: 'Italia', latitude: 41.871940, longitude: 12.56738, emoji: '🇮🇹' },
  { name: 'Alemania', latitude: 51.165691, longitude: 10.45154, emoji: '🇩🇪' },
  { name: 'Reino Unido', latitude: 55.378051, longitude: -3.435973, emoji: '🇬🇧' },
  { name: 'Portugal', latitude: 39.399872, longitude: -8.224454, emoji: '🇵🇹' },
  { name: 'Holanda', latitude: 52.132633, longitude: 5.291266, emoji: '🇳🇱' },
  { name: 'Bélgica', latitude: 50.503887, longitude: 4.469936, emoji: '🇧🇪' },
  { name: 'Suiza', latitude: 46.818188, longitude: 8.227512, emoji: '🇨🇭' },
  { name: 'Suecia', latitude: 60.128161, longitude: 18.643501, emoji: '🇸🇪' },
  { name: 'Dinamarca', latitude: 56.26392, longitude: 9.501785, emoji: '🇩🇰' },
  { name: 'Noruega', latitude: 60.472024, longitude: 8.468946, emoji: '🇳🇴' },
  { name: 'Grecia', latitude: 39.074208, longitude: 21.824312, emoji: '🇬🇷' },
  { name: 'Polonia', latitude: 51.919438, longitude: 19.145136, emoji: '🇵🇱' },
  { name: 'República Checa', latitude: 49.817492, longitude: 15.472962, emoji: '🇨🇿' },
  { name: 'Hungría', latitude: 47.162494, longitude: 19.503304, emoji: '🇭🇺' },
  { name: 'Rumania', latitude: 45.943161, longitude: 24.96676, emoji: '🇷🇴' },
  { name: 'Austria', latitude: 47.516231, longitude: 14.550072, emoji: '🇦🇹' },
  { name: 'Turquía', latitude: 38.963745, longitude: 35.243322, emoji: '🇹🇷' },
];