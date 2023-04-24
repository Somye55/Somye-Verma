const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Ad = require('./models/Ad')
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ads', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/ads', async (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword)
  const ads = await Ad.aggregate([
    {
      $match: {
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { primaryText: { $regex: keyword, $options: 'i' } },
          { headline: { $regex: keyword, $options: 'i' } },
          { description: { $regex: keyword, $options: 'i' } }
        ],
      },
    },
  ]);
  res.json(ads);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const plus = new Ad({
//   companyId: '10',
//   primaryText: 'Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.',
//   headline: "Personalized skincare for dark spots, acne, and more.",
//   description: 'Personalized skincare for dark spots, acne, and more. Results may vary.',
//   CTA:'Order Now',
//   imageUrl: 'https://drive.google.com/file/d/17vzdu8jSulXgzk9rkJaHP7W1940pQaAV/view?usp=sharing',
//   name:"Curology",
//   url:'curology.com'
// })
// plus.save()