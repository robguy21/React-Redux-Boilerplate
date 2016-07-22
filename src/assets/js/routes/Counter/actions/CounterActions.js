/*
 * action types
 */

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

/*
 * action creators
 */

export function add(integer) {
  return { type: ADD, integer };
}

export function remove(integer) {
  return { type: REMOVE, integer };
}
