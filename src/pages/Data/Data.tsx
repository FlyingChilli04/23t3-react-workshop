let data = [
  {
    id: 1,
    description: 'Finish physics 1A lecs',
  },
  {
    id: 2,
    description: 'Finish editing video',
  },
  {
    id: 3,
    description: 'Touch grass',
  }
]

function getData() {
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData: any) {
  data = newData;
}

export { getData, setData };