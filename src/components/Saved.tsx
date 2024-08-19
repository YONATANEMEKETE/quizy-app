'use client';

import { Bookmark, Save } from 'lucide-react';
import { useState } from 'react';

const SaveBtn = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div
      onClick={handleSave}
      className={`flex items-center gap-2 p-2 py-1 rounded-md ${
        isSaved ? 'bg-myaccent/40' : 'border'
      }  border-mytextgray cursor-pointer`}
    >
      <div
        className={`text-base ${
          isSaved ? 'text-mytext' : 'text-mytextgray'
        } font-bold`}
      >
        {isSaved ? 'Saved' : 'Save'}
      </div>
      <Bookmark
        className={`text-mytextgray ${
          isSaved ? 'fill-myaccent stroke-myaccent' : ''
        }`}
      />
    </div>
  );
};

export default SaveBtn;
