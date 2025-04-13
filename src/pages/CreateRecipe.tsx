
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Camera, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { uploadFoodImage, generateRecipeFromImage } from '@/services/recipeService';

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const imageUrl = await uploadFoodImage(file);
      setImagePreview(imageUrl);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image.",
        variant: "destructive",
      });
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleCamera = () => {
    // Trigger file input click
    fileInputRef.current?.click();
  };

  const handleGenerateRecipe = async () => {
    if (!imagePreview) return;
    
    try {
      setAnalyzing(true);
      const recipe = await generateRecipeFromImage(imagePreview);
      
      toast({
        title: "Recipe generated!",
        description: "Your recipe has been successfully created.",
        duration: 3000,
      });
      
      // For demo purposes, navigate to an existing recipe
      navigate('/recipe/1');
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your recipe.",
        variant: "destructive",
      });
      console.error("Generation error:", error);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/')}
          className="p-2"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold ml-2">Create Recipe</h1>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
        <h2 className="text-lg font-bold mb-4">Upload Food Photo</h2>
        
        <div className="mb-6">
          {imagePreview ? (
            <div className="relative">
              <img 
                src={imagePreview} 
                alt="Food preview" 
                className="w-full h-64 object-cover rounded-2xl"
              />
              <button 
                onClick={() => setImagePreview(null)}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div 
              className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center h-64 bg-gray-50"
            >
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-500 mb-2">Upload a photo of your food</p>
              <p className="text-xs text-gray-400">JPG, PNG or HEIC</p>
            </div>
          )}
        </div>
        
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-2"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            Upload
          </Button>
          
          <Button
            className="flex-1 flex items-center justify-center gap-2 bg-primary"
            onClick={handleCamera}
            disabled={uploading}
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
            Take Photo
          </Button>
        </div>
      </div>
      
      <Button
        className="w-full bg-primary"
        disabled={!imagePreview || analyzing}
        onClick={handleGenerateRecipe}
      >
        {analyzing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Analyzing Image...
          </>
        ) : (
          'Generate Recipe'
        )}
      </Button>
    </div>
  );
};

export default CreateRecipe;
