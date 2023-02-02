export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;

  if (req) {
    console.log(req);
  }
  res.status(200).json({ name: 'Hello, world!' });
};
