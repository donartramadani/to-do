import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';
import { Icon } from '../Icons/Icon';

interface Props {
  title: ReactNode;
  content: ReactNode;
}

export const Accordion = (props: Props) => {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between p-6">
            <span>{props.title}</span>
            <span className="text-grayscale500 flex items-center">
              {open ? 'Hide' : 'Show'}

              {/* We can animate the rotation of the chevron but it would not look good 
              since we have the show/hide text as well which doesn't make sense to be animated */}
              <Icon
                className="text-grayscale500 ml-2"
                icon={open ? 'chevron-up' : 'chevron-down'}
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="p-4">{props.content}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
