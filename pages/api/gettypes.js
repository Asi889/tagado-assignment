// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const types = [
    { type: 1, terms: ['bug', 'book', 'cart'] },
    { type: 2, terms: ['bug2', 'book2', 'cart2'] }
  ]

  res.send(types)
}