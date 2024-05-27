
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

import { TiArrowSortedDown } from "react-icons/ti";

const ImageSlider = () => {
  const [selectedList, setSelectedList] = useState(1);

  const listItems = [
    { id: 1, name: 'Support For the Way You Code', content: 'The CodePen Editor is highly customizable. There is autocomplete and Emmet for speed and accuracy. Plus you can set up smart defaults for starting new work.', imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-support-9cc33b6268c0a6c897033028084e1851.png' },

    { id: 2, name: ' Your Pens Private', content: 'Nobody can see your private stuff until you want them to, because they are at secret unguessable, non-searchable, non-indexable URLs.', imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-privacy-e542bc22ce324502eb727577083eeb61.png' },
    { id: 3, name: 'Embed Pens', content: 'Completely customize the look of code demos on your own site. Change the look of your site? Just change the theme and all your Embedded Pens change too.', imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-embed-eae2ee445ef0f63ee8fc7f175858e9d9.png' },
    { id: 4, name: 'Asset Hosting', content: "Need to use an image in a Pen? No more awkwardly finding alternate hosting for it, you can drag-and-drop it right onto CodePen and we'll host it for you. And not just images! CSS, JSON files, SVGs, media files, whatever!", imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-assets-6a081a7c8ff72da526846f3c8f8ae91c.png' },
    { id: 5, name: 'Build Entire Projects', content: "Projects is the most powerful feature of CodePen. It's a full blown IDE right in the browser, with automatic preprocessing, drag and drop uploading, live previews, website deployment, and much more.", imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-projects-a0d6a9e16cf1c2c46219ef3d49370823.png' },
    { id: 6, name: 'Collab Mode', content: "Live collaboration on code. Multiple people can type and edit code in a Pen at the same time, all while still seeing the live preview.", imageLink: 'https://cpwebassets.codepen.io/assets/packs/editor-collab-90815f9b83fcbdbd3ef7df4573ed9b57.png' },
  ];

  const handleListClick = (listNumber) => {
    setSelectedList(listNumber);
  };

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="flex-1">
        <ul>
          {listItems.map(item => (
            <li key={item.id} className="my-2" onClick={() => handleListClick(item.id)}>
              <div className={` cursor-pointer px-4 py-3 rounded-md ${selectedList === item.id && 'bg-black'} `}>
              <div className='flex items-center'>
                  <span className={`mr-2 ${selectedList === item.id ? '-rotate-90':''} `} text-base ><TiArrowSortedDown /></span>
                      <summary className='text-primary font-bold'>{item.name}</summary>
              </div>
                  {selectedList === item.id && (
                    <p className=' text-primary-dark'>{item.content}</p>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex-1 col-span-2">
        {listItems.map(item => (
          <Transition
            key={item.id}
            show={selectedList === item.id}
            enter="transition-transform duration-500 ease-in-out"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-500 ease-in-out"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <img src={item.imageLink} alt={`Image for ${item.name}`} className=" max-w-full h-auto rounded-md overflow-clip" />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

