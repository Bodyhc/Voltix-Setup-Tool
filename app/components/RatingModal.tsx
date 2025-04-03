import React, { useState } from 'react';
import type { Template } from '../types';
import { FaStar } from 'react-icons/fa';
import { toast } from 'sonner';

interface RatingModalProps {
  onClose: () => void;
  template: Template;
  onRate: (templateId: string, rating: number) => void;
  currentRating: number;
}

export default function RatingModal({ onClose, template, onRate, currentRating }: RatingModalProps) {
  const [rating, setRating] = useState(currentRating);
  const [hover, setHover] = useState(0);

  const handleSubmit = () => {
    onRate(template.id, rating);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-4">Rate {template.name}</h2>
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <button
                key={index}
                className="text-3xl cursor-pointer"
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <FaStar
                  className={`${
                    ratingValue <= (hover || rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Rating
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 