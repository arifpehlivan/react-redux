import * as actionTypes from "./actionTypes"

export const increaseCounter = () => ({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
});

export const decreaseCounter = () => ({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
});

export const increaseTwoCounter = () => ({
    type:actionTypes.INCREASE_TWO_COUNTER,
    payload:2
});