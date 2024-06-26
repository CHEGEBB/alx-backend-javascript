export default function getFullResponseFromApi(success) {
  return ((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',

      });
      reject(new Error('The fake API is not working currently'));
    }
  });
}
