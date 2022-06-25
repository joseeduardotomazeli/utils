const persons = [
  { name: 'Mariana' },
  { name: 'Wallace' },
  { name: 'Maria' },
  { name: 'Diego' },
  { name: 'Ana' },
  { name: 'Larissa' },
  { name: 'André' },
  { name: 'José' },
  { name: 'Jose' },
];

const sortPersons = persons.sort((person1, person2) => {
  person1.name.localeCompare(person2.name, 'pt-BR');
});

console.log(sortPersons);

/*
  [
    { name: 'Ana' },
    { name: 'André' },
    { name: 'Diego' },
    { name: 'Jose' },
    { name: 'José' },
    { name: 'Larissa' },
    { name: 'Maria' },
    { name: 'Mariana' },
    { name: 'Wallace' },
  ]
*/
