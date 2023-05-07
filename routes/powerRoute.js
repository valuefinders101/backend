import  express from "express";
import { verifyMeterNumber, checkBalance, buyElectricity, borrowElectricity} from "../utils/Index.js";
const router = express.Router();


//verify meter number
router.post('/verifyMeterNumber', (req, res) => {
    const { meterNumber, apiKey, product_code, task} = req.body;
    try {
      verifyMeterNumber(meterNumber, apiKey, res, product_code, task);
    } catch (error) {
        console.log("there was an  error", error);
        res.status(400).send(error);
    }
  })

//check user balance
router.post('/checkBalance', (req, res) => {
    const { apiKey } = req.body;
    try {
      checkBalance(apiKey, res);
    } catch (error) {
        console.log("there was an  error", error);
        res.status(200).send(error);
    }
  })

  //buy electricity
router.post('/buyElectricity', (req, res) => {
    const { apiKey, meterNumber, amount, product_code, task, paymentmode } = req.body;
    try {
      buyElectricity(apiKey, res, meterNumber, amount, product_code, task, paymentmode);
    } catch (error) {
        console.log("there was an  error", error);
        res.status(200).send(error);
    }
  })

  //borrow electricity
router.post('/borrowElectricity', (req, res) => {
    const { apiKey, meterNumber, amount, product_code, task, paymentMode } = req.body;
    try {
      borrowElectricity(apiKey, res, meterNumber, amount, product_code, task, paymentMode);
    } catch (error) {
        console.log("there was an  error", error);
        res.status(400).send(error);
    }
  
})








  export { router as powerRoute };