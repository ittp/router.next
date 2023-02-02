// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// fetch("http://192.168.10.1", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
//     "cookie": "TGIAMTGYFEQL=JTNYCCJLGDJCFSKC; HCGDJXGLZDXI=HPBWEPIKYTORSQJQ; sysmode=router",
//     "Referer": "http://192.168.10.1/a",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });

// /rci/show/acme/ndns-domain

export default function handler(req, res) {
  const { pid } = req.query;

  let response = {};
  if (req.query) {
    response = req.query;
  } else {
    response = 'empty';
  }

  res.end(`Response: ${response}`);
}
