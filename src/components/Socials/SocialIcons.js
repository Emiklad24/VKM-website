import React from 'react'
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { BsMedium } from "react-icons/bs";
import { SiDevdotto, SiOrcid, SiGitlab } from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";



const SocialIcons = ({teamMateData, paint, size}) => {
    const SocialMediaIcon = {
    
        linkedin: <IoLogoLinkedin color={paint} size={size}/>,
        facebook: <IoLogoFacebook color={paint} size={size}/>,
        gitlab: <SiGitlab color={paint} size={size}/>,
        "dev.to": <SiDevdotto color={paint} size={size}/>,
        orcid: <SiOrcid color={paint} size={size}/>,
        twitter: <FaTwitter color={paint} size={size}/>,
        github: <VscGithubInverted color={paint} size={size}/>,
        website: <BsGlobe color={paint} size={size}/>,
        medium: <BsMedium color="#558830" size={size}/>,
        
      
        }
  return (
    <div className="mt-8 py-4 flex flex-wrap justify-evenly w-max">
    {
      teamMateData?.profile_informations?.map((socialLink) => {
        return (
          <a
            key={socialLink.id}
            href={socialLink.Value}
            target="_blank"
            rel="noopener noreferrer"
            className='mr-4 '
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