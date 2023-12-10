import { Flag } from "@projectTypes/flag";
import { Document } from "mongoose";
import { CRUDControllerBase } from "./base/CRUDControllerBase";
import FlagModel from "../models/flag.model";

export class FlagController extends CRUDControllerBase<Flag & Document> {
  constructor(model: any) {
    super(model);
  };
};

export default new FlagController(FlagModel);