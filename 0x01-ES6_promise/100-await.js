import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return ({
      photo,
      user,
    });
  } catch (err) {
    return ({
      photo: null,
      user: null,
    });
  }
}
