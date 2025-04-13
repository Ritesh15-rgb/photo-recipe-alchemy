
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CameraButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6">
      <Button 
        onClick={() => navigate('/create-recipe')}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2"
        size="lg"
      >
        <Camera className="h-5 w-5" />
        <span>Upload Photo</span>
      </Button>
    </div>
  );
};

export default CameraButton;
