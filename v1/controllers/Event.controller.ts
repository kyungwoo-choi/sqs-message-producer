import {Request, Response} from 'express'
import {Container} from "typedi"
import EventService from "../../services/Event.service";
import {EVENT_TYPES} from "../../common/types/Event.type";

export const home = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.HOME
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const land = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.LAND
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const search = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.SEARCH
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const itemPageView = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.ITEM_PAGE_VIEW
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const pageView = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.PAGE_VIEW
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const purchase = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.PURCHASE
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const cart = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.ADD_TO_CART
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const wishlist = async (request: Request, response: Response) => {
  request.body.event_type = EVENT_TYPES.ADD_TO_WISHLIST
  await Container.get(EventService).produceUserEventMessage(request.body)
  return response.json({success: true, message: 'success'})
}

export const tmp = async (request: Request, response: Response) => {
  return response.json({success: true, message: 'success'})
}
