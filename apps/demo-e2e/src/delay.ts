/**
 * Promise wrapper for setTimeout
 */
export const delay = (milliseconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, milliseconds) );
}
