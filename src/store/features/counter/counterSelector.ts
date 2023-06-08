import { CounterState } from "../rootType";

const counterSelector = (state: CounterState) => state.counter.value;

export default counterSelector;
