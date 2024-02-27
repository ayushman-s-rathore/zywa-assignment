const express = require('express');
const router = express.Router();
const { Pickup, DeliveryException, Delivered, Returned } = require('../../model/cardSchemas');

router.get('/', async (req, res) => {
  res.render('index', { status: null });
});

// GET request based on input being number/cardID
router.get('/get_card_status', async (req, res) => {
  try {
    const input = req.query.input;

    if (!input) {
      return res.status(400).json({ error: 'Phone Number or Card ID must be provided' });
    }

    let query;
    if (isValidNumber(input)) {
      query = { userId: input };
    } else {
      query = { cardId: input };
    }

    const pickupCard = await Pickup.findOne(query);
    const deliveryExceptionCard = await DeliveryException.findOne(query);
    const deliveredCard = await Delivered.findOne(query);
    const returnedCard = await Returned.findOne(query);

    const card = findLatestCard([pickupCard, deliveryExceptionCard, deliveredCard, returnedCard]);

    if (!card) {
      return res.render('index', { status: 'NOT_FOUND', comment: null });
    }

    res.render('index', { status: card.status, comment: card.comment || '' });
  } catch (error) {
    console.error(`Error in /get_card_status endpoint: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function findLatestCard(cards) {
  let latestCard = null;
  for (const card of cards) {
    if (card && (!latestCard || card.timestamp > latestCard.timestamp)) {
      latestCard = card;
    }
  }
  return latestCard;
}

// Function to check if the input is a valid phone number
function isValidNumber(input) {
  return /^[0-9]+$/.test(input); // Assuming a valid phone number is a string of digits
}

module.exports = router;
