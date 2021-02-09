const ages = [12,14,16,17];
const ages2 = [15,16,13];
const ages3 = [25,36,22,29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const allAges2 = [ages,ages2,5,ages3];
console.log(allAges2);

const allAges3 = [...ages,...ages2 ,5,...ages3];
console.log(allAges3);

//max 

const business = 650;
const minister = 450;
const shocib = 250;
const maximum = Math.max(business,minister,shocib);
console.log(maximum);

//But
const takaPoisa = [650,450,250];
const max = Math.max(...takaPoisa);
console.log(max);