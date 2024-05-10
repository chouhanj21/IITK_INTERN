import { Router } from "express";
import {getAllDataFromTable1,getAllDataFromAWS3,getDataFromAWS3,getTemp1DataFromAWS3} from "./controller.js"
const router = Router();

router.get("/table1/getall",getAllDataFromTable1);

router.get("/aws3/getall",getAllDataFromAWS3);

router.post("/aws3/fromto",getDataFromAWS3);

router.get("/aws3/temp1/fromto",getTemp1DataFromAWS3);
export default router;