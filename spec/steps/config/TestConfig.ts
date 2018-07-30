import "reflect-metadata";

import { Container } from "inversify";
import { Express } from "express";

import SERVICE_IDENTIFIER from "../../../src/constants/Identifiers";

import Requester from "../Requester";
import App from "../../../src/App";

let container: Container = new Container();

container.bind<Express>(SERVICE_IDENTIFIER.SERVER_APP).toConstantValue(App);
container.bind<Requester>(Requester).toSelf();

export default container;