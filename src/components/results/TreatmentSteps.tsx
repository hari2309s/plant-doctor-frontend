import React from 'react';

interface TreatmentStepsProps {
    diagnosisClass: string;
}

const TreatmentSteps = ({ diagnosisClass }: TreatmentStepsProps) => {
    // Simplified treatment recommendations
    const treatments: Record<string, string[]> = {
        'Tomato_Bacterial_spot': [
            'Remove and destroy infected plant parts',
            'Apply copper-based fungicides according to label directions',
            'Rotate crops - avoid planting tomatoes in the same location for 2-3 years',
            'Use disease-free seeds and plants',
            'Avoid overhead irrigation which spreads bacteria'
        ],
        'Tomato_Early_blight': [
            'Remove and destroy lower infected leaves',
            'Apply fungicides labeled for early blight',
            'Ensure proper spacing between plants for good air circulation',
            'Water at the base of plants to keep foliage dry',
            'Apply mulch to prevent spores from splashing onto leaves'
        ],
        'Tomato_Late_blight': [
            'Remove and destroy all infected plant parts immediately',
            'Apply fungicide preventatively before disease appears in your area',
            'Avoid overhead watering and working with wet plants',
            'Destroy all plant debris at the end of the season',
            'Consider resistant varieties for future plantings'
        ],
        'Tomato_Leaf_Mold': [
            'Improve air circulation around plants',
            'Reduce humidity in greenhouses if applicable',
            'Apply fungicides labeled for leaf mold',
            'Remove and destroy infected leaves',
            'Avoid overhead watering'
        ],
        'Tomato_Septoria_leaf_spot': [
            'Remove infected leaves immediately',
            'Apply fungicides labeled for septoria leaf spot',
            'Mulch around the base of plants',
            'Avoid working with wet plants',
            'Practice crop rotation and clean up all debris after harvest'
        ],
        'Tomato_Spider_mites': [
            'Spray plants with strong stream of water to dislodge mites',
            'Apply insecticidal soap or neem oil to affected areas',
            'For severe infestations, use appropriate miticides',
            'Increase humidity around plants',
            'Introduce predatory mites for biological control'
        ],
        'Tomato_Target_Spot': [
            'Remove and destroy infected plant parts',
            'Apply appropriate fungicides',
            'Improve air circulation around plants',
            'Avoid overhead watering',
            'Rotate crops annually'
        ],
        'Tomato_Yellow_Leaf_Curl_Virus': [
            'Remove and destroy infected plants',
            'Control whiteflies with appropriate insecticides or insecticidal soap',
            'Use reflective mulch to deter whiteflies',
            'Plant resistant varieties',
            'Use physical barriers like fine mesh to protect plants'
        ],
        'Tomato_Mosaic_virus': [
            'Remove and destroy infected plants',
            'Wash hands thoroughly after handling infected plants',
            'Disinfect garden tools with 10% bleach solution',
            'Control insects that may spread the virus',
            'Plant resistant varieties in the future'
        ],
        'Tomato_healthy': [
            'Continue regular watering, keeping soil consistently moist but not soggy',
            'Apply balanced fertilizer according to package directions',
            'Monitor regularly for any signs of pests or disease',
            'Provide support for plants as they grow',
            'Prune suckers if desired for better air circulation'
        ],
        'default': [
            'Remove visibly affected plant parts',
            'Improve air circulation around plants',
            'Avoid overhead watering to keep foliage dry',
            'Consider applying appropriate treatments based on specific diagnosis',
            'Monitor plants regularly for signs of recovery or spread'
        ]
    };

    const steps = treatments[diagnosisClass] || treatments['default'];

    return (
        <div className="space-y-4">
            {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-medium text-sm">
                        {index + 1}
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-700">{step}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TreatmentSteps
