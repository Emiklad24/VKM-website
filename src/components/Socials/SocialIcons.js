import React from 'react'
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { BsMedium } from "react-icons/bs";
import { SiDevdotto, SiOrcid, SiGitlab } from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";



const SocialIcons = ({teamMateData, paint}) => {
    const SocialMediaIcon = {
    
        linkedin: <IoLogoLinkedin color={paint} size="33"/>,
        facebook: <IoLogoFacebook color={paint} size="33"/>,
        gitlab: <SiGitlab color={paint} size="33"/>,
        "dev.to": <SiDevdotto color={paint} size="33"/>,
        orcid: <SiOrcid color={paint} size="33"/>,
        twitter: <FaTwitter color={paint} size="33"/>,
        github: <VscGithubInverted color={paint} size="33"/>,
        website: <BsGlobe color={paint} size="33"/>,
        medium: <BsMedium color="#558830" size="33"/>,
        
      
        }
  return (
    <div className="mt-8 py-4 flex justify-evenly w-max">
    {
      teamMateData?.profile_informations?.map((socialLink) => {
        return (
          <a
            key={socialLink.id}
            href={socialLink.Value}
            target="_blank"
            rel="noopener noreferrer"
            className='mr-8'
          >
            {SocialMediaIcon[socialLink.type_of_profile_information || "unknown"]}
            
            
          </a>
        );
      })
    }

  </div>
  )
}

export default SocialIcons