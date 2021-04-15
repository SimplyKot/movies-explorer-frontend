const hardCodeMovies = [
  {
    movieId: "1",
    nameRU: "33 слова о дизайне",
    duration: "1ч 42м",
    liked: "true",
    imageUrl:
      "https://images.unsplash.com/photo-1568038508834-60fcf8a66de6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "2",
    nameRU: "Киноальманах «100 лет дизайна»",
    duration: "1ч 42м",
    liked: "true",
    imageUrl:
      "https://images.unsplash.com/photo-1616155942909-caceed8a468b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "3",
    nameRU: "В погоне за Бенкси",
    duration: "1ч42м",
    liked: "false",
    imageUrl:
      "https://images.unsplash.com/photo-1611596665331-8a361a2f7d60?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "4",
    nameRU: "Баския: Взрыв реальности",
    duration: "1ч42м",
    liked: "false",
    imageUrl:
      "https://images.unsplash.com/photo-1615890500629-7fb57b852765?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "5",
    nameRU: "Бег это свобода",
    duration: "1ч42м",
    liked: "true",
    imageUrl:
      "https://images.unsplash.com/photo-1615727040525-e7dbf258ee61?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMHxxUFlzRHp2Sk9ZY3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "6",
    nameRU: "Книготорговцы",
    duration: "1ч42м",
    liked: "false",
    imageUrl:
      "https://images.unsplash.com/photo-1550517627-60281fd14dd1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxxUFlzRHp2Sk9ZY3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    movieId: "7",
    nameRU: "Когда я думаю о Германии ночью",
    duration: "1ч42м",
    liked: "false",
    imageUrl:
      "https://images.unsplash.com/photo-1614235449172-a02681abe54d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNXxxUFlzRHp2Sk9ZY3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const moviesConnectConfig = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

const mainConnectConfig = {
  baseUrl: "https://api.kotomovies.students.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
};

const SHORTMOVIE_DURATION = 40;
const MOVIESDISPLAY_NUMBER = 12;
const MOREDISPLAY_NUMBER = 3;

export {
  hardCodeMovies,
  moviesConnectConfig,
  mainConnectConfig,
  SHORTMOVIE_DURATION,
  MOVIESDISPLAY_NUMBER,
  MOREDISPLAY_NUMBER,
};
