const API_URL = 'https://norma.nomoreparties.space/api/ingredients'

export const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const getIngredients = () => {
  return fetch(`${API_URL}/ingredients`)
 .then(getResponse)
 .then(data => {
   if (data?.success) return data.data;
   return Promise.reject(data)
 });
};

// const checkResponse = (res) => {
//   return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
//   };

// export const getIngredients = async () => {
//   try {
//     const res = await fetch(API_URL)
//     if (!res.ok) {
//       throw new Error('Ошибка ответа сети');
//     }
//     const data = await res.json();
//     setIngredients(data.data);
//     setIsLoading(true)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }