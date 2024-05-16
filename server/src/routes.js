import { Router } from "express";
import {getAllDataFromAWS3,getDataFromAWS3,getDataFromAWS4,getAllDataFromSoilMoisture} from "./controller.js"
const router = Router();

router.get("/aws3/getall",getAllDataFromAWS3);
router.post("/aws3/fromto",getDataFromAWS3);
router.post("/aws4/fromto",getDataFromAWS4);
router.post("/soil-moisture/spectrum",getAllDataFromSoilMoisture);

export default router;