import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QueueItem {
  id: string;
  type: string;
  payload: any;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

interface QueueState {
  items: QueueItem[];
}

const initialState: QueueState = {
  items: [],
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    enqueue(state, action: PayloadAction<QueueItem>) {
      state.items.push(action.payload);
    },
    markCompleted(state, action: PayloadAction<{ id: string }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.status = 'completed';
    },
    markFailed(state, action: PayloadAction<{ id: string }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.status = 'failed';
    },
    clearCompleted(state) {
      state.items = state.items.filter((i) => i.status !== 'completed');
    },
  },
});

export const { enqueue, markCompleted, markFailed, clearCompleted } = queueSlice.actions;
export default queueSlice.reducer;
