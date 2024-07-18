function countEmployeesByRole(company) {
  let roleCounts = {};
  //   console.log(company);
  function subFunction(sub) {
    let role = sub.role;
    // console.log(role)
    // if (!roleCounts[role]){
    //     roleCounts[role] = 1
    // }else{
    //     roleCounts[role] += 1
    // }
    !roleCounts[role] ? (roleCounts[role] = 1) : (roleCounts[role] += 1);

    for (let i of sub.subordinates) {
      // console.log(i)
      subFunction(i);
    }
  }

  subFunction(company);
  return roleCounts;
}

const company = {
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

const testCompany = {
  id: 10,
  name: "Jane Smith",
  role: "CEO",
  subordinates: [
    {
      id: 11,
      name: "Frank Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 12,
          name: "Grace Adams",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};

const roleCounts = countEmployeesByRole(company);
console.log(roleCounts);

const roleCountsForTestCompamy = countEmployeesByRole(testCompany);
console.log(roleCountsForTestCompamy);
