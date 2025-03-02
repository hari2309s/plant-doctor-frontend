import React from 'react';

interface DiseaseSummaryProps {
    diagnosisClass: string;
}

const DiseaseSummary = ({ diagnosisClass }: DiseaseSummaryProps) => {
    // This is simplified - in a real app, you'd have a database of disease information
    const summaries: Record<string, string> = {
        'Tomato_Bacterial_spot':
            'Bacterial spot is a common disease of tomato caused by Xanthomonas species. It affects leaves, fruits, and stems, causing spots that can lead to defoliation and sunscald.',
        'Tomato_Early_blight':
            'Early blight is a fungal disease caused by Alternaria solani. It typically appears as dark spots with concentric rings on lower leaves first, then spreading upward.',
        'Tomato_Late_blight':
            'Late blight is a destructive disease caused by Phytophthora infestans. It can destroy plant foliage within days and cause tomato fruits to rot.',
        'Tomato_Leaf_Mold':
            'Leaf mold is caused by the fungus Passalora fulva. It appears as yellow spots on the upper sides of leaves and olive-green to grayish-brown fuzzy mold on the undersides.',
        'Tomato_Septoria_leaf_spot':
            'Septoria leaf spot is caused by the fungus Septoria lycopersici. It causes small, circular spots with dark borders and light centers on leaves.',
        'Tomato_Spider_mites':
            'Spider mites are tiny pests that cause stippling on leaves. Severe infestations lead to webbing and can cause leaves to dry and fall off.',
        'Tomato_Target_Spot':
            'Target spot is caused by the fungus Corynespora cassiicola. It creates circular lesions with concentric rings that look like targets.',
        'Tomato_Yellow_Leaf_Curl_Virus':
            'TYLCV is transmitted by whiteflies. Infected plants show upward curling leaves, yellowing, and stunted growth. It can cause severe yield loss.',
        'Tomato_Mosaic_virus':
            'Tomato mosaic virus causes mottled light and dark green areas on leaves, often with distortion. It can reduce yield and fruit quality.',
        'Tomato_healthy':
            'Your tomato plant appears healthy! Continue with regular care including proper watering, fertilization, and monitoring.',
        // Add more conditions as needed
        'default': 'This condition affects plant health and may reduce yield. See the treatment recommendations below.'
    };

    return (
        <div className="mt-6 bg-primary-50 p-4 rounded-lg">
            <h3 className="font-medium text-primary-700 mb-2">About this condition:</h3>
            <p className="text-gray-700">
                {summaries[diagnosisClass] || summaries['default']}
            </p>
        </div>
    );
}

export default DiseaseSummary
