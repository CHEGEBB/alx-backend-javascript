import GetList from './0-get_list_students';

export default function getListStudentIds(GetList) {
  return GetList().map((student) => student.id);
}
