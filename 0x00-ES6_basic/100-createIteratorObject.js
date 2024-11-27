export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeeList = [];

  for (const department of Object.values(allEmployees)) {
    employeeList.push(...department);
  }

  return employeeList[Symbol.iterator]();
}
