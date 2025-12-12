import Image from 'next/image';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Jazz Logo */}
        <div className="relative animate-pulse">
          <Image
            src="/jazz-logo.webp"
            alt="Jazz Logo"
            width={160}
            height={80}
            priority
            className="object-contain"
          />
        </div>
        
        {/* Loading Dots Animation */}
        <div className="flex gap-2">
          <div 
            className="w-3 h-3 bg-red-600 rounded-full animate-pulse"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className="w-3 h-3 bg-red-600 rounded-full animate-pulse"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div 
            className="w-3 h-3 bg-red-600 rounded-full animate-pulse"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>

        {/* Verifying Text */}
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          Verifying...
        </p>
      </div>
    </div>
  );
}
