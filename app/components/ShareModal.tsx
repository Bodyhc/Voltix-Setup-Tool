import React from 'react';
import type { Template } from '../types';
import { FaTwitter, FaFacebook, FaLinkedin, FaLink } from 'react-icons/fa';
import { toast } from 'sonner';

interface ShareModalProps {
  onClose: () => void;
  template: Template | null;
}

export default function ShareModal({ onClose, template }: ShareModalProps) {
  const shareUrl = window.location.href;
  const shareText = `Check out this ${template?.name} template!`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-4">Share Template</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleShare('twitter')}
            className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <FaLink size={20} />
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
} 