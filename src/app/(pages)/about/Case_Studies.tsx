import React from 'react';
import CaseStudyCard from '../../components/built/CaseStudyCards';

interface CaseStudy {
  id: string;
  headline: string;
  blurb: string;
  image: string;
  filters: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'CommercializationPlanForModularNuclearTechnology',
    headline: 'Commercialization Plan for Modular Nuclear Technology',
    blurb:
      'Tegro developed a commercialization plan for a modular nuclear battery technology business. We developed pathways to market based on regulatory, geographic and cashflow opportunities, empowering our client to make an informed decision on where to undertake scaling activities and attract investment.',
    image:
      './caseStudies/Commercialization Plan for Modular Nuclear Reactor.jpg',
    filters: 'Transactions',
  },
  {
    id: 'CarbonSequestrationMarketDueDiligenceReport',
    headline: 'Carbon Sequestration Market Due Diligence Report',
    blurb:
      'Tegro delivered a market report on the expected carbon sequestration rates expected for a range of management practices that deliver Australian Carbon Credit Units (ACCUs). This report was used to support sequestration potential for an Australian carbon project developer and support ACCU generation forecasts.',
    image: './caseStudies/Carbon Sequestration Market Due Diligence Report.jpg',
    filters: 'Investment support',
  },
  {
    id: 'ElectricVehicleInfrastructureFinancialModelAndFundingNegotiation',
    headline:
      'Electric vehicle infrastructure financial model and funding negotiation',
    blurb:
      'Tegro built a project finance model for an electric vehicle infrastructure business and supported the business to engage with financiers. The development of this model enabled rapid advancement in financing discussions and improved understanding of the business.',
    image: './caseStudies/Project Financing and scaling in North America.jpg',
    filters: 'Transactions',
  },
  {
    id: 'CarbonLinkedTechnologyAdoptionFacility',
    headline: 'Carbon-linked Technology Adoption Facility',
    blurb:
      'Tegro designed an innovative first in market debt structure that funds deployment of smart technology direct to farmers at no upfront cost, helping them reduce emissions and improve sustainable production. Costs are recouped via future carbon credits linked to sustainable management.',
    image: './caseStudies/Carbon-linked Technology Adoption Facility.jpg',
    filters: 'Specialized Finance',
  },
  {
    id: 'AcquisitionOfAgtechPlatform',
    headline: 'Acquisition of Agtech Platform',
    blurb:
      'Tegro acted as the lead buy-side financial advisor for a carbon development company to rapidly develop their technology capabilities and offerings through the acquisition of third party technology assets. Tegro led the target identification, due diligence and negotiations to successfully acquire the assets.',
    image: './caseStudies/Acquisition of Agtech Platform.jpg',
    filters: 'Transactions',
  },
  {
    id: 'LeveragingRiskTransferInstrumentsToPromoteInnovationInvestment',
    headline:
      'Leveraging Risk Transfer Instruments To Promote Innovation Investment',
    blurb:
      'Tegro is designing market-driven risk transfer tools that allow better risk allocation between government, industry bodies, private markets and/or philanthropic capital. By introducing market-ready risk transfer instruments, such as guarantee facilities, insurance products or ‘sleeved’ offtake/purchase agreements, Tegro aims to accelerate funding velocity into climate solutions and better optimise investor returns.',
    image:
      './caseStudies/Leveraging Risk Transfer Instruments To Promote Innovation Investment.jpg',
    filters: 'Specialized Finance',
  },
  {
    id: 'CommercializationPackageToDeployFundingIntoAssetsShareRiskAndImproveContractingOutcomes',
    headline:
      'Commercialization Package to Deploy Funding into Assets, Share Risk and Improve Contracting Outcomes',
    blurb:
      'Tegro is designing an off the shelf modular asset development model for climate technology companies by leveraging structures traditionally reserved for large-scale infrastructure projects. This will allow creation of a packaged, template solution for innovation companies to more effectively scale their operations and access capital.',
    image:
      './caseStudies/Commercialization Package to Deploy Funding into Assets, Share Risk and Improve Contracting Outcomes.jpg',
    filters: 'Specialized Finance',
  },
  {
    id: 'MobilizingConcessionalAndPrivateCapitalToSupportTheSustainableAviationFuelSAFIndustry',
    headline:
      'Mobilizing Concessional and Private Capital to Support the Sustainable Aviation Fuel (SAF) Industry',
    blurb:
      'Tegro is developing a blended financing package to de-risk and catalyse capital into the nascent SAF industry in Southeast Asia. By bringing together a specialised debt facility, insurance wrap and sleeved offtake structure the vehicle mobilizes crucial funding to de-risk SAF projects enabling stable pricing and supply to support commercial investment and scale.',
    image:
      './caseStudies/Mobilizing Concessional and Private Capital to Support the Sustainable Aviation Fuel (SAF) Industry.jpg',
    filters: 'Specialized Finance',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="py-6 font-palanquinDark text-h5_custom tracking-tight text-mainBlue ">
          Case Studies
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            id={study.id}
            headline={study.headline}
            blurb={study.blurb}
            image={study.image}
            filters={study.filters}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;