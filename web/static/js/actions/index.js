export const RECEIVE_HEADING = 'RECEIVE_HEADING';
export const RECEIVE_HEADING_MISSING_DATA = 'RECEIVE_HEADING_MISSING_DATA';
export function receiveHeading(payload) {
  if (payload && payload.heading) {
    return {
      type: RECEIVE_HEADING,
      heading: payload.heading
    }
  }
  return {
    type: RECEIVE_HEADING_MISSING_DATA
  }
}
