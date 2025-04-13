
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CameraButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6">
      <button 
        onClick={() => navigate('/create-recipe')}
        className="bg-primary text-white rounded-full shadow-lg p-4"
      >
        <Camera className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CameraButton;
