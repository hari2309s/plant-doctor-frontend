# plant-doctor-frontend

UI for the Plant Doctor API

# Plant Doctor Frontend

A Next.js frontend for the Plant Doctor API, which helps identify plant diseases through image analysis.

## Features

- Upload plant images for disease diagnosis
- Get instant analysis results with confidence scores
- View detailed treatment recommendations
- Track diagnosis history
- Responsive design for mobile and desktop

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **File Uploads**: react-dropzone

## Backend API

This frontend connects to the [Plant Doctor backend API](https://github.com/hari2309s/plant-doctor), which provides plant disease diagnosis using machine learning.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/plant-doctor-frontend.git
   cd plant-doctor-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Usage

1. Navigate to the upload page
2. Drag and drop or select an image of a plant leaf
3. Wait for the AI to analyze the image
4. View the diagnosis results and treatment recommendations
5. Check your history to view past diagnoses

## Deployment

This application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## License

This project is open-source.

## Acknowledgements

- UI design inspired by [Plant Disease Detection](https://github.com/luanvenancio/plant-disease-detection)
- Backend API by [hari2309s](https://github.com/hari2309s/plant-doctor)
