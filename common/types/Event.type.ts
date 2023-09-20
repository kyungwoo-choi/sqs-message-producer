// timestamp: 1693376247207,
//   channel_type: 'SITE',
//   user_id: 3698825,
//   session_channel: 'balaan',
//   session_id: '8c2a9da61eb14e268ccb84e43d298d9d',
//   device: {
//   os: 'android',
//     osv: '',
//     advertising_id: '',
//     unique_device_id: '11ee1a5aa25da91096fc2581778f938e',
//     model: '',
//     ip: '::1',
//     ua: 'PostmanRuntime/7.32.3',
//     language: 'ko'
// },
// search_query: '검색어'

export type EventType =
  'HOME'
  | 'LAND'
  | 'SEARCH'
  | 'ITEM_PAGE_VIEW'
  | 'PAGE_VIEW'
  | 'PURCHASE'
  | 'ADD_TO_CART'
  | 'ADD_TO_WISHLIST'
export type ChannelType = 'APP' | 'SITE'
export type Os = 'ios' | 'android'

export const EVENT_TYPES = {
  'HOME': 'HOME',
  'LAND': 'LAND',
  'SEARCH': 'SEARCH',
  'ITEM_PAGE_VIEW': 'ITEM_PAGE_VIEW',
  'PAGE_VIEW': 'PAGE_VIEW',
  'PURCHASE': 'PURCHASE',
  'ADD_TO_CART': 'ADD_TO_CART',
  'ADD_TO_WISHLIST': 'ADD_TO_WISHLIST'
}

export interface IDevice {
  os: Os
  osv?: string
  advertising_id?: string
  unique_device_id: string
  model?: string
  ip?: string
  ua?: string
  language?: string
}

export interface IUserEvent {
  timestamp: number
  event_type: EventType
  channel_type: ChannelType
  user_id?: number
  session_channel: string
  session_id: string
  device: IDevice
  search_query?: string
  page_id?: string
  referrer_page_id?: string
}

export interface IProcessedUserEvent {
  id: string
  event_type: EventType
  user_id?: string
  timestamp: number
  channel_type: ChannelType
  session_channel: string
  session_id: string
  device: IDevice
  search_query?: string
  page_id?: string
  referrer_page_id?: string
}
