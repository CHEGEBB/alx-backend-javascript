export default function getFullResponseFromAPI(success) {
  const boolean = success;
  const promise = new Promise((resolve, reject) => {
    if (boolean) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return promise;
}
