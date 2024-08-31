import {configureStore} from "@reduxjs/toolkit";

import authReducer from  "./slice/authSlice";
import userReducer from "./slice/userSlice";
import adminAuthReducer from "./slice/admin/adminAuthSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        adminAuth: adminAuthReducer
    }
})

export default store;