const generateClientId = () => {
    const clientId = crypto.randomUUID();
    localStorage.setItem('plant_app_client_id', clientId);
    return clientId;
};

// Check if user already has an ID, generate if not
export const getOrCreateClientId = () => {
    const existingId = localStorage.getItem('plant_app_client_id');
    if (existingId) return existingId;
    return generateClientId();
};
