import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => response.map((res) => {
      if (res.status === 'fulfilled') {
        return { status: res.status, value: res.value };
      }
      return { status: res.status, value: `${res.reason}` };
    }));
}
