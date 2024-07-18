## Problem #1:

### You are given a nested object representing a company's organizational structure. Each employee has a unique ID and can have multiple direct subordinates (other employees). The structure is represented as follows:

``` const company = {
  id: 1,
  name: "John Doe",
  role: "CEO",
  subordinates: [
    {
      id: 2,
      name: "Alice Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 3,
          name: "Bob Smith",
          role: "Team Lead",
          subordinates: [
            {
              id: 4,
              name: "Charlie Brown",
              role: "Developer",
              subordinates: [],
            },
            {
              id: 5,
              name: "David Lee",
              role: "Developer",
              subordinates: [],
            },
          ],
        },
        {
          id: 6,
          name: "Eve Taylor",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};


## Example Usage:

## Write a JavaScript function called `countEmployeesByRole` that takes in the company object and returns an object containing the count of employees grouped by their roles. The output object should have keys as role names and values as the count of employees in that role.

Your task is to implement the `countEmployeesByRole` function and provide a test scenario to verify its correctness.


const company = {/*... structure provided above ...*/};
const roleCounts = countEmployeesByRole(company);
console.log(roleCounts);
/* Output:
{
  CEO: 1,
  Manager: 1,
  Team Lead: 2,
  Developer: 2
}
*/

