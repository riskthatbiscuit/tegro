'use client';
import { useModal } from '../../components/modals/ModalContext';

const features = [
  {
    name: 'Bias to Action',
    description:
      'We deliver. We roll up our sleeves, jump in and get things done. Even when the odds are against us, we find a way',
    href: '#',
  },
  {
    name: 'Forward moving',
    description:
      'Our finger is on the pulse and our eyes are fixed on the innovations that shape what’s next. Because standing still is falling behind.',
    href: '#',
  },
  {
    name: 'Simplicity is in our DNA',
    description:
      'Climate solutions are complex. Financing is complex. Everything we do is focused on making things simple, easy and transparent.',
    href: '#',
  },
];

const prefillMessage =
  "I'm interested in joining Waterfall! A little about why...";

export default function Values() {
  const { currentModal, closeModal, setCurrentModal } = useModal();

  return (
    <div className="mx-auto max-w-5xl rounded-lg bg-secBlue1 p-4 sm:my-6 lg:max-w-none lg:basis-5/12">
      <h2 className="text-center font-palanquinDark text-h4_custom text-mainBlue md:text-h2_custom">
        Delivering projects we&#39;re proud of
      </h2>
      <div className={`$ mx-auto max-w-5xl  py-2`}>
        <div className="mx-auto text-left">
          <div className=" mt-2 text-h6_custom lg:text-h5_custom">
            <p>- FinanceAsia &#39;Most Innovative Deal&#39; 2019</p>
            <p>- World&#39;s largest renewable energy infrastructure project</p>
            <p>
              - First of its kind carbon-linked technology adoption facility
            </p>
            <p>- Australia's longest tenor project financing</p>
            <p>- First of its kind public housing renewal PPP</p>
            <p>
              - Buy-side lead financial advisory for development of a waste
              infrastructure platform
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl justify-end gap-x-6 text-center">
        <a
          onClick={() => setCurrentModal('Contact Us', prefillMessage)}
          className="my-2 w-36 cursor-pointer rounded-lg bg-mainBlue px-2 py-4 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
        >
          Join the change
        </a>
      </div>
    </div>
  );
}
