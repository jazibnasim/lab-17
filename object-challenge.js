// Make only the family member names display


var myInfo = {
  name: 'James',
  age: 36,
  married: true,
  likes: ['Mythbusters', 'Jim Butcher', 'JavaScript'],
  family: [
    {
      name: "Rebecca",
      relation: "spouse"
},
    {
      name: "Evangeline",
      relation: "daughter"
},
    {
      name: "Josephine",
      relation: "daughter"
}, ],
  listFamilyMembers: function() { }
};

//answer 

for (var i=0; i < myInfo.family.length; i++) {

 console.log(myInfo.family[i].name);
}
