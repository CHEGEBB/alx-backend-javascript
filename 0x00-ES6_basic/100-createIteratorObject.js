export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];
  for (const [, value] of Object.entries(allEmployees)) {
    employees.push(...value);
  }
  return employees;
}
