import React, {ChangeEvent} from 'react';
import { ScrollArea } from 'src/components/ui/scroll-area';
import { Checkbox } from 'src/components/ui/checkbox';
import { Label } from 'src/components/ui/label';
import { Slider } from 'src/components/ui/slider';
import { RadioGroup, RadioGroupItem } from 'src/components/ui/radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/accordion';

export default function FilterSelector() {
  const categories = [
    'All categories',
    'Animals',
    'Animated Backgrounds',
    'Business',
    'Green Screen',
    'Industry',
    'Medical',
    'Nature',
    'People',
    'Transport',
    'VFX',
    'Abstract',
    'City',
    'Culture',
    'Entertainment',
    'Family',
    'Fitness',
    'Food',
    'Holiday',
    'Military',
  ];

  const accordionData = [
    {
      title: 'Clip Type',
      items: [
        'Free Clips',
        'Premium Clips',
      ],
    },
    {
      title: 'Duration',
      sliderProps: {
        defaultValue: [33],
        max: 100,
        step: 1,
      },
    },
    {
      title: 'Resolution',
      items: [
        'Any Resolution',
        '720p',
        '1080p',
        '4k',
      ],
    },
    {
      title: 'License type',
      items: [
        'Any license',
        'Royalty-Free',
        'Creative Commons 3.0',
        'Videvo Attribution License',
      ],
    },
    {
      title: 'Categories',
      radioProps: {
        defaultValue: categories[0],
        options: categories,
      },
    },
  ];

  return (
		<aside className="flex flex-col">
			<ScrollArea className="overflow-y-auto">
				<Accordion
					type="multiple"
					defaultValue={accordionData.map((item) => item!.title!)}
				>
					{accordionData.map((data, index) => (
						<AccordionItem key={index} value={data.title}>
							<AccordionTrigger>{data.title}</AccordionTrigger>
							<AccordionContent
								className={
									data.radioProps
										? "space-y-2"
										: "flex space-x-2"
								}
							>
								{data.items &&
									data.items.map((item, itemIndex) => (
										<div
											key={itemIndex}
											className="flex space-x-2"
										>
											<Checkbox />
											<Label>{item}</Label>
										</div>
									))}
								{data.sliderProps && <CustomSlider />}
								{data.radioProps && (
									<RadioGroup {...data.radioProps}> 
										{data.radioProps.options.map(
											(category, catIndex) => (
												<div
													key={catIndex}
													className="flex items-center space-x-2"
												>
													<RadioGroupItem
														value={category}
														id={category}
													/>
													<Label htmlFor={category}>
														{category}
													</Label>
												</div>
											)
										)}
									</RadioGroup>
								)}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</ScrollArea>
		</aside>
  );
}


// ! this is here temporarily :

import { useState } from 'react';

function CustomSlider() {
  const [sliderValue, setSliderValue] = useState<string>("50");

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSliderValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-1">
      <div className="w-64 relative">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider-thumb-blue"
        />
      </div>
      <div className="mt-3 text-blue-500">{sliderValue}</div>
    </div>
  );
};

