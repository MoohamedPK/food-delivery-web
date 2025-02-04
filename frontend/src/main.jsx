import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store, persistor } from "./store/store";
import './index.css'
import AppRoutes from './routes/AppRoutes';
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes/>
      </PersistGate>
    </Provider>
)
