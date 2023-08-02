import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        step: 0,
        planFrequency: "Monthly",
        plan: "",
    });

    const [selectedPlan, setSelectedPlan] = useState('Monthly');

    const [addonSelected, setAddonSelected] = useState(false);

    return (
        <AppContext.Provider
            value={{
                formData,
                setFormData,
                selectedPlan,
                setSelectedPlan,
                addonSelected,
                setAddonSelected,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
