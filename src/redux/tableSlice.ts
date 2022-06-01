import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableDataRow } from 'type';



type TableSliceState = {
    tableData: TableDataRow[]
}


const initialState: TableSliceState = {
    tableData: [],
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addInfo: (state, action: PayloadAction<TableDataRow>) => {
            state.tableData.push(action.payload);
        },
        deleteInfo: (state, action: PayloadAction<string>) => {
            state.tableData = state.tableData.filter((item) => item.id !== action.payload);
        }
    }
})

export const { addInfo, deleteInfo } = tableSlice.actions;
export default tableSlice.reducer;