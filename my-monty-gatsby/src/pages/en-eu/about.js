import React from 'react'
import GlobalHeroImage from '../../assets/images/hero/global.webp'
import CircledContent from '../../components/atoms/CircledContent'
import SiteColumns from '../../components/atoms/Columns'
import ListItems from '../../components/atoms/ListItems'
import SiteContainer from '../../components/atoms/SiteContainer'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import IconsList, { IconItem } from '../../components/IconsList'
import SiteBanner from '../../components/SiteBanner'
import {
  CommitmentIcon,
  EcoFriendlinessIcon,
  ExcellenceIcon,
  HonestyIcon,
  IntegrityIcon,
  ProfessionalismIcon,
  TeamWorkIcon,
} from '../../components/SVG/Icons'
import TextWithColor from '../../components/TextWithColor'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

export default function AboutPage () {
  
  return (
    <DefaultLayout baseUrl={'en-eu'} languages={Data.languages} activeLanguage="en" activeRegionSlug="eu">
      <HeroSection backgroundImage={GlobalHeroImage} title="Join our team" mainText={
        `Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <a class="hero__title__linkedin">LinkedIn</a> and we will reach
            out to you<span class="break"/> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"/> your profile.`
      } subTitle={
        {
          help: 'Help us',
          make: 'make banking accessible for all',
        }
      }/>
      
      <TextWithColor/>
      <SiteContainer>
        <SiteBanner imageAttributes={{
          imgSrc: 'https://mymonty.netlify.app/globe.c424cd35.svg',
          style: {},
        }}>
          <div className="site-banner__content__title">MyMonty connect you to the financial world</div>
          <SiteColumns columns={3} containerTag="ul">
            {
              [1, 2, 3].map(number => {
                return (
                  <li>
                    <CircledContent>{number}</CircledContent>
                    <div style={{
                      paddingTop: '0.5em',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '1.5rem',
                      lineHeight: '2rem',
                      color: '#494646',
                    }}>
                      Open a bank account
                    </div>
                  </li>
                )
              })
            }
          </SiteColumns>
          <ListItems items={[
            <span>You can request to have your physical card delivered to your home</span>,
            <span>Market exchange rates</span>,
            <span>No hidden costs</span>,
          ]}/>
        </SiteBanner>
        <SiteBanner inverted={true}
                    backgroundColor="#FDEDDE"
                    imageAttributes={{
                      imgSrc: 'https://mymonty.netlify.app/cards.29fc9237.png',
                      style: {
                        width: '40%',
                        selfAlign: 'end',
                      },
                    }}>
          <div className="site-banner__content__title">We believe in equal opportunity & banking accessibility for all
          </div>
          <IconsList title="Our values define who we are:" columns={2} items={[
            <IconItem icon={<IntegrityIcon/>}>Integrity</IconItem>,
            <IconItem icon={<HonestyIcon/>}>Honesty</IconItem>,
            <IconItem icon={<TeamWorkIcon/>}>Teamwork</IconItem>,
            <IconItem icon={<ProfessionalismIcon/>}>Professionalism</IconItem>,
            <IconItem icon={<ExcellenceIcon/>}>Excellence</IconItem>,
            <IconItem icon={<EcoFriendlinessIcon/>}>Eco-Friendliness</IconItem>,
            <IconItem icon={<CommitmentIcon/>}>Commitment</IconItem>,
          ]}/>
        </SiteBanner>
      </SiteContainer>
      <SiteContainer>
        <SiteBanner imageAttributes={{
          imgSrc: 'https://mymonty.netlify.app/globe.c424cd35.svg',
          style: {},
        }}>
          <div className="site-banner__content__title">MyMonty connect you to the financial world</div>
          <SiteColumns columns={3} containerTag="ul">
            {
              [1, 2, 3].map(number => {
                return (
                  <li>
                    <CircledContent>{number}</CircledContent>
                    <div style={{
                      paddingTop: '0.5em',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '1.5rem',
                      lineHeight: '2rem',
                      color: '#494646',
                    }}>
                      Open a bank account
                    </div>
                  </li>
                )
              })
            }
          </SiteColumns>
          <ListItems items={[
            <span>You can request to have your physical card delivered to your home</span>,
            <span>Market exchange rates</span>,
            <span>No hidden costs</span>,
          ]}/>
        </SiteBanner>
        <SiteBanner inverted={true}
                    backgroundColor="#FDEDDE"
                    imageAttributes={{
                      imgSrc: 'https://mymonty.netlify.app/cards.29fc9237.png',
                      style: {
                        width: '40%',
                        selfAlign: 'end',
                      },
                    }}>
          <div className="site-banner__content__title">We believe in equal opportunity & banking accessibility for all
          </div>
          <IconsList title="Our values define who we are:" columns={2} items={[
            <IconItem icon={<IntegrityIcon/>}>Integrity</IconItem>,
            <IconItem icon={<HonestyIcon/>}>Honesty</IconItem>,
            <IconItem icon={<TeamWorkIcon/>}>Teamwork</IconItem>,
            <IconItem icon={<ProfessionalismIcon/>}>Professionalism</IconItem>,
            <IconItem icon={<ExcellenceIcon/>}>Excellence</IconItem>,
            <IconItem icon={<EcoFriendlinessIcon/>}>Eco-Friendliness</IconItem>,
            <IconItem icon={<CommitmentIcon/>}>Commitment</IconItem>,
          ]}/>
        </SiteBanner>
      </SiteContainer>
      <SiteContainer>
        <SiteBanner imageAttributes={{
          imgSrc: 'https://mymonty.netlify.app/globe.c424cd35.svg',
          style: {},
        }}>
          <div className="site-banner__content__title">MyMonty connect you to the financial world</div>
          <SiteColumns columns={3} containerTag="ul">
            {
              [1, 2, 3].map(number => {
                return (
                  <li>
                    <CircledContent>{number}</CircledContent>
                    <div style={{
                      paddingTop: '0.5em',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '1.5rem',
                      lineHeight: '2rem',
                      color: '#494646',
                    }}>
                      Open a bank account
                    </div>
                  </li>
                )
              })
            }
          </SiteColumns>
          <ListItems items={[
            <span>You can request to have your physical card delivered to your home</span>,
            <span>Market exchange rates</span>,
            <span>No hidden costs</span>,
          ]}/>
        </SiteBanner>
        <SiteBanner inverted={true}
                    backgroundColor="#FDEDDE"
                    imageAttributes={{
                      imgSrc: 'https://mymonty.netlify.app/cards.29fc9237.png',
                      style: {
                        width: '40%',
                        selfAlign: 'end',
                      },
                    }}>
          <div className="site-banner__content__title">We believe in equal opportunity & banking accessibility for all
          </div>
          <IconsList title="Our values define who we are:" columns={2} items={[
            <IconItem icon={<IntegrityIcon/>}>Integrity</IconItem>,
            <IconItem icon={<HonestyIcon/>}>Honesty</IconItem>,
            <IconItem icon={<TeamWorkIcon/>}>Teamwork</IconItem>,
            <IconItem icon={<ProfessionalismIcon/>}>Professionalism</IconItem>,
            <IconItem icon={<ExcellenceIcon/>}>Excellence</IconItem>,
            <IconItem icon={<EcoFriendlinessIcon/>}>Eco-Friendliness</IconItem>,
            <IconItem icon={<CommitmentIcon/>}>Commitment</IconItem>,
          ]}/>
        </SiteBanner>
      </SiteContainer>
      <SiteContainer>
        <SiteBanner imageAttributes={{
          imgSrc: 'https://mymonty.netlify.app/globe.c424cd35.svg',
          style: {},
        }}>
          <div className="site-banner__content__title">MyMonty connect you to the financial world</div>
          <SiteColumns columns={3} containerTag="ul">
            {
              [1, 2, 3].map(number => {
                return (
                  <li>
                    <CircledContent>{number}</CircledContent>
                    <div style={{
                      paddingTop: '0.5em',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '1.5rem',
                      lineHeight: '2rem',
                      color: '#494646',
                    }}>
                      Open a bank account
                    </div>
                  </li>
                )
              })
            }
          </SiteColumns>
          <ListItems items={[
            <span>You can request to have your physical card delivered to your home</span>,
            <span>Market exchange rates</span>,
            <span>No hidden costs</span>,
          ]}/>
        </SiteBanner>
        <SiteBanner inverted={true}
                    backgroundColor="#FDEDDE"
                    imageAttributes={{
                      imgSrc: 'https://mymonty.netlify.app/cards.29fc9237.png',
                      style: {
                        width: '40%',
                        selfAlign: 'end',
                      },
                    }}>
          <div className="site-banner__content__title">We believe in equal opportunity & banking accessibility for all
          </div>
          <IconsList title="Our values define who we are:" columns={2} items={[
            <IconItem icon={<IntegrityIcon/>}>Integrity</IconItem>,
            <IconItem icon={<HonestyIcon/>}>Honesty</IconItem>,
            <IconItem icon={<TeamWorkIcon/>}>Teamwork</IconItem>,
            <IconItem icon={<ProfessionalismIcon/>}>Professionalism</IconItem>,
            <IconItem icon={<ExcellenceIcon/>}>Excellence</IconItem>,
            <IconItem icon={<EcoFriendlinessIcon/>}>Eco-Friendliness</IconItem>,
            <IconItem icon={<CommitmentIcon/>}>Commitment</IconItem>,
          ]}/>
        </SiteBanner>
      </SiteContainer>
      <SiteContainer>
        <ContactForm title="Submit your CV"
                     firstName={{
                       label: 'First Name',
                       placeholder: '',
                     }}
                     lastName={{
                       label: 'Last Name',
                       placeholder: '',
                     }}
                     emailAddress={{
                       label: 'Email Address',
                       placeholder: '',
                     }}
                     position={{
                       placeholder: '',
                       label: 'Position Applying For',
                     }}
                     additionalInformation={{
                       placeholder: '',
                       label: 'Additional Information',
                     }}
                     cvUpload={{
                       label: 'Upload your CV',
                     }}
                     submitButton={{
                       label: 'Submit',
                     }}
        />
      </SiteContainer>
    </DefaultLayout>
  )
}
