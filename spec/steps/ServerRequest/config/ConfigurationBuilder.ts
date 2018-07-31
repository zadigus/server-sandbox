import "reflect-metadata";

import { Container } from "inversify";
import { Express } from "express";

import SERVICE_IDENTIFIER from "../constants/Identifiers";

import Requester from "../Requester/Requester";
import IServer from "../IServer";
import ExpressServer from "../Server/ExpressServer";

export default function buildRequester(app: Express): Requester {
  let container: Container = new Container();

  container.bind<Express>(SERVICE_IDENTIFIER.SERVER_APP).toConstantValue(app);
  container.bind<IServer>(SERVICE_IDENTIFIER.SERVER).to(ExpressServer);
  container.bind<Requester>(Requester).toSelf();

  return container.get<Requester>(Requester);
}