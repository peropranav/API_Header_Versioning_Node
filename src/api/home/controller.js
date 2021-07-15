export const addData_v1 = async (req, res) => {
  console.log('Ok v1');
  res.status(200).send('ok v1');
};

export const addData_v2 = async (req, res) => {
  res.status(200).send('ok v2');
};
