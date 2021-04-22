// techList.js
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) {
    return 'Vazio!';
  }
  const technologyList = arrayTechnologies
    .sort().map((technology) => ({
      tech: technology,
      name,
    }));
  // console.log(technologyList);
  return technologyList;
};

module.exports = techList
